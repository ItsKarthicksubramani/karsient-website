"use client";

import { motion } from "framer-motion";
import { TechIcon, techLabels } from "@/components/icons/TechIcons";
import { playBrandChime } from "@/lib/sound";
import type { PlatformCapability } from "@/lib/data";

export function PlatformCapabilities({ cards }: { cards: PlatformCapability[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          onClick={() => playBrandChime()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") playBrandChime();
          }}
          className="group/pc relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:border-signal/50 hover:shadow-[0_0_45px_-8px_rgba(255,106,0,0.16)]"
        >
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-signal/0 blur-3xl transition-all duration-500 group-hover/pc:bg-signal/20" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-signal/25 bg-gradient-to-br from-signal/35 via-signal-dim/25 to-ink/40 p-3.5 shadow-inner">
            <TechIcon name={c.icon} className="h-full w-full" />
          </span>
          <h3 className="relative mt-4 font-display text-lg font-semibold text-white">
            {c.title}
          </h3>
          <ul className="relative mt-5 space-y-3 border-t border-ink-line pt-5">
            {c.items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-signal/25 bg-gradient-to-br from-signal/35 via-signal-dim/25 to-ink/40 p-2 shadow-inner">
                  <TechIcon name={item} className="h-full w-full" />
                </span>
                <span className="font-body text-sm text-mist">{techLabels[item]}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
