"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-teal px-6 py-14 text-center text-white md:px-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-deepteal/40" aria-hidden />
            <div className="relative">
              <p className="eyebrow eyebrow--center justify-center !text-white/90">
                Stay In The Loop
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Keep Up To Date With Tradewise Renovations
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85">
                Signup for project updates, special offers, design tips, and
                more! Join a community of homeowners dedicated to quality
                craftsmanship — from behind-the-scenes looks at our latest
                local transformations to exclusive seasonal promotions and
                professional design hacks.
              </p>
              {done ? (
                <p className="mx-auto mt-8 max-w-md rounded-full bg-white/15 px-6 py-3.5 font-semibold">
                  Thanks for subscribing — keep an eye on your inbox!
                </p>
              ) : (
                <form
                  className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.trim()) setDone(true);
                  }}
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 rounded-full bg-white px-6 py-3.5 text-navy outline-none ring-brand focus:ring-2"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-brand px-8 py-3.5 font-bold uppercase tracking-wide transition hover:-translate-y-0.5 hover:bg-brand-dark"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
