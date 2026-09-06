import Reveal from "./Reveal";
import { creativeCategories } from "@/data/capabilities";

export default function CreativeSection() {
  return (
    <section id="creative" className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto max-w-wrap px-8">
        <Reveal className="mb-16 max-w-[640px]">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.14em] text-ink-faint">
            <span className="h-px w-7 bg-accent-line" /> 05 / Creative
          </div>
          <h2 className="mt-3.5 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-[-.01em]">
            Beyond the code
          </h2>
          <p className="mt-4 max-w-[520px] text-ink-dim">
            Technology is one side of the work. Visual communication is another.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid grid-cols-1 gap-0.5 border border-line bg-line [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          {creativeCategories.map((c) => (
            <div
              key={c}
              className="creative-tile-pattern relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-bg p-[22px]"
            >
              <span className="relative text-xs uppercase tracking-[.1em] text-ink-faint">Category</span>
              <strong className="relative mt-1.5 font-display text-[1.05rem] font-semibold text-ink-dim">
                {c}
              </strong>
            </div>
          ))}
        </Reveal>

        <p className="mt-8 text-[13px] text-ink-faint">
          Case studies for each category are added as work is finalized for public display.
        </p>
      </div>
    </section>
  );
}
