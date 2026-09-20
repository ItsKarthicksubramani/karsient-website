import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/data";
import { CareersJobFilter } from "@/components/CareersJobFilter";

export const metadata: Metadata = {
  alternates: { canonical: "/careers" },
  title: "Careers & Engineering Culture | Karsient",
  description:
    "Join an engineering-first technology company. Build governed data platforms, production AI systems, and cloud modernization software for global enterprises.",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-20 text-center sm:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/[0.08] px-3.5 py-1">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
                Engineering Culture
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Build the platforms enterprises run on.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-mist max-w-2xl mx-auto">
              We are an engineering-driven company that prioritizes shipping production code over PowerPoint slides. If you take pride in distributed systems, lakehouse architectures, and production AI, you belong here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Engineering Culture & Values */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Karsient"
          title="What It Means to Build Here"
          description="A culture designed by engineers, for engineers who want autonomy, modern tooling, and meaningful technical ownership."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Direct Client Ownership",
              desc: "Collaborate directly with enterprise CTOs and architects. No bureaucratic layers between you and production decisions.",
              badge: "Autonomy",
            },
            {
              title: "Modern Tech Stacks Only",
              desc: "We write modern Spark, Databricks, Python, Delta Lake, LangChain, and dbt. We don't maintain stagnant legacy code without modernizing it.",
              badge: "Modern Stack",
            },
            {
              title: "Continuous Learning",
              desc: "Dedicated annual budget for Databricks certifications, cloud architecture credentials, research papers, and technical conferences.",
              badge: "Mastery",
            },
            {
              title: "Remote & Hybrid Flexibility",
              desc: "Work remotely across India or collaborate in person at our Bengaluru, Chennai, or Madurai engineering centers.",
              badge: "Flexibility",
            },
          ].map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="group card-surface flex h-full flex-col p-7 transition-all hover:border-signal/50 hover:bg-ink-soft/70">
                <span className="badge-saffron self-start">{pillar.badge}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-white group-hover:text-signal transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 font-body text-xs leading-relaxed text-mist">
                  {pillar.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Searchable & Filterable Job Roles */}
      <section className="section-py border-t border-ink-line bg-ink-soft/20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Open Roles"
            title="Current Engineering Positions"
            description="Filter by practice area, technology stack, or location to find your next engineering challenge."
          />

          <div className="mt-10">
            <CareersJobFilter />
          </div>
        </div>
      </section>

      {/* Open Application Banner */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <span className="eyebrow">General Applications</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Don&apos;t see your exact role listed?
          </h2>
          <p className="mt-4 font-body text-base text-mist leading-relaxed">
            We are always looking for exceptional data platform architects, distributed systems programmers, and machine learning researchers.
          </p>
          <div className="mt-8">
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("General Engineering Application / Resume")}`}
              className="btn-primary"
            >
              Send Resume &amp; Github / Portfolio &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
