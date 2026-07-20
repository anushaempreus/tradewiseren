import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Promotions",
  description:
    "Unlock exclusive offers and stay up to date with TradeWise Renovations — project updates, special offers and expert design tips.",
  alternates: { canonical: "/promotions" },
};

export default function Promotions() {
  return (
    <>
      <PageHero title="Promotions" />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand">
              Exclusive Offers
            </p>
            <h2 className="mt-2 text-4xl text-navy">
              Unlock Exclusive Offers and Stay Up to Date with TradeWise
              Renovations
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-gray-700">
              <p>
                Join the TradeWise Community to gain access to project updates,
                special offers, and expert design tips — without the inbox
                clutter.
              </p>
              <p>
                This isn&rsquo;t another stream of generic marketing emails. We
                share thoughtfully curated content for homeowners who value
                quality craftsmanship.
              </p>
              <p>
                Enjoy behind-the-scenes looks at our latest local
                transformations, exclusive monthly promotions &amp; discounts,
                and practical design insights, all chosen to genuinely help you
                create a home you love.
              </p>
            </div>
            <a
              href="#subscribe"
              className="mt-8 inline-block rounded bg-brand px-8 py-3.5 font-bold uppercase text-white transition hover:bg-brand-dark"
            >
              Join Now
            </a>
          </div>
          <div className="relative h-96 overflow-hidden rounded-lg lg:h-[480px]">
            <Image
              src="/images/2026/05/3635_Tradewise_033.jpg"
              alt="A completed TradeWise renovation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <div id="subscribe">
        <Newsletter />
      </div>
    </>
  );
}
