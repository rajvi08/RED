"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

const MENU = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects/pasaydan-udhyam" },
  { label: "Redevelopment", href: "/redevelopment" },
  { label: "Connect", href: "/connect" },
];

const SOCIAL = [
  { label: "LinkedIn", href: "https://linkedin.com", handle: "/red-developments" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      window.__lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      window.__lenis?.start();
      document.documentElement.style.overflow = "";
    }
    return () => {
      window.__lenis?.start();
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[110] transition-all duration-1000 ease-cinematic ${
          scrolled
            ? "bg-ink-black/60 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-royal grid grid-cols-3 items-center py-6 md:py-8">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="group flex items-center gap-4 justify-self-start"
          >
            <span className="relative flex h-5 w-7 flex-col justify-between">
              <span className="block h-px w-full bg-[#efe7da] transition-all duration-700 group-hover:bg-gold" />
              <span className="block h-px w-4 bg-[#efe7da] transition-all duration-700 group-hover:w-full group-hover:bg-gold" />
              <span className="block h-px w-full bg-[#efe7da] transition-all duration-700 group-hover:bg-gold" />
            </span>
            <span className="hidden text-[0.65rem] tracking-[0.5em] text-silver/80 group-hover:text-gold md:inline">
              MENU
            </span>
          </button>

          <Link
            href="/"
            aria-label="RED — Home"
            className="group block justify-self-center transition-opacity duration-700 hover:opacity-90"
            data-cursor="hover"
          >
            <Logo size="md" priority />
          </Link>

          <button
            onClick={() => setSocialOpen((v) => !v)}
            aria-label="Toggle social panel"
            className="group flex items-center gap-3 justify-self-end"
          >
            <span className="hidden text-[0.65rem] tracking-[0.5em] text-silver/80 group-hover:text-gold md:inline">
              SOCIAL
            </span>
            <span className="text-[0.65rem] tracking-[0.5em] text-silver/80 group-hover:text-gold md:hidden">
              SOC
            </span>
            <span className="h-px w-6 bg-[#efe7da] transition-all duration-700 group-hover:w-10 group-hover:bg-gold" />
          </button>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.0, ease: [0.77, 0, 0.18, 1] }}
            className="fixed inset-0 z-[130] flex flex-col bg-ink-black/95 backdrop-blur-2xl"
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 20% 30%, rgba(106,15,19,0.35) 0%, transparent 55%)",
              }}
            />

            <div className="container-royal relative flex items-center justify-between py-6 md:py-8">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="group flex items-center gap-4 text-silver hover:text-gold"
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="absolute h-px w-6 rotate-45 bg-current transition-colors duration-700" />
                  <span className="absolute h-px w-6 -rotate-45 bg-current transition-colors duration-700" />
                </span>
                <span className="text-[0.65rem] tracking-[0.5em]">CLOSE</span>
              </button>
              <Logo size="sm" />
              <span className="text-[0.65rem] tracking-[0.5em] text-silver/60">
                MMXXVI
              </span>
            </div>

            <nav className="container-royal relative flex flex-1 items-center">
              <ul className="flex w-full flex-col">
                {MENU.map((item, i) => (
                  <li key={item.href} className="border-t border-gold/15 last:border-b">
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.35 + i * 0.12,
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-baseline justify-between gap-8 py-7 md:py-10"
                      >
                        <span className="font-display text-[clamp(2.2rem,8vw,6rem)] font-light leading-none tracking-tight text-[#efe7da] transition-colors duration-700 group-hover:text-gold">
                          {item.label}
                        </span>
                        <span className="hidden text-[0.65rem] tracking-[0.5em] text-silver/40 group-hover:text-gold/80 md:inline">
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="container-royal relative flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-2">
                <span className="eyebrow">Atelier</span>
                <p className="body-luxe max-w-sm text-silver/70">
                  A house of architecture, lifestyle and legacy — crafting
                  places that endure.
                </p>
              </div>
              <div className="flex gap-6 text-[0.7rem] tracking-[0.32em] text-silver/60">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-gold hover:text-gold"
                  >
                    {s.label.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SOCIAL FLOATING PANEL */}
      <AnimatePresence>
        {socialOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setSocialOpen(false)}
              className="fixed inset-0 z-[115] bg-black/40 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel fixed right-6 top-24 z-[120] w-[min(360px,92vw)] p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="eyebrow">Follow</span>
                <button
                  aria-label="Close social"
                  onClick={() => setSocialOpen(false)}
                  className="relative h-3 w-3 text-silver hover:text-gold"
                >
                  <span className="absolute inset-0 h-px w-full rotate-45 bg-current top-1/2" />
                  <span className="absolute inset-0 h-px w-full -rotate-45 bg-current top-1/2" />
                </button>
              </div>
              <ul className="flex flex-col">
                {SOCIAL.map((s) => (
                  <li key={s.label} className="border-t border-gold/15 last:border-b">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-baseline justify-between py-4"
                    >
                      <span className="font-display text-2xl text-[#efe7da] transition-colors duration-500 group-hover:text-gold">
                        {s.label}
                      </span>
                      <span className="text-[0.65rem] tracking-[0.3em] text-silver/50 group-hover:text-gold/80">
                        {s.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
