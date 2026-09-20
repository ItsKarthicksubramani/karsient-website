"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (message.length < 10) next.message = "Tell us a little more (10+ characters).";

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
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.error || "Request failed");
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
      <div className="card-surface p-8 text-center">
        <p className="font-display text-xl font-semibold text-white">
          Thanks — message received.
        </p>
        <p className="mt-2 font-body text-sm text-mist">
          A member of our team will follow up within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-body text-sm font-medium text-white">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="focus-ring mt-2 w-full rounded-lg border border-ink-line bg-ink-soft px-4 py-3 font-body text-sm text-white placeholder:text-mist/60"
            placeholder="Jordan Rivera"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 font-body text-xs text-signal-bright">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="font-body text-sm font-medium text-white">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="focus-ring mt-2 w-full rounded-lg border border-ink-line bg-ink-soft px-4 py-3 font-body text-sm text-white placeholder:text-mist/60"
            placeholder="jordan@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 font-body text-xs text-signal-bright">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="font-body text-sm font-medium text-white">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="focus-ring mt-2 w-full rounded-lg border border-ink-line bg-ink-soft px-4 py-3 font-body text-sm text-white placeholder:text-mist/60"
            placeholder="Acme Corporation"
          />
        </div>
        <div>
          <label htmlFor="service" className="font-body text-sm font-medium text-white">
            Area of interest
          </label>
          <select
            id="service"
            name="service"
            className="focus-ring mt-2 w-full rounded-lg border border-ink-line bg-ink-soft px-4 py-3 font-body text-sm text-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-body text-sm font-medium text-white">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="focus-ring mt-2 w-full rounded-lg border border-ink-line bg-ink-soft px-4 py-3 font-body text-sm text-white placeholder:text-mist/60"
          placeholder="What are you trying to solve, and what timeline are you working with?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 font-body text-xs text-signal-bright">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <p className="font-body text-sm text-signal-bright" role="alert">
          {errorMessage || "Something went wrong — please try again, or email us directly."}
        </p>
      )}
    </form>
  );
}
