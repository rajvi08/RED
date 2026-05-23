"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Logo from "@/components/ui/Logo";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);

  return (
    <section
      ref={ref}
      id="vision"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink-black"
    >
      {/* Cinematic backdrop — RED night view */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <img
          src="/night-view.jpg"
          alt="A RED development at twilight"
          className="ken-burns h-full w-full object-cover object-[center_25%]"
          fetchPriority="high"
        />
        {/* Subtle darkening — keeps the warm amber windows glowing */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/85" />
        {/* Soft ember warmth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 55%, rgba(106,15,19,0.20) 0%, transparent 65%)",
          }}
        />
        {/* Bottom fade so text reads cleanly */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(5,5,5,0.4) 45%, rgba(5,5,5,0.92) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-vignette" />
      </motion.div>

      {/* Vertical side label */}
      <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 md:flex">
        <div className="vertical-rl flex items-center gap-6 text-[0.65rem] tracking-[0.5em] text-silver/60">
          <span className="h-12 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <span>MMXXVI</span>
          <span>RED · RANJIT ESTATES &amp; DEVELOPERS</span>
        </div>
      </div>

      {/* Top eyebrow */}
      <motion.div
        style={{ y, opacity }}
        className="container-royal relative z-10 flex h-full flex-col items-center justify-center pt-20 text-center md:pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5"
        >
          <span className="font-editorial text-[clamp(1rem,2vw,1.5rem)] uppercase tracking-[0.5em] text-silver/85">Building Legacies</span>
          <span className="h-px w-12 bg-gold/70" />
        </motion.div>

        <div className="mt-10 flex flex-col items-center">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="m-0 flex items-center justify-center"
            >
              <span className="sr-only">RED</span>
              <Logo size="hero" priority alt="RED" />
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 h-px w-40 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
          />

          <div className="mt-4 overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow text-[clamp(0.9rem,1.4vw,1.15rem)]"
            >
              Finer Shades of Life
            </motion.h2>
          </div>

        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.6 }}
        style={{ opacity }}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 md:bottom-6"
      >
        <div className="flex flex-col items-center">
          <div className="relative h-12 w-px overflow-hidden bg-white/15">
            <div className="absolute inset-x-0 top-0 h-3 animate-scroll-cue bg-gold" />
          </div>
        </div>
      </motion.div>

      {/* Frame corners */}
      <FrameCorner pos="tl" />
      <FrameCorner pos="tr" />
      <FrameCorner pos="bl" />
      <FrameCorner pos="br" />
    </section>
  );
}

function FrameCorner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const map = {
    tl: "top-6 left-6 border-t border-l",
    tr: "top-6 right-6 border-t border-r",
    bl: "bottom-6 left-6 border-b border-l",
    br: "bottom-6 right-6 border-b border-r",
  } as const;
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute hidden h-6 w-6 border-gold/40 md:block ${map[pos]}`}
    />
  );
}
