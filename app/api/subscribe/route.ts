import { NextResponse } from "next/server";
import { rateLimited, clientIp } from "@/lib/rate-limit";

// Adds newsletter signups straight to the client's MailerLite audience
// (account 1924740) — independent of WordPress/WPEngine.
// Required env vars:
//   MAILERLITE_API_KEY     from MailerLite → Integrations → API
//   MAILERLITE_GROUP_ID    optional — target group for website signups
// Without a key configured, signups are logged server-side only.

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  if (rateLimited(`sub:${clientIp(req)}`)) {
    return NextResponse.json(
      { error: "Too many requests — please try again later." },
      { status: 429 }
    );
  }

  const data = await req.json().catch(() => null);
  const email = String(data?.email ?? "").trim();
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Honeypot
  if (typeof data?.company === "string" && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const key = process.env.MAILERLITE_API_KEY;
  if (!key) {
    console.log("[newsletter signup] (no MailerLite key configured)", email);
    return NextResponse.json({ ok: true });
  }

  try {
    const body: { email: string; groups?: string[] } = { email };
    if (process.env.MAILERLITE_GROUP_ID)
      body.groups = [process.env.MAILERLITE_GROUP_ID];
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok && res.status !== 409) {
      console.error("[newsletter signup] MailerLite error", res.status);
      return NextResponse.json(
        { error: "Subscription failed — please try again later." },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Subscription failed — please try again later." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
