"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Service } from "@/lib/data";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      id={service.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group/card relative h-full scroll-mt-28 rounded-[24px] p-[1px]"
    >
      {/* animated gradient border */}
      <div className="pointer-events-none absolute inset-0 animate-border-spin rounded-[24px] bg-[conic-gradient(from_0deg,rgba(255,106,0,0)_0%,rgba(255,106,0,0.28)_15%,rgba(255,106,0,0)_35%)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 group-hover/card:border-signal/50 group-hover/card:bg-white/[0.05] group-hover/card:shadow-[0_0_45px_-8px_rgba(255,106,0,0.18)]">
        {/* corner glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-signal/0 blur-3xl transition-all duration-500 group-hover/card:bg-signal/20" />

        <div className="relative flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-signal/25 bg-signal/10 font-mono text-sm text-signal">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        <h3 className="relative mt-5 font-display text-lg font-semibold text-white">
          {service.name}
        </h3>
        <p className="relative mt-2 font-body text-sm leading-relaxed text-mist">
          {service.short}
        </p>

        <ul className="relative mt-5 min-h-[7.5rem] space-y-2.5 border-t border-white/10 pt-5">
          {service.capabilities.map((cap) => (
            <li key={cap} className="flex items-start gap-2.5 font-body text-sm text-mist">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              {cap}
            </li>
          ))}
        </ul>

        <div className="relative mt-5 flex flex-1 flex-wrap content-start gap-2">
          {service.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-signal/25 bg-signal/[0.08] px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-signal-bright"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="focus-ring relative mt-6 inline-flex items-center gap-1.5 rounded-md font-body text-sm font-medium text-signal opacity-80 transition-opacity group-hover/card:opacity-100"
        >
          Discuss this service
          <span aria-hidden="true" className="transition-transform group-hover/card:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
