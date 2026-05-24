import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CursorGlow from "@/components/layout/CursorGlow";
import GrainOverlay from "@/components/layout/GrainOverlay";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Navigation from "@/components/layout/Navigation";
import PageTransition from "@/components/layout/PageTransition";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
  display: "swap",
});

const editorial = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-editorial",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RED",
  description:
    "RED is a luxury real estate development house crafting architectural legacies — quiet, considered, and timeless.",
  metadataBase: new URL("https://red.example.com"),
  icons: {
    icon: "/RED_logo.png",
    shortcut: "/RED_logo.png",
    apple: "/RED_logo.png",
  },
  openGraph: {
    title: "RED",
    description:
      "A luxury real estate development house crafting architectural legacies.",
    type: "website",
    images: ["/RED_logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${editorial.variable} ${sans.variable}`}
    >
      <body className="bg-ink-black text-[#efe7da] antialiased">
        <LoadingScreen />
        <GrainOverlay />
        <CursorGlow />
        <SmoothScroll>
          <Navigation />
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
