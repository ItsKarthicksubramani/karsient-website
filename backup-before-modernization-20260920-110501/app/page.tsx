import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { MethodologyFlow } from "@/components/MethodologyFlow";
import { FloatingParticles } from "@/components/FloatingParticles";
import { NetworkOrb } from "@/components/NetworkOrb";
import { TechCarousel } from "@/components/TechCarousel";
import { PlatformCapabilities } from "@/components/PlatformCapabilities";
import { IndustryVisual } from "@/components/IndustryVisual";
import { EnterpriseArchitectureDiagram } from "@/components/EnterpriseArchitectureDiagram";
import { AnimatedHeroTitle } from "@/components/AnimatedHeroTitle";
import { RowCarousel } from "@/components/RowCarousel";
import { Counter } from "@/components/Counter";
import {
  services,
  industries,
  heroStats,
  engineeringCapability,
  whyKarsient,
  engineeringOutcomes,
  caseStudies,
  site,
  platformLogos,
  platformCapabilities,
  intelligenceCapabilities,
  products,
  migrationMethodology,
} from "@/lib/data";
import { productMockups } from "@/components/icons/ProductMockups";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: {
    absolute: "Karsient | AI, Data Engineering & Cloud Solutions",
  },
  description:
    "Karsient is an AI and Data Engineering company helping enterprises modernize data platforms, build production AI, and engineer intelligent enterprise solutions across cloud, Lakehouse, RAG and Agentic AI.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-line bg-grid-glow">
        <div className="absolute inset-0 grid-overlay opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <FloatingParticles />
        {/* hologram / running-platform visual, sits behind all hero content */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-30 sm:h-[760px] sm:w-[760px] lg:opacity-35"
        >
          <NetworkOrb />
        </div>
        <div className="container-px relative z-10 mx-auto max-w-4xl py-24 text-center sm:py-28 lg:py-32">
          <Reveal className="flex justify-center">
            <p className="eyebrow rounded-full border border-signal/30 bg-signal/[0.06] px-4 py-1.5">
              Enterprise Data Engineering &middot; Databricks &middot; AI
            </p>
          </Reveal>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
            <AnimatedHeroTitle
              lineOne="Engineering tomorrow's"
              lineTwo="intelligent enterprises."
              lineOneClassName="text-white"
              lineTwoClassName="text-signal"
              startDelay={0.15}
            />
          </h1>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-mist">
              Modern data platforms. Production-grade AI. Karsient modernizes
              legacy data estates onto the Lakehouse, engineers governed cloud
              data platforms, and builds AI that runs in production — with
              measurable gains in performance, cost, and time-to-insight.
            </p>
          </Reveal>
          <Reveal delay={0.13}>
            <div className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-2">
              {[
                "Databricks Migration",
                "Legacy Modernization",
                "Data Engineering",
                "AI & GenAI",
                "Cloud Platforms",
                "Performance & Cost Optimization",
              ].map((cap) => (
                <span
                  key={cap}
                  className="rounded-full border border-ink-line bg-ink-soft/50 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-mist"
                >
                  {cap}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss Your Data &amp; AI Challenge &rarr;
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Solutions
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent" />
              <div className="grid grid-cols-2 sm:grid-cols-4">
                {engineeringCapability.map((c, i) => (
                  <div
                    key={c.label}
                    className={`group relative px-5 py-7 text-center transition-colors duration-300 hover:bg-white/[0.04] ${
                      i % 2 === 0 ? "border-r border-white/10 sm:border-r" : ""
                    } ${i < 2 ? "border-b border-white/10 sm:border-b-0" : ""} ${
                      i > 0 ? "sm:border-l sm:border-white/10" : ""
                    }`}
                  >
                    {c.numeric ? (
                      <p className="font-display text-2xl font-bold text-signal sm:text-3xl">
                        <Counter value={c.value!} suffix={c.suffix} />
                      </p>
                    ) : (
                      <p className="font-display text-2xl font-bold text-signal sm:text-3xl">{c.stat}</p>
                    )}
                    <p className="mx-auto mt-2 max-w-[9rem] font-body text-[11px] font-medium leading-snug text-white/90 sm:text-xs">
                      {c.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REFERENCE ARCHITECTURE */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Platform architecture"
            title="A reference architecture for the modern data & AI estate"
            description="Sources through to business outcomes — the same architectural pattern we tailor to every migration and platform build."
            align="center"
          />
          <div className="mt-12">
            <EnterpriseArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="A full data-to-AI capability, under one roof"
            description="Six core specialisms that cover the full lifecycle — from raw data to governed platforms to production AI."
          />
          <Reveal>
            <Link href="/services" className="btn-secondary shrink-0">
              View all services
            </Link>
          </Reveal>
        </div>
        <div className="mt-12">
          <RowCarousel>
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </RowCarousel>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Products"
              title="The Karsient product suite"
              description="ShiftIQ, CodeShift, RevoCode, and Veriq — four purpose-built products that power every stage of enterprise modernization, from discovery through to governed, trusted production."
            />
            <Reveal>
              <Link href="/products" className="btn-secondary shrink-0">
                View all products
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => {
              const Mockup = productMockups[product.slug];
              return (
                <Reveal key={product.slug} delay={i * 0.08}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="focus-ring group card-surface flex h-full flex-col overflow-hidden p-0 transition-colors hover:border-signal/50"
                  >
                    <div className="border-b border-ink-line">{Mockup && <Mockup />}</div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="eyebrow">{product.category}</span>
                      <h3 className="mt-2 font-display text-lg font-semibold text-white">{product.name}</h3>
                      <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-mist">{product.tagline}</p>
                      <span className="mt-4 flex items-center gap-1 border-t border-ink-line pt-4 font-body text-sm text-signal opacity-80 transition-opacity group-hover:opacity-100">
                        Explore {product.shortName} &rarr;
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="border-y border-ink-line bg-ink-soft/30 py-14">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-mist/60">
            Who we are
          </p>
          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {heroStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-signal/50 hover:bg-white/[0.06] hover:shadow-[0_0_35px_-10px_rgba(255,106,0,0.25)]">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-signal/0 blur-2xl transition-all duration-500 group-hover:bg-signal/20" />
                  {s.numeric ? (
                    <p className="relative font-display text-2xl font-bold text-signal sm:text-3xl">
                      <Counter value={s.value!} suffix={s.suffix} />
                    </p>
                  ) : (
                    <svg viewBox="0 0 24 24" className="relative mx-auto h-8 w-8 text-signal sm:h-9 sm:w-9">
                      <g fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3Z" />
                      </g>
                    </svg>
                  )}
                  <p className="relative mt-2 font-display text-xs font-semibold text-white sm:text-sm">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY PLATFORMS */}
      <section id="technology-platforms" className="section-py scroll-mt-24 border-y border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our stack"
            title="Technology Platforms"
            description="Enterprise technologies we use to build secure, scalable and AI-ready solutions."
            align="center"
          />
        </div>
        <div className="mt-12">
          <TechCarousel logos={platformLogos} />
        </div>
      </section>

      {/* INTELLIGENCE ENGINEERED FOR THE ENTERPRISE */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <div>
          <SectionHeading
            eyebrow="AI"
            title="Intelligence engineered for the enterprise"
            description="Production AI systems, engineered with the same rigor as any other enterprise platform — not proof-of-concept demos."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {intelligenceCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <Link
                  href={c.href}
                  className="focus-ring group card-surface flex h-full flex-col p-6 transition-colors hover:border-signal/50"
                >
                  <h3 className="font-display text-base font-semibold text-white">{c.title}</h3>
                  <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-mist">{c.detail}</p>
                  <span className="mt-4 flex items-center gap-1 font-body text-xs text-signal opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM CAPABILITIES */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we build with"
          title="Platform Capabilities"
          description="The core stack behind every engagement — engineering, cloud, AI, and analytics working as one."
          align="center"
        />
        <div className="mt-12">
          <PlatformCapabilities cards={platformCapabilities} />
        </div>
      </section>

      {/* WHY KARSIENT */}
      <section className="section-py border-y border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Karsient"
            title="A technical partner, not just an advisor"
            description="We are engineers first — the same people who design your architecture also help build and operate it."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyKarsient.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="card-surface h-full p-7">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-mist">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Representative scenarios"
            title="How we approach real-world challenges"
            description="Illustrative engineering scenarios showing our approach and architecture thinking — not verified named-client case studies."
          />
          <Reveal>
            <Link href="/case-studies" className="btn-secondary shrink-0">
              View all case studies
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.08}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="focus-ring group card-surface flex h-full flex-col p-7 transition-colors hover:border-signal/50"
              >
                <span className="eyebrow">{cs.industry}</span>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-white">
                  {cs.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-mist">
                  {cs.summary}
                </p>
                <ul className="mt-5 space-y-2 border-t border-ink-line pt-5">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 font-body text-xs text-mist">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {r}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 flex items-center gap-1 font-body text-xs text-signal opacity-0 transition-opacity group-hover:opacity-100">
                  Read the full story &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ENGINEERING OUTCOMES */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Engineering outcomes"
          title="What working with Karsient looks like"
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {engineeringOutcomes.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:border-signal/50 hover:bg-white/[0.05] hover:shadow-[0_0_45px_-8px_rgba(255,106,0,0.18)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-signal/0 blur-3xl transition-all duration-500 group-hover:bg-signal/20" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-signal/25 bg-signal/10 font-mono text-sm text-signal">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="relative mt-5 font-display text-lg font-semibold text-white">{t.title}</p>
                <p className="relative mt-2 font-body text-sm leading-relaxed text-mist">{t.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-py border-y border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Industry expertise"
              title="Built for regulated, data-intensive industries"
              description="Every industry has its own data gravity and compliance load. We bring pattern-matched experience, not generic playbooks."
            />
            <Reveal>
              <Link href="/industries" className="btn-secondary shrink-0">
                View all industries
              </Link>
            </Reveal>
          </div>
          <div className="mt-12">
            <RowCarousel itemClassName="w-[240px] shrink-0 sm:w-[260px]">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="focus-ring group flex h-full flex-col gap-4 rounded-xl border border-ink-line bg-ink p-4 transition-colors hover:border-signal/60"
                >
                  <IndustryVisual slug={ind.slug} name={ind.name} />
                  <div className="flex flex-1 flex-col justify-between">
                    <span className="font-display text-base font-semibold text-white">
                      {ind.name}
                    </span>
                    <span className="mt-3 flex items-center gap-1 font-body text-xs text-signal opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </RowCarousel>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How we work"
          title="A disciplined, ten-stage delivery methodology"
          description="Every engagement — whether a two-week assessment or a year-long platform build — follows the same disciplined path, from discovery through to running it for you."
          align="center"
        />
        <div className="relative mt-16">
          <MethodologyFlow steps={migrationMethodology} />
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">Let&apos;s build the future together</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
              Ready to turn your data into a decision engine?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-body text-base text-mist">
              Tell us about your platform, your team, and your timeline — we&apos;ll
              follow up within one business day with a plan.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Talk to a Karsient Expert
              </Link>
              <a href={`mailto:${site.email}`} className="btn-secondary">
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
