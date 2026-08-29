"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error || "Something went wrong — please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="mt-4 font-body text-sm text-signal-bright">
        You&apos;re subscribed — welcome aboard.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-4">
      <div className="flex items-center gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          aria-label="Email address"
          className="focus-ring w-full rounded-full border border-ink-line bg-ink-soft px-4 py-2.5 font-body text-sm text-white placeholder:text-mist/60"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="focus-ring shrink-0 rounded-full bg-signal px-4 py-2.5 font-body text-sm font-semibold text-ink transition-colors hover:bg-signal-bright"
        >
          {status === "submitting" ? "..." : "Join"}
        </button>
      </div>
      {error && <p className="mt-1.5 font-body text-xs text-signal-bright">{error}</p>}
      {status === "error" && (
        <p className="mt-1.5 font-body text-xs text-signal-bright">
          {error || "Something went wrong — please try again."}
        </p>
      )}
    </form>
  );
}
