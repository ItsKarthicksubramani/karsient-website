"use client";

import { useState } from "react";
import Link from "next/link";
import { playBrandChime } from "@/lib/sound";

type IconKey = "spark" | "layers" | "compare" | "build" | "package" | "cloud" | "brain" | "target";
type QA = { q: string; a: string; icon: IconKey };

/**
 * Predefined question bank — 8 fixed Q&A pairs, no external model call yet.
 * Swap the `respond()` lookup below for a real model call (e.g. your own
 * /api/assistant route backed by a free or self-hosted LLM) once you're
 * ready to integrate one — the UI, transcript, and quick-reply list won't
 * need to change.
 */
const QA_BANK: QA[] = [
  {
    q: "What is Karsient?",
    icon: "spark",
    a: "Karsient is a next-generation AI, Data Engineering, Product Engineering, and Digital Modernization company. We help enterprises design, build, and evolve intelligent technology ecosystems — not just migrate legacy systems.",
  },
  {
    q: "What does Karsient specialize in?",
    icon: "layers",
    a: "We specialize in Enterprise AI, Generative AI, Agentic AI, Data Engineering, Cloud Modernization, Product Engineering, and Digital Transformation.",
  },
  {
    q: "How is Karsient different from traditional IT companies?",
    icon: "compare",
    a: "We go beyond traditional migration and implementation. Karsient combines AI, data, cloud, engineering, and reusable products to help enterprises modernize faster and build intelligent solutions for the future.",
  },
  {
    q: "What can Karsient help my business with?",
    icon: "build",
    a: "From modernizing legacy data platforms to building AI-powered products and intelligent enterprise solutions, Karsient helps you move from complex technology landscapes to scalable, connected, and AI-ready ecosystems.",
  },
  {
    q: "Does Karsient build products or only provide services?",
    icon: "package",
    a: "Both. Karsient combines engineering expertise with reusable technology products and accelerators that help enterprises solve modernization, data, reconciliation, AI, and transformation challenges faster.",
  },
  {
    q: "Can Karsient modernize our existing data platform?",
    icon: "cloud",
    a: "Yes. We help enterprises modernize legacy platforms and data pipelines into scalable cloud and lakehouse architectures using technologies such as Databricks, cloud platforms, modern data engineering, and AI.",
  },
  {
    q: "How can Karsient help us adopt AI?",
    icon: "brain",
    a: "We help organizations move beyond AI experimentation into production-ready Enterprise AI — from Generative AI and Machine Learning to Agentic AI, intelligent data platforms, AI applications, and AI-powered business workflows.",
  },
  {
    q: "Why should I choose Karsient?",
    icon: "target",
    a: "Because we engineer for what comes next. Karsient brings together AI, data, cloud, product engineering, and modernization to transform today's technology challenges into tomorrow's intelligent enterprise solutions.",
  },
];

function QuestionIcon({ icon }: { icon: IconKey }) {
  const common = "h-4 w-4";
  switch (icon) {
    case "layers":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 2 7l10 5 10-5-10-5Z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "compare":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3v18M16 3v18M3 8h5M16 8h5M3 16h5M16 16h5" />
        </svg>
      );
    case "build":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-3-3z" />
        </svg>
      );
    case "package":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8 12 3 3 8l9 5 9-5Z" />
          <path d="M3 8v8l9 5 9-5V8M12 13v8" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.5A4.5 4.5 0 0 0 6.5 19h11Z" />
        </svg>
      );
    case "brain":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-1 5.83V15a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a2 2 0 0 0-2-2Z" />
          <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 1 5.83V15a3 3 0 0 1-3 3 3 3 0 0 1-3-3V6a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M21 12h-3" />
        </svg>
      );
    case "spark":
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor">
          <path d="M12 2c.4 3.6 1.9 5.6 5 6-3.1.4-4.6 2.4-5 6-.4-3.6-1.9-5.6-5-6 3.1-.4 4.6-2.4 5-6Z" />
          <path d="M19 3c.2 1.6.8 2.5 2.2 2.7-1.4.2-2 1.1-2.2 2.7-.2-1.6-.8-2.5-2.2-2.7 1.4-.2 2-1.1 2.2-2.7Z" />
          <path d="M5.5 15c.2 1.6.8 2.5 2.2 2.7-1.4.2-2 1.1-2.2 2.7-.2-1.6-.8-2.5-2.2-2.7 1.4-.2 2-1.1 2.2-2.7Z" />
        </svg>
      );
  }
}

