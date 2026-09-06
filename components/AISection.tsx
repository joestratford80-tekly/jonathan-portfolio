import Reveal from "./Reveal";
import TechStack from "./TechStack";
import { aiCapabilities } from "@/data/capabilities";

export default function AISection() {
  return (
    <section id="ai" className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto max-w-wrap px-8">
        <Reveal className="mb-16 max-w-[640px]">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.14em] text-ink-faint">
            <span className="h-px w-7 bg-accent-line" /> 04 / AI
          </div>
          <h2 className="mt-3.5 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-[-.01em]">
            What I do with AI
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {aiCapabilities.map((c, i) => (
            <div key={c.title} className="bg-bg p-9 px-[30px] transition-colors duration-[400ms] ease-site hover:bg-bg-alt">
              <div className="text-[11px] tracking-[.1em] text-ink-faint">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-3.5 font-display text-[1.15rem] font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-ink-dim">{c.desc}</p>
            </div>
          ))}
        </Reveal>

        <TechStack />
      </div>
    </section>
  );
}
