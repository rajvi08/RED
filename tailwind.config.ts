import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          deep: "#6A0F13",
          royal: "#7E1318",
          ember: "#4A0A0D",
        },
        ink: {
          black: "#050505",
          charcoal: "#1A1A1A",
          graphite: "#0F0F0F",
        },
        gold: {
          DEFAULT: "#C6A56A",
          soft: "#D8BB82",
          dim: "#8E764A",
        },
        silver: "#B8B8B8",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        editorial: ["var(--font-editorial)", "Bodoni Moda", "serif"],
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        royal: "0.32em",
        regal: "0.5em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
        royal: "cubic-bezier(0.77, 0, 0.18, 1)",
      },
      transitionDuration: {
        slow: "1200ms",
        cinema: "1800ms",
      },
      backgroundImage: {
        "vignette":
          "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        "gold-line":
          "linear-gradient(90deg, transparent 0%, #C6A56A 50%, transparent 100%)",
        "red-fade":
          "linear-gradient(180deg, rgba(106,15,19,0) 0%, rgba(106,15,19,0.35) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scroll-cue": {
          "0%": { transform: "translateY(0)", opacity: "0.2" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        "grain-shift": {
          "0%,100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-3%)" },
          "30%": { transform: "translate(3%,-5%)" },
          "50%": { transform: "translate(-3%,4%)" },
          "70%": { transform: "translate(4%,3%)" },
          "90%": { transform: "translate(-2%,-2%)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 1.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 1.6s ease-out both",
        "scroll-cue": "scroll-cue 2.4s ease-in-out infinite",
        "grain-shift": "grain-shift 8s steps(6) infinite",
        "shimmer": "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
