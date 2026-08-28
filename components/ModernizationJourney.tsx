import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/data";

export function ModernizationJourney() {
  return (
    <div className="relative rounded-3xl border border-ink-line bg-ink p-5 sm:p-8">
      <div className="pointer-events-none absolute inset-x-16 top-0 -z-10 h-32 rounded-full bg-signal/5 blur-[70px]" />

      {/* Legacy environment */}
      <Reveal>
        <div className="mx-auto max-w-xs rounded-xl border border-ink-line bg-ink-soft/40 px-5 py-3 text-center">
          <span className="font-mono text-xs uppercase tracking-wide text-mist">Legacy Environment</span>
        </div>
      </Reveal>
      <div className="mx-auto my-3 h-8 w-px bg-ink-line" />

      <div className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex min-w-[900px] max-w-6xl items-stretch gap-4">
          {products.map((p, i) => {
            const isTrust = p.journeyStage === "Trust";
            return (
              <Reveal key={p.slug} delay={i * 0.08} className="flex flex-1 flex-col">
                <Link
                  href={`/products/${p.slug}`}
                  className={`focus-ring flex h-full flex-col rounded-2xl border p-5 transition-colors ${
                    isTrust
                      ? "border-cyan/25 bg-cyan/[0.04] hover:border-cyan/50"
                      : "border-signal/25 bg-signal/[0.04] hover:border-signal/50"
                  }`}
                >
                  <span className={`font-mono text-[11px] uppercase tracking-wide ${isTrust ? "text-cyan-soft" : "text-signal"}`}>
                    {String(i + 1).padStart(2, "0")} &middot; {p.journeyStage}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold text-white">{p.name}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {p.journeyVerbs.map((v) => (
                      <li key={v} className="flex items-start gap-1.5 font-body text-xs text-mist">
                        <span className={`mt-1 h-1 w-1 shrink-0 rounded-full ${isTrust ? "bg-cyan" : "bg-signal"}`} />
                        {v}
                      </li>
                    ))}
                  </ul>
                </Link>
                {i < products.length - 1 && (
                  <div className="hidden items-center justify-center py-1 sm:flex">
                    <span className="font-mono text-signal">&rarr;</span>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mx-auto my-3 h-8 w-px bg-ink-line" />
      <Reveal delay={0.2}>
        <div className="mx-auto max-w-xs rounded-xl border border-ink-line bg-ink-soft/40 px-5 py-3 text-center">
          <span className="font-mono text-xs uppercase tracking-wide text-mist">Modern Data Platform</span>
        </div>
      </Reveal>

      <div className="mx-auto my-3 h-8 w-px bg-ink-line" />
      <Reveal delay={0.25}>
        <div className="mx-auto max-w-sm rounded-xl border border-signal/30 bg-signal/10 px-5 py-3 text-center">
          <span className="font-mono text-xs uppercase tracking-wide text-signal">
            Modernized, Optimized &amp; Trusted Enterprise
          </span>
        </div>
      </Reveal>
    </div>
  );
}
