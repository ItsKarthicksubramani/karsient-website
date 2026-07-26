import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Counter } from "@/components/Counter";
import { SignalPath } from "@/components/SignalPath";
import { NetworkOrb } from "@/components/NetworkOrb";
import {
  services,
  industries,
  metrics,
  process,
  whyKarsient,
  testimonials,
  caseStudies,
  site,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "AI, Data Engineering & Cloud Consulting for Enterprises",
  description:
    "Karsient helps enterprises modernise data platforms, build production AI, and turn data into decisions — Databricks, cloud migration, governance, and more.",
};

const partners = [
  "Databricks", "AWS", "Microsoft Azure", "Google Cloud", "Snowflake", "Kafka", "Power BI", "Tableau",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-line bg-grid-glow">
        <div className="absolute inset-0 grid-overlay opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 py-24 sm:py-28 lg:grid-cols-2 lg:py-32">
          <div>
            <Reveal>
              <p className="eyebrow">AI &middot; Data Engineering &middot; Cloud</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Engineering tomorrow&apos;s{" "}
                <span className="text-signal">intelligent enterprises</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-mist">
                Karsient partners with enterprise and Fortune 500 teams to
                turn scattered data into governed platforms, and platforms
                into production AI. From data to decisions, from products to
                possibilities.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a Consultation
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-[0.2em] text-mist">
                <span>Trusted stack</span>
                <span className="h-px w-10 bg-ink-line" />
                <span>Databricks &middot; AWS &middot; Azure &middot; GCP</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
            <NetworkOrb />
          </Reveal>
        </div>
      </section>

      {/* TRUSTED STACK MARQUEE */}
      <section className="border-b border-ink-line bg-ink-soft/40 py-8">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-lg font-medium text-mist/70"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="A full data-to-AI capability, under one roof"
            description="Ten specialisms that cover the full lifecycle — from raw data to governed platforms to production AI."
          />
          <Reveal>
            <Link href="/services" className="btn-secondary shrink-0">
              View all services
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
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
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
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

      {/* PROCESS */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How we work"
          title="A four-stage engagement model"
          description="Every engagement — whether a two-week assessment or a year-long platform build — follows the same disciplined path."
          align="center"
        />
        <div className="relative mt-16">
          <SignalPath nodes={process.length} />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08} className="text-center lg:text-left">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-signal/40 bg-ink font-mono text-sm text-signal lg:mx-0">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {p.step}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">
                  {p.detail}
                </p>
              </Reveal>
            ))}
          </div>
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
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 4) * 0.06}>
                <Link
                  href="/industries"
                  className="focus-ring group flex h-full flex-col justify-between rounded-xl border border-ink-line bg-ink p-5 transition-colors hover:border-signal/60"
                >
                  <span className="font-display text-base font-semibold text-white">
                    {ind.name}
                  </span>
                  <span className="mt-4 flex items-center gap-1 font-body text-xs text-signal opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Proof, not promises"
            title="Recent client success stories"
            description="A sample of engagements across our core industries. Full case studies available on request."
          />
          <Reveal>
            <Link href="/case-studies" className="btn-secondary shrink-0">
              View all case studies
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.08}>
              <div className="card-surface flex h-full flex-col p-7">
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
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section className="section-py border-y border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06} className="text-center">
                <p className="font-display text-4xl font-semibold text-signal sm:text-5xl">
                  <Counter value={m.value} suffix={m.suffix} />
                </p>
                <p className="mt-2 font-body text-sm text-mist">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client voices"
          title="What partners say about working with us"
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <blockquote className="card-surface flex h-full flex-col justify-between p-7">
                <p className="font-display text-lg leading-snug text-white">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 font-body text-sm text-mist">
                  <span className="text-white">{t.name}</span> &middot; {t.role}
                </footer>
              </blockquote>
            </Reveal>
          ))}
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
                Book a Consultation
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
