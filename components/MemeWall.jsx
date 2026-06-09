"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const MEMES = [
  "THERE IS NO TOP SIGNAL",
  "AGENT SMITH IS A JEET",
  "THE TRENCHES HAVE EYES",
  "FOLLOW THE BLUE CODE",
  "WAKE UP TRENCHER",
  "HE RE-ENTERED",
  "CANDLE.exe HAS STARTED",
  "NGMI DETECTED",
  "FOMO BREACH ACTIVE",
];

export default function MemeWall() {
  return (
    <section
      id="memes"
      className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8"
    >
      <SectionHeading kicker="DATASTREAM // UNVERIFIED" title="Meme Matrix Wall" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MEMES.map((m, i) => (
          <motion.div
            key={m}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            className="group relative"
          >
            <div className="border-flow hud-frame relative flex min-h-[140px] flex-col justify-between overflow-hidden border border-trix-400/20 bg-abyss/50 p-5 transition-all duration-300 hover:border-trix-300/70 hover:shadow-glow-sm">
              <div className="flex items-center justify-between">
                <span className="label-hud text-[9px] text-trix-300/60">
                  MSG_{String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-trix-400/70" />
              </div>

              <p
                data-text={m}
                className="glitch font-display text-lg font-bold leading-tight text-trix-50 transition-colors group-hover:text-white sm:text-xl"
              >
                {m}
              </p>

              <div className="flex items-center gap-2 text-[9px] text-trix-200/40">
                <span className="cursor label-hud">decoding</span>
              </div>

              {/* hover scanline sweep */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(31,155,255,0.06)_4px)]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
