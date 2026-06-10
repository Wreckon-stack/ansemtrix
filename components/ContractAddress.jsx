"use client";

import { useState } from "react";
import { CA } from "@/lib/token";

/**
 * Displays the $TRIX contract address with click-to-copy.
 * Truncates on small screens, full mono string on larger.
 */
export default function ContractAddress({ className = "" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  const short = `${CA.slice(0, 6)}…${CA.slice(-6)}`;

  return (
    <button
      onClick={copy}
      title="Click to copy contract address"
      className={`glitch-hover group inline-flex max-w-full items-center gap-2 border border-trix-400/40 bg-black/40 px-3 py-1.5 transition-all hover:border-trix-300/80 hover:shadow-glow-sm ${className}`}
    >
      <span className="label-hud text-[9px] text-trix-300/70">CA</span>
      <code className="font-mono text-[11px] text-trix-glow sm:hidden">
        {short}
      </code>
      <code className="hidden truncate font-mono text-[11px] text-trix-glow sm:inline">
        {CA}
      </code>
      <span className="label-hud text-[9px] text-trix-200/70 group-hover:text-trix-glow">
        {copied ? "COPIED ✓" : "COPY"}
      </span>
    </button>
  );
}
