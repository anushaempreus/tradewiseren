import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TradeWise Renovations privacy policy.",
  alternates: { canonical: "/privacy-policy" },
};

type Section = { h: string; body?: string[]; list?: string[]; after?: string[] };

const SECTIONS: Section[] = [
  {
    h: "Information We Collect",
    body: [
      "Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.",
    ],
  },
  {
    h: "Log Data",
    body: [
      "When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device's Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter.",
      "Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.",
    ],
  },
  {
    h: "Personal Information",
    body: ["We may ask for personal information which may include one or more of the following:"],
    list: [
      "Name",
      "Email address",
      "Social media profiles",
      "Date of birth",
      "Phone/mobile number",
      "Home/mailing address",
    ],
  },
  {
    h: "Legitimate Reasons for Processing Your Personal Information",
    body: [
      "We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you.",
    ],
  },
  {
    h: "Collection and Use of Information",
    body: ["We may collect personal information from you when you do any of the following on our website:"],
    list: [
      "Enter any of our competitions, contests, sweepstakes, and surveys",
      "Sign up to receive updates from us via email or social media channels",
      "Use a mobile device or web browser to access our content",
      "Contact us via email, social media, or on any similar technologies",
      "When you mention us on social media",
    ],
    after: [
      "We may collect, hold, use, and disclose information for the following purposes: to enable you to customize or personalize your experience of our website; to contact and communicate with you; for analytics, market research, and business development; for advertising and marketing; to consider your employment application; for internal record keeping and administrative purposes; to run competitions, sweepstakes, and/or offer additional benefits to you; to comply with our legal obligations and resolve any disputes that we may have; and for security and fraud prevention.",
    ],
  },
  {
    h: "Security of Your Personal Information",
    body: [
      "When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.",
      "Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach.",
      "You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services.",
    ],
  },
  {
    h: "How Long We Keep Your Personal Information",
    body: [
      "We keep your personal information only for as long as we need to. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you. However, if necessary, we may retain your personal information for compliance with a legal, accounting, or reporting obligation.",
    ],
  },
  {
    h: "Disclosure of Personal Information to Third Parties",
    body: ["We may disclose personal information to:"],
    list: [
      "A parent, subsidiary, or affiliate of our company",
      "Third party service providers such as IT service providers, data storage, hosting and server providers, advertisers, or analytics platforms",
      "Our employees, contractors, and/or related entities",
      "Our existing or potential agents or business partners",
      "Courts, tribunals, regulatory authorities, and law enforcement officers, as required by law",
      "Third parties who assist us in providing information, products, services, or direct marketing to you",
    ],
  },
  {
    h: "International Transfers of Personal Information",
    body: [
      "The personal information we collect is stored and/or processed where we or our partners, affiliates, and third-party providers maintain facilities. If we transfer your personal information to third parties in other countries, we will perform those transfers in accordance with the requirements of applicable law and will protect the transferred personal information in accordance with this privacy policy.",
    ],
  },
  {
    h: "Your Rights and Controlling Your Personal Information",
    body: [
      "You always retain the right to withhold personal information from us. We will not discriminate against you for exercising any of your rights over your personal information. You retain the right to request details of any personal information we hold about you.",
      "If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us. We will take reasonable steps to correct any information found to be inaccurate or out of date.",
      "If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by unsubscribing from our email database.",
    ],
  },
  {
    h: "Use of Cookies",
    body: [
      "We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.",
    ],
  },
  {
    h: "Limits of Our Policy",
    body: [
      "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.",
    ],
  },
  {
    h: "Changes to This Policy",
    body: [
      "At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.",
    ],
  },
  {
    h: "Contact Us",
    body: [
      "For any questions or concerns regarding your privacy, please contact us: contact@tradewiserenovations.com | 02 5112 2969",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-sm text-gray-500">
            Effective 13.4.2026 | Last updated 13.4.2026
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Your privacy is important to us. It is TradeWise Services
            Group&rsquo;s policy to respect your privacy and comply with any
            applicable law and regulation regarding any personal information we
            may collect about you, including across our website,
            https://tradewiserenovations.com/, and other sites we own and
            operate.
          </p>
          {SECTIONS.map((s) => (
            <div key={s.h} className="mt-8">
              <h2 className="text-2xl text-navy">{s.h}</h2>
              {s.body?.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-3 list-disc space-y-1 pl-6 text-gray-700">
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
              {s.after?.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
