"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx;
    let dy = my;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const isInteractive = (el: Element | null) => {
      if (!el) return false;
      return !!el.closest(
        "a, button, input, textarea, [role='button'], [data-cursor='hover']",
      );
    };

    const onOver = (e: MouseEvent) => {
      const hovering = isInteractive(e.target as Element);
      ringRef.current?.style.setProperty(
        "transform",
        `translate3d(${rx - 22}px, ${ry - 22}px, 0) scale(${hovering ? 1.8 : 1})`,
      );
      ringRef.current?.classList.toggle("opacity-90", hovering);
    };

    const tick = () => {
      dx += (mx - dx) * 0.35;
      dy += (my - dy) * 0.35;
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dx - 3}px, ${dy - 3}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 22}px, ${ry - 22}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${rx - 220}px, ${ry - 220}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9990] h-[440px] w-[440px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(198,165,106,0.10) 0%, rgba(198,165,106,0.04) 35%, transparent 70%)",
          filter: "blur(8px)",
          mixBlendMode: "screen",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-11 w-11 rounded-full border border-gold/70 opacity-60 transition-[opacity,border-color] duration-500"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-gold"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
