import Link from "next/link";
import { Logo } from "./Logo";
import { companyMenuLinks, resourceLinks, industriesMenuLinks, services, migrationSolutions, products, site } from "@/lib/data";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const hubCards = [
    {
      title: "Bengaluru",
      sub: "Technology Hub",
      desc: "AI, Data Engineering & Innovation",
      icon: "building",
    },
    {
      title: "Chennai",
      sub: "Engineering Hub",
      desc: "Data Platforms & Enterprise Engineering",
      icon: "building",
    },
    {
      title: "Across India",
      sub: "Delivery Network",
      desc: "Distributed talent. Unified delivery.",
      icon: "india",
    },
    {
      title: "Global Reach",
      sub: "",
      desc: "Serving clients across time zones worldwide",
      icon: "globe",
    },
    {
      title: "Built on Trust",
      sub: "",
      desc: "Secure. Compliant. Future-ready.",
      icon: "shield",
    },
  ];

  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="container-px mx-auto max-w-7xl pt-16">
        {/* Innovation hubs panel */}
        <div className="rounded-3xl border border-ink-line bg-ink-soft/30 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Technology &amp; Innovation Hubs
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
            India-based. Globally <span className="text-signal">connected.</span>
          </h3>
          <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-mist">
            Delivering AI and data engineering solutions from our innovation
            hubs across India to enterprises worldwide.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {hubCards.map((h) => (
              <div key={h.title} className="rounded-2xl border border-ink-line bg-ink p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-signal/25 bg-signal/10 text-signal">
                  <HubIcon name={h.icon} />
                </span>
                <p className="mt-3 font-display text-sm font-semibold text-white">
                  {h.title}
                  {h.sub && <span className="block font-body text-xs font-normal text-mist">{h.sub}</span>}
                </p>
                <p className="mt-2 font-body text-xs leading-relaxed text-mist">{h.desc}</p>
                <div className="mt-4 h-px w-6 bg-signal/50" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.7fr_0.7fr_1fr]">
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
              <span>
                21/114, Sammattipuram Main Road, Madurai,
                <br />
                Tamil Nadu 625016, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HubIcon({ name }: { name: string }) {
  const common = "h-5 w-5";
  switch (name) {
    case "india":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c-.6 2-2.4 3-4 4.5-2.2 2-3 4.5-2 7 1.2 3 4.3 5 6 6.5 1.7-1.5 4.8-3.5 6-6.5 1-2.5.2-5-2-7-1.6-1.5-3.4-2.5-4-4.5Z" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3Z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 4.5 6v6c0 4.5 3.2 7.7 7.5 9 4.3-1.3 7.5-4.5 7.5-9V6L12 3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "building":
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" />
          <path d="M13 10h5a1 1 0 0 1 1 1v10" />
          <path d="M9 8h.01M9 12h.01M9 16h.01" />
        </svg>
      );
  }
}
