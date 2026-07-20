import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Interior Renovations",
  description:
    "Impressive interior renovations in Canberra — single rooms or complete home renovations, 100% tailored to your unique requirements.",
  alternates: { canonical: "/service/interior-renovations" },
};

export default function InteriorRenovations() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema(
            "Interior Renovations",
            "Impressive interior renovations in Canberra — single rooms or complete home renovations, 100% tailored to your unique requirements.",
            "/service/interior-renovations"
          )
        )}
      />
      <ServicePage
        title="Interior Renovations"
        heroImage="/images/2025/09/3486_tradewise_009.jpg"
        tagline="Impressive Interior Renovations"
        introParagraphs={[
          "Our level of experience means you will always get a high quality result, and our approach means the renovation is 100% tailored to your unique requirements.",
        ]}
        introImage="/images/2025/09/3486_tradewise_009.jpg"
        whatWeDo="Depending on the scale of the renovation, we may be able to plan it so that you can stay in your home as we renovate – avoiding the need to find and pay for temporary accommodation."
        featureHeading="Upgrade Your Home To Suit Your Style"
        featureParagraphs={[
          "TradeWise Renovations offers single room renovations, or complete home renovations to help you give your current home a facelift.",
          "This is especially important if you appreciate the heritage of your home, and want to maintain its integrity instead of doing a complete knock down rebuild.",
          "From kitchens and bathrooms to living rooms, laundries, bedrooms, dens, entertainment rooms, home theatres, and more – a renovation is the perfect way to keep the home you have, while enjoying all the benefits of a brand new look and feel.",
        ]}
        featureImage="/images/2025/08/3449_tradewisereno_011-Copy.jpg"
        galleryLabel="Interior Gallery"
        galleryImages={[
          "/images/2025/08/3449_tradewisereno_015-Copy-1-LARGE.jpg",
          "/images/2025/09/dickson-1.jpg",
          "/images/2023/10/IMG_7111-1620x1080-1.jpg",
          "/images/2023/10/IMG_5954-1620x1080-1.jpg",
          "/images/2023/10/IMG_5872-3-1620x1080-1.jpg",
          "/images/2023/10/IMG_7114-1620x1080-1.jpg",
        ]}
      />
    </>
  );
}
