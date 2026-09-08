# AI Search May Be an Interface, Not a New Channel

**Status:** Published 2026-09-08. Supabase id `f079304a-bff7-4d5e-8b1d-f009a2e759b3`.
**Type:** Strategic Analysis (timely).
**Primary sources:** Search Engine Roundtable (2026-09-04), Google Ads Help "About ads and AI Overviews", Google Marketing Live post (2026-05-20).
**Voice:** Practitioner. One argument. No em dashes. Hyphens only.
**Editorial Board note:** Approved after three revisions (see REVISIONS).

---

## TITLE SPLIT

- `title` (editorial H1, and JSON-LD headline): **AI Search May Be an Interface, Not a New Channel**
  States the argument. "May be" carries the hedge a single small experiment requires.
- `meta_title` (drives `<title>`, `og:title`, `twitter:title`):
  **Google Tests Exact and Phrase Match Ads in AI Mode**
  Front-loads the entity and the practitioner's search vocabulary. The verb "Tests"
  is deliberate: the single most important thing not to misrepresent is that this
  is an experiment, not a rollout.

OG and Twitter cards carry the SEARCH title, not the H1.

## PUBLISH TIMESTAMP

`published_at` is `2026-09-08T23:00:00.000Z`, which is 6:00 PM Central (CDT).
NOTE: the site has no scheduled-publish filter. `src/app/blog/page.tsx` and
`src/app/blog/[slug]/page.tsx` only ORDER by `published_at`; neither filters
`published_at <= now()`. A future timestamp therefore date-stamps and sorts the
post but does NOT hide it. This post went live at insert time.

---

## REVISIONS (Editorial Board, applied before publication)

1. "...then the surface is becoming something Google resolves at auction time
   rather than something the advertiser selects."
   -> "...the experiment suggests that Google can vary the presentation around the
   same underlying Search demand without requiring the advertiser to choose a
   separate AI campaign."
   Reason: the original asserted an auction-time mechanism Google has not
   described. The replacement stays with what the experiment shows. The following
   line ("The campaign did not become an AI campaign. The context around it
   changed.") was preserved verbatim.

2. Documentation asymmetry rewritten to
   "I could not find equivalent published Google Ads eligibility documentation for
   AI Mode," so the article reports the limit of its own search rather than
   asserting absence. The no-carryover argument was preserved and sharpened:
   Google's public rules on targeting, opt-out behavior, placement treatment and
   segmented reporting describe AI Overviews and "should not be carried over to
   AI Mode by assumption."

3. Trimmed from 1,153 to 1,123 body words. Cuts were PPC mechanics and one
   redundant restatement, never a factual distinction. Removed: an explanation of
   how keyword buying used to map to a results page; the sentence "So the
   documented rule and the changed rule are not even on the same surface" (the
   preceding paragraph now carries it after revision 2); two list items in the
   feed-hygiene sentence. All protected terms retained: exact match, phrase match,
   text ads, AI Mode, "explicit and direct user intent", AI Max, Performance Max,
   Highlighted Answers.

---

## EVIDENCE NOTES

**The surface distinction is the spine. Do not let anyone blur it.** Google's
"About ads and AI Overviews" Help article mentions "AI Mode" ZERO times and
"AI Overview" 47 times, verified by counting occurrences in the rendered page.
Every AI Overviews fact in the article is labelled as AI Overviews. If a future
edit carries those rules onto AI Mode, the article's central finding collapses,
because the finding IS the gap.

**Verified Google Help quotes (all AI Overviews, not AI Mode):**
- Requires "AI-powered targeting solutions like broad match on Search or the
  keywordless targeting technology available through AI Max for Search campaigns,
  Performance Max campaigns, Shopping campaigns, or Dynamic Search Ads."
- "No, you can't directly target ad placements in the AI Overviews."
- "No, you can't opt out of serving ads in AI Overviews."
- "Yes, ads in AI Overviews are reported as Top Ads."
- "Google Ads currently doesn't offer segmented reporting when ads show within
  Search AI Overviews," and Google is "still learning and actively thinking about
  what the future of reporting looks like for this experience."

**Ads Liaison statement, verbatim (this is the news, and it is not a product
announcement).** Ginny Marvin: "This is a small experiment that recently kicked
off." And on LinkedIn: "Exact and phrase match keywords are eligible to serve text
ads in AI Mode. Note however that this is limited to cases where there is explicit
and direct user intent. AI Max and PMax for Search are designed to capture complex
conversational intent and access our latest ad formats (like Highlighted Answers)."

**Undisclosed by Google:** scale, geography, duration, permanence, performance
data, whether Smart Bidding is required, AI Mode opt-out, AI Mode reporting, and
the definition of "explicit and direct user intent."

**Practitioner claim, NOT adopted as fact.** Anthony Higman: "Before this the ONLY
way to show in those places was through ai max, p-max or broad and smart bidding."
The article credits him with spotting the change but does not assert his account of
the prior AI Mode rule, because Google has not documented it.

**Research hazard worth remembering.** A search summarizer answered a direct
question about AI Mode ad eligibility with AI Overviews content, presented as if it
addressed AI Mode. Caught by reading the Help article and counting terms. The
conflation is loose in secondary sources; it is the same error this article warns
against.

**Deliberately excluded.** Direct Offers, Universal Commerce Protocol native
checkout, Conversational Discovery ads and Business Agent for Leads from the same
Google post (all pull toward checkout). Google's "75% of people report making
faster, more confident decisions using AI Mode" figure, which is Google internal
data supporting Google's own product. Match-type history.

**Overlap.** 81 published posts scanned at draft time. "AI Max", "Performance Max",
"phrase match", "match type", "Highlighted Answer": all zero prior mentions.
"Google Ads" appeared in only two posts, once each. Genuinely new coverage.

---

## Frontmatter (as inserted)

```yaml
slug: google-exact-match-ads-ai-mode
title: "AI Search May Be an Interface, Not a New Channel"
meta_title: "Google Tests Exact and Phrase Match Ads in AI Mode"
category: "Digital Marketing"
meta_description: "Google confirmed a small test letting exact and phrase match Search ads serve in AI Mode. What changed, what is undocumented, and why the boundary matters."
og_image: /images/blog/google-exact-match-ads-ai-mode.svg
read_time_minutes: 6
published_at: 2026-09-08T23:00:00.000Z
status: published
tags: [Google Ads, Google AI Mode, AI Max, paid search, match types, AI advertising]
```

## Internal links (4, verified 200 at publication)

- /blog/google-ai-overview-ai-mode-citation-teardown-geo
- /blog/product-data-shared-infrastructure-google-ai-mode
- /blog/niq-similarweb-agentic-commerce-measurement
- /blog/google-gemini-writes-ads-product-data-marketplace-sellers

Considered and cut: /blog/google-search-console-generative-ai-visibility.
