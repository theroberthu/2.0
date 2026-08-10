# Google Search Console Now Tracks AI Visibility, but Not AI Traffic

**Status:** Published.
**Type:** Strategic Analysis
**Primary sources:** Google Search Central Blog (June 3, 2026); Search Console Help, Generative AI performance report (Search); Search Console Help, impressions/position/clicks.
**First-party evidence:** Search Console Generative AI features report, theroberthu.com property, 28-day window ending August 8, 2026.
**Voice:** Operator. Fact / observation / interpretation kept separate. No em dashes. Hyphens only.
**Editorial Board:** Approved after four precision edits (aggregation caveat wording, AI Overviews/AI Mode bundling phrased as current-state, softened "closed the gap", replaced closing question).

---

## Frontmatter (for Supabase insert)

```yaml
slug: google-search-console-generative-ai-visibility
title: "Google Search Console Now Tracks AI Visibility, but Not AI Traffic"
category: "GEO & SEO"
meta_title: "Google Search Console Now Tracks AI Visibility, but Not AI Traffic"
meta_description: "Google's new Search Console report shows AI Overviews and AI Mode impressions. What my first 28 days revealed, and what it still cannot answer."
canonical: /blog/google-search-console-generative-ai-visibility
og_image: /images/blog/google-search-console-generative-ai-visibility.svg
featured_image_alt: "A measurement instrument that shows where content appeared in Google generative AI features but not what question caused it"
author: Robert Hu
read_time_minutes: 6
published_at: 2026-08-10T14:00:00.000Z
status: published
tags: [Google Search Console, AI Overviews, Google AI Mode, GEO measurement, AI visibility, generative AI features]
related_posts: [google-ai-overview-ai-mode-citation-teardown-geo, geo-vs-seo-marketplace-sellers, adobe-ai-traffic-393-percent-retail]
has_faq_schema: false
```

---

## Featured image specification

**Path:** `/images/blog/google-search-console-generative-ai-visibility.svg` (source), PNG via /api/og
**Left panel:** "Visibility," (white) / "Not Traffic." (`#42a5c8`)
**Right panel:** Pull quote `"That is a reporting change, not a measurement change."` gold italic Georgia, attribution `ROBERT HU - ON MEASURING AI VISIBILITY`
**Background:** `#1a2a32` - **Quote color:** `#c5a94e`

## In-article screenshot (shipped)

**Path:** `/images/blog/gsc-generative-ai-report-28-days.png` (1600x1000, 84KB,
downscaled from a 3376x2110 / 496KB capture)
**Placement:** after the "My first 28 days" opening paragraph, above the
top-pages callout, in a `<figure>` matching the citation-teardown convention.
**Why this crop:** the four tabs (Pages / Countries / Devices / Days) and the
single Total impressions card are both in frame. Those absences are the
article's visual evidence and must survive any future re-crop.
**Privacy:** contains only the property name, public URLs, and aggregate
impressions. The Google account avatar is visible in the top-right corner.

---

# Google Search Console Now Tracks AI Visibility, but Not AI Traffic

A new report appeared in my Search Console property. Under Performance, next to the report I have been reading for years, there is now a second one labeled Generative AI features, still marked Beta.

I have wanted this data for a long time. GEO measurement has been frustrating precisely because the interesting behavior happened inside systems I could not observe. So my first instinct was to treat the number as a scoreboard. That instinct turned out to be the thing worth resisting, and working out why is more useful than the number itself.

## What the report actually measures

Google announced these reports on June 3, 2026, and the documentation is specific about several things worth getting right.

The Search version covers two features: AI Overviews and AI Mode. Search Labs experiments are excluded because they are still in active development, and Google adds that it expects "to update this list over time as we develop Google Search." Discover has its own separate report.

An impression is defined as how many times links to your site were shown to a user in a generative AI feature on Google Search. The available dimensions are Pages, Countries, Dates, and Devices. There are no queries. There are no clicks and no click-through rate. Google's announcement mentions "adding additional metrics over time," but I could not find anywhere that Google explains why clicks and queries are absent today, so I am not going to guess at the reason.

One detail reframes the whole thing. Google says this data "is included in the overall performance report, where it will continue to be tracked." These impressions were already being counted. What is new is the ability to see them separately. That is a reporting change, not a measurement change, and it is a meaningful distinction if you are tempted to read a new number as new performance.

## My first 28 days

For the 28-day window ending August 8, my property shows approximately 1.37K impressions in generative AI features. Search Console displays it rounded, so I am not going to invent a precise figure.

![Google Search Console Generative AI features report for theroberthu.com showing approximately 1.37K impressions over 28 days, a single Total impressions metric card, and tabs for Pages, Countries, Devices, and Days with no queries or clicks.](/images/blog/gsc-generative-ai-report-28-days.png)

