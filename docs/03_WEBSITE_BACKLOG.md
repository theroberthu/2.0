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
