"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const LINES = [
  "They said the trenches were dead.",
  "They said the timeline was cooked.",
  "Then he came back.",
  "One post. One candle. One blue pill.",
  "The memecoin matrix rebooted.",
];

const FRAGMENTS = [
  "0x41 0x4E 0x53 0x45 0x4D",
  "while(faded){ rebuy(); }",
  "SIGNAL ▸ ACQUIRED",
  "trench.reload()",
  "if(top) return false;",
  "blue_pill == true",
];

export default function Prophecy() {
  return (
    <section
      id="prophecy"
      className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8"
    >
      <SectionHeading kicker="CLASSIFIED // EYES ONLY" title="The Prophecy" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* classified file */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass hud-frame relative col-span-1 overflow-hidden p-6 sm:p-8 lg:col-span-2"
        >
          <div className="mb-5 flex items-center justify-between border-b border-trix-400/20 pb-3">
            <span className="label-hud text-[10px] text-trix-300/80">
              FILE: prophecy.txt
            </span>
            <span className="label-hud animate-flicker text-[10px] text-trix-glow">
              DECRYPTED
            </span>
          </div>

          <div className="space-y-3 font-mono text-lg leading-relaxed text-trix-50 sm:text-2xl">
            {LINES.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="neon-text"
              >
                <span className="mr-3 select-none text-trix-400/50">{">"}</span>
                {line}
              </motion.p>
            ))}
            <p className="pt-2 font-mono text-base text-trix-200/60">
              <span className="cursor">_</span>
            </p>
          </div>

          {/* watermark */}
          <span className="pointer-events-none absolute -right-4 bottom-2 select-none font-display text-7xl font-black text-trix-400/5 sm:text-9xl">
            $TRIX
          </span>
        </motion.div>

        {/* glitching code fragments */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {FRAGMENTS.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass group flex items-center gap-2 border border-trix-400/20 px-4 py-3 font-mono text-xs text-trix-200/80 transition-colors hover:border-trix-300/60 hover:text-trix-glow"
            >
              <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-trix-400/70" />
              <span className="group-hover:animate-glitchShift">{f}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
