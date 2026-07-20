import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";

export const metadata: Metadata = {
  title: "Home Renovations Canberra",
  description:
    "Canberra's leading home renovation experts — end-to-end project management and a hassle-free process from start to finish.",
  alternates: { canonical: "/home-renovations-canberra" },
};

export default function Page() {
  return (
    <GuidePage
      title="Home Renovations Canberra"
      heroImage="/images/2023/10/About-Tradewise.jpg"
      sections={[
        {
          heading: "Canberra's Leading Home Renovation Experts",
          images: ["/images/2023/10/Home-Renovations-Canberra-3.jpg"],
          paragraphs: [
            "Are you looking for a customer-focused home renovation expert in Canberra? Make a wise choice by choosing the TradeWise Renovations team. We offer end-to-end project management and a hassle-free process from start to finish. At TradeWise Renovations, we cover everything from design to interior demolition, installation and completion. Our team is fully qualified to assist you whether you have bought a new home that doesn't suit you or have been waiting to renovate your ageing home. We have over 30 years of experience in the industry and an obsession with delivering high-quality results.",
            "We combine our expertise with your vision to achieve a fully completed project that offers excellent value for money. Our friendly team will work hand in hand with you from start to finish. In addition, we have open communication and fully engage you at every step of the way. When you choose us for your home renovation project, you will work with an ACT-licensed builder ready to deliver high-quality results.",
          ],
        },
        {
          heading: "Upgrade Your Home with Our Renovations Service in Canberra",
          images: [
            "/images/2023/10/Home-Renovations-Canberra-1.jpg",
            "/images/2023/10/Home-Renovations-Canberra-2.jpg",
          ],
          paragraphs: [
            "TradeWise Renovations has been Canberra's preferred home renovation expert for many years. We can renovate your single room or the entire house to give your home a facelift and increase its value. We have solutions for clients with heritage homes looking to maintain their integrity rather than doing complete knock-down rebuilds. Our team can work on your kitchen, bathroom, laundry, and bedroom.",
            "We understand that renovations are the best way to get a brand-new home without moving. Additionally, gone are days when some aspects of your home, such as your bathroom, were a minor place in your house. Our renovations allow you to make your bathroom your wellness retreat. We will design them to make mornings easy and provide a sanctuary for evening relaxation. We work with Canberra's leading suppliers, which means you can rest assured of achieving value for money.",
          ],
        },
        {
          heading: "Call Us for the Best Home Renovations in Canberra",
          paragraphs: [
            "Do you have questions about how our home renovation services in Canberra can improve your property's look and value? Do you want us to discuss and advise you about your renovation project? You only need to complete our online form, and a professional will contact you for further assistance. We respond to all customer queries. You can rest assured of a functional, stylish, and durable result, whether you are working on your kitchen or bathroom. Our designs will maximise your space and incorporate clever ideas. We are ready to work with you whether you want a contemporary, country, Hamptons or industrial-style kitchen.",
            "The TradeWise Renovations team can maximise your limited space within a cosy townhouse or personalise your forever home to a luxury standard. We will help you create a feasible new home design and plan and manage your project perfectly.",
            "Talk to our home renovations expert today in Canberra and find out how we can help you. We are flexible and guarantee high-quality results.",
          ],
        },
      ]}
    />
  );
}
