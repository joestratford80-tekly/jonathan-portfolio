import type { Project } from "@/types";

// ============================================
// EDIT THIS FILE TO ADD OR UPDATE PROJECTS
// ============================================
// Each object in this array becomes one project on
// the site. To add "Project 3", copy one of the
// objects below, change every field, and give it a
// unique `slug`. You never need to touch the
// Projects or ProjectCard components.
//
// Metrics, results, and status should always reflect
// what has actually happened — never invent a
// leaderboard placement, ranking, or outcome that
// hasn't occurred yet. If a project is still ongoing,
// say so in `status` and leave `metrics` empty (or
// partial).
// ============================================

export const projects: Project[] = [
  {
    slug: "waxal-asr",
    index: "01",
    title: "WAXAL-ASR-2026",
    category: ["Automatic Speech Recognition", "AI / NLP / Speech", "Machine Learning"],
    year: "2026",
    overview:
      "An individual project on Automatic Speech Recognition for low-resource African languages, built through the WAXAL ASR challenge. The work explores what it actually takes to build speech recognition systems where training resources are limited.",
    problem: [
      "Limited training data",
      "Language diversity across the dataset",
      "Speaker and accent variation",
      "Microphone and environmental noise differences",
      "Reliable model evaluation",
      "Inference without assuming language metadata is available at test time",
    ],
    approach: [
      "Dataset understanding",
      "Baseline reproduction",
      "Validation",
      "Experimentation",
      "Model development",
      "Evaluation",
      "Inference",
      "Competition submission",
    ],
    tech: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "Hugging Face Datasets",
      "Evaluate",
      "JiWER",
      "Librosa",
      "Weights & Biases",
    ],
    metrics: [],
    lessons: [
      "Language-specific metrics like WER are only meaningful when language labels are available during validation — test-time inference can't assume the same.",
      "Evaluation code needs to be as carefully engineered as the model itself.",
    ],
    next: [
      "Expand experimentation across model checkpoints",
      "Refine inference to handle unseen language variation",
    ],
    status: "Ongoing research / engineering project — result not yet final.",
    links: { GitHub: "#", "Hugging Face": "#", "Weights & Biases": "#", Competition: "#" },
    featured: true,
  },
  {
    slug: "fsp",
    index: "02",
    title: "FSP — Financial Services Prediction",
    category: ["Machine Learning", "Financial Data", "Classification"],
    year: "2026",
    overview:
      "A machine-learning classification project working with customer-level financial behavior data — transactions, transfers, bill payments, airtime purchases, cashouts, merchant payments, agent withdrawals, and account activity.",
    problem: [
      "Understanding a wide, real-world feature set",
      "Investigating class imbalance in the target variable",
      "Choosing evaluation metrics that reflect the imbalance",
    ],
    approach: [
      "Data understanding",
      "Exploratory data analysis",
      "Feature analysis",
      "Baseline model",
      "Model experimentation",
      "Evaluation",
      "Model comparison",
      "Iteration",
    ],
    tech: ["Python", "Pandas", "LightGBM", "Scikit-learn"],
    metrics: [
      { v: "0.878064", l: "Validation ROC-AUC" },
      { v: "0.284482", l: "Validation Log Loss" },
      { v: "10.85s", l: "Training Time" },
    ],
    metricNote: "Documented experiment: raw LightGBM, without class weighting.",
    lessons: [
      "ROC-AUC and log loss tell different stories once class imbalance enters the picture.",
      "A clean baseline is worth more than a rushed, over-tuned model.",
    ],
    next: [
      "Compare class-weighted vs. unweighted strategies",
      "Test feature-engineering variations against the baseline",
    ],
    status: "Completed experimentation phase documented here; broader iteration ongoing.",
    links: { Kaggle: "#", GitHub: "#" },
  },
];
