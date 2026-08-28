import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { migrationSolutions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Platform-specific migration and deployment solutions for Databricks.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">Solutions</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Platform-specific Databricks solutions
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Whether you&apos;re migrating from a specific platform or deploying Databricks on your
              cloud of choice, here&apos;s exactly how we approach it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {migrationSolutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/solutions/${s.slug}`}
                className="focus-ring group card-surface flex h-full flex-col p-7 transition-colors hover:border-signal/50"
              >
                <span className="eyebrow">{s.kind === "migration" ? "Migration" : "Cloud"}</span>
                <h2 className="mt-3 font-display text-lg font-semibold text-white">{s.name}</h2>
                <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-mist">{s.short}</p>
                <span className="mt-5 flex items-center gap-1 border-t border-ink-line pt-4 font-body text-sm text-signal opacity-80 transition-opacity group-hover:opacity-100">
                  View solution &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Not sure where to start?</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Talk to a Databricks architect
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Talk to a Karsient Expert
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
