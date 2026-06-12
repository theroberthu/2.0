# /geo/alexa-for-shopping Cluster Page

**Status:** Live at /geo/alexa-for-shopping (static route, not Supabase).
**Adapted from:** /Content/pages/geo-amazon-rufus.md (pre-rebrand draft, May 9)
**Target length:** 2,500-3,000 words
**Voice:** Practitioner. Direct. No em dashes. Hyphens only.
**Position:** Cluster page under /geo pillar.
**Audience:** Marketplace sellers searching for guidance on optimizing for Amazon's AI shopping assistant.
**Keywords:** Alexa for Shopping optimization, how to optimize for Alexa for Shopping, Amazon AI shopping assistant optimization, Rufus optimization, Amazon Rufus listing optimization

---

## SEO Metadata

**Title tag:** How to Optimize Amazon Listings for Alexa for Shopping in 2026 (formerly Rufus)
**Meta description:** Amazon merged Rufus into Alexa for Shopping in May 2026 and added agentic actions: auto-restock, price-triggered purchases, scheduled deliveries. Here is the 6-dimension framework for getting recommended, plus the new reorder layer, with weak vs strong examples.
**Canonical:** /geo/alexa-for-shopping
**Schema on page:**
- Article (author Robert Hu, datePublished, dateModified, mainEntityOfPage, image)
- FAQPage (6 entries)
- BreadcrumbList (Home → GEO → Alexa for Shopping)

---

## Schema Markup (JSON-LD)

### Article schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Optimize Your Amazon Listings for Alexa for Shopping in 2026",
  "description": "Amazon merged Rufus into Alexa for Shopping in May 2026 and added agentic actions: auto-restock, price-triggered purchases, scheduled deliveries. Here is the 6-dimension framework for getting recommended, plus the new reorder layer, with weak vs strong examples.",
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
  "datePublished": "2026-05-24",
  "dateModified": "2026-05-24",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://theroberthu.com/geo/alexa-for-shopping"
  },
  "image": "https://theroberthu.com/images/geo/alexa-for-shopping.svg"
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
    { "@type": "ListItem", "position": 3, "name": "Alexa for Shopping", "item": "https://theroberthu.com/geo/alexa-for-shopping" }
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
      "name": "What is Alexa for Shopping and how does it work?",
      "acceptedAnswer": { "@type": "Answer", "text": "Alexa for Shopping is Amazon's AI shopping assistant, powered by Alexa+ and accessed through a cursive A icon in the Amazon app, on Amazon.com, and on Echo Show devices. No Prime membership or Echo device is required. It answers conversational buyer queries with specific product recommendations and can act on the buyer's behalf: auto-restock, price-triggered purchases, and scheduled deliveries. The COSMO model that powered Rufus continues to run the reading engine underneath." }
    },
    {
      "@type": "Question",
      "name": "What happened to Amazon Rufus?",
      "acceptedAnswer": { "@type": "Answer", "text": "Amazon retired the Rufus brand on May 13, 2026 and merged the experience into Alexa for Shopping. The name changed. The technology largely did not. More than 300 million customers used Rufus in 2025, and Amazon credited it with $12 billion in incremental sales. The same reading engine now operates under the Alexa for Shopping name with new agentic capabilities layered on top. Optimization work done for Rufus carries over directly." }
    },
    {
      "@type": "Question",
      "name": "How is Alexa for Shopping different from regular Amazon search?",
      "acceptedAnswer": { "@type": "Answer", "text": "Traditional Amazon search ranks products against keyword relevance and sales velocity. Alexa for Shopping ranks products against the semantic match between a conversational query and a listing's natural-language content. A product can rank well on the search results page and still get skipped by the assistant if its content does not answer the persona, use case, or problem the buyer described." }
    },
    {
      "@type": "Question",
      "name": "Do I need to optimize differently for voice queries?",
      "acceptedAnswer": { "@type": "Answer", "text": "The data foundation is the same, but voice raises the bar on natural language. Spoken queries are longer, more conversational, and more constraint-heavy than typed ones, and the assistant reads the same listing data to answer both. Listings written as natural-language sentences that name the buyer, the use case, and the constraint match voice queries. Keyword fragments match neither. Test your top SKUs with spoken queries through the Alexa app or an Echo device, not just typed ones." }
    },
    {
      "@type": "Question",
      "name": "How do I become the default for auto-restock?",
      "acceptedAnswer": { "@type": "Answer", "text": "Four moves. Enroll consumable SKUs in Subscribe & Save so the agent has a reorder mechanism to default to. Make your replenishment cadence explicit in product data: a 30-day supply, a 60-count. Maintain in-stock consistency, because a stockout during a scheduled reorder teaches the agent to find a backup. Keep pricing stable, because the full year of price history the assistant surfaces makes price thrash read as unreliability." }
    },
    {
      "@type": "Question",
      "name": "Does optimizing for Alexa for Shopping help on other AI surfaces like ChatGPT?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Alexa for Shopping, ChatGPT, Perplexity, Sparky, and Gemini all read the same underlying inputs: titles, bullets, structured attributes, reviews, and entity signals across the web. The data quality work that lifts your visibility on Amazon's AI surface lifts every other AI surface that pulls from similar inputs. GEO is a portable optimization. Alexa for Shopping is the most mature place to start because the feedback loop is fast and the volume is enormous." }
    }
  ]
}
```

---

## Featured image specification

**Path:** `/images/geo/alexa-for-shopping.svg`
**Layout:** Pulled-quote (matches established cluster/post pattern)
**Left panel:** "Optimizing for / Alexa for Shopping." with second line in `#42a5c8`
**Right panel:** Pull quote `"The agent does not skip products. It skips data."` in gold italic Georgia, attribution `ROBERT HU · ON AMAZON'S AI SHOPPING SURFACE`
**Background:** `#1a2a32`
**Quote color:** `#c5a94e`

