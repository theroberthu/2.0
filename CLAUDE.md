# theroberthu.com - Project Context

## Read this first

theroberthu.com is an **editorial AI Commerce publication and personal
knowledge hub**, authored by Robert Hu. It is **not** a consulting, agency, or
lead-generation site. Consulting has been fully retired.

Before doing any work, read the documentation in `/docs` (do not duplicate it
here - reference it):

1. **[docs/00_WEBSITE_OPERATING_SYSTEM.md](docs/00_WEBSITE_OPERATING_SYSTEM.md)** -
   the source of truth: mission, architecture, flagship standard, release
   workflow, and what we do NOT do. Read this first.
2. **[docs/01_EDITORIAL_STYLE_GUIDE.md](docs/01_EDITORIAL_STYLE_GUIDE.md)** -
   voice, tone, formatting, official terminology, page templates. Follow it for
   any copy or content work.
3. **[docs/02_ROADMAP.md](docs/02_ROADMAP.md)** - strategic direction.
4. **[docs/03_WEBSITE_BACKLOG.md](docs/03_WEBSITE_BACKLOG.md)** - prioritized
   work. Pick up tasks here and keep it groomed.
5. **[docs/04_CHANGELOG.md](docs/04_CHANGELOG.md)** - record every shipped change
   here (what/why/impact/commits/follow-ups).

**Maintain the docs as you work:** log shipped work in the CHANGELOG and update
the BACKLOG. If the repo and docs disagree, reconcile and note why.

## Hard rules (from the Operating System)

- No lead forms, service/pricing pages, or "book a call" / consultation CTAs.
- No consulting or agency positioning in copy, metadata, or structured data.
- No em dashes (hyphens only). No fake internal links (use a TODO comment).
- The newsletter (Hu's Weekly Hoot, LinkedIn) is the only follow mechanism, and
  it is an invitation to follow the research, never a sales CTA.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Supabase (`blog_posts`)
- Deployed on Vercel (push to `main` deploys). Blog uses ISR (`revalidate = 60`).

## Design system

- Dark mode default; glassmorphism cards (`backdrop-blur-md`, `bg-white/[0.05]`,
  `border border-white/[0.08]`).
- Colors: dark bg `#1a2a32`, deep teal `#1a3a4a`, accent blue `#2d7d9a`, light
  text `#f7f9fb`, muted gray `#8a9aa2`, gold `#c5a94e` (sparingly).
- Type: DM Sans (headings/body), JetBrains Mono (labels/eyebrows/code). Clean
  hierarchy H1 -> H2 -> H3, no skipping.
- Logo (owl with H+U): nav, footer, favicon, OG only. Never decoration.

## Key locations

- Routes: `src/app/**`. Flagship pages: `src/app/geo`, `src/app/aeo`.
- Shared constants (nav, categories): `src/lib/constants.ts`.
- Structured data: `SchemaMarkup` component; site-wide schema in the root layout.
- Blog authoring template: `Content/blog/_TEMPLATE-research-article.md`.
- OG image generation: `scripts/gen-og-png.mjs`, `scripts/regen-blog-svgs.mjs`.

## Validate before shipping

Run `npx tsc --noEmit`, `npx next lint`, and `npx next build`. Verify observable
behavior (redirects, renders, links resolve 200, JSON-LD validates from the
rendered HTML).
