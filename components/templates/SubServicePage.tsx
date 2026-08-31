import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { TechIcon } from "@/components/icons/TechIcons";
import type { ServiceGroup, SubService } from "@/lib/data";

export function SubServicePage({
  group,
  item,
}: {
  group: ServiceGroup;
  item: SubService;
}) {
  const otherItems = group.items.filter((i) => i.slug !== item.slug);

  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">
              <Link href={`/services/${group.slug}`} className="hover:text-signal">
                {group.name}
              </Link>{" "}
              &rarr; {item.name}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {item.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              {item.description}
            </p>
          </Reveal>
          {item.techLogos && item.techLogos.length > 0 && (
            <Reveal delay={0.13} className="mt-6 flex flex-wrap justify-center gap-3">
              {item.techLogos.map((key) => (
                <div key={key} className="flex h-14 w-14 items-center justify-center rounded-lg border border-ink-line bg-ink-soft/40 p-2">
                  <TechIcon name={key} className="h-full w-full" />
                </div>
              ))}
            </Reveal>
          )}
          <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Talk to a Karsient Expert
            </Link>
            <Link href={`/services/${group.slug}`} className="btn-secondary">
              View all {group.name}
            </Link>
          </Reveal>
        </div>
      </section>

      {item.flow && item.flow.length > 0 && (
        <section className="border-b border-ink-line bg-ink-soft/30 py-10">
          <div className="container-px mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {item.flow.map((stage, i) => (
                <div key={stage} className="flex items-center gap-3">
                  <Reveal delay={i * 0.06}>
                    <div className="rounded-full border border-signal/30 bg-signal/[0.06] px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-signal-bright">
                      {stage}
                    </div>
                  </Reveal>
                  {i < item.flow!.length - 1 && (
                    <span aria-hidden="true" className="text-mist/40">
                      &rarr;
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-py container-px mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow">What&apos;s included</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Core capabilities
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {item.capabilities.map((cap, i) => (
            <Reveal key={cap} delay={(i % 4) * 0.06}>
              <div className="card-surface flex items-start gap-3 p-5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <p className="font-body text-sm leading-relaxed text-mist">{cap}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {item.useCase && (
        <section className="section-py container-px mx-auto max-w-5xl border-t border-ink-line">
          <Reveal>
            <p className="eyebrow">Use case</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              {item.useCase.title}
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <Reveal delay={0.08}>
              <div className="card-surface h-full p-6">
                <p className="font-mono text-[11px] uppercase tracking-wide text-signal">Scenario</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">{item.useCase.scenario}</p>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="card-surface h-full p-6">
                <p className="font-mono text-[11px] uppercase tracking-wide text-signal">Approach</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">{item.useCase.approach}</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="card-surface h-full p-6">
                <p className="font-mono text-[11px] uppercase tracking-wide text-signal">Outcome</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">{item.useCase.outcome}</p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {otherItems.length > 0 && (
        <section className="section-py border-t border-ink-line bg-ink-soft/30">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <p className="eyebrow">Related</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                More from {group.name}
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {otherItems.map((i, idx) => (
                <Reveal key={i.slug} delay={(idx % 4) * 0.06}>
                  <Link
                    href={`/services/${group.slug}/${i.slug}`}
                    className="focus-ring group card-surface flex h-full flex-col p-6 transition-colors hover:border-signal/50"
                  >
                    <h3 className="font-display text-base font-semibold text-white">{i.name}</h3>
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-mist">{i.short}</p>
                    <span className="mt-4 flex items-center gap-1 font-body text-xs text-signal opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more &rarr;
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {item.faqs && item.faqs.length > 0 && (
        <section className="section-py container-px mx-auto max-w-3xl border-t border-ink-line">
          <Reveal>
            <p className="eyebrow">FAQ</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Common questions about {item.name.toLowerCase()}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {item.faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 4) * 0.06}>
                <div className="card-surface p-6">
                  <p className="font-display text-base font-semibold text-white">{f.q}</p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-mist">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: item.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </section>
      )}

      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Get started</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Talk to us about {item.name.toLowerCase()}
            </h2>
          </Reveal>
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
