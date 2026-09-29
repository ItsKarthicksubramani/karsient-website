"use client";

import { motion } from "framer-motion";

const nodes = [
  {
    stage: "01",
    label: "Legacy",
    desc: "Undocumented code, stored procedures, siloed databases, and hidden dependencies.",
    color: "#94A3B8",
    status: "Decoupled",
  },
  {
    stage: "02",
    label: "Modern",
    desc: "Cloud landing zones, distributed Spark compute, and open table formats (Delta/Iceberg).",
    color: "#64748B",
    status: "Re-platformed",
  },
  {
    stage: "03",
    label: "Data",
    desc: "Governed medallion lakehouses, unified access controls, and auditable lineage.",
    color: "#00D2D3",
    status: "Governed",
  },
  {
    stage: "04",
    label: "Intelligence",
    desc: "Enterprise RAG, conversational copilots, and predictive operational models in production.",
    color: "#FF8A3D",
    status: "Grounded AI",
  },
  {
    stage: "05",
    label: "Autonomy",
    desc: "Multi-step AI agents, automated continuous optimization, and self-healing data trust.",
    color: "#FF6A00",
    status: "Continuous Evolution",
  },
];

export function EvolutionVectorVisual() {
  return (
    <div className="rounded-3xl border border-ink-line/80 bg-ink p-6 sm:p-10 backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-ink-line/60 pb-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
          Karsient Transformation Vector
        </span>
        <span className="font-mono text-[11px] text-mist/70">
          The Enterprise Evolutionary Path
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-5">
        {nodes.map((node, i) => (
          <div key={node.label} className="relative flex flex-col items-center text-center">
            {/* Stage Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="w-full rounded-2xl border border-ink-line/70 bg-ink-soft/40 p-5 transition-all hover:border-signal/50 hover:bg-ink-soft/70"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-mist/60 font-bold">
                  {node.stage}
                </span>
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
              </div>

              <h4 className="mt-3 font-display text-xl font-bold text-white">
                {node.label}
              </h4>

              <span className="mt-1 inline-block rounded-full bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-signal">
                {node.status}
              </span>

              <p className="mt-3 font-body text-xs leading-relaxed text-mist">
                {node.desc}
              </p>
            </motion.div>

            {/* Connecting arrow (desktop horizontal, mobile vertical) */}
            {i < nodes.length - 1 && (
              <div className="my-2 text-signal font-mono text-xs sm:hidden">
                &darr;
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-ink-line/60 bg-ink-soft/20 p-3 text-center">
        <span className="font-mono text-xs text-mist">
          &ldquo;Modernization is not simply moving workloads — it is unlocking autonomous enterprise capability.&rdquo;
        </span>
      </div>
    </div>
  );
}
