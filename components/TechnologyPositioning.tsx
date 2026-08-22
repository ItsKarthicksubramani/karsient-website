import { Reveal } from "@/components/Reveal";
import { TechIcon } from "@/components/icons/TechIcons";
import type { LogoKey } from "@/components/icons/TechIcons";
import { legacyTechLogos, legacyTechLabels, modernTechLogos } from "@/lib/data";

export function TechnologyPositioning() {
  return (
    <div className="relative rounded-3xl border border-ink-line bg-ink p-5 sm:p-8">
      <div className="pointer-events-none absolute inset-x-16 top-1/2 -z-10 h-32 -translate-y-1/2 rounded-full bg-signal/5 blur-[70px]" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
        {/* Legacy */}
        <Reveal>
          <div className="rounded-2xl border border-ink-line bg-ink-soft/30 p-5">
            <p className="font-mono text-xs uppercase tracking-wide text-mist">Legacy</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {legacyTechLogos.map((t) => (
                <div key={t.key} className="flex items-center gap-2 rounded-lg border border-ink-line bg-ink px-2.5 py-2">
                  <div className="flex h-11 w-11 items-center justify-center">
                    <TechIcon name={t.key as LogoKey} className="h-full w-full" />
                  </div>
                  <span className="font-body text-xs text-mist">{t.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {legacyTechLabels.map((l) => (
                <span key={l} className="rounded-full border border-ink-line px-3 py-1 font-mono text-[10px] text-mist">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Karsient AI Modernization */}
        <Reveal delay={0.1} className="flex flex-col items-center gap-2">
          <span className="hidden font-mono text-signal lg:block">&rarr;</span>
          <div className="rounded-2xl border border-signal/30 bg-signal/10 px-5 py-4 text-center">
            <p className="font-display text-sm font-semibold text-white">Karsient AI</p>
            <p className="font-display text-sm font-semibold text-signal">Modernization</p>
          </div>
          <span className="hidden font-mono text-signal lg:block">&rarr;</span>
        </Reveal>

        {/* Modern */}
        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-signal/20 bg-signal/[0.04] p-5">
            <p className="font-mono text-xs uppercase tracking-wide text-signal">Modern</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {modernTechLogos.map((t) => (
                <div key={t.key} className="flex items-center gap-2 rounded-lg border border-signal/20 bg-ink px-2.5 py-2">
                  <div className="flex h-11 w-11 items-center justify-center">
                    <TechIcon name={t.key as LogoKey} className="h-full w-full" />
                  </div>
                  <span className="font-body text-xs text-mist">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
