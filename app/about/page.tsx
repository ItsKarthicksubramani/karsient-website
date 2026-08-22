import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Karsient",
  description:
    "Karsient helps enterprises transform legacy technology into modern, intelligent, AI-powered ecosystems through advanced engineering and its own products, platforms, and accelerators.",
};

const pillars = [
  {
    tag: "MODERNIZE",
    title: "Modernize",
    detail: "Transform legacy applications, platforms, and data ecosystems into modern architectures.",
  },
  {
    tag: "INTELLIGENTIZE",
    title: "Intelligentize",
    detail: "Introduce AI, automation, intelligent workflows, copilots, and agentic capabilities into modernized environments.",
  },
  {
    tag: "ACCELERATE",
    title: "Accelerate",
    detail: "Use Karsient's own products, accelerators, frameworks, and engineering capabilities to reduce transformation complexity and time.",
  },
];

const productAreas = [
  "Legacy code understanding",
  "Application modernization",
  "Data migration",
  "Data reconciliation",
  "Transformation automation",
  "AI engineering",
  "Intelligent enterprise workflows",
  "Agentic AI",
];

const philosophy = [
  "Legacy is knowledge waiting to be transformed.",
  "Modernization is more than migration.",
  "Data becomes powerful when it becomes intelligent.",
  "AI becomes valuable when it solves real enterprise problems.",
  "Products turn engineering knowledge into repeatable transformation.",
];

const closingArrows = [
  { from: "Legacy", to: "Modern" },
  { from: "Data", to: "Intelligence" },
  { from: "Automation", to: "Autonomy" },
  { from: "Technology", to: "Transformation" },
];

export default function AboutPage() {
  return (
    <>
      {/* OPENING — WHO KARSIENT IS */}
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">About Karsient</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              A technology company built to evolve enterprises beyond legacy complexity.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Karsient combines AI, data engineering, cloud technologies, modern enterprise
              architecture, automation, and proprietary products to transform existing technology
              ecosystems into scalable, intelligent, future-ready platforms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OUR BELIEF */}
      <section className="section-py container-px mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">Our belief</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
            Technology should not simply preserve what enterprises have built.
            <br />
            It should unlock what they can become.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-mist">
            Karsient looks beyond conventional migration and modernization. The objective is to
            understand existing systems, preserve valuable business logic, remove unnecessary
            complexity, modernize the technology foundation, and introduce intelligence where it
            can create meaningful business value.
          </p>
        </Reveal>
      </section>

      {/* WHAT MAKES KARSIENT DIFFERENT */}
      <section className="section-py border-y border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What makes Karsient different"
            title="We don't just recommend modernization — we engineer and accelerate it."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.tag} delay={i * 0.08}>
                <div className="card-surface h-full p-7">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">{p.tag}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-mist">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PHILOSOPHY */}
      <section className="section-py container-px mx-auto max-w-5xl">
        <SectionHeading eyebrow="Our product philosophy" title="We build the technology we wish enterprises had during transformation." />
        <Reveal delay={0.08}>
          <p className="mt-6 font-body text-base leading-relaxed text-mist">
            Karsient is building its own products and intelligent accelerators to solve recurring
            enterprise transformation problems — technology created from real-world engineering
            challenges, not designed on a whiteboard in isolation.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-2">
          {productAreas.map((a) => (
            <span
              key={a}
              className="rounded-full border border-ink-line bg-ink-soft/40 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-mist"
            >
              {a}
            </span>
          ))}
        </div>
      </section>

      {/* HOW WE THINK */}
      <section className="section-py border-y border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeading eyebrow="How we think" title="A short philosophy" align="center" />
          <div className="mt-10 space-y-5">
            {philosophy.map((line, i) => (
              <Reveal key={line} delay={i * 0.06}>
                <p className="border-l-2 border-signal/40 pl-5 font-display text-lg leading-snug text-white sm:text-xl">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="section-py container-px mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">Our vision</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
            To help enterprises continuously reinvent themselves through intelligent technology.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-mist">
            A future where legacy systems, modern cloud platforms, enterprise data, AI, and
            intelligent agents work together — rather than existing as disconnected technology
            layers.
          </p>
        </Reveal>
      </section>

      {/* CLOSING MESSAGE */}
      <section className="section-py border-t border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Karsient exists to bridge what enterprises have built with what they are capable of
              becoming.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {closingArrows.map((a) => (
              <div key={a.from} className="rounded-xl border border-ink-line bg-ink-soft/40 px-3 py-4 text-center">
                <p className="font-body text-sm text-mist">{a.from}</p>
                <p className="my-1 font-mono text-signal">&darr;</p>
                <p className="font-body text-sm font-semibold text-white">{a.to}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* HEADQUARTERS */}
      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">Where we operate</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white">Madurai, Tamil Nadu</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-ink-line bg-ink p-6 text-left">
              <p className="font-mono text-[11px] uppercase tracking-wide text-mist">Headquarters</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-mist">{site.address}</p>
              <p className="mt-3 font-body text-sm text-mist">{site.phone}</p>
              <p className="mt-1 font-body text-sm text-mist">{site.email}</p>
            </div>
            <div className="rounded-xl border border-ink-line bg-ink p-6 text-left">
              <p className="font-mono text-[11px] uppercase tracking-wide text-mist">Hubs</p>
              {site.hubs.map((h) => (
                <p key={h} className="mt-2 font-body text-sm leading-relaxed text-mist">
                  {h}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
