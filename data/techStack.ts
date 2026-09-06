import type { TechCategory } from "@/types";

// ============================================
// EDIT THIS FILE TO ADD A NEW TECHNOLOGY
// ============================================
// Add a new tool by pushing a new object into the
// `items` array of an existing category, or add a
// whole new category by adding a new object to this
// top-level array.
// ============================================

export const techStack: TechCategory[] = [
  {
    cat: "Languages",
    items: [
      { name: "Python", note: "Used for machine learning, data processing, experimentation and AI projects." },
      { name: "JavaScript", note: "Used for building interactive interfaces and web experiences." },
      { name: "HTML", note: "Used to structure content for web projects." },
      { name: "CSS", note: "Used to style and lay out web projects." },
    ],
  },
  {
    cat: "AI / Machine Learning",
    items: [
      { name: "PyTorch", note: "Used for building and training speech and machine learning models." },
      { name: "Transformers", note: "Used for working with pretrained speech and language models." },
      { name: "Hugging Face", note: "Used for datasets, model hubs, and evaluation tooling." },
      { name: "LightGBM", note: "Used for gradient-boosted classification on tabular financial data." },
      { name: "Scikit-learn", note: "Used for baseline modeling and evaluation." },
    ],
  },
  {
    cat: "Data",
    items: [
      { name: "Pandas", note: "Used for data cleaning, transformation and analysis." },
      { name: "NumPy", note: "Used for numerical computation." },
      { name: "Matplotlib", note: "Used for visualizing data and model results." },
    ],
  },
  {
    cat: "AI / Research",
    items: [
      { name: "Weights & Biases", note: "Used for tracking experiments and comparing runs." },
      { name: "Hugging Face", note: "Used for accessing datasets and evaluation metrics." },
    ],
  },
  {
    cat: "Development",
    items: [
      { name: "Git", note: "Used for version control." },
      { name: "GitHub", note: "Used for hosting and collaborating on code." },
      { name: "VS Code", note: "Primary development environment." },
    ],
  },
];
