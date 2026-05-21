# The 6-Dimension GEO Audit Framework: How to Score Your Amazon Listing for AI Visibility - Draft

**Status:** Draft. Not in Supabase. Not deployed.
**Target length:** 2,000-2,400 words (10-12 min read)
**Voice:** Practitioner. Direct. No em dashes. Hyphens only.

---

## Frontmatter (for Supabase insert)

```yaml
slug: 6-dimension-geo-audit-framework-amazon-listing
title: "The 6-Dimension GEO Audit Framework: How to Score Your Amazon Listing for AI Visibility"
category: "GEO & SEO"
meta_title: "The 6-Dimension GEO Audit Framework: How to Score Your Amazon Listing for AI Visibility"
meta_description: "A concrete scoring system for auditing your Amazon listings against how Rufus, Alexa for Shopping, Sparky, and ChatGPT actually read product data. Six dimensions, scored 0-3 each, with weak vs strong examples and priority fixes."
canonical: /blog/6-dimension-geo-audit-framework-amazon-listing
og_image: /images/blog/6-dimension-geo-audit-framework-amazon-listing.svg
featured_image_alt: "The 6-dimension GEO audit framework for scoring Amazon listings against AI visibility on Rufus, Alexa for Shopping, Sparky, and ChatGPT"
author: Robert Hu
read_time_minutes: 11
published_at: 2026-05-14T16:00:00.000Z
status: draft
tags: [GEO audit framework, how to audit Amazon listing for AI, Amazon listing AI visibility audit, 6-dimension GEO framework, score Amazon listing for Rufus]
related_services: [product-listing-optimization]
related_posts: [rufus-alexa-for-shopping-rebrand-marketplace-sellers, geo-vs-seo-marketplace-sellers, rufus-sparky-ai-revenue-impact]
has_faq_schema: true
```

---

## Schema Markup (JSON-LD)

### Article schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The 6-Dimension GEO Audit Framework: How to Score Your Amazon Listing for AI Visibility",
  "description": "A concrete scoring system for auditing your Amazon listings against how Rufus, Alexa for Shopping, Sparky, and ChatGPT actually read product data.",
  "author": {
    "@type": "Person",
    "name": "Robert Hu",
    "url": "https://theroberthu.com/about",
    "jobTitle": "E-commerce Strategist & Digital Transformation Consultant"
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
  "datePublished": "2026-05-14",
  "dateModified": "2026-05-14",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://theroberthu.com/blog/6-dimension-geo-audit-framework-amazon-listing"
  },
  "image": "https://theroberthu.com/api/og/6-dimension-geo-audit-framework-amazon-listing"
}
```

### HowTo schema (for the "score your own listing" section)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to score your Amazon listing against the 6-dimension GEO framework",
  "description": "A 30-minute method for scoring an Amazon product listing against six AI-readable dimensions and identifying the highest-leverage fixes.",
  "totalTime": "PT30M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Score WHO and WHEN",
      "text": "Pull up your top SKU on Amazon. Read the title and the top 5 bullets. Score WHO and WHEN against the rubrics. If your bullets do not name a specific persona or use-context, you score 0 or 1."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Score WHERE and WHY",
      "text": "Open the product detail page. Score WHERE and WHY based on what is visible on the page, not what you intended. If you cannot find where the product gets used or why it solves a specific problem, your buyer cannot either."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Score WHAT",
      "text": "Click into the Product Information section. Score WHAT against the attribute completeness rubric. Empty fields are 0. Filled fields with specifics are 2 or 3."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Score AI Retrievability",
      "text": "View the page with images turned off or use a screen reader. Score AI Retrievability against the structural rubric. Anything you cannot find without images is a problem."
    }
  ]
}
```

