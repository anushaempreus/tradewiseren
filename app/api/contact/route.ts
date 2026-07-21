import { NextResponse } from "next/server";
import { rateLimited, clientIp } from "@/lib/rate-limit";

// Sends enquiries into the client's Microsoft 365 mailbox via the Graph API
// (their mail lives on Exchange Online — independent of WordPress/WPEngine).
// Required env vars (from the M365 tenant, via an app registration with
// Mail.Send application permission):
//   M365_TENANT_ID, M365_CLIENT_ID, M365_CLIENT_SECRET,
//   M365_SENDER            e.g. website@tradewiserenovations.com (sending mailbox)
//   CONTACT_RECIPIENT      defaults to info@tradewiserenovations.com
// Without credentials configured, enquiries are logged server-side only.

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;
const SERVICES = new Set(["Kitchen", "Bathroom", "Whole House", "Other"]);

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

async function sendViaGraph(fields: {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}): Promise<"sent" | "skipped" | "failed"> {
  const { M365_TENANT_ID, M365_CLIENT_ID, M365_CLIENT_SECRET, M365_SENDER } =
    process.env;
  const recipient =
    process.env.CONTACT_RECIPIENT ?? "info@tradewiserenovations.com";
  if (!M365_TENANT_ID || !M365_CLIENT_ID || !M365_CLIENT_SECRET || !M365_SENDER)
    return "skipped";

  const tokenRes = await fetch(
    `https://login.microsoftonline.com/${M365_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: M365_CLIENT_ID,
        client_secret: M365_CLIENT_SECRET,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    }
  );
  if (!tokenRes.ok) return "failed";
  const { access_token } = await tokenRes.json();

  const html = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${esc(fields.name)}</p>
    <p><strong>Phone:</strong> ${esc(fields.phone)}</p>
    <p><strong>Email:</strong> ${esc(fields.email)}</p>
    <p><strong>Service:</strong> ${esc(fields.service)}</p>
    <p><strong>Message:</strong></p>
    <p>${esc(fields.message).replace(/\n/g, "<br/>")}</p>`;

  const sendRes = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(M365_SENDER)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject: `Website enquiry — ${fields.service} (${fields.name})`,
          body: { contentType: "HTML", content: html },
          toRecipients: [{ emailAddress: { address: recipient } }],
          replyTo: [{ emailAddress: { address: fields.email } }],
        },
        saveToSentItems: true,
      }),
    }
  );
  return sendRes.ok ? "sent" : "failed";
}

export async function POST(req: Request) {
  if (rateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: "Too many requests — please try again later." },
      { status: 429 }
    );
  }

  const data = await req.json().catch(() => null);
  if (!data || typeof data !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success.
  if (typeof data.company === "string" && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const email = String(data.email ?? "").trim();
  const service = String(data.service ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (
    !name ||
    name.length > 100 ||
    !phone ||
    phone.length > 30 ||
    !/^[\d\s()+-]{6,30}$/.test(phone) ||
    !EMAIL_RE.test(email) ||
    !SERVICES.has(service) ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Please check the required fields and try again." },
      { status: 400 }
    );
  }

  const fields = { name, phone, email, service, message };
  let outcome: string;
  try {
    outcome = await sendViaGraph(fields);
  } catch {
    outcome = "failed";
  }
  console.log(`[contact enquiry] outcome=${outcome}`, JSON.stringify(fields));

  if (outcome === "failed") {
    return NextResponse.json(
      { error: "We couldn't send your enquiry — please call 02 5112 2969." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
