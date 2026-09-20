import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TechIcon } from "@/components/icons/TechIcons";
import type { LogoKey } from "@/components/icons/TechIcons";
import { productMockups } from "@/components/icons/ProductMockups";
import { products } from "@/lib/data";
import type { Product } from "@/lib/data";

const productArchitectures: Record<string, string[]> = {
  "karsient-shiftiq": [
    "Applications",
    "Databases",
    "ETL Workloads",
    "Dependencies",
    "Business Rules",
    "Data Flows",
    "Migration Intelligence",
  ],
  "karsient-codeshift": [
    "Legacy Code",
    "Dialect Parser",
    "AI Transformation",
    "Databricks Code",
    "Automated Validation",
  ],
  "karsient-revocode": [
    "Modern Codebase",
    "Analyze",
    "Refactor",
    "Optimize",
    "Observe",
    "Improve",
  ],
  "karsient-veriq": [
    "Data Sources",
    "Quality Gate",
    "Quarantine Engine",
    "Governance Plane",
    "Trust",
    "Business Consumption",
  ],
};

export function ProductPage({ product }: { product: Product }) {
  const Mockup = productMockups[product.slug];
  const architectureFlow = productArchitectures[product.slug] || [
    "Input",
    "Process",
    "Governance",
    "Output",
  ];

  return (
    <>
      {/* Product Hero */}
      <section className="relative overflow-hidden border-b border-ink-line bg-grid-glow pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="flex items-center gap-2">
                <Link
                  href="/products"
                  className="font-mono text-xs uppercase tracking-wider text-mist hover:text-signal"
                >
                  Products
                </Link>
                <span className="text-mist/50">&rarr;</span>
                <span className="badge-saffron">
                  {product.journeyStage.toUpperCase()} &middot; {product.shortName}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {product.name}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-3 font-body text-base font-semibold text-signal">
                {product.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-4 font-body text-base leading-relaxed text-mist">
                {product.heroSubhead}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  {product.cta} &rarr;
                </Link>
                <Link href="/products" className="btn-secondary">
                  Compare Suite Products
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-ink-line shadow-2xl bg-ink-soft/40">
              {Mockup && <Mockup />}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signature Distinctive Visual Flow: Requirement 11 */}
      <section className="border-b border-ink-line bg-ink-soft/20 py-8">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-ink-line/50 pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-signal">
              {product.shortName} Execution Flow
            </span>
            <span className="font-mono text-[11px] text-mist/70">
              Deterministic Pipeline &middot; AI Intelligence
            </span>
          </div>

          <div className="mt-6 overflow-x-auto pb-2 [scrollbar-width:none]">
            <div className="flex min-w-[700px] items-center justify-between gap-2">
              {architectureFlow.map((step, idx) => (
                <div key={step} className="flex flex-1 items-center">
                  <div className="flex w-full flex-col items-center rounded-xl border border-ink-line/70 bg-ink px-3 py-2.5 text-center">
                    <span className="font-mono text-[10px] text-signal font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-display text-xs font-semibold text-white mt-0.5">
                      {step}
                    </span>
                  </div>
                  {idx < architectureFlow.length - 1 && (
                    <span className="mx-2 text-signal font-mono text-xs">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="section-py container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Targeted Challenges"
          title={`Critical Problems ${product.shortName} Solves`}
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {product.problems.map((prob) => (
            <div
              key={prob}
              className="flex items-start gap-3 rounded-xl border border-ink-line/70 bg-ink-soft/30 p-4"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-signal" />
              <p className="font-body text-sm text-mist leading-relaxed">{prob}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works & Capabilities */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Under The Hood"
            title={product.howItWorks.title}
            description={product.howItWorks.description}
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.howItWorks.points.map((pt, i) => (
              <div
                key={pt}
                className="rounded-2xl border border-ink-line/70 bg-ink p-6"
              >
                <span className="badge-saffron">Step 0{i + 1}</span>
                <p className="mt-3 font-body text-xs leading-relaxed text-white/90">
                  {pt}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="font-display text-2xl font-bold text-white mb-6 text-center">
              Comprehensive Feature Matrix
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feat) => (
                <div
                  key={feat.title}
                  className="rounded-xl border border-ink-line/60 bg-ink-soft/40 p-4"
                >
                  <h4 className="font-display text-sm font-semibold text-white">
                    {feat.title}
                  </h4>
                  <p className="mt-1 font-body text-xs text-mist leading-relaxed">
                    {feat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-py container-px mx-auto max-w-5xl text-center">
        <span className="eyebrow">Enterprise Compatibility</span>
        <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
          Supported Technologies &amp; Platforms
        </h3>
        <p className="mt-2 font-body text-sm text-mist">
          Integrates directly into your existing cloud infrastructure, code repositories, and lakehouse platforms.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {product.integrations.map((tech) => (
            <span key={tech} className="chip-tech">
              <span className="h-3.5 w-3.5">
                <TechIcon name={tech as LogoKey} className="h-full w-full" />
              </span>
              {tech.toUpperCase()}
            </span>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="section-py border-t border-ink-line bg-ink-soft/20">
        <div className="container-px mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title={`Technical Questions About ${product.shortName}`}
            align="center"
          />
          <div className="mt-10">
            <FAQAccordion items={product.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Deploy {product.shortName} in your environment
          </h2>
          <p className="mt-4 font-body text-base text-mist">
            Talk with a technical solutions engineer to scope an assessment, evaluate sample logic, or schedule a sandbox walkthrough.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              {product.cta} &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
