"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type JourneyStage = {
  step: string;
  title: string;
  sub: string;
  problemSolved: string;
  deliverables: string[];
  techUsed: string[];
  metricStatement: string;
};

const stages: JourneyStage[] = [
  {
    step: "01",
    title: "Legacy Estate",
    sub: "Complex Siloed Systems",
    problemSolved: "Untangle decades of accumulated technical debt, unmapped stored procedures, and fragmented databases.",
    deliverables: ["Legacy system inventory", "Dependency mapping", "Risk classification"],
    techUsed: ["Oracle", "SQL Server", "Talend", "SSIS", "Stored Procs"],
    metricStatement: "Complete discovery across code and schema dependencies.",
  },
  {
    step: "02",
    title: "Discover",
    sub: "AI-Powered Intelligence",
    problemSolved: "ShiftIQ automatically parses code into ASTs and uncovers buried business rules before a single line is rewritten.",
    deliverables: ["AST AST parsing", "Business logic extraction", "Complexity scoring"],
    techUsed: ["ShiftIQ", "Static Code AI", "Dependency Graph"],
    metricStatement: "Automated business rule preservation and dependency analysis.",
  },
  {
    step: "03",
    title: "Modernize",
    sub: "Code & Architecture Transformation",
    problemSolved: "CodeShift accelerates conversion of legacy SQL and ETL into modern, native Databricks PySpark and Delta Lake pipelines.",
    deliverables: ["Idiomatic PySpark jobs", "Delta Live Tables", "CI/CD automated tests"],
    techUsed: ["CodeShift", "PySpark", "Delta Lake", "Databricks SQL"],
    metricStatement: "Deterministic rule conversion with human-in-the-loop review.",
  },
  {
    step: "04",
    title: "Govern",
    sub: "Trust & Control Plane",
    problemSolved: "Veriq and Unity Catalog implement unified metadata, row/column access control, and record-level quarantine.",
    deliverables: ["Unity Catalog hierarchy", "Data trust scorecards", "Automated quarantine"],
    techUsed: ["Veriq", "Unity Catalog", "Data Contracts", "Audit Trails"],
    metricStatement: "Governed by design, with full source-to-report lineage.",
  },
  {
    step: "05",
    title: "Engineer",
    sub: "Production Data Platform",
    problemSolved: "Build robust streaming and batch ingestion, semantic models, and automated quality assertions.",
    deliverables: ["Medallion architecture", "dbt transformation models", "Observability telemetry"],
    techUsed: ["dbt", "Kafka", "Delta Lake", "Airflow", "Auto Loader"],
    metricStatement: "Scalable compute, low-latency queries, and zero-loss streaming.",
  },
  {
    step: "06",
    title: "Intelligence",
    sub: "Production AI & Agents",
    problemSolved: "Deploy enterprise RAG, intelligent copilots, and multi-step AI agents grounded directly in trusted enterprise data.",
    deliverables: ["Enterprise RAG pipelines", "Agentic AI workflows", "Guardrail evaluation"],
    techUsed: ["LangChain", "Vector Search", "LLM Guardrails", "Agent Frameworks"],
    metricStatement: "Production AI with latency, cost, and hallucination monitoring.",
  },
  {
    step: "07",
    title: "Continuous Evolution",
    sub: "Autonomous Optimization",
    problemSolved: "RevoCode continuously profiles the production codebase to refactor slow queries and eliminate cloud compute creep.",
    deliverables: ["Automated query tuning", "Dead code elimination", "FinOps optimization"],
    techUsed: ["RevoCode", "Cost Intelligence", "Photon Engine", "Continuous Refactoring"],
    metricStatement: "Ongoing performance gains and disciplined cloud consumption.",
  },
];

