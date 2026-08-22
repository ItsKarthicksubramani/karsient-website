import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, updates, and short-form posts from the Karsient team on data, AI, and cloud.",
};

const posts = [
  {
    tag: "Announcement",
    title: "Karsient expands Databricks practice with dedicated migration team",
    summary:
      "A growing number of clients are moving off legacy warehouses onto the Lakehouse. Here's how we're scaling to support it.",
    readTime: "3 min read",
  },
  {
    tag: "Culture",
    title: "What we look for when hiring data engineers",
    summary:
      "Notes from inside our hiring process — the signals that matter more than a polished resume.",
    readTime: "4 min read",
  },
  {
    tag: "Event",
    title: "Recap: our session on Lakehouse governance at Data Week",
    summary:
      "Slides, key takeaways, and the questions we got asked most from the audience.",
    readTime: "3 min read",
  },
  {
    tag: "Product",
    title: "Behind the scenes of a 60% faster claims-fraud pipeline",
    summary:
      "A short walkthrough of the architecture decisions that made the biggest difference for our insurance client.",
    readTime: "5 min read",
  },
  {
    tag: "Team",
    title: "Six months in: what our newest Databricks hires wish they'd known",
    summary:
      "Honest reflections from engineers who joined the team this year.",
    readTime: "4 min read",
  },
  {
    tag: "Announcement",
    title: "Karsient named a regional partner for Microsoft Fabric",
    summary:
      "A quick look at what this partnership means for clients running Power BI and Fabric workloads.",
    readTime: "2 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">Blog</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              News, updates, and short-form posts.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Announcements, hiring notes, and behind-the-scenes updates from
              the Karsient team — lighter than our Insights, updated more
              often.
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
              Get new posts in your inbox
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
