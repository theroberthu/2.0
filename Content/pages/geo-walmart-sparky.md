# /geo/walmart-sparky Cluster Page Draft - Not Deployed

**Status:** Draft. Not in Supabase. No route built yet.
**Template:** /Content/pages/geo-alexa-for-shopping.md (the live first cluster page). This is the Walmart counterpart.
**Adapted from:** /Content/blog/walmart-sparky-chatgpt-gemini.md, /Content/blog/walmart-sparky-q1-earnings-replenishment-shift.md, /Content/blog/rufus-sparky-ai-revenue-impact.md
**Target length:** 2,500-3,000 words
**Voice:** Practitioner. Direct. No em dashes. Hyphens only.
**Position:** Cluster page under /geo pillar.
**Audience:** Marketplace sellers optimizing for Walmart's AI shopping assistant.
**Keywords:** Walmart Sparky optimization, how to optimize for Walmart Sparky, Walmart AI shopping assistant optimization, Sparky seller guide

---

## SEO Metadata

**Title tag:** How to Optimize Walmart Listings for Sparky in 2026 (GEO Cluster Guide)
**Meta description:** Walmart's Sparky drives 35% higher AOV and now travels into ChatGPT and Gemini. Here is the 6-dimension framework for getting recommended, plus the reorder layer, with weak vs strong examples for Walmart sellers.
**Canonical:** /geo/walmart-sparky
**Schema on page:**
- Article (author Robert Hu, datePublished, dateModified, mainEntityOfPage, image)
- FAQPage (6 entries)
- BreadcrumbList (Home → GEO → Walmart Sparky)

---

## Schema Markup (JSON-LD)

### Article schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Optimize Your Walmart Listings for Sparky in 2026",
  "description": "Walmart's Sparky drives 35% higher AOV and now travels into ChatGPT and Gemini. Here is the 6-dimension framework for getting recommended, plus the reorder layer, with weak vs strong examples for Walmart sellers.",
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
  "datePublished": "2026-06-22",
  "dateModified": "2026-06-22",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://theroberthu.com/geo/walmart-sparky"
  },
  "image": "https://theroberthu.com/images/geo/walmart-sparky.svg"
}
```

### BreadcrumbList schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theroberthu.com" },
    { "@type": "ListItem", "position": 2, "name": "GEO", "item": "https://theroberthu.com/geo" },
    { "@type": "ListItem", "position": 3, "name": "Walmart Sparky", "item": "https://theroberthu.com/geo/walmart-sparky" }
  ]
}
```

