"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ArchitectureLayer = {
  id: string;
  name: string;
  category: string;
  status: string;
  components: string[];
  techHighlight: string;
  pulseColor: string;
};

const layers: ArchitectureLayer[] = [
  {
    id: "outcomes",
    name: "BUSINESS OUTCOMES",
    category: "Value & Impact",
    status: "Active Intelligence",
    components: ["Real-Time Decisioning", "Autonomous Triage", "Predictive Forecasting"],
    techHighlight: "Measurable ROI & SLA Speed",
    pulseColor: "#FF6A00",
  },
  {
    id: "ai",
    name: "PRODUCTION AI",
    category: "Intelligence Layer",
    status: "Governed Inference",
    components: ["Agentic AI Workflows", "Enterprise RAG", "Human-in-the-Loop Controls"],
    techHighlight: "Guardrails & Eval Engines",
    pulseColor: "#FF8A3D",
  },
  {
    id: "governance",
    name: "GOVERNANCE & TRUST",
    category: "Control Plane",
    status: "Policy Enforced",
    components: ["Unity Catalog", "Lineage Graphs", "Veriq Data Trust Gate"],
    techHighlight: "End-to-End Compliance",
    pulseColor: "#00D2D3",
  },
  {
    id: "platform",
    name: "MODERN LAKEHOUSE",
    category: "Unified Storage & Compute",
    status: "Optimized Storage",
    components: ["Delta Lake Medallion", "Liquid Clustering", "Photon Engine"],
    techHighlight: "Open Table Format",
    pulseColor: "#22D3EE",
  },
  {
    id: "data",
    name: "DATA PIPELINES",
    category: "Ingestion & Engineering",
    status: "Streaming & Batch",
    components: ["CDC Event Streams", "Auto Loader", "dbt Transformations"],
    techHighlight: "Zero-Data-Loss Ingest",
    pulseColor: "#64748B",
  },
  {
    id: "legacy",
    name: "LEGACY SYSTEMS",
    category: "Source Complexity",
    status: "Discovered & Decoupled",
    components: ["Stored Procedures", "On-Prem Databases", "Legacy ETL (Talend/SSIS)"],
    techHighlight: "ShiftIQ Mapped",
    pulseColor: "#94A3B8",
  },
];

export function EnterpriseIntelligenceVisual() {
  const [activeLayer, setActiveLayer] = useState<string>("ai");
  const current = layers.find((l) => l.id === activeLayer) || layers[1];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-ink-line/80 bg-ink-soft/40 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-signal/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />

      {/* Terminal / Console Header */}
      <div className="flex items-center justify-between border-b border-ink-line pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-ping rounded-full bg-signal" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
            Enterprise Intelligence Architecture
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-signal/30 bg-signal/10 px-2.5 py-0.5 font-mono text-[10px] text-signal">
            Live Stream
          </span>
          <span className="font-mono text-[10px] text-mist/60">v4.8</span>
        </div>
      </div>

      {/* Main interactive visualization */}
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr]">
        {/* Layer Stack */}
        <div className="space-y-2">
          {layers.map((layer, index) => {
            const isSelected = activeLayer === layer.id;
            return (
              <motion.div
                key={layer.id}
                whileHover={{ scale: 1.01 }}
                onClick={() => setActiveLayer(layer.id)}
                className={`relative cursor-pointer rounded-xl border p-3 transition-all duration-200 ${
                  isSelected
                    ? "border-signal/70 bg-ink/90 shadow-[0_0_25px_-5px_rgba(255,106,0,0.25)]"
                    : "border-ink-line/60 bg-ink-soft/30 hover:border-ink-line hover:bg-ink-soft/60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: layer.pulseColor }}
                    />
                    <span
                      className={`font-mono text-xs font-bold tracking-wide transition-colors ${
                        isSelected ? "text-signal" : "text-white"
                      }`}
                    >
                      {layer.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-mist/70">
                    0{layers.length - index}
                  </span>
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-1.5 pl-4.5">
                  {layer.components.map((comp) => (
                    <span
                      key={comp}
                      className={`rounded px-1.5 py-0.5 font-body text-[10px] transition-colors ${
                        isSelected
                          ? "bg-white/10 text-white font-medium"
                          : "text-mist/80"
                      }`}
                    >
                      {comp}
                    </span>
                  ))}
                </div>

                {/* Animated vertical pulse link */}
                {index < layers.length - 1 && (
                  <div className="absolute -bottom-2 left-6 z-10 hidden h-2 w-px bg-signal/30 sm:block" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Layer Inspector Panel */}
        <div className="flex flex-col justify-between rounded-xl border border-ink-line/70 bg-ink/70 p-4 backdrop-blur-md">
          <div>
            <div className="flex items-center justify-between border-b border-ink-line/60 pb-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-signal">
                Layer Telemetry
              </span>
              <span className="font-mono text-[10px] text-cyan-soft">
                {current.status}
              </span>
            </div>

            <div className="mt-3">
              <span className="font-mono text-[11px] text-mist">Target Layer:</span>
              <h4 className="font-display text-lg font-bold text-white mt-0.5">
                {current.name}
              </h4>
              <p className="mt-1 font-body text-xs text-mist leading-relaxed">
                {current.category} &middot; {current.techHighlight}
              </p>
            </div>

            <div className="mt-4 border-t border-ink-line/60 pt-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-mist">
                Engineered Capabilities
              </span>
              <ul className="mt-2 space-y-1.5">
                {current.components.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-2 font-body text-xs text-white/90"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-ink-line/80 bg-ink-soft/40 p-2.5 text-center">
            <span className="font-mono text-[10px] text-mist/80 block">
              Autonomous Governance &middot; Zero-Loss Pipeline
            </span>
            <span className="font-mono text-[11px] font-semibold text-signal mt-0.5 block">
              Continuous Enterprise Observability
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Flow Indicators */}
      <div className="mt-5 flex flex-wrap items-center justify-between border-t border-ink-line pt-3 font-mono text-[10px] text-mist">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Data Lineage: Fully Traceable</span>
        </div>
        <div>Security: Role-Based + Column-Level</div>
        <div className="text-signal">Modernization Ready</div>
      </div>
    </div>
  );
}
