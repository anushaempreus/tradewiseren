import Reveal from "@/components/Reveal";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section className="bg-blueprint relative overflow-hidden bg-deepteal py-20 text-white">
      {/* decorative rings */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border-[24px] border-white/5" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full border-[32px] border-white/5" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <Reveal>
          <p className="eyebrow eyebrow--center justify-center">Our Process</p>
          <h2 className="mt-3 text-4xl md:text-5xl">From Contact To Complete</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            A simple, honest, eight-step journey — so you always know exactly
            where your renovation stands.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 90}>
              <div className="group relative">
                {/* connector */}
                {i % 4 !== 3 && (
                  <span className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-px w-[calc(100%-5rem)] border-t border-dashed border-white/25 md:block" aria-hidden />
                )}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand bg-deepteal font-heading text-2xl text-brand transition duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                  {s.n}
                </div>
                <p className="mt-4 font-heading text-lg">{s.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
