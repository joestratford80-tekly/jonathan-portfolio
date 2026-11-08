import Reveal from "./Reveal";
import TechStack from "./TechStack";
import { aiCapabilities } from "@/data/capabilities";

export default function AISection() {
  return (
    <section id="ai" className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto max-w-wrap px-8">
        <Reveal className="mb-16 max-w-[700px]">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.18em] text-ink-faint">
            <span className="h-px w-8 bg-accent" /> 04 / AI & Engineering
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5.2vw,4.5rem)] font-semibold leading-[.98] tracking-[-.05em]">
            Turning curiosity<br /><span className="text-accent">into capability.</span>
          </h2>
          <p className="mt-6 max-w-[570px] text-[15px] leading-[1.85] text-ink-dim">
            The areas I am actively studying and applying through projects, experiments, and deliberate practice.
          </p>
        </Reveal>

        <Reveal className="capability-grid grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {aiCapabilities.map((c, i) => (
            <div key={c.title} className="capability-card group relative min-h-[190px] bg-bg p-8 transition-colors duration-500 hover:bg-bg-alt sm:p-9">
              <div className="flex items-center justify-between">
                <span className="font-display text-[11px] tracking-[.16em] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-ink-faint transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
              </div>
              <h3 className="mt-8 font-display text-[1.15rem] font-semibold tracking-[-.02em]">{c.title}</h3>
              <p className="mt-3 text-sm leading-[1.8] text-ink-dim">{c.desc}</p>
            </div>
          ))}
        </Reveal>

        <TechStack />
      </div>
    </section>
  );
}
