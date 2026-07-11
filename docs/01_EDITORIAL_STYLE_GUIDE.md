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

## Paragraph style

- One idea per paragraph.
- Open each section by answering the question a reader actually has.
- End substantive sections with the "so what", not a sales pitch.

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
