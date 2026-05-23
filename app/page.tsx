import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import FeaturedDevelopments from "@/components/sections/FeaturedDevelopments";
import RedevelopmentVision from "@/components/sections/RedevelopmentVision";
import Connect from "@/components/sections/Connect";
import SideDots from "@/components/layout/SideDots";

const DOTS = [
  { id: "vision", label: "The Legacy" },
  { id: "portfolio", label: "The Ascent" },
  { id: "connect", label: "Connect" },
];

export default function HomePage() {
  return (
    <>
      <SideDots dots={DOTS} />
      <Hero />
      <Philosophy />
      <FeaturedDevelopments />
      <RedevelopmentVision />
      <Connect />
    </>
  );
}