export function TransformationJourneyVisual() {
  const [selectedIdx, setSelectedIdx] = useState<number>(1);
  const active = stages[selectedIdx];

  return (
    <div className="relative rounded-3xl border border-ink-line/80 bg-ink-soft/30 p-6 sm:p-10 backdrop-blur-xl">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-44 w-3/4 -translate-x-1/2 rounded-full bg-signal/10 blur-[90px]" />

      {/* Horizontal Pipeline Steps */}
      <div className="overflow-x-auto pb-4 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:bg-ink-line">
        <div className="flex min-w-[960px] items-center justify-between gap-2">
          {stages.map((stage, idx) => {
            const isSelected = selectedIdx === idx;
            const isCompleted = idx < selectedIdx;

            return (
              <div key={stage.title} className="flex flex-1 items-center">
                <button
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`group relative flex w-full flex-col items-start rounded-2xl border p-3.5 text-left transition-all duration-300 ${
                    isSelected
                      ? "border-signal bg-ink shadow-[0_0_25px_-5px_rgba(255,106,0,0.35)]"
                      : "border-ink-line/70 bg-ink/50 hover:border-signal/40 hover:bg-ink-soft"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`font-mono text-[11px] font-bold ${
                        isSelected
                          ? "text-signal"
                          : isCompleted
                          ? "text-cyan-soft"
                          : "text-mist"
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isSelected
                          ? "bg-signal animate-pulse"
                          : isCompleted
                          ? "bg-cyan"
                          : "bg-ink-line"
                      }`}
                    />
                  </div>

                  <span
                    className={`mt-2 font-display text-sm font-semibold transition-colors ${
                      isSelected ? "text-white" : "text-mist/90 group-hover:text-white"
                    }`}
                  >
                    {stage.title}
                  </span>

                  <span className="mt-0.5 font-body text-[11px] text-mist/60 line-clamp-1">
                    {stage.sub}
                  </span>
                </button>

                {idx < stages.length - 1 && (
                  <div className="mx-1.5 flex items-center justify-center text-ink-line">
                    <span className="text-xs">&rarr;</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Stage Deep-Dive */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="mt-8 grid grid-cols-1 gap-8 rounded-2xl border border-ink-line/80 bg-ink/80 p-6 backdrop-blur-md lg:grid-cols-3 sm:p-8"
        >
          {/* Column 1: Problem & Approach */}
          <div className="lg:col-span-1 border-b border-ink-line/60 pb-6 lg:border-b-0 lg:border-r lg:pr-8">
            <div className="flex items-center gap-2">
              <span className="badge-saffron">Stage {active.step}</span>
              <span className="font-mono text-xs text-mist">{active.sub}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold text-white">
              {active.title}
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-mist">
              {active.problemSolved}
            </p>
            <div className="mt-5 rounded-xl border border-signal/20 bg-signal/[0.05] p-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-signal block">
                Engineering Standard
              </span>
              <p className="mt-1 font-body text-xs text-white/90">
                {active.metricStatement}
              </p>
            </div>
          </div>

          {/* Column 2: Key Deliverables */}
          <div className="border-b border-ink-line/60 pb-6 lg:border-b-0 lg:border-r lg:pr-8">
            <span className="font-mono text-xs uppercase tracking-wider text-mist">
              Architecture Deliverables
            </span>
            <ul className="mt-4 space-y-3">
              {active.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-signal/15 text-[10px] text-signal font-mono font-bold">
                    ✓
                  </span>
                  <span className="font-body text-sm text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Technologies & Integration */}
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-mist">
              Ecosystem &amp; Technologies
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {active.techUsed.map((tech) => (
                <span key={tech} className="chip-tech">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <span className="font-mono text-[11px] text-mist/70 block">
                Next In Sequence:
              </span>
              <span className="font-display text-sm font-semibold text-signal mt-0.5 block">
                {selectedIdx < stages.length - 1
                  ? `${stages[selectedIdx + 1].step} &middot; ${stages[selectedIdx + 1].title}`
                  : "Continuous Modernization Cycle"}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
