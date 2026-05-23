"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealFade, RevealText } from "@/components/ui/RevealText";

const VIGNETTES = [
  {
    label: "The Arrival",
    body: "A private porte-cochère lit by hand-blown brass lanterns.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=85",
  },
  {
    label: "The Library",
    body: "Smoked oak shelving and the slow hush of a fireplace at dusk.",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=85",
  },
  {
    label: "The Terrace",
    body: "A garden room suspended above the city, framed in travertine.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function SignatureLifestyle() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink-charcoal py-32 md:py-44"
    >
      <div className="container-royal mb-20 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <RevealFade>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="eyebrow">Chapter IV — Lifestyle</span>
            </div>
          </RevealFade>
        </div>
        <div className="md:col-span-7">
          <div className="flex flex-col gap-1">
            <RevealText>
              <h2 className="display-lg font-display text-[#efe7da]">
                A signature
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="display-lg font-display italic text-gold">
                way of living.
              </h2>
            </RevealText>
          </div>
          <RevealFade delay={0.2} className="mt-8">
            <p className="body-luxe text-silver/70">
              Within every RED address, the day is composed like music — a slow
              overture of morning light, an evening of fire and silence.
            </p>
          </RevealFade>
        </div>
      </div>

      <motion.div style={{ x }} className="flex gap-6 px-6 md:gap-10 md:px-12">
        {VIGNETTES.map((v, i) => (
          <RevealFade key={v.label} delay={i * 0.1} className="w-[78vw] shrink-0 md:w-[42vw]">
            <div className="group relative aspect-[4/5] overflow-hidden">
              <img
                src={v.image}
                alt={v.label}
                className="absolute inset-0 h-full w-full scale-110 object-cover transition-transform duration-[1800ms] ease-cinematic group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-8 bottom-8">
                <span className="text-[0.65rem] tracking-[0.5em] text-gold/80">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-3xl text-[#efe7da] md:text-4xl">
                  {v.label}
                </h3>
                <span className="mt-4 block h-px w-12 bg-gold/60 transition-all duration-1000 group-hover:w-24" />
                <p className="mt-5 max-w-xs text-sm font-light leading-[1.85] text-silver/70">
                  {v.body}
                </p>
              </div>
            </div>
          </RevealFade>
        ))}
      </motion.div>
    </section>
  );
}
