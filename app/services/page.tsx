import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services, serviceGroups, migrationSolutions } from "@/lib/data";
import { TechIcon } from "@/components/icons/TechIcons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI & generative AI, data engineering, cloud modernization, analytics & BI, data platform, and managed services for enterprise teams.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">Services</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Every capability between raw data and production AI.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Engage us for a single specialism or the full lifecycle — our
              teams are structured to plug into wherever your platform is
              today.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={service.slug} id={service.slug} className="scroll-mt-28">
              <Reveal
                delay={(i % 3) * 0.06}
                className="group/card relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:border-signal/50 hover:bg-white/[0.05] hover:shadow-[0_0_45px_-8px_rgba(255,106,0,0.16)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-signal/0 blur-3xl transition-all duration-500 group-hover/card:bg-signal/20" />
                <div className="relative flex items-center gap-3">
                  {service.logos.map((logoKey) => (
                    <div
                      key={logoKey}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-signal/25 bg-gradient-to-br from-signal/35 via-signal-dim/25 to-ink/40 p-2.5 shadow-inner transition-transform duration-500 group-hover/card:scale-105"
                    >
                      <TechIcon name={logoKey} className="h-full w-full" />
                    </div>
                  ))}
                </div>
                <h2 className="relative mt-6 font-display text-xl font-semibold text-white">
                  {service.name}
                </h2>
                <p className="relative mt-3 font-body text-sm leading-relaxed text-mist">
                  {service.description}
                </p>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-signal/25 bg-signal/[0.08] px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-signal-bright"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="relative mt-5 space-y-2 border-t border-ink-line pt-5">
                  {service.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2 font-body text-xs text-mist">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Specialisms"
            title="Go deeper on AI, MLOps, and Databricks"
            description="These are dedicated practices with their own delivery teams — explore each to see what's inside."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {serviceGroups.map((group, i) => (
              <Reveal key={group.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${group.slug}`}
                  className="focus-ring group card-surface flex h-full flex-col p-7 transition-colors hover:border-signal/50"
                >
                  <h3 className="font-display text-lg font-semibold text-white">{group.name}</h3>
                  <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-mist">{group.tagline}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-ink-line pt-4">
                    {group.items.slice(0, 4).map((item) => (
                      <li key={item.slug} className="flex items-start gap-2 font-body text-xs text-mist">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 flex items-center gap-1 font-body text-sm text-signal opacity-80 transition-opacity group-hover:opacity-100">
                    Explore {group.name} &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Solutions"
          title="Platform-specific migration & deployment"
          description="Moving from a specific platform, or standing Databricks up on a specific cloud? Here's exactly how we approach it."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {migrationSolutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 5) * 0.05}>
              <Link
                href={`/solutions/${s.slug}`}
                className="focus-ring group flex h-full flex-col rounded-xl border border-ink-line bg-ink p-4 transition-colors hover:border-signal/50"
              >
                <span className="font-body text-sm font-medium text-white">{s.name}</span>
                <span className="mt-2 flex-1 font-body text-xs leading-relaxed text-mist">{s.short}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Not sure where to start?"
            title="Tell us what's broken, and we'll tell you what to fix first"
            align="center"
          />
          <Reveal delay={0.1} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Talk to a Karsient Expert
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
