import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";

export const metadata: Metadata = {
  title: "Kitchen Design Canberra",
  description:
    "Bespoke kitchen design in Canberra — style, functionality and comfort from a family-owned team with 30+ years of experience.",
  alternates: { canonical: "/kitchen-design-canberra" },
};

export default function Page() {
  return (
    <GuidePage
      title="Kitchen Design Canberra"
      heroImage="/images/2024/09/kitchen-design-canberra-1.jpg"
      sections={[
        {
          heading: "Trusted Partner for Kitchen Design in Canberra",
          images: ["/images/2024/08/kitchen-design-canberra-2.jpeg"],
          paragraphs: [
            "TradeWise Renovations is a leading name in Canberra for kitchen design and renovation. With over 30 years of experience, our family-owned business consistently delivers outstanding kitchen transformations that combine style and functionality. We take pride in creating kitchen designs that are both visually appealing and practical. Our skilled professionals work closely with clients to understand their unique preferences and needs, ensuring each kitchen design reflects their style and enhances their home's overall aesthetic.",
            "From sleek, contemporary designs to cozy, rustic styles, TradeWise Renovations has the expertise to bring your vision to life. Our comprehensive process guides you from the initial design phase to the final touches of the renovation. We incorporate the latest trends and technologies to create kitchens that are not only beautiful but also highly efficient. Our commitment to excellence and customer satisfaction has made us the top choice for kitchen design in Canberra.",
          ],
        },
        {
          heading: "Canberra Kitchen Design and Renovation Services",
          images: [
            "/images/2024/08/kitchen-design-canberra-5.jpeg",
            "/images/2024/09/kitchen-design-canberra-2.jpg",
          ],
          paragraphs: [
            "At TradeWise Renovations, we specialise in creating bespoke renovations and kitchen design in Canberra, tailored to meet your unique needs. Understanding that the kitchen is the heart of your home, we focus on combining style, functionality, and comfort. Our team at TradeWise Renovations is skilled in crafting custom kitchens that optimise space, offer innovative storage solutions, and align with your personal style preferences.",
            "We provide a range of services, including modern kitchen renovations, custom-built kitchens, and smart storage solutions. By partnering with top suppliers in Canberra, we ensure the use of high-quality materials and appliances that enhance the durability and efficiency of your kitchen. Our comprehensive approach includes coordinating with trusted tradespeople, such as plumbers, electricians, painters, and carpenters, to guarantee a smooth renovation process. With TradeWise Renovations, you receive a kitchen that not only meets but exceeds your expectations.",
          ],
        },
        {
          heading: "Why Choose TradeWise Renovations for Kitchen Design in Canberra?",
          paragraphs: [
            "Choosing us for your Canberra kitchen design means opting for quality and a commitment to customer satisfaction. Here are some reasons why we stand out:",
          ],
          cards: [
            {
              title: "Family-Owned and Operated",
              text: "As a family-owned business, we bring a personal touch to every project, ensuring our clients feel valued and heard throughout the renovation process.",
            },
            {
              title: "Over 30 Years of Experience",
              text: "With three decades of experience, we have honed our skills and knowledge, allowing us to deliver exceptional results that meet the highest standards of quality and craftsmanship.",
            },
            {
              title: "Attention to Detail",
              text: "Our meticulous attention to detail ensures that every aspect of your kitchen design is carefully considered and executed perfectly.",
            },
            {
              title: "Competitive Pricing",
              text: "We offer competitive and transparent pricing, ensuring you receive the best value for your investment.",
            },
            {
              title: "Customer-Centric Approach",
              text: "Our friendly and professional team is dedicated to understanding your vision and bringing it to life, with a strong focus on customer satisfaction and ongoing support.",
            },
          ],
        },
        {
          heading: "Experience the Difference in Craftsmanship and Service",
          paragraphs: [
            "For unparalleled kitchen design in Canberra, TradeWise Renovations is your trusted partner. Choose us and experience the difference in craftsmanship and service.",
          ],
        },
      ]}
    />
  );
}
