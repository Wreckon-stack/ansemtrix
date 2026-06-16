"use client";

import { motion } from "framer-motion";
import GlitchButton from "./GlitchButton";

export default function FinalCTA() {
  return (
    <section
      id="enter"
      className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-32 text-center sm:px-8"
    >
      {/* radial glow backing */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-trix-500/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <span className="mb-6 inline-flex items-center gap-2 border border-trix-400/30 bg-abyss/60 px-3 py-1.5 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulseGlow rounded-full bg-trix-glow" />
          <span className="label-hud text-[10px] text-trix-200/80">
            FINAL TRANSMISSION
          </span>
        </span>

        <h2
          data-text="YOU ARE STILL EARLY IN THE SIMULATION"
          className="glitch font-display text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-6xl"
        >
          You Are Still Early
          <br />
          In The Simulation
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-trix-100/70 sm:text-lg">
          The blue code is falling. The trenches are awake. The comeback has
          already begun.
        </p>

        <div className="mt-10">
          <GlitchButton
            href="#goat"
            className="px-10 py-5 text-sm shadow-glow-lg"
          >
            Enter $ANSEM TRIX
          </GlitchButton>
        </div>

        <p className="mt-6 font-mono text-[11px] text-trix-200/40">
          <span className="cursor">connection secured</span>
        </p>
      </motion.div>
    </section>
  );
}
