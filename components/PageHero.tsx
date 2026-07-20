import Image from "next/image";
import Link from "next/link";

export default function PageHero({
  title,
  image = "/images/2023/10/bg_3.jpg",
  crumb,
}: {
  title: string;
  image?: string;
  crumb?: string;
}) {
  return (
    <section className="bg-white px-4 pt-4">
      <div className="relative mx-auto flex h-64 max-w-7xl items-end overflow-hidden rounded-[2rem] md:h-80">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-navy/10" />
        <div className="relative w-full p-8 md:p-12">
          <nav
            className="rise inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/85 backdrop-blur"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition hover:text-brand">
              Home
            </Link>
            <span className="text-brand" aria-hidden>
              /
            </span>
            <span>{crumb ?? title}</span>
          </nav>
          <h1 className="rise rise-1 mt-4 text-4xl text-white md:text-6xl">{title}</h1>
        </div>
      </div>
    </section>
  );
}
