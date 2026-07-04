# [ARTICLE TITLE]

**Status:** Template. Copy this file to `Content/blog/<slug>.md` for each new article, then fill in every section.
**Target length:** 1,500-2,200 words (7-10 min read)
**Voice:** Practitioner. Direct. A research notebook, not a consulting pitch. No em dashes. Hyphens only.

> Every research article on theroberthu.com follows the same structure. Keep the
> seven body section headings (`## Question` through `## Open Questions`) exactly
> as written and in the same order. Those H2 headings drive the on-page table of
> contents and signal a consistent topical structure to both readers and AI
> systems.
>
> Do NOT hand-write a "Related Research" section. It is generated automatically at
> the bottom of every article from the post's `category`, so choosing an accurate
> category is what builds the topical cluster. Set it deliberately.

---

## Frontmatter (for Supabase insert)

```yaml
slug: <url-slug>
title: "[ARTICLE TITLE]"
# category drives the automatic Related Research cluster. Pick one existing pillar:
# E-commerce Strategy | GEO & SEO | Digital Marketing | Digital Transformation | The Messy Middle
category: "[pillar]"
meta_title: "[ARTICLE TITLE]"
meta_description: "[150-160 chars. Frame it as research on how technology changes commerce, not a service pitch.]"
canonical: /blog/<url-slug>
og_image: /images/blog/<url-slug>.svg
featured_image_alt: "[Descriptive alt text for the featured image]"
author: Robert Hu
read_time_minutes: <n>
published_at: <ISO-8601 datetime, e.g. 2026-07-04T12:00:00.000Z>
status: draft
tags: [<topic>, <topic>, <topic>]
# Optional curated slugs. Leave empty to auto-fill Related Research by category.
related_posts: []
has_faq_schema: <true|false>
```

---

## Schema Markup (JSON-LD)

### Article schema

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[ARTICLE TITLE]",
  "description": "[Same as meta_description]",
  "author": {
    "@type": "Person",
    "name": "Robert Hu",
    "url": "https://theroberthu.com/about",
    "jobTitle": "Commerce and Technology Researcher"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Robert Hu",
    "url": "https://theroberthu.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://theroberthu.com/images/theroberthulogo.png"
    }
  },
  "datePublished": "<ISO-8601>",
  "dateModified": "<ISO-8601>",
  "mainEntityOfPage": "https://theroberthu.com/blog/<url-slug>"
}
```

---

## Featured image specification

**Path:** `/images/blog/<url-slug>.svg`
**Style:** Dark navy template (#1a2a32 bg, #2d7d9a accents, #c5a94e gold)
**Layout:** [Left panel headline; right panel supporting visual]

---

# [ARTICLE TITLE]

<!-- The content below is the published article body. Keep these seven H2 sections,
     in this order, for every article. Short paragraphs. No walls of text. -->

## Question

[The single question this article investigates. State it plainly in one or two sentences. Everything below answers this question.]

## Why It Matters

[Why this question matters now, and to whom. What changes if the reader understands it early instead of after it becomes obvious.]

## Observations

[What you are actually seeing. Concrete, specific, current. What is happening in the market, on the platforms, or in customer behavior right now.]

## Evidence

[The data, examples, screenshots, quotes, or sources behind the observations. Link primary sources. This is what separates research from opinion.]

## Connections

[How this connects across disciplines: merchandising, marketing, technology, operations, and customer behavior. The insight usually lives where these meet.]

## Implications

[What it means for operators and what decisions it should inform. Be concrete about the "so what" without turning it into a sales pitch.]

## Open Questions

[What remains unresolved, what you are still uncertain about, and what you will watch next. Naming the open questions is part of the research, not a weakness.]

<!-- Related Research is appended automatically below this article, built from the
     post's category. Do not write it by hand. -->