### FAQPage schema (4 entries)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to score a listing against the 6-dimension framework?",
      "acceptedAnswer": { "@type": "Answer", "text": "About 30 minutes per SKU once you have the rubrics in front of you. Scoring is straightforward. The work after scoring is what takes time. The two highest-leverage fixes (WHO and AI Retrievability) typically lift a listing's total score by 4 to 6 points in under two hours of rewriting." }
    },
    {
      "@type": "Question",
      "name": "Which dimension matters most?",
      "acceptedAnswer": { "@type": "Answer", "text": "WHO. Persona specificity unlocks every other dimension. A listing that does not name a specific buyer cannot answer when, where, or why for that buyer. Most listings score 0 or 1 on WHO. Fixing that single dimension is the single highest-leverage move in the framework and the fastest path to a competitive total score." }
    },
    {
      "@type": "Question",
      "name": "Can I use this framework for Walmart listings too?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The framework was built around how AI surfaces read product data, not how a specific marketplace serves search results. Walmart Sparky weights structured attributes slightly more heavily than Rufus does, so the WHAT dimension matters slightly more on Walmart. Otherwise the rubrics, scores, and priority order all apply identically." }
    },
    {
      "@type": "Question",
      "name": "Does the framework apply to DTC product pages?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, and DTC pages often score worse than Amazon listings because brands write DTC copy for human storytelling and Amazon copy for the algorithm. ChatGPT, Perplexity, and Gemini all read DTC pages when generating shopping recommendations, so the same six dimensions determine whether your DTC product shows up in AI answers." }
    }
  ]
}
```

---

## Featured image specification

**Path:** `/images/blog/6-dimension-geo-audit-framework-amazon-listing.svg`
**Layout:** Pulled-quote (matches Meta Hatch, ChatGPT Ads, Agentic Commerce, Alexa rebrand)
**Left panel:** "The 6-Dimension GEO Audit Framework" with third-line accent in `#42a5c8`
**Right panel:** Pull quote `"Generic best practices are a vibe. Six dimensions scored 0-3 are a methodology."` in gold italic Georgia, attribution `ROBERT HU · ON LISTING SCORING`
**Background:** `#1a2a32`
**Quote color:** `#c5a94e`

SVG hand-authored. Saved alongside this draft.

---

# The 6-Dimension GEO Audit Framework: How to Score Your Amazon Listing for AI Visibility

Most Amazon sellers know their listings are not optimized for AI. They have read the news on [Rufus becoming Alexa for Shopping](/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers), Sparky inside ChatGPT, and the agentic commerce wave coming this year. What they do not have is a way to score their own listings against how those AI surfaces actually read product data. Generic best practices tell you to "use natural language" and "fill in attributes." That is not a methodology. That is a vibe.

The 6-dimension [GEO](/geo) framework gives you a concrete scoring system. Six dimensions, scored 0-3 each, for a total of 18. Run your top 10 SKUs through it. The lowest scores tell you what to fix first. The dimensions are WHO, WHEN, WHERE, WHY, WHAT, and AI Retrievability. This post walks through each one, with weak vs strong examples, and the priority order for the work.

## Why score listings against AI rather than buyers?

The old model was to write listings for buyers. Buyers scanned, compared, and clicked. Listings rewarded keyword visibility. That model is decaying. In 2026, [Rufus drives roughly $10 billion in incremental Amazon sales](/blog/rufus-sparky-ai-revenue-impact). Sparky drives 35% higher AOV on Walmart. ChatGPT shopping queries crossed 21% of Walmart's referral traffic. The AI surface is not a future channel. It is a current channel that already evaluates your listing before the human ever sees it.

AI engines do not read listings the way buyers do. They extract structured signals from titles, bullets, attributes, A+ content, reviews, and Q&A. A listing optimized for human keyword scanning is invisible to AI reading natural language for context. The 6-dimension framework scores against the way AI actually reads, not the way buyers scan. It is also the framework that scores correctly across surfaces, because Rufus, Sparky, ChatGPT, Perplexity, and Gemini all evaluate similar signals. Score once. Apply everywhere.

## The 6-dimension framework at a glance

Each dimension answers a question the AI engine is silently asking when it decides whether to recommend your product. Score each 0-3. Total possible score is 18. Higher scores correlate with stronger AI visibility. A listing in the mid-teens tends to outperform a listing in the single digits. A listing below 8 tends to be invisible to the AI surfaces that drive the fastest-growing share of marketplace revenue.

1. **WHO** - Who is the product for?
2. **WHEN** - When does it get used?
3. **WHERE** - Where does it get used?
4. **WHY** - Why does it solve the buyer's problem?
5. **WHAT** - What is the product physically?
6. **AI Retrievability** - How cleanly is the data structured?

