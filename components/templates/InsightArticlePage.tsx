import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { InsightArticle, InsightBlock } from "@/lib/insights";

function Block({ block }: { block: InsightBlock }) {
  switch (block.kind) {
    case "p":
      return <p className="font-body text-base leading-relaxed text-mist">{block.text}</p>;
    case "h2":
      return (
        <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">{block.text}</h2>
      );
    case "h3":
      return (
        <h3 className="mt-2 flex items-center gap-2.5 font-display text-xl font-semibold text-white">
          {block.emoji && <span aria-hidden="true">{block.emoji}</span>}
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 font-body text-base leading-relaxed text-mist">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "flow":
      return (
        <div className="flex flex-wrap items-center gap-2.5 rounded-2xl border border-ink-line bg-ink-soft/30 p-5">
          {block.steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2.5">
              <span className="rounded-full border border-signal/30 bg-signal/[0.06] px-4 py-2 font-mono text-xs uppercase tracking-wide text-signal-bright">
                {step}
              </span>
              {i < block.steps.length - 1 && (
                <span aria-hidden="true" className="text-mist/40">
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>
      );
    case "callout":
      return (
        <div className="rounded-2xl border border-signal/25 bg-signal/[0.05] p-6">
          {block.title && (
            <p className="font-display text-sm font-semibold text-signal">{block.title}</p>
          )}
          <ul className="mt-3 flex flex-wrap gap-2">
            {block.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-signal/25 bg-ink px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-signal-bright"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-signal pl-5 font-display text-lg leading-snug text-white">
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
}

export function InsightArticlePage({
  article,
  related,
}: {
  article: InsightArticle;
  related: InsightArticle[];
}) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-line bg-grid-glow">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-signal/10 blur-[100px]" />
        <div className="container-px mx-auto max-w-3xl py-20 text-center sm:py-24">
          <Reveal>
            <p className="eyebrow">
              <Link href="/insights" className="hover:text-signal">
                Insights
              </Link>{" "}
              &rarr; {article.tag}
            </p>
          </Reveal>
          {article.series && (
            <Reveal delay={0.03}>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                {article.series}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.06}>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">{article.summary}</p>
          </Reveal>
          <Reveal delay={0.13}>
            <p className="mt-4 font-mono text-xs text-mist">{article.readTime}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-3xl">
        <div className="space-y-6">
          {article.body.map((block, i) => (
            <Reveal key={i} delay={(i % 6) * 0.04}>
              <Block block={block} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-3 border-t border-ink-line pt-8">
          <Link href="/contact" className="btn-primary">
            Talk to a Karsient Expert
          </Link>
          <Link href="/insights" className="btn-secondary">
            More Insights
          </Link>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="section-py border-t border-ink-line bg-ink-soft/30">
          <div className="container-px mx-auto max-w-7xl">
            <p className="eyebrow text-center">Related insights</p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.06}>
                  <Link href={`/insights/${r.slug}`} className="card-surface group flex h-full flex-col p-6">
                    <span className="w-fit rounded-full border border-signal/30 bg-signal/[0.06] px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-signal">
                      {r.tag}
                    </span>
                    <h3 className="mt-3 font-display text-base font-semibold leading-snug text-white group-hover:text-signal">
                      {r.title}
                    </h3>
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-mist">{r.summary}</p>
                    <span className="mt-4 font-mono text-xs text-mist">{r.readTime}</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
