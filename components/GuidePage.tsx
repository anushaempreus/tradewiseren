import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { SERVICES, PHONE, PHONE_HREF } from "@/lib/data";

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  cards?: { title: string; text: string }[];
  /** One or two images rendered beside / under the section text */
  images?: string[];
};

function SectionImages({ images, heading }: { images: string[]; heading: string }) {
  if (images.length === 1) {
    return (
      <div className="relative h-80 overflow-hidden rounded-3xl lg:h-[460px]">
        <Image
          src={images[0]}
          alt={heading}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((src, i) => (
        <div
          key={src}
          className={`relative h-64 overflow-hidden rounded-3xl lg:h-96 ${
            i === 1 ? "mt-8" : ""
          }`}
        >
          <Image
            src={src}
            alt={`${heading} — photo ${i + 1}`}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function PhoneStrip() {
  return (
    <Reveal>
      <div className="flex flex-wrap items-center justify-between gap-5 rounded-3xl bg-navy px-8 py-8 text-white md:px-10">
        <div>
          <p className="eyebrow">Free Onsite Consultation</p>
          <p className="mt-2 font-heading text-2xl md:text-3xl">
            Ready to make a wise choice for your home?
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={PHONE_HREF}
            className="rounded-full bg-brand px-7 py-3.5 font-heading text-xl transition hover:bg-brand-dark"
          >
            {PHONE}
          </a>
          <Link
            href="/request-consultation"
            className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition hover:border-white hover:bg-white hover:text-navy"
          >
            Book Online
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export default function GuidePage({
  title,
  heroImage,
  sections,
}: {
  title: string;
  heroImage?: string;
  sections: GuideSection[];
}) {
  let imageSections = 0;

  return (
    <>
      <PageHero title={title} image={heroImage} crumb="Renovation Guides" />

      <article className="py-20">
        <div className="mx-auto max-w-7xl space-y-20 px-4">
          {sections.map((s, si) => {
            const hasImages = !!s.images?.length;
            const imageRight = hasImages && imageSections++ % 2 === 0;

            const text = (
              <>
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-4xl text-brand/25" aria-hidden>
                    {String(si + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-3xl leading-snug text-navy md:text-4xl">
                    {s.heading}
                  </h2>
                </div>
                {s.paragraphs?.map((par, pi) => (
                  <p
                    key={par.slice(0, 40)}
                    className={`mt-5 leading-relaxed ${
                      si === 0 && pi === 0 ? "text-lg text-gray-700" : "text-gray-600"
                    }`}
                  >
                    {par}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.list.map((li) => (
                      <li
                        key={li}
                        className="flex items-center gap-3 rounded-xl bg-cream px-4 py-3 text-gray-700"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15" aria-hidden>
                          <svg className="h-3 w-3 fill-brand" viewBox="0 0 16 16">
                            <path d="M6.5 12L2 7.5l1.4-1.4 3.1 3.1L12.6 3 14 4.4z" />
                          </svg>
                        </span>
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            );

            return (
              <div key={s.heading}>
                {hasImages ? (
                  <div className="grid items-center gap-12 lg:grid-cols-2">
                    <Reveal className={imageRight ? "" : "lg:order-2"}>
                      <div>{text}</div>
                    </Reveal>
                    <Reveal delay={120} className={imageRight ? "" : "lg:order-1"}>
                      <SectionImages images={s.images!} heading={s.heading} />
                    </Reveal>
                  </div>
                ) : (
                  <Reveal>
                    <div className="mx-auto max-w-4xl">{text}</div>
                  </Reveal>
                )}
                {s.cards && (
                  <Reveal>
                    <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2">
                      {s.cards.map((c) => (
                        <div
                          key={c.title}
                          className="rounded-3xl border border-line bg-cream p-7 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                        >
                          <h3 className="text-xl text-navy">{c.title}</h3>
                          <p className="mt-3 text-sm leading-relaxed text-gray-600">
                            {c.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                )}
                {si === 1 && (
                  <div className="mt-20">
                    <PhoneStrip />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </article>

      {/* Explore our services */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow eyebrow--center justify-center">
                Home Renovation Experts
              </p>
              <h2 className="mt-3 text-4xl text-navy md:text-5xl">
                Explore Our Services
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.href} delay={i * 90}>
                <Link
                  href={s.href}
                  className="group relative block h-72 overflow-hidden rounded-3xl"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-xl leading-snug">{s.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                      Read More
                      <svg className="h-3 w-3 transition group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden>
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

      <CtaBand />
    </>
  );
}
