import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-cream py-24">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="font-heading text-8xl text-brand/30">404</p>
        <h1 className="mt-4 text-4xl text-navy md:text-5xl">
          This page has been demolished
        </h1>
        <p className="mt-4 leading-relaxed text-gray-600">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          Head back home, browse our work, or give us a call on{" "}
          <a href={PHONE_HREF} className="font-semibold text-brand">
            {PHONE}
          </a>
          .
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-brand-dark"
          >
            Back Home
          </Link>
          <Link
            href="/gallery"
            className="rounded-full border-2 border-navy px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy transition hover:bg-navy hover:text-white"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
