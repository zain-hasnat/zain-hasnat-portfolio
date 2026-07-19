# Image assets

## Profile
✅ `/public/images/zain-hasnat-profile.jpg` — added from your uploaded LinkedIn photo.

## Case study screenshots
✅ Added and wired into `lib/data.ts` for: Seal Daddy, MHS Crane, Freedom Air, Barberino Nissan
(38 screenshots total, each with a caption).

⬜ Not yet provided — currently shown without screenshots on the site:
- Focus Pet Care
- Yamazaki Home
- Healthcare & Dental SEO

To add them: drop images into `/public/images/case-studies/` and add
`{ src: "/images/case-studies/your-file.png", caption: "..." }` entries to the
relevant case study's `images` array in `lib/data.ts`.

## Open Graph
⬜ `/public/images/og-image.jpg` — not yet provided. Add a 1200×630px image here for social
share previews (LinkedIn, Twitter/X, etc). Until then, social previews will show a broken image.
