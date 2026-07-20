import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export type ServiceExtra = {
  heading: string;
  paragraphs?: string[];
  callout?: string;
  image?: string;
};

type Props = {
  title: string;
  heroImage?: string;
  tagline: string;
  introParagraphs: string[];
  introImage: string;
  whatWeDo: string;
  featureHeading: string;
  featureParagraphs: string[];
  featureImage: string;
  extra?: ServiceExtra;
  galleryLabel: string;
  galleryImages: string[];
};

export default function ServicePage(p: Props) {
  return (
    <>
      <PageHero title={p.title} image={p.heroImage} crumb="Services" />

      {/* Intro: text | image */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">TradeWise Renovations</p>
            <h2 className="mt-3 text-4xl leading-tight text-navy md:text-5xl">
              {p.tagline}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
              {p.introParagraphs.map((t) => (
                <p key={t.slice(0, 30)}>{t}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-consultation"
                className="rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border-2 border-navy px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy transition hover:bg-navy hover:text-white"
              >
                See Our Work
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div className="relative h-96 overflow-hidden rounded-3xl lg:h-[520px]">
                <Image
                  src={p.introImage}
                  alt={p.tagline}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-8 rounded-2xl bg-brand px-6 py-4 text-white shadow-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                  Fixed Price Quotes
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature: image | text + What We Do callout */}
      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
          <Reveal>
            <div className="relative order-2 h-96 overflow-hidden rounded-3xl lg:order-1 lg:h-[520px]">
              <Image
                src={p.featureImage}
                alt={p.featureHeading}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <h2 className="text-3xl leading-tight text-navy md:text-4xl">
              {p.featureHeading}
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-gray-600">
              {p.featureParagraphs.map((t) => (
                <p key={t.slice(0, 30)}>{t}</p>
              ))}
            </div>
            <div className="mt-7 rounded-2xl border-l-4 border-brand bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
                What We Do
              </p>
              <p className="mt-2 font-medium leading-relaxed text-deepteal">
                {p.whatWeDo}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Optional extra section */}
      {p.extra && (
        <section className="py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl leading-tight text-navy md:text-4xl">
                {p.extra.heading}
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-gray-600">
                {p.extra.paragraphs?.map((t) => (
                  <p key={t.slice(0, 30)}>{t}</p>
                ))}
              </div>
              {p.extra.callout && (
                <p className="mt-7 rounded-2xl border-l-4 border-teal bg-cream p-6 font-medium leading-relaxed text-deepteal">
                  {p.extra.callout}
                </p>
              )}
            </Reveal>
            {p.extra.image && (
              <Reveal delay={120}>
                <div className="relative h-96 overflow-hidden rounded-3xl lg:h-[480px]">
                  <Image
                    src={p.extra.image}
                    alt={p.extra.heading}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      <Process />

      {/* Gallery — exact images from the original page */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="eyebrow">{p.galleryLabel}</p>
              <h2 className="mt-3 text-4xl text-navy md:text-5xl">
                Examples Of Our Work
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/gallery"
                className="text-sm font-bold uppercase tracking-wider text-brand underline-offset-8 transition hover:underline"
              >
                Full Gallery →
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {p.galleryImages.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 80}>
                <div className="group relative h-56 overflow-hidden rounded-2xl md:h-80">
                  <Image
                    src={src}
                    alt={`${p.title} — example ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 text-center">
              <Link
                href="/gallery"
                className="inline-block rounded-full bg-brand px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Our Gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
