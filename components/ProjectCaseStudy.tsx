import type { Project } from "@/types";

/**
 * Full, non-collapsible rendering of a project's case study —
 * used on the dedicated /projects/[slug] page. This is the same
 * content shown inline (collapsed) on the homepage's project card,
 * just always expanded and given more room to breathe.
 */
export default function ProjectCaseStudy({ project }: { project: Project }) {
  const hasMetrics = project.metrics.length > 0;

  return (
    <article>
      <div className="font-display text-[13px] text-ink-faint">Project — {project.index}</div>
      <h1 className="mt-2.5 font-display text-[clamp(2.2rem,5.5vw,4.2rem)] font-bold tracking-[-.01em]">
        {project.title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {project.category.map((c) => (
          <span
            key={c}
            className="rounded-sm border border-line px-2.5 py-[5px] text-[11.5px] uppercase tracking-[.06em] text-ink-faint"
          >
            {c}
          </span>
        ))}
        <span className="rounded-sm border border-line px-2.5 py-[5px] text-[11.5px] uppercase tracking-[.06em] text-ink-faint">
          {project.year}
        </span>
      </div>

      <p className="mt-8 max-w-[70ch] text-lg text-ink-dim">{project.overview}</p>

      <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line pt-12 md:grid-cols-2 md:gap-x-[60px]">
        <Block title="Problem" items={project.problem} />
        <Block title="Approach" items={project.approach} />
        <Block title="Technologies" items={project.tech} />

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
            <p className="text-[14.5px] text-ink-dim">
              No final competition result to report yet — this project is ongoing.
            </p>
          )}
        </div>

        <Block title="Lessons" items={project.lessons} />
        <Block title="Next Steps" items={project.next} />

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
    </article>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
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
