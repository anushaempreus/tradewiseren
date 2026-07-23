"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import { PHONE, PHONE_HREF } from "@/lib/data";

// Original-site style hero: full-bleed slider behind "Welcome to TradeWise".
// When the client supplies a video, drop it at public/videos/hero.mp4 and set
// HERO_VIDEO — it plays behind the banner instead of the slides.
const HERO_VIDEO: string | null = null; // e.g. "/videos/hero.mp4"

const SLIDES = [
  "/images/2023/11/shutterstock_2255055215-1.jpg",
  "/images/2023/11/shutterstock_2159188569-1.jpg",
  "/images/2023/11/shutterstock_788236681-1.jpg",
];

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (HERO_VIDEO) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-navy">
      {HERO_VIDEO ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          poster={SLIDES[0]}
        />
      ) : (
        SLIDES.map((src, i) => (
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
        ))
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/25" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-28">
        <p className="eyebrow rise !text-brand">Welcome To</p>
        <AnimatedHeadline
          className="mt-4 max-w-3xl text-5xl leading-[1.08] text-white md:text-7xl"
          segments={[
            { text: "Tradewise" },
            { text: "Renovations", breakBefore: true },
          ]}
        />
        <div className="rise rise-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href={PHONE_HREF}
            className="btn-sheen rounded-full bg-brand px-8 py-4 font-heading text-2xl text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-dark active:scale-95"
          >
            {PHONE}
          </a>
          <Link
            href="/contact-us"
            className="rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:border-white hover:bg-white hover:text-navy active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        {!HERO_VIDEO && (
          <div className="rise rise-4 mt-12 flex gap-2.5">
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
          </div>
        )}
      </div>
    </section>
  );
}
