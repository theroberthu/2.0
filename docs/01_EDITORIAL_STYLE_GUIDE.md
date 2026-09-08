# Editorial Style Guide

Practical rules for writing and building on theroberthu.com. Read
[00_WEBSITE_OPERATING_SYSTEM.md](00_WEBSITE_OPERATING_SYSTEM.md) first for the
why; this document is the how.

## Voice

Write like an **operator, analyst, and teacher**. Someone who has run the
systems, studies the shifts, and explains them plainly.

Do not write like a consultant, a salesperson, or an SEO content farm.

## Tone

- Direct and confident, never hype. State what is happening and what it means.
- Observational, not promotional. "Here is what the data shows", not "You need
  to act now."
- Specific over general. Name the platform, the number, the mechanism.
- Honest about uncertainty. Naming open questions is a strength, not a weakness.
- No urgency or funnel language ("Start now", "the window is closing",
  "book a call").

## Formatting

- Short paragraphs. Two to four sentences. No walls of text.
- Lead with the point, then support it.
- Use bold sparingly, for genuine emphasis or key terms on first use.
- Prefer a clean bulleted list over a dense paragraph when enumerating.
- Tables for true comparisons (SEO vs GEO, weak vs strong), not decoration.

## Heading hierarchy

- One `H1` per page (the title).
- `H2` for major sections, `H3` for sub-points. Do not skip levels.
- On flagship and blog pages, `H2` headings feed the auto table of contents,
  so keep them scannable and descriptive.

## Titles: editorial H1 and search title

Every article carries **two** titles, and they answer different questions. Set
both deliberately. The template already routes them without any code change:
`src/app/blog/[slug]/page.tsx` uses `post.meta_title || post.title` for the
`<title>` tag, Open Graph, and Twitter, and renders `post.title` as the `H1`.
`src/lib/blog-schema.ts` uses `post.title` as the `Article` JSON-LD `headline`.

| Field | Surfaces it drives | Question it answers |
| --- | --- | --- |
| `title` | on-page `H1`, `Article` JSON-LD `headline` | "What is Robert's argument?" |
| `meta_title` | `<title>`, `og:title`, `twitter:title` | "What is the searcher trying to understand?" |

**`title` is editorial.** Thesis-led framing, a distinctive point of view, a
strong human-readable headline. This is the sentence a reader repeats, and the
one an AI system reads as the claim of the piece.

**`meta_title` is search discovery.** Name the entity, product, or platform
explicitly. Use the vocabulary a person actually types. Describe directly what
the article answers. Query alignment beats cleverness on this surface.

Worked example, `/blog/anthropic-claude-commerce-intelligence-layer`:

- **Editorial H1:** "Anthropic Is Building the Intelligence Layer for
  Merchant-Owned Commerce" - states the argument, which is what the reader and
  the JSON-LD headline should carry.
- **Search title:** "Claude for Commerce: How Anthropic's Shopping and Merchant
  Agents Work" - names the product a person would search for and says what the
  article explains.

Rules:

- Do not duplicate the H1 into `meta_title` by default. Duplicate it only when
  the H1 genuinely does both jobs well, and say why.
- Do not rewrite a good editorial H1 to make it search-friendly. That is
  `meta_title`'s job. The H1 does not have to carry search vocabulary.
- Do not keyword-stuff `meta_title`, and do not fall back to a generic SEO
  headline. It is still a sentence a person reads in a result.
- Aim for about 60 characters before the automatic " | Robert Hu" suffix, and
  front-load the entity so a truncated result still reads correctly. The
  Anthropic example runs 70 characters; that is acceptable because "Claude for
  Commerce" survives the cut. Length is a guideline, front-loading is the rule.
- Every draft returned for Editorial Board review states **both** titles
  explicitly, with one line on why each fits its surface.

Known side effect: because `og:title` and `twitter:title` follow `meta_title`,
social shares carry the **search** title, not the editorial H1. Decide that per
article rather than discovering it after publishing.

Measurement: split-title articles are tracked in Search Console and compared
against identical-title articles at similar average positions. See "Split-title
measurement" in
[00_WEBSITE_OPERATING_SYSTEM.md](00_WEBSITE_OPERATING_SYSTEM.md).

## Paragraph style

- One idea per paragraph.
- Open each section by answering the question a reader actually has.
- End substantive sections with the "so what", not a sales pitch.

## Sourcing platform rules

Platforms ship near-identical features on separate surfaces and govern them
differently. Google AI Overviews and Google AI Mode are the standing example: as
of September 2026, Google published detailed ad eligibility, opt-out, placement
and reporting rules for AI Overviews, and no equivalent public documentation for
AI Mode could be found.

Rules for these are the load-bearing claims. Treat them accordingly.

- **Name the surface every time.** Never write "AI surfaces" where a rule applies
  to one of them. A rule documented for one surface is evidence about that
  surface only.
