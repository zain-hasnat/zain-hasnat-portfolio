# Zain Hasnat — SEO Specialist Portfolio

A premium, minimal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS,
and Framer Motion. Designed to feel fast, readable and professional — in the spirit of
Vercel, Linear and Stripe.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** for styling, with light/dark theme tokens
- **Framer Motion** for restrained scroll reveals
- **next-themes** for dark/light mode
- **lucide-react** for icons
- **next/image** for optimized images

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, JSON-LD (Person, WebSite)
  page.tsx               Home page — assembles all sections
  sitemap.ts              Generates /sitemap.xml
  robots.ts                Generates /robots.txt
  not-found.tsx            Custom 404
  case-studies/[slug]/     Dedicated case study pages (metadata + Breadcrumb/Project JSON-LD)
components/
  navbar.tsx, footer.tsx, theme-toggle.tsx, theme-provider.tsx
  fade-in.tsx              Scroll-reveal wrapper (respects prefers-reduced-motion)
  section-heading.tsx      Reusable section heading
  sections/                Hero, KeyResults, About, Experience, Skills, Tools,
                            CaseStudies, Certifications, Contact
  ui/                      Button, Card, Badge primitives
lib/
  data.ts                  ALL content lives here — edit this file to update the site
  utils.ts                 cn() class-name helper
public/
  images/                  Add real images here (see public/images/README.md)
  resume/                  Add your resume PDF here
```

## Content status

Real content has been added from Zain's resume and provided screenshots:

- ✅ Hero, About, Experience, Skills, Tools, Certifications, Contact — real content from CV
- ✅ Case studies with real screenshots: Seal Daddy, MHS Crane, Freedom Air, Barberino Nissan
- ⬜ Case studies without screenshots yet: Focus Pet Care, Yamazaki Home, Healthcare & Dental SEO
  (copy is real, from the CV — just no screenshots supplied yet)
- ⬜ Resume PDF not yet added — see `public/resume/README.md`
- ⬜ Open Graph image not yet added — see `public/images/README.md`
- ⬜ `siteConfig.url` in `lib/data.ts` is still a placeholder domain — update before deploying

## Editing content

Every piece of copy on the site — hero text, about paragraphs, experience, skills,
tools, case studies, certifications, and contact links — lives in a single file:

```
lib/data.ts
```

Update the placeholder strings there (marked with `[Placeholder — ...]`) and the whole
site updates automatically. No other files need to change for content edits.

## Images

Placeholder image paths are already wired into the components. Drop real files into
`public/images/` using the exact filenames documented in `public/images/README.md`
and `public/resume/README.md`.

## SEO

- Per-page metadata, canonical URLs, Open Graph and Twitter Card tags
- `Person` and `WebSite` JSON-LD on every page
- `BreadcrumbList` and `CreativeWork` JSON-LD on each case study page
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic HTML with a single `h1` per page and a logical heading hierarchy

Before deploying, update `siteConfig.url` in `lib/data.ts` to your real production
domain — it's used to build canonical URLs, sitemap entries and Open Graph URLs.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No extra configuration required.
4. Deploy.

## Accessibility & performance notes

- Visible keyboard focus states on all interactive elements
- Animations respect `prefers-reduced-motion`
- Images are served through `next/image` with responsive `sizes`
- Minimal, dependency-light component set to keep bundle size small
