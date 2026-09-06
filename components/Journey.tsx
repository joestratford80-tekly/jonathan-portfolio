"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { journeyStages } from "@/data/journey";
import { journeyQuote } from "@/data/siteContent";
import { cx } from "@/lib/utils";

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSet, setActiveSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll("[data-stage]");
    if (!items || items.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        setActiveSet((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            const idx = Number((entry.target as HTMLElement).dataset.stage);
            if (entry.isIntersecting) next.add(idx);
            else next.delete(idx);
          });
          return next;
        });
      },
      { threshold: 0.4 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="journey" className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto max-w-wrap px-8">
        <Reveal className="mb-16 max-w-[640px]">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.14em] text-ink-faint">
            <span className="h-px w-7 bg-accent-line" /> 02 / Journey
          </div>
          <h2 className="mt-3.5 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-[-.01em]">
            The journey to AI Engineering
          </h2>
        </Reveal>

        <Reveal
          as="section"
          className="mb-20 max-w-[720px] border-l-2 border-accent pl-6 font-display text-[clamp(1.3rem,2.4vw,1.9rem)] font-medium leading-[1.4]"
        >
          &ldquo;{journeyQuote}&rdquo;
        </Reveal>

        <div ref={containerRef} className="relative">
          <div className="absolute bottom-2 left-4 top-2 w-px bg-line" aria-hidden="true" />
          {journeyStages.map((stage, i) => (
            <Reveal
              as="div"
              key={stage.title}
              className={cx(
                "relative grid grid-cols-[32px_1fr] gap-[34px] py-[34px] transition-opacity duration-[600ms] ease-site",
                activeSet.has(i) ? "opacity-100" : "opacity-40"
              )}
            >
              <div data-stage={i} className="absolute inset-0" aria-hidden="true" />
              <div
                className={cx(
                  "relative z-[1] mt-2 h-[9px] w-[9px] rounded-full transition-[background,box-shadow] duration-[400ms]",
                  activeSet.has(i) ? "bg-accent shadow-[0_0_0_5px_var(--tw-shadow-color)] shadow-accent-soft" : "bg-line"
                )}
              />
              <div>
                <div className="flex flex-wrap items-baseline gap-4">
                  <h3 className="font-display text-[clamp(1.3rem,2.4vw,1.7rem)] font-semibold">{stage.title}</h3>
                  <span className="rounded-sm border border-accent-line px-2.5 py-1 text-[11px] uppercase tracking-[.1em] text-accent">
                    {stage.status}
                  </span>
                </div>
                <p className="mt-3.5 max-w-[60ch] text-ink-dim">{stage.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stage.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-sm border border-line px-2.5 py-1 text-[11.5px] text-ink-faint"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
