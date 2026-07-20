import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ValueProps from "@/components/ValueProps";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TradeWise Renovations is a friendly, family-owned business delivering complete home renovation services across the Canberra region, led by directors Adenn and Angelo.",
  alternates: { canonical: "/about-us" },
};

const STAGES = [
  {
    title: "Consultation",
    text: "We offer a free onsite consultation to discuss your project in depth. We can then provide a fixed price quote and approximate time frame for completion.",
  },
  {
    title: "Demolition",
    text: "We collaborate with leading suppliers to orchestrate every component of your renovation before demolishing the old to make space for the new.",
  },
  {
    title: "Renovation",
    text: "Your renovation will be completed to the highest standard by our team of experienced and licensed tradespeople, ready for you to enjoy.",
  },
];

export default function AboutUs() {
  return (
    <>
      <PageHero title="About Us" image="/images/2024/02/4-min.jpg" />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 text-4xl leading-tight text-navy md:text-5xl">
              Family owned, Canberra grown
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-gray-600">
              <p>
                TradeWise Renovations is a friendly, family-owned and operated
                business delivering complete home renovation services across
                the Canberra region. As part of the TradeWise Services Group,
                we&rsquo;re backed by a trusted local network built on quality
                workmanship, integrity, and long-standing industry experience.
              </p>
              <p>
                Led by directors Adenn and Angelo, who bring over 30 years of
                combined experience in the construction and renovation
                industry, we offer practical insight and proven expertise on
                every project. We take the time to understand how you live in
                your space, working closely with you to align every detail
                with your needs, lifestyle, and vision. The result is
                thoughtful, well executed renovations that not only look great
                but function seamlessly day to day.
              </p>
              <p>
                Our team guides you through the entire renovation journey,
                from initial design and planning through to construction and
                final completion. We manage every stage with care and
                attention, coordinating timelines, trades, and materials to
                ensure a smooth, well organised, and stress-free experience.
              </p>
              <p>
                We also coordinate a trusted network of licensed and skilled
                tradespeople who share our commitment to quality and
                professionalism. Many of these relationships have been built
                over years of working together, giving you confidence in the
                consistency and standard of workmanship delivered on every
                project.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              {/* Natural 3:2 aspect — never crop the team out of the photo */}
              <Image
                src="/images/2026/05/3627_Tradewise_109-3.jpg"
                alt="Completed TradeWise kitchen renovation"
                width={2048}
                height={1365}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-3xl"
              />
              <div className="relative mt-4">
                <Image
                  src="/images/2024/02/IMG_7003-1620x1080-1-1.jpg"
                  alt="Completed TradeWise living area renovation"
                  width={1620}
                  height={1080}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full rounded-3xl"
                />
              </div>
              {/* bottom corner placement keeps the badge clear of faces */}
              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-brand px-6 py-5 text-white shadow-xl md:block">
                <p className="font-heading text-4xl">30+</p>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow eyebrow--center justify-center">
                How It Works
              </p>
              <h2 className="mt-3 text-4xl text-navy md:text-5xl">
                Three stages, zero headaches
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {STAGES.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="group h-full rounded-3xl bg-white p-9 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="font-heading text-6xl text-brand/20 transition group-hover:text-brand/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-2xl text-navy">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <Image
          src="/images/2026/05/3635_Tradewise_001-1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/93" />
        <div className="relative">
          <div className="pb-12 text-center">
            <Reveal>
              <p className="eyebrow eyebrow--center justify-center">
                Our Difference
              </p>
              <h2 className="mt-3 text-4xl text-navy md:text-5xl">
                Why Choose TradeWise Renovations?
              </h2>
            </Reveal>
          </div>
          <ValueProps />
        </div>
      </section>

      <CtaBand
        heading="Want to know more, get a quote or book a free consultation?"
        background="/images/2024/02/IMG_7003-1620x1080-1-1.jpg"
      />
    </>
  );
}
