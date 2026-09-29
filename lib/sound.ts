"use client";

/**
 * Tiny, dependency-free "brand chime" — a short (~1.2s), soft arpeggio
 * synthesized in the browser with the Web Audio API. No audio file to
 * load, so it fires instantly. Used sparingly: the hero tagline finishing
 * its animation, and clicking into an AI-capability card — similar in
 * spirit to the short audio stingers on Netflix/Microsoft product sites.
 *
 * Respects the user's OS-level "reduce motion" preference as a proxy for
 * "please don't play surprise sounds at me", and never throws if the
 * browser blocks audio before a user gesture.
 */

let sharedCtx: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext || (window as any).webkitAudioContext;
  if (!Ctor) return null;
  if (!sharedCtx) sharedCtx = new Ctor();
  return sharedCtx;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

/** Plays a short, pleasant three-note chime. Safe to call repeatedly. */
export function playBrandChime() {
  if (prefersReducedMotion()) return;
  const ctx = getContext();
  if (!ctx) return;

  try {
    if (ctx.state === "suspended") ctx.resume();

    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 — bright, upward, brief
    const now = ctx.currentTime;
    const master = ctx.createGain();
    master.gain.value = 0.05; // deliberately quiet — a hint, not an alert
    master.connect(ctx.destination);

    notes.forEach((freq, i) => {
      const start = now + i * 0.09;
      const duration = 0.9;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(1, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      osc.connect(gain);
      gain.connect(master);
      osc.start(start);
      osc.stop(start + duration + 0.05);
    });
  } catch {
    // Audio is a nice-to-have; never let it break the page.
  }
}
