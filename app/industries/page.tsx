import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { IndustryExplorer } from "@/components/IndustryExplorer";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "Enterprise Industries & Domain Architecture | Karsient",
  description:
    "Domain-specific data engineering and AI solutions for Banking, Insurance, Healthcare, Retail, Manufacturing, Agriculture, and Logistics.",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Industries Hero */}
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-20 text-center sm:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/[0.08] px-3.5 py-1">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
                Domain Architecture Depth
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Deep industry pattern-matching, not generic consulting playbooks.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-mist max-w-2xl mx-auto">
              Every vertical carries distinct data gravity, regulatory constraints, and failure modes. We engineer platforms specifically tailored to your industry realities.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss Your Industry Challenge &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive Industry Explorer */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Sector Explorer"
          title="Interactive Domain Intelligence"
          description="Explore abstract domain data flows, business and data obstacles, AI opportunities, and verified client deliverables."
        />

        <div className="mt-12">
          <IndustryExplorer />
        </div>
      </section>

      {/* Cross-Industry Technology Standardization */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Platform Standards"
            title="Consistent Enterprise Rigor Across Every Vertical"
            description="While domain logic is customized, our engineering foundation adheres to universal production standards."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Strict Governance & Compliance",
                desc: "Role-based access, automated data contracts, and auditable lineage compliant with HIPAA, GDPR, and financial standards.",
                badge: "Security",
              },
              {
                title: "Zero-Downtime Cutovers",
                desc: "Parallel-run validation and dual-write ingestion ensuring uninterrupted operational availability throughout migration.",
                badge: "Availability",
              },
              {
                title: "Sub-Second Ingestion & Inference",
                desc: "Distributed compute tuned for event streams, real-time fraud scoring, and immediate telemetry aggregation.",
                badge: "Performance",
              },
              {
                title: "Disciplined FinOps Control",
                desc: "Right-sized clusters, serverless SQL compute, and automated storage compaction preventing runaway cloud spend.",
                badge: "FinOps",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-ink-line/70 bg-ink p-6 backdrop-blur-md"
              >
                <span className="badge-saffron">{pillar.badge}</span>
                <h4 className="mt-3 font-display text-base font-bold text-white">
                  {pillar.title}
                </h4>
                <p className="mt-2 font-body text-xs text-mist leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Don&apos;t see your specific industry listed?
          </h2>
          <p className="mt-4 font-body text-base text-mist">
            Our data platform and production AI architectures extend across energy, telecommunications, pharmaceuticals, and public infrastructure.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Consult an Industry Principal &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
