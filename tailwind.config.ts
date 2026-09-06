import type { Config } from "tailwindcss";

// ============================================
// DESIGN TOKENS
// These map 1:1 to the CSS custom properties used
// throughout the original portfolio design.
// Edit here if you ever want to tweak the palette —
// everything else in the site reads from these tokens.
// ============================================
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        "bg-alt": "#111114",
        surface: "#151519",
        line: "#232328",
        ink: "#ECEAE4",
        "ink-dim": "#9C9CA3",
        "ink-faint": "#5C5C63",
        accent: "#5B6EF5",
        "accent-soft": "rgba(91,110,245,0.14)",
        "accent-line": "rgba(91,110,245,0.35)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      maxWidth: {
        wrap: "1240px",
      },
      transitionTimingFunction: {
        site: "cubic-bezier(.16,.8,.28,1)",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
        cue: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        bgwordFade: {
          "0%": { opacity: "0" },
          "15%": { opacity: ".045" },
          "85%": { opacity: ".045" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        cue: "cue 2s cubic-bezier(.16,.8,.28,1) infinite",
        "bgword-fade": "bgword-fade 4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
