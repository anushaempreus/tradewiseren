"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-reveal wrapper (fade-up on first view), as progressive enhancement:
 * content is visible by default (SSR/no-JS/bots see everything); the hidden
 * state is only applied client-side, with a safety timeout so nothing can
 * ever stay invisible.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.visibilityState === "hidden"
    ) {
      return; // leave content visible, no animation
    }

    el.classList.add("reveal-init");
    const show = () => el.classList.add("is-visible");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    // Failsafe: never leave content hidden (backgrounded tabs, odd engines)
    const t = setTimeout(show, 2500);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
