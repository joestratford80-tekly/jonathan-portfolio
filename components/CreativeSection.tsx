import Reveal from "./Reveal";
import { creativeCategories } from "@/data/capabilities";

export default function CreativeSection() {
  return (
    <section id="creative" className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto max-w-wrap px-8">
        <Reveal className="mb-16 max-w-[700px]">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.18em] text-ink-faint">
            <span className="h-px w-8 bg-accent" /> 05 / Creative Practice
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5.2vw,4.5rem)] font-semibold leading-[.98] tracking-[-.05em]">
            A different way<br /><span className="text-accent">to see problems.</span>
          </h2>
          <p className="mt-6 max-w-[570px] text-[15px] leading-[1.85] text-ink-dim">
            Visual communication remains part of how I think, shape ideas, and make technology easier to understand.
          </p>
        </Reveal>

        <Reveal className="creative-grid mt-14 grid grid-cols-1 gap-px border border-line bg-line [grid-template-columns:repeat(auto-fit,minmax(210px,1fr))]">
          {creativeCategories.map((category, index) => (
            <div key={category} className="creative-tile-pattern group relative flex aspect-[4/5] flex-col justify-between overflow-hidden bg-bg p-6 sm:p-7">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[.16em] text-ink-faint">
                <span>Visual practice</span><span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <strong className="relative font-display text-xl font-semibold tracking-[-.03em] text-ink transition-transform duration-500 group-hover:translate-x-1">
                {category}
              </strong>
              <span className="absolute -bottom-8 -right-2 font-display text-[7rem] font-bold leading-none text-white/[.025] transition-transform duration-700 group-hover:-translate-y-3" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </Reveal>

        <p className="mt-8 text-[12px] uppercase tracking-[.12em] text-ink-faint">
          Case studies will be added as individual projects are prepared for public display.
        </p>
      </div>
    </section>
  );
}
