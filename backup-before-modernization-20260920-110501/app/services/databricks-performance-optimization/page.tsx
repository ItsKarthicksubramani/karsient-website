import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MethodologyFlow } from "@/components/MethodologyFlow";
import { performanceAnalysisAreas, performanceMethodology, performanceProblems } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/services/databricks-performance-optimization" },
  title: "Databricks Performance Optimization",
  description:
    "Reduce Databricks workload runtime and improve data platform performance through architecture, SQL and workload optimization.",
};

export default function DatabricksPerformancePage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">
              <Link href="/services/databricks-consulting" className="hover:text-signal">
                Databricks Consulting
              </Link>{" "}
              &rarr; Performance Optimization
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Databricks Performance Optimization
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Reduce Databricks workload runtime and improve data platform performance through
              architecture, SQL and workload optimization.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Book a Performance Review
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Are your Databricks workloads suffering from…"
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {performanceProblems.map((p) => (
            <div key={p} className="flex items-start gap-2.5 rounded-lg border border-ink-line bg-ink-soft/40 p-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              <p className="font-body text-sm leading-relaxed text-mist">{p}?</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="What we analyze" title="Where we look for the bottleneck" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {performanceAnalysisAreas.map((area, i) => (
              <Reveal key={area.title} delay={(i % 3) * 0.06}>
                <div className="card-surface h-full p-6">
                  <h3 className="font-display text-base font-semibold text-white">{area.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {area.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 font-body text-sm text-mist">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Methodology" title="How we run an optimization engagement" align="center" />
        <div className="mt-12">
          <MethodologyFlow steps={performanceMethodology} />
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Case study</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              How Karsient reduced a Databricks workload from 14 hours to 5 hours
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-mist">
              A retail client&apos;s nightly batch job was missing its SLA window. We profiled the
              pipeline, re-clustered the largest Delta tables, fixed a skewed join, and right-sized
              the cluster — cutting runtime by nearly two-thirds without changing business logic.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Link href="/case-studies" className="btn-secondary">
              View Case Studies
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Get started</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Find out what&apos;s actually slowing your platform down
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Book a Performance Review
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
