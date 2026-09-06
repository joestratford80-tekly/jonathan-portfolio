"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/types";
import { cx } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const hasMetrics = project.metrics.length > 0;

  return (
    <div className="border-t border-line py-16 first-of-type:border-t">
      <div className="flex flex-wrap items-start justify-between gap-[30px]">
        <div>
          <div className="font-display text-[13px] text-ink-faint">Project — {project.index}</div>
          <h3 className="mt-2.5 font-display text-[clamp(2rem,4.6vw,3.6rem)] font-bold tracking-[-.01em]">
            {project.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {project.category.map((c) => (
              <span
                key={c}
                className="rounded-sm border border-line px-2.5 py-[5px] text-[11.5px] uppercase tracking-[.06em] text-ink-faint"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="whitespace-nowrap font-display text-sm text-ink-faint">{project.year}</div>
      </div>

      <p className="mt-[26px] max-w-[70ch] text-base text-ink-dim">{project.overview}</p>

      <div className="mt-[26px] flex flex-wrap items-center gap-6">
        <button
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="project-toggle inline-flex items-center gap-2 border-b border-accent-line pb-0.5 text-[12.5px] uppercase tracking-[.08em] text-accent"
        >
          {open ? "Hide case study" : "View case study"}{" "}
          <span className={cx("inline-block transition-transform duration-[350ms] ease-site", open && "rotate-90")}>
            ›
          </span>
        </button>
        <Link
          href={`/projects/${project.slug}`}
          className="border-b border-line pb-0.5 text-[12.5px] uppercase tracking-[.08em] text-ink-dim transition-colors hover:border-accent-line hover:text-accent"
        >
          Full case study page →
        </Link>
      </div>

      <div
        className="overflow-hidden transition-[max-height] duration-[600ms] ease-site"
        style={{ maxHeight: open ? "3000px" : "0px" }}
      >
        <div className="grid grid-cols-1 gap-9 pt-11 md:grid-cols-2 md:gap-x-[60px]">
          <DetailBlock title="Problem" items={project.problem} />
          <DetailBlock title="Approach" items={project.approach} />
          <DetailBlock title="Technologies" items={project.tech} />

          <div>
            <h4 className="mb-2.5 text-[11.5px] uppercase tracking-[.1em] text-accent">Results</h4>
            {project.metricNote && <p className="mb-3 text-[14.5px] text-ink-dim">{project.metricNote}</p>}
            {hasMetrics ? (
              <div className="mt-1.5 flex flex-wrap gap-[34px]">
                {project.metrics.map((m) => (
                  <div key={m.l}>
                    <div className="font-display text-[1.7rem] font-semibold">{m.v}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[.08em] text-ink-faint">{m.l}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[14.5px] text-ink-dim">No final competition result to report yet — this project is ongoing.</p>
            )}
          </div>

          <DetailBlock title="Lessons" items={project.lessons} />
          <DetailBlock title="Next Steps" items={project.next} />

          <div className="md:col-span-2">
            <h4 className="mb-2.5 text-[11.5px] uppercase tracking-[.1em] text-accent">Status</h4>
            <p className="text-[14.5px] text-ink-dim">{project.status}</p>
            <div className="mt-4 flex flex-wrap gap-[22px]">
              {Object.entries(project.links).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-line pb-0.5 text-[12.5px] uppercase tracking-[.06em] text-ink-dim transition-colors hover:border-accent-line hover:text-accent"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-2.5 text-[11.5px] uppercase tracking-[.1em] text-accent">{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item} className="relative mb-1.5 pl-4 text-[14.5px] leading-[1.7] text-ink-dim">
            <span className="absolute left-0 text-ink-faint">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
