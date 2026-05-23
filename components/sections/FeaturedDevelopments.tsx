"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealFade, RevealText } from "@/components/ui/RevealText";

const PROJECTS = [
  {
    name: "Splendid Creation",
    location: "Pune",
    typology: "Commercial Office Space",
    year: "2026",
    status: "Near Possession",
    image: "/day-view.jpg",
    href: "/projects/pasaydan-udhyam",
  },
];

export default function FeaturedDevelopments() {
  return (
    <section id="portfolio" className="relative bg-ink-charcoal py-32 md:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />

      <div className="container-royal mb-20 grid grid-cols-1 items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <RevealFade>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold/60" />
              <span className="eyebrow">Chapter II — The Ascent</span>
            </div>
          </RevealFade>
          <div className="mt-6 flex flex-col gap-1">
            <RevealText>
              <h2 className="display-lg font-display text-[#efe7da]">
                Splendid Creation
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="display-lg font-display italic text-gold">
                in Motion.
              </h2>
            </RevealText>
          </div>
        </div>
        <div className="md:col-span-5">
          <RevealFade delay={0.2}>
            <p className="body-luxe text-silver/75">
              Located in the heart of Pune, this commercial office space is
              designed for forward-thinking businesses, a seamless blend of
              sophistication, energy, and purpose.
            </p>
          </RevealFade>
        </div>
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.name} project={p} index={i} reverse={i % 2 === 1} />
        ))}
      </div>

      <div className="container-royal mt-24 flex justify-center">
        <RevealFade>
          <Link href="/projects/pasaydan-udhyam" className="btn-royal" data-cursor="hover">
            <span>Explore the Project</span>
            <span className="h-px w-8 bg-gold/70" />
          </Link>
        </RevealFade>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  reverse,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  reverse: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.04, 1.1]);

  return (
    <div
      ref={ref}
      className={`container-royal mb-24 grid grid-cols-1 items-center gap-10 md:gap-16 md:mb-32 ${
        reverse ? "md:grid-flow-dense" : ""
      } md:grid-cols-12`}
    >
      <Link
        href={project.href}
        data-cursor="hover"
        className={`group relative col-span-1 block aspect-[4/5] overflow-hidden md:col-span-7 ${
          reverse ? "md:col-start-6" : ""
        }`}
      >
        <motion.img
          src={project.image}
          alt={project.name}
          style={{ scale: imgScale }}
          className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-1000 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 transition-opacity duration-1000 group-hover:from-black/40" />
        <div className="absolute inset-6 hidden md:block">
          <span className="absolute top-0 left-0 h-6 w-6 border-t border-l border-gold/40" />
          <span className="absolute top-0 right-0 h-6 w-6 border-t border-r border-gold/40" />
          <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold/40" />
          <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold/40" />
        </div>
      </Link>

      <motion.div
        style={{ y }}
        className={`col-span-1 md:col-span-5 ${reverse ? "md:col-start-1 md:row-start-1" : ""}`}
      >
        <RevealFade>
          <span className="text-[0.65rem] tracking-[0.5em] text-gold/80">
            {project.year}
          </span>
        </RevealFade>
        <RevealText className="mt-6">
          <h3 className="display-md font-display text-[#efe7da]">
            {project.name}
          </h3>
        </RevealText>
        <RevealFade delay={0.1} className="mt-6">
          <div className="gold-rule w-24" />
        </RevealFade>
        <RevealFade delay={0.15} className="mt-6 flex flex-col gap-2">
          <Detail label="Location" value={project.location} />
          <Detail label="Typology" value={project.typology} />
          <Detail label="Status" value={project.status} />
        </RevealFade>
      </motion.div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-4 border-t border-white/5 py-3">
      <span className="text-[0.6rem] tracking-[0.4em] text-silver/40">
        {label.toUpperCase()}
      </span>
      <span className="text-sm font-light text-silver/85">{value}</span>
    </div>
  );
}
