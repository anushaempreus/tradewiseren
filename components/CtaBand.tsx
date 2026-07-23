import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PHONE, PHONE_HREF } from "@/lib/data";

export default function CtaBand({
  heading = "Experience The Difference",
  showOffers = false,
  background = "/images/2023/11/shutterstock_2289662683-1.jpg",
}: {
  heading?: string;
  showOffers?: boolean;
  background?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 text-center text-white">
      <Image src={background} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative mx-auto max-w-3xl px-4">
        <Reveal>
          {/* Original hierarchy: message as the small line, "Call Us Today" large */}
          <p className="font-heading text-xl text-white/90 md:text-2xl">{heading}</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-6xl">Call Us Today</h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="btn-sheen rounded-full bg-brand px-9 py-4 font-heading text-2xl text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-dark active:scale-95"
            >
              {PHONE}
            </a>
            <Link
              href="/contact-us"
              className="rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold uppercase tracking-wider transition hover:border-white hover:bg-white hover:text-navy active:scale-95"
            >
              Contact Us
            </Link>
            {showOffers && (
              <Link
                href="/promotions"
                className="rounded-full border-2 border-brand px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand transition hover:bg-brand hover:text-white active:scale-95"
              >
                Unlock Offers
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
