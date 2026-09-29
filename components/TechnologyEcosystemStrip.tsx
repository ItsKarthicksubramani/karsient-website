"use client";

import { TechIcon, type LogoKey } from "@/components/icons/TechIcons";

type EcoItem = {
  key: LogoKey;
  name: string;
  role: string;
};

const ecosystem: EcoItem[] = [
  { key: "databricks", name: "Databricks", role: "Unified Lakehouse & AI" },
  { key: "snowflake", name: "Snowflake", role: "Cloud Data Platform" },
  { key: "fabric", name: "Microsoft Fabric", role: "Enterprise Analytics" },
  { key: "azure", name: "Microsoft Azure", role: "Cloud Architecture" },
  { key: "aws", name: "AWS", role: "Cloud Infrastructure" },
  { key: "googlecloud", name: "Google Cloud", role: "Data & ML Platform" },
  { key: "spark", name: "Apache Spark", role: "Distributed Engine" },
  { key: "kafka", name: "Apache Kafka", role: "Real-Time Streaming" },
  { key: "airflow", name: "Apache Airflow", role: "Pipeline Orchestration" },
  { key: "dbt", name: "dbt", role: "Transformation Modeling" },
  { key: "powerbi", name: "Power BI", role: "Enterprise BI & Semantic" },
  { key: "langchain", name: "LangChain", role: "Agentic AI Framework" },
  { key: "teradata", name: "Teradata", role: "Legacy EDW Migration" },
  { key: "netezza", name: "IBM Netezza", role: "Legacy Offload Target" },
  { key: "greenplum", name: "Greenplum", role: "Data Warehouse Modernize" },
  { key: "oracle", name: "Oracle Exadata", role: "PL/SQL Modernization" },
  { key: "iceberg", name: "Apache Iceberg", role: "Open Table Standard" },
  { key: "deltalake", name: "Delta Lake", role: "ACID Transaction Mesh" },
];

export function TechnologyEcosystemStrip() {
  return (
    <section className="relative border-y border-white/10 bg-[#070D18] py-14">
      {/* Background radial atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-64 w-96 rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-64 w-96 rounded-full bg-orange-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 container-px mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#FF6B00] animate-pulse" />
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-[0.18em] text-white">
              Enterprise Technology Ecosystem
            </h2>
          </div>
          <span className="font-mono text-xs text-slate-300">
            Platform-Agnostic Engineering &middot; Multi-Cloud Architecture
          </span>
        </div>
        {/* Single-row continuous technology marquee */}
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-4 animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
            {[...ecosystem, ...ecosystem].map((item, index) => (
              <div key={`${item.name}-${index}`} className="group flex w-[190px] shrink-0 items-center gap-3 rounded-2xl border border-white/15 bg-gradient-to-b from-[#0F1C30]/90 to-[#08101E] px-4 py-3 shadow-lg transition-all duration-300 hover:border-[#FF6B00]/60 hover:shadow-[0_10px_30px_rgba(255,107,0,0.18)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] p-2">
                  <TechIcon name={item.key} className="h-full w-full object-contain" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-bold text-white group-hover:text-[#FF7A00]">{item.name}</p>
                  <p className="mt-0.5 truncate font-mono text-[10px] text-slate-300">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

