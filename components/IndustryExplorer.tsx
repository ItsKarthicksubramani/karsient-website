"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type IndustryData = {
  slug: string;
  name: string;
  tagline: string;
  flow: string[];
  businessChallenges: string[];
  dataChallenges: string[];
  aiOpportunities: string[];
  karsientCapabilities: string[];
  caseStudy: { title: string; slug: string; outcome: string };
};

const industryDataset: IndustryData[] = [
  {
    slug: "banking-financial-services",
    name: "Banking & Financial Services",
    tagline: "Real-time fraud monitoring, auditable risk models, and automated regulatory reporting.",
    flow: ["Transactions", "Risk Modeling", "Fraud Triage", "Regulatory Intelligence"],
    businessChallenges: [
      "Rigid regulatory reporting cycles consuming days of manual reconciliation",
      "Sophisticated fraud rings exploiting latency between transaction and scoring",
      "Complex legacy core banking databases hindering rapid product launches",
    ],
    dataChallenges: [
      "No single source-to-report lineage for compliance examiners",
      "High-concurrency streaming ingest without transactional consistency loss",
      "Strict data privacy, encryption at rest/transit, and role-based masking",
    ],
    aiOpportunities: [
      "Real-time sub-second anomaly detection at transaction ingress",
      "Automated compliance report reconciliation via grounded enterprise LLMs",
      "Predictive credit risk decisioning models with full auditability",
    ],
    karsientCapabilities: [
      "Databricks & Unity Catalog regulatory warehouse implementation",
      "CDC transaction ingestion pipelines with zero data loss",
      "Automated reconciliation test suites validating 100% of reported figures",
    ],
    caseStudy: {
      title: "Automating regulatory reporting for a regional bank",
      slug: "banking-regulatory-reporting",
      outcome: "Reporting cycle reduced from 5 days to 6 hours with full lineage",
    },
  },
  {
    slug: "insurance",
    name: "Insurance",
    tagline: "Modernizing claims, underwriting, and risk data so decisions move at the speed of the customer.",
    flow: ["Claims Ingress", "Risk Signals", "Fraud Scoring", "Dynamic Underwriting"],
    businessChallenges: [
      "Overnight batch scoring resulting in fraud identified only after claim payout",
      "Investigator burnout caused by manual cross-referencing across disconnected systems",
      "Slow underwriting quote turnaround due to siloed risk histories",
    ],
    dataChallenges: [
      "Fragmented data across legacy policy administration and third-party feeds",
      "High false-positive rates overburdening special investigations units",
      "Lack of shared feature store between actuarial and claims teams",
    ],
    aiOpportunities: [
      "Real-time scoring of claims at first notice of loss",
      "Computer vision & LLM extraction for unstructured damage reports and medical bills",
      "Dynamic risk pricing models adapting to real-world claim velocity",
    ],
    karsientCapabilities: [
      "Streaming ingestion from policy admin via Databricks Delta Lake",
      "Production ML inference pipelines embedded into claims intake APIs",
      "Investigator feedback loops automated to retrain risk models on schedule",
    ],
    caseStudy: {
      title: "Cutting claims-fraud investigation time by 60%",
      slug: "insurance-claims-fraud",
      outcome: "Fraud triage time cut by 60% with real-time scoring at claim intake",
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Secure, compliant data platforms connecting clinical, operational, and payer records.",
    flow: ["Clinical EHR", "FHIR Pipelines", "Master Patient Index", "Outcome Analytics"],
    businessChallenges: [
      "Fragmented patient records across hospital departments preventing care continuity",
      "Costly readmission penalties due to delayed clinical intervention signals",
      "Heavy compliance requirements under HIPAA and patient privacy regulations",
    ],
    dataChallenges: [
      "Heterogeneous data formats (HL7, FHIR, DICOM, relational clinical databases)",
      "Identity resolution and deduplication across millions of patient interactions",
      "Granular access control policies partitioning sensitive clinical details",
    ],
    aiOpportunities: [
      "Predictive readmission risk scoring at discharge",
      "Clinical document summarization and ICD-10 coding validation copilots",
      "Operational staffing optimization based on predictive emergency demand",
    ],
    karsientCapabilities: [
      "HIPAA-compliant Lakehouse architectures with Unity Catalog governance",
      "HL7/FHIR-aware streaming pipelines with master patient indexing",
      "Role-based clinical dashboards supporting clinical and operational leaders",
    ],
    caseStudy: {
      title: "Longitudinal patient view & clinical outcome pipeline",
      slug: "healthcare-patient-outcome",
      outcome: "Clinical reporting accelerated 3x across 8 unified operational systems",
    },
  },
  {
    slug: "retail",
    name: "Retail",
    tagline: "Unified customer and inventory data powering personalization and demand planning.",
    flow: ["POS Streams", "Demand Signals", "Inventory Optimization", "Customer 360"],
    businessChallenges: [
      "Frequent store stockouts and excess markdown inventory due to static forecasting",
      "Disconnected online and in-store customer profiles weakening loyalty",
      "Multi-day forecast recalculations unable to react to regional demand spikes",
    ],
    dataChallenges: [
      "High-volume POS event streaming across hundreds of physical and digital channels",
      "Blending external variables (weather, local events, promotions) into demand models",
      "Ensuring real-time inventory visibility across distributed distribution centers",
    ],
    aiOpportunities: [
      "Store-level demand forecasting models refreshed daily on automated schedules",
      "Personalized recommendation engines grounded in live behavioral signals",
      "Dynamic markdown optimization balancing inventory sell-through with margin",
    ],
    karsientCapabilities: [
      "Databricks medallion architecture integrating POS, promo, and weather feeds",
      "Feature store design reused across merchandising and planning divisions",
      "Automated forecast pipelines cutting refresh time from days to hours",
    ],
    caseStudy: {
      title: "Demand forecasting cutting stockouts across 200+ stores",
      slug: "retail-demand-forecasting",
      outcome: "22% stockout reduction and daily forecast refresh across 200+ stores",
    },
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Connecting shop-floor sensors to enterprise systems for predictive, data-driven operations.",
    flow: ["Shop Sensors", "Edge Ingest", "Predictive Maintenance", "Quality Analytics"],
    businessChallenges: [
      "Unplanned equipment downtime resulting in costly production halts",
      "Inconsistent KPI reporting across distributed regional plants and markets",
      "Manual quality inspection processes bottlenecking dispatch lines",
    ],
    dataChallenges: [
      "High-frequency sensor telemetry trapped in on-prem SCADA/PLC historians",
      "Inconsistent definitions for OEE (Overall Equipment Effectiveness) across plants",
      "Edge-to-cloud synchronization under intermittent industrial network conditions",
    ],
    aiOpportunities: [
      "Vibration and thermal anomaly detection predicting machine failure weeks in advance",
      "Automated optical inspection models identifying surface defects on high-speed lines",
      "Supply chain dependency tracking optimizing raw material intake",
    ],
    karsientCapabilities: [
      "Unified Lakehouse centralizing 10+ global market manufacturing streams",
      "Standardized corporate KPI calculation logic deployed in governed Delta Lake",
      "Role-based plant operator and executive dashboards with sub-second latency",
    ],
    caseStudy: {
      title: "One data platform across 10+ global markets for an industrial manufacturer",
      slug: "manufacturing-unified-data-platform",
      outcome: "Unified KPI reporting across 10+ markets serving 300+ enterprise users",
    },
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    tagline: "Data platforms turning field, weather, and soil telemetry into profitable operational decisions.",
    flow: ["Field Telemetry", "Weather Feeds", "Yield Prediction", "Supply Chain"],
    businessChallenges: [
      "Growers and agronomists lacking timely data to adjust in-season crop inputs",
      "Supply chain spoilage and unpredictable harvest yields disrupting buyer contracts",
      "Increasing compliance requirements for sustainable farming and chemical tracking",
    ],
    dataChallenges: [
      "Remote field sensors with intermittent connectivity and noisy telemetry",
      "Spatial and temporal alignment of satellite imagery, weather data, and soil tests",
      "Legacy ERP systems disconnected from farm management software",
    ],
    aiOpportunities: [
      "In-season crop yield prediction based on real-time soil moisture and weather",
      "Automated precision irrigation and fertilizer application recommendations",
      "Traceability graphs validating end-to-end sustainable produce provenance",
    ],
    karsientCapabilities: [
      "Common-schema ingestion blending sensor telemetry, weather, and yield records",
      "Spatial Lakehouse pipelines processing geospatial raster and vector data",
      "Agronomist mobile dashboards providing localized daily action guidance",
    ],
    caseStudy: {
      title: "In-season yield prediction and field telemetry platform",
      slug: "agriculture-precision-farming",
      outcome: "Daily yield forecasting and multi-source telemetry unified on one Lakehouse",
    },
  },
  {
    slug: "logistics",
    name: "Logistics",
    tagline: "Real-time visibility across fleets, routes, and warehouses to cut transit cost and delay.",
    flow: ["Fleet Telematics", "Carrier Feeds", "Live Route Optimization", "Predictive ETA"],
    businessChallenges: [
      "Dispatchers and customers discovering transit delays after the SLA has been breached",
      "High fuel overhead caused by inefficient route planning and deadhead miles",
      "Warehouse congestion bottlenecking cross-dock operations",
    ],
    dataChallenges: [
      "Massive GPS and telematics event streams needing low-latency ingestion",
      "Disparate third-party carrier tracking formats requiring normalization",
      "Historical route data disconnected from live traffic and weather conditions",
    ],
    aiOpportunities: [
      "Dynamic multi-stop route optimization incorporating real-time traffic and weather",
      "Predictive ETA calculations providing proactive delay alerts to consignees",
      "Warehouse labor allocation models driven by inbound shipment forecasts",
    ],
    karsientCapabilities: [
      "Real-time streaming ingestion from telematics, EDI, and warehouse WMS systems",
      "Governed shipment data models shared across dispatch and customer service",
      "Live tracking dashboards with sub-second refresh for dispatch operators",
    ],
    caseStudy: {
      title: "Real-time shipment visibility and route intelligence",
      slug: "logistics-route-optimization",
      outcome: "Live fleet visibility unified across 6+ operational data sources",
    },
  },
];

export function IndustryExplorer() {
  const [selectedSlug, setSelectedSlug] = useState<string>("banking-financial-services");
  const [activeTab, setActiveTab] = useState<"business" | "data" | "ai" | "karsient">("business");

  const current = industryDataset.find((i) => i.slug === selectedSlug) || industryDataset[0];

  return (
    <div className="rounded-3xl border border-ink-line/80 bg-ink-soft/30 p-6 sm:p-10 backdrop-blur-xl">
      {/* Sector Navigation Strip */}
      <div className="flex flex-wrap gap-2 border-b border-ink-line/70 pb-6">
        {industryDataset.map((ind) => {
          const isSelected = selectedSlug === ind.slug;
          return (
            <button
              key={ind.slug}
              type="button"
              onClick={() => setSelectedSlug(ind.slug)}
              className={`rounded-full px-4 py-2 font-display text-xs font-semibold transition-all ${
                isSelected
                  ? "bg-signal text-ink shadow-[0_0_20px_rgba(255,106,0,0.35)]"
                  : "border border-ink-line/70 bg-ink/50 text-mist hover:border-signal/40 hover:text-white"
              }`}
            >
              {ind.name}
            </button>
          );
        })}
      </div>

      {/* Main Sector Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.slug}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="mt-8 space-y-8"
        >
          {/* Header & Abstract Data Flow Visualizer */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <span className="badge-saffron">{current.name}</span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                {current.tagline}
              </h3>
            </div>

            {/* Abstract Domain Flow Visual */}
            <div className="rounded-2xl border border-ink-line/80 bg-ink p-4 backdrop-blur-md">
              <span className="font-mono text-[10px] uppercase tracking-wider text-signal block mb-2">
                Abstract Domain Data Flow
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {current.flow.map((step, idx) => (
                  <div key={step} className="flex items-center">
                    <span className="rounded-lg border border-ink-line bg-ink-soft/60 px-2.5 py-1 font-mono text-[11px] font-semibold text-white">
                      {step}
                    </span>
                    {idx < current.flow.length - 1 && (
                      <span className="mx-1 text-signal font-mono text-xs">&rarr;</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Inspection Tabs */}
          <div className="border-t border-ink-line/60 pt-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { id: "business", label: "Business Challenges" },
                { id: "data", label: "Data Challenges" },
                { id: "ai", label: "AI Opportunities" },
                { id: "karsient", label: "Karsient Capabilities" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`rounded-lg px-3.5 py-1.5 font-mono text-xs transition-colors ${
                    activeTab === tab.id
                      ? "bg-white/10 text-signal font-semibold border border-signal/40"
                      : "text-mist hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Box */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-2xl border border-ink-line/70 bg-ink/70 p-6">
                {activeTab === "business" && (
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-signal block mb-3">
                      Executive &amp; Operational Friction
                    </span>
                    <ul className="space-y-3">
                      {current.businessChallenges.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-body text-mist leading-relaxed">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-signal" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "data" && (
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-cyan-soft block mb-3">
                      Technical Architecture Bottlenecks
                    </span>
                    <ul className="space-y-3">
                      {current.dataChallenges.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-body text-mist leading-relaxed">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "ai" && (
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 block mb-3">
                      High-Value Intelligence Opportunities
                    </span>
                    <ul className="space-y-3">
                      {current.aiOpportunities.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-body text-white/90 leading-relaxed">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "karsient" && (
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-signal block mb-3">
                      Targeted Karsient Platform Engineering
                    </span>
                    <ul className="space-y-3">
                      {current.karsientCapabilities.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-body text-white/90 leading-relaxed">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal text-[10px] font-bold font-mono">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Linked Case Study Card */}
              <div className="rounded-2xl border border-ink-line/80 bg-ink-soft/50 p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-signal block">
                    Verified Engagement
                  </span>
                  <h4 className="mt-2 font-display text-lg font-bold text-white leading-snug">
                    {current.caseStudy.title}
                  </h4>
                  <div className="mt-4 rounded-xl border border-ink-line/70 bg-ink/70 p-3">
                    <span className="font-mono text-[10px] text-mist/70 block uppercase tracking-wider">
                      Measured Outcome
                    </span>
                    <p className="mt-1 font-body text-xs text-white/95 font-medium">
                      {current.caseStudy.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-ink-line/60">
                  <Link
                    href={`/case-studies`}
                    className="inline-flex items-center gap-1 font-mono text-xs text-signal hover:underline"
                  >
                    Read Technical Story &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
