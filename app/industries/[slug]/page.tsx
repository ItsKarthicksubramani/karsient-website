import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { IndustryVisual } from "@/components/IndustryVisual";
import { IndustryArchitectureDiagram } from "@/components/IndustryArchitectureDiagram";
import { industries, caseStudies } from "@/lib/data";

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};
  return { title: ind.name, description: ind.description, alternates: { canonical: `/industries/${slug}` } };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const otherIndustries = industries.filter((i) => i.slug !== slug).slice(0, 3);
  const relatedCaseStudy = caseStudies.find((c) => c.industry === industry.name);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-20 text-center sm:py-24">
          <Reveal>
            <p className="eyebrow">
              <Link href="/industries" className="hover:text-signal">
                Industries
              </Link>{" "}
              &rarr; {industry.name}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {industry.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">{industry.description}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-2">
            {industry.useCases.map((u) => (
              <span
                key={u}
                className="rounded-full border border-ink-line bg-ink-soft/50 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-mist"
              >
                {u}
              </span>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/[0.06] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              <span className="font-body text-sm text-white">{industry.clientsSupported} supported</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-signal/25 bg-signal/[0.06] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              <span className="font-body text-sm text-white">{industry.successRate} success rate</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto -mt-6 max-w-5xl pb-4">
        <Reveal>
          <IndustryVisual slug={industry.slug} name={industry.name} />
        </Reveal>
      </section>

      {/* STATS */}
      <section className="section-py container-px mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {industry.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="rounded-2xl border border-ink-line bg-ink-soft/30 p-6 text-center">
                <p className="font-display text-3xl font-bold text-signal sm:text-4xl">{s.value}</p>
                <p className="mt-2 font-body text-sm text-mist">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED USE CASE — problem solved, with image */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-6xl">
          <SectionHeading eyebrow="Featured use case" title="A problem we solved" />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <IndustryVisual slug={industry.slug} name={industry.name} />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-cyan/20 bg-cyan/[0.04] p-6">
                <p className="font-mono text-[11px] uppercase tracking-wide text-cyan-soft">The problem, solved</p>
                <p className="mt-3 font-body text-base leading-relaxed text-white">{industry.problemSolved}</p>
              </div>
              <div className="mt-6">
                <p className="font-mono text-[11px] uppercase tracking-wide text-mist">The challenge</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">{industry.challenge}</p>
              </div>
              <div className="mt-6">
                <p className="font-mono text-[11px] uppercase tracking-wide text-mist">How we transformed it</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">{industry.transformation}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LIVE DATA ARCHITECTURE */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Architecture"
          title={`How data moves through a ${industry.name} platform`}
          description="Sources through to outcomes — the layers, and the live movement of data between them."
          align="center"
        />
        <div className="mt-12">
          <IndustryArchitectureDiagram layers={industry.architecture} />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow="Benefits" title="What the business gained" />
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {industry.benefits.map((b) => (
              <div key={b} className="flex items-start gap-2.5 rounded-lg border border-ink-line bg-ink p-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <p className="font-body text-sm leading-relaxed text-mist">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATION */}
      <section className="section-py container-px mx-auto max-w-3xl">
        <SectionHeading eyebrow="What's next" title="Where this is heading" />
        <Reveal delay={0.1}>
          <div className="mt-6 rounded-2xl border border-signal/20 bg-signal/[0.04] p-6">
            <p className="font-body text-base leading-relaxed text-white">{industry.innovation}</p>
          </div>
        </Reveal>
      </section>

      {/* RELATED CASE STUDY, IF ANY */}
      {relatedCaseStudy && (
        <section className="section-py border-t border-ink-line bg-ink-soft/30">
          <div className="container-px mx-auto max-w-4xl">
            <SectionHeading eyebrow="Proof, not promises" title="A related case study" align="center" />
            <Reveal delay={0.1} className="mt-8">
              <Link
                href={`/case-studies/${relatedCaseStudy.slug}`}
                className="focus-ring group card-surface flex flex-col p-7 transition-colors hover:border-signal/50"
              >
                <h3 className="font-display text-lg font-semibold text-white">{relatedCaseStudy.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">{relatedCaseStudy.summary}</p>
                <span className="mt-4 flex items-center gap-1 font-body text-xs text-signal opacity-80 transition-opacity group-hover:opacity-100">
                  Read the full story &rarr;
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* OTHER INDUSTRIES */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="More industries" title="Where else we work" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {otherIndustries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.06}>
              <Link
                href={`/industries/${ind.slug}`}
                className="focus-ring group card-surface flex h-full flex-col p-6 transition-colors hover:border-signal/50"
              >
                <h3 className="font-display text-base font-semibold text-white">{ind.name}</h3>
                <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-mist">{ind.description}</p>
                <span className="mt-4 flex items-center gap-1 font-body text-xs text-signal opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Let's talk"
            title={`Have a similar challenge in ${industry.name.toLowerCase()}?`}
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
