# Google UCP Analytics

**Status:** DRAFT ONLY. Nothing published, committed, pushed, written to Supabase, added to the sitemap, or generated as an asset.
**Type:** Search / reference article with an authority thesis
**Assignment:** TRH Editorial Board, 2026-10-10
**Gates:** Research PASS, Editorial PASS, SEO/GEO PASS. Final: WRITE.
**Editorial Board (2026-10-11):** PUBLISH with three edits, all applied: H1 makes Merchant Center explicit; the first 150 words state that the funnel starts at Clicks to Buy, not at impression or recommendation; the AI Commerce 2027 Shift 04 line avoids "first" and is framed narrowly as transaction-funnel measurement. Protected: the transaction-versus-consideration split, the disconnect between Search Console generative AI reporting and UCP Analytics, "A cart transfer is not a purchase," and the bounded denominator paragraph.

---

## SEO PACKAGE

- **title (editorial H1):** Google Merchant Center UCP Analytics: How AI Checkout Reporting Works
- **meta_title:** Google UCP Analytics: Merchant Center AI Checkout Reporting
- **slug:** google-ucp-analytics-merchant-center-ai-checkout
- **category:** GEO & SEO
- **meta_description:** Google's UCP Analytics shows merchants Buy clicks, purchases and cart transfers from AI Mode and Gemini. What it measures, who can see it, and what it still cannot show.

---

## DRAFT BODY

### Google Merchant Center UCP Analytics: How AI Checkout Reporting Works

Once a merchant turns on checkout through the Universal Commerce Protocol, a shopper can buy its products inside Google's AI surfaces without visiting the merchant's site. That raises a basic question most merchants could not answer until recently, which is what actually happened after the shopper decided to buy.

Google's answer is UCP Analytics, a reporting dashboard in Merchant Center with an experimental API behind it. Its funnel starts at Clicks to Buy, the moment a shopper presses the UCP Buy button. It does not start at an impression, a recommendation or the products the AI compared before that click. So it measures the transaction end of agentic shopping well, and almost nothing about what came before the Buy button.

### What UCP Analytics is and who can see it

Google's documentation describes a "UCP Analytics Reporting dashboard in Google Merchant Center" that gives "a centralized view of your UCP checkout experiences." It lives under Settings, then UCP Integration, then an Analytics tab.

Google says "access to this report is available to all UCP-enabled merchants," and the user needs the Performance role in Merchant Center. That is not every Merchant Center account. It is merchants with a live UCP integration. If your UCP checkout runs through a platform such as Shopify, which [enables agentic checkout by default for eligible stores](/blog/agentic-commerce-platform-default-shopify-google), check your own Merchant Center settings: Google's documentation does not say whether platform-managed integrations see the same tab.

### The metrics

The dashboard reports seven things:

**Clicks to Buy.** How many times shoppers clicked the UCP Buy button.

**Purchases.** Successful transactions completed through UCP.

**Purchase Rate.** The share of Clicks to Buy that became a purchase.

**Average Order Value.** The average value of a completed UCP order.

**Cancellations.** Orders canceled or refunded after purchase.

**Account Linking.** Attempts and success rates, where account linking applies.

**Top Selling UCP Products.** A ranked list of the products selling most through UCP.

Google describes this as "full visibility into the UCP checkout funnel from initial click to completed purchase." That is accurate as far as it goes. The funnel starts at the Buy button.

### What the API adds, and its limits

The same data is available through the Merchant API, in a reporting feature Google labels alpha: "experimental and is subject to change." It covers "Google surfaces, including AI Mode in Search and Gemini."

It offers two views. An account-level view reports the funnel, orders, cancellations and cart transfers, segmented by date and customer country. A product-level view reports Buy button clicks for each product, also by date and country.

Four limits are worth knowing before you build anything on it.

**No split by surface.** The documented segments are date and country. AI Mode and Gemini are covered together.

**Product level means clicks.** The product view reports Buy clicks per product, not purchases per product. The dashboard's top sellers list is the place to see product sales.

**One account at a time.** Both views work only for standalone accounts and individual sub-accounts. Agencies running multi-client accounts have to query each sub-account separately.

**Alpha means it can change.** Build reporting on it, but expect fields to move.

### A cart transfer is not a purchase

Google lets shoppers transfer a UCP cart to the merchant's own site to finish checking out there. The reporting counts those transfers and their average cart value.

It does not tell you whether the transfer became an order. That step happens on your site, so your own analytics have to close the loop. A UCP report showing strong cart transfers and modest purchases might mean shoppers prefer your checkout, or it might mean they abandoned it. Only your site data can tell you which.

### Why this report exists at all

Site analytics cannot see a checkout that does not happen on your site. Shopify's documentation says so directly for direct checkouts on outside surfaces: third-party analytics pixels do not fire, and "this applies to any direct checkout that's completed outside your online store."

So without UCP Analytics, a merchant would see orders arriving with no record of the funnel that produced them. That is the gap this report fills.

It also sits beside, not inside, the reporting merchants already use. Merchant Center's existing performance reports describe how product listings are shown and clicked. Google Analytics describes sessions and conversions on your own site. UCP Analytics describes a checkout that happens on Google's surface. None of the three replaces the others, and only the last one sees an order that never touched your site.

### Two measurement problems, one partly solved

In September I wrote that [agentic commerce has a measurement problem](/blog/niq-similarweb-agentic-commerce-measurement): an assistant can consider your product, recommend a competitor, and leave you no record that you were ever in the running.

That is really two problems. One is transaction measurement: what happens once a shopper chooses to buy. The other is consideration measurement: which products the AI looked at, compared and rejected before the shopper saw anything.

UCP Analytics addresses the first. It does not touch the second. There are no impressions, no prompts, no queries, and nothing about products that were considered and not chosen.

Google's other instrument covers a different slice. The [Search Console generative AI report](/blog/google-search-console-generative-ai-visibility) shows impressions of your pages inside AI Overviews and AI Mode, but no queries and no clicks. UCP Analytics starts at the Buy click and has no impressions.

A merchant now has two partial views of the same journey from the same company, and nothing documented connects them.

There is one genuine step forward. In [AI Commerce 2027](/ai-commerce-2027) I said the signal worth watching was any measurement product that reports a denominator. Purchase Rate has one: Clicks to Buy. That is a real denominator for the transaction funnel. It is still not a denominator for AI visibility, which is the harder number and the one the consideration problem needs. And because each merchant sees only its own data, it does not tell anyone how much agentic checkout is happening across the market.

### What merchants should do

First, confirm access. Check whether your account shows the UCP Integration Analytics tab and who holds the Performance role, then export a baseline while volumes are still small.

Second, reconcile. Match UCP purchases against your order system, and match cart transfers against completed orders on your site. The second comparison is the one only you can make.

Third, read the numbers for what they are. A UCP purchase shows where a sale was completed. It does not show that the AI created the demand. A shopper who already wanted your product may simply have used the nearest Buy button.

If you could see every UCP purchase but not a single product the AI passed over, which of those would tell you more about where to invest?

---
