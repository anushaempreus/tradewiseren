"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import { PHONE, PHONE_HREF } from "@/lib/data";

const SLIDES = [
  "/images/2023/11/shutterstock_2255055215-1.jpg",
  "/images/2023/11/shutterstock_2159188569-1.jpg",
  "/images/2023/11/shutterstock_788236681-1.jpg",
];

const STATS = [
  { value: "30+", label: "Years Experience" },
  { value: "40+", label: "Projects Showcased" },
  { value: "5★", label: "Client Reviews" },
  { value: "100%", label: "ACT Licensed Trades" },
];

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-navy">
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === slide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === slide ? "kenburns" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy/90 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-16 pt-24">
        <p className="eyebrow rise">Welcome to TradeWise Renovations</p>
        <h1 className="rise rise-1 mt-5 max-w-3xl text-5xl leading-[1.05] text-white md:text-7xl">
          Renovations that feel like{" "}
          <span className="text-brand">home</span>, built to last.
        </h1>
        <p className="rise rise-2 mt-6 max-w-xl text-lg leading-relaxed text-gray-200">
          Complete home renovation services across the Canberra region —
          bathrooms, kitchens and whole-home transformations, managed
          end-to-end by a family-owned team.
        </p>
        <div className="rise rise-3 mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/request-consultation"
            className="btn-sheen rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-dark active:scale-95"
          >
            Book a Free Consultation
          </Link>
          <Link
            href="/gallery"
            className="rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:border-white hover:bg-white hover:text-navy active:scale-95"
          >
            View Our Work
          </Link>
          <a
            href={PHONE_HREF}
            className="ml-1 font-heading text-2xl text-white underline decoration-brand decoration-2 underline-offset-8 transition hover:text-brand"
          >
            {PHONE}
          </a>
        </div>

        {/* Slide dots */}
        <div className="rise rise-4 mt-12 flex items-center gap-2.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === slide ? "w-10 bg-brand" : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
          <span className="ml-4 scroll-hint hidden text-white/60 md:inline-flex" aria-hidden>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/10 bg-navy/60 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="group px-6 py-6 text-center transition hover:bg-white/5">
              <p className="font-heading text-3xl text-brand md:text-4xl">
                <CountUp value={s.value} />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
