import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBand from "@/components/CtaBand";
import projects from "@/lib/projects.json";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse completed TradeWise Renovations projects across Canberra — bathrooms, kitchens, laundries and interiors.",
  alternates: { canonical: "/gallery" },
};

export default function Gallery() {
  return (
    <>
      <PageHero title="Gallery" />
      <section className="py-16">
        <GalleryGrid projects={projects} />
      </section>
      <CtaBand />
    </>
  );
}
