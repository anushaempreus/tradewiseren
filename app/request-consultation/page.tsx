import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ConsultForm from "@/components/ConsultForm";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Book a free onsite consultation with TradeWise Renovations — fixed price quotes for kitchen, bathroom and whole-home renovations in Canberra.",
  alternates: { canonical: "/request-consultation" },
};

export default function RequestConsultation() {
  return (
    <>
      <PageHero title="Consultation" image="/images/2026/02/TW2458-11.jpg" />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Free &amp; No Obligation</p>
            <h2 className="mt-3 text-4xl leading-tight text-navy md:text-5xl">
              Let&rsquo;s talk about your renovation
            </h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              Submit our online form to request a consultation or for general
              questions about Tradewise Renovations. We&rsquo;ll come to you,
              see the space, and provide a fixed price quote with an
              approximate time frame. We look forward to hearing from you!
            </p>
            <div className="mt-8 space-y-4">
              <a href={PHONE_HREF} className="flex items-center gap-4 rounded-2xl border border-line p-5 transition hover:border-brand/50 hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light" aria-hidden>
                  <svg className="h-5 w-5 fill-brand" viewBox="0 0 24 24">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 00-1.02.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.59l2.2-2.2a1 1 0 00.25-1.01A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                    Prefer to talk?
                  </span>
                  <span className="font-heading text-xl text-navy">{PHONE}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-2xl border border-line p-5 transition hover:border-brand/50 hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light" aria-hidden>
                  <svg className="h-5 w-5 fill-brand" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                    Email us
                  </span>
                  <span className="font-heading text-lg text-navy">{EMAIL}</span>
                </span>
              </a>
              <div className="relative mt-6 hidden h-64 overflow-hidden rounded-3xl lg:block">
                <Image
                  src="/images/2026/02/TW2458-11.jpg"
                  alt="A recent TradeWise renovation"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-line bg-cream p-8 md:p-10">
              <h3 className="text-2xl text-navy">Consultation Form</h3>
              <p className="mt-2 text-sm text-gray-600">
                Fields marked * are required.
              </p>
              <div className="mt-7">
                <ConsultForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Testimonials />
      <CtaBand />
    </>
  );
}
