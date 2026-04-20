import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A0F1E",
        "navy-light": "#0F172A",
        cyan: "#00D4FF",
        "cyan-dim": "#00A8CC",
        amber: "#FF6B35",
        "off-white": "#F8FAFB",
        muted: "#64748B",
        "surface": "rgba(255,255,255,0.04)",
        "surface-hover": "rgba(255,255,255,0.07)",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "radial-navy": "radial-gradient(ellipse at center, #0F172A 0%, #0A0F1E 100%)",
        "glow-cyan": "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
        "glow-amber": "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "ticker": "ticker 20s linear infinite",
        "breathe": "breathe 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
