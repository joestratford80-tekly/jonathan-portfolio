import Reveal from "./Reveal";
import { socialLinks } from "@/data/socialLinks";
import { resume } from "@/data/siteContent";

export default function Resume() {
  return (
    <section id="resume" className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto max-w-wrap px-8">
        <Reveal className="flex flex-wrap items-center justify-between gap-[30px]">
          <div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-semibold">{resume.heading}</h2>
            <p className="mt-3.5 text-[12.5px] text-ink-faint">{resume.note}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={socialLinks.resume}
              className="inline-flex items-center gap-2.5 rounded-sm border border-line px-[26px] py-[15px] text-[13px] font-semibold uppercase tracking-[.06em] transition-all duration-[350ms] ease-site hover:-translate-y-0.5 hover:border-accent-line hover:text-accent"
            >
              View Resume
            </a>
            <a
              href={socialLinks.resume}
              className="inline-flex items-center gap-2.5 rounded-sm bg-ink px-[26px] py-[15px] text-[13px] font-semibold uppercase tracking-[.06em] text-bg transition-all duration-[350ms] ease-site hover:-translate-y-0.5 hover:bg-accent hover:text-white"
            >
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
