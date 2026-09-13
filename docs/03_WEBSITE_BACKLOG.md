# Website Backlog

A living, prioritized list of concrete work. Strategic direction lives in
[02_ROADMAP.md](02_ROADMAP.md); shipped work moves to
[04_CHANGELOG.md](04_CHANGELOG.md). Priorities: Critical (trust or correctness
risk), High (clear near-term value), Medium, Low.

## Critical

- **Resolve dormant lead infrastructure.** `/api/lead-notifications` and
  `src/lib/email-templates.ts` still contain consulting copy ("Book a Free
  Strategy Session") and link to `/free-strategy-session`, which is archived and
  404s. Only the archived `LeadForm` can trigger them, but they are live code.
  Decide: delete the API route + templates, or keep them dormant with the
  consulting copy removed.

## High

- **Review high-impression / low-click articles for `meta_title` optimization.**
  Change `meta_title` only. Do **not** rewrite the editorial `H1`, the article
  body, or the slug. Pull query-level Search Console data per article first and
  let the queries the article actually surfaces for determine the replacement
  title; do not guess at vocabulary. Priority candidates: Helium 10 MCP,
  ChatGPT Ads, Costco ecommerce strategy, Trade Desk Kokai Zuma, Walmart Sparky
  AOV, Adobe AI traffic. Record before/after CTR at comparable average position
  and feed the result back into the split-title experiment in
  [00_WEBSITE_OPERATING_SYSTEM.md](00_WEBSITE_OPERATING_SYSTEM.md).
- **AI Commerce hub page.** Build a `/ai-commerce` flagship that anchors the
  domain and routes into GEO, AEO, and platform clusters. AI Commerce is
  currently a theme with no home.
- **Standardize the flagship pages.** Reconcile `/geo` and `/aeo` to one
  standard: rename `/geo`'s "Related reading" ending to "Continue Exploring AI
  Commerce", add an "In Short" primer to `/geo`, and use `Article` schema on
  both (`/aeo` currently uses `WebPage`).
- **Homepage audit.** Confirm the homepage reflects the publication direction
  end to end and links cleanly into the flagship clusters.
- **Blog taxonomy review.** `BLOG_CATEGORIES` still uses consulting-era labels
  ("E-commerce Strategy", "Digital Marketing", "Digital Transformation", "GEO &
  SEO", "The Messy Middle"). Evaluate an AI-Commerce-aligned taxonomy; category
  drives the Related Research clusters, so change carefully.

## Medium

- **Reconcile or retire the legacy authoring docs.** `BLOG_STANDARDS.md` and
  `NEWS_TO_BLOG.md` at the repo root are consulting-era and are not referenced
  by `CLAUDE.md`. They still instruct linking to service pages, ending posts
  with a CTA, and writing for "potential consulting clients", all of which the
  Operating System bans. The conflicting meta-title rule has been pointed at
  the style guide; the rest of both documents still contradicts current
  practice. Decide: fold the parts worth keeping into
  [01_EDITORIAL_STYLE_GUIDE.md](01_EDITORIAL_STYLE_GUIDE.md), or delete them.
- **Structured-data / entity improvements.** Add an entity graph (Organization
  linkage, `sameAs`, `about`/`mentions`) so AI systems resolve the site as an
  AI Commerce authority.
- **Glossary of AI Commerce terms.** Evergreen, linkable definitions reinforcing
  official terminology.
- **Decide the fate of `/services/*` sub-pages.** They are noindex and preserved
  per Archive and Evolve. Either rebuild as research hubs or retire and redirect
  (`/services/geo`, `/services/listing-optimization` -> `/geo`; others -> `/`).
- **Point legacy `/services/*` redirects at editorial destinations.** Several
  legacy slugs still redirect to noindex service sub-pages instead of `/geo`.

## Low

- **Regenerate `og-default.png`.** The generic fallback OG card may still carry
  the old positioning text.
- **Refresh `/work` framing.** Noindex portfolio is clean of consulting sales,
  but review the "consult" phrasing in the YourGEOReport entry for tone.
- **Visual polish.** Incremental design refinements across flagship pages.
- **Prune archived routes** (`_archived-routes/case-studies`,
  `free-strategy-session`) once certain they will not be revived.
