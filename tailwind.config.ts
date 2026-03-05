import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0c0c12",
        surface: "#16161f",
        border: "#252533",
        muted: "#8b8b9e",
        accent: "#22d3ee",
        accentDim: "rgba(34, 211, 238, 0.12)",
        amber: "#fbbf24",
      },
      fontSize: {
        "body": ["1rem", { lineHeight: "1.7" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "lead": ["1.25rem", { lineHeight: "1.6" }],
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 2.5s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
      },
      animationDelay: {
        "700": "700ms",
        "150": "150ms",
        "225": "225ms",
        "300": "300ms",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
