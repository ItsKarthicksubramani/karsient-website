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
          DEFAULT: "#0B1B33",
          soft: "#122544",
          raised: "#183160",
          line: "#284878",
        },
        signal: {
          DEFAULT: "#FF6A00",
          bright: "#FF8A3D",
          dim: "#B84E00",
        },
        cyan: {
          DEFAULT: "#22D3EE",
          soft: "#67E8F9",
          dim: "#0E7490",
        },
        paper: "#FFFFFF",
        mist: "#9AA7B5",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(255,106,0,0.14), transparent 45%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.10), transparent 40%)",
        "signal-gradient": "linear-gradient(135deg, #FF6A00 0%, #FF8A3D 100%)",
        "cyan-gradient": "linear-gradient(135deg, #22D3EE 0%, #0E7490 100%)",
      },
      keyframes: {
        "pulse-node": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.35)" },
        },
        "flow-packet": {
          "0%": { left: "0%", opacity: "0" },
          "8%": { opacity: "1" },
          "92%": { opacity: "1" },
          "100%": { left: "100%", opacity: "0" },
        },
        "flow-packet-vertical": {
          "0%": { top: "0%", opacity: "0" },
          "8%": { opacity: "1" },
          "92%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-200" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "border-spin": {
          to: { transform: "rotate(1turn)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(6px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(14px) translateX(-10px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shine: {
          "0%": { backgroundPosition: "-150% 0" },
          "100%": { backgroundPosition: "250% 0" },
        },
      },
      animation: {
        "pulse-node": "pulse-node 2.6s ease-in-out infinite",
        "dash-flow": "dash-flow 8s linear infinite",
        marquee: "marquee 28s linear infinite",
        "marquee-fast": "marquee 18s linear infinite",
        "border-spin": "border-spin 4s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        shine: "shine 3.5s ease-in-out infinite",
        "flow-packet": "flow-packet 2.8s linear infinite",
        "flow-packet-vertical": "flow-packet-vertical 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
