import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto max-w-wrap px-8">
        <Reveal className="mb-16 max-w-[700px]">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.18em] text-ink-faint">
            <span className="h-px w-8 bg-accent" /> 03 / Selected Work
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5.2vw,4.5rem)] font-semibold leading-[.98] tracking-[-.05em]">
            Work in progress.<br /><span className="text-accent">Proof in the process.</span>
          </h2>
          <p className="mt-6 max-w-[570px] text-[15px] leading-[1.85] text-ink-dim">
            A closer look at the problems I am exploring, the systems I am building, and the engineering decisions behind each experiment.
          </p>
        </Reveal>

        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
