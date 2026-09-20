import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceGroups, migrationSolutions } from "@/lib/data";
import { ServicesEditorialMatrix } from "@/components/ServicesEditorialMatrix";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Enterprise Services & Capabilities | Karsient",
  description:
    "AI & Generative AI, Data Engineering, Cloud Modernization, Analytics & BI, Data Platform, and Managed Services for modern enterprises.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero */}
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-20 text-center sm:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/[0.08] px-3.5 py-1">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
                Engineering Capabilities
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              From raw enterprise data to governed, production AI.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-mist max-w-2xl mx-auto">
              Engage Karsient for a targeted architecture review, a complete platform migration, or an end-to-end production AI deployment.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Talk to a Karsient Expert &rarr;
              </Link>
              <Link href="/products" className="btn-secondary">
                Explore Our Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Editorial Services Matrix */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Core Practices"
          title="Enterprise Engineering Matrix"
          description="Select any capability below to inspect technology stacks, architectural blueprints, and verified business outcomes."
        />

        <div className="mt-12">
          <ServicesEditorialMatrix />
        </div>
      </section>

      {/* Deep-Dive Specialisms */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Dedicated Practices"
            title="Specialized Engineering Centers"
            description="Dedicated practices with certified delivery teams and established production accelerators."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {serviceGroups.map((group, i) => (
              <Reveal key={group.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${group.slug}`}
                  className="group card-surface flex h-full flex-col p-8 transition-all hover:border-signal/50 hover:bg-ink-soft/70"
                >
                  <span className="badge-saffron self-start">{group.eyebrow}</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-signal transition-colors">
                    {group.name}
                  </h3>
                  <p className="mt-2 flex-1 font-body text-xs leading-relaxed text-mist">
                    {group.tagline}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-ink-line pt-5">
                    {group.items.slice(0, 4).map((item) => (
                      <li key={item.slug} className="flex items-start gap-2 font-body text-xs text-white/80">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 flex items-center gap-1.5 font-mono text-xs text-signal">
                    Explore {group.name} &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Solutions Grid */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Platform Modernization"
          title="Targeted Migration Blueprints"
          description="Proven, zero-downtime migration paths from legacy data warehouses and ETL tools onto modern lakehouse platforms."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {migrationSolutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 5) * 0.05}>
              <Link
                href={`/solutions/${s.slug}`}
                className="group flex h-full flex-col rounded-xl border border-ink-line/70 bg-ink p-4 transition-all hover:border-signal/50 hover:bg-ink-soft/50"
              >
                <span className="font-display text-sm font-semibold text-white group-hover:text-signal transition-colors">
                  {s.name}
                </span>
                <span className="mt-2 flex-1 font-body text-xs leading-relaxed text-mist">
                  {s.short}
                </span>
                <span className="mt-3 font-mono text-[11px] text-signal/80 group-hover:text-signal">
                  Migration Blueprint &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Start The Conversation"
            title="Discuss your architecture challenge with our engineering leads"
            align="center"
          />
          <Reveal delay={0.1} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Talk to a Karsient Expert &rarr;
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
