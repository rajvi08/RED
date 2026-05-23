"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealText, RevealFade } from "@/components/ui/RevealText";

export default function LegacyStatement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink-black py-40 md:py-56">
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(106,15,19,0.35) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      <div className="container-royal relative text-center">
        <RevealFade>
          <span className="eyebrow inline-flex items-center gap-4">
            <span className="h-px w-10 bg-gold/60" />
            Chapter V — Legacy
            <span className="h-px w-10 bg-gold/60" />
          </span>
        </RevealFade>

        <div className="mt-12 flex flex-col items-center gap-3">
          <RevealText>
            <h2 className="display-xl font-display text-[#efe7da] text-balance">
              We do not build buildings.
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="display-xl font-display italic text-gold text-balance">
              We compose
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="display-xl font-display text-[#efe7da] text-balance">
              the centuries.
            </h2>
          </RevealText>
        </div>

        <RevealFade delay={0.4} className="mx-auto mt-16 max-w-xl">
          <p className="body-luxe mx-auto text-silver/70">
            A RED address is an inheritance — a quiet conversation between
            architecture and the family it shelters. We build slowly, so the
            walls may speak softly, for a very long time.
          </p>
        </RevealFade>

        <RevealFade delay={0.6} className="mt-14">
          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="mt-10 font-editorial text-xs tracking-[0.5em] text-silver/50">
            — RED, A HOUSE OF ARCHITECTURE
          </p>
        </RevealFade>
      </div>
    </section>
  );
}
