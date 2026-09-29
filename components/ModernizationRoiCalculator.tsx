"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ModernizationRoiCalculator() {
  const [linesOfCode, setLinesOfCode] = useState(250); // in thousands
  const [dbCount, setDbCount] = useState(6);
  const [legacySource, setLegacySource] = useState("teradata");
  const [targetStack, setTargetStack] = useState("databricks");

  // Dynamic ROI model calculations
  const manualConsultingMonths = Math.max(6, Math.round(linesOfCode * 0.04 + dbCount * 1.2));
  const manualConsultingCost = Math.round(manualConsultingMonths * 145000); // $145k/mo typical systems integrator team
  
  const karsientSaaSTimeMonths = Math.max(1.5, Number((manualConsultingMonths * 0.22).toFixed(1)));
  const karsientSaaSCost = Math.round(manualConsultingCost * 0.24); // 76% savings
  const totalSavings = manualConsultingCost - karsientSaaSCost;
  const savingsPercent = Math.round((totalSavings / manualConsultingCost) * 100);
  const autoTranspileRate = Math.min(98.5, Number((91 + (linesOfCode > 500 ? 5 : 2)).toFixed(1)));

  return (
    <section id="roi-calculator" className="relative overflow-hidden bg-[#0A0D14] py-24 border-t border-b border-white/10">
      {/* Dynamic 3D Atmospheric Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[130px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber-600/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Urgent High-Conviction Section Header (Authenticom style) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-3.5 py-1 text-xs font-mono font-semibold tracking-wider text-amber-300 uppercase mb-4">
            Interactive Modernization Value Calculator
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
            Somewhere in your legacy estate, <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              technical debt is burning millions.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-body">
            Manual consulting rewrites drag on for years with a 70% overrun rate. Configure your legacy footprint below to calculate the instant acceleration of Karsient’s autonomous modernization platform.
          </p>
        </div>

        {/* 2-Column Interactive Calculator Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Controls (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-gradient-to-b from-slate-900/80 to-[#07090F] p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Step 01: Configure Current Legacy Footprint
              </div>

              {/* Slider 1: Lines of Code */}
              <div className="mb-7">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="loc-slider" className="text-sm font-semibold text-white">
                    Estimated Legacy Stored Procs &amp; ETL Scripts
                  </label>
                  <span className="font-mono text-sm font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-0.5 rounded-md">
                    {(linesOfCode * 1000).toLocaleString()} lines
                  </span>
                </div>
                <input
                  id="loc-slider"
                  type="range"
                  min={50}
                  max={2000}
                  step={50}
                  value={linesOfCode}
                  onChange={(e) => setLinesOfCode(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>50K lines (Mid-size)</span>
                  <span>1M lines (Enterprise)</span>
                  <span>2M+ lines (Global Bank/Telco)</span>
                </div>
              </div>

              {/* Slider 2: Number of Databases / Warehouses */}
              <div className="mb-7">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="db-slider" className="text-sm font-semibold text-white">
                    Siloed Databases, Data Marts &amp; Schemas
                  </label>
                  <span className="font-mono text-sm font-bold text-amber-300 bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded-md">
                    {dbCount} Databases
                  </span>
                </div>
                <input
                  id="db-slider"
                  type="range"
                  min={2}
                  max={30}
                  step={1}
                  value={dbCount}
                  onChange={(e) => setDbCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>2 Schemas</span>
                  <span>15 Schemas</span>
                  <span>30+ Schemas</span>
                </div>
              </div>

              {/* Selector 1: Legacy Source */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-white mb-2">
                  Primary Legacy Engine
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs">
                  {[
                    { id: "teradata", name: "Teradata EDW" },
                    { id: "oracle", name: "Oracle Exadata" },
                    { id: "hadoop", name: "Hadoop / Cloudera" },
                    { id: "mainframe", name: "COBOL / Mainframe" },
                    { id: "netezza", name: "IBM Netezza" },
                    { id: "sqlserver", name: "Legacy SSIS / SQL" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setLegacySource(item.id)}
                      className={`rounded-lg border p-2.5 text-center transition-all ${
                        legacySource === item.id
                          ? "border-cyan-400 bg-cyan-950/50 text-white font-bold shadow-[0_0_12px_rgba(0,242,254,0.25)]"
                          : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-slate-200"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 2: Modern Target */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Target Modern Cloud Lakehouse Stack
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                  {[
                    { id: "databricks", name: "Databricks Delta" },
                    { id: "snowflake", name: "Snowflake Iceberg" },
                    { id: "fabric", name: "Microsoft Fabric" },
                    { id: "aws", name: "AWS Lakehouse" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTargetStack(item.id)}
                      className={`rounded-lg border p-2.5 text-center transition-all ${
                        targetStack === item.id
                          ? "border-amber-400 bg-amber-950/50 text-white font-bold shadow-[0_0_12px_rgba(255,107,0,0.25)]"
                          : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-slate-200"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Simulation Engine: Karsient v3.2 Model</span>
              <span className="text-emerald-400 font-semibold">Live Interactive Mode</span>
            </div>
          </div>

          {/* Right Live Results Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/30 via-[#070D18] to-[#04070D] p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_35px_rgba(0,242,254,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                    Projected Acceleration
                  </div>
                  <div className="text-xl font-display font-black text-white mt-0.5">
                    Executive ROI Summary
                  </div>
                </div>
                <div className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-mono font-bold text-emerald-300">
                  {savingsPercent}% Cost Savings
                </div>
              </div>

              {/* Major Savings Display */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-4 mb-6">
                <div className="text-xs text-slate-400 font-mono">Projected Capital Saved</div>
                <div className="text-4xl sm:text-5xl font-display font-black text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-white bg-clip-text mt-1">
                  ${(totalSavings / 1000000).toFixed(2)}M
                </div>
                <div className="text-xs text-slate-400 mt-1 flex items-center justify-between">
                  <span>Traditional SI Estimate: ${(manualConsultingCost / 1000000).toFixed(2)}M</span>
                  <span className="text-cyan-400 font-mono">Karsient: ${(karsientSaaSCost / 1000).toFixed(0)}K</span>
                </div>
              </div>

              {/* Timeline Comparison */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-slate-400">Manual Consulting SI Timeline</span>
                    <span className="text-rose-400 font-bold">{manualConsultingMonths} Months</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500/70 w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-cyan-300 font-semibold">Karsient Autonomous SaaS</span>
                    <span className="text-cyan-300 font-bold">{karsientSaaSTimeMonths} Months</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden border border-cyan-500/30">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-amber-400 transition-all duration-500"
                      style={{ width: `${Math.max(15, (karsientSaaSTimeMonths / manualConsultingMonths) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                  <div className="text-slate-400 text-[10px]">Autonomous Code Pass</div>
                  <div className="text-lg font-bold text-emerald-400 mt-0.5">{autoTranspileRate}%</div>
                  <div className="text-[10px] text-slate-500">Zero Manual Edits</div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                  <div className="text-slate-400 text-[10px]">Time-to-Production</div>
                  <div className="text-lg font-bold text-amber-400 mt-0.5">-{Math.round(((manualConsultingMonths - karsientSaaSTimeMonths) / manualConsultingMonths) * 100)}%</div>
                  <div className="text-[10px] text-slate-500">Faster Go-Live</div>
                </div>
              </div>
            </div>

            {/* CTA in results card */}
            <div className="pt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(0,242,254,0.3)] transition-all hover:shadow-[0_0_35px_rgba(0,242,254,0.5)] hover:scale-[1.02]"
              >
                <span>Request Custom Enterprise Assessment</span>
                <span>→</span>
              </Link>
              <div className="text-center text-[10px] font-mono text-slate-500 mt-2">
                Includes complimentary ShiftIQ Discovery Scan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
