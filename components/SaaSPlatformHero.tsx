"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductTab {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  accentColor: string;
  legacySample: string;
  modernSample: string;
  metrics: { label: string; value: string; subtext: string }[];
  logs: string[];
}

const PRODUCT_TABS: ProductTab[] = [
  {
    id: "shiftiq",
    name: "ShiftIQ™",
    tagline: "Autonomous Architecture Discovery & Topology Mapping",
    badge: "STAGE 01 DISCOVERY",
    accentColor: "#38BDF8", // Cyan
    legacySample: `// LEGACY INFRASTRUCTURE SCAN
TARGET: Teradata Enterprise EDW (v16.20)
DEPENDENCIES: 1,420 Stored Procs, 8,900 ETL scripts
DATA VOLUME: 4.8 Petabytes / 38 Schemas
STATUS: Unindexed join bottlenecks detected (184 nodes)`,
    modernSample: `// SHIFTIQ TARGET TOPOLOGY GRAPH
TARGET_STACK: Databricks Unity Catalog + Delta Lake
READINESS_SCORE: 96.8% Autonomous Path Found
RECOMMENDED_RUNTIME: Serverless Spark Compute
MIGRATION_EFFORT: -74% vs Manual Architecting`,
    metrics: [
      { label: "Assets Discovered", value: "12,480+", subtext: "Tables, Views & Procs" },
      { label: "Blast Radius", value: "Zero", subtext: "Non-intrusive metadata" },
      { label: "Graph Ingestion", value: "< 14 min", subtext: "Automated crawl rate" },
    ],
    logs: [
      "[ShiftIQ-Agent] Connected to EDW metadata catalog (read-only)",
      "[ShiftIQ-Agent] Extracted lineage graph across 18 source databases",
      "[ShiftIQ-Agent] 100% dependency DAG constructed for Delta Lake transition",
    ],
  },
  {
    id: "codeshift",
    name: "CodeShift™",
    tagline: "Autonomous Legacy-to-Modern Code Transpilation Engine",
    badge: "STAGE 02 TRANSFORMATION",
    accentColor: "#FF6B00", // Saffron / Orange
    legacySample: `-- LEGACY ORACLE / TERADATA BTEQ SCRIPT
.LOGON dwh_prod/etl_user;
BT;
INSERT INTO FINANCE.MONTHLY_LEDGER
SELECT ACC_ID, SUM(TXN_AMT)
FROM TRANSACTIONS_RAW
WHERE TXN_DATE BETWEEN ADD_MONTHS(CURRENT_DATE, -1) AND CURRENT_DATE
GROUP BY ACC_ID;
.IF ERRORCODE <> 0 THEN .QUIT 12;
ET;`,
    modernSample: `# AUTONOMOUS DATABRICKS PYSPARK TARGET
from pyspark.sql import functions as F

ledger_df = (
    spark.table("lakehouse.raw.transactions")
    .filter(F.col("txn_date") >= F.add_months(F.current_date(), -1))
    .groupBy("acc_id")
    .agg(F.sum("txn_amt").alias("total_amt"))
)
ledger_df.write.format("delta").mode("append").saveAsTable("lakehouse.gold.monthly_ledger")
# [STATUS: 100% Type-Safe & Syntactically Verified]`,
    metrics: [
      { label: "Transpilation Accuracy", value: "99.4%", subtext: "Direct executable PySpark" },
      { label: "Manual Dev Hours Saved", value: "82%", subtext: "Automated rewrite velocity" },
      { label: "Syntactic Unit Tests", value: "100%", subtext: "Auto-generated coverage" },
    ],
    logs: [
      "[CodeShift-Engine] Parsed 3,420 lines of legacy SQL dialects",
      "[CodeShift-Engine] Converted cursor-loops to vectorized Spark dataframes",
      "[CodeShift-Engine] Transpilation completed with zero compilation errors",
    ],
  },
  {
    id: "revocode",
    name: "RevoCode™",
    tagline: "AI-Powered Microservices Refactoring & Test Automation",
    badge: "STAGE 03 EVOLUTION",
    accentColor: "#A855F7", // Purple / Violet
    legacySample: `// MONOLITHIC ENTERPRISE JAVA / COBOL BRIDGE
public class MonolithOrderRouter {
    public Response processBatch(byte[] legacyPacket) {
        // 4,000 lines tightly coupled mainframe calls
        JNIEnv.callLegacyHost(legacyPacket);
        return parseFixedLengthStream(legacyPacket);
    }
}`,
    modernSample: `// EVENT-DRIVEN CLOUD NATIVE MICROSERVICE
@Service
public class OrderEventConsumer {
    @KafkaListener(topics = "enterprise.orders.v1")
    public Mono<Void> processOrder(OrderPayload payload) {
        return validationService.verifyContract(payload)
            .flatMap(lakehousePublisher::streamDelta)
            .doOnError(err -> telemetry.recordTelemetry(err));
    }
}`,
    metrics: [
      { label: "Microservice Decoupling", value: "12x", subtext: "Speed vs manual rewrite" },
      { label: "Contract Coverage", value: "100%", subtext: "OpenAPI & AsyncAPI spec" },
      { label: "P99 Execution Delay", value: "< 8ms", subtext: "Non-blocking reactive" },
    ],
    logs: [
      "[RevoCode-AI] Decomposed monolithic transaction boundary",
      "[RevoCode-AI] Synthesized test fixtures with boundary fuzzing",
      "[RevoCode-AI] 28 Cloud-native container endpoints deployed to staging",
    ],
  },
  {
    id: "veriq",
    name: "Veriq™",
    tagline: "Continuous Autonomous Data Quality & Governance Agent",
    badge: "STAGE 04 GOVERNANCE",
    accentColor: "#10B981", // Emerald
    legacySample: `-- UNGOVERNED SILOED STATE
SELECT COUNT(*) FROM CUSTOMER_GOLD;
-- Output: 4,120,000
-- Warning: 14% duplicate records detected
-- Warning: PII unencrypted in raw columns
-- Lineage: Broken between staging & marts`,
    modernSample: `// VERIQ CONTINUOUS QUALITY AGENT
AGENT_STATUS: ACTIVE (24/7 Real-Time Telemetry)
SCHEMA_DRIFT: Protected (Zero Breaking Changes)
PII_ENCRYPTION: Automated Dynamic Column Masking
LINEAGE_VALIDATION: 100% Verified Unity Catalog DAG
RECONCILIATION: Bit-Level Exact Match with Legacy Source`,
    metrics: [
      { label: "Reconciliation Rate", value: "99.999%", subtext: "Source-to-target match" },
      { label: "Schema Drift Detection", value: "Instant", subtext: "Automated quarantine" },
      { label: "Compliance Posture", value: "SOC2 / HIPAA", subtext: "Audit-ready logs" },
    ],
    logs: [
      "[Veriq-Agent] Validated 42M rows across target Delta tables",
      "[Veriq-Agent] Applied automated encryption policy on sensitive tax IDs",
      "[Veriq-Agent] Lineage certificate signed and published to data catalog",
    ],
  },
];

