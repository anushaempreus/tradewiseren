import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";

export const metadata: Metadata = {
  title: "Home Renovations Tuggeranong",
  description:
    "Family-owned home renovation builder with over 30 years of experience across Canberra and Tuggeranong ACT — bathrooms, kitchens, interiors, granny flats and full home renovations.",
  alternates: { canonical: "/home-renovations-tuggeranong" },
};

export default function Page() {
  return (
    <GuidePage
      title="Home Renovations Tuggeranong"
      heroImage="/images/2023/10/About-Tradewise.jpg"
      sections={[
        {
          heading: "TradeWise Renovations Guide",
          paragraphs: [
            "TradeWise Renovations is a family-owned home renovation builder with over 30 years of building experience across Canberra and Tuggeranong ACT. We deliver high quality renovations including bathroom renovations, kitchen renovations, interior upgrades, granny flats and full home renovations.",
          ],
        },
        {
          heading: "Why Choose TradeWise Renovations for Tuggeranong Projects",
          paragraphs: [
            "TradeWise Renovations has spent more than three decades working on homes across Canberra and Tuggeranong. That extensive experience means we understand the housing stock, the climate, the regulations and the expectations of local homeowners. We are a trusted builder and a local business that treats every job as if it were our own home.",
            "All tradespeople on our sites hold valid ACT construction licenses. Licensed contractors ensure compliance with local building codes, and insured contractors protect homeowners from liability during renovations. Hiring licensed contractors improves project quality and safety standards. Renovating in Tuggeranong requires adherence to local regulations, and we make sure every detail is covered.",
          ],
          cards: [
            {
              title: "Bathroom Renovations",
              text: "Transform tired 1980s and 1990s bathrooms into functional, attractive spaces with walk-in showers, updated tiling, wall-hung vanities, improved ventilation, and underfloor heating options. Complete plumbing and electrical work managed in-house.",
            },
            {
              title: "Kitchen Renovations",
              text: "Open plan layouts, island benches, engineered stone benchtops, new cabinetry with pull-out pantries, and task lighting. Kitchen renovations can include new appliances and complete knock-down-rebuild of kitchen spaces.",
            },
            {
              title: "Interior Renovations",
              text: "Flooring, repainting, doors, windows, lighting and built-in storage with focus on energy efficiency. Upgrade insulation, double glazing, and incorporate smart home tech including automated heating and lighting systems.",
            },
            {
              title: "Extensions & Granny Flats",
              text: "Rear family-room extensions, extra bedrooms, and master suite additions on ground floors to keep costs manageable. Granny flats support multi-generational living on larger blocks with ACT-compliant specifications.",
            },
          ],
        },
        {
          heading: "Why Tuggeranong Homeowners Choose TradeWise Renovations",
          cards: [
            {
              title: "Family-Owned Expertise",
              text: "We focus on practical, liveable design rather than showpiece kitchens that fall apart after a year. Our hands-on approach prioritises real-world functionality and lasting quality for your family's daily life.",
            },
            {
              title: "Professional Project Management",
              text: "Extremely professional project management with regular updates and no guesswork. We coordinate all trades, approvals and inspections so you deal with one team, not a dozen.",
            },
            {
              title: "Local Area Knowledge",
              text: "Proven experience across Tuggeranong suburbs including Kambah, Greenway, Calwell, Gordon and Isabella Plains, where we know typical home styles, block layouts and slope challenges.",
            },
            {
              title: "Licensed & Certified Green Builder",
              text: "All tradespeople hold valid ACT construction licenses ensuring compliance with local codes. We hold credentials as a certified green builder, meaning energy efficient practices are built into every project.",
            },
          ],
        },
        {
          heading: "Frequently Asked Questions — Home Renovations Tuggeranong",
          cards: [
            {
              title: "How long does a typical home renovation take in Tuggeranong?",
              text: "Timeframes vary based on project scope. A complete bathroom renovation can take several weeks depending on complexity. Kitchen remodelling with structural changes takes longer. We provide realistic timeline estimates during your initial consultation and keep you updated throughout the entire construction process.",
            },
            {
              title: "Do I need council approval for renovations in Tuggeranong?",
              text: "Development Applications are required for certain projects like extensions. Renovation projects often require council approvals and permits, and build approvals are necessary for most structural renovations. We check for heritage requirements and assess bushfire and flood risks on properties, guiding you through every step.",
            },
            {
              title: "What makes TradeWise different from other renovation builders?",
              text: "TradeWise stands out as a friendly, family owned and operated business, led by directors with over 30 years' combined construction experience. We take a collaborative, customer service orientated approach, guiding our clients through the entire renovation journey from design to completion with care and attention.",
            },
            {
              title: "Can you help with granny flat builds in Tuggeranong?",
              text: "Yes. Granny flats, known as secondary residences in the ACT, support multi-generational living and rental income. ACT rules require minimum 500 square metre lot size, 40-90 square metre floor area, and specific setback requirements. We guide you through the entire process.",
            },
          ],
        },
        {
          heading: "Areas We Serve",
          paragraphs: [
            "Kambah, Greenway, Calwell, Gordon, Isabella Plains, Wanniassa, Gungahlin, Charnwood, Jerrabomberra, Queanbeyan, Canberra City, Belconnen, Weston Creek.",
            "Working outside these areas? Contact us — we service all of Canberra and the Australian Capital Territory.",
          ],
        },
      ]}
    />
  );
}
