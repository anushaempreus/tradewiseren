import Link from "next/link";
import Image from "next/image";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  ABN,
  FACEBOOK,
  INSTAGRAM,
} from "@/lib/data";

const SERVICES = [
  { label: "Bathroom Renovations", href: "/bathroom-renovations" },
  { label: "Kitchen Renovations", href: "/service/kitchen-renovations" },
  { label: "Interior Renovations", href: "/service/interior-renovations" },
  { label: "Home Renovations Canberra", href: "/service/home-renovations" },
  { label: "Kitchen Design Canberra", href: "/kitchen-design-canberra" },
  { label: "Interior Designer Canberra", href: "/interior-designer-canberra" },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Consultation", href: "/request-consultation" },
  { label: "Promotions", href: "/promotions" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-10">
          <div>
            <p className="font-heading text-2xl text-white md:text-3xl">
              Ready to start your renovation?
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Free onsite consultation, fixed price quote, no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-brand px-7 py-3.5 font-heading text-xl text-white transition hover:bg-brand-dark"
            >
              {PHONE}
            </a>
            <Link
              href="/request-consultation"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:border-brand hover:text-brand"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src="/images/2023/11/white-logo-trade.png"
            alt="TradeWise Renovations"
            width={180}
            height={66}
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-400">
            At TradeWise Renovations we are committed to taking the headache
            away from renovating your home. Part of the TradeWise Services
            Group.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-brand hover:bg-brand"
            >
              <svg className="h-4 w-4 fill-white" viewBox="0 0 320 512" aria-hidden>
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-brand hover:bg-brand"
            >
              <svg className="h-4 w-4 fill-white" viewBox="0 0 448 512" aria-hidden>
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>

        <nav aria-label="Services">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Services
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.href + s.label}>
                <Link
                  href={s.href}
                  className="inline-block transition-all duration-200 hover:translate-x-1.5 hover:text-brand"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Quick links">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block transition-all duration-200 hover:translate-x-1.5 hover:text-brand"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Contact Us
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={PHONE_HREF} className="font-heading text-2xl text-white transition hover:text-brand">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="transition hover:text-brand">
                {EMAIL}
              </a>
            </li>
            <li className="text-gray-400">{ADDRESS}</li>
            <li className="text-gray-400">ABN – {ABN}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        <p>
          Copyright © {new Date().getFullYear()} TradeWise Renovations. ABN {ABN}
        </p>
        <p className="mt-1">Managed by Empreus IT Support.</p>
      </div>
    </footer>
  );
}
