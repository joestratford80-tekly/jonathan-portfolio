"use client";

import { useEffect, useState } from "react";
import { socialLinks } from "@/data/socialLinks";
import { cx } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "ai", label: "AI" },
  { id: "creative", label: "Creative" },
  { id: "lab", label: "Lab" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    function onScroll() {
      setScrolled(window.scrollY > 40);
      let current = sections[0]?.id ?? "hero";
      const y = window.scrollY + window.innerHeight * 0.35;
      sections.forEach((s) => {
        if (s.offsetTop <= y) current = s.id;
      });
      setActive(current);
    }

    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cx(
          "fixed left-0 right-0 top-0 z-[100] border-b border-transparent px-0 py-[22px] transition-all duration-[400ms] ease-site",
          scrolled && "border-line bg-bg/[.78] py-4 backdrop-blur-md"
        )}
      >
        <nav className="mx-auto flex max-w-wrap items-center justify-between px-8">
          <a href="#hero" className="font-display text-[15px] font-semibold tracking-[.03em]">
            JONATHAN OKOLOKO
          </a>
          <ul className="hidden items-center gap-[34px] md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cx(
                    "relative py-1 text-[12.5px] uppercase tracking-[.08em] text-ink-dim transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-[width] after:duration-[350ms] after:ease-site hover:text-ink hover:after:w-full",
                    active === item.id && "text-accent after:w-full"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="hidden rounded-sm border border-line px-[26px] py-[15px] text-[13px] font-semibold uppercase tracking-[.06em] transition-all duration-[350ms] ease-site hover:-translate-y-0.5 hover:border-accent-line hover:text-accent md:inline-flex"
            >
              Let&apos;s Talk →
            </a>
            <button
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="flex w-[26px] flex-col gap-[5px] md:hidden"
            >
              <span
                className={cx(
                  "h-px w-full bg-ink transition-transform duration-300 ease-site",
                  menuOpen && "translate-y-[6px] rotate-45"
                )}
              />
              <span
                className={cx(
                  "h-px w-full bg-ink transition-opacity duration-300 ease-site",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cx(
                  "h-px w-full bg-ink transition-transform duration-300 ease-site",
                  menuOpen && "-translate-y-[6px] -rotate-45"
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cx(
          "fixed inset-0 z-[90] flex -translate-y-full flex-col justify-center gap-1 bg-bg px-10 transition-transform duration-500 ease-site md:hidden",
          menuOpen && "translate-y-0"
        )}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setMenuOpen(false)}
            className="border-b border-line py-3.5 font-display text-[2rem]"
          >
            {item.label}
          </a>
        ))}
        <a
          href={socialLinks.email}
          onClick={() => setMenuOpen(false)}
          className="mt-6 inline-flex w-fit rounded-sm border border-line px-6 py-3 text-xs uppercase tracking-[.1em] text-ink-dim"
        >
          Get in touch
        </a>
      </div>
    </>
  );
}
