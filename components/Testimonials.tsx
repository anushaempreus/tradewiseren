"use client";

import { useCallback, useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () =>
      setPerView(window.innerWidth < 768 ? 1 : window.innerWidth < 1152 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const max = Math.max(0, TESTIMONIALS.length - perView);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? max : i - 1)), [max]);
  const next = useCallback(() => setIndex((i) => (i >= max ? 0 : i + 1)), [max]);

  useEffect(() => {
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white">
      <div className="pointer-events-none absolute right-8 top-6 select-none font-heading text-[180px] leading-none text-white/5" aria-hidden>
        &ldquo;
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Hear From Our Valued Clients</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Testimonials</h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-lg transition hover:border-brand hover:bg-brand"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-lg transition hover:border-brand hover:bg-brand"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${(index * 100) / perView}%)` }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur transition hover:border-brand/40">
                  <div className="flex gap-1 text-brand" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden>
                        <path d="M10 1l2.6 5.7 6.2.7-4.6 4.2 1.2 6.1L10 14.7l-5.4 3 1.2-6.1L1.2 7.4l6.2-.7z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-300">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand font-heading text-lg text-white" aria-hidden>
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-heading text-lg text-white">{t.name}</p>
                      <p className="text-xs uppercase tracking-widest text-brand">
                        Verified Client
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
