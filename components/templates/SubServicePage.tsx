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