/** Sparkle mark used as the assistant's avatar — big center sparkle in white, two smaller supporting sparkles in black. */
function SparkMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M5.5 15c.2 1.6.8 2.5 2.2 2.7-1.4.2-2 1.1-2.2 2.7-.2-1.6-.8-2.5-2.2-2.7 1.4-.2 2-1.1 2.2-2.7Z"
        fill="#0B0B0B"
        transform="scale(1.1)"
        transform-origin="6.5 18.5"
      />
      <path
        d="M19 3c.2 1.6.8 2.5 2.2 2.7-1.4.2-2 1.1-2.2 2.7-.2-1.6-.8-2.5-2.2-2.7 1.4-.2 2-1.1 2.2-2.7Z"
        fill="#0B0B0B"
        transform="scale(1.1)"
        transform-origin="20 6.5"
      />
      <path
        d="M12 2c.4 3.6 1.9 5.6 5 6-3.1.4-4.6 2.4-5 6-.4-3.6-1.9-5.6-5-6 3.1-.4 4.6-2.4 5-6Z"
        fill="#fff"
        transform="scale(1.18)"
        transform-origin="12 8"
      />
    </svg>
  );
}

/** Arrow mark used elsewhere on the site (e.g. the homepage journey diagram), reused here for consistency. */
function ArrowMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([]);
  const [input, setInput] = useState("");

  function respond(question: string) {
    setMessages((m) => [...m, { from: "user", text: question }]);
    const match = QA_BANK.find((qa) => qa.q.toLowerCase() === question.toLowerCase());
    const fallback =
      "That's a great question for our team directly — tap \"Talk to a Karsient Expert\" below and we'll follow up within one business day. (This assistant currently answers from a fixed set of common questions; a full model integration is coming soon.)";
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: match ? match.a : fallback }]);
    }, 350);
  }

  function toggleOpen() {
    playBrandChime();
    setOpen((v) => !v);
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[32rem] w-[21rem] flex-col overflow-hidden rounded-[22px] border border-ink-line bg-ink shadow-2xl shadow-black/60 sm:w-[23rem]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-ink-line bg-ink-soft/60 px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-signal-gradient shadow-[0_0_18px_-2px_rgba(255,106,0,0.6)]">
                <SparkMark className="h-7 w-7" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-white">Karsient AI</p>
                <p className="flex items-center gap-1 font-body text-[11px] text-mist">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="focus-ring rounded-md p-1 text-mist hover:text-white"
            >
              &times;
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <div className="rounded-2xl bg-ink-soft/60 px-4 py-3 font-body text-sm leading-relaxed text-white">
              Hi there! 👋
              <br />
              I&apos;m <span className="font-semibold text-signal">Karsient AI</span>.
              <br />
              How can I help you today?
            </div>

            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 font-body text-sm leading-relaxed ${
                  m.from === "bot" ? "bg-ink-soft/60 text-mist" : "ml-auto bg-signal/20 text-white"
                }`}
              >
                {m.text}
              </div>
            ))}

            <div className="space-y-2 pt-1">
              {QA_BANK.map((qa) => (
                <button
                  key={qa.q}
                  type="button"
                  onClick={() => respond(qa.q)}
                  className="focus-ring group flex w-full items-center gap-3 rounded-xl border border-ink-line bg-ink-soft/40 px-3 py-2.5 text-left transition-colors hover:border-signal/50 hover:bg-signal/[0.06]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal">
                    <QuestionIcon icon={qa.icon} />
                  </span>
                  <span className="flex-1 font-body text-[13px] leading-snug text-white">{qa.q}</span>
                  <span aria-hidden="true" className="text-signal transition-transform group-hover:translate-x-0.5">
                    &rsaquo;
                  </span>
                </button>
              ))}
            </div>

            <Link
              href="/contact"
              className="btn-primary group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.55)_50%,transparent_65%)] bg-[length:250%_100%] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine" />
              <ArrowMark />
              <span className="relative">Talk to a Karsient Expert</span>
            </Link>
          </div>

          {/* Input */}
          <div className="border-t border-ink-line p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const trimmed = input.trim();
                if (!trimmed) return;
                respond(trimmed);
                setInput("");
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Karsient…"
                className="focus-ring w-full rounded-full border border-ink-line bg-ink-soft/50 px-4 py-2.5 font-body text-sm text-white placeholder:text-mist/60"
              />
              <button
                type="submit"
                aria-label="Send"
                className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal-gradient text-ink transition-transform hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
                  <path d="M3 12 21 3l-6 18-3.6-7.4L3 12Z" />
                </svg>
              </button>
            </form>
            <p className="mt-2.5 text-center font-body text-[11px] text-mist/60">Powered by Karsient AI</p>
          </div>
        </div>
      )}

      {/* Trigger */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-label={open ? "Close chat assistant" : "Open Karsient AI assistant"}
        className="group relative flex h-14 w-14 items-center justify-center"
      >
        {!open && (
          <>
            <span className="absolute inset-0 animate-ping rounded-full bg-signal/40" style={{ animationDuration: "2.4s" }} />
            <span className="absolute -inset-2 rounded-full bg-signal/15 blur-md" />
          </>
        )}
        <span className="focus-ring relative flex h-14 w-14 items-center justify-center rounded-full bg-signal-gradient text-ink shadow-lg shadow-black/40 transition-transform group-hover:scale-105">
          {open ? <span className="text-2xl leading-none">&times;</span> : <SparkMark className="h-9 w-9" />}
        </span>
      </button>
    </div>
  );
}
