// tailwind.config.ts

import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate"; // Renamed for clarity

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "acadia-primary": "#6366F1",
        "acadia-secondary": "#FBBF24",
        "acadia-background": "#F3F4FF",
        "acadia-dark": "#1E293B",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
