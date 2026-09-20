"use client";

import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { TechIcon } from "@/components/icons/TechIcons";
import { IconShield, IconChartBI, IconData, IconCode } from "@/components/icons/DiagramIcons";

/**
 * Karsient's original reference architecture — an independent visual composition
 * (sources -> ingestion -> lakehouse -> governance -> engineering -> analytics -> AI -> outcomes).
 * Not derived from, or a reproduction of, any third-party or client architecture diagram.
 */
export function EnterpriseArchitectureDiagram() {
  const trackRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      label: "Sources",
      items: ["ERP / CRM", "Databases", "Files & APIs", "Streaming Events"],
      icon: "sap" as const,
    },
    {
      label: "Ingestion",
      items: ["Auto Loader", "CDC", "Batch & Streaming", "API Gateways"],
      icon: "airflow" as const,
    },
    {
      label: "Lakehouse",
      items: ["Bronze", "Silver", "Gold", "Delta Lake"],
      icon: "databricks" as const,
      highlight: true,
    },
    {
      label: "Governance",
      items: ["Unity Catalog", "Access Policies", "Lineage", "Data Quality"],
      icon: "unitycatalog" as const,
    },
    {
      label: "Engineering",
      items: ["dbt Models", "Workflows", "CI/CD", "Infra as Code"],
      icon: "dbt" as const,
    },
    {
      label: "Analytics & AI",
      items: ["SQL & BI", "ML / MLOps", "GenAI & Agents", "APIs"],
      icon: "powerbi" as const,
    },
  ];

  const scrollByStage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <div className="relative rounded-3xl border border-ink-line bg-ink p-5 sm:p-8">
      <div className="pointer-events-none absolute inset-x-16 top-0 -z-10 h-32 rounded-full bg-signal/5 blur-[70px]" />

      <div className="group/arch relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-ink to-transparent" />

        <div
          ref={trackRef}
          className="overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="mx-auto flex min-w-[760px] max-w-6xl items-stretch">
            {stages.map((stage, i) => (
              <div key={stage.label} className="flex flex-1 items-stretch">
                <Reveal delay={i * 0.06} className="flex-1">
                  <div
                    className={`flex h-full flex-col rounded-2xl border p-4 ${
                      stage.highlight ? "border-signal/30 bg-signal/5" : "border-ink-line bg-ink-soft/40"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {stage.icon && (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center xl:h-14 xl:w-14">
                          <TechIcon name={stage.icon} className="h-full w-full" />
                        </div>
                      )}
                      <h3 className="font-display text-sm font-semibold text-white">{stage.label}</h3>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {stage.items.map((it) => (
                        <li key={it} className="flex items-start gap-1.5 font-body text-[11px] leading-snug text-mist sm:text-xs">
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-signal" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                {i < stages.length - 1 && (
                  <div className="relative mx-1.5 hidden w-6 shrink-0 items-center sm:flex xl:w-8">
                    <div className="h-px w-full bg-ink-line" />
                    {/* live data packets flowing between stages */}
                    {[0, 1, 2].map((p) => (
                      <span
                        key={p}
                        className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] animate-flow-packet"
                        style={{ animationDelay: `${p * 0.9 + i * 0.15}s` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Scroll architecture left"
          onClick={() => scrollByStage(-1)}
          className="focus-ring absolute -left-2 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/90 text-white backdrop-blur transition-colors hover:border-signal/60 hover:text-signal sm:flex"
        >
          &larr;
        </button>
        <button
          type="button"
          aria-label="Scroll architecture right"
          onClick={() => scrollByStage(1)}
          className="focus-ring absolute -right-2 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/90 text-white backdrop-blur transition-colors hover:border-signal/60 hover:text-signal sm:flex"
        >
          &rarr;
        </button>
      </div>

      {/* Cross-cutting governance / security / observability strip */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 border-t border-ink-line pt-5">
        {[
          { label: "Security & IAM", icon: IconShield },
          { label: "Cost & FinOps", icon: IconChartBI },
          { label: "Data Contracts", icon: IconData },
          { label: "Observability", icon: IconCode },
        ].map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-full border border-ink-line bg-ink-soft/30 px-3.5 py-1.5"
          >
            <Icon className="h-3.5 w-3.5 text-signal" />
            <span className="font-mono text-[11px] uppercase tracking-wide text-mist">{label}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-wide text-cyan-soft">
        Live data flow &middot; sources to outcomes
      </p>
      <p className="mt-1 text-center font-body text-xs text-mist">
        Business Outcomes: faster time-to-insight &middot; lower platform cost &middot; governed, trusted data &middot; production AI
      </p>
    </div>
  );
}
