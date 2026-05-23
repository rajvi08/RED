# RED — Building Legacies

A cinematic, luxury real estate development website inspired by the elegance,
restraint, and immersive storytelling of Rolls‑Royce Motor Cars.

> Designed to feel like a private brand presentation — royal, architectural,
> quietly expensive, and timeless.

---

## ✦ Aesthetic

- **Palette** — Deep Royal Red `#6A0F13`, Black `#050505`, Charcoal `#1A1A1A`,
  Metallic Gold `#C6A56A`, Soft Silver `#B8B8B8`.
- **Typography** — _Cormorant Garamond_ (display), _Bodoni Moda_ (editorial),
  _Inter_ (UI / body).
- **Motion** — Lenis smooth scroll, Framer Motion reveals, parallax depth,
  golden cursor halo, cinematic page wipes, animated counters.

---

## ✦ Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [TailwindCSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.studiofreight.com/) — buttery momentum scroll
- [GSAP](https://gsap.com/) — reserved for advanced timelines
- Next `Image` w/ Unsplash remote patterns for placeholder photography

---

## ✦ Getting Started

```bash
# install
npm install

# develop
npm run dev      # → http://localhost:3000

# production build
npm run build
npm start
```

> Tested with Node ≥ 18.17. No additional environment variables required.

---

## ✦ Project Structure

```
app/
 ├─ layout.tsx          ← fonts, loading screen, cursor, grain, providers
 ├─ page.tsx            ← single-page luxury scroll (homepage)
 ├─ globals.css         ← royal design tokens, components, utilities
 ├─ projects/page.tsx   ← editorial portfolio grid
 ├─ redevelopment/page.tsx ← visionary process + counters
 ├─ connect/page.tsx    ← private commission letter
 └─ not-found.tsx       ← cinematic 404

components/
 ├─ layout/
 │   ├─ Navigation.tsx       ← hamburger + fullscreen overlay menu + SOCIAL panel
 │   ├─ SideDots.tsx         ← right-side scroll dot navigation
 │   ├─ SmoothScroll.tsx     ← Lenis wrapper
 │   ├─ CursorGlow.tsx       ← gold cursor halo
 │   ├─ GrainOverlay.tsx     ← cinematic film grain
 │   ├─ LoadingScreen.tsx    ← luxury opening reveal
 │   └─ PageTransition.tsx   ← black wipe between routes
 ├─ sections/
 │   ├─ Hero.tsx
 │   ├─ Philosophy.tsx
 │   ├─ FeaturedDevelopments.tsx
 │   ├─ ArchitecturalExcellence.tsx
 │   ├─ RedevelopmentVision.tsx
 │   ├─ SignatureLifestyle.tsx
 │   ├─ LegacyStatement.tsx
 │   ├─ Connect.tsx
 │   └─ PageHero.tsx
 └─ ui/
     ├─ RevealText.tsx       ← line-by-line reveals
     ├─ Counter.tsx          ← cinematic number animations
     └─ ParallaxImage.tsx
```

---

## ✦ Design Notes

- **Every section breathes.** Sections are full viewport with generous vertical
  rhythm; copy is restrained and editorial.
- **Gold is sacred.** It appears only in dividers, eyebrows, focus rings,
  counters and hover lines — never as a flood color.
- **Motion is slow.** Easings hover around `cubic-bezier(0.16, 1, 0.3, 1)` /
  `cubic-bezier(0.77, 0, 0.18, 1)` with durations of 1.0–1.8s.
- **Imagery first.** Hero, vignettes and project rows lean on architectural
  photography with cinematic Ken-Burns scaling.
- **Accessibility.** Custom cursor disables itself for touch / no-hover devices;
  focus states use gold underlines; menu is keyboard-dismissable.

---

## ✦ Customization

- Replace Unsplash URLs in `components/sections/*` and `app/projects/page.tsx`
  with your own architectural photography or video assets.
- For a true cinematic hero video, swap the `<img>` in `Hero.tsx` with a muted
  autoplay `<video>` element and a high-quality `poster`.
- Brand copy lives in the constants at the top of each section component.

---

© MMXXVI — **RED · A House of Architecture & Legacy**
