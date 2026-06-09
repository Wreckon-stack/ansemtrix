import "./globals.css";
import { JetBrains_Mono, Orbitron } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const display = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "ANSEMTRIX // $TRIX — The Comeback Broke The Simulation",
  description:
    "ANSEMTRIX ($TRIX) — He came back. The trenches reloaded. The simulation turned blue. The memecoin matrix rebooted.",
  metadataBase: new URL("https://ansemtrix.example"),
  openGraph: {
    title: "ANSEMTRIX // $TRIX",
    description: "THE COMEBACK BROKE THE SIMULATION.",
    images: ["/hero.png"],
  },
};

export const viewport = {
  themeColor: "#01030a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mono.variable} ${display.variable}`}>
      <body className="font-mono antialiased scanlines scan-beam grain vignette">
        {children}
      </body>
    </html>
  );
}
