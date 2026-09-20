"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import {
  headerSolutionsItems,
  headerServicesItems,
  products,
  industriesMenuLinks,
  companyMenuLinks,
} from "@/lib/data";

/* ---------------------------------- Mobile Accordion ---------------------------------- */

function MobileAccordionItem({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <li className="border-b border-ink-line/50 last:border-none">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="focus-ring flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-body text-base font-medium text-white transition-colors hover:bg-ink-soft"
      >
        {label}
        <span
          aria-hidden="true"
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-signal/40 font-mono text-xs text-signal transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-signal/15 text-signal-bright" : ""
          }`}
        >
          {isOpen ? "\u2212" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-2 pr-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/* ---------------------------------- Desktop Mega Menus ---------------------------------- */

function SolutionsMegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        className="focus-ring flex items-center gap-1.5 rounded-md px-1 py-1 font-body text-sm font-medium text-mist transition-colors hover:text-white"
      >
        Solutions
        <span
          aria-hidden="true"
          className={`text-[10px] text-signal/80 transition-transform duration-200 ${
            open ? "rotate-180 text-signal" : ""
          }`}
        >
          &#9662;
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[720px] -translate-x-1/2 rounded-2xl border border-ink-line bg-ink/95 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center justify-between border-b border-ink-line pb-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                Enterprise Modernization Solutions
              </span>
              <Link
                href="/services"
                className="text-xs text-mist transition-colors hover:text-signal"
              >
                All Solutions &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {headerSolutionsItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group rounded-xl border border-transparent p-3 transition-colors hover:border-ink-line hover:bg-ink-soft/60"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-semibold text-white group-hover:text-signal transition-colors">
                      {item.name}
                    </span>
                    <span className="badge-saffron text-[9px] px-1.5 py-0.5">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-1 font-body text-xs leading-relaxed text-mist">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        className="focus-ring flex items-center gap-1.5 rounded-md px-1 py-1 font-body text-sm font-medium text-mist transition-colors hover:text-white"
      >
        Services
        <span
          aria-hidden="true"
          className={`text-[10px] text-signal/80 transition-transform duration-200 ${
            open ? "rotate-180 text-signal" : ""
          }`}
        >
          &#9662;
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[720px] -translate-x-1/2 rounded-2xl border border-ink-line bg-ink/95 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center justify-between border-b border-ink-line pb-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                Engineering &amp; Consulting Specialisms
              </span>
              <Link
                href="/services"
                className="text-xs text-mist transition-colors hover:text-signal"
              >
                View full services matrix &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {headerServicesItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group rounded-xl border border-transparent p-3 transition-colors hover:border-ink-line hover:bg-ink-soft/60"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-semibold text-white group-hover:text-signal transition-colors">
                      {item.name}
                    </span>
                    <span className="badge-cyan text-[9px] px-1.5 py-0.5">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-1 font-body text-xs leading-relaxed text-mist">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductsMegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        className="focus-ring flex items-center gap-1.5 rounded-md px-1 py-1 font-body text-sm font-medium text-mist transition-colors hover:text-white"
      >
        Products
        <span
          aria-hidden="true"
          className={`text-[10px] text-signal/80 transition-transform duration-200 ${
            open ? "rotate-180 text-signal" : ""
          }`}
        >
          &#9662;
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[780px] -translate-x-1/2 rounded-2xl border border-ink-line bg-ink/95 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center justify-between border-b border-ink-line pb-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                Karsient Modernization &amp; Trust Suite
              </span>
              <Link
                href="/products"
                className="text-xs text-mist transition-colors hover:text-signal"
              >
                Product Suite Overview &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              {products.map((p, idx) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group flex flex-col rounded-xl border border-ink-line/60 bg-ink-soft/30 p-4 transition-all hover:border-signal/50 hover:bg-ink-soft/80"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-white group-hover:text-signal transition-colors">
                      {p.name}
                    </span>
                    <span className="badge-saffron text-[9px] px-2 py-0.5">
                      0{idx + 1} &middot; {p.journeyStage}
                    </span>
                  </div>
                  <p className="mt-1.5 font-body text-xs text-mist leading-relaxed line-clamp-2">
                    {p.heroSubhead}
                  </p>
                  <span className="mt-2.5 font-mono text-[11px] text-signal/80 group-hover:text-signal">
                    &ldquo;{p.journeyQuestion}&rdquo; &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function IndustriesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        className="focus-ring flex items-center gap-1.5 rounded-md px-1 py-1 font-body text-sm font-medium text-mist transition-colors hover:text-white"
      >
        Industries
        <span
          aria-hidden="true"
          className={`text-[10px] text-signal/80 transition-transform duration-200 ${
            open ? "rotate-180 text-signal" : ""
          }`}
        >
          &#9662;
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[460px] -translate-x-1/2 rounded-2xl border border-ink-line bg-ink/95 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-3 flex items-center justify-between border-b border-ink-line px-2 pb-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                Industry Solutions
              </span>
              <Link
                href="/industries"
                className="text-xs text-mist transition-colors hover:text-signal"
              >
                Explore All &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {industriesMenuLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-mist transition-colors hover:bg-ink-soft hover:text-signal font-body"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InsightsDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/insights"
        className="focus-ring flex items-center gap-1.5 rounded-md px-1 py-1 font-body text-sm font-medium text-mist transition-colors hover:text-white"
      >
        Insights
        <span
          aria-hidden="true"
          className={`text-[10px] text-signal/80 transition-transform duration-200 ${
            open ? "rotate-180 text-signal" : ""
          }`}
        >
          &#9662;
        </span>
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 mt-3 w-[260px] rounded-2xl border border-ink-line bg-ink/95 p-3 shadow-2xl backdrop-blur-xl"
          >
            <Link
              href="/insights"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-ink-soft hover:text-signal"
            >
              Editorial Insights
            </Link>
            <Link
              href="/case-studies"
              className="block rounded-lg px-3 py-2 text-sm text-mist transition-colors hover:bg-ink-soft hover:text-signal"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="block rounded-lg px-3 py-2 text-sm text-mist transition-colors hover:bg-ink-soft hover:text-signal"
            >
              Company News &amp; Updates
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CompanyDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/about"
        className="focus-ring flex items-center gap-1.5 rounded-md px-1 py-1 font-body text-sm font-medium text-mist transition-colors hover:text-white"
      >
        Company
        <span
          aria-hidden="true"
          className={`text-[10px] text-signal/80 transition-transform duration-200 ${
            open ? "rotate-180 text-signal" : ""
          }`}
        >
          &#9662;
        </span>
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-3 w-[240px] rounded-2xl border border-ink-line bg-ink/95 p-3 shadow-2xl backdrop-blur-xl"
          >
            {companyMenuLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-mist transition-colors hover:bg-ink-soft hover:text-signal font-body"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------------------------- Navbar Main ---------------------------------- */

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenSection(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-line/80 bg-ink/90 backdrop-blur-xl shadow-2xl"
          : "border-b border-white/10 bg-ink/60 backdrop-blur-md"
      }`}
    >
      {/* Finseo-Style Top Platform Notification Ticker */}
      <div className="w-full bg-[#03060B] border-b border-white/10 py-1.5 px-4 text-center text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-slate-300 font-medium">
            <span className="text-white font-bold">Karsient AI OS 3.2:</span> Autonomous Legacy Modernization &amp; Governed Lakehouse Mesh
          </span>
          <Link
            href="/products"
            className="text-cyan-400 font-semibold hover:text-cyan-300 inline-flex items-center gap-1 hover:underline ml-1"
          >
            Explore Platform &rarr;
          </Link>
        </div>
      </div>

      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between py-3">
        <Logo />

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          <li>
            <SolutionsMegaMenu />
          </li>
          <li>
            <ServicesMegaMenu />
          </li>
          <li>
            <ProductsMegaMenu />
          </li>
          <li>
            <IndustriesDropdown />
          </li>
          <li>
            <Link
              href="/#roi-calculator"
              className="focus-ring flex items-center gap-1 rounded-md px-1 py-1 font-body text-sm font-medium text-amber-400/90 transition-colors hover:text-amber-300"
            >
              ROI Calculator
            </Link>
          </li>
          <li>
            <InsightsDropdown />
          </li>
          <li>
            <CompanyDropdown />
          </li>
        </ul>

        {/* SaaS Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-lg border border-white/15 bg-white/[0.05] px-3.5 py-2 text-xs font-semibold text-slate-300 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
          >
            Sign In / Console
          </Link>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#FF7A00] to-[#FF8C33] px-5 py-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(255,107,0,0.45)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.65)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>See it in Action</span>
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-[2px] w-5 bg-white transition-all duration-300 ${
                open ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-[2px] w-5 bg-white transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-5 bg-white transition-all duration-300 ${
                open ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-ink-line bg-ink lg:hidden"
          >
            <ul className="container-px mx-auto flex max-h-[75vh] max-w-7xl flex-col gap-1 overflow-y-auto py-4">
              <MobileAccordionItem
                label="Solutions"
                isOpen={openSection === "solutions"}
                onToggle={() =>
                  setOpenSection((s) => (s === "solutions" ? null : "solutions"))
                }
              >
                <div className="space-y-2">
                  {headerSolutionsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-mist hover:bg-ink-soft hover:text-signal"
                    >
                      <div className="font-medium text-white">{item.name}</div>
                      <div className="text-xs text-mist/70">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </MobileAccordionItem>

              <MobileAccordionItem
                label="Services"
                isOpen={openSection === "services"}
                onToggle={() =>
                  setOpenSection((s) => (s === "services" ? null : "services"))
                }
              >
                <div className="space-y-2">
                  {headerServicesItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-mist hover:bg-ink-soft hover:text-signal"
                    >
                      <div className="font-medium text-white">{item.name}</div>
                      <div className="text-xs text-mist/70">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </MobileAccordionItem>

              <MobileAccordionItem
                label="Products"
                isOpen={openSection === "products"}
                onToggle={() =>
                  setOpenSection((s) => (s === "products" ? null : "products"))
                }
              >
                <div className="space-y-2">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-mist hover:bg-ink-soft hover:text-signal"
                    >
                      <div className="font-medium text-white">
                        {p.name} &middot;{" "}
                        <span className="text-signal text-xs">{p.journeyStage}</span>
                      </div>
                      <div className="text-xs text-mist/70">{p.tagline}</div>
                    </Link>
                  ))}
                </div>
              </MobileAccordionItem>

              <MobileAccordionItem
                label="Industries"
                isOpen={openSection === "industries"}
                onToggle={() =>
                  setOpenSection((s) => (s === "industries" ? null : "industries"))
                }
              >
                <div className="grid grid-cols-2 gap-1">
                  {industriesMenuLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-sm text-mist hover:bg-ink-soft hover:text-signal"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </MobileAccordionItem>

              <MobileAccordionItem
                label="Insights & Case Studies"
                isOpen={openSection === "insights"}
                onToggle={() =>
                  setOpenSection((s) => (s === "insights" ? null : "insights"))
                }
              >
                <div className="space-y-1">
                  <Link
                    href="/insights"
                    className="block rounded-lg px-3 py-2 text-sm text-mist hover:bg-ink-soft hover:text-signal"
                  >
                    Editorial Insights
                  </Link>
                  <Link
                    href="/case-studies"
                    className="block rounded-lg px-3 py-2 text-sm text-mist hover:bg-ink-soft hover:text-signal"
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/blog"
                    className="block rounded-lg px-3 py-2 text-sm text-mist hover:bg-ink-soft hover:text-signal"
                  >
                    Company News
                  </Link>
                </div>
              </MobileAccordionItem>

              <MobileAccordionItem
                label="Company"
                isOpen={openSection === "company"}
                onToggle={() =>
                  setOpenSection((s) => (s === "company" ? null : "company"))
                }
              >
                <div className="space-y-1">
                  {companyMenuLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-mist hover:bg-ink-soft hover:text-signal"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </MobileAccordionItem>

              <li className="pt-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center"
                >
                  Talk to an Expert &rarr;
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
