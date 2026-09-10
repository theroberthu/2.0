# Changelog

The record of what shipped and why. Each release notes: what changed, why,
expected impact, key commits, and follow-ups. Newest first. Releases are
thematic, not strict semver.

---

## Release 1.8 - About page professional narrative (2026-09-10)

**What changed.** Targeted editorial revision of `/about`. No rebuild, no
component or styling changes beyond one card-width adjustment the new content
required.

- **Career section restructured.** Ten flat stage pills (Marketing, Startup,
  Technology, Marketplaces, Amazon, ...) became three connected chapters:
  Build, Adapt, Scale. Each carries its stages plus what that period taught.
  All ten original stages survive inside the chapters; Agency was added to
  chapter two. Timeline component, connector lines, glass treatment and gold
  emphasis on the final chapter all preserved.
- **Hero identity.** Accent line moved from "I study how technology changes
  commerce" to "I turn messy business problems into systems that work," with
  "Operator and builder" opening the body. The study line was kept, relocated
  into the body where it explains why he studies rather than serving as the
  whole identity.
- **Principles rewritten from observations to operating principles.** Five
  cards became four: start with the business problem, stay close to the work,
  prove the workflow before automating it, and the preserved "Understanding
  systems matters more than mastering tools." Four also fixes the orphaned
  fifth card in the two-column grid.
- **Research areas** gained "AI-Enabled Workflows" and "Agent Governance".
- **Meta description** now leads with operator and builder, keeping the domains.

**Why.** The page defined Robert primarily as a researcher, and the career
section read as a list of unrelated ecommerce roles rather than a progression.
The durable identity sits above any single domain or technology: an operator
and builder who turns ambiguity into systems.

**Impact.** Mobile verified at 375px: zero horizontal overflow, chapter cards
at 335px, longest stage string wraps to two lines without clipping. `tsc`,
`next lint` and `next build` all clean. Zero em dashes.

**Deliberately not changed.** `jobTitle` ("Commerce and Technology Researcher")
appears in eight places site-wide including the root layout, all four flagship
pages and `blog-schema.ts`. Changing it on `/about` alone would split the entity
across the site. If the operator identity should reach structured data, that is
a separate coordinated change.

**Removed, preserved here in case they are wanted back.** Two principles cut
when tightening to four: "Technology changes relationships more than
departments" and "AI is changing commerce because it changes customer decision
making". The third cut, about connecting ideas across disciplines, survives in
the closing section.

## Release 1.7 - Split editorial and search titles become the default (2026-09-04)

**What changed.** Documentation only. No live article, route, or database row
was modified.

- [01_EDITORIAL_STYLE_GUIDE.md](01_EDITORIAL_STYLE_GUIDE.md): new section
  "Titles: editorial H1 and search title". `title` is editorial (H1 +
  `Article` JSON-LD headline, answering "What is Robert's argument?");
  `meta_title` is search discovery (`<title>`, `og:title`, `twitter:title`,
  answering "What is the searcher trying to understand?"). Do not duplicate the
  H1 into `meta_title` by default, do not rewrite a good H1 to make it
  search-friendly, do not keyword-stuff. Every draft returns both titles with a
  line on why each fits its surface.
- [00_WEBSITE_OPERATING_SYSTEM.md](00_WEBSITE_OPERATING_SYSTEM.md): new
  "Split-title measurement (open experiment)" under Success metrics. Track
  split-title articles in Search Console and compare CTR against
  identical-title articles **at similar average positions**.
- [Content/blog/_TEMPLATE-research-article.md](../Content/blog/_TEMPLATE-research-article.md):
  `meta_title` is now a distinct search-title field with inline guidance, the
  header states the two-title requirement, and the JSON-LD `headline` is
  explicitly the editorial H1.
- `BLOG_STANDARDS.md` and `NEWS_TO_BLOG.md` (legacy, consulting-era): the
  conflicting "meta title = post title" rule was marked superseded and pointed
  at the style guide. The rest of both documents still contradicts current
  practice; backlogged.

**Why.** The first article published with deliberately separate titles,
`/blog/anthropic-claude-commerce-intelligence-layer`, showed 720 impressions,
15 clicks, 2.1% CTR at average position 7.6, against a site-wide 1.44K
impressions, 19 clicks, 1.3% CTR at average position 10.4 in the same window.

