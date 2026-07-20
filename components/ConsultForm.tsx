"use client";

import { useState } from "react";

export default function ConsultForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(r.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal/15" aria-hidden>
          <svg className="h-7 w-7 fill-teal" viewBox="0 0 16 16">
            <path d="M6.5 12L2 7.5l1.4-1.4 3.1 3.1L12.6 3 14 4.4z" />
          </svg>
        </span>
        <h3 className="mt-4 text-2xl text-deepteal">Thank you!</h3>
        <p className="mt-2 text-gray-700">
          Your enquiry has been received — we&rsquo;ll be in touch shortly.
        </p>
      </div>
    );
  }

  const input =
    "w-full rounded-xl border border-line bg-white px-5 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/25";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot — hidden from humans, bots fill it in */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <label className="sr-only" htmlFor="cf-name">Your name</label>
      <input id="cf-name" name="name" required maxLength={100} placeholder="Your Name *" className={input} />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sr-only" htmlFor="cf-phone">Your phone</label>
        <input id="cf-phone" name="phone" required maxLength={30} type="tel" placeholder="Your Phone *" className={input} />
        <label className="sr-only" htmlFor="cf-email">Your email</label>
        <input id="cf-email" name="email" required maxLength={200} type="email" placeholder="Your Email *" className={input} />
      </div>
      <label className="sr-only" htmlFor="cf-service">Service</label>
      <select id="cf-service" name="service" defaultValue="" required className={input}>
        <option value="" disabled>
          —Please choose an option—
        </option>
        <option>Kitchen</option>
        <option>Bathroom</option>
        <option>Whole House</option>
        <option>Other</option>
      </select>
      <label className="sr-only" htmlFor="cf-message">Message</label>
      <textarea id="cf-message" name="message" rows={5} maxLength={5000} placeholder="Tell us about your project" className={input} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-brand px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send Enquiry"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong — please call us on 02 5112 2969 instead.
        </p>
      )}
    </form>
  );
}
