import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import Tilt from "@/components/Tilt";
import { PHONE, PHONE_HREF } from "@/lib/data";

const STATS = [
  { value: "30+", label: "Years Experience" },
  { value: "40+", label: "Projects Showcased" },
  { value: "5★", label: "Client Reviews" },
  { value: "100%", label: "ACT Licensed Trades" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-white to-white">
      {/* layered backdrop: dot grid + ambient glows */}
      <div className="bg-dots absolute inset-0 opacity-70" aria-hidden />
      <div className="blob-brand -top-24 right-[8%] h-[30rem] w-[30rem]" aria-hidden />
      <div className="blob-teal -bottom-32 left-[-6%] h-[30rem] w-[30rem]" aria-hidden />
      <div className="blob-brand left-[30%] top-[55%] h-72 w-72 opacity-70" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
        {/* Copy */}
        <div>
          <p className="eyebrow rise">Family Owned · Canberra Region</p>
          <AnimatedHeadline
            className="mt-6 text-5xl leading-[1.08] text-navy md:text-7xl"
            segments={[
              { text: "Renovations that feel like " },
              { text: "home", brand: true },
              { text: ", built to last." },
            ]}
          />
          <p className="rise rise-2 mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
            Bathrooms, kitchens and whole-home transformations across
            Canberra — designed around how you live and managed end-to-end by
            a family-owned team with over 30 years of experience.
          </p>

          <div className="rise rise-3 mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/request-consultation"
              className="btn-sheen rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand/25 transition hover:-translate-y-0.5 hover:bg-brand-dark active:scale-95"
            >
              Book a Free Consultation
            </Link>
            <Link href="/gallery" className="group flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy transition group-hover:border-brand group-hover:bg-brand">
                <svg
                  className="h-4 w-4 text-navy transition group-hover:translate-x-0.5 group-hover:text-white"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path d="M2 8h11M9 3.5L13.5 8 9 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-sm font-bold uppercase tracking-wider text-navy transition group-hover:text-brand">
                View Our Work
              </span>
            </Link>
          </div>

          <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-4">
            <span className="flex gap-1 text-brand" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden>
                  <path d="M10 1l2.6 5.7 6.2.7-4.6 4.2 1.2 6.1L10 14.7l-5.4 3 1.2-6.1L1.2 7.4l6.2-.7z" />
                </svg>
              ))}
            </span>
            <p className="text-sm text-gray-600">
              Rated 5.0 by Canberra homeowners ·{" "}
              <a href={PHONE_HREF} className="font-heading text-base text-navy underline decoration-brand decoration-2 underline-offset-4 transition hover:text-brand">
                {PHONE}
              </a>
            </p>
          </div>
        </div>

        {/* Bento collage — 3D mouse tilt like the official site's slider */}
        <Tilt className="rise rise-2 relative">
          {/* tilted accent panel lifts the collage off the page */}
          <div
            className="absolute -inset-4 -rotate-2 rounded-[2.5rem] bg-gradient-to-br from-brand/15 via-brand/5 to-teal/15"
            aria-hidden
          />
          <div className="relative grid grid-cols-5 grid-rows-6 gap-4" style={{ height: "560px" }}>
            <div className="relative col-span-3 row-span-6 overflow-hidden rounded-[2rem]">
              <Image
                src="/images/2026/04/TW2458-15-scaled.jpg"
                alt="A completed TradeWise kitchen renovation"
                fill
                priority
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 row-span-3 overflow-hidden rounded-[2rem]">
              <Image
                src="/images/2026/02/TW2416-13.jpg"
                alt="A completed TradeWise bathroom renovation"
                fill
                priority
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 row-span-3 flex flex-col justify-between rounded-[2rem] bg-deepteal p-6 text-white">
              <svg className="h-8 w-8 fill-brand" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 3l9 8h-3v9h-4v-6H10v6H6v-9H3l9-8z" />
              </svg>
              <div>
                <p className="font-heading text-4xl">
                  <CountUp value="30+" />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                  Years renovating Canberra homes
                </p>
              </div>
            </div>
          </div>

          {/* Floating glass chip */}
          <div className="floaty absolute -left-6 bottom-10 hidden items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-5 py-4 shadow-xl backdrop-blur md:flex">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/15" aria-hidden>
              <svg className="h-5 w-5 fill-teal" viewBox="0 0 24 24">
                <path d="M12 2L4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm-1.2 14.6l-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4-6.3 6.3z" />
              </svg>
            </span>
            <div>
              <p className="font-heading text-navy">100% ACT Licensed</p>
              <p className="text-xs text-gray-500">Builders &amp; trusted trades</p>
            </div>
          </div>
        </Tilt>
      </div>

      {/* Stats row */}
      <div className="relative border-t border-line">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line px-4 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-7 text-center">
              <p className="font-heading text-3xl text-brand md:text-4xl">
                <CountUp value={s.value} />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
