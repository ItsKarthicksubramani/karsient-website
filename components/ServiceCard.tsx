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
      whileHover={{ y: -6 }}
      className="card-surface group scroll-mt-28 p-6 transition-colors hover:border-signal/60"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal/10 font-mono text-sm text-signal">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-white">
        {service.name}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-mist">
        {service.short}
      </p>
      <ul className="mt-5 space-y-2">
        {service.capabilities.slice(0, 3).map((c) => (
          <li key={c} className="flex items-start gap-2 font-body text-xs text-mist">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
            {c}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="focus-ring mt-6 inline-flex items-center gap-1.5 rounded-md font-body text-sm font-medium text-signal opacity-80 transition-opacity group-hover:opacity-100"
      >
        Discuss this service
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
