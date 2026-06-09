"use client";

import { motion } from "framer-motion";

const LABELS = [
  { text: "TRENCH SIGNAL: LIVE", top: "18%", left: "4%", delay: 0 },
  { text: "MATRIX BREACH: CONFIRMED", top: "62%", left: "3%", delay: 0.6 },
  { text: "LIQUIDITY PULSE: DETECTED", top: "34%", right: "4%", delay: 1.1 },
  { text: "STATUS: BULLISH", top: "76%", right: "5%", delay: 1.6 },
];

/** Floating HUD labels pinned around the hero viewport (desktop only). */
export default function HudLabels() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {LABELS.map((l) => (
        <motion.div
          key={l.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: l.delay, duration: 0.8 }}
          style={{ top: l.top, left: l.left, right: l.right }}
          className="absolute"
        >
          <div className="label-hud flex items-center gap-2 text-[10px] text-trix-200/80 animate-floaty">
            <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-trix-glow" />
            <span className="border border-trix-400/25 bg-abyss/60 px-2 py-1 backdrop-blur-sm">
              {l.text}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
