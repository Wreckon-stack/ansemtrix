"use client";

/**
 * Blue glowing CTA button with a glitch-on-hover effect.
 * variant: "solid" | "ghost"
 */
export default function GlitchButton({
  children,
  href = "#",
  variant = "solid",
  className = "",
  ...props
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 glitch-hover";

  const styles =
    variant === "solid"
      ? "border border-trix-300/70 bg-trix-500/20 text-trix-50 shadow-glow hover:bg-trix-400/30 hover:shadow-glow-lg"
      : "border border-trix-400/40 bg-transparent text-trix-100 hover:border-trix-300/80 hover:bg-trix-500/10 hover:shadow-glow-sm";

  return (
    <a href={href} className={`${base} ${styles} ${className}`} {...props}>
      {/* sweep shine */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-trix-glow/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </a>
  );
}
