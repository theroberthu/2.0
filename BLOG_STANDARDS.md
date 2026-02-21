# Blog Standards — theroberthu.com

## Purpose
Every blog post should do one or more of these:
1. Demonstrate expertise (e-commerce strategy, GEO, digital transformation, marketplace optimization)
2. Drive organic traffic via SEO and GEO (show up in Google AND AI-generated answers)
3. Build trust with potential consulting clients ($100K–$2M brand owners)
4. Create content that can be repurposed across X, LinkedIn, YouTube, and the newsletter

If a post doesn't serve at least one of these, don't publish it.

---

## Content Pillars
All blog posts should fall under one of these categories:

1. **E-commerce Strategy** — Amazon, Walmart, DTC, marketplace growth, listing optimization
2. **GEO & SEO** — Generative Engine Optimization, AI search, traditional SEO, content discoverability
3. **Digital Marketing** — Paid advertising, content strategy, brand building in the AI era
4. **Digital Transformation** — AI tools, workflow automation, tech stack decisions, operational efficiency
5. **The Messy Middle** — Real lessons from building, failing, and figuring things out (personal brand content)

Every post must have a `category` field matching one of these exactly.

---

## SEO Requirements

### Meta Title
- Format: `[Post Title] | Robert Hu`
- Keep under 60 characters
- Front-load the primary keyword
- Example: "GEO for Amazon Sellers: Why Your Listings Need to Rank in AI Search | Robert Hu"

### Meta Description
- 150–160 characters max
- Include primary keyword naturally
- Include a reason to click (benefit, question, or insight)
- Example: "Your Amazon listings need to rank in ChatGPT and Perplexity, not just Google. Here's how GEO changes product listing optimization."

### URL Slug
- Lowercase, hyphenated, no stop words unless needed for clarity
- Keep short: 3–6 words ideal
- Example: `/blog/geo-amazon-sellers` not `/blog/why-geo-matters-for-amazon-sellers-in-2026`

### Heading Hierarchy
- H1: Post title (one per page, never repeated)
- H2: Major sections
- H3: Subsections within H2s
- Never skip levels (no H1 → H3)
- Include keywords naturally in H2s where it makes sense — don't force it

### Internal Linking
- Every post should link to at least 1 relevant service page
- Every post should link to at least 1 other blog post (when enough posts exist)
- Use descriptive anchor text, not "click here" or "read more"
- Link to case studies where relevant

### Images
- Every post needs at least 1 image (hero/featured image)
- All images need descriptive alt text (include keyword if natural)
- Use WebP format for performance
- Compress before uploading
- Featured image dimensions: 1200x630 (doubles as OG image)

---

## GEO (Generative Engine Optimization) Requirements

These rules ensure posts are optimized for AI-generated search results, not just traditional Google rankings.

### Structure for AI Readability
- Lead with a clear, direct answer or thesis in the first 2–3 sentences
- Use the "answer first, explain second" pattern — AI engines pull from the top of content
- Write clear, self-contained paragraphs that can stand alone as an answer
- Use definition-style sentences for key concepts: "GEO is..." / "Product listing optimization means..."

### Question-Based Sections
- Include at least 2–3 H2s phrased as questions your target audience would ask
- These mirror how people query AI tools: "What is GEO for Amazon sellers?" / "How do I optimize my listings for ChatGPT?"
- Answer each question directly in the first sentence under the H2, then expand

### Entity and Topic Authority
- Mention Robert Hu by name at least once in the body (builds author entity)
- Reference specific platforms by name: Amazon, Walmart, ChatGPT, Perplexity, Google AI Overviews
- Reference specific tools, frameworks, or methodologies where relevant
- Use consistent terminology across all posts (don't switch between "product detail page" and "PDP" randomly — pick one and define the other)

### Cite-Worthy Content
- Include original data, frameworks, or opinions that AI engines would want to cite
- Create "quotable" statements: clear, concise takes that summarize a position
- Example: "ROAS is a compass, not a destination" — these get pulled into AI answers

### Lists and Structured Data
- Use numbered lists or bullet points for processes, steps, and comparisons
- These are highly extractable by AI engines
- Keep list items concise and self-explanatory

---

## Schema Markup (JSON-LD)

Every blog post MUST include the following structured data in the page head:

### Article Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post Title]",
  "description": "[Meta Description]",
  "author": {
    "@type": "Person",
    "name": "Robert Hu",
    "url": "https://theroberthu.com/about",
    "jobTitle": "E-commerce Strategist & Digital Transformation Consultant",
    "sameAs": [
      "https://x.com/theroberthu",
      "https://linkedin.com/in/theroberthu"
    ]
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
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://theroberthu.com/blog/[slug]"
  },
  "image": "https://theroberthu.com/images/blog/[featured-image].webp",
  "articleSection": "[Category]",
  "keywords": ["keyword1", "keyword2", "keyword3"]
}
```

### FAQ Schema (when applicable)
If the post contains question-based H2s, add FAQ schema:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[H2 Question]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[First 1-2 sentences under that H2]"
      }
    }
  ]
}
```

### BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://theroberthu.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://theroberthu.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Post Title]",
      "item": "https://theroberthu.com/blog/[slug]"
    }
  ]
}
```

---

## Blog Post Frontmatter Template

Every blog post should include this frontmatter (or equivalent data fields if stored in Supabase):

```yaml
title: ""
slug: ""
category: "" # Must match one of the 5 content pillars
meta_title: "" # Under 60 characters
meta_description: "" # 150-160 characters
featured_image: "" # /images/blog/filename.webp
featured_image_alt: ""
author: "Robert Hu"
date_published: "" # YYYY-MM-DD
date_modified: "" # YYYY-MM-DD
keywords: [] # 3-5 target keywords
related_posts: [] # Slugs of related blog posts
related_services: [] # Slugs of related service pages
is_published: true
reading_time: "" # Estimated in minutes
excerpt: "" # 1-2 sentence summary for blog index cards
```

---

## Writing Style

### Voice
- Confident but not arrogant — "quiet operator" energy
- Teach through showing, not lecturing
- Use "I" when sharing experience, "you" when addressing the reader
- Write like you're talking to a smart brand owner, not an academic
- No fluff, no filler paragraphs, no "in today's fast-paced world" openers

### Formatting
- Short paragraphs (2-4 sentences max)
- Use subheadings every 200-300 words
- Bold key takeaways or important phrases sparingly
- No em dashes — use commas, periods, or parentheses instead
- Include a Key Takeaways section at the top for all posts (see Scannability Rules below)

### Scannability Rules
- Every blog post MUST include a **Key Takeaways** section at the very top (2-4 bullet points: key takeaway + one compelling number)
- Bold key numbers, statistics, and dollar figures throughout — readers scan for data points
- No H2 section should exceed 4 paragraphs before the next heading
- Every H2 section must lead with the most important sentence first, not a warm-up or lead-in paragraph
- Use callout boxes for before/after examples, key quotes, or math breakdowns to make them visually distinct
- Short paragraphs: 2-3 sentences max. Wall of text = reader leaves
- If a post exceeds 2,000 words, it needs a subheading every 200-300 words without exception

### Length
- Standard posts: 800–1,500 words
- Deep dives: 1,500–3,000 words
- Quick takes: 400–800 words
- Don't pad for word count — say what needs to be said and stop

### CTA Rules
- Every post ends with a CTA
- Rotate between: "Book a consultation", "Read a related case study", "Check out [related service]"
- Keep it one sentence, natural, not salesy
- Example: "If your listings aren't ready for AI-powered search, let's talk about a GEO audit."

---

## Blog Index Page Rules

- Display posts in reverse chronological order
- Each card shows: featured image, category tag, title, excerpt, reading time, date
- Cards use glassmorphism style matching the rest of the site
- Filter/sort by category
- Pagination or infinite scroll (keep page load fast)

---

## Open Graph / Social Sharing

Every post must have:
- `og:title` — Same as meta title
- `og:description` — Same as meta description
- `og:image` — Featured image (1200x630)
- `og:url` — Canonical URL
- `og:type` — "article"
- `twitter:card` — "summary_large_image"
- `twitter:site` — "@theroberthu"
- `twitter:creator` — "@theroberthu"

---

## Checklist Before Publishing

- [ ] Key Takeaways section is at the top (2-4 bullets, includes at least one number)
- [ ] Key numbers and dollar figures are bolded throughout
- [ ] No H2 section exceeds 4 paragraphs
- [ ] Every H2 opens with the most important sentence (no warm-up paragraphs)
- [ ] Title under 60 characters with primary keyword
- [ ] Meta description 150-160 characters with keyword and CTA
- [ ] URL slug is short and clean
- [ ] H1 → H2 → H3 hierarchy is correct
- [ ] At least 2 question-based H2s for GEO
- [ ] First 2-3 sentences directly answer the post's core question
- [ ] At least 1 internal link to a service page
- [ ] At least 1 internal link to another blog post
- [ ] Featured image with descriptive alt text
- [ ] Article schema JSON-LD is present
- [ ] FAQ schema added if question-based H2s exist
- [ ] BreadcrumbList schema is present
- [ ] OG tags and Twitter card tags are set
- [ ] Category matches one of the 5 content pillars
- [ ] Reading time is calculated
- [ ] CTA at the end of the post
- [ ] No em dashes
- [ ] Proofread for tone (quiet confidence, not salesy)
