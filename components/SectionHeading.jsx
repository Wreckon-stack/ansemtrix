"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ kicker, title, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`mb-10 ${className}`}
    >
      {kicker && (
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-trix-400/60" />
          <span className="label-hud text-[10px] text-trix-300/80">
            {kicker}
          </span>
        </div>
      )}
      <h2
        data-text={title}
        className="glitch font-display text-3xl font-black uppercase tracking-tight text-white sm:text-5xl"
      >
        {title}
      </h2>
    </motion.div>
  );
}
