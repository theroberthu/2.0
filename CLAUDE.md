# theroberthu.com — Project Context

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Supabase (database + auth)
- Deployed on Vercel
- Domain on GoDaddy

## Brand
- Owner: Robert Hu — E-commerce Strategist, Digital Marketing & Digital Transformation consultant
- Brand voice: "Quiet confidence" — premium consulting, not flashy agency
- Target audience: $100K–$2M revenue brand owners (especially Amazon/Walmart sellers)
- Logo: Owl with H+U in the eyes → `/public/images/theroberthulogo.png`
- Logo usage: Nav bar, footer, favicon, OG image ONLY. Never as decoration or background texture.

## Design System

### Mode
- Dark mode default (dark bg, light text)
- Glassmorphism cards (backdrop-blur-md, bg-white/5 or bg-white/10, border border-white/10)

### Colors
- Dark background: `#1a2a32`
- Deep teal: `#1a3a4a`
- Accent blue: `#2d7d9a`
- Light text: `#f7f9fb`
- Muted gray: `#8a9aa2`
- Gold accent (from logo, use sparingly): `#c5a94e`

### Typography
- Headings: DM Sans (font-semibold or font-bold)
- Body: DM Sans (font-normal)
- Accents / labels / tags / code: JetBrains Mono
- Keep hierarchy clean: H1 → H2 → H3, no skipping

### Components
- Cards: Glassmorphism style, subtle hover (translateY -4px + border glow with accent blue)
- Buttons: Solid accent blue bg (#2d7d9a), white text, slight brighten on hover
- Pull quotes: Left border in gold or accent blue
- Stat cards: Large number in gold (#c5a94e), label in muted gray JetBrains Mono
- CTAs: Every major section should have a clear path to booking a consultation

## Pages

### Homepage
- Hero section (split layout, floating stat cards, trust bar)
- "Selected Case Studies" section (3 featured cards)
- CTA section driving to consultation booking

### /case-studies
- Index: 2x2 grid of glassmorphism cards (1 col mobile)
- Individual: `/case-studies/[slug]` with dynamic routing
- Sections: The Challenge → The Approach → The Results (stat cards) → Key Takeaway (pull quote) → CTA

### /about
- Professional bio
- Projects: FlightPrompts, ProductListingHelp, Scoparo
- Should reinforce expertise + lead to booking

## Case Studies (4 total, all anonymized)
1. `bsr-ranking-improvement` — Amazon Ranking — BSR #11 → #5
2. `pdp-excellence-finalist` — Content Strategy — Amazon PDP Excellence finalist
3. `new-product-launch-top-release` — Product Launch — Top New Release in 14 days
4. `ad-account-restructuring` — Advertising Strategy — ROAS-obsessed to growth-focused

## Critical Rules
- NEVER reference "Kent" or any specific brand/company name in case studies
- All client work is anonymized for NDA compliance
- Mobile-first responsive design always
- SEO on every page: proper meta titles, descriptions, OG tags, structured data
- Keep page load fast — no heavy animations or unnecessary JS
- Writing tone: confident, not arrogant. Show results, don't brag.

## SEO Conventions
- Meta title format: `[Page Title] | Robert Hu — E-commerce Strategist`
- Meta descriptions: Include key value prop + CTA
- Canonical URLs on all pages
- Structured data where applicable (Article/CaseStudy schema)

## File Structure Notes
- Public assets: `/public/images/`
- Case study data: Check Supabase `case_studies` table first. If not available, hardcode and structure for easy Supabase migration later.
