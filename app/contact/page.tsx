import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { site, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a Karsient expert — reach our Madurai, Tamil Nadu office by email, phone, or the contact form.",
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
  { label: "Technology & Innovation Hub", value: site.hubs.join(" \u00b7 "), href: undefined },
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
                Talk to a Karsient Expert
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
                    <li key={point.label} className="flex items-start gap-3">
                      {point.label === "WhatsApp" && (
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-ink">
                            <path d="M12.04 2.5c-5.26 0-9.54 4.28-9.54 9.55 0 1.68.44 3.32 1.28 4.77L2.5 21.5l4.85-1.27a9.5 9.5 0 0 0 4.69 1.23h.01c5.27 0 9.55-4.28 9.55-9.55 0-2.55-1-4.95-2.8-6.75a9.5 9.5 0 0 0-6.76-2.66zm5.6 13.63c-.24.66-1.4 1.27-1.93 1.34-.5.07-1.11.1-1.79-.11a16.4 16.4 0 0 1-1.75-.65c-3.08-1.33-5.08-4.43-5.24-4.63-.15-.2-1.25-1.67-1.25-3.18 0-1.52.8-2.26 1.08-2.57.28-.3.62-.38.83-.38l.6.01c.19.01.44-.07.69.53.24.6.83 2.07.9 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.24.66-.15.27.1 1.71.81 2 .96.3.15.5.22.57.35.07.13.07.72-.17 1.38z" />
                          </svg>
                        </span>
                      )}
                      {point.label === "Technology & Innovation Hub" && (
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-line text-signal">
                          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5">
                            <g fill="none" stroke="currentColor" strokeWidth="1.6">
                              <circle cx="12" cy="12" r="9" />
                              <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3Z" />
                            </g>
                          </svg>
                        </span>
                      )}
                      <div>
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
                      </div>
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
