import Reveal from "./Reveal";
import { nowPipeline, nowPipelineActiveIndex, nowFocus } from "@/data/lab";

export default function CurrentlyBuilding() {
  return (
    <section id="now" className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto max-w-wrap px-8">
        <Reveal className="mb-16 max-w-[640px]">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.14em] text-ink-faint">
            <span className="h-px w-7 bg-accent-line" /> Now
          </div>
          <h2 className="mt-3.5 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-[-.01em]">
            Currently building
          </h2>
        </Reveal>

        <Reveal className="flex flex-col flex-wrap items-start justify-between gap-[60px] sm:flex-row">
          <div className="flex flex-wrap items-center gap-3.5 text-[13px] uppercase tracking-[.1em]">
            {nowPipeline.map((step, i) => (
              <span key={step} className="flex items-center gap-3.5">
                <span className={i === nowPipelineActiveIndex ? "text-accent" : "text-ink-faint"}>{step}</span>
                {i < nowPipeline.length - 1 && <span className="text-ink-faint">→</span>}
              </span>
            ))}
          </div>
          <div className="flex max-w-[420px] flex-wrap gap-2.5">
            {nowFocus.map((tag) => (
              <span key={tag} className="rounded-sm border border-line px-[13px] py-[7px] text-[12.5px] text-ink-dim">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
