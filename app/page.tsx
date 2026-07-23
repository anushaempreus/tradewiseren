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
          {/* 2×2 image cards with title only, as on the original site */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.href} delay={i * 90}>
                <Link
                  href={s.href}
                  className="group relative block aspect-[3/2] overflow-hidden rounded-xl bg-navy"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-2xl font-medium text-white">{s.title}</h3>
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