The next six sections walk through each dimension with the same fictional 32oz insulated water bottle, so you can see what scoring looks like applied to a real product instead of an abstract methodology.

## Dimension 1 - WHO

**What AI extracts:** persona signals from titles, bullets, and review text. Who is this product for in demographics, lifestyle, skill level, sensitivity, or use case identity?

**Weak:** "Premium insulated water bottle for active people."

**Strong:** "32oz insulated water bottle for runners, hikers, and gym-goers who need cold water for 24 hours and hot drinks for 12."

**Scoring rubric:**
- 0: No persona signal anywhere
- 1: Generic persona ("active people," "professionals," "anyone")
- 2: One specific persona named
- 3: 2-3 specific personas with use-context

**Takeaway:** AI rewards specificity. "Active people" is invisible because every active-lifestyle brand uses it. "Runners and hikers who need 24-hour cold retention" gets matched to a real query.

## Dimension 2 - WHEN

**What AI extracts:** time-of-day, season, occasion, life stage, or use frequency.

**Weak:** "Use throughout the day."

**Strong:** "Filled in the morning, stays cold through an 8-hour workday or a full day hike. Insulation rated for ice up to 24 hours, hot tea up to 12."

**Scoring rubric:**
- 0: No when-signal
- 1: Vague timing ("anytime," "all day")
- 2: One specific timing or duration
- 3: Multiple time-context signals (duration plus use-case timing)

**Takeaway:** Buyers ask AI when-questions all the time ("what bottle holds ice through a full workday," "best bottle for hot tea during winter commutes"). Listings without when-signals do not match those queries no matter how good the product is.

## Dimension 3 - WHERE

**What AI extracts:** setting context. Home, gym, trail, office, car, kitchen, school.

**Weak:** "Fits most cup holders."

**Strong:** "Fits standard car cup holders, gym bag side pockets, and most backpack hydration sleeves. 3-inch base diameter, 10-inch height. Carries comfortably in one hand."

**Scoring rubric:**
- 0: No where-signal
- 1: One generic location ("portable," "fits anywhere")
- 2: One specific location with fit detail
- 3: Multiple specific locations with measurements or fit constraints

**Takeaway:** Where-signals are usually missing entirely from listings. Adding one gets you matched to a query nobody else in your category is answering. The cost of adding it is one sentence and a tape measure.

## Dimension 4 - WHY

**What AI extracts:** outcome and problem-solving language. Why does this product solve the buyer's specific issue?

**Weak:** "Made with high-quality stainless steel."

**Strong:** "Eliminates the warm-water-by-noon problem that plagues single-wall bottles. Double-wall vacuum insulation keeps ice solid through a full marathon or a 9-hour workday without condensation rings on your desk."

**Scoring rubric:**
- 0: Features only, no outcome language
- 1: One generic outcome ("keeps drinks cold")
- 2: One specific outcome with problem context
- 3: Multiple outcomes tied to specific buyer problems

**Takeaway:** Features tell AI what a product is. Outcomes tell AI what problem it solves. AI recommends solutions, not features. The brands that lead with outcomes win the queries that start with "I need help with..."

## Dimension 5 - WHAT

**What AI extracts:** physical product attributes. Materials, size, weight, certifications, compatibility, capacity.

**Weak:** "Large size, food-grade material, eco-friendly."

**Strong:** "32oz capacity. 18/8 food-grade stainless steel interior. BPA-free, lead-free, phthalate-free. 14oz unfilled weight. Wide-mouth opening (2.5 inches) compatible with standard ice cubes. Dishwasher safe (top rack). Lifetime warranty against insulation failure."

**Scoring rubric:**
- 0: Missing critical attributes
- 1: 2-3 attributes listed, incomplete
- 2: Most attributes listed with specifics
- 3: All relevant attributes with measurements, certifications, compatibility, and warranty

**Takeaway:** Attribute fields are not optional. Every empty attribute is a query AI cannot match you to. Brands at 100% attribute completeness outperform brands at 60% completeness on every filter-constrained query in the category.

