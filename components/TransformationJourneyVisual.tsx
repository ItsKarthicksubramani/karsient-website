"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TechIcon, type LogoKey } from "@/components/icons/TechIcons";

type TechBadge = {
  name: string;
  icon?: LogoKey;
};

type JourneyStage = {
  step: string;
  title: string;
  sub: string;
  problemSolved: string;
  deliverables: string[];
  techList: TechBadge[];
  metricStatement: string;
};

const stages: JourneyStage[] = [
  {
    step: "01",
    title: "Legacy Estate",
    sub: "Complex Siloed Systems",
    problemSolved: "Untangle decades of accumulated technical debt, unmapped stored procedures, and fragmented databases across Netezza, Greenplum, and Teradata.",
    deliverables: ["Legacy system inventory", "Dependency mapping", "Risk & blast radius classification"],
    techList: [
      { name: "IBM Netezza", icon: "netezza" },
      { name: "Greenplum", icon: "greenplum" },
      { name: "Teradata", icon: "teradata" },
      { name: "Oracle", icon: "oracle" },
      { name: "SQL Server", icon: "sqlserver" },
    ],
    metricStatement: "Complete discovery across code and schema dependencies.",
  },
  {
    step: "02",
    title: "Discover",
    sub: "AI-Powered Intelligence",
    problemSolved: "ShiftIQ automatically parses code into ASTs and uncovers buried business rules before a single line is rewritten.",
    deliverables: ["Abstract Syntax Tree (AST) parsing", "Business logic extraction", "Complexity scoring"],
    techList: [
      { name: "ShiftIQ Intelligence" },
      { name: "Python", icon: "python" },
      { name: "SQL Parsing", icon: "sql" },
      { name: "Talend", icon: "talend" },
    ],
    metricStatement: "Automated business rule preservation and dependency analysis.",
  },
  {
    step: "03",
    title: "Modernize",
    sub: "Code & Architecture Transformation",
    problemSolved: "CodeShift accelerates conversion of legacy SQL and ETL into modern, native Databricks PySpark and Delta Lake pipelines.",
    deliverables: ["Idiomatic PySpark jobs", "Delta Live Tables pipelines", "CI/CD automated unit tests"],
    techList: [
      { name: "CodeShift Engine" },
      { name: "Databricks", icon: "databricks" },
      { name: "Delta Lake", icon: "deltalake" },
      { name: "Apache Spark", icon: "spark" },
    ],
    metricStatement: "Deterministic rule conversion with human-in-the-loop review.",
  },
  {
    step: "04",
    title: "Govern",
    sub: "Trust & Control Plane",
    problemSolved: "Veriq and Unity Catalog implement unified metadata, row/column access control, and record-level quarantine.",
    deliverables: ["Unity Catalog hierarchy", "Data trust scorecards", "Automated quarantine gates"],
    techList: [
      { name: "Veriq Governance" },
      { name: "Unity Catalog", icon: "unitycatalog" },
      { name: "dbt", icon: "dbt" },
      { name: "Microsoft Azure", icon: "azure" },
    ],
    metricStatement: "Governed by design, with full source-to-report lineage.",
  },
  {
    step: "05",
    title: "Engineer",
    sub: "Production Data Platform",
    problemSolved: "Build robust streaming and batch ingestion, semantic models, and automated quality assertions.",
    deliverables: ["Medallion architecture", "dbt transformation models", "Observability telemetry"],
    techList: [
      { name: "Apache Airflow", icon: "airflow" },
      { name: "Apache Kafka", icon: "kafka" },
      { name: "Delta Lake", icon: "deltalake" },
      { name: "dbt", icon: "dbt" },
      { name: "Apache Spark", icon: "spark" },
    ],
    metricStatement: "Scalable compute, low-latency queries, and zero-loss streaming.",
  },
  {
    step: "06",
    title: "Intelligence",
    sub: "Production AI & Analytics",
    problemSolved: "Deploy enterprise RAG, intelligent copilots, and certified Power BI reporting grounded in trusted enterprise data.",
    deliverables: ["Enterprise RAG pipelines", "Agentic AI workflows", "Certified Power BI semantic models"],
    techList: [
      { name: "LangChain", icon: "langchain" },
      { name: "Power BI", icon: "powerbi" },
      { name: "OpenAI", icon: "openai" },
      { name: "Pinecone", icon: "pinecone" },
    ],
    metricStatement: "Production AI and analytics with latency, cost, and hallucination monitoring.",
  },
  {
    step: "07",
    title: "Continuous Evolution",
    sub: "Autonomous Optimization",
    problemSolved: "RevoCode continuously profiles the production codebase to refactor slow queries and eliminate cloud compute creep.",
    deliverables: ["Automated query tuning", "Dead code elimination", "FinOps optimization"],
    techList: [
      { name: "RevoCode Refactor" },
      { name: "Microsoft Azure", icon: "azure" },
      { name: "AWS", icon: "aws" },
      { name: "Terraform", icon: "terraform" },
    ],
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
      <div className="pb-4 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 items-center gap-1 w-full">
          {stages.map((stage, idx) => {
            const isSelected = selectedIdx === idx;
            const isCompleted = idx < selectedIdx;

            return (
              <div key={stage.title} className="flex min-w-0 items-center w-full">
                <button
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`group flex w-full min-w-0 items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-300 ${stage.title === "Modernize" ? "lg:min-w-[125px]" : ""} ${
                    isSelected
                      ? "border-signal bg-signal/10 shadow-[0_0_20px_rgba(255,106,0,0.2)]"
                      : "border-ink-line/60 bg-ink hover:border-signal/40 hover:bg-ink-soft"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors ${
                      isSelected
                        ? "bg-signal text-ink"
                        : isCompleted
                        ? "bg-signal/20 text-signal"
                        : "bg-ink-soft text-mist"
                    }`}
                  >
                    {stage.step}
                  </span>
                  <div className="text-left min-w-0 flex-1">
                    <p
                      className={`font-display text-[13px] font-semibold transition-colors ${stage.title === "Legacy Estate" || stage.title === "Continuous Evolution" ? "max-w-[100px] whitespace-normal leading-tight" : "whitespace-nowrap"} ${
                        isSelected ? "text-white" : "text-mist group-hover:text-white"
                      }`}
                    >
                      {stage.title}
                    </p>
                    <p className={`font-mono text-[10px] text-mist/60 ${stage.title === "Modernize" ? "text-[9px]" : ""}`}>{stage.sub}</p>
                  </div>
                </button>
                {idx < stages.length - 1 && (
                  <div className="mx-2 h-[1px] flex-1 bg-ink-line/50 lg:block hidden" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.step}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="mt-8 grid grid-cols-1 gap-8 border-t border-ink-line/80 pt-8 lg:grid-cols-3"
        >
          {/* Column 1: Problem Solved & Operational Outcome */}
          <div className="border-b border-ink-line/60 pb-6 lg:border-b-0 lg:border-r lg:pr-8">
            <div className="flex items-center gap-2">
              <span className="badge-saffron">Step {active.step}</span>
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
                    âœ“
                  </span>
                  <span className="font-body text-sm text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Technologies & Integration with Crisp Logos */}
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-mist">
              Ecosystem &amp; Technologies
            </span>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {active.techList.map((t) => (
                <span
                  key={t.name}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-slate-200 transition-colors hover:border-[#FF6B00]/40 hover:text-white backdrop-blur-md"
                >
                  {t.icon && (
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                      <TechIcon name={t.icon} className="h-full w-full object-contain" />
                    </span>
                  )}
                  <span>{t.name}</span>
                </span>
              ))}
            </div>

            {/* Next in sequence with proper decoded middle dot */}
            <div className="mt-8 border-t border-ink-line/50 pt-4">
              <span className="font-mono text-[11px] text-mist/70 block">
                Next In Sequence:
              </span>
              <span className="font-display text-sm font-semibold text-signal mt-0.5 block">
                {selectedIdx < stages.length - 1
                  ? `${stages[selectedIdx + 1].step} · ${stages[selectedIdx + 1].title}`
                  : "Continuous Modernization Cycle"}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}









