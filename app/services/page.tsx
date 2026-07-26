import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Databricks consulting, data engineering, AI & machine learning, cloud migration, governance, warehousing, real-time analytics, BI, and managed data services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">Services</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Every capability between raw data and production AI.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Engage us for a single specialism or the full lifecycle — our
              teams are structured to plug into wherever your platform is
              today.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={service.slug} id={service.slug} className="scroll-mt-28">
              <Reveal delay={(i % 3) * 0.06} className="card-surface h-full p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal/10 font-mono text-sm text-signal">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold text-white">
                  {service.name}
                </h2>
                <p className="mt-3 font-body text-sm leading-relaxed text-mist">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-ink-line pt-5">
                  {service.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2 font-body text-xs text-mist">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Not sure where to start?"
            title="Tell us what's broken, and we'll tell you what to fix first"
            align="center"
          />
          <Reveal delay={0.1} className="mt-8">
            <Link href="/contact" className="btn-primary">
              Book a Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
