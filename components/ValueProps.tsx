import Image from "next/image";
import Reveal from "@/components/Reveal";

// Simple centred icon + title pods, matching the original site.
const PROPS = [
  { title: "Family Owned and Operated", icon: "/images/2023/11/pod-icon1.png" },
  { title: "Over 30 Years Experience", icon: "/images/2023/11/pod-icon2.png" },
  { title: "Collaborative", icon: "/images/2023/11/pod-icon3.png" },
  { title: "Customer Service Orientated", icon: "/images/2023/11/pod-icon44.png" },
];

export default function ValueProps() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 lg:grid-cols-4">
      {PROPS.map((v, i) => (
        <Reveal key={v.title} delay={i * 90}>
          <div className="group text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-light transition duration-300 group-hover:-translate-y-1 group-hover:bg-brand/15">
              <Image src={v.icon} alt="" width={44} height={44} className="h-11 w-11 object-contain" />
            </div>
            <h3 className="mt-4 text-xl leading-snug text-navy">{v.title}</h3>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
