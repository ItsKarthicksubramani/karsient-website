import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechIcon } from "@/components/icons/TechIcons";
import { IconServer } from "@/components/icons/DiagramIcons";
import { MethodologyFlow } from "@/components/MethodologyFlow";
import { migrationMethodology, migrationSolutions } from "@/lib/data";
import type { LogoKey } from "@/components/icons/TechIcons";

export const metadata: Metadata = {
  title: "Databricks Migration",
  description:
    "Migrate legacy data platforms and workloads to Databricks with a structured, low-risk approach.",
};

const handles = [
  "Data migration",
  "SQL conversion",
  "ETL migration",
  "Pipeline migration",
  "CDC",
  "Data validation",
  "Security migration",
  "Unity Catalog",
  "Performance tuning",
  "Production cutover",
];

const platformLogos: { name: string; logo?: LogoKey }[] = [
  { name: "Snowflake", logo: "snowflake" },
  { name: "Talend", logo: "talend" },
  { name: "Vertica", logo: "vertica" },
  { name: "Teradata" },
  { name: "Oracle" },
  { name: "SQL Server" },
  { name: "Hadoop" },
  { name: "Legacy ETL" },
];

export default function DatabricksMigrationPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-line bg-grid-glow">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-signal/10 blur-[100px]" />
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">
              <Link href="/services/databricks-consulting" className="hover:text-signal">
                Databricks Consulting
              </Link>{" "}
              &rarr; Migration
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Databricks Migration Consulting
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Migrate legacy data platforms and workloads to Databricks with a structured, low-risk
              approach — from assessment through validated production cutover.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Get a Migration Assessment
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-5xl">
        <SectionHeading eyebrow="What can you migrate?" title="Platforms we migrate to Databricks" align="center" />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {platformLogos.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center gap-2 rounded-lg border border-ink-line bg-ink-soft/40 p-4 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center">
                {p.logo ? <TechIcon name={p.logo} className="h-full w-full" /> : <IconServer className="h-full w-full text-mist" />}
              </div>
              <span className="font-body text-sm text-mist">{p.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {migrationSolutions
            .filter((s) => s.kind === "migration")
            .map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="focus-ring group card-surface flex h-full flex-col p-6 transition-colors hover:border-signal/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-line bg-ink-soft/50">
                    <TechIcon name={s.source ? (s.source.toLowerCase() as LogoKey) : "databricks"} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">{s.name}</h3>
                  <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-mist">{s.short}</p>
                  <span className="mt-4 flex items-center gap-1 font-body text-xs text-signal opacity-0 transition-opacity group-hover:opacity-100">
                    View migration guide &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
        </div>
      </section>

      {/* Architecture snapshot */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow="Architecture" title="Source to Lakehouse, at a glance" align="center" />
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-ink-line bg-ink px-6 py-4">
                <IconServer className="h-10 w-10 text-mist" />
                <span className="font-mono text-xs text-mist">Legacy Platform</span>
              </div>
              <span className="font-mono text-xl text-signal">&rarr;</span>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-ink-line bg-ink px-6 py-4">
                <TechIcon name="airflow" className="h-12 w-12" />
                <span className="font-body text-sm text-mist">Migration Layer</span>
              </div>
              <span className="font-mono text-xl text-signal">&rarr;</span>
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-signal/40 bg-signal/10 px-6 py-4 shadow-[0_0_30px_-8px_rgba(255,106,0,0.2)]">
                <TechIcon name="databricks" className="h-12 w-12" />
                <span className="font-mono text-xs text-white">Lakehouse</span>
              </div>
              <span className="font-mono text-xl text-signal">&rarr;</span>
              <div className="rounded-2xl border border-ink-line bg-ink px-6 py-4 text-center">
                <span className="font-body text-sm text-mist">SQL / BI / AI / ML</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Methodology" title="Migration methodology" align="center" />
        <div className="mt-14">
          <MethodologyFlow steps={migrationMethodology} />
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow="Scope" title="What Karsient handles" align="center" />
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
            {handles.map((h) => (
              <div key={h} className="flex items-start gap-2 rounded-lg border border-ink-line bg-ink p-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <p className="font-body text-sm text-mist">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Planning a Databricks migration?</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Get a Migration Assessment
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

