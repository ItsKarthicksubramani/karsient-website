"use client";

import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { methodologyIconMap, IconServer } from "@/components/icons/DiagramIcons";

export type MethodologyStep = { step: string; detail: string };

export function MethodologyFlow({ steps, compact = false }: { steps: MethodologyStep[]; compact?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const minWidth = compact ? Math.max(steps.length * 140, 640) : Math.max(steps.length * 160, 820);

  const scrollByStep = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-step]");
    const step = (card?.offsetWidth ?? 140) + 8;
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  return (
    <div className="group/flow relative">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-ink to-transparent sm:w-12" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-ink to-transparent sm:w-12" />

      <div
        ref={trackRef}
        className="overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div
          className="relative mx-auto flex items-start justify-between gap-2 px-8 sm:px-2"
          style={{ minWidth: `${minWidth}px`, maxWidth: "1100px" }}
        >
          <div className="absolute left-0 right-0 top-7 h-px bg-ink-line" />
          <div className="absolute left-0 top-7 h-px w-full bg-gradient-to-r from-signal/0 via-signal/40 to-signal/0" />
          {steps.map((s, i) => {
            const Icon = methodologyIconMap[s.step] ?? IconServer;
            return (
              <div key={s.step} data-step className="relative flex-1">
                <Reveal delay={(i % 10) * 0.04}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-signal/35 bg-ink text-signal">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="mt-2 font-mono text-[11px] text-signal">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-1 font-display text-sm font-semibold text-white">{s.step}</h3>
                    {!compact && (
                      <p className="mt-1.5 max-w-[130px] font-body text-xs leading-relaxed text-mist">{s.detail}</p>
                    )}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll steps left"
        onClick={() => scrollByStep(-1)}
        className="focus-ring absolute -left-1 top-6 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/90 text-white backdrop-blur transition-colors hover:border-signal/60 hover:text-signal sm:flex"
      >
        &larr;
      </button>
      <button
        type="button"
        aria-label="Scroll steps right"
        onClick={() => scrollByStep(1)}
        className="focus-ring absolute -right-1 top-6 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/90 text-white backdrop-blur transition-colors hover:border-signal/60 hover:text-signal sm:flex"
      >
        &rarr;
      </button>
    </div>
  );
}
