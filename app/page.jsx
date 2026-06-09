import MatrixRain from "@/components/MatrixRain";
import Particles from "@/components/Particles";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Prophecy from "@/components/Prophecy";
import Terminal from "@/components/Terminal";
import MemeWall from "@/components/MemeWall";
import TheGoat from "@/components/TheGoat";
import TheDev from "@/components/TheDev";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      {/* fixed background layers */}
      <MatrixRain opacity={0.45} />
      <Particles count={26} />

      {/* base gradient wash */}
      <div className="pointer-events-none fixed inset-0 -z-[5] bg-[radial-gradient(ellipse_at_top,rgba(10,20,48,0.55),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(6,40,80,0.35),transparent_55%)]" />

      <Nav />

      <div className="relative z-10">
        <Hero />
        <Prophecy />
        <Terminal />
        <MemeWall />
        <TheGoat />
        <TheDev />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
