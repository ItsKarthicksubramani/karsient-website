import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies" },
  title: "Case Studies",
  description:
    "Client success stories from Karsient's work across insurance, retail, banking, and other data-intensive industries.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">Case Studies</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              How we approach real-world engineering challenges.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Illustrative engineering scenarios that show our architecture
              thinking and approach — anonymized by design, not attributed to
              named clients.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.08}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="focus-ring group card-surface flex h-full flex-col p-8 transition-colors hover:border-signal/50"
              >
                <span className="eyebrow">{cs.industry}</span>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-white">
                  {cs.title}
                </h2>
                <p className="mt-4 font-body text-sm leading-relaxed text-mist">
                  {cs.summary}
                </p>
                <div className="mt-6 flex-1 space-y-3 border-t border-ink-line pt-6">
                  {cs.results.map((r) => (
                    <div key={r} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      <p className="font-body text-sm text-mist">{r}</p>
                    </div>
                  ))}
                </div>
                <span className="mt-5 flex items-center gap-1 font-body text-sm text-signal opacity-80 transition-opacity group-hover:opacity-100">
                  Read the full story &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

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
