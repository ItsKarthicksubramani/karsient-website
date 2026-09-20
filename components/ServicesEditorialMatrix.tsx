"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";

type ServiceDetail = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  businessOutcomes: string[];
  architectureLayers: { name: string; items: string[] }[];
  capabilityTechMap: Record<string, string[]>;
  cta: string;
};

const serviceDetails: Record<string, ServiceDetail> = {
  "ai-generative-ai": {
    slug: "ai-generative-ai",
    name: "AI & Generative AI",
    tagline: "Enterprise copilots, production RAG, and autonomous agent workflows.",
    description: "From predictive models to generative AI systems, we take use cases from proof of concept to governed production, with monitoring and guardrails built in from the start.",
    businessOutcomes: [
      "Sub-second knowledge retrieval across multi-source enterprise documents",
      "Hallucination mitigation via citation-grounded RAG architectures",
      "Human-in-the-loop controls for consequential business workflows",
    ],
    architectureLayers: [
      { name: "Enterprise Sources", items: ["Documents", "Databases", "APIs"] },
      { name: "Retrieval & Vector", items: ["Hybrid Search", "Reranking", "Embeddings"] },
      { name: "Reasoning & LLM", items: ["Prompt Orchestration", "Guardrails", "Eval"] },
      { name: "Autonomous Action", items: ["Tool Calls", "Agent Memory", "API Execution"] },
    ],
    capabilityTechMap: {
      "LLM & generative AI applications": ["OpenAI GPT-4", "Claude 3.5", "LangChain", "LlamaIndex"],
      "Retrieval-augmented generation (RAG)": ["Pinecone", "MongoDB Vector", "Hybrid Search", "Cohere Rerank"],
      "Copilots & intelligent automation": ["Semantic Kernel", "FastAPI", "React Agents", "Tool Chaining"],
      "Model monitoring & evaluation": ["TruLens", "MLflow", "Prometheus", "Prompt Layer"],
    },
    cta: "Architect Your AI Initiative",
  },
  "data-engineering": {
    slug: "data-engineering",
    name: "Data Engineering",
    tagline: "Modern lakehouses, batch & streaming pipelines, Databricks and Spark.",
    description: "We build batch and streaming pipelines engineered for scale, observability, and low maintenance overhead — so your teams trust the numbers on day one.",
    businessOutcomes: [
      "End-to-end data latency reduced from overnight batch to streaming seconds",
      "Zero-downtime cutovers with schema evolution and rollback support",
      "Unified storage under open table formats avoiding vendor lock-in",
    ],
    architectureLayers: [
      { name: "Ingestion", items: ["Auto Loader", "Kafka CDC", "Event Hubs"] },
      { name: "Medallion Curation", items: ["Bronze Raw", "Silver Cleaned", "Gold Aggregates"] },
      { name: "Transformation", items: ["dbt Models", "PySpark Distributed", "Delta Live Tables"] },
      { name: "Consumption", items: ["Databricks SQL", "Feature Stores", "Semantic Views"] },
    ],
    capabilityTechMap: {
      "Lakehouse & ETL/ELT pipeline design": ["Databricks", "Apache Spark", "Delta Lake", "dbt"],
      "Databricks & Apache Spark delivery": ["PySpark", "Photon Engine", "Workflows", "Auto Loader"],
      "Data quality & observability": ["Great Expectations", "Delta Assertions", "Monte Carlo"],
      "Schema & contract management": ["Unity Catalog", "Protobuf", "Avro", "Data Contracts"],
    },
    cta: "Modernize Your Data Engineering",
  },
  "cloud-modernization": {
    slug: "cloud-modernization",
    name: "Cloud Modernization",
    tagline: "Assess, architect, modernize and optimize — across Azure, AWS and Google Cloud.",
    description: "We take a modernization-engineering approach to cloud — assessing the current estate, architecting the target state, modernizing applications and data, and optimizing for cost and performance.",
    businessOutcomes: [
      "Significant cloud compute cost reduction via FinOps optimization",
      "Enterprise landing zones with automated compliance guardrails",
      "Multi-region resilience and rapid disaster recovery topology",
    ],
    architectureLayers: [
      { name: "Landing Zone", items: ["VPC / VNet", "IAM Roles", "Private Link"] },
      { name: "Compute", items: ["Spot Instances", "Photon Acceleration", "Autoscaling"] },
      { name: "Storage", items: ["ADLS Gen2", "Amazon S3", "GCS Parquet"] },
      { name: "FinOps", items: ["DBU Allocation", "Tagging Policies", "Budget Alarms"] },
    ],
    capabilityTechMap: {
      "Modernization assessment & target architecture": ["Well-Architected Framework", "Terraform", "ShiftIQ"],
      "Secure, well-architected landing zones": ["Azure VNet", "AWS VPC PrivateLink", "IAM SCIM"],
      "Application & data platform modernization": ["Databricks", "Snowflake", "Kubernetes", "Docker"],
      "Performance & cost optimization (FinOps)": ["Databricks DBU Tuning", "Cost Management", "Photon"],
    },
    cta: "Scope Cloud Modernization",
  },
  "analytics-bi": {
    slug: "analytics-bi",
    name: "Analytics & BI",
    tagline: "Power BI dashboards, semantic models and executive reporting.",
    description: "We deliver BI ecosystems — from semantic models to executive dashboards — that give every team a single, governed way to answer their own questions.",
    businessOutcomes: [
      "Single source of truth eliminating conflicting department metrics",
      "Interactive executive dashboards with sub-second query rendering",
      "Governed self-service analytics with certified semantic models",
    ],
    architectureLayers: [
      { name: "Lakehouse Storage", items: ["Gold Delta Tables", "Serverless SQL"] },
      { name: "Semantic Layer", items: ["Power BI DirectLake", "dbt Semantic Layer", "DAX"] },
      { name: "Security & Filter", items: ["Row-Level Security", "Object Permissions"] },
      { name: "Experience", items: ["Executive Dashboards", "Operational Mobile BI"] },
    ],
    capabilityTechMap: {
      "Executive & operational dashboards": ["Power BI", "DirectLake", "Paginated Reports"],
      "Self-serve semantic models": ["Tabular Editor", "DAX", "Microsoft Fabric"],
      "Power BI & Microsoft Fabric delivery": ["OneLake", "Fabric Workspaces", "Power BI Premium"],
      "Adoption & enablement training": ["Data Literacy Playbooks", "Center of Excellence"],
    },
    cta: "Transform Enterprise BI",
  },
  "data-platform": {
    slug: "data-platform",
    name: "Data Platform",
    tagline: "Lakehouse architecture, governance and scalable platforms.",
    description: "We design governed, scalable data platforms on Snowflake, Databricks, and dbt — unifying transformation, quality, and access control in one operating model.",
    businessOutcomes: [
      "Auditable lineage across every dataset for regulatory compliance",
      "Unified access controls spanning analytics and machine learning teams",
      "Zero-copy data sharing between enterprise business units",
    ],
    architectureLayers: [
      { name: "Unified Catalog", items: ["Unity Catalog", "Data Lineage", "Tagging"] },
      { name: "Data Warehouse/Lake", items: ["Snowflake", "Databricks SQL", "Iceberg"] },
      { name: "Modeling", items: ["dbt Cloud", "SQL Fluff", "Version Control"] },
      { name: "Access & Sharing", items: ["Delta Sharing", "RBAC Policies", "Data Clean Rooms"] },
    ],
    capabilityTechMap: {
      "Lakehouse & warehouse architecture": ["Snowflake", "Databricks", "Iceberg", "Delta Lake"],
      "Transformation pipelines with dbt": ["dbt Core", "dbt Cloud", "Jinja SQL", "Semantic Layer"],
      "Cataloguing, lineage & governance": ["Unity Catalog", "Purview", "Datahub", "Veriq"],
      "Scalable, cost-tuned platforms": ["Warehouse Sizing", "Photon", "Auto-suspend Tuning"],
    },
    cta: "Design Your Data Platform",
  },
  "managed-services": {
    slug: "managed-services",
    name: "Managed Services",
    tagline: "24×7 monitoring, optimization and enterprise support.",
    description: "An ongoing partnership where we monitor, support, and evolve your data platform — so your internal team can focus on the roadmap, not the pager.",
    businessOutcomes: [
      "99.9% platform availability backed by rigorous SLAs",
      "Continuous query and cost tuning preventing billing creep",
      "Quarterly architecture enhancements aligned to emerging tech",
    ],
    architectureLayers: [
      { name: "Telemetry", items: ["Azure Monitor", "CloudWatch", "Databricks Event Log"] },
      { name: "Alerting", items: ["PagerDuty", "Incident Triage", "Slack Ops"] },
      { name: "Continuous Tuning", items: ["Vacuum Compaction", "Z-Order", "FinOps Audits"] },
      { name: "SLA Response", items: ["15-min Critical SLA", "Root Cause Analysis"] },
    ],
    capabilityTechMap: {
      "24/7 platform monitoring & support": ["Azure Monitor", "CloudWatch", "Grafana", "Prometheus"],
      "SLA-backed incident response": ["PagerDuty", "Jira Service Desk", "Automated Runbooks"],
      "Continuous cost & performance tuning": ["DBU Profiling", "Query Optimization", "Cluster Right-Sizing"],
      "Quarterly roadmap reviews": ["Architecture Health Checks", "New Feature Roadmaps"],
    },
    cta: "Explore Managed Services",
  },
};

