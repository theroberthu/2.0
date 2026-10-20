# Key findings: reference articles (review draft)

**Status:** APPROVED (2026-10-20). Written to Supabase with `node scripts/apply-key-findings.mjs --apply`.
**Applies to:** `schema_json.key_findings` on five published search/reference articles.
**Rendered as:** a "Key findings" box placed after each article's opening section, just before the first H2.
**Rule:** every finding restates a fact or boundary already in the approved body, with the same hedges. No new claims, no new sources.

Thesis and authority pieces (Visa/BILL, Personal Agent Protocol, Project Swap and similar) are deliberately excluded: the argument is the point, and the opening already states it.

---

## google-universal-cart-retailers-ucp-checkout

1. Google Universal Cart launched in the U.S. on October 15, 2026, in Google Search, including AI Mode, and the Gemini app. YouTube and Gmail, announced in May, are not live.
2. The cart holds products from many retailers, but Google documents checkout one merchant at a time. No single payment covers several retailers.
3. Shoppers either pay with Google Pay on Google, for participating merchants, or transfer items to the merchant's own cart. That transfer is one-way, with no sync back.
4. The merchant remains the seller of record. Saved cart items live in the shopper's Google Wallet, and the merchant receives the buyer's details when a native checkout completes.
5. Google has not disclosed merchant fees or a revenue model for Universal Cart.

Body support: "Where Universal Cart is available"; "Can it hold items from different retailers?"; "How checkout works: two paths"; "Does Google become the Merchant of Record?"; "Does the retailer keep customer data?"; "What Google does not disclose".

## google-local-coupons-pay-per-redemption-ads

1. Google Local Coupons is a Search ad billed only when a shopper redeems a single-use code at the register. As of October 2026 it is in closed beta for select U.S. accounts.
2. The most detailed public documentation comes from Lightspeed, a point-of-sale company. Google has not published its own help page.
3. The retailer pays twice for each redeemed coupon: once in the discount, and again in the fee to Google.
4. It is pay per redemption, not pay per click and not necessarily pay per sale. How returns and voids affect billing is not documented.
5. A redemption is a directly observed event tied to the ad, but it does not prove the ad caused the purchase.

Body support: opening and availability line; "What retailers pay for"; "What the point-of-sale integration measures"; "What Google has not documented yet".

## shopify-ai-connectors-chatgpt-claude-gemini

1. Shopify documents official connectors for seven assistants: ChatGPT, Claude, Gemini, Grok, Meta's Muse, Perplexity and Microsoft Copilot.
2. With write access, each can create and update products and collections, set inventory and create percentage-off discount codes. Orders, customers and analytics are read-only.
3. Shopify blocks every connected AI tool from issuing refunds, cancelling or capturing orders, processing returns, managing gift cards, changing the live theme, and changing plan, payments, taxes or domains.
4. These are merchant-side connectors, separate from Shopify Agentic Storefronts, which are customer-facing.
5. Access takes two approvals, staff permissions set the ceiling, and an access level already approved cannot be lowered in place.

Body support: opening; "AI connectors are not agentic storefronts"; "What every Shopify AI connector can do"; "What no Shopify AI connector can do"; "How Shopify controls AI access to your store".

## google-ucp-analytics-merchant-center-ai-checkout

1. UCP Analytics is a Merchant Center dashboard for merchants with a live UCP integration, covering checkout on Google's AI surfaces.
2. Its funnel starts at Clicks to Buy and reports purchases, purchase rate, average order value, cancellations, account linking and top-selling UCP products.
3. An alpha Merchant API offers the same data at account and product level, segmented by date and country but not by surface.
4. Cart transfers to the merchant's site are counted, but whether they became orders has to come from the merchant's own analytics.
5. It measures the transaction, not consideration: there are no impressions, prompts or data on products the AI passed over.

Body support: opening; "What UCP Analytics is and who can see it"; "The metrics"; "What the API adds, and its limits"; "A cart transfer is not a purchase"; "Two measurement problems, one partly solved".

## shopify-ucp-buyer-consent-agentic-checkout

1. On October 16, Shopify's Checkout MCP and Cart MCP added support for UCP buyer consent, for agents that negotiate the extension on UCP 2026-08-25.
2. Shopify storefronts advertise at least analytics, preferences, sale or sharing, and marketing consent, with separate email and SMS choices.
3. If an agent sends no consent, the shop's default settings for the buyer's country apply. An unknown country defaults to opt-out.
4. The specification defines how consent is represented and exchanged, not what a merchant may lawfully do with it.
5. Agent authorization, permission to place the order and buyer consent are separate controls, and no AI platform has said it sends consent this way.

Body support: opening; "What Shopify shipped"; "What happens when the agent says nothing"; "What the specification does not do"; "Three permissions, not one"; "What it does not show yet".

---

## How it ships after approval

1. The template change (dek under the H1, findings box, `abstract` in Article JSON-LD) ships through the normal production gate.
2. `node scripts/apply-key-findings.mjs` writes these findings to `schema_json.key_findings` for the five slugs, merging into the existing `schema_json` without touching other keys. ISR picks them up within 60 seconds.
