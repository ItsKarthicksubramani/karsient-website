import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes on data engineering, Databricks, AI, and cloud platforms from the Karsient team.",
};

const posts = [
  {
    tag: "Databricks",
    title: "Five signs your lakehouse needs a Unity Catalog refresh",
    summary:
      "Governance debt shows up quietly — through duplicated tables and access requests, not outages. Here's what to watch for.",
    readTime: "6 min read",
  },
  {
    tag: "AI",
    title: "Why most generative AI pilots never reach production",
    summary:
      "The gap between a working demo and a monitored, governed production system is usually process, not model quality.",
    readTime: "8 min read",
  },
  {
    tag: "Data Engineering",
    title: "Batch vs. streaming: choosing the right default",
    summary:
      "Streaming isn't always the upgrade it's marketed as. A framework for deciding when latency is actually worth the complexity.",
    readTime: "5 min read",
  },
  {
    tag: "Cloud",
    title: "A practical checklist for cloud migration cost overruns",
    summary:
      "Most migration budgets fail in the same five places. We walk through each one with a mitigation for each.",
    readTime: "7 min read",
  },
  {
    tag: "Governance",
    title: "Data lineage is a product, not a project",
    summary:
      "Treating lineage as a one-time implementation is why most governance programs stall within a year.",
    readTime: "6 min read",
  },
  {
    tag: "BI",
    title: "The self-serve BI trap, and how to avoid it",
    summary:
      "Self-serve dashboards without a governed semantic layer just move the trust problem downstream.",
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 0.06}>
              <article className="card-surface flex h-full flex-col p-7">
                <span className="eyebrow">{post.tag}</span>
                <h2 className="mt-4 font-display text-lg font-semibold leading-snug text-white">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-mist">
                  {post.summary}
                </p>
                <p className="mt-5 border-t border-ink-line pt-4 font-mono text-xs text-mist">
                  {post.readTime}
                </p>
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
