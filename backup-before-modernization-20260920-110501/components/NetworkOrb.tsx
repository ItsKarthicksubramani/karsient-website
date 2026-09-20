"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 320, y: 90 }, { x: 210, y: 150 }, { x: 400, y: 160 },
  { x: 140, y: 260 }, { x: 300, y: 250 }, { x: 440, y: 280 },
  { x: 220, y: 360 }, { x: 380, y: 380 }, { x: 320, y: 440 },
];

const edges: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5],
  [3, 6], [4, 6], [4, 7], [5, 7], [6, 8], [7, 8], [1, 2],
];

export function NetworkOrb() {
  return (
    <svg
      viewBox="0 0 520 520"
      className="h-full w-full"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <radialGradient id="orb-glow" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="orb-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A3D" />
          <stop offset="100%" stopColor="#FF6A00" />
        </linearGradient>
      </defs>

      <circle cx="260" cy="260" r="240" fill="url(#orb-glow)" />
      <circle cx="260" cy="260" r="200" fill="none" stroke="#2A2A2E" strokeWidth="1" />
      <circle cx="260" cy="260" r="150" fill="none" stroke="#2A2A2E" strokeWidth="1" />

      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#orb-line)"
          strokeWidth="1"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
        />
      ))}

      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 0 ? 6 : 3.5}
          fill={i === 0 ? "#FF6A00" : "#FF8A3D"}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.25, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}
