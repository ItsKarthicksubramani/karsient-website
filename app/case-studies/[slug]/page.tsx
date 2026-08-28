import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechIcon } from "@/components/icons/TechIcons";
import type { LogoKey } from "@/components/icons/TechIcons";
import { caseStudies } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const otherStudies = caseStudies.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">
              <Link href="/case-studies" className="hover:text-signal">
                Case Studies
              </Link>{" "}
              &rarr; {cs.industry}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {cs.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">{cs.summary}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-3">
            {cs.results.map((r) => (
              <span
                key={r}
                className="rounded-full border border-signal/30 bg-signal/[0.06] px-4 py-1.5 font-mono text-xs text-signal"
              >
                {r}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CLIENT CHALLENGE */}
      <section className="section-py container-px mx-auto max-w-4xl">
        <SectionHeading eyebrow="Client challenge" title="What was wrong with the legacy environment" />
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {cs.challenge.map((c) => (
            <div key={c} className="flex items-start gap-2.5 rounded-lg border border-ink-line bg-ink-soft/40 p-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              <p className="font-body text-sm leading-relaxed text-mist">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODERNIZATION APPROACH */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow="Modernization approach" title="How Karsient approached the transformation" />
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-base leading-relaxed text-mist">{cs.approach}</p>
          </Reveal>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section-py container-px mx-auto max-w-4xl">
        <SectionHeading eyebrow="Architecture" title="The modern target architecture" />
        <div className="mt-8 space-y-3">
          {cs.architecture.map((a, i) => (
            <Reveal key={a} delay={i * 0.05}>
              <div className="flex items-start gap-3 rounded-xl border border-ink-line bg-ink-soft/30 p-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal/30 bg-signal/10 font-mono text-xs text-signal">
                  {i + 1}
                </div>
                <p className="font-body text-sm leading-relaxed text-mist">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MIGRATION STRATEGY */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow="Migration" title="Migration & re-engineering strategy" />
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-base leading-relaxed text-mist">{cs.migrationStrategy}</p>
          </Reveal>
        </div>
      </section>

      {/* ENGINEERING IMPROVEMENTS */}
      <section className="section-py container-px mx-auto max-w-4xl">
        <SectionHeading eyebrow="Engineering improvements" title="What changed under the hood" />
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {cs.engineeringImprovements.map((e) => (
            <div key={e} className="flex items-start gap-2.5 rounded-lg border border-ink-line bg-ink-soft/40 p-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              <p className="font-body text-sm leading-relaxed text-mist">{e}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow="Business impact" title="Measurable outcomes" />
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {cs.businessImpact.map((b) => (
              <div key={b} className="flex items-start gap-2.5 rounded-lg border border-signal/20 bg-signal/[0.04] p-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <p className="font-body text-sm leading-relaxed text-white">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section-py container-px mx-auto max-w-4xl">
        <SectionHeading eyebrow="Technology" title="Technology used" align="center" />
        <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-4">
          {cs.techStack.map((key) => (
            <div key={key} className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-line bg-ink-soft/40 p-2.5">
              <TechIcon name={key as LogoKey} className="h-full w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* OTHER CASE STUDIES */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="More stories" title="Other client engagements" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherStudies.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  href={`/case-studies/${s.slug}`}
                  className="focus-ring group card-surface flex h-full flex-col p-6 transition-colors hover:border-signal/50"
                >
                  <span className="eyebrow">{s.industry}</span>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">{s.title}</h3>
                  <span className="mt-4 flex items-center gap-1 font-body text-xs text-signal opacity-0 transition-opacity group-hover:opacity-100">
                    Read the full story &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Want results like these?"
            title="Let's scope your next data or AI initiative"
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
