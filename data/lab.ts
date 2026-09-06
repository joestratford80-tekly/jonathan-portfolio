import type { LabEntry } from "@/types";

// ============================================
// EDIT THIS FILE TO ADD A NEW LAB ENTRY
// ============================================
// The Lab is a running build log. Add a new object
// to the TOP of this array each time you want to log
// a new experiment, note, or thing that didn't work.
// Use "—" for `failed` if nothing notable failed.
// ============================================

export const labEntries: LabEntry[] = [
  {
    tag: "Log 01",
    project: "WAXAL ASR",
    learned: "JiWER and WER behave differently across languages once accent variation enters the picture.",
    built: "A baseline reproduction pipeline for the WAXAL dataset.",
    failed: "An early inference run assumed language metadata that isn't available at test time.",
    next: "Expand experimentation across model checkpoints.",
  },
  {
    tag: "Log 02",
    project: "FSP",
    learned: "Class imbalance changes how ROC-AUC and log loss should be read.",
    built: "A baseline LightGBM classifier without class weighting.",
    failed: "An early feature set overweighted a single transaction-count signal.",
    next: "Compare weighted vs. unweighted training strategies.",
  },
  {
    tag: "Log 03",
    project: "General practice",
    learned: "Small, frequent experiments build intuition faster than reading alone.",
    built: "A structured template for tracking experiments.",
    failed: "—",
    next: "Keep building, keep logging.",
  },
];

// ============================================
// EDIT THIS TO UPDATE THE "CURRENTLY BUILDING" SECTION
// ============================================
export const nowPipeline: string[] = ["Learning", "Building", "Testing", "Iterating"];
/** Which step (by index) in nowPipeline is currently highlighted */
export const nowPipelineActiveIndex = 1;

export const nowFocus: string[] = [
  "AI Engineering foundations",
  "Machine Learning",
  "Deep Learning",
  "Data",
  "AI systems",
  "Technical projects",
  "AI research",
  "Creative technology",
];
