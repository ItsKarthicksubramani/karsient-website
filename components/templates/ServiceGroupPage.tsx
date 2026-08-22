import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { ServiceGroup } from "@/lib/data";
import type { ReactNode } from "react";
import { TechIcon } from "@/components/icons/TechIcons";
import { IconData, IconCode, IconShield, IconChartBI, IconServer, IconCloud } from "@/components/icons/DiagramIcons";

const flowIcons = [IconData, IconCode, IconShield, IconChartBI];

export function ServiceGroupPage({
  group,
  extraSections,
}: {
  group: ServiceGroup;
  extraSections?: ReactNode;
}) {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">{group.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {group.name} Services
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              {group.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 font-body text-base leading-relaxed text-mist">
              {group.description}
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Book a Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Visual flow diagram */}
      <section className="section-py border-b border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-mist">
              How it fits together
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {group.flow.map((stage, i) => {
              const isLast = i === group.flow.length - 1;
              const isDatabricksStage = stage.toLowerCase().includes("databricks");
              const Icon = flowIcons[i % flowIcons.length];
              return (
                <div key={stage} className="flex items-center gap-3 sm:gap-4">
                  <Reveal delay={i * 0.06}>
                    <div
                      className={`flex flex-col items-center gap-2 rounded-2xl border px-5 py-4 text-center ${
                        isDatabricksStage
                          ? "border-signal/40 bg-signal/10 shadow-[0_0_30px_-8px_rgba(255,106,0,0.2)]"
                          : "border-ink-line bg-ink"
                      }`}
                    >
                      <div className="flex h-9 w-9 items-center justify-center">
                        {isDatabricksStage ? (
                          <TechIcon name="databricks" className="h-full w-full" />
                        ) : i === 0 && stage.toLowerCase().includes("legacy") ? (
                          <IconServer className="h-full w-full text-mist" />
                        ) : i === 0 && stage.toLowerCase().includes("cloud") ? (
                          <IconCloud className="h-full w-full text-mist" />
                        ) : (
                          <Icon className="h-full w-full text-signal" />
                        )}
                      </div>
                      <span className="max-w-[140px] font-body text-xs font-medium text-white sm:text-sm">
                        {stage}
                      </span>
                    </div>
                  </Reveal>
                  {!isLast && <span className="font-mono text-lg text-signal">&rarr;</span>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Services overview</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Explore {group.name}
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {group.items.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/services/${group.slug}/${item.slug}`}
                className="focus-ring group card-surface flex h-full flex-col p-7 transition-colors hover:border-signal/50"
              >
                <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{item.name}</h3>
                <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-mist">{item.short}</p>
                <span className="mt-5 flex items-center gap-1 border-t border-ink-line pt-4 font-body text-sm text-signal opacity-80 transition-opacity group-hover:opacity-100">
                  Learn more &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {extraSections}

      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Get started</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Need help with your {group.name.toLowerCase()} platform?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Book an Assessment
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