SVG hand-authored. Saved alongside this draft at /public/images/geo/alexa-for-shopping.svg.

---

# How to Optimize Your Amazon Listings for Alexa for Shopping in 2026

**Eyebrow:** GEO CLUSTER · ALEXA FOR SHOPPING

> Amazon credited Rufus, now Alexa for Shopping, with $12 billion in incremental sales in 2025. More than 300 million customers used it last year. Rufus users converted at 60% higher rates than non-users. In May 2026 Amazon merged Rufus into Alexa for Shopping and added agentic actions: auto-restock, price-triggered purchases, and scheduled deliveries.

Alexa for Shopping (formerly Rufus) is Amazon's AI shopping assistant, powered by Alexa+ and available across the Amazon app, Amazon.com, and Echo Show devices through a cursive "A" icon. No Prime membership or Echo device required. It answers conversational buyer queries with specific product recommendations, and since the May 13, 2026 rebrand it also acts: restocking consumables automatically, buying when a price target hits, and scheduling deliveries. It reads your listings, your reviews, your Q&A section, and Amazon's behavioral signals to decide which products fit a given query. It does not match keywords. It matches meaning. The rebrand changed the name and added the action layer. The reading engine underneath, the technology formerly branded as Rufus, still works the same way.

This is the cluster guide for optimizing on Amazon's AI shopping surface specifically. The broader framework lives on the [GEO pillar page](/geo). Every section below answers a question marketplace sellers actually ask when they realize their organic Amazon rank no longer predicts AI visibility.

---

## How Alexa for Shopping actually works

The assistant does not read your listing the way Amazon's old A9 algorithm did. Four things matter: the engine behind it, what it reads versus what it ignores, the query patterns where it makes the most difference, and what the May 2026 rebrand added.

### The COSMO engine still runs the reading layer

