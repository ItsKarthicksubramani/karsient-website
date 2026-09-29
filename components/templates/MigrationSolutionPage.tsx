import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TechIcon } from "@/components/icons/TechIcons";
import type { LogoKey } from "@/components/icons/TechIcons";
import { scopeIconMap, IconServer, IconCloud } from "@/components/icons/DiagramIcons";
import { MethodologyFlow } from "@/components/MethodologyFlow";
import { migrationMethodology, migrationSolutions, industries } from "@/lib/data";
import type { MigrationSolution } from "@/lib/data";

const sourceLogoMap: Record<string, LogoKey> = {
  Snowflake: "snowflake",
  Talend: "talend",
  Vertica: "vertica",
};

export function MigrationSolutionPage({ solution }: { solution: MigrationSolution }) {
  const isMigration = solution.kind === "migration";
  const otherSolutions = migrationSolutions.filter((s) => s.slug !== solution.slug);
  const sourceLogo = solution.source ? sourceLogoMap[solution.source] : undefined;
  const cloudLogo: LogoKey | undefined =
    solution.slug === "azure-databricks" ? "azure" : solution.slug === "aws-databricks" ? "aws" : undefined;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-line bg-grid-glow">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-signal/10 blur-[100px]" />
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">
              <Link href="/solutions" className="hover:text-signal">
                Solutions
              </Link>{" "}
              &rarr; {solution.name}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {isMigration
                ? `${solution.source} to Databricks Migration Consulting`
                : `${solution.name} Consulting`}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              {solution.heroSubhead}
            </p>
          </Reveal>

          {/* Source -> Databricks badge row */}
          <Reveal delay={0.13} className="mt-8 flex items-center justify-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-ink-line bg-ink-soft/60 p-3 shadow-[0_0_30px_-8px_rgba(255,106,0,0.25)]">
              {sourceLogo ? (
                <TechIcon name={sourceLogo} className="h-full w-full" />
              ) : cloudLogo ? (
                <TechIcon name={cloudLogo} className="h-full w-full" />
              ) : (
                <IconServer className="h-full w-full text-mist" />
              )}
            </div>
            <span className="font-mono text-lg text-signal">&rarr;</span>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-signal/30 bg-signal/10 p-3 shadow-[0_0_30px_-6px_rgba(255,106,0,0.18)]">
              <TechIcon name="databricks" className="h-full w-full" />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              {isMigration ? "Book a Migration Assessment" : "Talk to a Databricks Architect"}
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to a Databricks Architect
            </Link>
          </Reveal>

          {/* Industries served */}
          <Reveal delay={0.2} className="mt-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
              Built for these industries
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="focus-ring rounded-full border border-ink-line bg-ink-soft/50 px-4 py-1.5 font-body text-xs text-mist transition-colors hover:border-signal/50 hover:text-signal"
                >
                  {ind.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY MIGRATE (only for migration pages) */}
      {isMigration && (
        <section className="section-py container-px mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Why migrate"
            title={`Why companies move from ${solution.source} to Databricks`}
            description={`We don't tell clients ${solution.source} is a bad platform — most migrations are driven by a specific need Databricks fits better.`}
          />
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Unifying data engineering, analytics and AI on one platform",
              "Building a Lakehouse architecture on open formats",
              "Advanced ML/AI workloads that need direct data access",
              "Open data formats such as Delta and Parquet",
              "Centralized governance with Unity Catalog",
              "Streaming and batch workloads on one engine",
              "Existing Databricks investment elsewhere in the business",
              "Consolidating multiple data platforms into one",
            ].map((reason) => (
              <div key={reason} className="flex items-start gap-2.5 rounded-lg border border-ink-line bg-ink-soft/40 p-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <p className="font-body text-sm leading-relaxed text-mist">{reason}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* WHAT WE MIGRATE / INTEGRATE */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={isMigration ? "Scope" : "Platform setup"}
            title={isMigration ? `What Karsient migrates` : `What we set up and integrate`}
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solution.migrates.map((group, i) => {
              const Icon = scopeIconMap[group.title] ?? IconServer;
              return (
                <Reveal key={group.title} delay={(i % 3) * 0.06}>
                  <div className="group card-surface relative h-full overflow-hidden p-6 transition-colors hover:border-signal/40">
                    <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-signal/0 blur-2xl transition-all duration-500 group-hover:bg-signal/15" />
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-signal/25 bg-signal/10 text-signal">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-white">{group.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {group.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 font-body text-sm text-mist">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHODOLOGY — horizontal left-to-right flow */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Methodology"
          title={isMigration ? "Our migration methodology" : "Our delivery approach"}
          align="center"
        />
        <div className="mt-14">
          <MethodologyFlow steps={migrationMethodology} />
        </div>
      </section>

      {/* ARCHITECTURE DIAGRAM — visual, icon-based, scenario-specific */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeading eyebrow="Architecture" title={`Target architecture: ${solution.name}`} align="center" />
          <Reveal delay={0.1}>
            <div className="relative mt-14 rounded-3xl border border-ink-line bg-ink p-6 sm:p-10">
              <div className="pointer-events-none absolute inset-x-10 top-10 -z-10 h-40 rounded-full bg-signal/5 blur-[80px]" />

              {/* Row 1: Source */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-2 rounded-2xl border border-ink-line bg-ink-soft/50 px-6 py-4">
                  <div className="flex h-14 w-14 items-center justify-center">
                    {sourceLogo ? (
                      <TechIcon name={sourceLogo} className="h-full w-full" />
                    ) : cloudLogo ? (
                      <TechIcon name={cloudLogo} className="h-full w-full" />
                    ) : (
                      <IconCloud className="h-full w-full text-mist" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-mist">
                    {solution.source ?? (cloudLogo === "azure" ? "Azure Sources" : "AWS Sources")}
                  </span>
                </div>
              </div>

              <div className="relative mx-auto my-3 h-8 w-px bg-ink-line">
                <span
                  className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] animate-flow-packet-vertical"
                  style={{ animationDelay: "0.0s" }}
                />
              </div>

              {/* Row 2: Tables / Views / Pipelines */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {["Tables", "Views", "Pipelines"].map((t) => (
                  <div key={t} className="rounded-xl border border-ink-line bg-ink-soft/30 py-3 text-center font-body text-xs text-mist sm:text-sm">
                    {t}
                  </div>
                ))}
              </div>

              <div className="relative mx-auto my-3 h-8 w-px bg-ink-line">
                <span
                  className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] animate-flow-packet-vertical"
                  style={{ animationDelay: "0.28s" }}
                />
              </div>

              {/* Row 3: Scenario-specific migration/transformation layer */}
              <div className="flex justify-center">
                <div className="rounded-2xl border border-signal/30 bg-signal/5 p-[1.5px]">
                  <div className="rounded-2xl bg-ink px-6 py-3 text-center font-body text-sm font-medium text-white sm:px-10">
                    {solution.architectureLabel}
                  </div>
                </div>
              </div>
              {isMigration && (
                <p className="mt-2 text-center font-body text-xs text-mist">
                  SQL transformation layer — powered by{" "}
                  <Link href="/products/karsient-shiftiq" className="text-signal hover:underline">
                    ShiftIQ
                  </Link>{" "}
                  (discovery) &amp;{" "}
                  <Link href="/products/karsient-revocode" className="text-signal hover:underline">
                    RevoCode
                  </Link>{" "}
                  (code &amp; SQL transformation)
                </p>
              )}

              <div className="relative mx-auto my-3 h-8 w-px bg-ink-line">
                <span
                  className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] animate-flow-packet-vertical"
                  style={{ animationDelay: "0.56s" }}
                />
              </div>

              {/* Row 4: Databricks Lakehouse */}
              <div className="flex justify-center">
                <div className="flex items-center gap-3 rounded-2xl border border-signal/30 bg-signal/5 px-6 py-4">
                  <TechIcon name="databricks" className="h-12 w-12" />
                  <span className="font-display text-sm font-semibold text-white sm:text-base">
                    Databricks Lakehouse
                  </span>
                </div>
              </div>

              <div className="relative mx-auto my-3 h-8 w-px bg-ink-line">
                <span
                  className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] animate-flow-packet-vertical"
                  style={{ animationDelay: "0.84s" }}
                />
              </div>

              {/* Row 5: Medallion layers */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {[
                  { label: "Bronze", color: "border-[#CD7F32]/30 bg-[#CD7F32]/5" },
                  { label: "Silver", color: "border-slate-400/30 bg-slate-400/5" },
                  { label: "Gold", color: "border-signal/30 bg-signal/5" },
                ].map((layer) => (
                  <div
                    key={layer.label}
                    className={`rounded-xl border py-3 text-center font-body text-xs font-medium text-white sm:text-sm ${layer.color}`}
                  >
                    {layer.label}
                  </div>
                ))}
              </div>

              <div className="relative mx-auto my-3 h-8 w-px bg-ink-line">
                <span
                  className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] animate-flow-packet-vertical"
                  style={{ animationDelay: "1.12s" }}
                />
              </div>

              {/* Row 6: Governance & observability */}
              <div className="flex justify-center">
                <div className="rounded-xl border border-ink-line bg-ink-soft/30 px-6 py-3 text-center font-body text-xs text-mist sm:text-sm">
                  Unity Catalog &middot; Data Quality &middot; Observability
                </div>
              </div>

              <div className="relative mx-auto my-3 h-8 w-px bg-ink-line">
                <span
                  className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] animate-flow-packet-vertical"
                  style={{ animationDelay: "1.4s" }}
                />
              </div>

              {/* Row 7: SQL/BI/AI/ML */}
              <div className="flex justify-center">
                <div className="rounded-xl border border-ink-line bg-ink-soft/30 px-6 py-3 text-center font-body text-xs text-mist sm:text-sm">
                  SQL &middot; BI &middot; AI &middot; GenAI
                </div>
              </div>

              <div className="relative mx-auto my-3 h-8 w-px bg-ink-line">
                <span
                  className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] animate-flow-packet-vertical"
                  style={{ animationDelay: "1.68s" }}
                />
              </div>

              {/* Row 7: Applications */}
              <div className="flex justify-center">
                <div className="rounded-full border border-ink-line bg-ink px-6 py-2 font-body text-xs text-mist sm:text-sm">
                  Applications
                </div>
              </div>
            </div>

            {/* Technology chips relevant to this scenario */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {solution.architectureTech.map((key) => (
                <div
                  key={key}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-line bg-ink-soft/40 p-2.5"
                  title={key}
                >
                  <TechIcon name={key as LogoKey} className="h-full w-full" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGES — icon cards */}
      <section className="section-py container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="What to expect" title="Migration challenges we plan for" align="center" />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solution.challenges.map((c, i) => (
            <Reveal key={c} delay={(i % 6) * 0.05}>
              <div className="group flex h-full items-start gap-3 rounded-xl border border-ink-line bg-ink-soft/40 p-4 transition-colors hover:border-signal/40 hover:bg-ink-soft/70">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal/30 bg-signal/10 font-mono text-xs text-signal">
                  {i + 1}
                </div>
                <p className="font-body text-sm leading-relaxed text-mist">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY KARSIENT */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow="Why Karsient" title={`Why Karsient for ${solution.name}`} align="center" />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-center font-body text-base leading-relaxed text-mist">
              We don&apos;t simply move workloads — we redesign the platform for Databricks, combining
              architecture expertise, data engineering delivery, migration engineering, and AI/MLOps
              integration under one team.
            </p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {["Architecture expertise", "Data engineering", "Migration engineering", "AI/ML integration"].map((t) => (
              <div key={t} className="rounded-lg border border-ink-line bg-ink p-4 text-center">
                <p className="font-body text-sm text-mist">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSESSMENT CTA */}
      <section className="section-py container-px mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Migration assessment"
          title={`Is ${isMigration ? `${solution.source} \u2192 Databricks` : solution.name} right for your organization?`}
          description="Get a technical assessment covering architecture, workloads, migration complexity, dependencies, risks and optimization opportunities."
          align="center"
        />
        <Reveal delay={0.1} className="mt-8">
          <Link href="/contact" className="btn-primary">
            Get a Free Migration Assessment
          </Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />
          <div className="mt-10">
            <FAQAccordion items={solution.faqs} />
          </div>
        </div>
      </section>

      {/* RELATED SOLUTIONS */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Related" title="Other Databricks solutions" />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {otherSolutions.map((s, i) => {
            const logo = s.source ? sourceLogoMap[s.source] : s.slug === "azure-databricks" ? "azure" : s.slug === "aws-databricks" ? "aws" : undefined;
            return (
              <Reveal key={s.slug} delay={(i % 4) * 0.06}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="focus-ring group card-surface flex h-full flex-col p-6 transition-colors hover:border-signal/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-line bg-ink-soft/50">
                    {logo ? <TechIcon name={logo} className="h-7 w-7" /> : <IconServer className="h-7 w-7 text-mist" />}
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">{s.name}</h3>
                  <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-mist">{s.short}</p>
                  <span className="mt-4 flex items-center gap-1 font-body text-xs text-signal opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more &rarr;
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Ready when you are</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Planning a {solution.name} migration?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-mist">
              Let&apos;s assess your current platform, identify migration risks and design your target
              Databricks architecture.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule a Migration Assessment
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
