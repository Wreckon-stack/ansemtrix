export default function Footer() {
  return (
    <footer className="relative border-t border-trix-400/15 bg-abyss/60 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-black tracking-widest text-trix-50 neon-text">
            ANSEMTRIX
          </span>
          <span className="label-hud text-[10px] text-trix-300/60">$TRIX</span>
        </div>

        <p className="max-w-2xl text-[11px] leading-relaxed text-trix-200/50">
          ANSEMTRIX is a meme/parody token with no affiliation, no promises, and
          no financial guarantees. Enter the simulation at your own risk.
        </p>

        <div className="flex items-center gap-4 text-[10px] text-trix-300/40">
          <span className="label-hud">© SIMULATION_2026</span>
          <span className="h-1 w-1 rounded-full bg-trix-400/40" />
          <span className="label-hud animate-flicker">NODE: STABLE-ISH</span>
        </div>
      </div>
    </footer>
  );
}
