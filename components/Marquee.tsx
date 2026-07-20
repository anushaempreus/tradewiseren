const SUBURBS = [
  "Bonython",
  "Kambah",
  "Chapman",
  "Conder",
  "Calwell",
  "Dickson",
  "Deakin",
  "Forde",
  "Gowrie",
  "Fadden",
  "Jerrabomberra",
  "Oxley",
  "Monash",
  "Macgregor",
  "Florey",
  "Tuggeranong",
  "Queanbeyan",
  "Canberra",
];

function Row() {
  return (
    <>
      {SUBURBS.map((s) => (
        <span key={s} className="flex shrink-0 items-center gap-8">
          <span className="font-heading text-lg uppercase tracking-[0.25em] text-navy/60">
            {s}
          </span>
          <svg className="h-2.5 w-2.5 rotate-45 fill-brand" viewBox="0 0 10 10" aria-hidden>
            <rect width="10" height="10" />
          </svg>
        </span>
      ))}
    </>
  );
}

/** Infinite scrolling strip of suburbs we've renovated in. Pauses on hover. */
export default function Marquee() {
  return (
    <div
      className="marquee overflow-hidden border-y border-line bg-white py-5"
      aria-label="Suburbs we have renovated in"
    >
      <div className="marquee-track flex w-max gap-8">
        <Row />
        <span className="flex shrink-0 gap-8" aria-hidden>
          <Row />
        </span>
      </div>
    </div>
  );
}
