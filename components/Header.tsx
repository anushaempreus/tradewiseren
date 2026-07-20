"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, PHONE, PHONE_HREF, EMAIL, FACEBOOK, INSTAGRAM } from "@/lib/data";

export default function Header() {
  const [drawer, setDrawer] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [drawerSub, setDrawerSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route change: close everything
  useEffect(() => {
    setDrawer(false);
    setOpenSub(null);
    setDrawerSub(null);
  }, [pathname]);

  // Close dropdown on outside click / Escape
  useEffect(() => {
    if (!openSub) return;
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenSub(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSub(null);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openSub]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const isActive = (item: (typeof NAV)[number]) =>
    item.href === pathname ||
    item.children?.some((c) => c.href === pathname) ||
    false;

  return (
    <>
      {/* Utility bar — scrolls away */}
      <div className="hidden bg-navy text-xs text-gray-300 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <p className="tracking-wide">
            Family owned &amp; operated — renovating Canberra homes for over 30 years
          </p>
          <div className="flex items-center gap-5">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 font-heading text-sm text-white transition hover:text-brand"
            >
              <svg className="h-3.5 w-3.5 fill-brand" viewBox="0 0 24 24" aria-hidden>
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 00-1.02.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.59l2.2-2.2a1 1 0 00.25-1.01A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1z" />
              </svg>
              {PHONE}
            </a>
            <span className="h-3 w-px bg-white/20" aria-hidden />
            <a href={`mailto:${EMAIL}`} className="transition hover:text-brand">
              {EMAIL}
            </a>
            <span className="h-3 w-px bg-white/20" aria-hidden />
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand">
              Facebook
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main bar — sticky, shrinks on scroll */}
      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-all duration-300 ${
          scrolled ? "border-line shadow-lg shadow-navy/5" : "border-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 ${
            scrolled ? "py-2" : "py-4"
          }`}
        >
          <Link href="/" className="shrink-0" aria-label="TradeWise Renovations home">
            <Image
              src="/images/2023/11/NEW-Logo-High-Res.png"
              alt="TradeWise Renovations"
              width={170}
              height={62}
              priority
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-10" : "h-12 md:h-14"
              }`}
            />
          </Link>

          {/* Desktop nav — flex-1 + justify-evenly spreads links across all free space */}
          <nav
            ref={navRef}
            className="hidden flex-1 items-center justify-evenly px-2 lg:flex xl:px-8"
            aria-label="Main"
          >
            {NAV.map((item) => {
              const active = isActive(item);
              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={`group relative px-2 py-2 text-[13px] font-bold uppercase tracking-[0.1em] transition hover:text-brand ${
                      active ? "text-brand" : "text-navy"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-2 -bottom-0.5 h-0.5 origin-left rounded bg-brand transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      aria-hidden
                    />
                  </Link>
                );
              }
              const open = openSub === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenSub(item.label)}
                  onMouseLeave={() => setOpenSub((s) => (s === item.label ? null : s))}
                >
                  <button
                    onClick={() => setOpenSub(open ? null : item.label)}
                    aria-expanded={open}
                    aria-haspopup="true"
                    className={`flex items-center gap-1.5 px-2 py-2 text-[13px] font-bold uppercase tracking-[0.1em] transition hover:text-brand ${
                      active || open ? "text-brand" : "text-navy"
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`h-2.5 w-2.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div
                    className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2 transition-all duration-200 ${
                      open ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-2xl shadow-navy/10">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition hover:bg-brand-light hover:text-brand-dark ${
                            pathname === c.href ? "bg-brand-light text-brand-dark" : "text-ink"
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/request-consultation"
              className="hidden rounded-full bg-brand px-5 py-2.5 text-[12px] font-bold uppercase tracking-wide text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg lg:block xl:px-6 xl:py-3 xl:text-[12.5px]"
            >
              Free Consultation
            </Link>

            {/* Mobile toggle */}
            <button
              className="rounded-xl border border-line p-2.5 transition hover:border-brand hover:bg-brand-light lg:hidden"
              aria-label="Open menu"
              aria-expanded={drawer}
              onClick={() => setDrawer(true)}
            >
              <svg className="h-6 w-6 text-navy" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[90] transition ${drawer ? "visible" : "invisible"} lg:hidden`}
        aria-hidden={!drawer}
      >
        <div
          className={`absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity duration-300 ${
            drawer ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setDrawer(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col bg-white shadow-2xl transition-transform duration-300 ${
            drawer ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Image
              src="/images/2023/11/NEW-Logo-High-Res.png"
              alt="TradeWise Renovations"
              width={140}
              height={51}
              className="h-10 w-auto"
            />
            <button
              onClick={() => setDrawer(false)}
              aria-label="Close menu"
              className="rounded-xl border border-line p-2 transition hover:border-brand hover:bg-brand-light"
            >
              <svg className="h-5 w-5 text-navy" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-line/70">
                  <button
                    className="flex w-full items-center justify-between py-3.5 text-sm font-bold uppercase tracking-wider text-navy"
                    onClick={() => setDrawerSub(drawerSub === item.label ? null : item.label)}
                    aria-expanded={drawerSub === item.label}
                  >
                    {item.label}
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-lg transition ${
                        drawerSub === item.label ? "rotate-45 bg-brand text-white" : "bg-cream text-brand"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      drawerSub === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-3 pl-3">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className={`block rounded-lg px-3 py-2.5 text-sm transition ${
                              pathname === c.href
                                ? "bg-brand-light font-semibold text-brand-dark"
                                : "text-gray-700 hover:bg-cream"
                            }`}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`block border-b border-line/70 py-3.5 text-sm font-bold uppercase tracking-wider ${
                    pathname === item.href ? "text-brand" : "text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="space-y-3 border-t border-line bg-cream px-5 py-5">
            <a href={PHONE_HREF} className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand" aria-hidden>
                <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 00-1.02.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.59l2.2-2.2a1 1 0 00.25-1.01A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1z" />
                </svg>
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
                  Call us today
                </span>
                <span className="font-heading text-xl text-navy">{PHONE}</span>
              </span>
            </a>
            <Link
              href="/request-consultation"
              className="block rounded-full bg-brand px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-dark"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
