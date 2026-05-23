"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealFade, RevealText } from "@/components/ui/RevealText";
import Counter from "@/components/ui/Counter";

export default function RedevelopmentVision() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.45, 0.6, 0.8]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink-black py-32 md:py-44"
    >
      <motion.div style={{ y: bgY }} aria-hidden className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=2400&q=85"
          alt=""
          className="h-[120%] w-full object-cover opacity-40"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink-black via-ink-black/85 to-ink-black"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 70%, rgba(106,15,19,0.25) 0%, transparent 55%)",
        }}
      />

      <div className="container-royal relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <RevealFade>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gold/60" />
                <span className="eyebrow">Chapter III — Redevelopment</span>
              </div>
            </RevealFade>
            <RevealFade delay={0.15} className="mt-8">
              <p className="body-luxe text-silver/70">
                We are stewards of the city's older bones. Where time has weighed
                heavy, RED returns, listening first, then rebuilding for the
                next hundred years.
              </p>
            </RevealFade>
          </div>

          <div className="md:col-span-7">
            <div className="flex flex-col gap-1">
              <RevealText>
                <h2 className="display-xl font-display text-[#efe7da]">
                  A vision
                </h2>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="display-xl font-display text-stroke-gold italic">
                  for the city.
                </h2>
              </RevealText>
              <RevealText delay={0.2}>
                <h2 className="display-xl font-display text-[#efe7da]">
                  Reimagined.
                </h2>
              </RevealText>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-px overflow-hidden border border-gold/15 md:mt-32 md:grid-cols-3">
          {STATS.map((s, i) => (
            <RevealFade key={s.label} delay={i * 0.15}>
              <div className="group relative bg-ink-black/70 p-10 backdrop-blur-sm transition-colors duration-1000 hover:bg-ink-charcoal/80 md:p-14">
                <span className="text-[0.6rem] tracking-[0.5em] text-gold/70">
                  0{i + 1}
                </span>
                <div className="mt-6 flex items-baseline gap-2 font-display text-[clamp(3rem,7vw,6rem)] font-light text-[#efe7da]">
                  <Counter
                    to={s.to}
                    suffix={s.suffix}
                    format={s.format}
                  />
                </div>
                <span className="mt-6 block h-px w-12 bg-gold/50 transition-all duration-700 group-hover:w-24" />
                <p className="mt-6 text-[0.7rem] tracking-[0.4em] text-silver/70">
                  {s.label.toUpperCase()}
                </p>
              </div>
            </RevealFade>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <RevealFade>
            <a href="/redevelopment" className="btn-royal" data-cursor="hover">
              <span>Our Redevelopment Vision</span>
              <span className="h-px w-8 bg-gold/70" />
            </a>
          </RevealFade>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  {
    to: 500000,
    suffix: "",
    label: "Sq. Ft. of Legacy Developed",
    format: (n: number) => Math.round(n / 1000) + "K",
  },
  {
    to: 30,
    suffix: "",
    label: "Projects Completed",
    format: (n: number) => Math.round(n).toString(),
  },
  {
    to: 30,
    suffix: " yrs",
    label: "Years of Practice",
    format: (n: number) => Math.round(n).toString(),
  },
];
