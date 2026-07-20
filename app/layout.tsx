import type { Metadata } from "next";
import { Questrial, Hind } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFx from "@/components/PageFx";
import { localBusinessSchema, jsonLd, SITE_URL } from "@/lib/schema";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
  display: "swap",
});

const hind = Hind({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "TradeWise Renovations | Home Renovation Experts Canberra",
    template: "%s | TradeWise Renovations",
  },
  description:
    "Family-owned Canberra renovation experts with over 30 years of experience. Bathroom, kitchen, interior and complete home renovations — end-to-end project management.",
  keywords: [
    "home renovations Canberra",
    "bathroom renovations Canberra",
    "kitchen renovations Canberra",
    "interior renovations",
    "renovation builder ACT",
    "TradeWise Renovations",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "TradeWise Renovations",
    title: "TradeWise Renovations | Home Renovation Experts Canberra",
    description:
      "Family-owned Canberra renovation experts with over 30 years of experience. End-to-end project management from design to completion.",
    images: [
      {
        url: "/images/2026/05/3627_Tradewise_109-3.jpg",
        width: 1620,
        height: 1080,
        alt: "A completed TradeWise Renovations kitchen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeWise Renovations | Home Renovation Experts Canberra",
    description:
      "Family-owned Canberra renovation experts with over 30 years of experience.",
    images: ["/images/2026/05/3627_Tradewise_109-3.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${questrial.variable} ${hind.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(localBusinessSchema)}
        />
        <PageFx />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
