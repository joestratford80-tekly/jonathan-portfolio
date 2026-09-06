import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { projects } from "@/data/projects";

interface PageProps {
  params: { slug: string };
}

// Pre-render a page for every project at build time.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Jonathan Okoloko`,
    description: project.overview,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <section className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto max-w-wrap px-8">
        <Link
          href="/#projects"
          className="mb-16 inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[.08em] text-ink-faint transition-colors hover:text-accent"
        >
          ← Back to all projects
        </Link>
        <ProjectCaseStudy project={project} />
      </div>
    </section>
  );
}
