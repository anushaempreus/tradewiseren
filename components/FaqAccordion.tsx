"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {FAQS.map((f, i) => (
        <div
          key={f.q}
          className={`overflow-hidden rounded-2xl border transition ${
            open === i ? "border-brand/40 shadow-lg" : "border-line"
          }`}
        >
          <button
            className="flex w-full items-center justify-between gap-4 bg-white px-7 py-5 text-left"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            <span className="flex items-center gap-4">
              <span
                className={`font-heading text-2xl ${
                  open === i ? "text-brand" : "text-gray-300"
                }`}
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-heading text-lg text-navy">{f.q}</span>
            </span>
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl transition ${
                open === i
                  ? "rotate-45 bg-brand text-white"
                  : "bg-cream text-navy"
              }`}
              aria-hidden
            >
              +
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="border-t border-line/60 bg-cream/50 px-7 py-6 pl-[4.5rem] leading-relaxed text-gray-700">
                {f.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
