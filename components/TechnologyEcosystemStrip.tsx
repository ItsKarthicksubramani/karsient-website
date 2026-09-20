"use client";

import { TechIcon, type LogoKey } from "@/components/icons/TechIcons";

type EcoItem = {
  key: LogoKey;
  name: string;
  role: string;
};

const ecosystem: EcoItem[] = [
  { key: "databricks", name: "Databricks", role: "Unified Data & AI" },
  { key: "azure", name: "Microsoft Azure", role: "Cloud Platform" },
  { key: "aws", name: "AWS", role: "Cloud Infrastructure" },
  { key: "googlecloud", name: "Google Cloud", role: "Cloud Analytics" },
  { key: "fabric", name: "Microsoft Fabric", role: "SaaS Lakehouse" },
  { key: "snowflake", name: "Snowflake", role: "Cloud Warehouse" },
  { key: "spark", name: "Apache Spark", role: "Distributed Compute" },
  { key: "kafka", name: "Apache Kafka", role: "Event Streaming" },
  { key: "dbt", name: "dbt", role: "Data Transformation" },
  { key: "powerbi", name: "Power BI", role: "Enterprise BI" },
  { key: "iceberg", name: "Apache Iceberg", role: "Open Table Format" },
  { key: "deltalake", name: "Delta Lake", role: "ACID Lakehouse" },
];

export function TechnologyEcosystemStrip() {
  return (
    <section className="relative border-y border-ink-line/80 bg-ink-soft/20 py-8">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-ink-line/50 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white">
              Enterprise Technology Ecosystem
            </span>
          </div>
          <span className="font-mono text-[11px] text-mist/70">
            Platform-Agnostic Engineering &middot; Multi-Cloud Architecture
          </span>
        </div>

        {/* 12-item responsive ecosystem grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {ecosystem.map((item) => (
            <div
              key={item.name}
              className="group flex items-center gap-3 rounded-xl border border-ink-line/60 bg-ink/60 px-3.5 py-3 transition-all duration-300 hover:border-signal/40 hover:bg-ink-soft/70"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-ink-line/80 bg-ink-soft/50 p-1.5 transition-transform group-hover:scale-110">
                <TechIcon name={item.key} className="h-full w-full" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-xs font-semibold text-white group-hover:text-signal transition-colors">
                  {item.name}
                </p>
                <p className="truncate font-mono text-[10px] text-mist/70">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