**Read that as an early signal, not as proven causality.** Nothing here
establishes that the title split caused the CTR difference, and no future
session should cite this entry as evidence that it did. See the Impact note
below for what is actually unresolved.

**Impact, stated carefully.** This is an early signal, **not causal proof**.
Freshness, query mix, topic demand, and the article's better average position
all plausibly contribute, and one article in one window cannot separate them.
The practice is adopted because it is cheap, reversible, and structurally
sound: the two surfaces genuinely serve different readers, and the template
already routes them correctly with no code change
(`post.meta_title || post.title` for metadata, `post.title` for the H1 and
schema headline).

**Known side effect.** `og:title` and `twitter:title` follow `meta_title`, so
social shares carry the search title rather than the editorial H1. Documented,
not fixed, and deliberately deferred to its own implementation pass. Pointing
`openGraph.title` at `post.title` in `src/app/blog/[slug]/page.tsx` is a small
change, but it alters live rendered behavior on every article, so it gets an
explicit change and its own verification rather than riding along with a
documentation update.

**Follow-ups.** New High backlog item to review high-impression / low-click
articles for `meta_title`-only optimization (Helium 10 MCP, ChatGPT Ads, Costco
ecommerce strategy, Trade Desk Kokai Zuma, Walmart Sparky AOV, Adobe AI
traffic), gated on query-level Search Console data. New Medium item to
reconcile or retire the legacy authoring docs.

## Release 1.6 - Consulting CTA removal from article bodies (2026-08-21)

**What changed.** Removed retired consulting calls to action, client
testimonials, service pricing, and links to retired service pages from **63 of
74 published article bodies** in Supabase (`scripts/cleanup-consulting-ctas.mjs`).

Operations applied:
- 46 whole CTA paragraphs deleted ("book a free 15-minute strategy session",
  "an e-commerce strategy consultation can help you").
- 17 paragraphs trimmed at sentence level, preserving the "For more on X, see
  <blog link>" sentences that shared those paragraphs.
- 11 client-testimonial blocks removed (two markup variants: an outer
  `div.blog-testimonial-cta` and a nested `div.blog-testimonial-block`).
- 58 `/services/*` links unwrapped, keeping the anchor text as plain prose.
- 2 service-pricing mentions ($499 audit) removed.

**Why.** The Operating System's first hard rule bans lead forms and
"book a call" / consultation CTAs. The Archive and Evolve pass covered routes,
metadata, and structured data but never touched article bodies, so the CTAs were
live on roughly 85% of published posts. 48 of them linked to
`/free-strategy-session`, which is archived and returns 404.

**Impact.** Site-wide scan now reports **0 hits** for
`/free-strategy-session` links, `/services/*` links, "consultation", "strategy
session", "strategy call", testimonial markup, `$499` pricing, and "book a free".
All 74 published posts have balanced `<p>`, `<div>`, and `<a>` tags with no empty
paragraphs or orphaned headings. No replacement CTA was inserted: every article
already renders the "Follow the research" newsletter banner plus an inline
newsletter card, so the consulting CTAs were pure duplication.

**Deliberately kept.** Three RecoScope product mentions (own product, not a
consultation) had only their trailing "Or book a strategy session" sentence
removed.

**Rollback.** Full pre-change snapshot of all 74 rows:
`backups/blog_posts-backup-2026-08-21.json`.

