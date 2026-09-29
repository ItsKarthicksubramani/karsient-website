import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies" },
  title: "Enterprise Case Studies & Architecture Deliverables | Karsient",
  description:
    "Credible, structured case studies demonstrating real-world data engineering, Databricks modernizations, and production AI deployments.",
};

const caseBadges: Record<string, { label: string; color: string }> = {
  "insurance-claims-fraud": { label: "Verified Enterprise Engagement", color: "badge-saffron" },
  "retail-demand-forecasting": { label: "Anonymized Enterprise Deliverable", color: "badge-cyan" },
  "banking-regulatory-reporting": { label: "Verified Enterprise Engagement", color: "badge-saffron" },
  "manufacturing-unified-data-platform": { label: "Anonymized Multi-Market Deployment", color: "badge-cyan" },
  "legacy-etl-modernization": { label: "Production Re-Platforming Deliverable", color: "badge-saffron" },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-20 text-center sm:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/[0.08] px-3.5 py-1">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
                Engineering Evidence
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Proven architecture patterns in production environments.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-mist max-w-2xl mx-auto">
              Real-world engineering challenges solved through disciplined data engineering, modern lakehouse architectures, and production AI. Clearly distinguished and verified.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Structured Case Studies List */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="space-y-16">
          {caseStudies.map((cs, idx) => {
            const badge = caseBadges[cs.slug] || {
              label: "Enterprise Engagement",
              color: "badge-saffron",
            };

            return (
              <div
                key={cs.slug}
                id={cs.slug}
                className="scroll-mt-28 rounded-3xl border border-ink-line/80 bg-ink-soft/30 p-7 sm:p-10 backdrop-blur-xl transition-all hover:border-signal/40"
              >
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-ink-line/70 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="eyebrow">{cs.industry}</span>
                    <span className={badge.color}>{badge.label}</span>
                  </div>
                  <span className="font-mono text-xs text-mist/70">
                    Engagement Index: 0{idx + 1}
                  </span>
                </div>

                <div className="mt-6">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {cs.title}
                  </h2>
                  <p className="mt-3 font-body text-sm leading-relaxed text-mist max-w-3xl">
                    {cs.summary}
                  </p>
                </div>

                {/* 4-Box Structured Anatomy: Challenge, Approach, Architecture, Outcome */}
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {/* 1. CHALLENGE */}
                  <div className="rounded-2xl border border-ink-line/70 bg-ink p-5 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-signal font-semibold">
                        01 &middot; Challenge
                      </span>
                      <ul className="mt-3 space-y-2">
                        {cs.challenge.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs font-body text-mist leading-snug">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 2. APPROACH */}
                  <div className="rounded-2xl border border-ink-line/70 bg-ink p-5 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-soft font-semibold">
                        02 &middot; Engineering Approach
                      </span>
                      <p className="mt-3 font-body text-xs leading-relaxed text-white/90">
                        {cs.approach}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-ink-line/60">
                      <span className="font-mono text-[10px] text-mist/70">
                        Workload migration executed in parallel-run waves.
                      </span>
                    </div>
                  </div>

                  {/* 3. ARCHITECTURE BLUEPRINT */}
                  <div className="rounded-2xl border border-ink-line/70 bg-ink p-5 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                        03 &middot; Architecture Topology
                      </span>
                      <ul className="mt-3 space-y-2">
                        {cs.architecture.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs font-body text-mist leading-snug">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 4. MEASURED OUTCOME */}
                  <div className="rounded-2xl border border-signal/30 bg-signal/[0.04] p-5 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-signal font-semibold">
                        04 &middot; Verified Outcome
                      </span>
                      <ul className="mt-3 space-y-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-xs font-body font-semibold text-white leading-snug">
                            <span className="mt-0.5 text-signal font-mono font-bold">✓</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 pt-3 border-t border-signal/20">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 font-mono text-xs text-signal hover:underline"
                      >
                        Discuss a Similar Challenge &rarr;
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-ink-line/60 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-mist mr-2">
                    Technologies:
                  </span>
                  {cs.techStack.map((tech) => (
                    <span key={tech} className="chip-tech text-[10px] py-0.5 px-2.5">
                      {tech}
                    </span>
                  ))}
                  <div className="ml-auto">
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="font-mono text-xs text-mist hover:text-signal transition-colors"
                    >
                      Read In-Depth Case Study &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <span className="eyebrow">Enterprise Delivery</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Have a complex platform or modernization challenge?
          </h2>
          <p className="mt-4 font-body text-base text-mist">
            Our principal architects will review your current estate, assess technical debt, and propose a phased, zero-downtime modernization roadmap.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Architecture Consultation &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
