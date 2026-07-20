import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { SERVICES, FAQS } from "@/lib/data";
import { faqSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about renovating with TradeWise Renovations — site visits, living arrangements, design changes and more.",
  alternates: { canonical: "/faq" },
};

export default function Faq() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(FAQS))}
      />
      <PageHero title="Frequently Asked Questions" crumb="FAQ" />
      <section className="py-16">
        <div className="px-4">
          <FaqAccordion />
        </div>
      </section>
      <Testimonials />
      <section className="py-16 text-center">
        <h2 className="text-4xl text-brand">Our Services</h2>
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3 px-4">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-full border-2 border-brand px-6 py-2.5 font-semibold text-brand transition hover:bg-brand hover:text-white"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
