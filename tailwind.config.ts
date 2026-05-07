import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        elevated: "var(--color-elevated)",
        border: "var(--color-border)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        warn: "var(--color-warn)",
        success: "var(--color-success)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui"],
      },
      fontSize: {
        "display-sm": ["2.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        display: ["3.25rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": [
          "clamp(2.75rem,5vw+1.5rem,4.25rem)",
          { lineHeight: "1.02", letterSpacing: "-0.03em" },
        ],
        "display-xl": [
          "clamp(3.25rem,6vw+1.5rem,5rem)",
          { lineHeight: "0.98", letterSpacing: "-0.035em" },
        ],
      },
      boxShadow: {
        panel: "var(--shadow-panel)",
        lift: "var(--shadow-lift)",
        glow: "var(--shadow-glow)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% -20%, var(--hero-glow), transparent)",
        "card-shine":
          "linear-gradient(135deg, color-mix(in srgb, var(--color-ink) 4%, transparent) 0%, transparent 42%, color-mix(in srgb, var(--color-accent) 8%, transparent) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
