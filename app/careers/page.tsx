import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at Karsient — join a team of data engineers, AI practitioners, and cloud architects working with enterprise clients.",
};

const openRoles = [
  { title: "Senior Data Engineer", location: "Madurai / Remote", type: "Full-time" },
  { title: "Databricks Solutions Architect", location: "Madurai / Remote", type: "Full-time" },
  { title: "Machine Learning Engineer", location: "Madurai / Remote", type: "Full-time" },
  { title: "Cloud Platform Consultant", location: "Remote", type: "Contract" },
  { title: "BI & Analytics Consultant", location: "Madurai / Remote", type: "Full-time" },
];

const perks = [
  { title: "Real client ownership", detail: "Work directly with enterprise clients from week one, not behind three layers of account management." },
  { title: "Modern stack, always", detail: "We invest in current tooling — Databricks, modern orchestration, and current LLM tooling." },
  { title: "Remote-friendly", detail: "Most roles support remote or hybrid work with our Madurai office as the hub." },
  { title: "Growth budget", detail: "Certifications, conferences, and courses supported for every engineer." },
];

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">Careers</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Build the platforms enterprises run on.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              We&apos;re a small, technical team that would rather ship than
              present. If that sounds like your kind of consulting, we&apos;d like
              to talk.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py border-b border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why Karsient" title="What it's like on the team" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="card-surface h-full p-7">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-mist">
                    {p.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Open roles" title="Current opportunities" />
        <div className="mt-10 divide-y divide-ink-line border-y border-ink-line">
          {openRoles.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.05}>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  `Application: ${role.title}`
                )}`}
                className="focus-ring group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {role.title}
                  </h3>
                  <p className="mt-1 font-body text-sm text-mist">
                    {role.location} &middot; {role.type}
                  </p>
                </div>
                <span className="font-body text-sm font-medium text-signal opacity-80 transition-opacity group-hover:opacity-100">
                  Apply via email &rarr;
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 font-body text-sm text-mist">
            Don&apos;t see a fit? Send your resume and a short note to{" "}
            <a href={`mailto:${site.email}`} className="focus-ring rounded-md text-signal">
              {site.email}
            </a>{" "}
            — we keep strong applications on file for future openings.
          </p>
        </Reveal>
      </section>
    </>
  );
}
