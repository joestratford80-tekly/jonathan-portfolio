"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { socialLinks } from "@/data/socialLinks";
import { hero, heroIdentity, heroIdentityInterval, heroIdentityFinalHoldBonus, siteMeta } from "@/data/siteContent";

/**
 * Rotates through `heroIdentity`. Hierarchy communicated:
 * WHO I AM (headline) -> WHAT I'M BECOMING (rotator) -> WHAT I BUILD (sub headline).
 * The final phrase in the list is held longer for emphasis.
 */
function useIdentityRotator() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let timeout: ReturnType<typeof setTimeout>;

    function schedule() {
      const isFinal = index === heroIdentity.length - 1;
      const hold = heroIdentityInterval + (isFinal ? heroIdentityFinalHoldBonus : 0);
      timeout = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setIndex((i) => (i + 1) % heroIdentity.length);
          setVisible(true);
        }, 400);
      }, hold);
    }

    schedule();
    return () => clearTimeout(timeout);
  }, [index]);

  return { word: heroIdentity[index], visible };
}

export default function Hero() {
  const { word, visible } = useIdentityRotator();

  return (
    <section id="hero" className="relative flex min-h-screen items-center pb-20 pt-[120px]">
      <div className="mx-auto grid w-full max-w-wrap grid-cols-1 gap-[60px] px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
        <div>
          <div className="mb-[26px] flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.14em] text-ink-faint">
            <span className="text-accent">/</span> {hero.eyebrow}
          </div>
          <h1 className="font-display text-[clamp(3rem,7.4vw,6.2rem)] font-bold leading-[.98] tracking-[-.02em]">
            {hero.headline.map((line, i) => (
              <span key={i}>
                {line}
                {i < hero.headline.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <div className="mt-[22px] font-display text-[clamp(1.1rem,2vw,1.5rem)] font-medium tracking-[-.005em] text-accent">
            {hero.sub}
          </div>
          <p className="mt-[26px] max-w-[480px] text-base text-ink-dim">{hero.copy}</p>
          <div className="mt-[34px] flex items-baseline gap-2.5 text-sm">
            <span className="text-xs uppercase tracking-[.1em] text-ink-faint">I&apos;M A</span>
            <span
              className="font-display text-lg font-semibold text-ink transition-all duration-400 ease-site"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(6px)" }}
            >
              {word}
            </span>
          </div>
          <div className="mt-11 flex flex-wrap gap-[18px]">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 rounded-sm bg-ink px-[26px] py-[15px] text-[13px] font-semibold uppercase tracking-[.06em] text-bg transition-all duration-[350ms] ease-site hover:-translate-y-0.5 hover:bg-accent hover:text-white"
            >
              Explore My Work →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-sm border border-line px-[26px] py-[15px] text-[13px] font-semibold uppercase tracking-[.06em] transition-all duration-[350ms] ease-site hover:-translate-y-0.5 hover:border-accent-line hover:text-accent"
            >
              Let&apos;s Connect ↗
            </a>
          </div>
          <div className="mt-[46px] flex gap-[22px]">
            <a
              href={socialLinks.github}
              className="border-b border-transparent pb-0.5 text-xs uppercase tracking-[.1em] text-ink-faint transition-colors hover:border-accent-line hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              className="border-b border-transparent pb-0.5 text-xs uppercase tracking-[.1em] text-ink-faint transition-colors hover:border-accent-line hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.email}
              className="border-b border-transparent pb-0.5 text-xs uppercase tracking-[.1em] text-ink-faint transition-colors hover:border-accent-line hover:text-accent"
            >
              Email
            </a>
          </div>
        </div>

        <Reveal className="relative">
          <div className="absolute -top-[30px] left-0 font-display text-xs tracking-[.1em] text-ink-faint">
            [ PORTRAIT ]
          </div>
          <div className="portrait-box group relative aspect-[4/5] overflow-hidden border border-line bg-surface">
            <Image
              src="/images/profile/profile.jpg"
              alt={`Portrait of ${siteMeta.name}`}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="object-cover transition-[filter,transform] duration-[1200ms] ease-site [filter:grayscale(.55)_contrast(1.05)_brightness(.92)] group-hover:scale-[1.02] group-hover:[filter:grayscale(.1)_contrast(1.05)_brightness(.98)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/75" />
          </div>
          <div className="mt-3.5 flex justify-between text-[11.5px] uppercase tracking-[.08em] text-ink-faint">
            <span>{siteMeta.name}</span>
            <span>{siteMeta.location}</span>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-9 left-8 hidden items-center gap-2.5 text-[11px] uppercase tracking-[.14em] text-ink-faint sm:flex">
        <span className="h-[34px] w-px animate-cue bg-gradient-to-b from-accent to-transparent" /> Scroll
      </div>
    </section>
  );
}
