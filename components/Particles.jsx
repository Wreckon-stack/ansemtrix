"use client";

import { useMemo } from "react";

/**
 * Random floating blue digital particles drifting upward.
 * Deterministic per-mount via index-seeded pseudo-random (no Math.random at module scope).
 */
export default function Particles({ count = 26 }) {
  const dots = useMemo(() => {
    // simple seeded generator so SSR/CSR stay consistent enough & avoid hydration noise
    const seeded = (n) => {
      const x = Math.sin(n * 99.13) * 43758.5453;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }, (_, i) => ({
      left: seeded(i + 1) * 100,
      size: 1 + seeded(i + 7) * 2.5,
      delay: seeded(i + 3) * 8,
      duration: 9 + seeded(i + 5) * 12,
      opacity: 0.2 + seeded(i + 11) * 0.5,
    }));
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute bottom-[-10px] rounded-full bg-trix-glow"
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            boxShadow: "0 0 8px rgba(95,208,255,0.9)",
            animation: `floatUp ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
