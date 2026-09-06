"use client";

import { useEffect, useRef, useState } from "react";
import { introLines, introTiming, splashBgWords } from "@/data/siteContent";

interface BgWord {
  id: number;
  word: string;
  top: string;
  left: string;
  fontSize: string;
}

const SESSION_KEY = "jo_intro_seen";

/**
 * Cinematic intro splash screen.
 *
 * Behavior preserved from the original design:
 * - typewriter effect through `introLines`
 * - blinking text cursor
 * - randomly placed, fading background words
 * - a skip button
 * - sessionStorage so returning visitors (within the same
 *   tab session) get a much shorter version
 * - full prefers-reduced-motion support
 */
export default function SplashScreen() {
  const [hidden, setHidden] = useState(false);
  const [typed, setTyped] = useState("");
  const [doneCount, setDoneCount] = useState(0);
  const [bgWords, setBgWords] = useState<BgWord[]>([]);
  const [showChrome, setShowChrome] = useState(true);
  const endedRef = useRef(false);
  const bgWordId = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      seen = false;
    }

    function endSplash() {
      if (endedRef.current) return;
      endedRef.current = true;
      setHidden(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore — private browsing etc. */
      }
      document.body.style.overflow = "";
    }

    if (reduced) {
      setTyped(introLines[introLines.length - 1]);
      setShowChrome(false);
      const t = setTimeout(endSplash, 500);
      return () => clearTimeout(t);
    }

    if (seen) {
      // Shorter intro for returning visitors this session.
      setTyped(introLines[0]);
      const t1 = setTimeout(() => setTyped(introLines[introLines.length - 1]), 500);
      const t2 = setTimeout(endSplash, 1400);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }

    document.body.style.overflow = "hidden";
    let lineIndex = 0;
    let charIndex = 0;
    let typeTimer: ReturnType<typeof setTimeout>;

    function placeBgWord() {
      const word = splashBgWords[Math.floor(Math.random() * splashBgWords.length)];
      const id = bgWordId.current++;
      const newWord: BgWord = {
        id,
        word,
        top: `${10 + Math.random() * 70}%`,
        left: `${5 + Math.random() * 70}%`,
        fontSize: `${1.4 + Math.random() * 2.4}rem`,
      };
      setBgWords((prev) => [...prev, newWord]);
      setTimeout(() => {
        setBgWords((prev) => prev.filter((w) => w.id !== id));
      }, 4000);
    }

    function typeNext() {
      if (lineIndex >= introLines.length) {
        clearInterval(bgTimer);
        setTimeout(endSplash, introTiming.endPause);
        return;
      }
      const line = introLines[lineIndex];
      if (charIndex <= line.length) {
        setTyped(line.slice(0, charIndex));
        charIndex++;
        typeTimer = setTimeout(typeNext, introTiming.charDelay);
      } else {
        setDoneCount((c) => Math.max(c, lineIndex + 1));
        lineIndex++;
        charIndex = 0;
        typeTimer = setTimeout(typeNext, introTiming.linePause);
      }
    }

    const bgTimer = setInterval(placeBgWord, 900);
    const startTimer = setTimeout(typeNext, 500);

    // Expose skip handler via a data attribute-driven click listener
    const skipBtn = document.getElementById("skip-intro");
    const onSkip = () => {
      clearInterval(bgTimer);
      clearTimeout(typeTimer);
      endSplash();
    };
    skipBtn?.addEventListener("click", onSkip);

    return () => {
      clearInterval(bgTimer);
      clearTimeout(startTimer);
      clearTimeout(typeTimer);
      skipBtn?.removeEventListener("click", onSkip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      role="dialog"
      aria-label="Introduction"
      className={`splash-dots fixed inset-0 z-[200] flex flex-col justify-center bg-bg transition-[opacity,transform] duration-[900ms] ease-site ${
        hidden ? "pointer-events-none invisible -translate-y-[3%] scale-[1.01] opacity-0" : ""
      }`}
    >
      {showChrome && (
        <div className="absolute left-10 top-10 hidden text-[11px] uppercase tracking-[.18em] text-ink-faint sm:block">
          [ 01 / INTRO ] <span className="text-accent">●</span> INITIALIZING EXPERIENCE
        </div>
      )}

      <div className="relative w-full px-6 sm:px-10">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {bgWords.map((w) => (
            <span
              key={w.id}
              className="absolute select-none font-display font-semibold tracking-[.02em] text-ink opacity-0 animate-bgword-fade"
              style={{ top: w.top, left: w.left, fontSize: w.fontSize }}
            >
              {w.word}
            </span>
          ))}
        </div>
        <p className="relative ml-0 max-w-[900px] font-display text-[clamp(1.6rem,5.4vw,3.4rem)] font-semibold leading-[1.16] tracking-[-.01em] sm:ml-[6vw]">
          <span>{typed}</span>
          <span className="ml-[2px] inline-block w-[.5ch] animate-blink bg-accent">&nbsp;</span>
        </p>
      </div>

      {showChrome && (
        <div className="absolute bottom-11 left-10 hidden gap-1.5 sm:flex">
          {introLines.map((_, i) => (
            <span
              key={i}
              className={`h-[2px] w-5 ${i < doneCount ? "bg-accent" : "bg-line"}`}
            />
          ))}
        </div>
      )}

      <button
        id="skip-intro"
        className={`absolute bottom-11 right-6 border-b border-transparent text-[11px] uppercase tracking-[.14em] text-ink-faint transition-colors hover:border-accent-line hover:text-ink sm:right-10 ${
          showChrome ? "" : "hidden"
        }`}
      >
        SKIP INTRO →
      </button>
    </div>
  );
}
