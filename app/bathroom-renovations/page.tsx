import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bathroom Renovations",
  description:
    "End to end project management for your bathroom renovation in Canberra — from a basic makeover to a full luxury design concept.",
  alternates: { canonical: "/bathroom-renovations" },
};

export default function BathroomRenovations() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema(
            "Bathroom Renovations",
            "End to end project management for bathroom renovations in Canberra — from a basic makeover to a full luxury design concept.",
            "/bathroom-renovations"
          )
        )}
      />
      <ServicePage
        title="Bathroom Renovations"
        heroImage="/images/2023/10/bathroommain.webp"
        tagline="Beautiful Bathroom Renovations"
        introParagraphs={[
          "We provide end to end project management for your bathroom renovation – from a basic makeover to a full luxury design concept.",
        ]}
        introImage="/images/2024/02/5-min.jpg"
        whatWeDo="We work with Canberra's leading suppliers, so you can rest assured that your new bathroom will add value to your home and practicality to your life, and will stand the test of time."
        featureHeading="Turn Your Bathroom Into A Private Oasis"
        featureParagraphs={[
          "Gone are the days when a bathroom was the place to just get the job done and get out.",
          "These days, bathrooms can double as your own personal wellness retreat, carefully designed to make mornings easy and provide a sanctuary for relaxation in the evenings.",
          "Whether you're after a double vanity, a bath, an extra large shower, a feature wall or mood lighting, a renovated bathroom can add thousands in value to your home and make you feel like a million bucks.",
        ]}
        featureImage="/images/2024/02/TW-6-min.jpg"
        galleryLabel="Bathroom Gallery"
        galleryImages={[
          "/images/2024/02/IMG_7147-1620x1080-1-1.jpg",
          "/images/2024/02/IMG_6960-1620x1080-1-1.jpg",
          "/images/2024/02/IMG_6935-1620x1080-1-1.jpg",
          "/images/2024/02/IMG_7134-720x1080-1-1.jpg",
          "/images/2024/02/IMG_6271-720x1080-1-1.jpg",
          "/images/2024/02/DSC00730-1537x1080-1-1.jpg",
        ]}
      />
    </>
  );
}
