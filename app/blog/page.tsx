import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Company News & Engineering Dispatches | Karsient",
  description:
    "Company news, product announcements, engineering milestones, and culture updates from the Karsient team.",
};

type NewsItem = {
  tag: "Product Announcement" | "Engineering Dispatch" | "Culture & Hiring" | "Event & Community";
  title: string;
  date: string;
  summary: string;
  readTime: string;
  badgeColor: string;
};

const newsPosts: NewsItem[] = [
  {
    tag: "Product Announcement",
    title: "Introducing the Karsient Modernization Suite: ShiftIQ, CodeShift, RevoCode & Veriq",
    date: "Aug 2026",
    summary:
      "Announcing our purpose-built product family designed to solve legacy discovery, automated code conversion, continuous lakehouse optimization, and record-level data trust.",
    readTime: "4 min read",
    badgeColor: "badge-saffron",
  },
  {
    tag: "Engineering Dispatch",
    title: "Engineering Zero-Downtime Cutovers for Complex SQL Server ETL Estates",
    date: "Aug 2026",
    summary:
      "A technical walkthrough of our parallel-run methodology, automated output reconciliation, and CDC validation pipelines when decommissioning legacy stored procedures.",
    readTime: "5 min read",
    badgeColor: "badge-cyan",
  },
  {
    tag: "Culture & Hiring",
    title: "Scaling Our Advanced Engineering Centers in Bengaluru and Chennai",
    date: "Jul 2026",
    summary:
      "How Karsient is expanding our core engineering footprint across India, investing in specialized Lakehouse architects, distributed compute engineers, and AI practitioners.",
    readTime: "3 min read",
    badgeColor: "badge-saffron",
  },
  {
    tag: "Event & Community",
    title: "Key Takeaways: Modern Lakehouse Governance & Unity Catalog Best Practices",
    date: "Jun 2026",
    summary:
      "Notes and architectural patterns from our recent technical session on solving multi-workspace data governance and automated lineage tracking.",
    readTime: "4 min read",
    badgeColor: "badge-cyan",
  },
  {
    tag: "Engineering Dispatch",
    title: "Behind the Architecture: Real-Time Ingestion for Distributed Sensor Telemetry",
    date: "May 2026",
    summary:
      "How we architected sub-second telemetry ingestion from shop-floor and fleet feeds into open Delta Lake storage formats without streaming bottlenecking.",
    readTime: "5 min read",
    badgeColor: "badge-saffron",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Blog Newsroom Hero */}
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-20 text-center sm:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/[0.08] px-3.5 py-1">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
                Company Newsroom
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              News &amp; Engineering Dispatches
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-mist max-w-2xl mx-auto">
              Product announcements, corporate milestones, event briefs, and dispatches from our engineering floors across Bengaluru, Chennai, and Madurai.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial Timeline / Newsroom Layout */}
      <section className="section-py container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Company Timeline"
          title="Recent Announcements &amp; Updates"
          description="Stay informed on Karsient product releases and engineering updates."
        />

        <div className="mt-12 space-y-6">
          {newsPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.06}>
              <article className="group rounded-2xl border border-ink-line/80 bg-ink-soft/30 p-7 backdrop-blur-md transition-all hover:border-signal/50 hover:bg-ink-soft/60">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-ink-line/60 pb-3">
                  <div className="flex items-center gap-3">
                    <span className={post.badgeColor}>{post.tag}</span>
                    <span className="font-mono text-xs text-mist">{post.date}</span>
                  </div>
                  <span className="font-mono text-xs text-mist/70">{post.readTime}</span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-signal transition-colors">
                  {post.title}
                </h3>

                <p className="mt-2.5 font-body text-sm leading-relaxed text-mist">
                  {post.summary}
                </p>

                <div className="mt-5 flex items-center justify-between pt-3 border-t border-ink-line/40">
                  <span className="font-mono text-xs text-signal font-semibold">
                    Karsient Corporate Communications
                  </span>
                  <Link
                    href="/contact"
                    className="font-mono text-xs text-mist hover:text-signal transition-colors"
                  >
                    Inquire About Announcement &rarr;
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-xl text-center">
          <span className="eyebrow">Stay Connected</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Subscribe to Karsient News
          </h2>
          <p className="mt-3 font-body text-sm text-mist">
            Receive major product announcements and milestone updates directly in your inbox.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
