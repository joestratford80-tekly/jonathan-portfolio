import type { JourneyStage } from "@/types";

// ============================================
// EDIT THIS FILE TO UPDATE THE JOURNEY TIMELINE
// ============================================
// Each entry is one stage in the timeline shown in
// the "Journey" section, in the order they appear
// (top to bottom).
// ============================================

export const journeyStages: JourneyStage[] = [
  {
    title: "Foundations",
    status: "Ongoing",
    desc: "Core computer science and mathematical thinking — logic, structures, and how systems are put together.",
    tools: ["Python", "Git", "CS Fundamentals"],
  },
  {
    title: "Programming",
    status: "Ongoing",
    desc: "Writing real software, not just scripts — structuring code that other people, and future Jonathan, can read.",
    tools: ["Python", "JavaScript", "GitHub"],
  },
  {
    title: "Data",
    status: "Ongoing",
    desc: "Learning to read raw data before trying to model it — understanding distributions, gaps, and what a dataset is actually saying.",
    tools: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Machine Learning",
    status: "Current focus",
    desc: "Working hands-on with real datasets — from financial behavior data to speech recognition — building baselines and comparing modeling strategies.",
    tools: ["Scikit-learn", "LightGBM", "PyTorch"],
  },
  {
    title: "Deep Learning",
    status: "Next",
    desc: "Understanding neural networks deeply enough to reason about architecture choices — not just calling .fit().",
    tools: ["PyTorch", "Transformers"],
  },
  {
    title: "Artificial Intelligence",
    status: "Next",
    desc: "Exploring how models generalize, how they fail, and how research ideas move from paper to practice.",
    tools: ["Research", "Evaluation"],
  },
  {
    title: "AI Engineering",
    status: "Long-term goal",
    desc: "Turning models and experiments into systems people can actually use.",
    tools: ["Systems Design", "MLOps"],
  },
];
