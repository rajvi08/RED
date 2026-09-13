import PageHero from "@/components/sections/PageHero";
import { RevealFade, RevealText } from "@/components/ui/RevealText";

const MOVEMENTS = [
  {
    title: "Explored",
    body: "We look beyond what exists. AI, robotics, advanced materials, digital fabrication and emerging systems become tools for asking what could be.",
  },
  {
    title: "Applied",
    body: "Ideas are made tangible. We prototype, test and learn from the physical world, bringing emerging technologies closer to everyday life.",
  },
  {
    title: "Remembered",
    body: "The measure of technology is not only what it can do, but what it leaves behind. We seek to create experiences that become part of how people remember a place, a moment, or each other.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter V · Technology"
        title="Technologies for"
        italic="better living."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=85"
      />

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
          <div className="mx-auto flex max-w-3xl flex-col gap-10">
            <RevealFade>
              <p className="body-luxe text-silver/75">
                The world is changing quickly. New technologies are reshaping
                what we can make, how we interact, and how we experience the
                spaces around us.
              </p>
            </RevealFade>
            <RevealFade delay={0.12}>
              <p className="body-luxe text-silver/75">
                RED Tech looks beyond the traditional boundaries of real estate,
                exploring emerging technologies not for novelty, but for what
                they may make possible for people.
              </p>
            </RevealFade>
            <RevealFade delay={0.24}>
              <p className="body-luxe text-silver/75">
                We ask how technology can be placed in service of human needs,
                creating experiences that are meaningful, memorable, and lasting.
              </p>
            </RevealFade>
          </div>
        </div>
      </section>

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
          <div className="flex flex-col gap-1">
            <RevealText>
              <h2 className="display-lg font-display text-[#efe7da]">
                Technology as
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="display-lg font-display italic text-gold">
                a human experience.
              </h2>
            </RevealText>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 md:mt-24 md:grid-cols-3">
            {MOVEMENTS.map((m, i) => (
              <RevealFade key={m.title} delay={i * 0.12}>
                <article className="flex flex-col gap-5 border-t border-gold/15 pt-8">
                  <span className="text-[0.65rem] tracking-[0.5em] text-gold/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl text-[#efe7da] md:text-[2.1rem]">
                    {m.title}
                  </h3>
                  <p className="text-sm font-light leading-[1.9] text-silver/65">
                    {m.body}
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
