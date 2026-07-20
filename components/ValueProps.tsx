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
    <div className="mx-auto grid max-w-7xl gap-x-0 gap-y-10 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
      {PROPS.map((v, i) => (
        <Reveal key={v.title} delay={i * 90} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
          <div className="group h-full">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light transition duration-300 group-hover:-translate-y-1 group-hover:bg-brand/15">
              <Image src={v.icon} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
            </div>
            <h3 className="mt-5 text-xl text-navy">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
