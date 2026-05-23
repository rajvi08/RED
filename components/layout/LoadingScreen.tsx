"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;
    let value = 0;
    const id = setInterval(() => {
      if (!mounted) return;
      value += Math.random() * 14 + 5;
      if (value >= 100) {
        value = 100;
        clearInterval(id);
        setProgress(100);
        setTimeout(() => setDone(true), 700);
      } else {
        setProgress(value);
      }
    }, 140);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-black"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-12"
          >
            <div className="flex flex-col items-center gap-5">
              <span className="eyebrow text-gold/80">Ranjit Estates & Developers</span>
              <Logo size="xl" priority alt="RED" />
              <span className="eyebrow text-silver/60">Building Legacies</span>
            </div>

            <div className="flex w-[280px] flex-col items-center gap-3">
              <div className="relative h-px w-full overflow-hidden bg-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gold"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex w-full justify-between text-[0.6rem] tracking-[0.5em] text-silver/50">
                <span>LOADING</span>
                <span>{String(Math.floor(progress)).padStart(2, "0")}%</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-12 h-px w-[60vw] origin-left bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