export function SaaSPlatformHero() {
  const [activeTab, setActiveTab] = useState<ProductTab>(PRODUCT_TABS[0]);
  const [diffMode, setDiffMode] = useState<"sideBySide" | "modernOnly">("sideBySide");

  return (
    <section className="relative overflow-hidden bg-[#07090E] pt-28 pb-20 md:pt-36 md:pb-28">
      {/* 3D Atmospheric Background Glows & Spatial Grid */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Top radial ambient glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[850px] rounded-full bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-[120px]" />

        {/* Saffron secondary accent glow */}
        <div className="absolute top-1/3 -right-40 h-[450px] w-[600px] rounded-full bg-gradient-to-b from-amber-500/10 via-orange-600/5 to-transparent blur-[140px]" />

        {/* Subtle high-tech perspective floor grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Elevated Official Company Tagline Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-500/40 bg-orange-950/40 px-4 py-1.5 text-xs sm:text-sm font-mono font-semibold tracking-wide text-orange-200 backdrop-blur-md shadow-[0_0_25px_rgba(255,107,0,0.2)]">
            <span className="flex h-2 w-2 rounded-full bg-orange-400 animate-ping" />
            <span className="font-bold text-white uppercase tracking-wider">KARSIENT:</span>
            <span className="text-orange-300">Engineering tomorrow&apos;s intelligent enterprises.</span>
          </div>
        </div>

        {/* Main Headline & Value Proposition (The High-Impact SaaS Content) */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            The Autonomous Cloud <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(0,242,254,0.25)]">
              Modernization &amp; AI Platform
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-body leading-relaxed">
            Stop waiting for multi-year consulting rewrites &mdash; Karsient&apos;s intelligent SaaS engine automatically discovers legacy architectures, transpiles enterprise codebases, and deploys governed production AI lakehouses in weeks.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(255,107,0,0.6)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>See it in Action</span>
              <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <a
              href="#roi-calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/[0.1] hover:border-cyan-400/50"
            >
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Calculate Modernization ROI</span>
            </a>
          </div>

          {/* Quick Metrics Badge Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              SOC2 Type II &amp; HIPAA Compliant
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Runs in Customer&apos;s VPC / Private Cloud
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Zero Data Exfiltration
            </span>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3D INTERACTIVE SAAS STUDIO VISUALIZER (The Hero Showpiece) */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-14 relative mx-auto max-w-6xl">
          {/* Outer 3D Perspective Canvas Container */}
          <div className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-slate-900/90 via-[#0B0F19]/95 to-[#050811] p-2 sm:p-4 shadow-[0_25px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(0,242,254,0.15)] backdrop-blur-xl">
            {/* Top SaaS Studio Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4 px-2 sm:px-4">
              {/* Studio Window Controls + Title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span className="text-cyan-400 font-semibold">karsient-studio://</span>
                  production-lakehouse-v3.cloud
                </span>
              </div>

              {/* View Toggle (Side-by-side vs Target) */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setDiffMode("sideBySide")}
                  className={`rounded-lg px-2.5 py-1 text-xs font-mono transition-all ${
                    diffMode === "sideBySide"
                      ? "bg-white/15 text-white shadow-inner"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Legacy vs Target Diff
                </button>
                <button
                  type="button"
                  onClick={() => setDiffMode("modernOnly")}
                  className={`rounded-lg px-2.5 py-1 text-xs font-mono transition-all ${
                    diffMode === "modernOnly"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Modern Code Only
                </button>
              </div>
            </div>

            {/* Product Switcher Tabs (ShiftIQ, CodeShift, RevoCode, Veriq) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-3 pb-4 px-1 sm:px-2">
              {PRODUCT_TABS.map((tab) => {
                const isSelected = activeTab.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`relative flex flex-col items-start rounded-xl p-3 text-left transition-all duration-200 ${
                      isSelected
                        ? "bg-white/[0.08] border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                        : "border border-transparent hover:bg-white/[0.04] text-slate-400"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 rounded-xl border-2 pointer-events-none"
                        style={{ borderColor: tab.accentColor }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider"
                      style={{ color: isSelected ? tab.accentColor : "#94A3B8" }}
                    >
                      {tab.badge}
                    </span>
                    <span className="font-display text-sm sm:text-base font-bold text-white mt-0.5">
                      {tab.name}
                    </span>
                    <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      {tab.tagline}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Interactive Code & Simulation Deck */}
            <div className="relative rounded-xl border border-white/10 bg-[#03060C] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Code Transpilation View (8 cols) */}
                <div className="p-4 sm:p-5 font-mono text-xs lg:col-span-8">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10 text-slate-400 text-[11px]">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: activeTab.accentColor }} />
                      <span className="text-white font-semibold">{activeTab.name}</span>
                      <span>&mdash; Autonomous Execution Pipeline</span>
                    </span>
                    <span className="text-emerald-400 font-mono">100% Passed</span>
                  </div>

                  {diffMode === "sideBySide" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* Left: Legacy Source */}
                      <div className="rounded-lg border border-red-500/20 bg-red-950/10 p-3">
                        <div className="text-[10px] uppercase font-bold text-rose-400 mb-2 flex items-center justify-between">
                          <span>Legacy Technical Debt</span>
                          <span className="text-rose-500 font-mono">INPUT</span>
                        </div>
                        <pre className="text-rose-200/80 text-[11px] leading-relaxed whitespace-pre-wrap overflow-x-auto">
                          {activeTab.legacySample}
                        </pre>
                      </div>

                      {/* Right: Modern Target */}
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/15 p-3 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                        <div className="text-[10px] uppercase font-bold text-emerald-400 mb-2 flex items-center justify-between">
                          <span>Target Cloud Lakehouse</span>
                          <span className="text-emerald-400 font-mono">OUTPUT</span>
                        </div>
                        <pre className="text-emerald-100 text-[11px] leading-relaxed whitespace-pre-wrap overflow-x-auto">
                          {activeTab.modernSample}
                        </pre>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/15 p-4 shadow-[0_0_25px_rgba(0,242,254,0.15)]">
                      <div className="text-[10px] uppercase font-bold text-cyan-400 mb-2 flex items-center justify-between">
                        <span>Modern Target Production Code</span>
                        <span className="text-cyan-400 font-mono">READY TO COMMIT</span>
                      </div>
                      <pre className="text-cyan-100 text-[12px] leading-relaxed whitespace-pre-wrap overflow-x-auto">
                        {activeTab.modernSample}
                      </pre>
                    </div>
                  )}

                  {/* Terminal Execution Logs */}
                  <div className="mt-4 rounded-lg bg-black/70 border border-white/10 p-3 font-mono text-[11px] text-slate-300">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Live Agent Telemetry Stream
                    </div>
                    {activeTab.logs.map((log, idx) => (
                      <div key={idx} className="flex items-center gap-2 py-0.5 text-slate-300">
                        <span className="text-cyan-400 font-bold">&rsaquo;</span>
                        <span>{log}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side Telemetry & Performance Stats (4 cols) */}
                <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 p-4 sm:p-5 bg-gradient-to-b from-slate-900/40 to-transparent flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      SaaS Acceleration Metrics
                    </h3>
                    <div className="space-y-3">
                      {activeTab.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg border border-white/10 bg-white/[0.03] p-3 transition-colors hover:border-cyan-500/30"
                        >
                          <div className="text-[11px] text-slate-400">{m.label}</div>
                          <div className="font-display text-2xl font-bold text-white mt-0.5">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono text-cyan-400 mt-0.5">
                            {m.subtext}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Action in Card */}
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <Link
                      href="/products"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                    >
                      <span>Explore {activeTab.name} Engine</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
