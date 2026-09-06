import Reveal from "./Reveal";
import { techStack } from "@/data/techStack";

export default function TechStack() {
  return (
    <div className="mt-24">
      <div className="mb-11">
        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.14em] text-ink-faint">
          <span className="h-px w-7 bg-accent-line" /> Tech Stack
        </div>
        <h2 className="mt-3.5 font-display text-[clamp(1.7rem,3vw,2.2rem)] font-semibold">Tools I actually use</h2>
      </div>

      <div>
        {techStack.map((cat) => (
          <Reveal key={cat.cat} className="mb-11">
            <h4 className="mb-[18px] text-[11.5px] uppercase tracking-[.12em] text-ink-faint">{cat.cat}</h4>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="tech-item group relative cursor-default rounded-sm border border-line px-[18px] py-3 text-[14.5px] transition-colors duration-300 hover:border-accent-line hover:text-accent"
                >
                  {item.name}
                  <div className="pointer-events-none absolute bottom-[calc(100%+10px)] left-0 z-10 w-[230px] rounded-sm border border-line bg-surface p-3.5 text-[12.5px] leading-[1.5] text-ink-dim opacity-0 transition-[opacity,transform] duration-300 ease-site group-hover:translate-y-0 group-hover:opacity-100 translate-y-1.5">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