Alexa for Shopping is powered underneath by Amazon's COSMO model, the same engine that powered Rufus before the rebrand. COSMO extracts intent signals from buyer queries, matches them against structured product data, and ranks results based on contextual relevance, not keyword density. A buyer asking "what's the best protein powder for someone with whey sensitivity" gets a different result than a buyer asking "best protein powder under $30," even though both queries land in the same Amazon category. The first is a persona-and-constraint match. The second is a price-and-attribute match. COSMO surfaces different products for each because the underlying intent is different. Brands that write listings as if every query is the same query lose this match. Everything you optimized for Rufus still applies, because the reading engine did not change in the rebrand.

### What the engine reads vs what it ignores

It reads: titles as natural language (not as keyword strings), bullet points, A+ content text, structured product attributes, review text (extracted for use case and persona signals), customer Q&A, brand store content, and category context. It ignores: keyword stuffing, image-locked information, vague feature lists, and inconsistent attribute data across the listing. If a buyer query asks about a specific certification and your listing only shows it as a logo in an image, the engine cannot match it. If your title says "best for athletes" and your bullets contradict that by targeting "casual users," the engine reads the inconsistency as risk and skips you.

### The query patterns it handles best

Conversational queries with explicit personas, use cases, problems, or constraints. "I need a [product] for [persona] who [problem]." "What's a good [product] for [use case] during [occasion]." "Best [product] under $X that works for [constraint]." These patterns are where the assistant generates the most value and where the brands with sharp WHO, WHEN, WHERE, and WHY signals get recommended. Brands with vague feature-list listings lose every conversational query because their data does not match the way buyers actually phrase their needs.

### What the rebrand added

Three things changed on May 13, 2026 that matter for optimization. First, voice. Alexa for Shopping handles spoken queries across Echo devices and the Alexa app, and spoken queries run longer and more conversational than typed ones, which raises the premium on natural-language listing content. Second, cross-device context. A shopping conversation started on an Echo Show carries to the Amazon app and the desktop site, so the assistant accumulates context about the buyer across sessions and devices instead of starting cold each time. Third, the agentic action layer: auto-restock, price-triggered purchases, and scheduled deliveries. The assistant no longer just recommends. It transacts on the buyer's behalf, which creates the reorder optimization problem covered below. The full rebrand analysis is in [the Alexa for Shopping rebrand post](/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers).

---

## How to score your listing using the 6-dimension framework

The [6-dimension GEO framework](/blog/6-dimension-geo-audit-framework-amazon-listing) applies to every AI surface. Here is how it scores specifically against how Alexa for Shopping reads your listing. Each dimension answers a question the engine is silently asking when it evaluates whether your product fits a buyer query.

### WHO

What the engine extracts: persona signals from titles, bullets, and review text. Who is this product for in terms of demographics, lifestyle, skill level, sensitivity, or constraint?

Weak: "Premium protein powder for athletes."
Strong: "Whey-free pea protein for athletes with dairy sensitivity training 5+ days per week."

Takeaway: the engine rewards specificity. "Athletes" is invisible because every protein powder claims to be for athletes. "Whey-free for dairy sensitivity, 5+ days per week" gets matched to a real query.

### WHEN

What the engine extracts: time-of-day, season, occasion, life stage, or training phase signals.

Weak: "Use as a meal replacement."
Strong: "Use post-workout within 30 minutes of finishing or as a 4pm energy meal."

Takeaway: buyers ask when-questions all the time ("what should I drink post-workout," "what's a good 3pm snack"). Listings without when-signals do not match those queries no matter how good the product is.

### WHERE

What the engine extracts: setting context. Home, gym, travel, kitchen, office, outdoor, indoor.

Weak: "Versatile use."
Strong: "Sized for gym bags and travel cases. Spill-proof container suitable for car commutes and office desks."

Takeaway: where-signals are usually missing entirely from listings. Adding one gets you matched to a query nobody else in your category answers. The cost of adding it is one sentence.

### WHY

