import PageHero from "@/components/sections/PageHero";
import { RevealFade, RevealText } from "@/components/ui/RevealText";

const DETAILS = [
  { label: "Location", value: "Pune" },
  { label: "Typology", value: "Commercial Office Spaces" },
  { label: "Year", value: "2026" },
  { label: "Status", value: "Under Construction" },
];

export default function PasaydanUdhyamPage() {
  return (
    <>
      <PageHero
        eyebrow="The Ascent"
        title="Pasaydan Udhyam"
        italic="Commercial Office Spaces"
        subtitle="An evolving commercial destination in the center of Pune, envisioned as a fluid interplay of design, movement, light, and innovation, shaping the future of workplace experiences."
        image="/day-view.jpg"
      />

      {/* Detail panel */}
      <section className="relative bg-ink-black py-24 md:py-32">
        <div className="container-royal">
          <RevealFade>
            <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          </RevealFade>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden border border-gold/15 md:grid-cols-4">
            {DETAILS.map((d, i) => (
              <RevealFade key={d.label} delay={0.1 + i * 0.08}>
                <div className="bg-ink-charcoal/60 p-6 md:p-8">
                  <span className="text-[0.6rem] tracking-[0.5em] text-gold/70">
                    {d.label.toUpperCase()}
                  </span>
                  <div className="mt-3 font-display text-xl text-[#efe7da] md:text-2xl">
                    {d.value}
                  </div>
                </div>
              </RevealFade>
            ))}
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="relative bg-ink-black pb-32 md:pb-44">
        <div className="container-royal">
          <div>
            <RevealFade>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gold/60" />
                <span className="eyebrow">The Experience</span>
              </div>
            </RevealFade>

            <RevealFade delay={0.15} className="mt-12">
              <div className="relative aspect-video w-full overflow-hidden bg-ink-charcoal">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/day-view.jpg"
                >
                  <source src="/thank-you.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                <div className="pointer-events-none absolute inset-6 hidden md:block">
                  <span className="absolute top-0 left-0 h-6 w-6 border-t border-l border-gold/40" />
                  <span className="absolute top-0 right-0 h-6 w-6 border-t border-r border-gold/40" />
                  <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold/40" />
                  <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold/40" />
                </div>
              </div>
            </RevealFade>

            <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12">
              <div className="md:col-span-5" />
              <div className="md:col-span-7">
                <RevealText>
                  <h2 className="display-md font-display text-[#efe7da]">
                    Designed for those who
                  </h2>
                </RevealText>
                <RevealText delay={0.1}>
                  <h2 className="display-md font-display italic text-gold">
                    build the next decade.
                  </h2>
                </RevealText>
                <RevealFade delay={0.25} className="mt-8">
                  <p className="body-luxe text-silver/75">
                    From the warm amber wash of evening windows to the bright clean
                    geometry at noon, Pasaydan Udhyam moves through the day as a
                    presence quietly confident, always composed. A new address
                    for businesses that intend to last.
                  </p>
                </RevealFade>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership attribution */}
      <section className="relative bg-ink-black pb-20 md:pb-28">
        <div className="container-royal">
          <RevealFade>
            <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          </RevealFade>
          <RevealFade delay={0.15} className="mt-12 flex flex-col items-center gap-3 text-center">
            <span className="font-display text-2xl text-[#efe7da] md:text-3xl">
              A joint venture by{" "}
              <span className="italic text-gold">RED</span>{" "}
              <span className="text-silver/60">×</span>{" "}
              <span className="italic text-gold">SKYBOAT</span>
            </span>
            <span className="text-[0.7rem] tracking-[0.5em] text-silver/65">
              IN ASSOCIATION WITH KARANJKAR FAMILY
            </span>
          </RevealFade>
        </div>
      </section>

      {/* Closing CTAs */}
      <section className="relative border-t border-gold/15 bg-ink-charcoal py-24">
        <div className="container-royal flex flex-col items-center justify-between gap-10 text-center md:flex-row md:text-left">
          <div>
            <span className="eyebrow">Begin a Conversation</span>
            <h3 className="mt-4 font-display text-3xl text-[#efe7da] md:text-4xl">
              Enquire about Pasaydan Udhyam
            </h3>
          </div>
          <div className="flex items-center">
            <a
              href="mailto:pranav@redeveloper.co?subject=Enquiry%20about%20Pasaydan%20Udhyam"
              className="btn-royal"
              data-cursor="hover"
            >
              <span>Connect</span>
              <span className="h-px w-8 bg-gold/70" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
