import Reveal from "./Reveal";
import { socialLinks } from "@/data/socialLinks";
import { tekly } from "@/data/siteContent";

export default function TeklySection() {
  return (
    <section id="tekly" className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto max-w-wrap px-8">
        <Reveal className="mb-16 max-w-[640px]">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.14em] text-ink-faint">
            <span className="h-px w-7 bg-accent-line" /> {tekly.eyebrow}
          </div>
          <h2 className="mt-3.5 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-[-.01em]">
            Tekly
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-2">
          <div>
            <div className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-[1.3]">
              I don&apos;t only want to use technology.{" "}
              <span className="text-accent">I want to build with it.</span>
            </div>
            <a
              href={socialLinks.tekly}
              className="mt-8 inline-flex items-center gap-2.5 rounded-sm border border-line px-[26px] py-[15px] text-[13px] font-semibold uppercase tracking-[.06em] transition-all duration-[350ms] ease-site hover:-translate-y-0.5 hover:border-accent-line hover:text-accent"
            >
              Visit Tekly ↗
            </a>
          </div>
          <div>
            <ul>
              {tekly.points.map((point) => (
                <li key={point} className="border-b border-line py-[9px] text-[14.5px] text-ink-dim">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
