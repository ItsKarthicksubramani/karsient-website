import Link from "next/link";
import { Logo } from "./Logo";
import {
  companyMenuLinks,
  industriesMenuLinks,
  services,
  products,
  site,
  headerSolutionsItems,
} from "@/lib/data";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const hubs = [
    {
      city: "Bengaluru",
      role: "AI & Innovation Hub",
      detail: "Generative AI, Agentic Systems & Platform Engineering",
    },
    {
      city: "Chennai",
      role: "Data Engineering Center",
      detail: "Lakehouse Platforms, Distributed Compute & Modernization",
    },
    {
      city: "Madurai",
      role: "Corporate Headquarters",
      detail: "Global Delivery, Core Engineering & Trust Operations",
    },
  ];

  return (
    <footer className="border-t border-ink-line bg-ink text-mist">
      {/* Top Innovation Hubs Bar */}
      <div className="border-b border-ink-line/70 bg-ink-soft/20 py-10">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                Global Engineering Delivery
              </span>
              <h3 className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
                Advanced delivery centers across India. Serving enterprises globally.
              </h3>
            </div>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {hubs.map((hub) => (
                <div key={hub.city} className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-signal" />
                    <span className="font-display text-sm font-semibold text-white">
                      {hub.city}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-signal/80 mt-0.5">
                    {hub.role}
                  </span>
                  <span className="font-body text-xs text-mist/70 max-w-[200px] mt-0.5">
                    {hub.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Directory Grid */}
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-mist">
              Engineering tomorrow&apos;s intelligent enterprises. Modernize legacy technology, engineer governed data platforms, and build production-grade AI.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Karsient on LinkedIn"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-mist transition-colors hover:border-signal hover:text-signal hover:bg-signal/5"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${site.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Karsient on WhatsApp"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-mist transition-colors hover:border-signal hover:text-signal hover:bg-signal/5"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M12.04 2.5c-5.26 0-9.54 4.28-9.54 9.55 0 1.68.44 3.32 1.28 4.77L2.5 21.5l4.85-1.27a9.5 9.5 0 0 0 4.69 1.23h.01c5.27 0 9.55-4.28 9.55-9.55 0-2.55-1-4.95-2.8-6.75a9.5 9.5 0 0 0-6.76-2.66zm5.6 13.63c-.24.66-1.4 1.27-1.93 1.34-.5.07-1.11.1-1.79-.11a16.4 16.4 0 0 1-1.75-.65c-3.08-1.33-5.08-4.43-5.24-4.63-.15-.2-1.25-1.67-1.25-3.18 0-1.52.8-2.26 1.08-2.57.28-.3.62-.38.83-.38l.6.01c.19.01.44-.07.69.53.24.6.83 2.07.9 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.24.66-.15.27.1 1.71.81 2 .96.3.15.5.22.57.35.07.13.07.72-.17 1.38z" />
                </svg>
              </a>
            </div>
            <div className="mt-8 max-w-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-white">
                Subscribe to Karsient Briefings
              </span>
              <p className="mt-1 text-xs text-mist/80 mb-3">
                Field notes on Lakehouse architecture, RAG, and Agentic AI.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">
              Solutions
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {headerSolutionsItems.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="focus-ring block transition-colors hover:text-signal"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">
              Services
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="focus-ring block transition-colors hover:text-signal"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">
              Products
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="focus-ring block transition-colors hover:text-signal"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="focus-ring block text-signal hover:underline pt-1"
                >
                  Product Suite Overview &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">
              Company
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {companyMenuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring block transition-colors hover:text-signal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Industries Bar */}
        <div className="mt-12 border-t border-ink-line pt-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <span className="font-mono uppercase tracking-wider text-white">
              Industries:
            </span>
            {industriesMenuLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-signal"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* SaaS Platform Status & Compliance Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink-line pt-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-mono text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Karsient Cloud Systems Operational (99.99% Uptime)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
            <span className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 text-slate-300">
              SOC2 Type II
            </span>
            <span className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 text-slate-300">
              HIPAA Compliant
            </span>
            <span className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 text-slate-300">
              ISO 27001 Certified
            </span>
            <span className="rounded border border-cyan-500/30 bg-cyan-950/30 px-2 py-0.5 text-cyan-300">
              Private VPC / On-Prem
            </span>
          </div>
        </div>

        {/* Bottom Legal & Contact Bar */}
        <div className="mt-6 flex flex-col gap-4 border-t border-ink-line pt-6 text-xs sm:flex-row sm:items-center sm:justify-between text-mist/75">
          <div>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href={`mailto:${site.email}`} className="hover:text-signal">
              {site.email}
            </a>
            <a href={`tel:+${site.phoneRaw}`} className="hover:text-signal">
              {site.phone}
            </a>
            <span className="hover:text-white">Madurai &middot; Bengaluru &middot; Chennai</span>
            <Link href="/contact" className="hover:text-signal">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-signal">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-signal">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
