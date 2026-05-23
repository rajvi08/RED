import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { RevealFade, RevealText } from "@/components/ui/RevealText";

const PROJECTS = [
  {
    code: "Nº 01",
    name: "Maison Étoile",
    location: "Mumbai · Worli",
    year: "2026",
    typology: "Sea-Facing Residences",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85",
  },
  {
    code: "Nº 02",
    name: "Velour Heights",
    location: "Bandra · West",
    year: "2025",
    typology: "Sky Residences",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    code: "Nº 03",
    name: "The Crimson Library",
    location: "Pune · Koregaon Park",
    year: "2024",
    typology: "Boutique Residences",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",
  },
  {
    code: "Nº 04",
    name: "Maison Indigo",
    location: "Goa · Vagator Cliff",
    year: "2024",
    typology: "Private Villas",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85",
  },
  {
    code: "Nº 05",
    name: "Étain Pavilion",
    location: "Delhi · Lutyens Bungalow Zone",
    year: "2023",
    typology: "Heritage Restoration",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85",
  },
  {
    code: "Nº 06",
    name: "Maison Aurum",
    location: "Bengaluru · Cubbon",
    year: "2022",
    typology: "Garden Residences",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Portfolio"
        title="Projects"
        italic="composed in stone."
        subtitle="A measured collection of residences, redevelopments and restorations — each drawn slowly, for a singular life."
        image="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2400&q=85"
      />

      <section className="bg-ink-black py-32">
        <div className="container-royal">
          <div className="grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <RevealFade key={p.code} delay={(i % 2) * 0.15}>
                <article className={`group ${i % 2 === 1 ? "md:mt-32" : ""}`}>
                  <Link
                    href="#"
                    data-cursor="hover"
                    className="relative block aspect-[4/5] overflow-hidden"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 h-full w-full scale-110 object-cover transition-transform duration-[1800ms] ease-cinematic group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-1000 group-hover:from-black/40" />
                    <div className="absolute inset-6 hidden md:block">
                      <span className="absolute top-0 left-0 h-6 w-6 border-t border-l border-gold/0 transition-all duration-1000 group-hover:border-gold/60" />
                      <span className="absolute top-0 right-0 h-6 w-6 border-t border-r border-gold/0 transition-all duration-1000 group-hover:border-gold/60" />
                      <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold/0 transition-all duration-1000 group-hover:border-gold/60" />
                      <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold/0 transition-all duration-1000 group-hover:border-gold/60" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <span className="text-[0.65rem] tracking-[0.5em] text-gold/80">
                        {p.code}
                      </span>
                      <span className="text-[0.65rem] tracking-[0.3em] text-silver/70 transition-all duration-700 group-hover:text-gold">
                        EXPLORE →
                      </span>
                    </div>
                  </Link>

                  <div className="mt-8 flex flex-col gap-3">
                    <h3 className="font-display text-4xl text-[#efe7da] transition-colors duration-700 group-hover:text-gold">
                      {p.name}
                    </h3>
                    <div className="gold-rule w-12" />
                    <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.65rem] tracking-[0.4em] text-silver/55">
                      <span>{p.location.toUpperCase()}</span>
                      <span className="h-px w-3 bg-gold/40" />
                      <span>{p.typology.toUpperCase()}</span>
                      <span className="h-px w-3 bg-gold/40" />
                      <span>{p.year}</span>
                    </div>
                  </div>
                </article>
              </RevealFade>
            ))}
          </div>

          <RevealText className="mt-32">
            <p className="font-display text-2xl text-silver/60">
              ✕ Further commissions are released by private invitation only.
            </p>
          </RevealText>
        </div>
      </section>
    </>
  );
}
