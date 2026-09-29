import { Reveal } from "@/components/Reveal";
import type { IndustryArchitectureLayer } from "@/lib/data";

const LAYER_ACCENTS = [
  "border-ink-line bg-ink-soft/40",
  "border-cyan/25 bg-cyan/[0.04]",
  "border-signal/25 bg-signal/[0.05]",
  "border-cyan/25 bg-cyan/[0.04]",
];

export function IndustryArchitectureDiagram({ layers }: { layers: IndustryArchitectureLayer[] }) {
  return (
    <div className="relative rounded-3xl border border-ink-line bg-ink/60 p-5 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)] backdrop-blur-md sm:p-8">
      <div className="pointer-events-none absolute inset-x-16 top-0 -z-10 h-32 rounded-full bg-cyan/10 blur-[70px]" />

      <div className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex min-w-[760px] max-w-6xl items-stretch">
          {layers.map((layer, i) => (
            <div key={layer.label} className="flex flex-1 items-stretch">
              <Reveal delay={i * 0.08} className="flex-1">
                <div
                  className={`flex h-full flex-col rounded-2xl border p-4 ${LAYER_ACCENTS[i % LAYER_ACCENTS.length]}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-node" />
                    <h3 className="font-display text-sm font-semibold text-white">{layer.label}</h3>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {layer.items.map((it) => (
                      <li key={it} className="flex items-start gap-1.5 font-body text-[11px] leading-snug text-mist sm:text-xs">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {i < layers.length - 1 && (
                <div className="relative mx-1.5 hidden w-10 shrink-0 items-center sm:flex">
                  <div className="h-px w-full bg-ink-line" />
                  {/* animated data packets flowing between layers */}
                  {[0, 1, 2].map((p) => (
                    <span
                      key={p}
                      className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] animate-flow-packet"
                      style={{ animationDelay: `${p * 0.9}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-wide text-cyan-soft">
        Live data flow &middot; sources to outcomes
      </p>
    </div>
  );
}
