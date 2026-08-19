# MUREC — Redesign

A fresh, modern redesign of the MUREC ([murec.com](https://www.murec.com/)) home page, using
MUREC's own content and copy, with a premium visual language inspired by
[Timeless](https://timeless.club/en) — dark, editorial, serif-led, generous
whitespace, and restrained gold accents.

Built for the Propacity Frontend Developer assignment.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- [GSAP](https://gsap.com/) (ScrollTrigger, ScrollSmoother, SplitText) for scroll-driven motion
- [Framer Motion](https://www.framer.com/motion/) for entrance/reveal animations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  components/   Section components (Navbar, Hero, Legacy, Principles, ...)
  page.tsx      Composes all sections
  layout.tsx    Fonts + metadata
  globals.css   Design tokens (color, type) and global styles
public/images/  Content assets sourced from murec.com
```

## Design Notes

- Typography: Cormorant Garamond (display/serif) paired with Inter (UI/sans),
  matching the editorial, luxury feel of the Timeless reference without
  copying its layout.
- Palette: near-black ink background with a warm gold accent, echoing
  MUREC's own logo mark.
- Motion: GSAP ScrollSmoother for inertia-smooth scrolling, SplitText
  line-mask reveals on every heading, a hero parallax + count-up "78+",
  a clip-path wipe on the Legacy image, a parallax pan on the Collection
  banner, and cursor-tilt on the Principles cards — layered with Framer
  Motion fade/rise reveals and a hover-fill contact button.
- Content (copy, images, contact details) is sourced directly from
  murec.com's home page; the hero video was swapped for a static image to
  keep the initial page load light.

## Build

```bash
npm run build
npm start
```

## Deployment

Deployed on Vercel: https://assignmnet-chi.vercel.app
