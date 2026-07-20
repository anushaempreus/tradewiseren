"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  category: string;
  images: string[];
};

const FILTERS = [
  { key: "all", label: "All" },
  { key: "bathroom", label: "Bathroom" },
  { key: "kitchen", label: "Kitchen" },
  { key: "laundry", label: "Laundry" },
  { key: "interior", label: "Interior" },
];

export default function GalleryGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("all");
  const shown =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const count = (key: string) =>
    key === "all"
      ? projects.length
      : projects.filter((p) => p.category === key).length;

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex flex-wrap justify-center gap-2.5">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition ${
              filter === f.key
                ? "bg-brand text-white shadow-md"
                : "border border-line bg-white text-navy hover:border-brand hover:text-brand"
            }`}
          >
            {f.label}
            <span
              className={`ml-2 text-xs ${
                filter === f.key ? "text-white/80" : "text-gray-400"
              }`}
            >
              {count(f.key)}
            </span>
          </button>
        ))}
      </div>

      <div key={filter} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Link
            key={p.slug}
            href={`/${p.slug}`}
            style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
            className={`card-in group relative block overflow-hidden rounded-3xl ${
              i % 5 === 0 ? "sm:row-span-2 h-[420px] sm:h-auto sm:min-h-[560px]" : "h-[320px]"
            }`}
          >
            <Image
              src={p.images[0]}
              alt={p.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 transition group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand">
                {p.category}
              </p>
              <h3 className="mt-1 text-2xl">{p.title}</h3>
              <span className="mt-3 inline-flex translate-y-2 items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/0 transition duration-300 group-hover:translate-y-0 group-hover:text-white">
                View Project
                <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M2 8h11M9 3.5L13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <span className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur" aria-hidden>
              {p.images.length} photos
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
