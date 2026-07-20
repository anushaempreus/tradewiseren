import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";

export const metadata: Metadata = {
  title: "Bathroom Renovations Canberra",
  description:
    "Professional bathroom renovations in Canberra — from a basic makeover to a full luxury design concept, tailored to suit your budget.",
  alternates: { canonical: "/bathroom-renovations-canberra" },
};

export default function Page() {
  return (
    <GuidePage
      title="Bathroom Renovations Canberra"
      heroImage="/images/2023/10/bathroommain.webp"
      sections={[
        {
          heading: "Professional Bathroom Renovations in Canberra",
          images: ["/images/2023/10/bathroom-renovations-canberra-01.jpg"],
          paragraphs: [
            "Welcome to TradeWise Renovations, your preferred local bathroom renovation expert in Canberra. We are a dedicated and passionate team of designers and tradespeople who will support you at every step of your project. As one of the reliable experts in Canberra, we ensure your bathroom designs, manufacture and installation are carefully planned and managed. By doing this, we can bring your vision to life.",
            "We have over 30 years of experience in the industry and an obsession with working to the highest standards. As such, we are the wise choice for your bathroom renovations. At TradeWise Renovations, we encourage open communication and an honest process from start to finish. In addition, we ensure that all your ideas are incorporated and that we meet your needs to total satisfaction. Our friendly, experienced and highly skilled team provides complete project management for your peace of mind.",
          ],
        },
        {
          heading: "Upgrade Your Bathroom with Expert Renovations in Canberra",
          images: [
            "/images/2023/10/bathroom-renovations-canberra-03.jpg",
            "/images/2023/10/bathroom-renovations-canberra-02.jpg",
          ],
          paragraphs: [
            "You can rely on TradeWise Renovations to help you with a basic makeover or a full luxury design concept. Gone are the days when a bathroom was the place to shower and get out. These days, bathrooms can double as your wellness retreat. A carefully designed bathroom can make mornings easy and provide a sanctuary for evening relaxation.",
            "Are you after a double vanity, a bath, an extra shower, feature walls or mood lighting? We are Canberra's leading bathroom renovation team to entrust the work. At TradeWise Renovations, we have worked on countless projects, adding value to thousands of homes and making you feel like a million bucks richer. We work with Canberra's leading suppliers to ensure your newly renovated bathroom will add value and practicality to your life and stand the test of time.",
          ],
        },
        {
          heading: "Exquisite Bathroom Renovations in Canberra",
          paragraphs: [
            "As experienced bathroom renovation experts in Canberra, we understand that you start your day and prepare for all life's big moments in your bathroom. For this reason, your bathroom deserves maximum attention and should reflect your lifestyle and aesthetic preferences. This drives our team as we undertake exquisite bathroom renovations for our clients. You will have the advantage of working with experienced designers ready to delicately balance visual aesthetics and bathroom elements to achieve a functional and attractive design.",
            "We understand that people renovate their bathrooms for different reasons. You can trust our team of experts to tailor solutions that suit your needs and requirements, whether you want to increase the floor space or add storage options. We deliver and add modern fixtures and fittings whilst causing minimal disruptions to your life. We work within your budget and scheduled time. We guarantee to complete the bathroom renovation efficiently and effectively for your peace of mind.",
            "Our quality bathroom renovations in Canberra are tailored to suit your budget. Contact us today for an obligation free quote.",
          ],
        },
      ]}
    />
  );
}
