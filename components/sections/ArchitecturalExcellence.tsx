"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealFade, RevealText } from "@/components/ui/RevealText";

export default function ArchitecturalExcellence() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink-black py-32 md:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 30%, rgba(106,15,19,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="container-royal grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-24">
        <motion.div
          style={{ y }}
          className="relative md:col-span-6"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
              alt="Detailed architectural interior"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
          </div>
          <div className="glass-panel absolute -bottom-8 -right-4 hidden w-56 p-6 md:block">
            <span className="text-[0.6rem] tracking-[0.5em] text-gold/80">
              MATERIALITY
            </span>
            <p className="mt-3 font-display text-xl text-[#efe7da]">
              Travertine, brass, smoked oak, hand-troweled limewash.
            </p>
          </div>
        </motion.div>

        <div className="md:col-span-6">
          <RevealFade>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="eyebrow">Chapter III — Excellence</span>
            </div>
          </RevealFade>

          <div className="mt-8 flex flex-col gap-1">
            <RevealText>
              <h2 className="display-lg font-display text-[#efe7da]">
                Architectural
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="display-lg font-display italic text-gold">
                Excellence.
              </h2>
            </RevealText>
          </div>

          <RevealFade delay={0.25} className="mt-10">
            <p className="body-luxe text-silver/70">
              Every commission begins with restraint. We study light, climate,
              and time of day before placing a single line. The result is not a
              building, but a presence — one that grows quieter, and more
              beautiful, with the years.
            </p>
          </RevealFade>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8">
            {DISCIPLINES.map((d, i) => (
              <RevealFade key={d.title} delay={0.35 + i * 0.08}>
                <div className="flex flex-col gap-3 border-t border-gold/20 pt-4">
                  <span className="text-[0.6rem] tracking-[0.5em] text-gold/80">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl text-[#efe7da]">
                    {d.title}
                  </h3>
                  <p className="text-xs font-light leading-[1.9] text-silver/60">
                    {d.body}
                  </p>
                </div>
              </RevealFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const DISCIPLINES = [
  {
    title: "Master Planning",
    body: "Choreographed sequences of light, threshold and shadow that shape the rhythm of arrival.",
  },
  {
    title: "Interior Architecture",
    body: "Volumes calibrated to the human scale, surfaces drawn for the senses.",
  },
  {
    title: "Bespoke Joinery",
    body: "Cabinetry, doors and millwork crafted by hand in the atelier — never repeated.",
  },
  {
    title: "Landscape & Light",
    body: "Gardens and ambient illumination treated as essential rooms, not afterthoughts.",
  },
];