### FAQPage schema (6 entries)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Walmart Sparky and how does it work?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sparky is Walmart's generative AI shopping assistant, accessed through Ask Sparky in the Walmart app and now embedded inside ChatGPT and Gemini. It answers conversational buyer queries with specific product recommendations pulled from Walmart's catalog. It reads structured catalog data, product attributes, descriptions, reviews, and Q&A, and it weights attribute completeness heavily. It does not rank by keyword density. It matches the meaning of a query against the meaning of your listing." }
    },
    {
      "@type": "Question",
      "name": "How is Sparky different from Walmart's regular search?",
      "acceptedAnswer": { "@type": "Answer", "text": "Traditional Walmart search ranks products against keyword relevance, price, and sales signals. Sparky ranks products against the semantic match between a conversational query and a listing's natural-language content and structured attributes. A product can rank well on the Walmart search results page and still get skipped by Sparky if its data does not answer the persona, use case, or constraint the buyer described. They are two different evaluation systems on the same catalog." }
    },
    {
      "@type": "Question",
      "name": "Does Sparky really reach shoppers in ChatGPT and Gemini?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Walmart embedded Sparky inside ChatGPT and Gemini, extending its catalog reach beyond Walmart.com and the Walmart app. Roughly 200,000 Walmart products were available in ChatGPT during the earlier Instant Checkout phase. Walmart pulled OpenAI's Instant Checkout, which converted at about one-third the rate of Walmart.com, and replaced it with Sparky as a traveling agent. EVP Daniel Danker called the Instant Checkout era a very temporary moment in time." }
    },
    {
      "@type": "Question",
      "name": "Do I need to optimize differently for Sparky than for Amazon's Alexa for Shopping?",
      "acceptedAnswer": { "@type": "Answer", "text": "The data foundation is the same, with one emphasis difference. Sparky leans harder on Walmart's structured catalog attributes than Amazon's assistant does on Amazon's, so attribute completeness and consistency carry extra weight on Walmart. The 6-dimension framework applies on both. A listing optimized for Sparky is most of the way to being optimized for Alexa for Shopping, and the reverse, because both read titles, attributes, descriptions, and reviews as natural language." }
    },
    {
      "@type": "Question",
      "name": "How do I become Sparky's default for reorders?",
      "acceptedAnswer": { "@type": "Answer", "text": "Four moves. Enroll consumable SKUs in Walmart's subscription and auto-reorder programs so Sparky has a mechanism to default to. Make your replenishment cadence explicit in product data, like a 30-day supply or a 60-count. Maintain in-stock consistency, because a stockout during a scheduled reorder teaches the agent to find a backup. Keep pricing stable, because price thrash reads as unreliability to an agent planning a recurring purchase." }
    },
    {
      "@type": "Question",
      "name": "Does optimizing for Sparky help on other AI surfaces?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Sparky, Alexa for Shopping, ChatGPT, Perplexity, and Gemini all read the same underlying inputs: titles, attributes, descriptions, reviews, and entity signals. The data quality work that lifts your Sparky visibility lifts every other AI surface that pulls from similar inputs. GEO is a portable optimization. Sparky is unusually high-leverage because it physically travels into ChatGPT and Gemini, so one clean catalog propagates across three surfaces at once." }
    }
  ]
}
```

---

## Featured image specification

**Path:** `/images/geo/walmart-sparky.svg`
**Layout:** Pulled-quote (matches the Alexa for Shopping cluster page)
**Left panel:** "Optimizing for / Walmart Sparky." with second line in `#42a5c8`
**Right panel:** Pull quote `"Sparky does not recommend brands. It recommends data."` in gold italic Georgia, attribution `ROBERT HU · ON WALMART'S AI SHOPPING SURFACE`
**Background:** `#1a2a32`
**Quote color:** `#c5a94e`

SVG hand-authored. Saved alongside this draft at /public/images/geo/walmart-sparky.svg.

---

# How to Optimize Your Walmart Listings for Sparky in 2026

**Eyebrow:** GEO CLUSTER · WALMART SPARKY

> Walmart's Q1 FY27 earnings showed Sparky users spend 35% more per order than non-Sparky users. Weekly active users grew over 100% quarter-over-quarter. Units purchased through Sparky grew more than 4x sequentially. Sparky now travels into ChatGPT and Gemini, extending Walmart's catalog reach beyond Walmart.com.

Walmart Sparky is Walmart's generative AI shopping assistant, accessed through "Ask Sparky" in the Walmart app and now embedded inside ChatGPT and Gemini. It answers conversational buyer queries with specific product recommendations pulled from Walmart's catalog. It reads your structured catalog data, your product attributes and descriptions, your reviews, and your Q&A, and it weights attribute completeness heavily. It does not rank by keyword density. It matches the meaning of a query against the meaning of your listing. Where traditional Walmart search ranks on keywords, price, and sales signals, Sparky reads for persona, use case, and constraint, then recommends the products whose data answers the question the buyer actually asked. CEO John Furner put it plainly on the Q1 call: "We're becoming AI native. And Sparky, our AI shopping agent, is making this possible." Membership and advertising now make up roughly one-third of Walmart's operating income, and Sparky engagement feeds that flywheel.

This is the cluster guide for optimizing on Walmart's AI shopping surface specifically. The broader framework lives on the [GEO pillar page](/geo). Every section below answers a question marketplace sellers actually ask when they realize their Walmart search rank no longer predicts whether Sparky recommends them.

---

## How Sparky actually works

Sparky does not read your listing the way Walmart's traditional search ranking does. Three things matter: how it reads listings, what it reads versus what it ignores, and the cross-platform dimension that makes Walmart's assistant different from Amazon's.

### How Sparky reads listings

