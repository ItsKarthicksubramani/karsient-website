import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0B",
          soft: "#131316",
          raised: "#1B1B1F",
          line: "#2A2A2E",
        },
        signal: {
          DEFAULT: "#FF6A00",
          bright: "#FF8A3D",
          dim: "#B84E00",
        },
        paper: "#FFFFFF",
        mist: "#8A8F98",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(255,106,0,0.14), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,106,0,0.10), transparent 40%)",
        "signal-gradient": "linear-gradient(135deg, #FF6A00 0%, #FF8A3D 100%)",
      },
      keyframes: {
        "pulse-node": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.35)" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-200" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-node": "pulse-node 2.6s ease-in-out infinite",
        "dash-flow": "dash-flow 8s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
