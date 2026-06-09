/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#03060f",
        abyss: "#01030a",
        navy: "#0a1430",
        steel: "#13284f",
        trix: {
          DEFAULT: "#1f9bff",
          50: "#e6f4ff",
          100: "#bfe3ff",
          200: "#7fc7ff",
          300: "#3fa9ff",
          400: "#1f9bff",
          500: "#0a78e0",
          600: "#075bb0",
          700: "#063f80",
          glow: "#5fd0ff",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        display: ["var(--font-display)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(31,155,255,0.45), 0 0 60px rgba(31,155,255,0.25)",
        "glow-sm": "0 0 12px rgba(31,155,255,0.4)",
        "glow-lg": "0 0 40px rgba(31,155,255,0.55), 0 0 120px rgba(31,155,255,0.3)",
        panel: "inset 0 0 0 1px rgba(63,169,255,0.25), 0 0 40px rgba(0,0,0,0.6)",
      },
      keyframes: {
        flicker: {
          "0%, 19%, 21%, 23%, 80%, 100%": { opacity: "1" },
          "20%, 22%, 82%": { opacity: "0.4" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 14px rgba(31,155,255,0.4)" },
          "50%": { boxShadow: "0 0 28px rgba(31,155,255,0.85)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glitchShift: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 1px)" },
          "40%": { transform: "translate(2px, -1px)" },
          "60%": { transform: "translate(-1px, -1px)" },
          "80%": { transform: "translate(1px, 1px)" },
        },
      },
      animation: {
        flicker: "flicker 4s infinite",
        blink: "blink 1s step-end infinite",
        scan: "scan 6s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        floaty: "floaty 5s ease-in-out infinite",
        glitchShift: "glitchShift 0.4s steps(2) infinite",
      },
    },
  },
  plugins: [],
};
