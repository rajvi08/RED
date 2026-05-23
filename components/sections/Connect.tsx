"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealFade, RevealText } from "@/components/ui/RevealText";
import Logo from "@/components/ui/Logo";

export default function Connect() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const mapY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);

  const [sent, setSent] = useState(false);

  return (
    <section
      ref={ref}
      id="connect"
      className="relative overflow-hidden bg-ink-black py-32 md:py-44"
    >
      {/* Map background */}
      <motion.div
        aria-hidden
        style={{ y: mapY }}
        className="absolute inset-0 opacity-25"
      >
        <img
          src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=2200&q=85"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-black via-ink-black/60 to-ink-black" />
      </motion.div>

      <div className="container-royal relative">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <RevealFade>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gold/60" />
                <span className="eyebrow">Chapter IV — Connect</span>
              </div>
            </RevealFade>

            <div className="mt-8 flex flex-col gap-1">
              <RevealText>
                <h2 className="display-lg font-display text-[#efe7da]">
                  In quiet
                </h2>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="display-lg font-display italic text-gold">
                  conversation.
                </h2>
              </RevealText>
            </div>

            <RevealFade delay={0.3} className="mt-10">
              <p className="body-luxe text-silver/70">
                We welcome a small number of private commissions each year.
                Begin your inheritance with a letter.
              </p>
            </RevealFade>

            <RevealFade delay={0.4} className="mt-14 flex flex-col gap-8">
              <Address
                label="Atelier"
                lines={["RED · Ranjit Estates & Developers", "Erandwane, Pune"]}
              />
              <Address
                label="Discretion — Pune"
                lines={["pranav@redeveloper.co"]}
              />
              <Address
                label="Discretion — New York City"
                lines={["rajvi@redeveloper.co"]}
              />
            </RevealFade>
          </div>

          <div className="md:col-span-7">
            <RevealFade delay={0.2}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="glass-panel relative p-8 md:p-14"
              >
                <span className="absolute top-0 left-0 h-6 w-6 border-t border-l border-gold/60" />
                <span className="absolute top-0 right-0 h-6 w-6 border-t border-r border-gold/60" />
                <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold/60" />
                <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold/60" />

                <span className="eyebrow">A Private Letter</span>
                <h3 className="mt-6 font-display text-3xl text-[#efe7da] md:text-4xl">
                  Begin a conversation
                </h3>

                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <Field label="Name" name="name" type="text" required />
                  <Field label="Discretion" name="email" type="email" required />
                  <Field
                    label="City of Interest"
                    name="city"
                    type="text"
                    className="md:col-span-2"
                  />
                  <Field
                    label="Your Letter"
                    name="message"
                    textarea
                    className="md:col-span-2"
                  />
                </div>

                <div className="mt-10 flex items-center justify-between gap-6">
                  <p className="text-[0.65rem] tracking-[0.4em] text-silver/40">
                    REPLIES WITHIN 72 HOURS · BY APPOINTMENT
                  </p>
                  <button
                    type="submit"
                    className="btn-royal"
                    data-cursor="hover"
                    disabled={sent}
                  >
                    <span>{sent ? "Letter Received" : "Send Letter"}</span>
                    <span className="h-px w-8 bg-gold/70" />
                  </button>
                </div>
              </form>
            </RevealFade>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-gold/15 pt-10 md:flex-row">
          <span className="text-[0.65rem] tracking-[0.5em] text-silver/50">
            © MMXXVI — RED · RANJIT ESTATES & DEVELOPERS
          </span>
          <Logo size="md" />
          <span className="text-[0.65rem] tracking-[0.5em] text-silver/50">
            FINER SHADES OF LIFE
          </span>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`group relative block ${className}`}>
      <span className="block text-[0.6rem] tracking-[0.5em] text-silver/60 transition-colors duration-700 group-focus-within:text-gold">
        {label.toUpperCase()}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          required={required}
          className="mt-3 w-full resize-none border-b border-gold/20 bg-transparent py-3 text-base font-light text-[#efe7da] outline-none placeholder:text-silver/30 transition-colors duration-700 focus:border-gold"
          placeholder="Write a few words…"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="mt-3 w-full border-b border-gold/20 bg-transparent py-3 text-base font-light text-[#efe7da] outline-none placeholder:text-silver/30 transition-colors duration-700 focus:border-gold"
        />
      )}
    </label>
  );
}

function Address({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div className="flex flex-col gap-2 border-t border-gold/15 pt-4">
      <span className="text-[0.6rem] tracking-[0.5em] text-gold/70">
        {label.toUpperCase()}
      </span>
      {lines.map((l) => (
        <span key={l} className="text-sm font-light text-silver/85">
          {l}
        </span>
      ))}
    </div>
  );
}