- **Never carry a rule across surfaces by assumption**, and never "tidy" an
  article by generalizing one. Where two surfaces are governed differently, the
  asymmetry is often the story.
- **Do not let a secondary source establish a platform rule.** A summary,
  aggregator, trade post, or search-engine answer may only be cited for a rule if
  it points to a platform statement explicitly about that surface. Otherwise open
  the primary documentation and read it.
- **Verify absence by searching, and report it as your search, not as fact.**
  Write "I could not find equivalent published documentation for X", never
  "X is undocumented".
- **Practitioner testimony is evidence of observed behavior, not of policy.**
  Credit the practitioner for what they saw. Do not use their account of a rule
  to fill a gap in the platform's own documentation.

A known failure mode: a search summarizer answered a question about one surface
using the other surface's documentation, presented as though it applied. It was
caught only by opening the source. Assume that conflation exists in secondary
coverage and check.

## Internal linking

- Link generously to real internal pages to build topic clusters. This helps
  readers and helps AI systems map authority.
- Link with descriptive anchor text (the destination's topic), never "click
  here".
- Blog posts auto-surface same-category posts via the "Related Research" block;
  still hand-link the most relevant pieces inline.
- **Never link to a page that does not exist.** Leave a `TODO` comment instead.

## Naming conventions

- Files and routes: kebab-case (`walmart-sparky`, `geo-vs-seo-marketplace-sellers`).
- React components: PascalCase (`SchemaMarkup`, `BlogSidebar`).
- Constants: SCREAMING_SNAKE_CASE (`NAV_LINKS`, `BLOG_CATEGORIES`).
- Blog slugs are the durable identifier: slug, OG image basename, and
  `Content/blog/<slug>.md` draft all share it.

## Official terminology

Use these exact names. Consistency matters for entity clarity and AI citation.

- **AI Commerce** (the domain; capitalized as a proper term)
- **GEO** (Generative Engine Optimization) - getting products recommended
  inside AI answers
- **AEO** (Agentic Engine Optimization) - getting products chosen and purchased
  by AI agents
- **Amazon Alexa for Shopping** - the primary name for Amazon's AI shopping
  agent. Use "formerly Rufus" only for historical context; never "Amazon Rufus"
  as the primary label.
- **Google AI Mode** - Google's AI answer surface (not "SGE", not "AI Overviews"
  when referring to AI Mode specifically)
- **Walmart Sparky**, **Universal Commerce Protocol**, **agentic commerce** -
  as written here.

## Product naming

- **Hu's Weekly Hoot** - the LinkedIn newsletter. The one follow mechanism.
- **RecoScope** (getrecoscope.com) - the AI-recommendation benchmarking project;
  the data source behind GEO/AEO writing.
- **YourGEOReport** (yourgeoreport.com) - a separate product; reference as a
  built product, not a service offered on this site.

## Flagship page template

Follow the flagship page standard in
[00_WEBSITE_OPERATING_SYSTEM.md](00_WEBSITE_OPERATING_SYSTEM.md): Hero, In Short,
Core explanation, Original frameworks, Practical examples, FAQ, Key Takeaways,
Continue Exploring AI Commerce, Last Updated, structured data. The ending
matches this pattern:

- **Key takeaways:** 4 to 6 concise bullets summarizing the page.
- **Continue Exploring AI Commerce:** a clean list of real internal links with a
  one-line description each. No CTA buttons.
- **Update note:** "Last updated: <Month Year>" and "This guide is updated as AI
  commerce platforms continue to evolve."

## Blog post template

Do not reinvent structure. Copy
[Content/blog/_TEMPLATE-research-article.md](../Content/blog/_TEMPLATE-research-article.md)
to `Content/blog/<slug>.md` and fill it in. Body sections, in order: Question,
Why It Matters, Observations, Evidence, Connections, Implications, Open
Questions. The final "Related Research" block is generated automatically from
the post's category; do not hand-write it. Set an accurate `category` because
it drives the topical cluster.

## Image guidelines

- OG cards are 1200x630, dark navy (`#1a2a32`) with accent blue (`#2d7d9a`) and
  gold (`#c5a94e`). Author block reads "ROBERT HU / theroberthu.com".
- Author SVG source in `public/images/`; render the PNG locally
  (`scripts/gen-og-png.mjs`) because Vercel has no fonts at runtime. Reference
  the **PNG** in OG, Twitter, and JSON-LD; the on-page SVG is fine for display.
- Every image needs descriptive `alt` text.
- The owl logo is for nav, footer, favicon, and OG only. Never decoration.

## Things to avoid

- Lead forms, service CTAs, pricing, "book a call" or consultation messaging.
- Marketing-funnel and urgency language.
- Em dashes (use hyphens), and curly/en dashes in numeric ranges (use hyphens).
- "Amazon Rufus" as a primary label, "SGE", or outdated platform names.
- Fake internal links, thin aggregated content, keyword stuffing.
- Rewriting solid editorial content just to change it.
