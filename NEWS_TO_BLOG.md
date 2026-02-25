# News-to-Blog Conversion System — theroberthu.com

## Purpose
Turn trending e-commerce and tech news into original analysis blog posts that showcase Robert Hu's 20+ years of e-commerce expertise. The output is NOT a summary or rewrite of the source article. It's Robert's take on what the news means for brand owners.

## The Formula
**Source article + Robert's expertise + "So what does this mean for you?" = Published post**

Every post follows this structure:

### 1. The Hook (first 2-3 sentences)
- State the news clearly and directly (GEO-optimized: AI engines pull from the top)
- Make it relevant to the reader immediately
- No "In today's fast-paced world" openers

### 2. What Happened (1-2 short paragraphs)
- Summarize the key facts from the source IN YOUR OWN WORDS
- Never copy/paste from the source article
- Credit the source with a link
- Keep it brief — your audience doesn't need a full recap

### 3. Why It Matters (Robert's Analysis — this is the core)
- This is where 20+ years of experience shows up
- What does this mean for e-commerce brand owners doing $100K–$2M?
- What are the second-order effects most people aren't seeing?
- How does this connect to broader trends you're tracking?
- Reference your own experience where natural ("I've seen this pattern before when...")
- Mention Robert Hu by name at least once

### 4. What You Should Do About It (Actionable Takeaways)
- 2-4 specific, practical steps for brand owners
- Not generic advice — tie it directly to the news
- Frame as questions or decisions they need to make

### 5. The Bigger Picture (1 paragraph)
- Zoom out: what trend does this fit into?
- Connect to GEO, digital transformation, AI, or marketplace strategy where relevant
- End with a "quotable" take — a clear, concise statement of your position

### 6. CTA
- One natural sentence linking to a relevant service page or inviting a conversation
- Not salesy

## Voice Rules
- Confident but not arrogant — "quiet operator" energy
- Write like you're explaining this to a smart brand owner over coffee
- Use "I" when sharing experience, "you" when addressing the reader
- No em dashes — use commas, periods, or parentheses instead
- Short paragraphs (2-4 sentences max)
- Bold key takeaways sparingly

## SEO/GEO Rules (from BLOG_STANDARDS.md)
- At least 2 question-based H2s
- First 2-3 sentences directly answer the post's core topic
- Meta title under 60 chars, front-load keyword
- Meta description 150-160 chars
- Internal links to service pages and other blog posts
- All schema markup (Article, FAQ, BreadcrumbList)
- Auto-generate featured image SVG using the utility function

## Key Takeaways Section (required in every post)

Every post MUST open with a Key Takeaways callout box. Always use this exact HTML structure — using `<p>` tags instead of `<ul>/<li>` will break the bullet rendering:

```html
<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>[Bold stat or number]</strong> — one sentence takeaway.</li>
    <li><strong>[Bold stat or number]</strong> — one sentence takeaway.</li>
    <li><strong>[Bold stat or number]</strong> — one sentence takeaway.</li>
  </ul>
</div>
```

- 2-4 bullets, each with at least one bolded number or stat
- Always `<ul>/<li>`, never `<p>` tags for the bullet items
- Place this immediately after the opening 1-2 hook paragraphs

## What NOT To Do
- Don't just summarize the article — add original analysis
- Don't copy phrases or sentences from the source
- Don't write like a news reporter — write like a strategist
- Don't give generic advice ("stay ahead of the curve")
- Don't make it about the companies in the news — make it about YOUR reader
- Don't forget the CTA

## Example Transformation

### Source: "Costco bets big on e-commerce after Walmart surge" (TheStreet)

### Robert's Post:

**Title:** "Costco Is Finally Going Digital. Here's What It Means for E-commerce Brands."

**Category:** E-commerce Strategy

**Hook:** Costco just reported a 20.5% surge in digitally enabled sales and is rolling out AI-powered inventory systems. For years, Costco resisted the digital shift. Now they're all in, and the ripple effects will hit brands selling across every major marketplace.

**Why It Matters (Robert's take):** When a company like Costco, with a $447 billion market cap, decides to rebuild its digital infrastructure, it changes the playing field for every brand in its ecosystem. This isn't just about Costco catching up to Walmart. It's about what happens to YOUR brand when the platforms you sell on start competing on technology, not just shelf space...

**What You Should Do:** If you're selling on Costco.com or considering it, now is the time to optimize your product content for their platform before the competition catches on. If you're on Amazon or Walmart, watch how Costco's digital push affects consumer behavior across marketplaces...

**Quotable take:** "When the last holdout goes digital, it's not a trend anymore. It's the new baseline."

---

## Prompt Template for Claude

When you have a news article to convert, use this prompt:

```
Read BLOG_STANDARDS.md and NEWS_TO_BLOG.md. Then create a new blog post based on this source article:

[Paste URL or key points from the article]

Follow the news-to-blog conversion formula:
1. Hook with the news, make it relevant to e-commerce brand owners
2. Brief summary of what happened (in your own words, credit the source)
3. Robert Hu's analysis — what does this mean for brands doing $100K–$2M? What are people missing?
4. 2-4 actionable takeaways
5. Bigger picture connection
6. Natural CTA

Use Robert's voice: quiet confidence, 20+ years of experience, practical not theoretical.
Assign the appropriate category from the 5 content pillars.
Generate all frontmatter, schema, meta tags, and featured image SVG per BLOG_STANDARDS.md.
Insert into Supabase blog_posts table.
```