What the engine extracts: outcome and problem-solving language. Why does this product solve the buyer's specific issue?

Weak: "Made with high-quality ingredients."
Strong: "Reduces post-workout bloating common with whey-based powders. 26g protein supports muscle recovery without dairy-related digestive issues."

Takeaway: features tell the engine what a product is. Outcomes tell it what problem the product solves. Alexa for Shopping recommends solutions, not features. The brands that lead with outcomes win the queries that start with "I need help with..."

### WHAT

What the engine extracts: physical product attributes. Materials, size, weight, certifications, compatibility, ingredients.

Weak: "Large size available."
Strong: "2.5 lb container. 30 servings. Third-party tested for purity. Vegan, gluten-free, non-GMO certified."

Takeaway: attribute fields are not optional. Every empty attribute is a query the engine cannot match you to. Brands with complete attribute fields outperform brands with partial ones on every query that includes a filter constraint.

### AI Retrievability

What the engine extracts: the structural readability of your listing data. Clean structured text versus image-locked info, consistent attributes versus contradictions, complete versus partial.

Weak: a listing where the dosage info is only in a lifestyle image and the certifications are vague.
Strong: a listing where every spec is in machine-readable text, attribute fields are 100% complete, and the same data appears identically across the Amazon detail page and your DTC site.

Takeaway: the engine cannot recommend what it cannot read confidently. Image-locked information is invisible. Cross-channel inconsistency creates uncertainty. Both get you skipped.

---

## How Alexa for Shopping reads backend search terms

Backend keywords used to be a keyword stuffing playground. Comma-separated lists of variants, misspellings, and broad category terms designed to capture every long-tail buyer who might type one of them into the old A9 search box. That playbook is dead on the AI surface. The engine reads backend attributes as natural language context, not as a keyword index. Comma-separated fragments get parsed as low-context noise that adds nothing to your match score for any conversational query.

The replacement is natural-language phrases that mirror how a buyer actually talks to the assistant. Five backend phrases that signal intent are more valuable than 50 backend keywords that signal nothing. The point of the backend field is no longer keyword coverage. It is contextual reinforcement of the persona, use case, and constraint signals already in your title and bullets.

Examples of good and bad backend phrases:

- Bad: "protein powder, vegan, whey free, plant based, gluten free, vegan protein, dairy free, recovery protein"
- Good: "Plant-based pea protein for athletes with whey sensitivity who need post-workout recovery without dairy."
- Good: "Vegan protein supplement for runners and lifters following gluten-free or dairy-free diets."

The shift is structural, not stylistic. Comma-separated keyword strings are SEO artifacts. Natural-language phrases are GEO artifacts. The engine rewards the second and ignores the first. This is the same shift covered in [GEO vs SEO: What Marketplace Sellers Need to Stop Doing in 2026](/blog/geo-vs-seo-marketplace-sellers), applied specifically to the backend layer of your Amazon listing.

---

## How the engine reads reviews

Alexa for Shopping does not just read your listing copy. It reads the language buyers use to describe your product in reviews. Specific reviews ("perfect for my arthritic hands," "great for my 5-year-old's eczema," "fits in my carry-on," "no bloating after my morning lift") give the engine persona and use-case signals it then matches to buyer queries with similar language. Vague reviews ("good product, fast shipping, would buy again") give it nothing. Five stars without specifics adds nothing to your match score.

This creates a compounding effect that most sellers underestimate. The brands that prompt buyers to describe specific use cases in reviews get richer training data for the engine to work with. Every specific review broadens the pool of conversational queries it can confidently match your product against. The brands with thin or generic review depth get skipped when the engine is looking for high-confidence persona matches because the AI has no language to lock onto. Review acquisition strategy is now AI optimization strategy. Asking buyers what problem your product solved for them, in their own words, is the highest-leverage post-purchase prompt you can run.

For the broader context on review depth and AI shopping revenue, see [the Rufus and Sparky revenue analysis](/blog/rufus-sparky-ai-revenue-impact).

