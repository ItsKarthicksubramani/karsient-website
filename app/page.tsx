import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { SaaSPlatformHero } from "@/components/SaaSPlatformHero";
import { TechnologyEcosystemStrip } from "@/components/TechnologyEcosystemStrip";
import { ModernizationRoiCalculator } from "@/components/ModernizationRoiCalculator";
import { SaaSBentoGrid } from "@/components/SaaSBentoGrid";
import { TransformationJourneyVisual } from "@/components/TransformationJourneyVisual";
import { EnterpriseArchitectureDiagram } from "@/components/EnterpriseArchitectureDiagram";
import { IndustryShowcase } from "@/components/IndustryShowcase";
import {
  services,
  industries,
  engineeringCapability,
  caseStudies,
  products,
} from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Karsient AI OS | Autonomous Cloud Modernization & Enterprise Intelligence SaaS",
  description:
    "Karsient is the enterprise AI & Data Modernization SaaS platform. Discover legacy architectures, transpile enterprise codebases, enforce continuous governance, and build governed production lakehouses automatically.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. FINSEO-INSPIRED 3D INTERACTIVE SAAS HERO */}
      <SaaSPlatformHero />

      {/* 2. TECHNOLOGY ECOSYSTEM TRUST STRIP */}
      <TechnologyEcosystemStrip />

      {/* 3. AUTHENTICOM-INSPIRED HIGH-CONVICTION PROBLEM STATEMENT */}
      <section className="relative overflow-hidden bg-[#05070D] py-20 border-b border-white/10">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Big Callout */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/30 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-amber-300 mb-4">
                The Enterprise Dilemma
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight uppercase">
                Four legacy clouds. <br />
                Five data warehouses. <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                  Zero Unified Intelligence.
                </span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-slate-300 font-body leading-relaxed">
                Legacy code and fragmented data silos don’t fix themselves. Traditional systems integrators bring hundreds of billable contractors for multi-year rewrites that fail 70% of the time.
              </p>
              <p className="mt-3 text-base sm:text-lg text-white font-semibold font-body">
                Karsient’s autonomous AI platform transforms monolithic debt into governed, production-grade cloud native lakehouses in weeks—not years.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20 border border-white/15"
                >
                  <span>Explore the 4-Stage Platform</span>
                  <span>&rarr;</span>
                </Link>
                <a
                  href="#roi-calculator"
                  className="text-sm font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  See Cost Comparison ↓
                </a>
              </div>
            </div>

            {/* Right Comparison Matrix (Before vs Karsient AI OS) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-2">
                  <span>Traditional Consulting Approach</span>
                  <span>18 – 36 MONTHS</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-body">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>Manual reverse-engineering of decades-old stored procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>High human error rate with broken business logic and data drift</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>Bloated multimillion-dollar time &amp; materials billings</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/15 p-6 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  <span>The Karsient Autonomous SaaS Platform</span>
                  <span>3 – 6 WEEKS</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-white font-body">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>ShiftIQ automatically constructs 100% dependency lineage graphs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>CodeShift &amp; RevoCode transpile and generate unit-tested cloud code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Veriq enforces bit-level reconciliation and zero schema drift 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE MODERNIZATION ROI & VALUE CALCULATOR */}
      <ModernizationRoiCalculator />

      {/* 5. FINSEO-INSPIRED BENTO GRID: UNIFIED SAAS CAPABILITIES */}
      <SaaSBentoGrid />

      {/* 6. SIGNATURE STORYTELLING: FROM COMPLEXITY TO INTELLIGENCE */}
      <section className="section-py border-b border-ink-line bg-ink">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Modernization Architecture"
            title="From Complexity to Intelligence"
            description="The transformation journey from legacy technical debt to governed data, production AI, and continuous enterprise evolution."
            align="center"
          />

          <div className="mt-12">
            <TransformationJourneyVisual />
          </div>
        </div>
      </section>

      {/* 7. CONNECTED PRODUCTS SUITE */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Core SaaS Engines"
              title="Four Engines. One Unified Autonomous Platform."
              description="ShiftIQ, CodeShift, RevoCode, and Veriq — engineered to discover legacy complexity, transpile workloads, synthesize microservices, and enforce continuous trust."
            />
            <Reveal>
              <Link href="/products" className="btn-secondary shrink-0">
                Explore Full Product Suite &rarr;
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.08}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group card-surface flex h-full flex-col p-6 transition-all duration-300 hover:border-signal/50 hover:bg-ink-soft/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="badge-saffron">
                      0{i + 1} &middot; {product.journeyStage}
                    </span>
                    <span className="font-mono text-[11px] text-mist/70">
                      &ldquo;{product.journeyQuestion}&rdquo;
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-signal transition-colors">
                    {product.name}
                  </h3>

                  <p className="mt-1 font-body text-xs font-medium text-signal">
                    {product.tagline}
                  </p>

                  <p className="mt-3 flex-1 font-body text-xs leading-relaxed text-mist">
                    {product.heroSubhead}
                  </p>

                  <div className="mt-5 border-t border-ink-line pt-4">
                    <span className="flex items-center gap-1.5 font-mono text-xs text-signal transition-transform group-hover:translate-x-1">
                      {product.cta} &rarr;
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. REFERENCE ARCHITECTURE TOPOLOGY */}
      <section className="section-py border-b border-ink-line bg-ink-soft/20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Reference Architecture"
            title="Engineered for Governed Scale &amp; Production AI"
            description="From diverse enterprise sources to lakehouse curation, automated governance, and business-critical inference."
            align="center"
          />
          <div className="mt-12">
            <EnterpriseArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* 9. CREDIBLE CASE STUDIES */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Production Proof"
            title="Real-World Modernization in Action"
            description="Verified and anonymized enterprise transformation case studies across financial services, retail, and manufacturing."
          />
          <Reveal>
            <Link href="/case-studies" className="btn-secondary shrink-0">
              All Case Studies &rarr;
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.08}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group card-surface flex h-full flex-col p-7 transition-all duration-300 hover:border-signal/50 hover:bg-ink-soft/60"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{cs.industry}</span>
                  <span className="rounded-full border border-ink-line bg-ink px-2.5 py-0.5 font-mono text-[10px] text-cyan-soft">
                    Engagement
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-white group-hover:text-signal transition-colors">
                  {cs.title}
                </h3>

                <p className="mt-3 flex-1 font-body text-xs leading-relaxed text-mist">
                  {cs.summary}
                </p>

                <div className="mt-5 space-y-2 border-t border-ink-line pt-4">
                  {cs.results.slice(0, 2).map((r) => (
                    <div key={r} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      <span className="font-body text-xs text-white/90">{r}</span>
                    </div>
                  ))}
                </div>

                <span className="mt-5 flex items-center gap-1 font-mono text-xs text-signal">
                  Read Technical Breakdown &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 10. INDUSTRY DOMAINS WITH HIGH-RESOLUTION VISUALS */}
      <IndustryShowcase />

      {/* 11. STRATEGIC CONVERSION BANNER */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow">Enterprise Transformation</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to automate your enterprise cloud modernization?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl font-body text-base text-mist leading-relaxed">
              Schedule a 30-minute interactive demo with our engineering team to see Karsient AI OS analyze your legacy code in real-time.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book Interactive Demo &rarr;
              </Link>
              <a href="#roi-calculator" className="btn-secondary">
                Calculate Modernization ROI
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
