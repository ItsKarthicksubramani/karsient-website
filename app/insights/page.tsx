import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsletterForm } from "@/components/NewsletterForm";
import { insightArticles } from "@/lib/insights";

export const metadata: Metadata = {
  alternates: { canonical: "/insights" },
  title: "Insights & Technical Architecture Journal | Karsient",
  description:
    "Editorial technology publication from Karsient engineers covering Databricks, Lakehouse architecture, Enterprise RAG, Agentic AI, and governance.",
};

type PublicationItem = {
  slug: string;
  category: "Databricks" | "AI" | "Data Engineering" | "Cloud" | "Governance" | "BI";
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  technologies: string[];
  featured?: boolean;
};

const publications: PublicationItem[] = [
  {
    slug: "medallion-architecture-layers",
    category: "Databricks",
    title: "Medallion Architecture: More Than Just Bronze, Silver & Gold",
    summary:
      "When organizations build a modern lakehouse, one of the most widely used patterns is Medallion Architecture. But what actually happens at the storage and transformation boundary in each layer?",
    author: "Principal Lakehouse Architect",
    date: "Aug 2026",
    readTime: "6 min read",
    technologies: ["Databricks", "Delta Lake", "Unity Catalog", "PySpark"],
    featured: true,
  },
  {
    slug: "medallion-vs-data-vault-vs-data-mesh",
    category: "Data Engineering",
    title: "Medallion vs. Data Vault vs. Data Mesh vs. Dimensional Modeling",
    summary:
      "A common mistake in enterprise data architecture is asking 'which architecture is better?' The better question is: which specific organizational or technical problem are we trying to solve?",
    author: "Chief Data Architect",
    date: "Aug 2026",
    readTime: "8 min read",
    technologies: ["Data Vault", "dbt", "Delta Lake", "Domain Architecture"],
  },
  {
    slug: "agentic-ai-architecture",
    category: "AI",
    title: "Agentic AI Architecture: Memory, Tools, Guardrails, and Observability",
    summary:
      "Most agentic AI failures in the enterprise are not model failures — they are missing architectural components. Here is what it actually takes to run multi-step agents safely in production.",
    author: "Head of AI Engineering",
    date: "Jul 2026",
    readTime: "9 min read",
    technologies: ["LangChain", "Vector Search", "LLM Guardrails", "Agent Memory"],
  },
  {
    slug: "production-rag-knowledge",
    category: "AI",
    title: "How to Architect Production RAG for Enterprise Knowledge",
    summary:
      "RAG demos are simple; production enterprise RAG is hard. Solving hybrid semantic retrieval, access control enforcement at query time, and citation traceability.",
    author: "AI Research Lead",
    date: "Jul 2026",
    readTime: "8 min read",
    technologies: ["Pinecone", "MongoDB Vector", "Hybrid Search", "Embeddings"],
  },
  {
    slug: "unity-catalog-governance",
    category: "Governance",
    title: "Five Structural Signs Your Lakehouse Needs a Unity Catalog Refresh",
    summary:
      "Governance debt accumulates quietly through duplicated tables, missing object owners, and ad-hoc permissions. How to establish unified access control enterprise-wide.",
    author: "Governance Practice Lead",
    date: "Jun 2026",
    readTime: "6 min read",
    technologies: ["Unity Catalog", "Lineage", "Data Contracts", "RBAC"],
  },
  {
    slug: "cloud-finops-checklist",
    category: "Cloud",
    title: "A Practical FinOps Checklist for Cloud Lakehouse Cost Containment",
    summary:
      "Most enterprise cloud migration budgets fail in the same five areas: unoptimized cluster sizing, idle workers, uncompacted files, and excessive shuffles.",
    author: "Cloud Infrastructure Architect",
    date: "Jun 2026",
    readTime: "7 min read",
    technologies: ["Databricks DBU", "Azure", "AWS", "Photon", "FinOps"],
  },
  {
    slug: "self-serve-bi-trap",
    category: "BI",
    title: "The Self-Serve BI Trap, and How Semantic Modeling Solves It",
    summary:
      "Opening self-serve dashboards without a governed semantic layer just moves the trust deficit downstream. Why Power BI DirectLake and centralized metrics matter.",
    author: "Enterprise BI Lead",
    date: "May 2026",
    readTime: "5 min read",
    technologies: ["Power BI", "Microsoft Fabric", "DirectLake", "DAX"],
  },
];

