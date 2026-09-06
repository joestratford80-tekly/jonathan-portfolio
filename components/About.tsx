"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { aboutCopy, intersectionWords, traits } from "@/data/siteContent";

function useWordRotator(words: string[], intervalMs: number) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words, intervalMs]);

  return { word: words[index], visible };
}

export default function About() {
  const { word, visible } = useWordRotator(intersectionWords, 2200);

  return (
    <section id="about" className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto max-w-wrap px-8">
        <Reveal className="mb-16 max-w-[640px]">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.14em] text-ink-faint">
            <span className="h-px w-7 bg-accent-line" /> 01 / About
          </div>
          <h2 className="mt-3.5 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-[-.01em]">
            About me
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-[1.25] tracking-[-.01em] lg:sticky lg:top-[120px] lg:self-start">
            Technology is the direction. <span className="text-accent">Creativity is the advantage.</span>
          </Reveal>

          <Reveal>
            {aboutCopy.paragraphs.map((p, i) => (
              <p key={i} className="mb-5 max-w-[60ch] text-ink-dim">
                {p}
              </p>
            ))}

            <div className="mt-11 border-t border-line pt-9">
              <div className="text-[13px] uppercase tracking-[.08em] text-ink-faint">At the intersection of</div>
              <div
                className="mt-2 min-h-[1.3em] font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-accent transition-opacity duration-400 ease-site"
                style={{ opacity: visible ? 1 : 0 }}
              >
                {word}
              </div>
            </div>

            <div className="mt-[38px] flex flex-wrap gap-x-3.5 gap-y-2.5">
              {traits.map((t, i) => (
                <span key={t} className="text-[13px] text-ink-dim">
                  {t}
                  {i < traits.length - 1 && <span className="ml-3.5 text-ink-faint">·</span>}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