Sparky reads natural language and structured attributes, not keyword density. A buyer asking "what laundry detergent is safe for a baby with sensitive skin" gets a different result than a buyer asking "cheapest large laundry detergent," even though both land in the same Walmart category. The first is a persona-and-constraint match. The second is a price-and-attribute match. Sparky surfaces different products for each because the underlying intent is different. The engine extracts intent from the query, matches it against your catalog data, and ranks on contextual relevance. Brands that write listings as if every query is the same query lose this match. The Walmart-specific wrinkle is that Sparky leans on the structured catalog more heavily than Amazon's assistant does, so your attribute fields are not a nice-to-have. They are a primary input.

### What Sparky reads vs what it ignores

Sparky reads: titles as natural language, product descriptions, structured attributes and specifications, review text (extracted for use case and persona signals), and customer Q&A. It ignores: keyword stuffing, image-locked information, vague feature lists, and inconsistent attribute data across the listing. If a buyer query asks about a specific certification and your listing only shows it as a logo in an image, Sparky cannot match it. If your title says "fragrance-free for sensitive skin" and your attributes leave the fragrance field blank or contradict it, Sparky reads the inconsistency as risk and skips you. On Walmart, missing or contradictory attribute data is the single most common reason a product that should match a query does not.

### The cross-platform dimension: one catalog, three surfaces

This is what makes Sparky different from Amazon's walled approach. Sparky does not stay inside Walmart. It travels. The same assistant operates on Walmart.com, in the Walmart app, and embedded inside ChatGPT and Gemini conversations, all reading the same catalog. Optimize the listing once and the improvement propagates across every surface Sparky touches. Roughly 200,000 Walmart products were available in ChatGPT during the earlier integration phase, and Sparky now carries that catalog into those conversations directly. The practical takeaway for sellers: a single clean Walmart listing is not a single-surface asset. It is the input three different AI surfaces read. The cross-platform mechanics are covered in [how Sparky travels into ChatGPT and Gemini](/blog/walmart-sparky-chatgpt-gemini).

### Why Walmart pulled Instant Checkout and went with Sparky

Walmart had a different model first and abandoned it on purpose. OpenAI's Instant Checkout let shoppers buy Walmart products inside ChatGPT directly, but it converted at about one-third the rate of the same traffic on Walmart.com. Walmart pulled it and replaced it with Sparky as a traveling agent rather than a checkout button. EVP Daniel Danker called the Instant Checkout era "a very temporary moment in time." The strategic read is that Walmart would rather own the recommendation layer everywhere than rent a checkout widget on one platform. For sellers, that means the thing being optimized is not a checkout integration. It is whether Sparky recommends your product when it reaches the buyer, wherever that buyer is. The revenue stakes behind this shift are laid out in [the Rufus and Sparky revenue analysis](/blog/rufus-sparky-ai-revenue-impact).

---

## How to score your listing using the 6-dimension framework

The [6-dimension GEO framework](/blog/6-dimension-geo-audit-framework-amazon-listing) applies to every AI surface. Here is how it scores specifically against how Sparky reads your Walmart listing. Each dimension answers a question Sparky is silently asking when it evaluates whether your product fits a buyer query. The running example below is a household consumable, the kind of value-and-family product Walmart shoppers buy most.

### WHO

What Sparky extracts: persona signals from titles, descriptions, and review text. Who is this product for in terms of household, life stage, sensitivity, or constraint?

Weak: "Family-size laundry detergent."
Strong: "Fragrance-free plant-based laundry detergent for families with babies and sensitive skin."

Takeaway: Sparky rewards specificity. "Family-size" is invisible because every detergent claims to serve families. "Fragrance-free for babies and sensitive skin" gets matched to the actual query a parent types.

### WHEN

What Sparky extracts: cadence, occasion, season, or life-stage signals.

Weak: "Long-lasting value."
Strong: "96 loads, about a three-month supply for a family of four, reorder monthly for smaller households."

Takeaway: Walmart buyers ask cadence questions constantly ("how often do I need to rebuy," "what lasts a month"). A listing without a cadence signal cannot match those queries, and on a consumable, cadence is also what sets up the reorder position covered below.

### WHERE

What Sparky extracts: setting and equipment context. Home, HE washer, standard machine, septic system.

Weak: "Works in any machine."
Strong: "Formulated for HE and standard washers, septic-safe, low-suds for front-loaders."

Takeaway: where-and-equipment signals are usually missing entirely from listings. Adding one gets you matched to a constraint query nobody else in the category answers. The cost of adding it is one sentence.

