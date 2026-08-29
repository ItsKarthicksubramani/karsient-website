import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  alternates: { canonical: "/insights" },
  title: "Insights",
  description:
    "Field notes on data engineering, Databricks, AI, and cloud platforms from the Karsient team.",
};

const posts = [
  {
    tag: "Databricks",
    title: "Five signs your lakehouse needs a Unity Catalog refresh",
    summary:
      "Governance debt shows up quietly — through duplicated tables and access requests, not outages. Most teams notice it only after a compliance review forces the question.",
    points: [
      "Duplicate tables appear across workspaces with no clear owner",
      "Access requests take days because nobody can confirm who should approve them",
      "Lineage stops at the workspace boundary, so cross-team impact is a guess",
      "New hires can't find the 'right' table without asking someone directly",
    ],
    readTime: "6 min read",
  },
  {
    tag: "AI",
    title: "Why most generative AI pilots never reach production",
    summary:
      "The gap between a working demo and a monitored, governed production system is usually process, not model quality. The model was rarely the blocker.",
    points: [
      "No agreed evaluation criteria for what 'good enough to ship' means",
      "Monitoring is bolted on after launch instead of designed in from day one",
      "Cost per query was never modelled against expected usage volume",
      "No owner accountable for the system once the pilot team moves on",
    ],
    readTime: "8 min read",
  },
  {
    tag: "Data Engineering",
    title: "Batch vs. streaming: choosing the right default",
    summary:
      "Streaming isn't always the upgrade it's marketed as. A framework for deciding when latency is actually worth the added operational complexity.",
    points: [
      "Start from the business decision the data feeds, not the technology preference",
      "Most 'real-time' requirements tolerate minutes, not milliseconds, on inspection",
      "Streaming triples on-call surface area — budget for that before committing",
      "Micro-batch is a legitimate middle ground most teams skip too quickly",
    ],
    readTime: "5 min read",
  },
  {
    tag: "Cloud",
    title: "A practical checklist for cloud migration cost overruns",
    summary:
      "Most migration budgets fail in the same five places. We walk through each one with a concrete mitigation your team can apply before the number becomes a surprise.",
    points: [
      "Data egress costs are almost always modelled too optimistically",
      "Parallel-running old and new systems runs longer than anyone plans for",
      "Right-sizing gets deferred to 'later' and never actually happens",
      "Reserved capacity gets bought before workload patterns are understood",
    ],
    readTime: "7 min read",
  },
  {
    tag: "Governance",
    title: "Data lineage is a product, not a project",
    summary:
      "Treating lineage as a one-time implementation is why most governance programs stall within a year of going live.",
    points: [
      "Lineage decays the moment a pipeline changes and nobody re-documents it",
      "Automated lineage capture beats manual documentation every time",
      "Ownership needs to sit with the platform team, not a one-off initiative",
      "Lineage only earns trust once it's used to answer a real incident",
    ],
    readTime: "6 min read",
  },
  {
    tag: "BI",
    title: "The self-serve BI trap, and how to avoid it",
    summary:
      "Self-serve dashboards without a governed semantic layer just move the trust problem downstream, from the BI team to every business user.",
    points: [
      "Two teams computing 'revenue' differently is a modelling problem, not a BI tool problem",
      "A governed semantic layer is what makes self-serve safe, not the dashboard tool",
      "Dashboard sprawl is a symptom of missing semantic governance, not too much access",
      "Certify a small set of metrics before opening up broad self-serve access",
    ],
    readTime: "5 min read",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">Insights</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Field notes from the platform floor.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Practical, opinionated writing on data engineering, AI, and
              cloud platforms — from engagements, not theory.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 2) * 0.06}>
              <article className="card-surface flex h-full flex-col p-8">
                <span className="w-fit rounded-full border border-signal/30 bg-signal/[0.06] px-3.5 py-1 font-mono text-[11px] uppercase tracking-wide text-signal">
                  {post.tag}
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-white">
                  {post.title}
                </h2>
                <p className="mt-3 font-body text-sm leading-relaxed text-mist">
                  {post.summary}
                </p>
                <div className="mt-5 space-y-2.5 border-t border-ink-line pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-mist">Key takeaways</p>
                  {post.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      <p className="font-body text-sm leading-relaxed text-mist">{point}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-ink-line pt-4">
                  <span className="font-mono text-xs text-mist">{post.readTime}</span>
                  <a
                    href="/contact"
                    className="focus-ring flex items-center gap-1 font-body text-sm text-signal transition-opacity hover:opacity-80"
                  >
                    Discuss this with us &rarr;
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-xl text-center">
          <Reveal>
            <p className="eyebrow">Newsletter</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Get new field notes in your inbox
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-6 max-w-sm">
            <NewsletterForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
