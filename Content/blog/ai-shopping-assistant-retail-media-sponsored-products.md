# AI shopping assistants as a retail media page type

**Status:** DRAFT ONLY. Nothing published, committed, pushed, written to Supabase, added to the sitemap, or generated as an asset.
**Type:** Authority / thesis article with reference value
**Assignment:** TRH Editorial Board, 2026-10-09
**Gates:** Research PASS (THG implementation and metrics not verified, excluded), Editorial PASS, SEO/GEO PASS. Final: WRITE.
**Editorial Board (2026-10-09):** PUBLISH with two edits, both applied: default eligibility is stated as conditional on the retailer enabling the page type; the disclosure paragraph says Criteo does not prescribe a visual treatment and retailers control integration and disclosure, without implying legal requirements are absent. THG excluded. Protected: "The keyword did not disappear in conversational commerce. It moved behind the conversation.", the translation-step and disclosure sections, the H1 and meta title. AI Commerce 2027: one-sentence Shift 06 update now.

---

## SEO PACKAGE

- **title (editorial H1):** AI Shopping Assistants Are Becoming a Standard Retail Media Placement
- **meta_title:** Criteo Sponsored Products in AI Assistants: How It Works
- **slug:** ai-shopping-assistant-retail-media-sponsored-products
- **category:** Digital Marketing
- **meta_description:** Criteo now treats a retailer's AI shopping assistant as a Sponsored Products page type. How conversations become keywords, what advertisers control, and what is unsettled.

---

## DRAFT BODY

### AI Shopping Assistants Are Becoming a Standard Retail Media Placement

When retailers put AI shopping assistants on their sites, the obvious question for retail media was whether it would need a whole new ad system. Criteo's answer, in its own documentation, is no. A retailer's AI assistant becomes one more page type.

That sounds like a technical detail. It is the most useful thing to understand about how advertising is entering conversational shopping.

### What Criteo actually built

Criteo's Sponsored Products already run across page types such as search results, category pages, product pages, the homepage and checkout. Its documentation now lists a tenth: AI Assistant, defined simply as "the retailer's AI shopping assistant."

Albertsons was the first retailer to switch it on. On June 23, Albertsons Media Collective announced that "eligible sponsored products can appear within AI-powered conversational search product carousels" through Criteo, and Criteo called Albertsons "our first retailer to bring Sponsored Products into an AI-powered shopping assistant."

Availability depends on the retailer. Criteo's advertiser guide says the inventory appears "only when the selected retailer has enabled this feature." Most retailers on Criteo do not have an AI assistant to monetize yet.

### How a conversation becomes an ad request

The mechanism is the part worth reading slowly.

A shopper asks the retailer's assistant something like "best running shoes for long distance under $150." Criteo's retailer guide says the retailer's system, or its LLM partner, "extracts the relevant keywords and filters from the conversation and passes them to the Criteo Sponsored Products engine as a standard ad request." The engine runs its usual auction and returns sponsored products, which the assistant places alongside its organic recommendations.

The developer documentation makes it even plainer. An AI Assistant ad request uses the same event type as a search results page. The main parameter is "the search query predicted by the LLM," plus filters such as price or color.

In other words, the advertising system does not read the conversation. The assistant translates the conversation back into a keyword, and the keyword enters the auction that already exists.

Something is compressed along the way. A shopper's request can carry a budget, an occasion, a distance, a preference. Filters keep some of that, like price. The rest is reduced to the same unit retail media has always priced: a search term.

Criteo also says what it receives: "only the structured output from your system: the keywords and filters extracted from the conversation. The raw conversational text stays within your own environment and is never transmitted to us." That is Criteo's description of its integration, and it is a meaningful one for any retailer worried about handing shopper conversations to an ad platform.

### What advertisers get, and what they cannot choose

For brands, almost nothing changes, which is the point. Criteo's guide says "your existing Sponsored Products campaigns are automatically eligible," using "the same keyword targeting and cost-per-click (CPC) bids." There are "no premium floors or separate ratecards." The AI Assistant surface is priced on "the same pricing terms as search page placements."

Three details deserve attention.

**It is on by default.** Where a retailer has enabled it, AI Assistant inventory "is activated by default within your All Inventory settings." Advertisers do not have to opt in for their existing campaigns to become eligible.

**You can adjust it but not isolate it.** A page type bid multiplier raises or lowers what you bid on the assistant relative to other pages. But "you cannot configure a line item to serve exclusively on the AI Assistant surface."

**You can measure it separately.** Reporting has a page type dimension, so advertisers can filter to AI Assistant and see impressions, clicks, click-through rate, spend and return on ad spend for that surface alone.

Criteo's pitch for the surface is scarcity. An assistant "typically surfaces only three to five products per response," far fewer than a search results page. Fewer slots means each one matters more, which is good for whoever wins it and harder for everyone else.

### Why this is the more likely path

I have been tracking two ways advertising enters AI shopping. One is new formats built by AI platforms, like the sponsored conversations OpenAI began testing, which I wrote about in [The Ad Click Is Becoming a Conversation](/blog/openai-sponsored-agents-chatgpt-ads-shopify). The other is retail media absorbing the new surface into what it already runs.

Criteo's design is the second path, and it fits a pattern. Retail media has been [losing its separate buying interface](/blog/retail-media-programmatic-buying-openrtb-koddi-teads) as inventory moves into pipes advertisers already use. A retailer's assistant becoming one more page type is the same move: new surface, old auction, old bids, old reports. It is also why [retail media is becoming infrastructure](/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure) rather than something every retailer builds. Infrastructure absorbs a new surface faster than each retailer can design an ad product for it.

It also answers a question I left open when [Instacart and Shipt launched assistants that build whole carts](/blog/instacart-clementine-ask-shipt-ai-basket), which was where paid visibility enters a conversation. At least for conversational search, it enters the way it always has. Through a keyword.

The keyword did not disappear in conversational commerce. It moved behind the conversation.

### What is still unsettled

Two things are left to the retailer, and they matter.

The first is the translation. Which keywords the assistant predicts decides which ads are eligible. "Affordable running shoes" and "long distance trainers under $150" can produce different auctions from the same shopper. The retailer, or its LLM partner, now controls a step that shapes advertiser competition.

That step matters most when the request is vague. Albertsons says over 85% of its AI-powered conversations begin with open-ended or exploratory questions. A broad prompt leaves the extraction step the most room to decide what the shopper meant, and therefore which brands compete for the answer.

The second is disclosure. Criteo does not prescribe a single visual treatment for sponsored recommendations; retailers control how those placements are integrated and disclosed within the assistant experience. That does not remove whatever legal or platform disclosure requirements already apply. It means the presentation varies by retailer, and when an assistant shows three products and one is paid, how clearly that one is marked matters more than it does on a full results page.

Neither Criteo nor Albertsons has published performance data for sponsored products in the assistant, so there is no evidence yet that these placements outperform search.

### What operators should do

If you advertise through Criteo, check whether your retailers have enabled AI Assistant. Existing Sponsored Products campaigns can become eligible for AI Assistant inventory without a separate campaign when a retailer enables that page type, so filter your reporting to it before deciding whether to bid it up or down.

If you run a retailer's assistant, treat keyword extraction as a commercial system, not just a technical one, and decide your sponsored labeling before you switch on the inventory.

When an assistant recommends three products, does your shopper know which one was paid for?

---
