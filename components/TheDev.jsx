"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const X_URL = "https://x.com/coltraneway";

const STATS = [
  { k: "CALLSIGN", v: "coltraneway" },
  { k: "ROLE", v: "THE DEV" },
  { k: "STATUS", v: "SHIPPING", alert: true },
  { k: "BUILD", v: "BLUE PROTOCOL // v1" },
];

export default function TheDev() {
  return (
    <section
      id="dev"
      className="relative mx-auto w-full max-w-5xl px-5 py-24 sm:px-8"
    >
      <SectionHeading kicker="BUILD NODE // ARCHITECT" title="The Dev" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="glass-strong border-flow hud-frame relative overflow-hidden border border-trix-400/30 shadow-glow"
      >
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-trix-400/20 bg-abyss/60 px-5 py-3">
          <span className="label-hud text-[10px] text-trix-200/70">
            compiling://build.node
          </span>
          <span className="label-hud animate-flicker text-[10px] text-trix-glow">
            ◈ DEPLOY READY
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 p-6 sm:p-10 md:grid-cols-5">
          {/* code glyph panel */}
          <div className="md:col-span-2 md:order-2">
            <div className="hud-frame relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden border border-trix-400/30 bg-gradient-to-br from-navy/60 to-abyss shadow-glow-lg">
              {/* terminal-style code art (no photo for the dev) */}
              <div className="absolute inset-0 flex flex-col justify-center gap-1.5 p-5 font-mono text-[10px] leading-relaxed text-trix-200/70">
                <span className="text-trix-glow">$ deploy --chain solana</span>
                <span>{"> mint($ANSEM TRIX)"}</span>
                <span>{"> liquidity.lock()"}</span>
                <span>{"> renounce()"}</span>
                <span className="text-trix-glow">{"> simulation.push()"}</span>
                <span className="cursor">{"> "}</span>
              </div>
              {/* scan sweep */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 -translate-y-full bg-gradient-to-b from-transparent via-trix-glow/20 to-transparent animate-scan" />
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(31,155,255,0.05)_4px)]" />
              <span className="pointer-events-none absolute bottom-3 right-3 font-display text-2xl font-black text-trix-400/20">
                {"</>"}
              </span>
            </div>
          </div>

          {/* copy + stats + link */}
          <div className="md:col-span-3 md:order-1">
            <p className="font-mono text-sm leading-relaxed text-trix-100/80 sm:text-base">
              <span className="mr-2 select-none text-trix-400/50">{">"}</span>
              Behind the blue code sits the architect. Wired the protocol,
              locked the liquidity, and pushed the simulation live.
            </p>

            <div className="mt-6 grid grid-cols-1 divide-y divide-trix-400/10 border border-trix-400/15 sm:grid-cols-2 sm:divide-y-0">
              {STATS.map((s) => (
                <div
                  key={s.k}
                  className="flex items-center justify-between gap-4 px-4 py-3 sm:[&:nth-child(even)]:border-l sm:border-trix-400/10"
                >
                  <span className="label-hud text-[10px] text-trix-300/70">
                    {s.k}
                  </span>
                  <span
                    className={`font-mono text-sm font-bold ${
                      s.alert
                        ? "animate-flicker text-trix-glow"
                        : "text-trix-50 neon-text"
                    }`}
                  >
                    {s.v}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glitch-hover group relative mt-6 inline-flex items-center gap-3 overflow-hidden border border-trix-300/60 bg-trix-500/15 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-trix-50 shadow-glow transition-all hover:bg-trix-400/30 hover:shadow-glow-lg"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-trix-glow/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <svg
                viewBox="0 0 24 24"
                className="relative z-10 h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="relative z-10">Follow The Dev on X</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">
                ▸
              </span>
            </a>

            <p className="mt-3 font-mono text-[11px] text-trix-200/50">
              <span className="cursor">x.com/coltraneway</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