---

## The reorder layer: becoming the default the agent restocks

Discovery optimization gets you recommended once. The agentic actions Alexa for Shopping added in May 2026 (auto-restock, price-triggered purchases, scheduled deliveries) create a second optimization problem: becoming the product the agent reorders without the buyer re-deciding. For consumable and replenishable categories, the reorder position is worth more than any single discovery placement, because every future purchase in the category flows to the default until something breaks the pattern.

Four levers determine whether the agent defaults to you:

1. **Subscribe & Save enrollment is table stakes for consumables.** The agent restocks what is structured to be restocked. A consumable SKU not enrolled in a subscription or replenishment program gives the agent no mechanism to default to it.

2. **Make your replenishment cadence explicit in product data.** A 30-day supply. A 60-count. A monthly refill. The clearer your consumption cadence, the easier it is for the agent to time the restock. Vague quantity data forces the agent to guess, and agents do not like guessing.

3. **Maintain availability consistency.** A stockout during a scheduled reorder teaches the agent to find a backup, and the backup may quietly become the new default before you notice. The agent reorders what it can reliably get.

4. **Keep pricing stable.** Alexa for Shopping surfaces a full year of price history. Frequent deep discounts that look like promotions to humans look like unreliability to an agent optimizing for predictable forward planning. The agent defaults to products it can reorder at a stable price.

Walmart's Sparky is building the identical reorder dynamic, confirmed in [Walmart's Q1 FY27 earnings](/blog/walmart-sparky-q1-earnings-replenishment-shift). Both major US retailers are converging on agentic replenishment. The rebrand context for Amazon's side is in [the Alexa for Shopping rebrand analysis](/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers).

---

## Five audits to run on your top 10 SKUs this week

1. **Test your products in Alexa for Shopping directly, typed and spoken.** Open the Amazon app and ask the assistant (cursive "A" icon) the queries your buyers ask. Then run the same queries by voice through the Alexa app or an Echo device. Spoken queries run longer and more conversational, so a SKU that surfaces for the typed query can miss the spoken one. If your products do not surface, the issue is your listing, not the algorithm. Run 5 to 10 buyer queries per top SKU and log which ones return your product.

2. **Run your top 10 SKUs through the 6-dimension framework.** Score each dimension 0 to 3 for each SKU. Anything below 2 is a fix in priority order. Most brands find that WHO and AI Retrievability are the bottom two and fix them first.

3. **Audit your backend attributes for completeness.** Every empty field is a missed match. Fill them all. Pay extra attention to dietary attributes, compatibility, certifications, and age range fields, which the engine weights heavily.

4. **Rewrite your titles and top bullets as natural-language sentences.** Test the rewrites by running buyer queries before and after.

5. **Run a review prompt campaign for your top 5 SKUs.** Encourage buyers to describe specific use cases in reviews, not just product quality. A simple post-purchase email asking "what specific problem did this solve for you" is the highest-leverage prompt for review specificity.

---

## What not to do

Do not chase keyword density. The engine reads context, not keyword count. A listing with 15 well-placed natural-language signals beats a listing with 50 stuffed keywords every time. The old SEO playbook of cramming variants into titles, bullets, and backend search terms hurts your match score because it crowds out the contextual signal the engine is actually looking for.

Do not optimize for Alexa for Shopping in isolation. The same data quality work that lifts your visibility here also lifts Sparky, ChatGPT, Perplexity, and the agentic surfaces still being built. Treating Amazon's AI surface as a one-platform problem leaves the compounding return on the table. [See how this connects to Amazon's broader agent strategy](/blog/amazon-joins-universal-commerce-protocol).

---

## Where this fits in the bigger picture