export default function InsightsPage() {
  const featured = publications.find((p) => p.featured) || publications[0];
  const rest = publications.filter((p) => p.slug !== featured.slug);

  const categories = ["All", "Databricks", "AI", "Data Engineering", "Cloud", "Governance", "BI"];

  return (
    <>
      {/* Editorial Header */}
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-20 text-center sm:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/[0.08] px-3.5 py-1">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
                Editorial Publication
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Karsient Insights
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-mist max-w-2xl mx-auto">
              Deep architectural thought leadership, engineering post-mortems, and field notes on modern data platforms, Lakehouse design, and production AI.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Insight Editorial Banner */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <span className="eyebrow block mb-4">Featured Architecture Briefing</span>
        <div className="rounded-3xl border border-ink-line/80 bg-ink-soft/40 p-8 sm:p-12 backdrop-blur-xl transition-all hover:border-signal/50">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="badge-saffron">{featured.category}</span>
                <span className="font-mono text-xs text-mist">{featured.date}</span>
                <span className="font-mono text-xs text-mist/60">&middot;</span>
                <span className="font-mono text-xs text-mist">{featured.readTime}</span>
              </div>

              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                {featured.title}
              </h2>

              <p className="mt-4 font-body text-sm leading-relaxed text-mist">
                {featured.summary}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-ink-line/50 pt-5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-mist mr-2">
                  Topics:
                </span>
                {featured.technologies.map((tech) => (
                  <span key={tech} className="chip-tech text-[10px] py-0.5 px-2.5">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="font-body text-xs text-white/80">
                  By <strong className="text-white">{featured.author}</strong>
                </span>
                <Link
                  href={`/insights/${featured.slug}`}
                  className="btn-primary text-xs"
                >
                  Read Full Briefing &rarr;
                </Link>
              </div>
            </div>

            {/* Visual Abstract Topology */}
            <div className="rounded-2xl border border-ink-line/70 bg-ink p-6">
              <span className="font-mono text-xs uppercase tracking-wider text-signal block mb-3">
                Core Architectural Thesis
              </span>
              <p className="font-body text-xs leading-relaxed text-white/90">
                &ldquo;Bronze ensures reproducibility; Silver guarantees data quality and schema conformance; Gold maps directly to executive decision velocity. Designing with clear boundary contracts transforms a data lake into an enterprise asset.&rdquo;
              </p>
              <div className="mt-5 border-t border-ink-line/60 pt-4 flex items-center justify-between text-xs font-mono text-mist/70">
                <span>Architecture Standard: Medallion 3.0</span>
                <span className="text-cyan-soft">Production Tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Grid */}
      <section className="section-py border-t border-ink-line bg-ink-soft/20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Recent Publications"
            title="Latest Technical Briefings"
            description="Explore our complete catalogue of architectural research and field notes."
          />

          {/* Category Topics Filter */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-ink-line/60 pb-6">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-lg border border-ink-line bg-ink/70 px-3.5 py-1.5 font-mono text-xs text-mist hover:border-signal/40 hover:text-white transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((pub) => (
              <article
                key={pub.slug}
                className="group card-surface flex flex-col justify-between p-7 transition-all hover:border-signal/50 hover:bg-ink-soft/70"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="badge-saffron text-[10px]">{pub.category}</span>
                    <span className="font-mono text-xs text-mist/70">{pub.readTime}</span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-white group-hover:text-signal transition-colors">
                    <Link href={`/insights/${pub.slug}`}>{pub.title}</Link>
                  </h3>

                  <p className="mt-3 font-body text-xs leading-relaxed text-mist line-clamp-3">
                    {pub.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-ink-line pt-4">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pub.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="chip-tech text-[9px] py-0.5 px-2">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-mist/70 text-[11px]">{pub.author}</span>
                    <Link
                      href={`/insights/${pub.slug}`}
                      className="font-mono text-signal hover:underline text-[11px]"
                    >
                      Read &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Subscription */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-xl text-center">
          <span className="eyebrow">Enterprise Briefings</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Receive Field Notes in Your Inbox
          </h2>
          <p className="mt-3 font-body text-sm text-mist leading-relaxed">
            Quarterly architectural dispatches on Databricks performance, RAG quality, and production AI engineering. Zero marketing spam.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