That screenshot is most of the argument in one frame. One metric card where the standard Performance report gives me four, and four tabs with no Queries among them.

The top pages visible in my report:

- /geo, 381
- /blog/amazon-shop-direct-sellers, 113
- /blog/chatgpt-canvas-vs-claude-artifacts, 89
- /blog/amazon-revenue-walmart-sellers-2026, 78
- /blog/amazon-whole-foods-project-cremini, 73

The daily chart shows impressions on every day of the window, moving roughly between fifteen and seventy, with no single spike carrying the total. Observation, not proof of anything: this looks like recurring visibility rather than one moment of attention.

## The concentration, and why I will not put a clean number on it

My /geo page accounts for 381 of roughly 1,370 impressions, which is about 28%.

I want to flag why that percentage is softer than it looks, because the reason is genuinely useful. Google's documentation says the chart total is aggregated by property, so if two pages from my site appear in the same generative AI feature, that counts as a single impression in the chart. The table, when grouped by page, is aggregated by page. Google states plainly that chart totals and table totals can differ for exactly this reason.

So I am dividing a page-aggregated numerator by a property-aggregated denominator. The gap is real and it is large. The exact share is not. The decimal is not meaningful, and anyone building a share-of-visibility metric out of these two numbers is doing arithmetic the report does not support.

## The part I did not expect

I would have predicted that a page explicitly built around generative engine optimization would lead. It did.

What I did not predict is the rest of the list. Amazon opening search results to external stores. A comparison of ChatGPT Canvas and Claude Artifacts. Amazon passing Walmart in revenue. Whole Foods integration. None of those were written as GEO pages. They were written as ordinary commerce and technology analysis.

One possible explanation is that Google's generative systems are surfacing useful analysis on topics where a site has some depth, rather than rewarding pages that announce themselves as AI-optimized. I am stating that as a hypothesis. This is one property, one 28-day window, and a report that will not tell me which query produced any of it. I cannot distinguish that explanation from several others, including the simple possibility that these are among my better-performing pages in ordinary search too.

## One number, two counting rules

Here is the limitation I find most interesting, and it is documented rather than inferred.

In the current Search report, Google combines AI Overviews and AI Mode into one impressions view, with no dimension to separate them. But Google counts impressions differently in each. For AI Overviews, the documentation says the link must be scrolled or expanded into view to count. For AI Mode, standard impression rules apply.

So my 1.37K is a sum of two surfaces measured by two different standards, and the report gives me no way to know the mix. A month where AI Mode grows and AI Overviews shrinks could look identical to the reverse. That is not a criticism of a beta product. It is a reason to be careful about treating the trend line as a single coherent signal.

## Visibility is not traffic

This is the distinction I keep returning to.

An impression tells me Google showed a link to my site inside a generative AI experience. It does not tell me anyone clicked, and the report contains no clicks and no click-through rate. It does not tell me what question prompted it, because there are no queries. It does not tell me whether my page anchored the answer or sat in a row of supporting links, because the report has no concept of prominence.

Put plainly: I can now see that Google's generative systems surfaced a page. I still cannot see what the person asked, why Google chose that page, what role it played in the answer, or what happened next. Something similar shows up in commerce, where [AI-referred traffic behaves measurably differently once it lands](/blog/adobe-ai-traffic-393-percent-retail) but the upstream reasoning stays with the platform. It is also the same shape as the problem [retailers face when the assistant keeps the conversation](/blog/retailers-ai-traffic-customer-ownership) and the merchant gets the order.

Search Console has started to close the first layer of that gap. It has not closed the second.

## The honest counterpoint

There is a real case that this changes very little.

The report is a new window onto behavior that was already happening and already being counted. Nothing about it tells me to write differently. The pages showing up are, as far as I can tell, pages that were already reasonably well structured, reasonably useful, and technically accessible. That is the same list of virtues that has worked in [ordinary search for years](/blog/geo-vs-seo-marketplace-sellers). When I looked at [two of my own AI citations earlier this summer](/blog/google-ai-overview-ai-mode-citation-teardown-geo), what the cited posts shared was not an AI-specific trick.

The most defensible reading may be that GEO is not turning out to be a separate discipline so much as a new measurement surface for work that already had to be good. I would rather hold that view and be proven wrong by better data than build a practice on 1.37K impressions from one site.

## What I would actually do with this

Export it now, because I do not know whether Google will backfill history for properties that gain access later. The documentation does not say, and an unanswered question about history is a reason to keep your own copy.

Then treat it as a hypothesis generator rather than a scoreboard. Watch which pages appear, notice the ones you did not expect, and go read them to see what they have in common. That is a question worth investigating, not a metric worth optimizing.

If Google can now tell me where my content appeared but not what question caused it to appear or what happened next, what exactly should I optimize?
