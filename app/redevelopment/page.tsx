import PageHero from "@/components/sections/PageHero";
import { RevealFade, RevealText } from "@/components/ui/RevealText";

const STEPS = [
  {
    title: "Initial Consultation",
    body: "We conduct detailed discussions with society members to understand expectations and concerns.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Feasibility Study",
    body: "A comprehensive evaluation of plot potential, FSI utilization, regulatory norms, and financial viability.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Proposal & Structuring",
    body: "Clear and transparent presentation covering carpet area allocation, corpus, rent compensation, and timelines.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Agreement & Approvals",
    body: "Systematic handling of documentation, regulatory approvals, and compliance procedures.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Construction & Execution",
    body: "Modern construction practices, structured monitoring, and quality-driven execution.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Handover & Completion",
    body: "Timely delivery with attention to finishing standards and resident satisfaction.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=85",
  },
];

const SANSKRUTI_PROJECTS = [
  { name: "Sanskruti Kunj", image: "/sanskruti/Sanskruti_Kunj.jpg" },
  { name: "Sanskruti Laxmi", image: "/sanskruti/Sanskruti_Laxmi.jpg" },
  { name: "Sanskruti Mantra", image: "/sanskruti/Sanskruti_Mantra.jpg" },
  { name: "Sanskruti Mohar", image: "/sanskruti/Sanskruti_Mohar.jpg" },
  { name: "Sanskruti Prachi", image: "/sanskruti/Sanskruti_Prachi.jpg" },
  { name: "Sanskruti Pratibimb", image: "/sanskruti/Sanskruti_Pratibimb.jpg" },
  { name: "Sanskruti Shilp", image: "/sanskruti/Sanskruti_Shilp.jpg" },
  { name: "Sanskruti Tulsi", image: "/sanskruti/Sanskruti_Tulsi.jpg" },
  { name: "Sanskruti Vijay", image: "/sanskruti/Sanskruti_Vijay.jpg" },
  { name: "Sanskruti Vrundavan", image: "/sanskruti/Sanskruti_Vrundavan.jpg" },
];

export default function RedevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter — Redevelopment"
        title="A vision"
        italic="for the city."
        subtitle="Where time has weighed heavy, RED returns, listening first, then rebuilding for the next hundred years."
        image="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=2400&q=85"
      />

      {/* Process flow */}
      <section className="relative overflow-hidden bg-ink-black py-32 md:py-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(106,15,19,0.16) 0%, transparent 55%)",
          }}
        />

        <div className="container-royal relative">
          {/* Section header */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <RevealFade>
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-gold/60" />
                  <span className="eyebrow">Our Process — Six Movements</span>
                </div>
              </RevealFade>
              <div className="mt-8 flex flex-col gap-1">
                <RevealText>
                  <h2 className="display-lg font-display text-[#efe7da]">
                    A measured path,
                  </h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <h2 className="display-lg font-display italic text-gold">
                    drawn slowly.
                  </h2>
                </RevealText>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <RevealFade delay={0.2}>
                <p className="body-luxe text-silver/75">
                  Redevelopment with RED is a quiet, structured journey — six
                  movements that begin with listening and end with the careful
                  return of a renewed address. Every step is transparent, every
                  decision is shared.
                </p>
              </RevealFade>
            </div>
          </div>

          {/* The flow — compact grid */}
          <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 md:mt-24 md:grid-cols-3 md:gap-x-10 md:gap-y-16">
            {STEPS.map((s, i) => (
              <RevealFade key={s.title} delay={(i % 3) * 0.1}>
                <article className="group flex flex-col">
                  {/* Compact image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-[1800ms] ease-cinematic group-hover:scale-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent transition-opacity duration-1000 group-hover:from-black/40" />
                    <span className="absolute top-3 left-3 h-4 w-4 border-t border-l border-gold/55" />
                    <span className="absolute top-3 right-3 h-4 w-4 border-t border-r border-gold/55" />
                    <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-gold/55" />
                    <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-gold/55" />
                    <span className="absolute bottom-4 left-4 text-[0.55rem] tracking-[0.5em] text-gold/85">
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6 flex items-baseline gap-4">
                    <span className="font-display text-4xl leading-none text-gold/40 md:text-5xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-gold/30" />
                    <span className="text-[0.55rem] tracking-[0.5em] text-silver/45">
                      OF SIX
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-[#efe7da] md:text-[1.75rem]">
                    {s.title}
                  </h3>
                  <div className="gold-rule mt-3 w-12" />
                  <p className="mt-4 text-[0.85rem] font-light leading-[1.85] text-silver/70">
                    {s.body}
                  </p>
                </article>
              </RevealFade>
            ))}
          </div>

          {/* Final terminus */}
          <RevealFade>
            <div className="mt-16 flex flex-col items-center md:mt-20">
              <span className="block h-12 w-px bg-gradient-to-b from-gold/55 to-gold/0" />
              <span className="mt-4 grid h-10 w-10 place-items-center rounded-full border border-gold/60">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              <span className="mt-5 text-[0.6rem] tracking-[0.5em] text-gold/75">
                A LEGACY RENEWED
              </span>
            </div>
          </RevealFade>
        </div>
      </section>

      {/* Sanskruti — completed redevelopments showcase */}
      <section className="relative overflow-hidden bg-ink-charcoal py-28 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(106,15,19,0.16) 0%, transparent 55%)",
          }}
        />

        <div className="container-royal relative">
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <RevealFade>
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-gold/60" />
                  <span className="eyebrow">A Legacy in a Different Form</span>
                </div>
              </RevealFade>
              <div className="mt-6 flex flex-col gap-1">
                <RevealText>
                  <h2 className="display-md font-display text-[#efe7da]">
                    Projects under
                  </h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <h2 className="display-md font-display italic text-gold">
                    Sanskruti Infrastructure and Developers Pvt. Ltd.
                  </h2>
                </RevealText>
              </div>
            </div>
            <div className="md:col-span-5">
              <RevealFade delay={0.2}>
                <div className="flex flex-col gap-6">
                  <p className="body-luxe text-silver/70">
                    A selection of redevelopment projects undertaken by Sanskruti
                    Infrastructure and Developers Pvt. Ltd., the earlier practice
                    established by our founding directors and other partners. The
                    founders later on created RED.
                  </p>
                  <p className="body-luxe text-silver/70">
                    A glimpse into a series of redevelopments carried, by the
                    same people gently from old bones to new beginnings.
                  </p>
                </div>
              </RevealFade>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-20 md:grid-cols-5 md:gap-6">
            {SANSKRUTI_PROJECTS.map((p, i) => (
              <RevealFade key={p.name} delay={(i % 5) * 0.08}>
                <article className="group flex flex-col">
                  <div
                    className="relative aspect-square overflow-hidden rounded-xl"
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(ellipse 100% 100% at center, black 78%, transparent 100%)",
                      maskImage:
                        "radial-gradient(ellipse 100% 100% at center, black 78%, transparent 100%)",
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-[1500ms] ease-cinematic group-hover:scale-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent transition-opacity duration-700 group-hover:from-black/30" />
                  </div>
                  <p className="mt-3 text-center font-display text-sm leading-tight text-[#efe7da] md:text-base">
                    {p.name}
                  </p>
                </article>
              </RevealFade>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
