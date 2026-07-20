import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ConsultForm from "@/components/ConsultForm";
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, FACEBOOK, INSTAGRAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TradeWise Renovations — call 02 5112 2969 or send us a message about your Canberra renovation project.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUs() {
  return (
    <>
      <PageHero title="Contact Us" />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Contact Information</p>
            <h2 className="mt-2 text-4xl text-navy">
              Let&rsquo;s Talk About Your Renovation
            </h2>
            <ul className="mt-8 space-y-6">
              <li>
                <p className="text-sm font-semibold uppercase text-gray-500">Phone</p>
                <a href={PHONE_HREF} className="text-2xl font-bold text-deepteal hover:text-brand">
                  {PHONE}
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase text-gray-500">Email</p>
                <a href={`mailto:${EMAIL}`} className="text-lg text-deepteal hover:text-brand">
                  {EMAIL}
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase text-gray-500">Address</p>
                <p className="text-lg text-gray-800">{ADDRESS}</p>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase text-gray-500">Follow Us</p>
                <div className="mt-2 flex gap-4">
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="font-semibold text-deepteal hover:text-brand">
                    Facebook
                  </a>
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="font-semibold text-deepteal hover:text-brand">
                    Instagram
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-line bg-cream p-8 md:p-10">
            <h3 className="text-2xl text-navy">Send Us a Message</h3>
            <div className="mt-6">
              <ConsultForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
