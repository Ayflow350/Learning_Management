// tailwind.config.ts

import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/general/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // We removed the `colors` object from here, as it's now handled by globals.css
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // === START: ADDED SWAY KEYFRAMES ===
        sway: {
          "0%, 100%": { transform: "translateX(0px) rotate(-1deg)" },
          "50%": { transform: "translateX(5px) rotate(1deg)" },
        },
        // === END: ADDED SWAY KEYFRAMES ===
      },

      colors: {
        primary: "#FF6636",
        "primary-light": "#FFEEE8",
        "DARK-1": "#1D2026",
        "DARK-2": "#6E7485",

        // Background Colors
        "cat-lavender": "#E0E7FF",
        "cat-green": "#D1FAE5",
        "cat-peach": "#FFE4E6",
        "cat-sky": "#E0F2FE",
        "cat-rose": "#FFE4E6",
        "cat-amber": "#FEF3C7",

        // === START: NEW BORDER COLORS ===
        "cat-lavender-border": "#C7D2FE",
        "cat-green-border": "#A7F3D0",
        "cat-peach-border": "#FECDD3",
        "cat-sky-border": "#BAE6FD",
        "cat-rose-border": "#FECDD3",
        "cat-amber-border": "#FDE68A",
        // === END: NEW BORDER COLORS ===
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        // === START: ADDED SWAY ANIMATION UTILITY ===
        sway: "sway 6s ease-in-out infinite",
        // === END: ADDED SWAY ANIMATION UTILITY ===
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
