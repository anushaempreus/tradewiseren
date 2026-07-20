import Image from "next/image";
import Reveal from "@/components/Reveal";

const PROPS = [
  {
    title: "Family Owned & Operated",
    text: "A local Canberra business that treats every project like our own home.",
    icon: "/images/2023/11/pod-icon1.png",
  },
  {
    title: "Over 30 Years Experience",
    text: "Three decades of combined construction and renovation expertise.",
    icon: "/images/2023/11/pod-icon2.png",
  },
  {
    title: "Collaborative",
    text: "We design around how you live — your needs, lifestyle and vision.",
    icon: "/images/2023/11/pod-icon3.png",
  },
  {
    title: "Customer Service Orientated",
    text: "Open communication and a stress-free process from start to finish.",
    icon: "/images/2023/11/pod-icon44.png",
  },
];

export default function ValueProps() {
  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
      {PROPS.map((v, i) => (
        <Reveal key={v.title} delay={i * 90}>
          <div className="group h-full rounded-2xl border border-line bg-white p-8 text-center transition duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-light transition group-hover:bg-brand/15">
              <Image src={v.icon} alt="" width={44} height={44} className="h-11 w-11 object-contain" />
            </div>
            <h3 className="mt-5 text-xl text-navy">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
