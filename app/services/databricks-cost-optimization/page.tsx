import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MethodologyFlow } from "@/components/MethodologyFlow";
import { costMethodology, costProblems } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/services/databricks-cost-optimization" },
  title: "Databricks Cost Optimization",
  description: "Find and fix the workloads driving unnecessary Databricks DBU spend.",
};

export default function DatabricksCostPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">
              <Link href="/services/databricks-consulting" className="hover:text-signal">
                Databricks Consulting
              </Link>{" "}
              &rarr; Cost Optimization
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Databricks Cost Optimization
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Is your Databricks bill too high? We find the workloads, clusters, and storage patterns
              driving unnecessary spend — and fix them with measurable, reported savings.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Find Your Cost-Saving Opportunities
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-4xl">
        <SectionHeading eyebrow="Common causes" title="Where Databricks spend usually leaks" align="center" />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {costProblems.map((p) => (
            <div key={p} className="flex items-start gap-2.5 rounded-lg border border-ink-line bg-ink-soft/40 p-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              <p className="font-body text-sm leading-relaxed text-mist">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="Assessment" title="How we find the savings" align="center" />
          <div className="mt-12">
            <MethodologyFlow steps={costMethodology} />
          </div>
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Get started</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Find your Databricks cost-saving opportunities
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Book a Cost Review
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
