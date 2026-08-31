import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { productMockups } from "@/components/icons/ProductMockups";
import { ModernizationJourney } from "@/components/ModernizationJourney";
import { TechnologyPositioning } from "@/components/TechnologyPositioning";
import { products, productTargetIndustries, productTargetPersonas } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/products" },
  title: "Products",
  description:
    "Karsient ShiftIQ, CodeShift, RevoCode, and Veriq — the AI-powered platform for legacy modernization intelligence, code transformation, continuous optimization, and data trust.",
};

const journeyCards = [
  {
    verb: "DISCOVER",
    product: "ShiftIQ",
    slug: "karsient-shiftiq",
    description: "Understand the legacy environment.",
    question: "What do we have?",
  },
  {
    verb: "TRANSFORM",
    product: "CodeShift",
    slug: "karsient-codeshift",
    description: "Convert legacy workloads into modern implementations.",
    question: "How do we migrate it?",
  },
  {
    verb: "EVOLVE",
    product: "RevoCode",
    slug: "karsient-revocode",
    description: "Optimize and continuously modernize the new codebase.",
    question: "How do we make it better?",
  },
  {
    verb: "TRUST",
    product: "Veriq",
    slug: "karsient-veriq",
    description: "Continuously govern and explain the trustworthiness of the data itself.",
    question: "Can we trust this data?",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-line bg-grid-glow">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-signal/10 blur-[100px]" />
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">Products</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Discover. Transform. Evolve. Trust.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Karsient helps enterprises understand legacy technology, transform it into modern
              engineering platforms, continuously optimize the resulting codebase, and govern the
              trustworthiness of the data itself — through four purpose-built, AI-powered products.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Ready to Modernize Your Legacy Environment?
            </Link>
          </Reveal>
        </div>
      </section>

      {/* THREE PRODUCTS, THREE PROBLEMS */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Product differentiation"
          title="Four products. Four modernization problems."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journeyCards.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link
                href={`/products/${c.slug}`}
                className="focus-ring group flex h-full flex-col rounded-2xl border border-ink-line bg-ink-soft/30 p-7 transition-colors hover:border-signal/50"
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{c.verb}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{c.product}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">{c.description}</p>
                <p className="mt-5 border-t border-ink-line pt-4 font-body text-sm italic text-mist">
                  &ldquo;{c.question}&rdquo;
                </p>
                <span className="mt-4 flex items-center gap-1 font-body text-xs text-signal opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-xs uppercase tracking-wide text-mist">
          <span>Discover</span>
          <span className="text-signal">&rarr;</span>
          <span>Transform</span>
          <span className="text-signal">&rarr;</span>
          <span>Evolve</span>
          <span className="text-signal">&rarr;</span>
          <span>Trust</span>
        </Reveal>
      </section>

      {/* PRODUCTS GRID */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="The products" title="Karsient's AI-powered modernization platform" />
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {products.map((product, i) => {
              const Mockup = productMockups[product.slug];
              return (
                <Reveal key={product.slug} delay={i * 0.08}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="focus-ring group card-surface flex h-full flex-col overflow-hidden p-0 transition-colors hover:border-signal/50"
                  >
                    <div className="border-b border-ink-line">{Mockup && <Mockup />}</div>
                    <div className="flex flex-1 flex-col p-7">
                      <span className="eyebrow">{product.category}</span>
                      <h2 className="mt-3 font-display text-xl font-semibold text-white">{product.name}</h2>
                      <p className="mt-2 font-body text-sm font-medium text-signal">{product.tagline}</p>
                      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-mist">
                        {product.heroSubhead}
                      </p>
                      <span className="mt-5 flex items-center gap-1 border-t border-ink-line pt-4 font-body text-sm text-signal opacity-80 transition-opacity group-hover:opacity-100">
                        {product.cta} &rarr;
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODERNIZATION JOURNEY */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The journey"
          title="The Karsient Modernization Journey"
          description="From a legacy environment to a modernized, optimized enterprise — one connected journey across all three products."
          align="center"
        />
        <div className="mt-12">
          <ModernizationJourney />
        </div>
      </section>

      {/* TECHNOLOGY POSITIONING */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Technology"
            title="Works across the enterprise technologies you already run"
            align="center"
          />
          <div className="mt-12">
            <TechnologyPositioning />
          </div>
        </div>
      </section>

      {/* TARGET CUSTOMERS */}
      <section className="section-py container-px mx-auto max-w-5xl">
        <SectionHeading eyebrow="Who it's for" title="Built for large enterprises with legacy data platforms" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">Industries</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {productTargetIndustries.map((ind) => (
                <span key={ind} className="rounded-full border border-ink-line bg-ink-soft/40 px-3.5 py-1.5 font-body text-xs text-mist">
                  {ind}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">Who we work with</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {productTargetPersonas.map((p) => (
                <span key={p} className="rounded-full border border-ink-line bg-ink-soft/40 px-3.5 py-1.5 font-body text-xs text-mist">
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT ARCHITECTURE / MASTER MESSAGE */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">Master positioning</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Karsient helps enterprises understand legacy technology, transform it into modern
              engineering platforms, continuously optimize the resulting codebase, and govern the
              trustworthiness of the data itself.
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Karsient ShiftIQ", role: "Legacy Intelligence" },
              { name: "Karsient CodeShift", role: "Legacy Transformation" },
              { name: "Karsient RevoCode", role: "Continuous Modernization" },
              { name: "Karsient Veriq", role: "Data Trust & Control Plane" },
            ].map((p) => (
              <div key={p.name} className="rounded-xl border border-ink-line bg-ink p-5">
                <p className="font-display text-sm font-semibold text-white">{p.name}</p>
                <p className="mt-1 font-body text-xs text-mist">{p.role}</p>
              </div>
            ))}
          </div>
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
              Ready to Modernize Your Legacy Environment?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/products/karsient-shiftiq" className="btn-primary">
              Assess Your Environment
            </Link>
            <Link href="/products/karsient-codeshift" className="btn-secondary">
              Explore CodeShift
            </Link>
            <Link href="/products/karsient-revocode" className="btn-secondary">
              Optimize Your Codebase
            </Link>
            <Link href="/products/karsient-veriq" className="btn-secondary">
              Establish Data Trust
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
