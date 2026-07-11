# Website Operating System

The source of truth for theroberthu.com. If you are an AI engineer or editor
picking up this project, **read this document first**, then
[01_EDITORIAL_STYLE_GUIDE.md](01_EDITORIAL_STYLE_GUIDE.md). Log your work in
[04_CHANGELOG.md](04_CHANGELOG.md) and groom [03_WEBSITE_BACKLOG.md](03_WEBSITE_BACKLOG.md)
as you go.

## What this site is

theroberthu.com is an **editorial AI Commerce publication and personal
knowledge hub**, authored by Robert Hu. It is not a consulting site, an agency
site, or a lead-generation funnel. Consulting has been fully retired (see
[04_CHANGELOG.md](04_CHANGELOG.md)). Everything on the site exists to build
long-term authority, not to capture leads.

## Mission

Become the leading independent publication covering AI Commerce: how AI is
changing the way products are discovered, evaluated, recommended, and bought.

## Vision

Build durable authority through original research, practical frameworks, and
evergreen flagship resources that operators, executives, and AI systems cite,
rather than through promotion or lead capture.

## Editorial philosophy

- Publish original thinking, not aggregated news.
- Explain **why** a change matters, not just that it happened.
- Prioritize evergreen flagship pages over disposable posts.
- Connect ideas across merchandising, marketing, technology, operations, and
  customer behavior. The insight usually lives where these meet.
- Build trust before anything else. Credibility is the only asset.
- Quality over quantity, always.

## Publishing philosophy

- The blog is a **public research notebook**. Posts document what Robert is
  learning about how technology changes commerce.
- Flagship pages (`/geo`, `/aeo`) are living, evergreen resources. They carry a
  "Last updated" note and are revised as platforms evolve, not left to rot.
- Every post follows the research article structure
  ([Content/blog/_TEMPLATE-research-article.md](../Content/blog/_TEMPLATE-research-article.md)):
  Question, Why It Matters, Observations, Evidence, Connections, Implications,
  Open Questions.
- The newsletter (Hu's Weekly Hoot, on LinkedIn) is the single "follow"
  mechanism. It is an invitation to follow the research, never a sales CTA.

## Architecture (current state)

- **Stack:** Next.js 14 (App Router, TypeScript), Tailwind CSS, Supabase
  (`blog_posts`), deployed on Vercel (push to `main` deploys). Blog uses ISR
  (`revalidate = 60`).
- **Live routes:** `/` (home), `/about`, `/geo` (flagship), `/geo/alexa-for-shopping`,
  `/geo/walmart-sparky`, `/aeo` (flagship), `/blog`, `/blog/[slug]`,
  `/work` (noindex portfolio).
- **Navigation:** Home, AI Search (GEO) → `/geo`, AI Agents (AEO) → `/aeo`,
  Blog, About. (`NAV_LINKS` in `src/lib/constants.ts`.)
- **Topic clusters:**
  - **GEO cluster:** `/geo` hub + `/geo/alexa-for-shopping` + `/geo/walmart-sparky`
    + GEO blog posts.
  - **AEO cluster:** `/aeo` hub + agentic-commerce blog posts.
  - Same-category blog posts auto-link via the "Related Research" block on
    `/blog/[slug]`.
- **Structured data:** rendered through the `SchemaMarkup` component. The root
  layout emits site-wide `Person`, `WebSite`, and `SiteNavigationElement`.
- **OG images:** SVG source in `public/images/`, pre-rendered to PNG locally
  (`scripts/gen-og-png.mjs`, `scripts/regen-blog-svgs.mjs`) because social
  scrapers and Google prefer raster. Blog PNGs are served via `/api/og/[slug]`.
- **Retired / archived:** `/geo-audit` → `/geo`; `/services` index → `/`;
  `/services/*` sub-pages are noindex and out of the sitemap, preserved for a
  future research-hub rebuild; `LeadForm`, the lead-notification email
  templates, and `/api/lead-notifications` are dormant (archived-only).

## AI organization

- Claude (via Claude Code) is the primary build, edit, and research engine.
  These docs are the context it reads first.
- Work is committed in small, self-describing commits, validated with lint,
  typecheck, and build before shipping.
- `CLAUDE.md` at the repo root is the short pointer that routes every session
  into these docs. It must not duplicate them.
- Note: several skills under the plugin system (GEO audit report, tech-stack
  audit, digital-marketing audit) are consulting-era artifacts and are **not**
  part of the editorial site. Do not wire them into the publication.

## Website operating rhythm

- **Continuous:** publish research posts to the notebook as findings emerge.
  Cadence follows quality, not a quota.
- **As platforms change:** revise the affected flagship page and bump its
  "Last updated" note and schema `dateModified`.
- **Per change:** append to the changelog; groom the backlog.
- **Periodically:** review topic clusters for gaps and internal-linking
  opportunities; reconcile docs against the repo.

## Release workflow

1. Pick up work from [03_WEBSITE_BACKLOG.md](03_WEBSITE_BACKLOG.md).
2. If on `main`, branch for non-trivial changes; small edits may go on `main`.
3. Make the change. Follow [01_EDITORIAL_STYLE_GUIDE.md](01_EDITORIAL_STYLE_GUIDE.md).
4. Validate: `npx tsc --noEmit`, `npx next lint`, `npx next build`.
5. Verify observable behavior (redirects, renders, links resolve 200, JSON-LD
   validates from the rendered HTML).
6. Commit with a clear message; push to `main` (Vercel deploys).
7. Record the change in [04_CHANGELOG.md](04_CHANGELOG.md) and update the backlog.

Releases are grouped thematically (e.g. "Editorial Foundation", "Consulting
Cleanup"), not by rigid versioning.

## Flagship page standard

Every flagship resource (`/geo`, `/aeo`, and future hubs) should follow this
shape:

1. **Hero** (eyebrow, H1, short framing)
2. **In Short** primer (what it is, why it matters, how it differs from the
   adjacent concept)
3. **Core explanation**
4. **Original frameworks** (proprietary, named, defensible)
5. **Practical examples** (weak vs strong, live data where possible)
6. **FAQ**
7. **Key Takeaways** (4 to 6 bullets)
8. **Continue Exploring AI Commerce** (internal links to real pages only)
9. **Last Updated** note
10. **Structured data:** `Article` + `FAQPage` + `BreadcrumbList` (add `HowTo`
    when the page contains a genuine step-by-step framework)

Known variance to reconcile (see backlog): `/geo` currently labels its ending
"Related reading" and uses `Article` + `HowTo`; `/aeo` uses "Continue exploring
AI Commerce" and `WebPage`. The target is the standard above for both.

## Success metrics

We measure authority, not funnels:

- Organic search visibility
- AI citations and recommendations (ChatGPT, Perplexity, Google AI Mode, etc.)
- Returning readers and newsletter followers
- Quality backlinks
- Industry recognition

We explicitly do **not** measure leads, consultation requests, or booked calls.

## Decision framework

For any proposed change, ask:

> Does this make theroberthu.com a more valuable, more credible, more
> citable AI Commerce publication?

If yes, and it does not violate "What we do not do", proceed. If it optimizes
for capture, conversion, or short-term traffic at the expense of trust, decline.

## What we intentionally do NOT do

- No lead forms.
- No service or pricing pages, and no "book a call" / consultation CTAs.
- No gated content or pop-up capture.
- No SEO-farm or aggregated-news filler.
- No consulting or agency positioning in copy, metadata, or structured data.
- No em dashes. Hyphens only.
- No fake or placeholder internal links. If a page does not exist yet, leave a
  TODO comment instead of linking it.