**Follow-ups.** `amazon-advertising-strategy-2026` retains third-person
credential framing ("Robert Hu has spent over 20 years watching brands make this
mistake"). It is not a CTA, so it was left alone; review for tone separately.

## Release 1.5 - Dead URL and Redirect Cleanup

**Release date:** 2026-07-26. Commit `7098408`.

**What changed.** GA4 landing-page data surfaced 42 sessions (about 6.5% of all
sessions) arriving on 404s at roughly 0% engagement, plus redirects that chained
or resolved into dead ends. Most of that traffic was Direct, meaning stale
external links rather than search results.

- `/free-strategy-session` -> `/about`. The retired consulting page was still
  drawing 12 sessions from external links such as the email signature and
  LinkedIn.
- `/blog/amazon-lens-live-ai-visual-search` -> `/geo/alexa-for-shopping`,
  `/blog/journey-ecom-ai` -> `/blog/ai-compresses-messy-middle-ecommerce`, and
  `/blog/how-to-start-online-business` -> `/blog`. All three predate the 2.0
  rebuild and exist in neither Supabase nor the repository.
- `/case-studies`, `/case-studies/` and `/case-studies/:slug*` -> `/about`. The
  route was archived and returned 404, and the trailing-slash rule redirected
  into that 404.
- Removed two redirect chains: `/geo-audit/results` and `/services/` now point
  straight at their destinations.
- Legacy service slugs repointed from the noindex `/services/*` sub-pages to
  live editorial destinations, so inbound links no longer dead-end for search or
  land readers on consulting copy.
- Corrected the stale `utm-tagging-guide.md` header, which still named the
  retired strategy-session page as the primary CTA.

**Analytical note.** Site-wide engagement of 24.73% and 14s average is not a
usable editorial baseline, because it blends 404 traffic, `(not set)` sessions,
and low-quality Direct. Segmented, Organic Search landing on live article pages
runs roughly 57% engagement and 45 seconds. That is the baseline for judging
article changes. Identical pages also behave very differently by channel (the
homepage at 71.4% Organic versus 17.5% Direct), which points to traffic quality
rather than content quality.

**Still open.** No key events are configured, so related-content clicks,
newsletter clicks, and scroll depth are unmeasurable. GA4's automatic `scroll`
event fires at 90% depth and may already provide a retroactive completion
baseline. The remaining dead URLs beyond the visible top 15 of 145 landing-page
rows have not yet been enumerated.

---

## Release 1.4 - Mobile Article Recirculation and Progress

**Release date:** 2026-07-26. Commit `68e8a2a`.

**Affected template:** `/blog/[slug]`, applying to all 68 published articles.

**What changed.** Mobile-only changes to the article template. Desktop layout
unchanged.

- Compact Related Research list below `md`. Three stacked image cards become a
  divider-separated list (category, title, read time), so all three next-reads
  fit in roughly one viewport instead of two screens of images. Desktop keeps
  the card grid via `hidden md:grid`.
- New `ReadingProgress` component: a mobile-only progress bar measured against
  the `<article>` element, so it completes at the end of the reading rather than
  after the related posts and footer. Hidden at `xl:`, matching the existing
  `MobileTocCard` and `FloatingBookCta` convention.
- "All Posts" back link raised from a 20px to a 44px tap target
  (`py-3 md:py-0`).

**Mobile breakpoint behavior.** Compact list below 768px; card grid at 768px and
above; progress bar below 1280px.

**Why.** A 390x844 audit found the article page running 11.4 screens with the
Related Research block sitting 69% down the page as 1,719px of stacked image
cards, and no scroll progress feedback. Measuring Quanta Magazine at the same
width showed near-identical body type (16px, 350px column, 39 chars/line), which
disproved the initial hypothesis that mobile type was too small. The real
difference was recirculation: Quanta surfaces 22 of 47 internal links above the
50% depth mark. Revised diagnosis: the article asks readers to make their
next-content decision too late and presents that decision inefficiently on
mobile.

**Expected behavioral impact.** Improved end-of-article choice surface and
scroll orientation on mobile. Estimated ~1,350px (roughly 1.6 screens) removed
from the recirculation block.

**Deliberately excluded.** A mobile line-height change from 1.8 to 1.85 was
implemented and then reverted: typography was not the issue, and extra leading
lengthens an already-long page against the primary goal. Mid-article
recirculation was deferred pending behavioral evidence on where readers abandon,
since the article already carries one newsletter interruption. A mobile footer
trim (939px, 1.1 screens) was logged but not touched.

**Known measurement limitations.** No custom pre-change baseline exists for
related-content click-through or scroll depth. GA4 may supply directional
historical scroll and exit context only. Metrics to track from here:
related-content click-through, article completion and deepest-scroll, newsletter
interaction, mobile versus desktop recirculation, and article-page exits.

**Follow-ups.** Device review on a real phone and tablet, since this shipped
straight to production rather than through a preview. Specifically inspect
whether `ReadingProgress` should be structurally anchored beneath the header
instead of relying on `fixed top-[71px]` against a 72px header, which is brittle
if the header height changes. Then instrument article analytics and use
post-launch data as a directional baseline.

**Framing note.** Missing progress feedback is treated as a plausible usability
improvement, not a proven abandonment cause. The evidence supports the former
only.

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
