import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { serviceSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Home Renovations",
  description:
    "Canberra's leading home renovation experts — end-to-end project management and a hassle-free process from start to finish.",
  alternates: { canonical: "/service/home-renovations" },
};

export default function HomeRenovations() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema(
            "Home Renovations",
            "Canberra's leading home renovation experts — end-to-end project management and a hassle-free process from start to finish.",
            "/service/home-renovations"
          )
        )}
      />
      <ServicePage
        title="Home Renovations Canberra"
        heroImage="/images/2026/02/3552_Tradewise_029.jpg"
        tagline="Canberra's Leading Home Renovation Experts"
        introParagraphs={[
          "Are you looking for a customer-focused home renovation expert in Canberra? Make a wise choice by choosing the TradeWise Renovations team. We offer end-to-end project management and a hassle-free process from start to finish. At TradeWise Renovations, we cover everything from design to interior demolition, installation and completion. Our team is fully qualified to assist you whether you have bought a new home that doesn't suit you or have been waiting to renovate your ageing home. We have over 30 years of experience in the industry and an obsession with delivering high-quality results.",
        ]}
        introImage="/images/2026/02/3552_Tradewise_029.jpg"
        whatWeDo="We work with Canberra's leading suppliers, which means you can rest assured of achieving value for money."
        featureHeading="A Brand-New Home Without Moving"
        featureParagraphs={[
          "We understand that renovations are the best way to get a brand-new home without moving. Additionally, gone are days when some aspects of your home, such as your bathroom, were a minor place in your house. Our renovations allow you to make your bathroom your wellness retreat. We will design them to make mornings easy and provide a sanctuary for evening relaxation.",
        ]}
        featureImage="/images/2024/07/TW2359-1-scaled.jpg"
        extra={{
          heading: "Call Us for the Best Home Renovations in Canberra",
          paragraphs: [
            "Do you have questions about how our home renovation services in Canberra can improve your property's look and value? Do you want us to discuss and advise you about your renovation project? You only need to complete our online form, and a professional will contact you for further assistance. We respond to all customer queries. You can rest assured of a functional, stylish, and durable result, whether you are working on your kitchen or bathroom. Our designs will maximise your space and incorporate clever ideas. We are ready to work with you to achieve your dream style.",
          ],
          callout:
            "The TradeWise Renovations team can maximise your limited space within a cosy townhouse or personalise your forever home to a luxury standard. We will help you create a feasible new home design and plan and manage your project perfectly.",
          image: "/images/2025/08/3449_tradewisereno_015-Copy-1-LARGE.jpg",
        }}
        galleryLabel="Renovation Gallery"
        galleryImages={[
          "/images/2026/02/3552_Tradewise_001.jpg",
          "/images/2025/08/3449_tradewisereno_015-Copy.jpg",
          "/images/2025/09/IMG_9568.jpg",
          "/images/2025/09/IMG_9901.jpg",
          "/images/2023/10/IMG_7397-2-1636x1080-1.jpg",
          "/images/2025/08/3449_tradewisereno_027-1.jpg",
        ]}
      />
    </>
  );
}
