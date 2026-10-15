# Google Local Coupons

**Status:** APPROVED FOR PRODUCTION.
**Type:** Search / reference article
**Assignment:** TRH Editorial Board, 2026-10-15
**Gates:** Research PASS, Editorial PASS, SEO/GEO PASS. Final: WRITE.
**Editorial Board (2026-10-15):** PUBLISH with three edits, all applied: availability ("closed beta, select U.S. accounts, as of October 2026") stated in the first 150 words; the two-cost economics section kept; the measurement line softened to "a directly observed commercial event tied to the ad ... but it still does not prove the ad caused the purchase." Pre-publish check (2026-10-15): Lightspeed page unchanged, no Google first-party help page, budget-cap wording still unreconciled, so the ambiguity stays as written. AI Commerce 2027: NO CHANGE.

---

## SEO PACKAGE

- **title (editorial H1):** Google Local Coupons: How Pay-on-Redemption Search Ads Work
- **meta_title:** Google Local Coupons: How Retailers Pay Per Redemption
- **slug:** google-local-coupons-pay-per-redemption-ads
- **category:** Digital Marketing
- **meta_description:** Google Local Coupons is a closed-beta Search ad billed only when a shopper redeems the code in store. How it works, what you pay for and what the POS measures.

---

## DRAFT BODY

### Google Local Coupons: How Pay-on-Redemption Search Ads Work

Google is testing a Search ad that a retailer pays for only when a shopper hands over a coupon code at the register. It is called Local Coupons, and the most detailed public documentation of how it works comes from a point-of-sale company, Lightspeed, rather than from Google.

**Availability: closed beta, select U.S. accounts, as of October 2026.** Google has not published its own help page for Local Coupons, so this guide covers what is documented today.

### What Google Local Coupons is

Lightspeed's setup guide describes Local Coupons as "a new Google Ads feature that aims to help you drive in-store traffic." The ad appears on Google Search to people nearby who search for the kind of product a store sells, such as "shoe store." It shows the business name and location, the discount, the type of product it applies to, and the promotion dates and terms.

Google's own public references are brief. Its May 20 post on Direct Offers said brands can upload promotions in Google Ads "including discounts, giveaways and local coupons." On October 8, Selin Song, a vice president at Google Customer Solutions, described the Local Coupons pilot in a LinkedIn post, and trade coverage reported that the coupon can be saved to a phone's wallet.

### Who can use Google Local Coupons

Lightspeed says the integration "is in closed beta and available for select US accounts (United States English) only." A retailer also needs a Lightspeed Retail plan that includes promotions.

The store needs a verified Google Business Profile, and the address and business details in the point-of-sale system must match it. Each promotion is tied to an outlet that matches a verified Business Profile location.

This is not open to every Google Ads advertiser, and it does not work with every point-of-sale system. Trade coverage of the pilot names Clover alongside Lightspeed. No other systems have been publicly confirmed.

### How shoppers claim and redeem the coupon

A shopper who sees the ad clicks Claim offer, which gives them a single-use promo code. Where the store's hardware supports it, the shopper can show a barcode instead. At checkout, the cashier applies the code in the point-of-sale system the same way as any other promo code.

Codes only work while the promotion is active. If the retailer ends a promotion early, Lightspeed says redemption at the register stops immediately, while Google can take up to three business days to stop showing the ad. A shopper who claimed a code in that window would not be able to use it.

### What retailers pay for

Lightspeed's guide says: "you only get billed after a customer actually redeems a promo code in your store."

The retailer sets a bid, described as the maximum it is willing to pay per in-store redemption, and labeled Target CPA in the setup form. It also sets a spending limit. Lightspeed's billing section calls this a monthly spending cap, while its setup steps describe a total campaign budget for the whole promotion. "If no one redeems a coupon, the bill is $0." Google invoices the retailer monthly, and Lightspeed says it does not charge for running the campaign.

The retailer pays twice for each redeemed coupon: once in the discount it gives the shopper, and again in the fee to Google. The real cost of a redeemed customer is the discount plus the bid.

This is pay per redemption: not pay per click, and not necessarily pay per sale. The billing event is a code applied to a transaction. Lightspeed does not document what happens to the charge if that purchase is later returned or voided.

### What you can promote

The discount can be a fixed amount or a percentage, applied to the whole catalog or to a product category. Lightspeed is explicit that this promotion "cannot be applied to specific SKUs, brands, or individual products." That makes Local Coupons a store promotion, not a way for a brand to promote its own product at a retailer.

The retailer describes the promotion target in a short phrase, such as "sneakers." Google reviews each promotion, which can take up to three business days. Once a promotion is live it cannot be edited, so changing the discount or the dates means ending it and creating a new one. Lightspeed suggests protecting margin with a threshold just above the average order, such as $50 off $200.

### What the point-of-sale integration measures

Campaigns are created and managed only in the point-of-sale system. Connecting the app creates a new Google Ads account managed by Lightspeed, and the retailer cannot manage the promotions from that account.

For results, the retailer can see a list of redeemed codes with their redemption dates, and a link to a Google Ads report on the promotion's performance. Lightspeed does not detail what that report contains.

A redemption creates a directly observed commercial event tied to the ad, which is much cleaner than modeled store-visit measurement, but it still does not prove the ad caused the purchase. A shopper who was already heading to the store can claim the coupon on the way in. A redemption shows where an ad met a sale. It does not show how much of that sale the ad created.

### How Local Coupons compares with other Google options

**Search ads billed per click.** The retailer pays when someone clicks, whether or not they ever visit the store.