## Dimension 6 - AI Retrievability

**What AI extracts:** the structural readability of your listing data. Clean text vs image-locked info, consistent attributes vs contradictions, complete vs partial.

**Weak:** A listing where the capacity is only shown in a lifestyle image, the certifications are baked into an A+ content graphic, and the Amazon listing says "32oz" while the DTC product page says "1L."

**Strong:** A listing where every spec is in machine-readable text, attribute fields are 100% complete, Product schema validates clean on the DTC product page, and the same data appears identically across Amazon, Walmart, and DTC.

**Scoring rubric:**
- 0: Critical info image-locked or contradictory across channels
- 1: Most info in text, some image-locked, minor inconsistencies
- 2: All info in text, schema present on DTC, mostly consistent
- 3: Fully machine-readable, schema validates clean, identical data across all channels

**Takeaway:** AI cannot recommend what it cannot read confidently. Image-locked data is the most common silent killer of AI visibility. The fix is one afternoon of moving copy out of images into structured text.

## How to score your own listing in 30 minutes

**1. Pull up your top SKU on Amazon.** Read the title and the top 5 bullets. Score WHO and WHEN against the rubrics above. Be honest. If your bullets do not name a specific persona or use-context, you score 0 or 1. Most listings score 1 on WHO. That is the silent gap that explains why your competitor with weaker SEO is getting recommended over you.

**2. Open the product detail page.** Score WHERE and WHY based on what is visible on the page, not what you intended when you wrote the copy. If you cannot find where the product gets used or why it solves a specific problem, your buyer cannot either. Score what is there, not what you meant.

**3. Click into the Product Information section.** Score WHAT against the attribute completeness rubric. Empty fields are 0. Filled fields with measurements, certifications, and compatibility details are 2 or 3. Most sellers think their attributes are filled because the required ones are filled. The optional ones matter just as much for AI matching.

**4. View the page with images turned off** (or use a screen reader). Score AI Retrievability against the structural rubric. Anything you cannot find without images is a problem. Capacity, dimensions, certifications, ingredients, and material details should all be in text. If they are only in an image, AI cannot read them.

Total your scores. Anything below 8 is a triage situation. 8-13 is a fixable gap. 14+ is competitive.

The framework works whether you score yourself or pay for the audit. The scoring is the same. The action plan is the same. The only difference is who does the rewrites.

## Priority order for fixes

Fix WHO first. Persona signals are the highest-leverage dimension because they unlock every other one. If your listing does not name a specific persona, it cannot answer when, where, why, or what for that persona. Most listings score 0-1 on WHO. Getting to 2 takes one rewrite of the title and top two bullets. Getting to 3 takes a review-mining pass to identify the personas your buyers actually describe themselves as.

Then fix AI Retrievability second. Most listings have image-locked information that AI cannot read. Moving capacity, dimensions, certifications, and material details from images into text fields typically lifts your AI Retrievability score from 0-1 to 2-3 in under an hour. WHO and AI Retrievability fixed first is the fastest path to a competitive total score because they remove the two biggest invisible drags on every other dimension.

After those two, work through WHEN, WHERE, WHY, and WHAT in any order. They all matter. None are as bottlenecked as the first two. This is also the same priority order I would use in a paid audit. The reason WHO and AI Retrievability come first is mathematical, not stylistic. Fixing them removes the ceiling on everything else.

## What the framework looks like applied

The $499 audit takes this framework and applies it to your specific category, your specific ICP, and your top 3 competitors. The output is a 6-dimension score for your top SKU, the same score for each competitor, side-by-side rewrites of your title and weakest bullets, 10 backend keyword phrases mined from your category review language, and a priority action plan ordered by impact. The framework on this page is the methodology. The audit is the methodology applied. Both produce the same score for the same listing. The audit just does the work for you, and includes the competitive benchmark you cannot easily build on your own without access to the right data sources.

Want to talk through whether the audit fits your situation? [Book a free strategy session](/free-strategy-session).

## Closing