export function ServicesEditorialMatrix() {
  const [activeSlug, setActiveSlug] = useState<string>("ai-generative-ai");
  const [hoveredCapability, setHoveredCapability] = useState<string | null>(null);

  const activeService = serviceDetails[activeSlug] || serviceDetails["ai-generative-ai"];

  return (
    <div className="rounded-3xl border border-ink-line/80 bg-ink-soft/30 p-6 sm:p-10 backdrop-blur-xl">
      {/* Services Selector Tabs */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-ink-line/80 pb-6">
        {services.slice(0, 6).map((s, idx) => {
          const isSelected = activeSlug === s.slug;
          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => {
                setActiveSlug(s.slug);
                setHoveredCapability(null);
              }}
              className={`flex flex-col items-start rounded-xl border p-3.5 text-left transition-all ${
                isSelected
                  ? "border-signal bg-ink shadow-[0_0_20px_-4px_rgba(255,106,0,0.3)]"
                  : "border-ink-line/60 bg-ink/40 hover:border-ink-line hover:bg-ink-soft"
              }`}
            >
              <span className={`font-mono text-[10px] font-bold ${isSelected ? "text-signal" : "text-mist/60"}`}>
                0{idx + 1}
              </span>
              <span className={`mt-1 font-display text-xs font-semibold leading-snug transition-colors ${isSelected ? "text-white" : "text-mist"}`}>
                {s.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Editorial Pane */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.slug}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1.1fr]"
        >
          {/* Left Column: Story, Capabilities, Tech Hover */}
          <div>
            <div className="flex items-center gap-2">
              <span className="badge-saffron">{activeService.name}</span>
              <span className="font-mono text-xs text-mist">Enterprise Practice</span>
            </div>

            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
              {activeService.tagline}
            </h3>

            <p className="mt-4 font-body text-sm leading-relaxed text-mist">
              {activeService.description}
            </p>

            {/* Interactive Capabilities Matrix */}
            <div className="mt-8 border-t border-ink-line/70 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-white">
                  Capabilities &amp; Tech Stack
                </span>
                <span className="font-mono text-[11px] text-signal/80 hidden sm:inline">
                  Hover to inspect technologies
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                {Object.keys(activeService.capabilityTechMap).map((cap) => {
                  const isHovered = hoveredCapability === cap;
                  const techList = activeService.capabilityTechMap[cap];

                  return (
                    <div
                      key={cap}
                      onMouseEnter={() => setHoveredCapability(cap)}
                      className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                        isHovered
                          ? "border-signal/80 bg-ink shadow-md"
                          : "border-ink-line/60 bg-ink/40 hover:border-ink-line hover:bg-ink-soft/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-body text-sm font-medium ${isHovered ? "text-white" : "text-mist"}`}>
                          {cap}
                        </span>
                        <span className="font-mono text-xs text-signal">
                          {isHovered ? "Active" : "&rarr;"}
                        </span>
                      </div>

                      {/* Revealed Technologies */}
                      <div className="mt-2 flex flex-wrap gap-1.5 pt-2 border-t border-ink-line/40">
                        {techList.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide transition-colors ${
                              isHovered
                                ? "border border-signal/40 bg-signal/15 text-signal-bright font-semibold"
                                : "border border-ink-line/60 bg-ink-soft/40 text-mist/80"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                {activeService.cta} &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Architecture Diagram & Business Outcomes */}
          <div className="space-y-6">
            {/* Animated Architecture Topology */}
            <div className="rounded-2xl border border-ink-line/80 bg-ink/70 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-ink-line/60 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-signal">
                  Architectural Blueprint
                </span>
                <span className="font-mono text-[10px] text-cyan-soft">
                  Production Topology
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {activeService.architectureLayers.map((layer, idx) => (
                  <div
                    key={layer.name}
                    className="relative rounded-xl border border-ink-line/70 bg-ink-soft/40 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-white">
                        {layer.name}
                      </span>
                      <span className="font-mono text-[10px] text-mist/60">
                        Layer 0{idx + 1}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-mist"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Outcomes */}
            <div className="rounded-2xl border border-ink-line/80 bg-ink/70 p-6 backdrop-blur-md">
              <span className="font-mono text-xs uppercase tracking-wider text-white">
                Verified Business Outcomes
              </span>
              <ul className="mt-4 space-y-3">
                {activeService.businessOutcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 font-body text-xs leading-relaxed text-white/90">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-signal/15 text-[10px] text-signal font-mono font-bold">
                      ✓
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