Alexa for Shopping is the most mature AI shopping agent on Amazon and the first with live agentic actions at scale. The optimization work you do here compounds across every AI surface that uses similar product data inputs. Sparky reads structured catalog data the same way, and [reaches buyers inside ChatGPT and Gemini](/blog/walmart-sparky-chatgpt-gemini). ChatGPT and Perplexity pull from review aggregators that get richer when your reviews are use-case specific. The agentic flows being built on top of these surfaces ([AEO](/aeo)) depend on the same data quality discipline that Amazon's surface already rewards today, plus the reorder positioning it now transacts on. This is the cheapest place to learn what an AI agent looks for in a listing because the feedback loop is fast, the volume is high, and the test queries are infinite.

For the broader framework that powers this and every other cluster page on this site, see the [GEO pillar](/geo). The data work compounds. The brands that do this work now are the brands the agent will be recommending and restocking two quarters from now. The brands that wait will spend those quarters doing the audits the early movers already shipped.

**Primary CTA:** Subscribe to [Hu's Weekly Hoot](https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232) for ongoing analysis of the AI commerce shift and the GEO/AEO playbooks.

**Secondary (smaller, lower weight):** Or [book a free 15-minute strategy session](/free-strategy-session).

---

## Frequently Asked Questions about Alexa for Shopping optimization

**What is Alexa for Shopping and how does it work?**
Alexa for Shopping is Amazon's AI shopping assistant, powered by Alexa+ and accessed through a cursive "A" icon in the Amazon app, on Amazon.com, and on Echo Show devices. No Prime membership or Echo device is required. It answers conversational buyer queries with specific product recommendations and can act on the buyer's behalf: auto-restock, price-triggered purchases, and scheduled deliveries. The COSMO model that powered Rufus continues to run the reading engine underneath.

**What happened to Amazon Rufus?**
Amazon retired the Rufus brand on May 13, 2026 and merged the experience into Alexa for Shopping. The name changed. The technology largely did not. More than 300 million customers used Rufus in 2025, and Amazon credited it with $12 billion in incremental sales. The same reading engine now operates under the Alexa for Shopping name with new agentic capabilities layered on top. Optimization work done for Rufus carries over directly.

**How is Alexa for Shopping different from regular Amazon search?**
Traditional Amazon search ranks products against keyword relevance and sales velocity. Alexa for Shopping ranks products against the semantic match between a conversational query and a listing's natural-language content. A product can rank well on the search results page and still get skipped by the assistant if its content does not answer the persona, use case, or problem the buyer described.

**Do I need to optimize differently for voice queries?**
The data foundation is the same, but voice raises the bar on natural language. Spoken queries are longer, more conversational, and more constraint-heavy than typed ones, and the assistant reads the same listing data to answer both. Listings written as natural-language sentences that name the buyer, the use case, and the constraint match voice queries. Keyword fragments match neither. Test your top SKUs with spoken queries through the Alexa app or an Echo device, not just typed ones.

**How do I become the default for auto-restock?**
Four moves. Enroll consumable SKUs in Subscribe & Save so the agent has a reorder mechanism to default to. Make your replenishment cadence explicit in product data: a 30-day supply, a 60-count. Maintain in-stock consistency, because a stockout during a scheduled reorder teaches the agent to find a backup. Keep pricing stable, because the full year of price history the assistant surfaces makes price thrash read as unreliability.

**Does optimizing for Alexa for Shopping help on other AI surfaces like ChatGPT?**
Yes. Alexa for Shopping, ChatGPT, Perplexity, Sparky, and Gemini all read the same underlying inputs: titles, bullets, structured attributes, reviews, and entity signals across the web. The data quality work that lifts your visibility on Amazon's AI surface lifts every other AI surface that pulls from similar inputs. GEO is a portable optimization. Alexa for Shopping is the most mature place to start because the feedback loop is fast and the volume is enormous.

---

## Word count check
- Hero + Definition: ~290
- How Alexa for Shopping Works (4 H3s): ~560
- 6 Dimensions Applied (6 H3s): ~600
- Backend Keywords: ~280
- Reviews as Training Data: ~250
- The Reorder Layer: ~330
- Five Audits This Week: ~330
- What Not to Do: ~135
- Closing + CTA: ~230
- FAQ (6 entries): ~480
- **Total body: 3,134 words including FAQ; ~2,650 excluding FAQ**

Runs at the top of the range. Reads cleanly at cluster-guide depth. Trim candidates if you want it tighter:
1. Drop one example pair from WHEN or WHERE (saves ~40 words)
2. Compress the COSMO subsection by ~60 words (the engine continuity point repeats in FAQ #2)
3. Tighten the closing by ~50 words

## Naming-rule check
- H1, title tag, URL lead with "Alexa for Shopping" ✓
- First body mention: "Alexa for Shopping (formerly Rufus)" ✓
- Rufus retained where historically accurate: $12B 2025 stat, 300M users stat, COSMO/Rufus engine continuity, "technology formerly branded as Rufus," FAQ #2, optimization-carries-over framing ✓
- Legacy query coverage: "Rufus optimization" and "Amazon Rufus listing optimization" served by FAQ #2 + engine-continuity sections ✓

## Internal link inventory
- /geo (hero + closing) ✓
- /aeo (closing) ✓
- /blog/6-dimension-geo-audit-framework-amazon-listing (6-dimensions section opener) ✓
- /blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers (rebrand subsection + reorder layer) ✓
- /blog/walmart-sparky-q1-earnings-replenishment-shift (reorder layer) ✓
- /blog/walmart-sparky-chatgpt-gemini (closing) ✓
- /blog/rufus-sparky-ai-revenue-impact (reviews section) ✓
- /blog/geo-vs-seo-marketplace-sellers (backend keywords section) ✓
- /blog/amazon-joins-universal-commerce-protocol (what not to do, carried over from original draft) ✓
- Newsletter URL (closing primary CTA) ✓
- /free-strategy-session (closing secondary CTA) ✓

## Voice check
- Em dashes: 0 (verify on save)
- En dashes: 0
- Hype words: 0
- Specific competitor consultants/agencies named: 0
- Numbers and stats: $12B incremental 2025, 300M customers, 60% higher conversion (Rufus-attributed), May 13 2026 rebrand date, 6 dimensions, 10 SKUs, 5 audits, full-year price history, 30-day supply / 60-count cadence examples
- Practitioner voice: Maintained throughout

## Changes vs the original Rufus draft
- Renamed throughout per naming rules; Rufus kept where historically accurate
- Hero stat block updated: 13% search share + $10B replaced with verified $12B 2025 + 300M customers + rebrand line
- New H3 "What the rebrand added" (voice, cross-device context, agentic actions)
- New H2 "The reorder layer" section (Subscribe & Save, cadence, availability, pricing stability)
- Audit 1 expanded to include voice-query testing
- Closing CTA switched to pause-mode style (newsletter primary, strategy session secondary, replacing the old audit-form CTA and consulting-first CTA)
- FAQ swapped per spec: dropped "change listings completely," "how long," and "can I track" (RecoScope reference removed, consistent with its research-project reframing); added "What happened to Rufus," "voice queries," and "auto-restock default"
- 6-dimension section opener now links to the framework blog post instead of /geo (per spec); /geo link remains in hero and closing

## Status
- Live: route built at src/app/geo/alexa-for-shopping/page.tsx, added to sitemap
- SVG: hand-authored pulled-quote layout at /public/images/geo/alexa-for-shopping.svg
- Task 2 (re-link /geo Section 3 Amazon card) - DONE: card retitled "Alexa for Shopping (formerly Rufus)" and linked to /geo/alexa-for-shopping
- Task 3 (pointer sentence in the rebrand blog post) - DONE: callout inserted after intro in Supabase, markdown, and insert script
- Old draft /Content/pages/geo-amazon-rufus.md left in place for reference; recommend deleting it

Shipped.