The 6-dimension framework is how AI engines actually read your listing. Scoring against it is the difference between guessing your way through listing optimization and knowing exactly what to fix. The framework applies to Rufus and Alexa for Shopping. It applies to [Sparky](/blog/walmart-sparky-chatgpt-gemini). It applies to ChatGPT, Perplexity, and Gemini. It applies to [the agentic flows being built next](/aeo). One score. Every surface.

For the broader pillar resource, see [GEO](/geo). For the recent news context, see [Rufus becoming Alexa for Shopping](/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers) and [the five SEO tactics to stop running on listings AI now reads](/blog/geo-vs-seo-marketplace-sellers).

If you want the framework applied to your specific listings, [book a free strategy session](/free-strategy-session). The audit ($499) walks through your top SKU with the same scoring you would do yourself, plus the rewrites and the competitive benchmark you cannot easily build on your own.

## Frequently Asked Questions

**How long does it take to score a listing against the 6-dimension framework?**
About 30 minutes per SKU once you have the rubrics in front of you. Scoring is straightforward. The work after scoring is what takes time. The two highest-leverage fixes (WHO and AI Retrievability) typically lift a listing's total score by 4 to 6 points in under two hours of rewriting.

**Which dimension matters most?**
WHO. Persona specificity unlocks every other dimension. A listing that does not name a specific buyer cannot answer when, where, or why for that buyer. Most listings score 0 or 1 on WHO. Fixing that single dimension is the single highest-leverage move in the framework and the fastest path to a competitive total score.

**Can I use this framework for Walmart listings too?**
Yes. The framework was built around how AI surfaces read product data, not how a specific marketplace serves search results. Walmart Sparky weights structured attributes slightly more heavily than Rufus does, so the WHAT dimension matters slightly more on Walmart. Otherwise the rubrics, scores, and priority order all apply identically.

**Does the framework apply to DTC product pages?**
Yes, and DTC pages often score worse than Amazon listings because brands write DTC copy for human storytelling and Amazon copy for the algorithm. ChatGPT, Perplexity, and Gemini all read DTC pages when generating shopping recommendations, so the same six dimensions determine whether your DTC product shows up in AI answers.

---

## Word count check
- Intro: ~290
- Why score against AI: ~265
- Framework at a glance: ~160
- WHO: ~140
- WHEN: ~145
- WHERE: ~140
- WHY: ~145
- WHAT: ~150
- AI Retrievability: ~155
- How to score yourself: ~330
- Priority order: ~235
- Paid audit applied: ~165
- Closing: ~150
- FAQ: ~310
- **Total body: ~2,780 words**

Lands above the 2,400 ceiling. Acceptable for a definitive evergreen pillar-adjacent post on the framework. The methodology depth justifies it. Trim candidates if needed:
1. Combine the "How to score yourself" 4 numbered points into a denser paragraph form (saves ~80 words)
2. Tighten the closing by ~30 words
3. Cut FAQ #4 (saves ~70 words) - but it's a valuable cross-platform question

Recommend keeping at ~2,780. The framework is the asset. Better to be the deepest published version than a tighter one.

## Internal link inventory
- /geo (intro framework reference, closing pillar reference) ✓
- /aeo (closing forward-looking layer) ✓
- /blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers (intro and closing) ✓
- /blog/walmart-sparky-chatgpt-gemini (closing) ✓
- /blog/geo-vs-seo-marketplace-sellers (closing) ✓
- /blog/rufus-sparky-ai-revenue-impact (why score against AI section) ✓
- /free-strategy-session (paid audit section, closing CTA) ✓

## Voice check
- Em dashes: 0 (verify on save)
- En dashes: 0
- Hype words: 0
- Specific competitor consultants/agencies named: 0
- Numbers and stats: $10B Rufus, 35% Sparky AOV, 21% ChatGPT Walmart referral, 6 dimensions, 0-3 scoring, 18 total, 14+ competitive, 8-13 occasional, below 8 invisible, 30 minutes to score, 4-6 point lift, 100% attribute completeness, top 10 SKUs, $499 audit
- Practitioner voice: Maintained throughout
- Water bottle example used consistently across all 6 dimensions ✓

## Status
- Frontmatter status: draft
- Not in Supabase
- Not pushed live
- SVG: hand-authored pulled-quote layout
- HowTo schema included for the scoring section

Ready for review.
