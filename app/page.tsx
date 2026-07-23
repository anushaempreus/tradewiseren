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

      {/* Value props — original site order and style */}
      <section className="py-16">
        <ValueProps />
      </section>

      {/* Services */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center">
              <h2 className="text-4xl text-brand md:text-5xl">Our Services</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.href} delay={i * 90}>
                <Link
                  href={s.href}
                  className="group relative block h-96 overflow-hidden rounded-xl"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-2xl leading-snug">{s.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
                      Read More
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
      <CtaBand showOffers />
      <Process />
      <Newsletter />
    </>
  );
}
