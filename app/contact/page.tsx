import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { site, faqs } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Karsient | Talk to an Enterprise Expert",
  description:
    "Connect with Karsient principal architects to discuss data engineering, Databricks migrations, and production AI initiatives. Hubs in Bengaluru, Chennai, and Madurai.",
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero */}
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-20 text-center sm:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/[0.08] px-3.5 py-1">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
                Enterprise Engagement
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build the future together.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-mist max-w-2xl mx-auto">
              Tell us about your data platform challenges, modernization roadmap, or production AI initiatives. Our principal architects respond within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Split Section: Details (Left) + Form (Right) */}
      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.35fr]">
          {/* Left Column: Direct Communication Channels & Locations */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-ink-line/80 bg-ink-soft/40 p-8 backdrop-blur-xl">
              <span className="badge-saffron">Direct Channels</span>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                Connect Directly With Our Team
              </h3>
              <p className="mt-2 font-body text-xs text-mist leading-relaxed">
                Whether you prefer email, telephone, or real-time messaging, reach our global engagement desk directly.
              </p>

              <div className="mt-6 space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3 rounded-xl border border-ink-line/60 bg-ink p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal font-mono text-sm">
                    ✉
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-mist block">
                      Enterprise Inquiries
                    </span>
                    <a
                      href={`mailto:${site.email}`}
                      className="font-body text-sm font-medium text-white hover:text-signal transition-colors"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 rounded-xl border border-ink-line/60 bg-ink p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal font-mono text-sm">
                    ☎
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-mist block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:+${site.phoneRaw}`}
                      className="font-body text-sm font-medium text-white hover:text-signal transition-colors"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 rounded-xl border border-ink-line/60 bg-ink p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366] font-mono text-sm">
                    💬
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-mist block">
                      WhatsApp Messaging
                    </span>
                    <a
                      href={`https://wa.me/${site.phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm font-medium text-white hover:text-[#25D366] transition-colors"
                    >
                      Chat with Karsient on WhatsApp &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* India Engineering Hub Locations */}
            <div className="rounded-3xl border border-ink-line/80 bg-ink-soft/40 p-8 backdrop-blur-xl">
              <span className="badge-cyan">India Innovation Hubs</span>
              <h4 className="mt-3 font-display text-xl font-bold text-white">
                Delivery &amp; Headquarters
              </h4>

              <div className="mt-5 space-y-4">
                <div className="border-b border-ink-line/50 pb-3">
                  <span className="font-display text-sm font-semibold text-white block">
                    Corporate Headquarters
                  </span>
                  <p className="font-body text-xs text-mist mt-0.5 leading-relaxed">
                    {site.address}
                  </p>
                </div>

                <div className="border-b border-ink-line/50 pb-3">
                  <span className="font-display text-sm font-semibold text-white block">
                    Bengaluru AI Innovation Hub
                  </span>
                  <p className="font-body text-xs text-mist mt-0.5">
                    Karnataka, India &middot; Generative AI &amp; Agent Workflows
                  </p>
                </div>

                <div>
                  <span className="font-display text-sm font-semibold text-white block">
                    Chennai Engineering Center
                  </span>
                  <p className="font-body text-xs text-mist mt-0.5">
                    Tamil Nadu, India &middot; Lakehouse Platforms &amp; Modernization
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enterprise Contact Form */}
          <div>
            <div className="rounded-3xl border border-ink-line/80 bg-ink-soft/50 p-8 backdrop-blur-xl shadow-2xl">
              <div className="border-b border-ink-line/70 pb-4 mb-6">
                <span className="badge-saffron">Consultation Scope</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  Talk to a Karsient Expert
                </h3>
                <p className="mt-1 font-body text-xs text-mist">
                  Provide your enterprise project scope and our solutions architects will prepare targeted recommendations for our discovery call.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py border-t border-ink-line bg-ink-soft/20">
        <div className="container-px mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Questions Before You Reach Out"
            align="center"
          />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
