import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { productMockups } from "@/components/icons/ProductMockups";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/products" },
  title: "Enterprise Product Suite | Karsient",
  description:
    "ShiftIQ, CodeShift, RevoCode, and Veriq — four purpose-built enterprise modernization products for legacy discovery, code transformation, continuous optimization, and data trust.",
};

const productJourney = [
  {
    step: "01",
    verb: "DISCOVER",
    name: "ShiftIQ",
    slug: "karsient-shiftiq",
    question: "What do we have?",
    problem: "Millions of lines of undocumented legacy stored procedures, ETL jobs, and tangled dependencies with unknown migration risk.",
    solution: "AI-assisted dialect-aware AST parsing that extracts business rules and maps full source-to-target dependency graphs.",
    keyOutcome: "Defensible scope, complexity scoring, and zero loss of business logic.",
  },
  {
    step: "02",
    verb: "TRANSFORM",
    name: "CodeShift",
    slug: "karsient-codeshift",
    question: "How do we migrate it?",
    problem: "Manual code conversion is slow, prone to human error, and rarely adopts modern distributed compute idioms.",
    solution: "Deterministic rules combined with generative AI to convert legacy SQL/ETL into idiomatic Databricks PySpark and Delta Live Tables.",
    keyOutcome: "Accelerated conversion with confidence scoring and human-in-the-loop review.",
  },
  {
    step: "03",
    verb: "EVOLVE",
    name: "RevoCode",
    slug: "karsient-revocode",
    question: "How do we make it better?",
    problem: "Even after migration, new codebases accumulate technical debt, inefficient queries, duplicated logic, and cloud compute creep.",
    solution: "Continuous static and runtime profiling of Databricks workloads to recommend query restructuring and cluster optimization.",
    keyOutcome: "Maintained code health, eliminated dead code, and disciplined FinOps spend.",
  },
  {
    step: "04",
    verb: "TRUST",
    name: "Veriq",
    slug: "karsient-veriq",
    question: "Can we trust this data?",
    problem: "Defective records halt entire pipeline batches or silently corrupt executive reporting and downstream AI models.",
    solution: "AI-native data trust gate that evaluates data as it moves, quarantining defective records while healthy data continues flowing.",
    keyOutcome: "Record-level incident triage, automated remediation, and verifiable Data Trust Scores.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Products Hero */}
      <section className="relative overflow-hidden border-b border-ink-line bg-grid-glow pt-16 pb-24 sm:pt-20 sm:pb-28">
        <div className="container-px mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/[0.08] px-3.5 py-1">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
                Modernization &amp; Trust Suite
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Discover. Transform. Evolve. Trust.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-mist max-w-3xl mx-auto">
              Four enterprise technology products engineered to solve the hardest problems in legacy migration, code transformation, continuous optimization, and data governance.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Schedule Suite Demonstration &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 1. INTERCONNECTED PRODUCT JOURNEY */}
      <section className="section-py border-b border-ink-line bg-ink">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Modernization Pipeline"
            title="Four Products. One Connected Journey."
            description="Each product solves a critical stage in the enterprise modernization lifecycle — from initial legacy discovery to governed, trustworthy production."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productJourney.map((item, idx) => (
              <Reveal key={item.slug} delay={idx * 0.08}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-ink-line/80 bg-ink-soft/40 p-6 backdrop-blur-md transition-all hover:border-signal/60 hover:bg-ink-soft/80">
                  <div className="flex items-center justify-between">
                    <span className="badge-saffron">
                      {item.step} &middot; {item.verb}
                    </span>
                    <span className="font-mono text-[11px] text-mist/70 italic">
                      &ldquo;{item.question}&rdquo;
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-white group-hover:text-signal transition-colors">
                    {item.name}
                  </h3>

                  <div className="mt-4 space-y-3 flex-1 border-t border-ink-line/60 pt-4 text-xs font-body leading-relaxed">
                    <div>
                      <span className="font-mono uppercase tracking-wider text-mist/60 text-[10px] block">
                        Problem Solved:
                      </span>
                      <p className="mt-1 text-mist">{item.problem}</p>
                    </div>

                    <div>
                      <span className="font-mono uppercase tracking-wider text-signal text-[10px] block">
                        Engineering Solution:
                      </span>
                      <p className="mt-1 text-white/90">{item.solution}</p>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-ink-line/60 pt-4">
                    <Link
                      href={`/products/${item.slug}`}
                      className="inline-flex items-center gap-1 font-mono text-xs text-signal hover:underline"
                    >
                      Deep Dive {item.name} &rarr;
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. DETAILED PRODUCT DEEP DIVES */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="space-y-24">
          {products.map((product, idx) => {
            const Mockup = productMockups[product.slug];
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={product.slug}
                id={product.slug}
                className="scroll-mt-28 grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
              >
                {/* Visual / Mockup Column */}
                <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                  <div className="overflow-hidden rounded-2xl border border-ink-line shadow-2xl bg-ink-soft/40">
                    {Mockup && <Mockup />}
                  </div>
                </div>

                {/* Content Column */}
                <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                  <div className="flex items-center gap-2">
                    <span className="badge-saffron">
                      0{idx + 1} &middot; {product.journeyStage}
                    </span>
                    <span className="font-mono text-xs text-mist">
                      &ldquo;{product.journeyQuestion}&rdquo;
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                    {product.name}
                  </h2>

                  <p className="mt-2 font-body text-sm font-semibold text-signal">
                    {product.tagline}
                  </p>

                  <p className="mt-4 font-body text-sm leading-relaxed text-mist">
                    {product.description}
                  </p>

                  <div className="mt-6 border-t border-ink-line pt-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-white">
                      Core Architecture Capabilities:
                    </span>
                    <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {product.features.slice(0, 4).map((f) => (
                        <div
                          key={f.title}
                          className="flex items-start gap-2 text-xs font-body text-mist"
                        >
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-signal" />
                          <span className="text-white/90 font-medium">{f.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      href={`/products/${product.slug}`}
                      className="btn-primary"
                    >
                      {product.cta} &rarr;
                    </Link>
                    <Link
                      href="/contact"
                      className="btn-secondary text-xs"
                    >
                      Request Architecture Briefing
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Enterprise SaaS Deployment & Licensing Models */}
      <section className="section-py border-t border-ink-line bg-[#06080F]">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Deployment Architecture"
            title="Enterprise Cloud &amp; Private VPC Editions"
            description="Deploy Karsient AI OS according to your organization's compliance, latency, and data isolation mandates."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1: Cloud Managed SaaS */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  Cloud Managed SaaS
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-2">
                  Multi-Tenant Cloud
                </h3>
                <p className="mt-3 text-xs text-slate-300 font-body leading-relaxed">
                  Fastest time-to-value. Managed control plane hosted on Karsient Cloud with read-only metadata ingestion.
                </p>
                <div className="my-6 border-t border-white/10 pt-6 space-y-3 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Instant provisioning &amp; updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>SOC2 Type II &amp; ISO 27001</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Standard REST API &amp; Webhook access</span>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="w-full btn-secondary text-center text-xs py-3">
                Request SaaS Trial &rarr;
              </Link>
            </div>

            {/* Tier 2: Dedicated Private VPC (Recommended) */}
            <div className="rounded-2xl border-2 border-cyan-400 bg-gradient-to-b from-cyan-950/30 to-[#0A0E18] p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(0,242,254,0.15)] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-amber-400 px-3 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-black">
                Most Popular Enterprise Choice
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Customer Cloud
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-2">
                  Dedicated Private VPC
                </h3>
                <p className="mt-3 text-xs text-slate-300 font-body leading-relaxed">
                  Deployed entirely within your Azure VNet, AWS VPC, or GCP Project. Zero telemetry or code leaves your perimeter.
                </p>
                <div className="my-6 border-t border-white/10 pt-6 space-y-3 font-mono text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Zero Data Exfiltration guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>AWS PrivateLink &amp; Azure ExpressRoute</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Custom LLM fine-tuning in your tenant</span>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="w-full btn-primary text-center text-xs py-3">
                Book VPC Architecture Demo &rarr;
              </Link>
            </div>

            {/* Tier 3: Sovereign / Air-Gapped */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Regulated &amp; Defense
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-2">
                  Air-Gapped Kubernetes
                </h3>
                <p className="mt-3 text-xs text-slate-300 font-body leading-relaxed">
                  On-premises bare-metal or self-hosted Kubernetes clusters for tier-1 banking, intelligence, and healthcare compliance.
                </p>
                <div className="my-6 border-t border-white/10 pt-6 space-y-3 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>100% Offline / Air-gapped installation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Local Ollama / vLLM model inference</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Dedicated 24/7 Enterprise SRE support</span>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="w-full btn-secondary text-center text-xs py-3">
                Consult With Security Architect &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONVERSION BANNER */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl text-center">
          <span className="eyebrow">Enterprise Suite Deployment</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Evaluate how Karsient products integrate with your stack
          </h2>
          <p className="mt-4 font-body text-base text-mist max-w-2xl mx-auto">
            Book an interactive technical walk-through with our product engineering team using sample code and schema configurations from your environment.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Technical Session &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
