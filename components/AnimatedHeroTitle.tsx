"use client";

import { motion } from "framer-motion";

const LETTER_STAGGER = 0.035;
const LETTER_DURATION = 0.55;
const LINE_ONE_DURATION = 0.7;
const LINE_PAUSE = 0.3;

/**
 * Two-line hero title with two distinct entrance styles:
 *  - Line 1 sweeps in as a single unit, left to right (clip-path reveal + slide).
 *  - After a short pause, line 2 drops in letter by letter, top to bottom.
 * Font, size, and color are entirely controlled by the className props —
 * this component only adds motion.
 */
export function AnimatedHeroTitle({
  lineOne,
  lineTwo,
  lineOneClassName,
  lineTwoClassName,
  startDelay = 0,
}: {
  lineOne: string;
  lineTwo: string;
  lineOneClassName?: string;
  lineTwoClassName?: string;
  startDelay?: number;
}) {
  const lineTwoBaseDelay = startDelay + LINE_ONE_DURATION + LINE_PAUSE;

  return (
    <>
      <span className="sr-only">
        {lineOne} {lineTwo}
      </span>

      {/* Line 1 — single sweep, left to right */}
      <motion.span
        aria-hidden="true"
        className="block overflow-hidden"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ delay: startDelay, duration: LINE_ONE_DURATION, ease: [0.65, 0, 0.35, 1] }}
      >
        <motion.span
          className={`block ${lineOneClassName ?? ""}`}
          initial={{ x: -24 }}
          animate={{ x: 0 }}
          transition={{ delay: startDelay, duration: LINE_ONE_DURATION, ease: [0.65, 0, 0.35, 1] }}
        >
          {lineOne}
        </motion.span>
      </motion.span>

      {/* Line 2 — letters fall in, top to bottom, one by one */}
      <span aria-hidden="true" className="block">
        {lineTwo.split("").map((ch, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: lineTwoBaseDelay + i * LETTER_STAGGER,
              duration: LETTER_DURATION,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`inline-block whitespace-pre ${lineTwoClassName ?? ""}`}
          >
            {ch}
          </motion.span>
        ))}
      </span>
    </>
  );
}
