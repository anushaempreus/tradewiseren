import { PHONE, EMAIL, FACEBOOK, INSTAGRAM } from "@/lib/data";

export const SITE_URL = "https://tradewiserenovations.com";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "TradeWise Renovations",
  url: SITE_URL,
  logo: `${SITE_URL}/images/2023/11/NEW-Logo-High-Res.png`,
  image: `${SITE_URL}/images/2026/05/3627_Tradewise_109-3.jpg`,
  telephone: "+61-2-5112-2969",
  email: EMAIL,
  description:
    "Family-owned Canberra renovation experts with over 30 years of experience. Bathroom, kitchen, interior and complete home renovations with end-to-end project management.",
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "PO Box 2956",
    addressLocality: "Tuggeranong DC",
    addressRegion: "ACT",
    postalCode: "2901",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "City",
    name: "Canberra",
  },
  sameAs: [FACEBOOK, INSTAGRAM],
  priceRange: "$$",
  founder: [
    { "@type": "Person", name: "Adenn" },
    { "@type": "Person", name: "Angelo" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61-2-5112-2969",
    contactType: "customer service",
    areaServed: "AU",
    availableLanguage: "English",
  },
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: "Canberra" },
    serviceType: "Home renovation",
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

/** Render a schema object as a JSON-LD script tag's contents. */
export function jsonLd(obj: object) {
  return { __html: JSON.stringify(obj) };
}
