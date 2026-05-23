"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealFade, RevealText } from "@/components/ui/RevealText";

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink-black py-32 md:py-44"
    >
      <motion.span
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 font-editorial text-[18rem] leading-none text-white/[0.03] md:text-[26rem]"
      >
        I
      </motion.span>

      <div className="container-royal relative grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <RevealFade>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="eyebrow">Chapter I — The Legacy</span>
            </div>
          </RevealFade>
          <RevealFade delay={0.1} className="mt-8">
            <p className="body-luxe text-silver/65">
              We build not for the season, but for the century. Every line, every
              stone, every silence is a decision in service of permanence.
            </p>
          </RevealFade>
        </div>

        <div className="md:col-span-8">
          <div className="flex flex-col gap-2">
            <RevealText>
              <h2 className="display-lg font-display text-[#efe7da]">
                Architecture as
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="display-lg font-display italic text-gold">
                a quiet inheritance.
              </h2>
            </RevealText>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {PILLARS.map((p, i) => (
              <RevealFade key={p.title} delay={0.2 + i * 0.12}>
                <div className="flex flex-col gap-4 border-t border-gold/15 pt-6">
                  <span className="text-[0.65rem] tracking-[0.5em] text-gold/80">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl text-[#efe7da]">
                    {p.title}
                  </h3>
                  <p className="text-sm font-light leading-[1.9] text-silver/65">
                    {p.body}
                  </p>
                </div>
              </RevealFade>
            ))}
          </div>
        </div>
      </div>

      {/* Founder tribute */}
      <div className="container-royal relative mt-28 md:mt-40">
        <RevealFade>
          <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        </RevealFade>

        <RevealFade delay={0.1} className="mt-10 flex justify-center">
          <span className="eyebrow inline-flex items-center gap-4">
            <span className="h-px w-8 bg-gold/60" />
            The Founder · In Loving Memory
            <span className="h-px w-8 bg-gold/60" />
          </span>
        </RevealFade>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          {/* Portrait */}
          <RevealFade className="md:col-span-4 md:col-start-2">
            <div className="relative mx-auto w-44 sm:w-52 md:w-56">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/founder.jpg"
                  alt="Late Shri Ranjit Nageshrao Patil — Founder of RED"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ filter: "grayscale(15%) sepia(8%) contrast(1.02)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45" />
              </div>
              <span className="absolute -left-2 -top-2 h-5 w-5 border-t border-l border-gold/70" />
              <span className="absolute -right-2 -top-2 h-5 w-5 border-t border-r border-gold/70" />
              <span className="absolute -bottom-2 -left-2 h-5 w-5 border-b border-l border-gold/70" />
              <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b border-r border-gold/70" />
            </div>
            <RevealFade delay={0.2} className="mt-6 text-center">
              <span className="text-[0.6rem] tracking-[0.5em] text-silver/55">
                FOUNDER · RED
              </span>
            </RevealFade>
          </RevealFade>

          {/* Tribute */}
          <div className="md:col-span-6">
            <RevealText>
              <h3 className="font-display text-3xl text-[#efe7da] md:text-[2.6rem]">
                Late Shri Ranjit
              </h3>
            </RevealText>
            <RevealText delay={0.08}>
              <h3 className="font-display italic text-3xl text-gold md:text-[2.6rem]">
                Nageshrao Patil
              </h3>
            </RevealText>

            <RevealFade delay={0.25} className="mt-6">
              <div className="gold-rule w-20" />
            </RevealFade>

            <RevealFade delay={0.35} className="mt-8">
              <p className="body-luxe text-silver/75">
                RED derives its vision and foundational strength from its
                founder,
                <span className="text-[#efe7da]">
                  &nbsp;Late Shri Ranjit Nageshrao Patil
                </span>
                . His professional journey was marked by disciplined execution,
                principled leadership, and a deep commitment to responsible
                development.
              </p>
            </RevealFade>

            <RevealFade delay={0.5} className="mt-10 flex items-center gap-4">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.6rem] tracking-[0.5em] text-silver/55">
                A Legacy, Carried Forward
              </span>
            </RevealFade>
          </div>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    title: "Considered",
    body: "Every plan is drawn slowly. We design with restraint, proportion, light, and pause shape every wall.",
  },
  {
    title: "Conserved",
    body: "We renew what came before. Heritage is met with humility, then carried gently into the next century.",
  },
];
