"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "company" | "message", string>>;

const areasOfInterest = [
  "Legacy Modernization (Databricks / Lakehouse)",
  "Data Engineering & Streaming Pipelines",
  "Enterprise AI & Generative AI Copilots",
  "Agentic AI Workflows & RAG Systems",
  "Databricks / Cloud Cost & Performance Optimization",
  "Karsient Product Suite (ShiftIQ, CodeShift, RevoCode, Veriq)",
  "Managed Data & AI Services",
  "Architecture Assessment / Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid enterprise work email.";
    }
    if (message.length < 10) {
      next.message = "Please provide brief details on your project or question (10+ chars).";
    }

    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setErrorMessage(body?.error || "Unable to send message. Please try again or email us directly.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-signal/40 bg-ink-soft/60 p-8 text-center backdrop-blur-md">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-signal/15 text-signal font-bold text-xl">
          ✓
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-white">
          Message Received
        </h3>
        <p className="mt-2 font-body text-sm text-mist max-w-md mx-auto">
          A Karsient Technical Director or Principal Architect will follow up with you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6 text-xs"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {/* Name & Work Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-mist">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="focus-ring mt-1.5 w-full rounded-xl border border-ink-line bg-ink px-4 py-3 font-body text-sm text-white placeholder:text-mist/50 transition-colors hover:border-ink-line/80 focus:border-signal"
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 font-body text-xs text-signal">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-mist">
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="focus-ring mt-1.5 w-full rounded-xl border border-ink-line bg-ink px-4 py-3 font-body text-sm text-white placeholder:text-mist/50 transition-colors hover:border-ink-line/80 focus:border-signal"
            placeholder="your.name@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 font-body text-xs text-signal">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company & Role */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="font-mono text-xs uppercase tracking-wider text-mist">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="focus-ring mt-1.5 w-full rounded-xl border border-ink-line bg-ink px-4 py-3 font-body text-sm text-white placeholder:text-mist/50 transition-colors hover:border-ink-line/80 focus:border-signal"
            placeholder="Enterprise Organization"
          />
        </div>

        <div>
          <label htmlFor="role" className="font-mono text-xs uppercase tracking-wider text-mist">
            Your Role / Title
          </label>
          <input
            id="role"
            name="role"
            type="text"
            className="focus-ring mt-1.5 w-full rounded-xl border border-ink-line bg-ink px-4 py-3 font-body text-sm text-white placeholder:text-mist/50 transition-colors hover:border-ink-line/80 focus:border-signal"
            placeholder="e.g. CTO / Head of Data / Architect"
          />
        </div>
      </div>

      {/* Area of Interest */}
      <div>
        <label htmlFor="interest" className="font-mono text-xs uppercase tracking-wider text-mist">
          Primary Area of Interest
        </label>
        <select
          id="interest"
          name="interest"
          className="focus-ring mt-1.5 w-full rounded-xl border border-ink-line bg-ink px-4 py-3 font-body text-sm text-white transition-colors hover:border-ink-line/80 focus:border-signal"
          defaultValue={areasOfInterest[0]}
        >
          {areasOfInterest.map((area) => (
            <option key={area} value={area} className="bg-ink text-white">
              {area}
            </option>
          ))}
        </select>
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-mist">
          Project Description &middot; Key Challenges *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="focus-ring mt-1.5 w-full rounded-xl border border-ink-line bg-ink px-4 py-3 font-body text-sm text-white placeholder:text-mist/50 transition-colors hover:border-ink-line/80 focus:border-signal"
          placeholder="Briefly describe your current environment, target platforms, or project objectives..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 font-body text-xs text-signal">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-xs text-rose-300">
          {errorMessage || "An unexpected error occurred. Please reach us at contact@karsient.com."}
        </div>
      )}

      {/* CTA Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full text-center"
        >
          {status === "submitting" ? "Submitting Inquiry..." : "Start the Conversation \u2192"}
        </button>
      </div>

      <p className="text-center font-mono text-[11px] text-mist/60">
        Enterprise Confidentiality Assured &middot; Direct Technical Follow-Up
      </p>
    </form>
  );
}
