import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { architectureTopics } from "@/lib/data";

export const metadata: Metadata = {
  title: "Databricks Architecture",
  description: "Design a secure, scalable Lakehouse architecture on Databricks from the ground up.",
};

export default function DatabricksArchitecturePage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">
              <Link href="/services/databricks-consulting" className="hover:text-signal">
                Databricks Consulting
              </Link>{" "}
              &rarr; Architecture
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Databricks Architecture Consulting
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Implementing Databricks and wondering how to design it? We design Lakehouse
              architecture — governance, security, networking, and CI/CD — before the first
              workload goes live, not after.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Review Your Databricks Architecture
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-5xl">
        <SectionHeading eyebrow="What we cover" title="Architecture topics we design for" align="center" />
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3">
          {architectureTopics.map((t) => (
            <div key={t} className="rounded-lg border border-ink-line bg-ink-soft/40 p-4 text-center font-body text-sm text-mist">
              {t}
            </div>
          ))}
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Deliverables"
            title="What you get from an architecture engagement"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "A target-state Lakehouse architecture diagram",
              "Unity Catalog & governance model design",
              "Workspace, networking & security blueprint",
              "CI/CD and environment-promotion strategy",
              "Cost & capacity guidance for the target design",
              "A phased implementation roadmap",
            ].map((d) => (
              <Reveal key={d} delay={0.03}>
                <div className="flex items-start gap-2.5 rounded-lg border border-ink-line bg-ink p-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  <p className="font-body text-sm leading-relaxed text-mist">{d}</p>
                </div>
              </Reveal>
            ))}
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
              Review your Databricks architecture
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Book an Architecture Review
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
