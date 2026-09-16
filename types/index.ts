// ============================================
// SHARED TYPES
// These describe the shape of everything in /data.
// You shouldn't need to edit this file when adding
// content — only when you want to add a genuinely
// new field to one of these models.
// ============================================

export interface ProjectMetric {
  /** The value to display, e.g. "0.878064" */
  v: string;
  /** The label under the value, e.g. "Validation ROC-AUC" */
  l: string;
}

export interface ProjectLinks {
  [label: string]: string;
}

export interface Project {
  /** Unique URL-friendly id, used for /projects/[slug] pages */
  slug: string;
  /** Display index, e.g. "01" */
  index: string;
  title: string;
  category: string[];
  year: string;
  overview: string;
  problem: string[];
  approach: string[];
  tech: string[];
  metrics: ProjectMetric[];
  /** Optional note shown above the metrics (e.g. what the numbers represent) */
  metricNote?: string;
  lessons: string[];
  next: string[];
  status: string;
  links: ProjectLinks;
  /** Set true to feature this project first / prominently */
  featured?: boolean;
  /** Optional: path to a project image under /public/images/projects */
  image?: string;
  /**
   * Optional: a longer, freeform case study. When present, the project can
   * link out to a dedicated /projects/[slug] page instead of (or in
   * addition to) the inline expandable case study.
   */
  caseStudy?: string;
}

export interface JourneyStage {
  title: string;
  status: string;
  desc: string;
  tools: string[];
}

export interface TechItem {
  name: string;
  note: string;
}

export interface TechCategory {
  cat: string;
  items: TechItem[];
}

export interface AICapability {
  title: string;
  desc: string;
}

export interface LabEntry {
  tag: string;
  project: string;
  learned: string;
  built: string;
  failed: string;
  next: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  kaggle: string;
  behance: string;
  tekly: string;
  resume: string;
}
