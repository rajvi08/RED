"use client";

import { RevealFade } from "@/components/ui/RevealText";
import Counter from "@/components/ui/Counter";

const STATS = [
  {
    to: 500000,
    label: "Sq. Ft. of Legacy Developed",
    format: (n: number) => Math.round(n / 1000) + "K",
  },
  {
    to: 30,
    label: "Projects Completed",
    format: (n: number) => Math.round(n).toString(),
  },
  {
    to: 30,
    label: "Years of Practice",
    format: (n: number) => Math.round(n).toString(),
    suffix: " yrs",
  },
];

export default function RedevelopmentStats() {
  return (
    <section className="relative overflow-hidden bg-ink-charcoal py-32">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(106,15,19,0.18) 0%, transparent 60%)",
        }}
      />
      <div className="container-royal relative">
        <div className="grid grid-cols-1 gap-px border border-gold/15 md:grid-cols-3">
          {STATS.map((s, i) => (
            <RevealFade key={s.label} delay={i * 0.1}>
              <div className="bg-ink-black/70 p-10 backdrop-blur">
                <span className="text-[0.6rem] tracking-[0.5em] text-gold/70">
                  0{i + 1}
                </span>
                <div className="mt-5 font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-[#efe7da]">
                  <Counter to={s.to} format={s.format} suffix={s.suffix} />
                </div>
                <span className="mt-5 block h-px w-10 bg-gold/50" />
                <p className="mt-5 text-[0.65rem] tracking-[0.4em] text-silver/70">
                  {s.label.toUpperCase()}
                </p>
              </div>
            </RevealFade>
          ))}
        </div>
      </div>
    </section>
  );
}
