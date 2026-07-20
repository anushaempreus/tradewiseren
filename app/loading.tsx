import Image from "next/image";

// Route-level loading screen: TradeWise logo with a breathing pulse and a
// sliding brand-orange bar underneath.
export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white">
      <Image
        src="/images/2023/11/NEW-Logo-High-Res.png"
        alt="TradeWise Renovations"
        width={280}
        height={102}
        priority
        className="logo-breathe h-auto w-56 md:w-72"
      />
      <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-line">
        <div className="loader-bar h-full w-2/5 rounded-full bg-brand" />
      </div>
      <p className="sr-only">Loading…</p>
    </div>
  );
}
