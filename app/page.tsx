import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Process from "@/components/Process";
import Newsletter from "@/components/Newsletter";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Value props */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 pb-12 text-center">
          <Reveal>
            <p className="eyebrow eyebrow--center justify-center">Our Difference</p>
            <h2 className="mt-3 text-4xl text-navy md:text-5xl">
              Why Canberra Chooses TradeWise
            </h2>
          </Reveal>
        </div>
        <ValueProps />
      </section>

      {/* About preview */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              {/* Natural 3:2 aspect — never crop the team out of the photo */}
              <Image
                src="/images/2026/05/3627_Tradewise_109-3.jpg"
                alt="A completed TradeWise kitchen renovation"
                width={2048}
                height={1365}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-3xl"
              />
              <div className="absolute -bottom-8 -right-4 hidden w-64 overflow-hidden rounded-2xl border-8 border-white shadow-2xl md:block">
                <Image
                  src="/images/2026/05/3635_Tradewise_001-1.jpg"
                  alt="A completed TradeWise bathroom renovation"
                  width={512}
                  height={341}
                  className="h-auto w-full"
                />
              </div>
              <div className="absolute -left-4 top-8 hidden rounded-2xl bg-brand px-6 py-5 text-white shadow-xl md:block">
                <p className="font-heading text-4xl">30+</p>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">About TradeWise Renovations</p>
            <h2 className="mt-3 text-4xl leading-tight text-navy md:text-5xl">
              A family business that treats your home like our own
            </h2>
            <p className="mt-6 leading-relaxed text-gray-600">
              TradeWise Renovations is a friendly, family-owned and operated
              business delivering complete home renovation services across the
              Canberra region. Led by directors Adenn and Angelo, we take the
              time to understand how you live in your space — the result is
              thoughtful, well executed renovations that not only look great
              but function seamlessly day to day.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Free onsite consultation and fixed price quotes",
                "ACT licensed builders and trusted tradespeople",
                "End-to-end project management, design to completion",
                "Backed by the TradeWise Services Group network",
              ].map((li) => (
                <li key={li} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15" aria-hidden>
                    <svg className="h-3 w-3 fill-brand" viewBox="0 0 16 16">
                      <path d="M6.5 12L2 7.5l1.4-1.4 3.1 3.1L12.6 3 14 4.4z" />
                    </svg>
                  </span>
                  {li}
                </li>
              ))}
            </ul>
            <Link
              href="/about-us"
              className="mt-9 inline-block rounded-full bg-navy px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-brand"
            >
              More About Us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="eyebrow">What We Do</p>
              <h2 className="mt-3 text-4xl text-navy md:text-5xl">Our Services</h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/gallery"
                className="text-sm font-bold uppercase tracking-wider text-brand underline-offset-8 transition hover:underline"
              >
                See Our Work →
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.href} delay={i * 90}>
                <Link
                  href={s.href}
                  className="group relative block h-[420px] overflow-hidden rounded-3xl"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent transition group-hover:from-navy" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="mb-3 block h-0.5 w-10 bg-brand transition-all duration-500 group-hover:w-16" aria-hidden />
                    <h3 className="text-2xl leading-snug">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-300">{s.blurb}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
                      Explore
                      <svg className="h-3.5 w-3.5 transition group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path d="M2 8h11M9 3.5L13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Process />
      <CtaBand showOffers />
      <Newsletter />
    </>
  );
}
