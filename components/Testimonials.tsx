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
    <section className="bg-dots relative overflow-hidden bg-cream py-24">
      <div className="pointer-events-none absolute right-10 top-2 select-none font-heading text-[200px] leading-none text-brand/10" aria-hidden>
        &ldquo;
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Hear From Our Valued Clients</p>
            <h2 className="mt-4 text-4xl text-navy md:text-5xl">
              Testimonials
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/20 bg-white text-lg text-navy transition hover:border-brand hover:bg-brand hover:text-white"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/20 bg-white text-lg text-navy transition hover:border-brand hover:bg-brand hover:text-white"
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
                className="shrink-0 px-3 py-2"
                style={{ width: `${100 / perView}%` }}
              >
                <figure className="flex h-full flex-col rounded-[1.75rem] bg-white p-7 shadow-lg shadow-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
                  <div className="flex gap-1 text-brand" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden>
                        <path d="M10 1l2.6 5.7 6.2.7-4.6 4.2 1.2 6.1L10 14.7l-5.4 3 1.2-6.1L1.2 7.4l6.2-.7z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-600">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand font-heading text-lg text-white" aria-hidden>
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-heading text-lg text-navy">{t.name}</p>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand">
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
