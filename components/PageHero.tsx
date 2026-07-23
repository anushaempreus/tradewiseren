import Link from "next/link";

// Simple page-title header — the client asked for the photo banners to be
// removed from all inner pages. `image` is accepted (and ignored) so existing
// page calls keep working.
export default function PageHero({
  title,
  crumb,
}: {
  title: string;
  image?: string;
  crumb?: string;
}) {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <nav
          className="rise text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-brand">
            Home
          </Link>
          <span className="mx-2 text-brand" aria-hidden>
            /
          </span>
          <span>{crumb ?? title}</span>
        </nav>
        <h1 className="rise rise-1 mt-3 text-4xl text-navy md:text-5xl">{title}</h1>
        <span className="rise rise-2 mt-5 block h-1 w-16 rounded bg-brand" aria-hidden />
      </div>
    </section>
  );
}
