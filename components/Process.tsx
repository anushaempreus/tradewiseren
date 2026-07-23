import Image from "next/image";
import Reveal from "@/components/Reveal";

// Original-site style: light section, numbered icon above each step.
// Icon files mirror the live site exactly (step 4 uses pod-icon2 there too).
const STEPS = [
  { icon: "/images/2023/11/n1.png", title: "1. Get In Touch" },
  { icon: "/images/2023/11/n2.png", title: "2. Meet On Site" },
  { icon: "/images/2023/11/n3.png", title: "3. Submit Quotation" },
  { icon: "/images/2023/11/pod-icon2.png", title: "4. Quotation Acceptance" },
  { icon: "/images/2023/11/n5.png", title: "5. Schedule Work" },
  { icon: "/images/2023/11/n66.png", title: "6. Proceed With Work" },
  { icon: "/images/2023/11/n77.png", title: "7. Job Completion" },
  { icon: "/images/2023/11/n88.png", title: "8. Customer Satisfaction" },
];

export default function Process() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <Reveal>
          <p className="eyebrow">Our Process</p>
          <h2 className="mt-3 text-4xl text-brand md:text-5xl">
            From Contact To Complete
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 90}>
              <div className="group">
                <div className="mx-auto flex h-24 w-24 items-center justify-center transition duration-300 group-hover:-translate-y-1">
                  <Image
                    src={s.icon}
                    alt=""
                    width={96}
                    height={96}
                    className="h-24 w-24 object-contain"
                  />
                </div>
                <h4 className="mt-4 font-heading text-lg text-ink">{s.title}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
