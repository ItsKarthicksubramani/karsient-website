import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TechIcon } from "@/components/icons/TechIcons";
import type { LogoKey } from "@/components/icons/TechIcons";
import { MethodologyFlow } from "@/components/MethodologyFlow";
import { productMockups } from "@/components/icons/ProductMockups";
import { products } from "@/lib/data";
import type { Product } from "@/lib/data";

export function ProductPage({ product }: { product: Product }) {
  const Mockup = productMockups[product.slug];
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-line bg-grid-glow">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-signal/10 blur-[100px]" />
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <Reveal>
              <p className="eyebrow">
                <Link href="/products" className="hover:text-signal">
                  Products
                </Link>{" "}
                &rarr; {product.category}
              </p>
            </Reveal>
            <Reveal delay={0.03} className="mt-4 flex items-center gap-2">
              <span className="rounded-full border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-signal">
                {String(products.findIndex((p) => p.slug === product.slug) + 1).padStart(2, "0")} &middot; {product.journeyStage.toUpperCase()}
              </span>
              <span className="font-body text-xs text-mist">&ldquo;{product.journeyQuestion}&rdquo;</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {product.name}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 font-body text-lg font-medium text-signal">{product.tagline}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 font-body text-base leading-relaxed text-mist">{product.heroSubhead}</p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                {product.cta}
              </Link>
              <Link href="/products" className="btn-secondary">
                Compare all products
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-ink-line shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
              {Mockup && <Mockup />}
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY POSITION */}
      <section className="border-b border-ink-line bg-ink-soft/20">
        <div className="container-px mx-auto max-w-4xl py-6">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {products.map((p, i) => (
              <div key={p.slug} className="flex items-center gap-2 sm:gap-4">
                <Link
                  href={`/products/${p.slug}`}
                  className={`focus-ring rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide transition-colors sm:text-xs ${
                    p.slug === product.slug
                      ? "border-signal/50 bg-signal/10 text-signal"
                      : "border-ink-line text-mist hover:text-white"
                  }`}
                >
                  {p.journeyStage} &middot; {p.shortName}
                </Link>
                {i < products.length - 1 && <span className="font-mono text-xs text-mist">&rarr;</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="section-py container-px mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Why it exists"
          title={`Problems ${product.shortName} solves`}
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {product.problems.map((p) => (
            <div key={p} className="flex items-start gap-2.5 rounded-lg border border-ink-line bg-ink-soft/40 p-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              <p className="font-body text-sm leading-relaxed text-mist">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS / ARCHITECTURE DIAGRAM */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How it works"
            title={`Inside the ${product.shortName} process`}
            description={product.journeyVerbs.join(" \u2192 ")}
            align="center"
          />
          <div className="mt-14">
            <MethodologyFlow steps={product.process.map((s) => ({ step: s.title, detail: s.detail }))} />
          </div>
        </div>
      </section>

      {/* HOW IT ANALYZES / CONVERTS — deeper technical explanation */}
      <section className="section-py container-px mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Under the hood</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              {product.howItWorks.title}
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-mist">
              {product.howItWorks.description}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-3">
              {product.howItWorks.points.map((point, i) => (
                <div key={point} className="flex items-start gap-3 rounded-xl border border-ink-line bg-ink-soft/30 p-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-signal/30 bg-signal/10 font-mono text-[11px] text-signal">
                    {i + 1}
                  </div>
                  <p className="font-body text-sm leading-relaxed text-mist">{point}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="Capabilities" title="What's inside" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.06}>
                <div className="card-surface h-full p-6">
                  <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-mist">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow="Integrations" title="Works with what you already run" align="center" />
          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-4">
            {product.integrations.map((key) => (
              <div
                key={key}
                className="flex h-14 w-14 items-center justify-center rounded-xl border border-ink-line bg-ink p-3"
              >
                <TechIcon name={key as LogoKey} className="h-full w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py container-px mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="See it on your data"
          title={`Get a walkthrough of ${product.name}`}
          description="We'll run it against a sample of your own schema or code so you can see exactly what it surfaces."
          align="center"
        />
        <Reveal delay={0.1} className="mt-8">
          <Link href="/contact" className="btn-primary">
            {product.cta}
          </Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />
          <div className="mt-10">
            <FAQAccordion items={product.faqs} />
          </div>
        </div>
      </section>

      {/* OTHER PRODUCTS */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="The toolkit" title="The rest of the Karsient product suite" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {otherProducts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                href={`/products/${p.slug}`}
                className="focus-ring group card-surface flex h-full flex-col p-7 transition-colors hover:border-signal/50"
              >
                <span className="eyebrow">{p.category}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-mist">{p.tagline}</p>
                <span className="mt-5 flex items-center gap-1 border-t border-ink-line pt-4 font-body text-sm text-signal opacity-80 transition-opacity group-hover:opacity-100">
                  Learn more &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Karsient is a product company too</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Use {product.name} standalone, or as part of a Karsient-led modernization engagement
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Talk to Us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
