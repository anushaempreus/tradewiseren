import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kitchen Renovations",
  description:
    "Contemporary kitchen renovations in Canberra — end to end project management, functional, stylish and built to last.",
  alternates: { canonical: "/service/kitchen-renovations" },
};

export default function KitchenRenovations() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema(
            "Kitchen Renovations",
            "Contemporary kitchen renovations in Canberra — end to end project management, functional, stylish and built to last.",
            "/service/kitchen-renovations"
          )
        )}
      />
      <ServicePage
        title="Kitchen Renovations"
        heroImage="/images/2025/10/TW2458-12.jpg"
        tagline="Contemporary Kitchen Renovations"
        introParagraphs={[
          "We provide end to end project management for your kitchen renovation.",
        ]}
        introImage="/images/2025/10/TW2458-12.jpg"
        whatWeDo="We work with Canberra's leading suppliers, so you can rest assured that your new kitchen will add value to your home and practicality to your life, and will stand the test of time."
        featureHeading="Functional, Stylish And Built To Last"
        featureParagraphs={[
          "Often described as the centre of the home, your kitchen should be inviting, functional and stylish. It should be designed to maximise space, incorporate clever storage solutions, and save you precious time when cooking and cleaning.",
          "It should also say something about who you are – whether that be contemporary, country, Hamptons, shaker, warehouse, or industrial style.",
          "A new kitchen is a sure fire way to make a meaningful upgrade to your home, while creating a design that complements neighbouring rooms in the house.",
        ]}
        featureImage="/images/2026/02/3552_Tradewise_025.jpg"
        galleryLabel="Kitchen Gallery"
        galleryImages={[
          "/images/2025/08/3449_tradewisereno_025-Copy-1.jpg",
          "/images/2025/10/3486_tradewise_002.jpg",
          "/images/2026/02/3552_Tradewise_024-1.jpg",
          "/images/2026/03/TW2527-1.jpg",
          "/images/2026/02/TW2535-3.jpg",
          "/images/2025/10/TW2548-3-1.jpg",
        ]}
      />
    </>
  );
}
