"use client";

import { useEffect, useState } from "react";

type Dot = { id: string; label: string };

export default function SideDots({ dots }: { dots: Dot[] }) {
  const [active, setActive] = useState(dots[0]?.id ?? "");

  useEffect(() => {
    if (!dots.length) return;
    const observers: IntersectionObserver[] = [];

    dots.forEach((d) => {
      const el = document.getElementById(d.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && e.intersectionRatio > 0.35) {
              setActive(d.id);
            }
          });
        },
        { threshold: [0.35, 0.6] },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [dots]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(el, { offset: 0, duration: 1.8 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-auto fixed right-5 top-1/2 z-[100] hidden -translate-y-1/2 md:flex"
    >
      <div className="relative flex flex-col items-center gap-8 px-2 py-6">
        <span
          aria-hidden
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent"
        />
        {dots.map((d, i) => {
          const isActive = active === d.id;
          return (
            <button
              key={d.id}
              onClick={() => scrollTo(d.id)}
              aria-label={`Go to ${d.label}`}
              className="group relative flex items-center"
            >
              <span
                className={`absolute right-10 whitespace-nowrap text-[0.65rem] tracking-[0.5em] transition-all duration-700 ease-cinematic ${
                  isActive
                    ? "translate-x-0 text-gold opacity-100"
                    : "translate-x-2 text-silver/0 opacity-0 group-hover:translate-x-0 group-hover:text-silver/80 group-hover:opacity-100"
                }`}
              >
                <span className="mr-3 text-gold/60">0{i + 1}</span>
                {d.label.toUpperCase()}
              </span>
              <span
                className={`relative grid h-10 w-10 place-items-center rounded-full border transition-all duration-700 ease-cinematic ${
                  isActive
                    ? "border-gold/80 bg-gold/5 backdrop-blur"
                    : "border-transparent"
                }`}
              >
                <span
                  className={`block rounded-full transition-all duration-700 ease-cinematic ${
                    isActive
                      ? "h-2.5 w-2.5 bg-gold"
                      : "h-1.5 w-1.5 bg-silver/55 group-hover:scale-150 group-hover:bg-gold"
                  }`}
                />
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