### WHY

What Sparky extracts: outcome and problem-solving language. Why does this product solve the buyer's specific issue?

Weak: "Premium clean."
Strong: "Removes set-in food and grass stains without dyes or fragrances that irritate sensitive skin."

Takeaway: features tell Sparky what a product is. Outcomes tell it what problem the product solves. Sparky recommends solutions, not features. The brands that lead with outcomes win the queries that start with "I need something that..."

### WHAT

What Sparky extracts: structured product attributes. Size, count, materials, ingredients, certifications, compatibility.

Weak: "Big bottle, great value."
Strong: "96 fl oz, 96 loads, plant-based surfactants, EPA Safer Choice certified, dye-free and fragrance-free."

Takeaway: on Walmart, attribute fields are not optional, and Sparky weights them more heavily than most surfaces. Every empty attribute is a query Sparky cannot match you to. Complete the fields, and make the values consistent with what your title and description claim.

### AI Retrievability

What Sparky extracts: the structural readability of your catalog data. Clean structured text versus image-locked info, consistent attributes versus contradictions, complete versus partial.

Weak: a listing where the load count and certifications live only in a packaging image and the ingredient field is blank.
Strong: a listing where every spec is in machine-readable catalog text, the attribute fields are complete, and the same values appear on Walmart, on your DTC site, and anywhere else the product is listed.

Takeaway: Sparky cannot recommend what it cannot read confidently. Image-locked information is invisible. Cross-channel inconsistency creates uncertainty. Both get you skipped, and on Walmart, incomplete attributes are the most common form of both.

---

## Sparky is becoming a reorder engine, not just a discovery engine

