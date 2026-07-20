"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const prev = useCallback(
    () => setOpen((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpen((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpen(i)}
            className="group relative block h-52 overflow-hidden rounded-lg md:h-72"
            aria-label={`View photo ${i + 1} of ${title}`}
          >
            <Image
              src={src}
              alt={`${title} — photo ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="overlay-in fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute right-5 top-5 text-4xl text-white/80 hover:text-white"
            aria-label="Close"
          >
            ×
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-brand md:left-8"
            aria-label="Previous photo"
          >
            ←
          </button>
          <div
            className="zoom-in relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={images[open]}
              src={images[open]}
              alt={`${title} — photo ${open + 1}`}
              fill
              sizes="100vw"
              className="zoom-in object-contain"
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-brand md:right-8"
            aria-label="Next photo"
          >
            →
          </button>
          <p className="absolute bottom-5 text-sm text-white/70">
            {open + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
