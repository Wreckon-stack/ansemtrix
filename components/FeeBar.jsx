"use client";

/**
 * Fixed top announcement ticker — fee split.
 * Sits above the Nav. Scrolling marquee in cyber-blue style.
 */
const MESSAGE =
  "70% OF FEES GO DIRECTLY TO ANSEM'S WALLET // 30% FUELS BOOSTS, DEXSCREENER & MARKETING";

export default function FeeBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[55] h-8 overflow-hidden border-b border-trix-400/30 bg-abyss/95 backdrop-blur-md">
      {/* edge glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-trix-glow/70 to-transparent" />

      <div className="marquee flex h-full items-center whitespace-nowrap">
        {/* duplicated track for seamless loop */}
        {[0, 1].map((dup) => (
          <div
            key={dup}
            aria-hidden={dup === 1}
            className="flex shrink-0 items-center"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="label-hud flex items-center gap-3 px-6 text-[10px] font-bold text-trix-100/90"
              >
                <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-trix-glow" />
                {MESSAGE}
              </span>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .marquee { animation: marqueeScroll 28s linear infinite; }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}
