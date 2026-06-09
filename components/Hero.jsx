"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import GlitchButton from "./GlitchButton";
import HudLabels from "./HudLabels";

export default function Hero() {
  const ref = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setParallax({ x, y });
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"
    >
      <HudLabels />

      {/* circuit / HUD lines */}
      <div className="pointer-events-none absolute inset-0 -z-[1] opacity-30">
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-trix-400/30 to-transparent" />
        <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-trix-400/20 to-transparent" />
        <div className="absolute left-0 top-2/3 h-px w-full bg-gradient-to-r from-transparent via-trix-400/15 to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* LEFT: copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 order-2 lg:order-1"
          style={{
            transform: `translate(${parallax.x * -14}px, ${parallax.y * -14}px)`,
          }}
        >
          <div className="mb-5 inline-flex items-center gap-2 border border-trix-400/30 bg-abyss/60 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 animate-flicker rounded-full bg-trix-glow shadow-glow-sm" />
            <span className="label-hud text-[10px] text-trix-200/90">
              SYSTEM ONLINE // SOLANA
            </span>
          </div>

          <h1
            data-text="ANSEMTRIX"
            className="glitch font-display text-5xl font-black leading-none tracking-tight text-white sm:text-7xl xl:text-8xl"
          >
            ANSEMTRIX
          </h1>

          <p className="mt-4 font-display text-base font-bold uppercase tracking-[0.28em] text-trix-200 sm:text-lg">
            The Comeback Broke The Simulation
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-trix-100/70 sm:text-base">
            He came back. The trenches reloaded. The simulation turned blue. One
            post cracked the timeline. The memecoin matrix rebooted.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <GlitchButton href="#prophecy">Enter The Matrix</GlitchButton>
            <GlitchButton href="#goat" variant="ghost">
              Buy $TRIX
            </GlitchButton>
            <GlitchButton href="#goat" variant="ghost">
              View Chart
            </GlitchButton>
          </div>

          <div className="mt-8 flex items-center gap-4 text-[10px] text-trix-200/50">
            <span className="label-hud">$TRIX</span>
            <span className="h-px w-10 bg-trix-400/30" />
            <span className="label-hud cursor">CA: COMING_SOON</span>
          </div>
        </motion.div>

        {/* RIGHT: hero image in cyber frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-lg"
          style={{
            transform: `translate(${parallax.x * 18}px, ${parallax.y * 18}px)`,
          }}
        >
          <div className="hud-frame border-flow relative aspect-square overflow-hidden border border-trix-400/30 bg-abyss/40 shadow-glow-lg">
            {/* the face of the simulation */}
            <img
              src="/hero.png"
              alt="ANSEMTRIX — the face of the simulation"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            {/* fallback if image not added yet */}
            <div
              style={{ display: "none" }}
              className="absolute inset-0 hidden flex-col items-center justify-center gap-3 bg-gradient-to-br from-navy/60 to-abyss text-center"
            >
              <span className="text-5xl">👁️</span>
              <p className="label-hud px-6 text-xs text-trix-200/70">
                drop hero.png into <br /> /public to load the simulation
              </p>
            </div>

            {/* eye light rays overlay */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[30%] top-[42%] h-[2px] w-[55%] -translate-y-1/2 bg-gradient-to-r from-trix-glow via-trix-300/70 to-transparent blur-[1px] animate-flicker" />
              <div className="absolute left-[44%] top-[42%] h-2 w-2 rounded-full bg-white shadow-[0_0_24px_8px_rgba(95,208,255,0.9)] animate-pulseGlow" />
              <div className="absolute left-[54%] top-[42%] h-2 w-2 rounded-full bg-white shadow-[0_0_24px_8px_rgba(95,208,255,0.9)] animate-pulseGlow" />
            </div>

            {/* code overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 font-mono text-[9px] text-trix-200/60">
              <span>ID: ANSEM.0x9B</span>
              <span className="animate-flicker">REC ●</span>
            </div>
          </div>

          {/* floating sat tags */}
          <div className="absolute -left-4 top-6 hidden border border-trix-400/30 bg-abyss/70 px-2 py-1 text-[9px] text-trix-200/70 backdrop-blur-sm sm:block animate-floaty label-hud">
            FACE_ID: LOCKED
          </div>
          <div className="absolute -right-3 bottom-10 hidden border border-trix-400/30 bg-abyss/70 px-2 py-1 text-[9px] text-trix-200/70 backdrop-blur-sm sm:block animate-floaty label-hud">
            BLUE PILL: ACTIVE
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
        <div className="mx-auto h-8 w-px animate-pulse bg-gradient-to-b from-trix-glow to-transparent" />
        <span className="label-hud text-[9px] text-trix-200/50">SCROLL</span>
      </div>
    </section>
  );
}
