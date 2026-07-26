import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { site, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Karsient — reach our Madurai, Tamil Nadu office by email, phone, or the contact form.",
};

const contactPoints = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: `tel:+${site.phoneRaw}` },
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: `https://wa.me/${site.phoneRaw}`,
  },
  { label: "Office", value: site.address, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-grid-glow">
        <div className="container-px mx-auto max-w-4xl py-24 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Let&apos;s build the future together.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-mist">
              Tell us about your data platform, your AI ambitions, or the
              problem you can&apos;t quite name yet. We reply within one
              business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="card-surface p-8">
              <h2 className="font-display text-2xl font-semibold text-white">
                Book a consultation
              </h2>
              <p className="mt-2 font-body text-sm text-mist">
                Fill in the form and a member of our team will follow up
                shortly.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.06}>
              <div className="card-surface p-7">
                <h3 className="font-display text-lg font-semibold text-white">
                  Reach us directly
                </h3>
                <ul className="mt-5 space-y-4">
                  {contactPoints.map((point) => (
                    <li key={point.label}>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
                        {point.label}
                      </p>
                      {point.href ? (
                        <a
                          href={point.href}
                          target={point.href.startsWith("http") ? "_blank" : undefined}
                          rel={point.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="focus-ring mt-1 block rounded-md font-body text-sm text-white hover:text-signal"
                        >
                          {point.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-body text-sm text-white">{point.value}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="card-surface overflow-hidden">
                <iframe
                  title="Karsient office location"
                  src="https://www.google.com/maps?q=21%2F114+Sammattipuram+Main+Road+Madurai+Tamil+Nadu+625016&output=embed"
                  className="h-64 w-full grayscale invert-[0.92] contrast-[1.1]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-py border-t border-ink-line bg-ink-soft/30">
        <div className="container-px mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Frequently asked"
            title="Questions before you reach out"
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
