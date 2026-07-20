import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";

export const metadata: Metadata = {
  title: "Kitchen Renovations Canberra",
  description:
    "Professional kitchen renovations in Canberra by TradeWise Renovations — family-owned, 30+ years of experience, complete project management.",
  alternates: { canonical: "/kitchen-renovations-canberra" },
};

export default function Page() {
  return (
    <GuidePage
      title="Kitchen Renovations Canberra"
      heroImage="/images/2023/10/IMG_6854-1185x1080-1.jpg"
      sections={[
        {
          heading: "Professional Kitchen Renovations in Canberra",
          images: ["/images/2023/10/kitchen-renovations-canberra-2.jpg"],
          paragraphs: [
            "Make a wise choice by choosing TradeWise Renovations as your kitchen renovation professional in Canberra. We are a family-owned and operated business, priding ourselves on achieving high-quality results for our clients. Being reliable professionals, we understand that clients' needs vary from one person to another. For this reason, we work collaboratively with our clients to understand and deliver their vision. We have over 30 years of industry experience and are passionate about providing work to the highest standards.",
            "We offer complete services from project design to interior demolition, installation and completion. We combine our experience with your vision to produce results that suit your needs and requirements. Our team has the expertise to guide you through the entire process and ensure the process is stress-free for your peace of mind. At TradeWise Renovations, we coordinate reliable, licensed and hardworking tradespeople we trust, including plumbers, electricians, and painters. We are here to deliver a spotless kitchen renovation that will satisfy you.",
          ],
        },
        {
          heading: "Get Kitchen Renovations with Value for Money in Canberra",
          images: [
            "/images/2023/10/kitchen-renovations-canberra-1.jpg",
            "/images/2023/10/kitchen-renovations-canberra-3.jpg",
          ],
          paragraphs: [
            "Your kitchen is at the centre of your home, which means you should make it inviting and beautiful. At TradeWise Renovations, we deliver functional and stylish kitchen renovation in Canberra to maximise space and incorporate clever storage solutions. This saves you time when cooking and cleaning. In addition, a kitchen should say something about you. We provide high-quality renovation projects, whether contemporary, country, Hamptons, shaker, warehouse or industrial style.",
            "Are you looking to make a meaningful upgrade to your home? A new kitchen is a sure way to achieve this. We have the skills and experience to create kitchen designs that complement neighbouring rooms in the house and provide the most astounding value for your money. We work with the leading suppliers ensuring we add value to your home and give practicality to your life, with end-to-end project management for your kitchen renovation.",
          ],
        },
        {
          heading: "Why Choose Us for Kitchen Renovations in Canberra?",
          paragraphs: [
            "TradeWise Renovations understand that attention to detail can make a significant difference during your kitchen renovation project in Canberra. Our kitchen renovations team also understand that planning is everything. For this reason, we provide the right design from the project's inception and ensure a smooth process for all our clients. The upfront planning and collaboration with clients from the initial point is of utmost importance. We can avoid many mistakes and downtimes by working with our clients. We also have a simple and honest process that includes the following steps:",
          ],
          list: [
            "Initial consultation",
            "Planning and design",
            "Fixed price contract",
            "Interior demolition",
            "Installation",
            "Completion",
            "Yours to enjoy",
          ],
        },
        {
          heading: "Licensed, Friendly and Flexible",
          paragraphs: [
            "At TradeWise Renovations, we engage only qualified ACT Licensed builders and offer open communication throughout the process. Our team is also friendly, passionate and flexible.",
          ],
        },
      ]}
    />
  );
}
