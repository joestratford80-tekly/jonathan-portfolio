"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Optional delay in seconds, useful for staggering a list of items */
  delay?: number;
  as?: "div" | "section";
}

/**
 * Fades and slides content up into place once it scrolls into view.
 * Mirrors the original site's `.reveal` / `.reveal.in` CSS classes,
 * and automatically respects prefers-reduced-motion.
 */
export default function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 0.8, 0.28, 1] }}
    >
      {children}
    </Component>
  );
}
