import Link from "next/link";
import { Logo } from "./Logo";
import { companyMenuLinks, resourceLinks, industriesMenuLinks, services, migrationSolutions, products, site } from "@/lib/data";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.7fr_0.7fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-mist">
              {site.tagline}. Enterprise-grade AI, data engineering, and cloud
              consulting.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Karsient on LinkedIn"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-mist transition-colors hover:border-signal hover:text-signal"
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
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-mist transition-colors hover:border-signal hover:text-signal"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M12.04 2.5c-5.26 0-9.54 4.28-9.54 9.55 0 1.68.44 3.32 1.28 4.77L2.5 21.5l4.85-1.27a9.5 9.5 0 0 0 4.69 1.23h.01c5.27 0 9.55-4.28 9.55-9.55 0-2.55-1-4.95-2.8-6.75a9.5 9.5 0 0 0-6.76-2.66zm5.6 13.63c-.24.66-1.4 1.27-1.93 1.34-.5.07-1.11.1-1.79-.11a16.4 16.4 0 0 1-1.75-.65c-3.08-1.33-5.08-4.43-5.24-4.63-.15-.2-1.25-1.67-1.25-3.18 0-1.52.8-2.26 1.08-2.57.28-.3.62-.38.83-.38l.6.01c.19.01.44-.07.69.53.24.6.83 2.07.9 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.24.66-.15.27.1 1.71.81 2 .96.3.15.5.22.57.35.07.13.07.72-.17 1.38z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {[...companyMenuLinks, { href: "/industries", label: "Industries" }, ...resourceLinks].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring rounded-md font-body text-sm text-mist transition-colors hover:text-signal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
              Products
            </p>
            <ul className="mt-4 space-y-3">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="focus-ring rounded-md font-body text-sm text-mist transition-colors hover:text-signal"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="focus-ring rounded-md font-body text-sm text-mist transition-colors hover:text-signal"
                >
                  View all products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
              Services
            </p>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="focus-ring rounded-md font-body text-sm text-mist transition-colors hover:text-signal"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
              Solutions
            </p>
            <ul className="mt-4 space-y-3">
              {migrationSolutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="focus-ring rounded-md font-body text-sm text-mist transition-colors hover:text-signal"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
              Stay in the loop
            </p>
            <p className="mt-4 font-body text-sm text-mist">
              Field notes on data engineering and AI, a few times a quarter.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink-line pt-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist">Industries</span>
          {industriesMenuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md font-body text-xs text-mist transition-colors hover:text-signal"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 border-t border-ink-line pt-8 text-sm text-mist sm:flex-row sm:items-start sm:justify-between">
          <p className="font-body">
            &copy; {new Date().getFullYear()} {site.legalName}. All rights
            reserved.
          </p>
          <div className="flex flex-col gap-4 font-body sm:flex-row sm:items-start sm:gap-8">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href={`mailto:${site.email}`} className="focus-ring rounded-md hover:text-signal">
                {site.email}
              </a>
              <a href={`tel:+${site.phoneRaw}`} className="focus-ring rounded-md hover:text-signal">
                {site.phone}
              </a>
              <span>{site.address}</span>
            </div>
            <div className="text-xs leading-relaxed text-mist/80 sm:text-right sm:text-sm">
              {site.hubs.map((h) => (
                <p key={h}>{h}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
