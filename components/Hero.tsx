"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { socialLinks } from "@/data/socialLinks";
import { hero, heroIdentity, heroIdentityInterval, heroIdentityFinalHoldBonus, siteMeta } from "@/data/siteContent";

function useIdentityRotator() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timeout: ReturnType<typeof setTimeout>;
    let fadeTimeout: ReturnType<typeof setTimeout>;

    function schedule() {
      const isFinal = index === heroIdentity.length - 1;
      timeout = setTimeout(() => {
        setVisible(false);
        fadeTimeout = setTimeout(() => {
          setIndex((current) => (current + 1) % heroIdentity.length);
          setVisible(true);
        }, 300);
      }, heroIdentityInterval + (isFinal ? heroIdentityFinalHoldBonus : 0));
    }

    schedule();
    return () => {
      clearTimeout(timeout);
      clearTimeout(fadeTimeout);
    };
  }, [index]);

  return { word: heroIdentity[index], visible };
}

export default function Hero() {
  const { word, visible } = useIdentityRotator();

  return (
    <section id="hero" className="hero-section relative flex min-h-screen items-center overflow-hidden pb-16 pt-[120px]">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-orb hero-orb-one pointer-events-none absolute" aria-hidden="true" />
      <div className="hero-orb hero-orb-two pointer-events-none absolute" aria-hidden="true" />

      <div className="relative z-[1] mx-auto grid w-full max-w-wrap grid-cols-1 items-center gap-8 px-6 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-2">
        <div className="relative z-[2] py-8 lg:py-16">
          <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.2em] text-ink-faint">
            <span className="h-px w-8 bg-accent" /> {hero.eyebrow}
          </div>

          <h1 className="hero-title font-display text-[clamp(3.35rem,8.2vw,7.4rem)] font-bold leading-[.88] tracking-[-.075em]">
            {hero.headline.map((line, i) => (
              <span key={i} className={i === hero.headline.length - 1 ? "hero-title-accent block" : "block"}>
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="font-display text-[clamp(1rem,1.8vw,1.3rem)] font-medium tracking-[.04em] text-ink">
              {hero.sub}
            </p>
          </div>

          <p className="mt-7 max-w-[510px] text-[15px] leading-[1.9] text-ink-dim sm:text-base">{hero.copy}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-ink-faint">Currently</span>
            <span
              className="font-display text-base font-semibold text-accent transition-all duration-300 ease-site sm:text-lg"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(5px)" }}
              aria-live="polite"
            >
              {word}
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="hero-primary-link inline-flex items-center gap-3 px-6 py-4 text-[11px] font-bold uppercase tracking-[.13em]">
              Explore selected work <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="hero-secondary-link inline-flex items-center gap-3 px-6 py-4 text-[11px] font-bold uppercase tracking-[.13em]">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3">
            {[["GitHub", socialLinks.github], ["LinkedIn", socialLinks.linkedin], ["Email", socialLinks.email]].map(([label, href]) => (
              <a key={label} href={href} className="hero-social-link text-[10px] font-semibold uppercase tracking-[.18em] text-ink-faint">
                {label}
              </a>
            ))}
          </div>
        </div>

        <Reveal className="portrait-composition relative mx-auto w-full max-w-[570px] lg:-ml-5 lg:mt-2">
          <div className="portrait-index absolute left-4 top-8 z-[2] font-display text-[10px] uppercase tracking-[.22em] text-ink-faint sm:left-0">
            <span className="text-accent">01</span> / THE PERSON BEHIND THE WORK
          </div>
          <div className="portrait-stage relative mx-auto aspect-[4/5] w-full max-w-[540px]">
            <div className="portrait-ghost font-display" aria-hidden="true">JO</div>
            <Image
              src="/images/profile/profile.jpg"
              alt={`Portrait of ${siteMeta.name}`}
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 48vw"
              className="portrait-image object-cover"
            />
            <div className="portrait-light" aria-hidden="true" />
          </div>
          <div className="portrait-caption relative z-[2] -mt-5 flex items-center justify-between px-5 text-[10px] font-semibold uppercase tracking-[.17em] sm:px-0">
            <span>{siteMeta.name}</span>
            <span className="text-accent">{siteMeta.location}, NG</span>
          </div>
          <div className="portrait-note absolute bottom-16 right-0 z-[2] hidden max-w-[150px] border-l border-accent pl-3 text-[10px] uppercase leading-[1.7] tracking-[.12em] text-ink-faint sm:block">
            Learning in public. Building with intent.
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-8 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[.2em] text-ink-faint sm:flex">
        <span className="scroll-line h-9 w-px bg-accent" /> Scroll to explore
      </div>
      <div className="absolute bottom-8 right-8 hidden text-[10px] uppercase tracking-[.18em] text-ink-faint sm:block">Portfolio / 2026</div>
    </section>
  );
}
