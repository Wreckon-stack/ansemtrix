"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const LINES = [
  "booting ansemtrix.exe",
  "scanning crypto twitter...",
  "detecting trench activity...",
  "influencer comeback confirmed...",
  "liquidity anomaly detected...",
  "blue matrix protocol activated...",
  "timeline status: unstable",
  "loading $TRIX...",
  "simulation breach successful",
];

// flagged lines get a colored status tag
const TAGS = {
  "influencer comeback confirmed...": { t: "OK", c: "text-trix-glow" },
  "liquidity anomaly detected...": { t: "WARN", c: "text-trix-300" },
  "timeline status: unstable": { t: "ALERT", c: "text-trix-100" },
  "simulation breach successful": { t: "DONE", c: "text-trix-glow" },
};

export default function Terminal() {
  const [typed, setTyped] = useState([]); // completed lines
  const [current, setCurrent] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [started, setStarted] = useState(false);
  const containerRef = useRef(null);
  const bodyRef = useRef(null);

  // start typing when scrolled into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (lineIdx >= LINES.length) return;

    const full = LINES[lineIdx];
    if (current.length < full.length) {
      const speed = 22 + Math.random() * 35;
      const id = setTimeout(
        () => setCurrent(full.slice(0, current.length + 1)),
        speed
      );
      return () => clearTimeout(id);
    }
    // line complete -> commit and pause
    const id = setTimeout(() => {
      setTyped((prev) => [...prev, full]);
      setCurrent("");
      setLineIdx((i) => i + 1);
    }, 320);
    return () => clearTimeout(id);
  }, [current, lineIdx, started]);

  // autoscroll body
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [typed, current]);

  const done = lineIdx >= LINES.length;

  return (
    <section
      id="terminal"
      ref={containerRef}
      className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="border-flow overflow-hidden border border-trix-400/30 bg-[#02050d]/95 shadow-glow"
      >
        {/* title bar */}
        <div className="flex items-center justify-between border-b border-trix-400/20 bg-abyss/80 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-trix-700" />
            <span className="h-3 w-3 rounded-full bg-trix-500" />
            <span className="h-3 w-3 rounded-full bg-trix-glow shadow-glow-sm" />
            <span className="label-hud ml-3 text-[10px] text-trix-200/70">
              root@ansemtrix:~ // live trench terminal
            </span>
          </div>
          <span className="label-hud animate-flicker text-[10px] text-trix-glow">
            ● LIVE
          </span>
        </div>

        {/* body */}
        <div
          ref={bodyRef}
          className="relative h-[340px] overflow-hidden p-5 font-mono text-sm leading-7 sm:text-[15px]"
        >
          {/* subtle flicker tint */}
          <div className="pointer-events-none absolute inset-0 animate-flicker bg-trix-400/[0.015]" />

          {typed.map((line, i) => {
            const tag = TAGS[line];
            return (
              <div key={i} className="flex items-start gap-2 text-trix-100/90">
                <span className="select-none text-trix-glow/80">$</span>
                <span className="flex-1">
                  {line}
                  {tag && (
                    <span className={`ml-2 text-[11px] ${tag.c}`}>
                      [{tag.t}]
                    </span>
                  )}
                </span>
              </div>
            );
          })}

          {!done && started && (
            <div className="flex items-start gap-2 text-trix-50">
              <span className="select-none text-trix-glow/80">$</span>
              <span className="flex-1">
                {current}
                <span className="cursor" />
              </span>
            </div>
          )}

          {done && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 inline-flex items-center gap-2 border border-trix-300/50 bg-trix-500/10 px-3 py-1.5 text-[11px] text-trix-glow"
            >
              <span className="h-2 w-2 animate-pulseGlow rounded-full bg-trix-glow" />
              ACCESS GRANTED — WELCOME TO THE TRENCHES
              <span className="cursor" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
