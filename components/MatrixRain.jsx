"use client";

import { useEffect, useRef } from "react";

/**
 * Fullscreen blue Matrix code-rain canvas.
 * Sits fixed behind everything. Cheap, DPI-aware, throttled.
 */
export default function MatrixRain({ opacity = 0.5 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const glyphs =
      "01アイウエオカキクケコサシスセソタチツテト10110101$TRIXﾊﾋﾌﾍﾎ01ｱｲｳ01".split("");
    const fontSize = 16;
    let columns = 0;
    let drops = [];
    let width = 0;
    let height = 0;
    let dpr = 1;

    const setup = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * height) / fontSize)
      );
    };

    setup();

    let raf;
    let last = 0;
    const interval = 55; // ms between frames -> ~18fps, smooth + cheap

    const draw = (t) => {
      raf = requestAnimationFrame(draw);
      if (t - last < interval) return;
      last = t;

      // fade trail
      ctx.fillStyle = "rgba(1, 3, 10, 0.16)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // leading bright glyph
        const lead = Math.random() > 0.975;
        if (lead) {
          ctx.fillStyle = "#dff3ff";
          ctx.shadowColor = "#5fd0ff";
          ctx.shadowBlur = 10;
        } else {
          const shade = 120 + Math.floor(Math.random() * 120);
          ctx.fillStyle = `rgba(${Math.floor(shade * 0.25)}, ${Math.floor(
            shade * 0.65
          )}, 255, 0.9)`;
          ctx.shadowBlur = 0;
        }
        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    raf = requestAnimationFrame(draw);

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setup, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full"
      style={{ opacity }}
    />
  );
}