**Store visit conversions.** Google describes store visits as modeled estimates, built from aggregated, anonymized data and extrapolated to a wider population. Local Coupons counts actual redemptions at the register, but only for shoppers who use the code.

**Merchant Center local promotions.** These attach store-specific offers to local inventory ads, require a retailer to already run local inventory ads, and are billed at the ads' cost-per-click rates. Shoppers can be asked to show a code in store, but the retailer still pays for the click.

**Direct Offers.** This is Google's pilot for showing brand offers in AI Mode, running since January 2026. Google listed local coupons among the offer types it is adding. It has not said whether Local Coupons will appear in AI Mode or how the two are billed together.

### What Google has not documented yet

Several details are still undocumented by Google:

- a public help page, eligibility rules, rollout dates and markets;
- whether ads appear outside Search, such as in Maps or AI Mode;
- how returns, voids and partial refunds affect billing;
- whether the bid works as a hard cap or a target average;
- what the performance report includes.

### Why the billing event matters

The coupon is not the change. The billing event is.

Charging when a code is redeemed at the register moves local search advertising toward how retail media is sold: against an outcome recorded in the retailer's own system, not a click. Running the campaign from the point-of-sale system follows a pattern I described when [retail media started losing its separate buying interface](/blog/retail-media-programmatic-buying-openrtb-koddi-teads). It also echoes [Google's UCP Analytics](/blog/google-ucp-analytics-merchant-center-ai-checkout), where measurement starts at a transaction event rather than an impression.

For small retailers, the appeal is plain. Many already struggle to be [recommended by AI systems over larger chains](/blog/ai-shopping-retailer-recommendation-gap-lightspeed-vaer), and paying only when a shopper actually shows up at the register lowers the risk of local advertising. The discipline is to treat redemptions as the start of measurement, not the end. Compare redeemed baskets with your normal baskets, and watch how many redeemers were already your customers.

If you only paid when a coupon was redeemed, how many of those customers would have come in anyway?

---

## INTERNAL-LINK PLAN

| Anchor | Target | Why |
| --- | --- | --- |
| retail media started losing its separate buying interface | /blog/retail-media-programmatic-buying-openrtb-koddi-teads | The campaign is bought and managed inside the POS, not Google Ads |
| Google's UCP Analytics | /blog/google-ucp-analytics-merchant-center-ai-checkout | Another Google measurement surface anchored to a transaction event |
| recommended by AI systems over larger chains | /blog/ai-shopping-retailer-recommendation-gap-lightspeed-vaer | Same Lightspeed small-retailer audience; paid local reach versus organic AI recommendation |

Three internal links (cap is four). "Retail Media Is Becoming Infrastructure" (Instacart/Gopuff Carrot Ads) was considered and left out; the buying-interface piece is the closer fit.

## EXTERNAL SOURCES (to link on publication, each anchor once)

- Lightspeed, Setting up Google Local Coupons promotions: https://x-series-support.lightspeedhq.com/hc/en-us/articles/53103095790491-Setting-up-Google-Local-Coupons-promotions (anchor: "Lightspeed's setup guide")
- Google, May 20 2026 Google Marketing Live Search ads post: https://blog.google/products/ads-commerce/google-marketing-live-search-ads/ (anchor: "May 20 post on Direct Offers")
- MediaPost, Oct 9 2026, on Selin Song's LinkedIn post: https://www.mediapost.com/publications/article/418625/google-pilots-in-store-retail-attribution-from-cli.html (anchor: "trade coverage")
- Google Ads Help, About store visit conversions: https://support.google.com/google-ads/answer/6100636 (anchor: "Google describes store visits as modeled estimates")
- Google Merchant Center Help, Local promotions basics: https://support.google.com/merchants/answer/15582436 (anchor: "Merchant Center local promotions")

## RESEARCH NOTES FOR THE EDITOR

- **Primary source is a partner, not Google.** Lightspeed's help article is the only detailed public documentation. I read it in full in a browser (direct fetch returns 403). Google's own public statements are the May 20 post (one phrase, "local coupons") and an Oct 8 LinkedIn post by Selin Song, reported by MediaPost on Oct 9. I could not access the LinkedIn post itself.
- **Spend-limit inconsistency in Lightspeed's own guide:** "monthly spending cap" in the billing section, "Campaign total budget" in the setup steps. The draft reports both rather than choosing.
- **Trade coverage I did not repeat:** MediaPost's "per-sale view" and similar "pay per sale" framing (the documented billing event is redemption); a MediaPost line linking "the integration" to UCP, which in context refers to Direct Offers native checkout, not Local Coupons; another trade summary saying Direct Offers bills per click, which I could not confirm in any Google source.
- **Mobile wallet:** reported by MediaPost and Shopifreaks from the LinkedIn post. Lightspeed describes copying a code or showing a barcode. The draft attributes the wallet detail to trade coverage.
- **SERP:** "Google Local Coupons" returns trade news (MediaPost, Shopifreaks, The Keyword), the Lightspeed help article, and older unrelated coupon history. No result explains the billing model, the POS flow and the measurement limits together for a retailer. A clear guide can rank.
- **Corpus:** no TRH article mentions Local Coupons or Direct Offers.

## AI COMMERCE 2027 RECOMMENDATION

**NO CHANGE.** Local Coupons is a closed-beta local ad with a novel billing event, not evidence of software acting with authority. Shift 06 (advertising inside the shopping interface) already covers retail media absorbing new surfaces. Revisit if Google documents Local Coupons inside AI Mode or ties redemption to agent-initiated purchases.
