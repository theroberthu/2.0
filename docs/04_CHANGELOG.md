# Changelog

The record of what shipped and why. Each release notes: what changed, why,
expected impact, key commits, and follow-ups. Newest first. Releases are
thematic, not strict semver.

---

## Release 1.3 - Documentation and Operating System

**What changed.** Established `/docs` as the project's source of truth: an
Operating System document, an Editorial Style Guide, a Roadmap (Now/Next/Later/
Future), a prioritized Backlog, and this Changelog. Rewrote `CLAUDE.md` to route
every session into the docs and to reflect the editorial (not consulting)
direction.

**Why.** The repository had been repositioned faster than it was documented.
New AI sessions needed a single, accurate context so the direction stays
coherent over time.

**Impact.** Future work starts from shared standards (flagship page shape,
voice, terminology, what we do not do) instead of re-deriving them.

**Follow-ups.** Reconcile the flagship-standard variances now recorded in the
backlog (`/geo` ending label and schema type; "In Short" primer).

---

## Release 1.2 - Consulting Cleanup

**What changed.**
- Retired `/geo-audit`; deleted the route and permanently redirected it to
  `/geo` (`3ae18b8`).
- Converted `/aeo` into a flagship editorial resource: removed the newsletter/
  CTA ending, added the Key Takeaways + Continue Exploring + Last Updated
  ending, an "In Short" primer, and fixed the SEO/GEO/AEO tagline spacing
  (`ffc8d45`).
- Retired the `/services` index (redirect to `/`), deleted `PricingCarousel`,
  fixed the legacy contact/booking redirects (`/contact`, `/book-a-call`,
  `/consultation`, etc.) that pointed at the archived `/free-strategy-session`
  to point at `/about`, and removed the stale "GEO Audit" consulting project
  from `/work` (`3be59e4`).

**Why.** Remaining consulting/service infrastructure created strategic drift and
broken redirects that no longer fit an editorial publication.

**Impact.** No live service pages, pricing, or booking paths. Legacy URLs
resolve to editorial destinations instead of 404s. `/aeo` matches the flagship
standard.

**Follow-ups.** `/services/*` sub-pages remain noindex/archived; dormant lead
API and email templates still carry consulting copy (see backlog Critical).

---

## Release 1.1 - Editorial Foundation

**What changed.**
- Repositioned the **homepage** as a research notebook with a featured-post
  focal point (`ca830bf`, `a55837f`, `ae6110f`).
- Rewrote **/about** as a research philosophy rather than a resume (`65a46de`,
  `6e095e6`).
- Repositioned the **footer** as a research-site footer (`d30d5c6`).
- Scrubbed consulting positioning from **metadata and JSON-LD** site-wide, set
  the writing/research positioning, dropped Services from the nav schema, and
  removed embedded YouTube (`2549fee`, `7de9a6a`, `cc5c780`, `b2fe4fc`,
  `7dff4ce`, `23ae615`).
- Gave **blog posts** the research article structure and an automatic
  category-based "Related Research" cluster; repositioned the article newsletter
  CTA to an invitation to follow the research; removed the related-service promo
  block (`88b867b`, `a558947`, `b8e5740`).
- Converted **/geo** into the first flagship editorial resource, with a dedicated
  OG card and tightened `Article` structured data (`a89eff1`, `ca59f46`,
  `7bd6bca`).
- Ran the **Archive and Evolve** transition on the consulting service pages
  (noindex, out of sitemap, content preserved) and made the newsletter the sole
  site CTA (`aab897c`, `7053fe3`).

**Why.** Shift the site's identity from consulting/lead-gen to an editorial AI
Commerce publication built on original research.

**Impact.** Home, About, footer, blog, and the first flagship (`/geo`) all read
as a publication. Structured data and metadata reinforce the research
positioning for search and AI systems.

**Follow-ups.** Consolidated into Release 1.2 (finish retiring consulting
infrastructure).
