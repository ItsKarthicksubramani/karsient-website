import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGroupPage } from "@/components/templates/ServiceGroupPage";
import { databricksConsultingGroup, engagementModels, industries } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/services/databricks-consulting" },
  title: "Databricks Consulting",
  description: databricksConsultingGroup.description,
};

export default function DatabricksConsultingPage() {
  return (
    <ServiceGroupPage
      group={databricksConsultingGroup}
      extraSections={
        <>
          <section className="section-py border-t border-ink-line bg-ink-soft/30">
            <div className="container-px mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Industries"
                title="Where we help"
                description="Pattern-matched Databricks experience across the industries we serve."
              />
              <div className="mt-10 flex flex-wrap gap-3">
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="focus-ring rounded-full border border-ink-line bg-ink px-4 py-2 font-body text-sm text-mist transition-colors hover:border-signal/50 hover:text-signal"
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="section-py container-px mx-auto max-w-7xl">
            <SectionHeading eyebrow="Engagement models" title="How you can work with us" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {engagementModels.map((m, i) => (
                <Reveal key={m.title} delay={(i % 3) * 0.06}>
                  <div className="card-surface h-full p-6">
                    <h3 className="font-display text-base font-semibold text-white">{m.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-mist">{m.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </>
      }
    />
  );
}
