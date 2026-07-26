import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Karsient serves Insurance, Healthcare, Banking & Financial Services, Retail, Manufacturing, Agriculture, and Logistics organisations.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">Industries</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Deep pattern-matching, not generic playbooks.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Each industry carries its own data gravity, regulatory load,
              and failure modes. We bring engagement history from each one to
              every new project.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 0.06}>
              <div className="card-surface h-full p-7">
                <span className="eyebrow">{`0${i + 1}`}</span>
                <h2 className="mt-3 font-display text-xl font-semibold text-white">
                  {ind.name}
                </h2>
                <p className="mt-3 font-body text-sm leading-relaxed text-mist">
                  {ind.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-ink-line pt-5">
                  {ind.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-2 font-body text-xs text-mist">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Don't see your industry?"
            title="We work beyond this list too — tell us about your data"
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
