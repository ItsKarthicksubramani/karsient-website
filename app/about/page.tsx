import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { EvolutionVectorVisual } from "@/components/EvolutionVectorVisual";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Karsient | Engineering Tomorrow's Intelligent Enterprises",
  description:
    "Karsient transforms legacy technology into modern, intelligent, AI-powered ecosystems through advanced data engineering, Lakehouse architectures, and proprietary software products.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO / WHO WE ARE */}
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-20 text-center sm:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/[0.08] px-3.5 py-1">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
                Who We Are
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Engineers built to evolve enterprises beyond legacy complexity.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-mist max-w-2xl mx-auto">
              Karsient combines AI, data engineering, cloud modernization, and proprietary products to engineer governed, future-ready enterprise technology estates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. THE THREE PILLARS: MODERNIZE, INTELLIGENTIZE, ACCELERATE */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Transformation Engine"
          title="The Core Karsient Pillars"
          description="How we structure our client engagements from day one to deliver lasting architectural advantage."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              tag: "MODERNIZE",
              title: "Modernize",
              desc: "Transform fragile legacy applications, stored procedures, and disjointed databases into high-throughput, open Lakehouse architectures.",
            },
            {
              tag: "INTELLIGENTIZE",
              title: "Intelligentize",
              desc: "Deploy production RAG, AI agents, and autonomous operational copilots directly on top of trusted, governed enterprise data.",
            },
            {
              tag: "ACCELERATE",
              title: "Accelerate",
              desc: "Leverage ShiftIQ, CodeShift, RevoCode, and Veriq to compress multi-year migration timelines into structured, low-risk iterations.",
            },
          ].map((pillar, i) => (
            <Reveal key={pillar.tag} delay={i * 0.08}>
              <div className="group card-surface flex h-full flex-col p-8 transition-all hover:border-signal/50 hover:bg-ink-soft/70">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                  {pillar.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white group-hover:text-signal transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-mist">
                  {pillar.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. SIGNATURE VISUAL: THE EVOLUTION VECTOR */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Enterprise Evolution"
            title="The Path From Complexity to Autonomy"
            description="Our unified architectural model that guides every enterprise modernization engagement."
            align="center"
          />

          <div className="mt-12">
            <EvolutionVectorVisual />
          </div>
        </div>
      </section>

      {/* 4. WHY KARSIENT & PRODUCT PHILOSOPHY */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Product Philosophy</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
              We build the technology we wish existed during transformations.
            </h2>
            <p className="mt-4 font-body text-base text-mist leading-relaxed">
              Enterprise transformation repeatedly stalls on the same friction points: undocumented legacy stored procedures, manual code rewriting errors, post-cutover performance degradation, and unverified data quality.
            </p>
            <p className="mt-4 font-body text-base text-mist leading-relaxed">
              Karsient builds software products to automate away these recurring bottlenecks, turning hard-won engineering lessons into repeatable, defensible software solutions.
            </p>
            <div className="mt-8">
              <Link href="/products" className="btn-secondary">
                Explore The Product Suite &rarr;
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-ink-line/80 bg-ink-soft/40 p-8">
            <span className="font-mono text-xs uppercase tracking-wider text-signal">
              Engineering Principles
            </span>
            <ul className="mt-6 space-y-4">
              {[
                {
                  title: "Code Over Slides",
                  detail: "Architecture decisions are validated by shipping working code alongside client teams, not theoretical presentations.",
                },
                {
                  title: "Platform Agnostic Rigor",
                  detail: "We recommend what fits your enterprise constraints across Databricks, Snowflake, Azure, AWS, and GCP.",
                },
                {
                  title: "Production From Day One",
                  detail: "Security, lineage, evaluation guardrails, and FinOps cost controls are designed at inception, not bolted on after launch.",
                },
                {
                  title: "Zero-Downtime Migration",
                  detail: "Workload-by-workload migration executed in parallel-run waves with automated parity testing.",
                },
              ].map((item) => (
                <li key={item.title} className="border-b border-ink-line/50 pb-4 last:border-none last:pb-0">
                  <h4 className="font-display text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 font-body text-xs text-mist leading-relaxed">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. GLOBAL DELIVERY: INDIA HUBS */}
      <section className="section-py border-t border-ink-line bg-ink-soft/20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Global Delivery Model"
            title="Advanced Engineering Hubs Across India"
            description="Our innovation centers house specialized data platform architects, distributed systems engineers, and AI practitioners."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                city: "Bengaluru",
                role: "AI & Innovation Hub",
                desc: "Focused on Generative AI systems, enterprise RAG, agentic workflows, and LLM evaluation architectures.",
              },
              {
                city: "Chennai",
                role: "Platform Engineering Center",
                desc: "Home to our Lakehouse architects, Spark optimization specialists, and Databricks consulting teams.",
              },
              {
                city: "Madurai",
                role: "Corporate Headquarters & Delivery",
                desc: "Centralized engagement management, global client delivery, quality trust ops, and 24/7 managed services.",
              },
            ].map((hub) => (
              <div
                key={hub.city}
                className="rounded-2xl border border-ink-line/80 bg-ink p-7 text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-signal" />
                  <span className="font-mono text-xs font-semibold text-signal uppercase tracking-wider">
                    {hub.role}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">
                  {hub.city}
                </h3>
                <p className="mt-3 font-body text-xs leading-relaxed text-mist">
                  {hub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VISION & CTA */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <span className="eyebrow">The Vision</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">
            Engineering the foundation for tomorrow&apos;s intelligent enterprises.
          </h2>
          <p className="mt-4 font-body text-base text-mist leading-relaxed">
            Whether modernizing legacy data platforms or deploying production-grade AI systems, we partner with visionary technology leaders to turn complex data into enduring competitive advantage.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Connect With Our Leadership &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
