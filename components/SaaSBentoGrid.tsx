"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function SaaSBentoGrid() {
  const [activeAgentIndex, setActiveAgentIndex] = useState(0);

  const agents = [
    {
      name: "ShiftIQ Agent",
      role: "Topology & Lineage Crawler",
      status: "Analyzing DAG",
      color: "#38BDF8",
      metric: "12,480 Procs Indexed",
    },
    {
      name: "CodeShift Agent",
      role: "AST Transpilation Engine",
      status: "Transpiling PySpark",
      color: "#FF6B00",
      metric: "99.4% Accuracy",
    },
    {
      name: "RevoCode Agent",
      role: "Microservices & Test Synthesis",
      status: "Synthesizing Tests",
      color: "#A855F7",
      metric: "100% Contract Pass",
    },
    {
      name: "Veriq Agent",
      role: "Continuous Governance Watcher",
      status: "Validating Bit-Match",
      color: "#10B981",
      metric: "Zero Schema Drift",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#07090E] py-24">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-cyan-600/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase mb-4">
            Unified SaaS Architecture
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
            Engineered for Mission-Critical <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-400 bg-clip-text text-transparent">
              Enterprise Workloads
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-body">
            Karsient delivers the security, scale, and compliance of an enterprise SaaS platform with zero compromise on data sovereignty.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Bento Card 1: Interactive Agent Fleet (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-[#0B0F19]/95 to-[#050811] p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                  Autonomous Fleet
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  4 Live Agents
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Multi-Agent Autonomous Orchestration
              </h3>
              <p className="text-sm text-slate-300 font-body leading-relaxed mb-6">
                Specialized AI agents operate concurrently across code extraction, AST refactoring, test fixture synthesis, and schema verification.
              </p>

              {/* Interactive Agent Selectors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {agents.map((ag, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveAgentIndex(idx)}
                    className={`rounded-xl border p-2.5 text-left transition-all ${
                      activeAgentIndex === idx
                        ? "border-cyan-400 bg-cyan-950/40 shadow-[0_0_15px_rgba(0,242,254,0.2)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    <div className="text-[10px] font-mono text-slate-400">{ag.role}</div>
                    <div className="font-display text-xs font-bold text-white mt-1">{ag.name}</div>
                    <div className="text-[10px] font-mono mt-1 font-semibold" style={{ color: ag.color }}>
                      {ag.status}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Agent Live Monitor Console */}
              <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-xs">
                <div className="flex justify-between items-center text-[11px] text-slate-400 mb-2 border-b border-white/10 pb-2">
                  <span className="text-cyan-300 font-semibold">{agents[activeAgentIndex].name} Active Task Log</span>
                  <span className="text-emerald-400">{agents[activeAgentIndex].metric}</span>
                </div>
                <div className="space-y-1 text-slate-300 text-[11px]">
                  <p>› Initialized in customer private security perimeter</p>
                  <p>› Constructing deterministic DAG representation...</p>
                  <p className="text-cyan-400">› Status: {agents[activeAgentIndex].status} [OK]</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-mono">Agent Mesh v3.2</span>
              <Link href="/products" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1">
                Explore Orchestration &rarr;
              </Link>
            </div>
          </div>

          {/* Bento Card 2: Zero Exfiltration Security (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-[#0B0F19]/95 to-[#050811] p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                  Enterprise Security
                </span>
                <span className="rounded-md border border-amber-500/30 bg-amber-950/40 px-2 py-0.5 text-[10px] font-mono text-amber-300">
                  Air-Gapped Ready
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Zero Data Exfiltration
              </h3>
              <p className="text-sm text-slate-300 font-body leading-relaxed mb-6">
                Deploy Karsient as a managed SaaS or directly into your Azure VNet, AWS VPC, or GCP VPC. Your IP, database credentials, and customer records never exit your infrastructure.
              </p>

              {/* 3D Visual Representation of Security Shield */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Private Tenant Deployment
                    </span>
                    <span className="text-emerald-400 font-bold">Isolated</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      TLS 1.3 + AES-256 at Rest
                    </span>
                    <span className="text-cyan-400 font-bold">Encrypted</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      SOC2 Type II &amp; HIPAA
                    </span>
                    <span className="text-amber-400 font-bold">Compliant</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-mono">Zero Trust Protocol</span>
              <Link href="/contact" className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1">
                Security Whitepaper &rarr;
              </Link>
            </div>
          </div>

          {/* Bento Card 3: Continuous Governance & Lineage (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-[#0B0F19]/95 to-[#050811] p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300">
            <div>
              <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-4">
                Continuous Governance (Veriq™)
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Self-Healing Data Lineage
              </h3>
              <p className="text-sm text-slate-300 font-body leading-relaxed mb-6">
                Prevent pipeline breakages before they reach executive dashboards. Veriq tracks column-level lineage and auto-quarantines breaking upstream schema changes.
              </p>

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-4 font-mono text-xs">
                <div className="flex items-center justify-between text-emerald-300 font-bold mb-2">
                  <span>Schema Drift Guardian</span>
                  <span>ACTIVE</span>
                </div>
                <p className="text-slate-300 text-[11px]">
                  › 0 Breaking changes leaked to gold layer in 180 days
                </p>
                <p className="text-slate-300 text-[11px] mt-1">
                  › Real-time Unity Catalog &amp; Purview synchronization
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-mono">Audit Ready</span>
              <Link href="/products" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1">
                Veriq Specs &rarr;
              </Link>
            </div>
          </div>

          {/* Bento Card 4: 200+ Integrations & Lakehouse Ecosystem (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-[#0B0F19]/95 to-[#050811] p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                  Ecosystem Connectors
                </span>
                <span className="text-xs font-mono text-slate-400">
                  20+ Native Connectors
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Seamless Hybrid Lakehouse Mesh
              </h3>
              <p className="text-sm text-slate-300 font-body leading-relaxed mb-6">
                Connect legacy enterprise engines directly to modern AI lakehouse destinations without vendor lock-in.
              </p>

              {/* Visual Connector Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
                {[
                  { name: "Databricks", type: "Target" },
                  { name: "Snowflake", type: "Target" },
                  { name: "MS Fabric", type: "Target" },
                  { name: "Apache Iceberg", type: "Format" },
                  { name: "Teradata", type: "Source" },
                  { name: "Oracle RAC", type: "Source" },
                  { name: "Hadoop HDFS", type: "Source" },
                  { name: "IBM Netezza", type: "Source" },
                ].map((conn, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 flex items-center justify-between"
                  >
                    <span className="text-white font-semibold">{conn.name}</span>
                    <span className="text-[10px] text-cyan-400">{conn.type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-mono">REST API &amp; CLI SDK Included</span>
              <Link href="/products" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1">
                View All Connectors &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
