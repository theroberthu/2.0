# Amazon Review Requests ads

**Status:** DRAFT ONLY. Nothing published, committed, pushed, written to Supabase, added to the sitemap, or generated as an asset.
**Type:** Search / reference article
**Assignment:** TRH Editorial Board, 2026-10-07
**Gates:** Research PASS, Editorial PASS, SEO/GEO PASS. Final: WRITE.
**Editorial Board (2026-10-07):** PUBLISH after final production check. Pre-ship recheck of both Amazon pages: late October (launch page) vs November (news post) still conflict, billing still undocumented, so the ambiguity stays as written. Phrasing rule: never say or imply "paying for reviews"; the product is paid review invitations shown to recent purchasers. Protected: the cost-per-incremental-review method, the bounded 3x result, the three-way comparison, the H1 wording.

---

## SEO PACKAGE

- **title (editorial H1):** Amazon Review Requests Ads: How Amazon's New Paid Review Invitations Work
- **meta_title:** Amazon Review Requests Ads: How They Work vs. Vine
- **slug:** amazon-review-requests-ads
- **category:** Digital Marketing
- **meta_description:** Amazon Review Requests is a new ad type that invites recent buyers to rate or review. How it works, who qualifies, how it compares with Vine, and how to measure cost.

---

## DRAFT BODY

### Amazon Review Requests Ads: How Amazon's New Paid Review Invitations Work

Amazon Ads announced Review Requests on September 29, 2026. It is a new campaign type that shows a review invitation to customers who recently bought your product, while they browse Amazon.

The important distinction is in the name. You are paying to put an invitation in front of verified buyers. You are not paying for a review, and you are not paying for a good one. That makes review acquisition a media decision for the first time, and it should be measured like one.

### What Review Requests ads are

A customer who recently purchased your product sees a Review Requests ad. They can submit a star rating with one tap, then optionally add a written review with photos or video. Amazon says the invitations run on its highest-traffic pages, naming the homepage as an example.

Amazon frames the output as "the same authentic reviews customers already leave," and the review that results is an ordinary customer review on your product detail page. Because it sits on the detail page, any lift reaches every shopper who visits the listing, not only the ones who saw the ad.

You create and manage campaigns in [Amazon Ads Agent](/blog/amazon-full-funnel-campaigns-ai-channel-mix), Amazon's renamed advertising platform, or through the Amazon Ads Unified API, where Review Requests extends the existing campaign management endpoints.

### Who can use Review Requests

Amazon's eligibility rules are specific:

**Advertisers:** registered sellers and vendors with an advertising console account in good standing and no active policy violations.

**Products:** fewer than 1,000 total ratings and reviews. Amazon checks eligibility when you create the campaign and again while it runs, and campaigns for a product pause automatically once it reaches 1,000.

**Geography:** United States only at launch, with more marketplaces planned.

The 1,000 cap tells you what this is for: an early-life tool for products still building social proof.

### When it launches

Amazon's own pages disagree. The launch announcement says Review Requests "launches in open beta in the United States in late October 2026." Amazon's unBoxed news post says it "will launch in November 2026." Until Amazon reconciles them, treat the date as whatever appears in your Ads Agent account.

### Review Requests vs. Request a Review vs. Vine

Amazon now offers three compliant ways to get more reviews, and they solve different problems.

**Request a Review (free).** A button on each shipped order in Seller Central. Amazon staff guidance in the Seller Forums says it can be used once per order, between 5 and 30 days after delivery, and sends a standardized email asking for both a product review and seller feedback. It is free, and you should already use it on every eligible order.

**Amazon Vine (enrollment fee).** You give up to 30 units to Amazon's invited reviewers. New products can enroll before launch once they have a customer-ready FBA listing, and existing products qualify with fewer than 30 reviews. Amazon says you are not billed until the first Vine review publishes, and you are not charged if no review arrives within 90 days. Vine solves the zero-reviews problem at launch.

**Review Requests (advertising spend).** Reaches customers who bought the product themselves, through an on-site ad rather than an email, for products under 1,000 reviews. It solves the problem that comes after Vine: a product with some reviews whose organic review rate is too slow.

### How Review Requests ads are billed

This is the biggest open question, and the honest answer is that Amazon has not published it.

Amazon's documentation says only that campaigns use "the same bidding and budget controls you use for your other Amazon Ads campaigns." It does not say whether you pay per click, per impression, or per review submitted. One agency write-up states that brands pay only when a customer submits a review, but cites no Amazon source. Amazon has not documented minimum bids or budgets either.

Check the billing unit in Ads Agent before you spend anything. The measurement method below works under any of the three.

### What Amazon's 3x result actually shows

Amazon says products in its closed beta received three times as many ratings and reviews per week "compared to before the test." The footnote cites internal Amazon data from a US closed beta that ran June 3 to 21, 2026.

That is a before-and-after comparison over 19 days. Amazon has not disclosed how many products took part, what categories they were in, what they spent, or whether any comparable products ran without the ad. It is a reasonable signal. It is not a forecast for your catalog, and it says nothing about cost.

### Is the invitation neutral?

Amazon describes the ad as inviting recent buyers to submit "a star rating or written review," and the examples show a plain rating prompt. Nothing in Amazon's documentation suggests the invitation asks for positive reviews, and Amazon's community guidelines prohibit reviews given in exchange for anything of value.

What Amazon has not disclosed is how it chooses which recent buyers see the ad. Watch your average rating, not just your count. And do not follow Amazon's invitation with your own messages that route happy buyers to review and unhappy ones to support. That is review gating, and it is a policy problem even when the ad itself is compliant.

### How to measure cost per incremental review

Faster review growth is not the same as a positive return. The useful number is how much campaign spend it took to earn each review above your normal rate.

Before launch, record each eligible product's reviews and ratings per week, and its units sold per week, for the previous four to eight weeks. That gives you a baseline review rate per unit sold, which matters because reviews rise with sales whether or not you advertise.

Then run the campaign and calculate:

**Cost per incremental review = campaign spend divided by (reviews received during the campaign minus reviews you would have expected at your baseline rate for the units you sold).**

If you can, hold back one or two similar products as a control. Count star-only ratings and written reviews separately. Written reviews carry more information for shoppers, and increasingly for the [AI shopping assistants that summarize them](/blog/reviews-ai-discovery-infrastructure-bazaarvoice-bluefish). And set a ceiling before you start: the highest cost per incremental review you will accept, based on what a higher count is worth to your conversion rate.

### What changes for product launch economics

Amazon has spent this year tightening how reviews accumulate, including [splitting reviews across functionally different variations](/blog/amazon-variation-reviews-2026). Paid invitations are the other side of that policy: fewer ways to borrow reviews, one more way to ask for them.

For a new product, the sequence becomes clearer. Vine before or at launch for the first reviews. Request a Review on every eligible order, because it is free. Review Requests when the organic rate stalls and the product is still well under 1,000 reviews.

What Review Requests does not do is guarantee better ranking. Amazon has made no claim that the reviews it produces carry any search or ranking benefit beyond what any review carries, so do not budget as if they do.

The format is most useful for products with steady sales and a slow review rate. It is least useful for products whose real problem is that buyers do not like them, since more reviews will simply confirm it faster. [Fix the listing and the product first](/blog/amazon-advertising-strategy-2026), then pay to ask.

If asking for a review now has a price, what is one more review actually worth to your product?

---
