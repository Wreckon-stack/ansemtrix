"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#prophecy", label: "PROPHECY" },
  { href: "#terminal", label: "TERMINAL" },
  { href: "#memes", label: "MEMES" },
  { href: "#goat", label: "THE GOAT" },
  { href: "#dev", label: "THE DEV" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-8 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-trix-400/20 bg-abyss/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <span className="h-2 w-2 animate-pulseGlow rounded-full bg-trix-glow" />
          <span className="font-display text-sm font-black tracking-[0.25em] text-trix-50 transition-colors group-hover:text-white">
            ANSEMTRIX
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-hud text-[10px] text-trix-200/60 transition-colors hover:text-trix-glow"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#goat"
          className="glitch-hover border border-trix-300/60 bg-trix-500/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-trix-50 shadow-glow-sm transition-all hover:bg-trix-400/30"
        >
          Buy $ANSEM TRIX
        </a>
      </nav>
    </header>
  );
}
