"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PageHero({
  eyebrow,
  title,
  italic,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
  image: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[85svh] min-h-[560px] w-full items-center overflow-hidden bg-ink-black"
    >
      <motion.div style={{ scale }} aria-hidden className="absolute inset-0">
        <img src={image} alt="" className="ken-burns h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/65 to-black/90" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 70%, rgba(106,15,19,0.22) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="container-royal relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gold/60" />
          <span className="eyebrow">{eyebrow}</span>
        </motion.div>

        <div className="mt-10 flex flex-col gap-1">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="display-xl font-display text-[#efe7da]"
            >
              {title}
            </motion.h1>
          </div>
          {italic && (
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="display-xl font-display italic text-gold"
              >
                {italic}
              </motion.h1>
            </div>
          )}
        </div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="body-luxe mt-10"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
