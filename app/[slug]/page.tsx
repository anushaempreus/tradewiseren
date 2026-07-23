import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProjectGallery from "@/components/ProjectGallery";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import projects from "@/lib/projects.json";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.title} — a completed TradeWise Renovations ${project.category} project in the Canberra region.`,
    alternates: { canonical: `/${project.slug}` },
    openGraph: {
      title: `${project.title} | TradeWise Renovations`,
      images: [{ url: project.images[0].src }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const project = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero title={project.title} crumb="Gallery" />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="eyebrow">
                  {project.category} Renovation
                </p>
                <p className="mt-2 text-gray-600">
                  {project.images.length} photos from this completed project
                </p>
              </div>
              <Link
                href="/gallery"
                className="rounded-full border border-line px-6 py-3 text-sm font-bold uppercase tracking-wider text-navy transition hover:border-brand hover:text-brand"
              >
                ← All Projects
              </Link>
            </div>
          </Reveal>
          <ProjectGallery images={project.images} title={project.title} />

          {/* Prev / next */}
          <nav className="mt-14 grid gap-4 border-t border-line pt-8 sm:grid-cols-2" aria-label="Project navigation">
            <Link
              href={`/${prev.slug}`}
              className="group rounded-2xl border border-line p-5 transition hover:border-brand/50 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                ← Previous Project
              </p>
              <p className="mt-1.5 font-heading text-xl text-navy group-hover:text-brand">
                {prev.title}
              </p>
            </Link>
            <Link
              href={`/${next.slug}`}
              className="group rounded-2xl border border-line p-5 text-right transition hover:border-brand/50 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Next Project →
              </p>
              <p className="mt-1.5 font-heading text-xl text-navy group-hover:text-brand">
                {next.title}
              </p>
            </Link>
          </nav>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <p className="eyebrow">More Like This</p>
              <h2 className="mt-3 text-3xl text-navy md:text-4xl">
                Related {project.category} projects
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 90}>
                  <Link
                    href={`/${r.slug}`}
                    className="group relative block h-64 overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={r.images[0].src}
                      alt={r.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 to-transparent" />
                    <p className="absolute bottom-4 left-5 font-heading text-lg text-white">
                      {r.title}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand heading="Love what you see? Let's talk about your project." />
    </>
  );
}
