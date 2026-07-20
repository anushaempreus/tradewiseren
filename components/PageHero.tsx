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
    <section className="relative flex h-64 items-end overflow-hidden md:h-80">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="kenburns object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/55 to-navy/30" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10">
        <nav
          className="rise inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur"
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
    </section>
  );
}