Discovery optimization gets you recommended once. The Q1 data showed something more important than raw growth: Sparky usage is shifting from general merchandise discovery toward food and consumables, driven by replenishment, meal planning, and personalization features. That shift turns Sparky into a reorder engine. For consumable and replenishable brands, the reorder position is worth more than any single discovery placement, because every future purchase in the category flows to the default until something breaks the pattern. The full breakdown is in [Walmart's Q1 earnings and the replenishment shift](/blog/walmart-sparky-q1-earnings-replenishment-shift).

Four levers determine whether Sparky defaults to you:

1. **Enroll consumables in Walmart's subscription and auto-reorder programs.** The agent reorders what is structured to be reordered. A consumable SKU with no subscription or replenishment option gives Sparky no mechanism to default to. This is table stakes for the reorder layer.

2. **Make your replenishment cadence explicit in product data.** A 30-day supply. A 96-load bottle. A 60-count. The clearer your consumption cadence, the easier it is for Sparky to time the restock. Vague quantity data forces the agent to guess, and agents do not like guessing.

3. **Maintain availability consistency.** A stockout during a scheduled reorder teaches the agent to find a backup, and the backup may quietly become the new default before you notice. The agent reorders what it can reliably get, and Walmart's fulfillment signals feed that judgment.

4. **Keep pricing stable.** Walmart's whole positioning is predictable everyday value, so price thrash reads as especially out of place to an agent planning a recurring purchase. Frequent deep discounts that look like promotions to humans look like unreliability to Sparky. The agent defaults to products it can reorder at a stable price.

Amazon's Alexa for Shopping is building the identical reorder dynamic with auto-restock and scheduled deliveries, covered in [the Alexa for Shopping cluster guide](/geo/alexa-for-shopping). Both major US retailers are converging on agentic replenishment, which means the brands that lock in the default reorder position now compound across both.

---

## Five audits to run on your top 10 SKUs this week

1. **Test your products in Sparky directly, in the app and in ChatGPT or Gemini.** Open the Walmart app and use Ask Sparky to run the queries your buyers ask. Then run the same queries inside ChatGPT and Gemini, where Sparky now travels. A SKU that surfaces in the app can miss in the embedded surfaces if its data is thin. If your products do not surface, the issue is your listing, not the algorithm. Run 5 to 10 buyer queries per top SKU and log which ones return your product.

2. **Run your top 10 SKUs through the 6-dimension framework.** Score each dimension 0 to 3 for each SKU. Anything below 2 is a fix in priority order. Most brands find WHO and AI Retrievability are the bottom two and fix them first.

3. **Audit your Walmart attribute completeness.** Sparky weights structured attributes heavily, so empty fields cost more here than on most surfaces. Fill every relevant attribute, and make the values consistent with your title and description. Pay extra attention to size, count, ingredients, certifications, and compatibility fields.

4. **Rewrite your titles and descriptions as natural-language sentences.** Replace keyword strings with sentences that name the buyer, the use case, and the constraint. Test the rewrites by running buyer queries in Ask Sparky before and after.

5. **Audit subscription and replenishment enrollment for consumables.** For every consumable SKU, confirm it is enrolled in Walmart's subscription or auto-reorder options and that its cadence is explicit in the product data. This is what makes a SKU eligible for the reorder layer, not just discovery.

---

## What not to do

Do not chase keyword density. Sparky reads context and structured attributes, not keyword count. A listing with 15 well-placed natural-language signals and complete attributes beats a listing with 50 stuffed keywords every time. The old SEO playbook of cramming variants into titles and descriptions hurts your match score because it crowds out the contextual signal Sparky is actually looking for. This is the same shift covered in [GEO vs SEO: What Marketplace Sellers Need to Stop Doing in 2026](/blog/geo-vs-seo-marketplace-sellers).

Do not optimize for Sparky in isolation. The same data quality work that lifts your visibility here also lifts [Alexa for Shopping](/geo/alexa-for-shopping), ChatGPT, Perplexity, and the agentic surfaces still being built. Treating Walmart's AI surface as a one-platform problem leaves the compounding return on the table, and on Sparky specifically, the return is unusually large because the assistant physically carries your listing into ChatGPT and Gemini.

---

## Where this fits in the bigger picture

Sparky is the most aggressive cross-platform AI shopping agent in the market. Where Amazon keeps Alexa for Shopping inside its own walls, Walmart sends Sparky out to where shoppers already are, embedding it inside ChatGPT and Gemini. That makes the Walmart catalog a three-surface asset and makes clean listing data unusually high-leverage: one optimization pass propagates everywhere Sparky travels. The optimization work compounds across every surface that reads the same product data inputs, and the agentic flows being built on top of these surfaces ([AEO](/aeo)) depend on the same data quality discipline that Sparky already rewards today, plus the reorder positioning it is starting to transact on.

For the broader framework that powers this and every other cluster page on this site, see the [GEO pillar](/geo). The data work compounds. The brands that do this work now are the brands Sparky will be recommending and reordering two quarters from now. The brands that wait will spend those quarters doing the audits the early movers already shipped.

**Primary CTA:** Subscribe to [Hu's Weekly Hoot](https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232) for ongoing analysis of the AI commerce shift and the GEO and AEO playbooks.

---

## Frequently Asked Questions about Walmart Sparky optimization

**What is Walmart Sparky and how does it work?**
Sparky is Walmart's generative AI shopping assistant, accessed through Ask Sparky in the Walmart app and now embedded inside ChatGPT and Gemini. It answers conversational buyer queries with specific product recommendations pulled from Walmart's catalog. It reads structured catalog data, product attributes, descriptions, reviews, and Q&A, and it weights attribute completeness heavily. It does not rank by keyword density. It matches the meaning of a query against the meaning of your listing.

**How is Sparky different from Walmart's regular search?**
Traditional Walmart search ranks products against keyword relevance, price, and sales signals. Sparky ranks products against the semantic match between a conversational query and a listing's natural-language content and structured attributes. A product can rank well on the Walmart search results page and still get skipped by Sparky if its data does not answer the persona, use case, or constraint the buyer described. They are two different evaluation systems on the same catalog.

**Does Sparky really reach shoppers in ChatGPT and Gemini?**
Yes. Walmart embedded Sparky inside ChatGPT and Gemini, extending its catalog reach beyond Walmart.com and the Walmart app. Roughly 200,000 Walmart products were available in ChatGPT during the earlier Instant Checkout phase. Walmart pulled OpenAI's Instant Checkout, which converted at about one-third the rate of Walmart.com, and replaced it with Sparky as a traveling agent. EVP Daniel Danker called the Instant Checkout era a very temporary moment in time.

**Do I need to optimize differently for Sparky than for Amazon's Alexa for Shopping?**
The data foundation is the same, with one emphasis difference. Sparky leans harder on Walmart's structured catalog attributes than Amazon's assistant does on Amazon's, so attribute completeness and consistency carry extra weight on Walmart. The 6-dimension framework applies on both. A listing optimized for Sparky is most of the way to being optimized for Alexa for Shopping, and the reverse, because both read titles, attributes, descriptions, and reviews as natural language.

**How do I become Sparky's default for reorders?**
Four moves. Enroll consumable SKUs in Walmart's subscription and auto-reorder programs so Sparky has a mechanism to default to. Make your replenishment cadence explicit in product data, like a 30-day supply or a 60-count. Maintain in-stock consistency, because a stockout during a scheduled reorder teaches the agent to find a backup. Keep pricing stable, because price thrash reads as unreliability to an agent planning a recurring purchase.

**Does optimizing for Sparky help on other AI surfaces?**
Yes. Sparky, Alexa for Shopping, ChatGPT, Perplexity, and Gemini all read the same underlying inputs: titles, attributes, descriptions, reviews, and entity signals. The data quality work that lifts your Sparky visibility lifts every other AI surface that pulls from similar inputs. GEO is a portable optimization. Sparky is unusually high-leverage because it physically travels into ChatGPT and Gemini, so one clean catalog propagates across three surfaces at once.

---

## Word count check
- Hero + Definition: ~250
- How Sparky Works (4 H3s): ~560
- 6 Dimensions Applied (6 H3s): ~590
- The Reorder Shift: ~350
- Five Audits This Week: ~300
- What Not to Do: ~150
- Closing + CTA: ~220
- FAQ (6 entries): ~490
- **Total body: 2,811 words including FAQ; ~2,320 excluding FAQ**

Lands inside the 2,500-3,000 target.

## Internal link inventory
- /geo (hero close + closing) ✓
- /aeo (closing) ✓
- /geo/alexa-for-shopping (reorder section + what-not-to-do) ✓
- /blog/6-dimension-geo-audit-framework-amazon-listing (6-dimensions opener) ✓
- /blog/walmart-sparky-chatgpt-gemini (cross-platform subsection) ✓
- /blog/walmart-sparky-q1-earnings-replenishment-shift (reorder section) ✓
- /blog/rufus-sparky-ai-revenue-impact (Instant Checkout / revenue subsection) ✓
- /blog/geo-vs-seo-marketplace-sellers (what-not-to-do) ✓
- Newsletter URL (closing primary CTA) ✓

## Voice check
- Em dashes: 0 (verify on save)
- En dashes: 0
- Hype words: 0
- Specific competitor consultants/agencies named: 0
- CTA: Newsletter only. No strategy-session CTA (intake path removed site-wide) ✓
- Numbers and stats used (all from the verified set): 35% higher AOV, 100%+ WAU growth QoQ, 4x+ sequential units, 40% intelligence improvement (in source context), ~one-third of operating income from membership + advertising, ~200,000 products in ChatGPT, ~1/3 Instant Checkout conversion rate, 6 dimensions, 10 SKUs, 5 audits, 30-day / 60-count / 96-load cadence examples
- Quotes used verbatim: Furner ("We're becoming AI native. And Sparky, our AI shopping agent, is making this possible."), Danker ("a very temporary moment in time")
- No fabricated percentage-completeness or week-2-lift stats ✓
- Practitioner voice: Maintained throughout

## Naming / structure check
- H1, title tag, URL lead with "Walmart Sparky" / "Sparky" ✓
- First body mention: "Walmart Sparky" ✓
- Mirrors the Alexa for Shopping cluster structure, adapted to the brief's explicit 8-section layout (no standalone backend-keywords or reviews H2; those points folded into How-Sparky-Works and the dimensions) ✓
- Walmart-appropriate examples throughout (household consumable, value, family, sensitive skin) ✓

## Status
- Frontmatter status: draft
- Not in Supabase, no route built
- SVG: hand-authored pulled-quote layout at /public/images/geo/walmart-sparky.svg
- Task 2 (link the /geo Section 3 Walmart card to /geo/walmart-sparky) - HELD pending approval
- Task 3 (pointer sentence in the three Sparky blog posts) - HELD pending approval

Ready for review.
