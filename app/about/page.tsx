import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { whyKarsient, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Karsient Private Limited is an AI, data engineering, and cloud consulting firm based in Madurai, Tamil Nadu, serving enterprise clients globally.",
};

const values = [
  {
    title: "Precision over promises",
    detail: "We commit to what we can verify, and we say no to work we don't believe in.",
  },
  {
    title: "Engineering discipline",
    detail: "Code review, testing, and documentation are non-negotiable, even under deadline pressure.",
  },
  {
    title: "Partnership, not vendorship",
    detail: "We aim to make ourselves progressively less necessary, not more.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">About Karsient</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Built by engineers who wanted consulting done differently.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Karsient Private Limited is a Madurai-based AI, data engineering,
              and cloud consulting firm working with enterprise and
              Fortune 500 organisations worldwide. We exist to close the gap
              between data platforms that look good in a slide deck and ones
              that actually run in production.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="card-surface h-full p-8">
              <h2 className="font-display text-2xl font-semibold text-white">
                Our mission
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-mist">
                To make enterprise data trustworthy, governed, and useful —
                and to turn that foundation into AI systems that make real
                decisions, not just demos.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-surface h-full p-8">
              <h2 className="font-display text-2xl font-semibold text-white">
                Our approach
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-mist">
                We stay platform-agnostic, keep engineers embedded in every
                engagement, and build governance and observability in from the
                first sprint rather than retrofitting it later.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-py border-y border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we believe"
            title="The values behind every engagement"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card-surface h-full p-7 text-center">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-mist">
                    {v.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why clients choose us"
          title="A different kind of consulting relationship"
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {whyKarsient.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="card-surface h-full p-7">
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-mist">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow">Leadership</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                Directors
              </h2>
              <ul className="mt-6 space-y-3">
                {site.directors.map((d) => (
                  <li key={d} className="font-body text-base text-white">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="eyebrow">Headquarters</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                Madurai, Tamil Nadu
              </h2>
              <p className="mt-6 font-body text-base leading-relaxed text-mist">
                {site.address}
              </p>
              <p className="mt-3 font-body text-base text-mist">{site.phone}</p>
              <p className="mt-1 font-body text-base text-mist">{site.email}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
