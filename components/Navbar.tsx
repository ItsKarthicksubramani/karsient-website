"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import {
  solutionsMegaMenuColumns,
  productsMenuLinks,
  industriesMenuLinks,
  companyMenuLinks,
  resourceLinks,
} from "@/lib/data";

type SubLink = { href: string; label: string; indent?: boolean };

/* ---------------------------------- Mobile ---------------------------------- */

function MobileAccordion({
  label,
  items,
  isOpen,
  onToggle,
  nested,
  columns = 1,
}: {
  label: string;
  items: SubLink[];
  isOpen: boolean;
  onToggle: () => void;
  nested?: boolean;
  columns?: 1 | 2;
}) {
  return (
    <li className={nested ? "" : "border-b border-ink-line/60 last:border-none"}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`focus-ring flex w-full items-center justify-between rounded-lg text-left font-body transition-colors hover:bg-ink-soft hover:text-white ${
          nested ? "px-3 py-2.5 text-sm text-mist/90" : "px-3 py-3 text-base text-mist"
        }`}
      >
        {label}
        <span
          aria-hidden="true"
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-signal/40 font-mono text-sm text-signal transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-signal/10" : ""
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className={`gap-0.5 pb-2 pl-3 ${columns === 2 ? "grid grid-cols-2" : "flex flex-col"}`}>
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`focus-ring block rounded-lg py-2.5 font-body transition-colors hover:bg-ink-soft hover:text-signal ${
                      item.indent ? "ml-3 px-3 text-xs text-mist/70" : "px-3 text-sm text-mist"
                    }`}
                  >
                    {item.indent ? `\u2013 ${item.label}` : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function MobileSolutionsMenu({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  const [openChild, setOpenChild] = useState<string | null>(null);

  return (
    <li className="border-b border-ink-line/60 last:border-none">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="focus-ring flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-body text-base text-mist transition-colors hover:bg-ink-soft hover:text-white"
      >
        Solutions
        <span
          aria-hidden="true"
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-signal/40 font-mono text-sm text-signal transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-signal/10" : ""
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="flex flex-col gap-0.5 pb-2 pl-3">
              {solutionsMegaMenuColumns.map((col) =>
                col.children && col.children.length > 0 ? (
                  <MobileAccordion
                    key={col.label}
                    label={col.label}
                    items={col.children}
                    isOpen={openChild === col.label}
                    onToggle={() => setOpenChild((v) => (v === col.label ? null : col.label))}
                    nested
                  />
                ) : (
                  <li key={col.label}>
                    <Link
                      href={col.href}
                      className="focus-ring block rounded-lg px-3 py-2.5 font-body text-sm text-mist transition-colors hover:bg-ink-soft hover:text-signal"
                    >
                      {col.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/* ---------------------------------- Desktop ---------------------------------- */

function DesktopSolutionsMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        className="focus-ring flex items-center gap-1 rounded-md font-body text-sm font-medium text-mist transition-colors hover:text-white"
      >
        Solutions
        <span
          aria-hidden="true"
          className={`mt-0.5 text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
            className="absolute left-0 top-full z-50 mt-2 w-[860px] max-w-[95vw] rounded-2xl border border-ink-line bg-ink p-6 shadow-2xl"
          >
            <div className="grid grid-cols-[1.35fr_1fr_1fr_0.85fr] gap-5">
              {solutionsMegaMenuColumns.map((col) => (
                <div key={col.label}>
                  <Link
                    href={col.href}
                    className="focus-ring block whitespace-nowrap font-display text-[11px] font-semibold uppercase leading-snug tracking-wide text-white transition-colors hover:text-signal"
                  >
                    {col.label}
                  </Link>
                  {col.children && col.children.length > 0 && (
                    <ul className="mt-3 space-y-1 border-l border-ink-line pl-3">
                      {col.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`focus-ring block whitespace-nowrap rounded-md py-1 font-body transition-colors hover:text-signal ${
                              child.indent
                                ? "pl-3 text-[12px] text-mist/70"
                                : "text-xs text-mist"
                            }`}
                          >
                            {child.indent ? `\u2013 ${child.label}` : child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DesktopDropdown({ label, href, items, wide }: { label: string; href: string; items: SubLink[]; wide?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        href={href}
        className="focus-ring flex items-center gap-1 rounded-md font-body text-sm font-medium text-mist transition-colors hover:text-white"
      >
        {label}
        <span
          aria-hidden="true"
          className={`mt-0.5 text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
            className={`absolute left-0 top-full z-50 mt-2 rounded-xl border border-ink-line bg-ink p-2 shadow-xl ${
              wide ? "grid w-[420px] grid-cols-2 gap-x-2" : "min-w-[220px]"
            }`}
          >
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="focus-ring block rounded-lg px-3 py-2 font-body text-sm text-mist transition-colors hover:bg-ink-soft hover:text-signal"
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

/* ---------------------------------- Navbar ---------------------------------- */

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
          ? "border-b border-ink-line bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between py-4">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          <li>
            <DesktopDropdown label="Product" href="/products" items={productsMenuLinks} />
          </li>
          <li>
            <DesktopSolutionsMenu />
          </li>
          <li>
            <DesktopDropdown label="Industries" href="/industries" items={industriesMenuLinks} wide />
          </li>
          <li>
            <DesktopDropdown label="Company" href="/about" items={companyMenuLinks} />
          </li>
          <li>
            <DesktopDropdown label="Resources" href="/insights" items={resourceLinks} />
          </li>
        </ul>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary group relative overflow-hidden">
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.55)_50%,transparent_65%)] bg-[length:250%_100%] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine" />
            <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-ink/25 transition-transform duration-300 group-hover:scale-110">
              <span className="h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-ink" />
            </span>
            <span className="relative">See it in Action</span>
          </Link>
        </div>

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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-ink-line bg-ink lg:hidden"
          >
            <ul className="container-px mx-auto flex max-h-[70vh] max-w-7xl flex-col gap-1 overflow-y-auto py-4">
              <li>
                <Link
                  href="/"
                  className={`focus-ring block rounded-lg px-3 py-3 font-body text-base ${
                    pathname === "/" ? "bg-ink-soft text-signal" : "text-mist hover:bg-ink-soft hover:text-white"
                  }`}
                >
                  Home
                </Link>
              </li>

              <MobileAccordion
                label="Product"
                items={productsMenuLinks}
                isOpen={openSection === "product"}
                onToggle={() => setOpenSection((v) => (v === "product" ? null : "product"))}
              />
              <MobileSolutionsMenu
                isOpen={openSection === "solutions"}
                onToggle={() => setOpenSection((v) => (v === "solutions" ? null : "solutions"))}
              />
              <MobileAccordion
                label="Industries"
                items={industriesMenuLinks}
                isOpen={openSection === "industries"}
                onToggle={() => setOpenSection((v) => (v === "industries" ? null : "industries"))}
                columns={2}
              />
              <MobileAccordion
                label="Company"
                items={companyMenuLinks}
                isOpen={openSection === "company"}
                onToggle={() => setOpenSection((v) => (v === "company" ? null : "company"))}
              />
              <MobileAccordion
                label="Resources"
                items={resourceLinks}
                isOpen={openSection === "resources"}
                onToggle={() => setOpenSection((v) => (v === "resources" ? null : "resources"))}
              />

              <li className="pt-2">
                <Link href="/contact" className="btn-primary group relative w-full overflow-hidden">
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.55)_50%,transparent_65%)] bg-[length:250%_100%] opacity-0 transition-opacity duration-300 group-active:opacity-100 group-active:animate-shine" />
                  <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-ink/25 transition-transform duration-300 group-hover:scale-110">
                    <span className="h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-ink" />
                  </span>
                  <span className="relative">See it in Action</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
