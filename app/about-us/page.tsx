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

// Stage icons mirror the live site, which uses n1.png on all three columns.
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
      <PageHero title="About Us" />

      {/* Image left, text right — as on the live site */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
          <Reveal>
            {/* Natural 3:2 aspect — never crop the team out of the photo */}
            <Image
              src="/images/2026/05/3627_Tradewise_109-3.jpg"
              alt="The TradeWise Renovations team"
              width={2048}
              height={1365}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full rounded-xl"
            />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-4xl leading-tight text-brand md:text-[45px]">
              About Us
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
        </div>
      </section>

      {/* Stages — icon above centred heading, as on the live site */}
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 text-center md:grid-cols-3">
          {STAGES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div>
                <Image
                  src="/images/2023/11/n1.png"
                  alt=""
                  width={72}
                  height={72}
                  className="mx-auto h-18 w-18 object-contain"
                />
                <h3 className="mt-4 text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose — small black label, orange heading, icon pods */}
      <section className="py-20 text-center">
        <Reveal>
          <p className="font-heading text-xl text-ink">Our Difference</p>
          <h2 className="mb-12 mt-2 text-4xl text-brand md:text-[45px]">
            Why Choose TradeWise Renovations?
          </h2>
        </Reveal>
        <ValueProps />
      </section>

      <CtaBand
        heading="Want To Know More About Tradewise Renovations, Get a Quote or Book a Free Consultation."
        background="/images/2024/02/IMG_7003-1620x1080-1-1.jpg"
      />
    </>
  );
}
