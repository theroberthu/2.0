# Changelog

The record of what shipped and why. Each release notes: what changed, why,
expected impact, key commits, and follow-ups. Newest first. Releases are
thematic, not strict semver.

---

## Release 1.57 - Walmart Agent Gateway authority article and March correction (2026-10-22)

**What changed.** New authority/thesis article,
`/blog/walmart-agent-gateway-agent-profiles`: Walmart's October 21
announcement of Agent Profiles, an invitation-only Agent Gateway beta and
terms for AI agents, read as a delegated-account model in which an outside
agent becomes a separate, limited, revocable user of the customer's account.
H1 "Walmart's Agent Profiles Show How Retailers Can Admit AI Shoppers Without
Giving Up Control"; search title "Walmart Agent Gateway and Agent Profiles
Explained". 1,211 words excluding the H1 (1,171 prose only), four internal
links, five external sources linked once each. No Key findings box: thesis
pieces are excluded by the 1.52 rule.

**Correction.** `/blog/walmart-sparky-chatgpt-gemini` (March 18) receives the
minimum correction the senior editor required before publication: a dated
editor's note at the top linking to the new article, and Statement A ("Amazon
won't let anyone else's AI sell on Amazon. Walmart won't let anyone else's AI
sell Walmart products...") replaced with a time-bounded version that does not
swap one absolute for another. Script:
`scripts/correct-walmart-sparky-chatgpt-gemini.mjs` (dry run by default).

**AI Commerce 2027.** One tracker row (2026-10-21, Walmart, Trust). No shift
text change while the products are announced or in beta. `LAST_UPDATED` and
the sitemap date move to 2026-10-22. The Personal Agent Protocol article is
unchanged: Walmart is a named PAP partner but has not tied the gateway to it.

**Boundaries.** Walmart names no beta participants and discloses no usage;
Agent Profiles are "launching in the next month." The article uses the
correct MCP expansion (Model Context Protocol, confirmed by the protocol's
documentation and The Verge). "All account holders, no Walmart+ needed" is
Reuters and TechCrunch reporting, not Walmart's, and is not stated.

**Follow-ups.** The rest of the March post's correction plan (statements B to
H, title, meta, excerpt, RecoScope CTA) ships with the legacy triage, each
with its own sourcing. Revisit Shift 05 when Agent Profiles are live.

---

## Release 1.56 - /videos desktop layout (2026-10-21)

**What changed.** From 1024px up, the intro and the "In short" box sit side by
side instead of stacking narrow on the left, and the documentary grid moves
from two columns to three (two on tablets, one on phones). Cards are tighter:
smaller title, dek clamped to three lines, smaller duration badge.

**Why.** On wide screens the 1.55 layout left a large empty area beside the
intro and stretched two oversized cards across the full width.

---

## Release 1.55 - GEO pass on /videos (2026-10-21)

**What changed.**
- **Answer-first content.** `/videos` opens with an "In short" box generated
  from the video data: how many documentaries, the latest publish date, the
  Shorts count, and the topics covered with the subjects under each. Every
  documentary card now shows a topic label and its publish date. Each
  `VideoEntry` gains `topic` (one of `VIDEO_TOPICS`) and `subject`.
- **Structured data.** The bare `ItemList` is replaced by a `CollectionPage`
  (author, `dateModified` from the newest video) whose `ItemList` items carry
  name, description and image for each companion page; a second `ItemList`
  covers the Shorts; a `BreadcrumbList` is added. VideoObjects stay on the
  companion pages only, since the index is not a watch page.
- **Social metadata.** Open Graph and Twitter tags now use the page's own
  title and description and the newest video's thumbnail, instead of falling
  back to the site default.
- **Sitemap dates.** `/videos` takes the newest video or Short upload date
  (weekly change frequency); each companion page takes its own video's upload
  date. The fixed `STATIC_LAST_MODIFIED.videos` date (2026-10-14) is removed.

**Why.** The index had no self-contained summary for AI systems to quote,
thin item data, generic social cards, and a frozen sitemap date that made six
newer videos look older than they are.

**Follow-ups.** New videos need `topic` and `subject`; the summary, cards,
structured data and sitemap update from there.

---

## Release 1.54 - YouTube Shorts on the site (2026-10-21)

**What changed.** The ten Shorts published since October 16 now appear on
theroberthu.com. `/videos` gains a "One-minute clips" row of vertical cards
(YouTube's portrait frame, stored locally at 540x960) that open each Short on
YouTube. Companion pages show "Related one-minute clips" only where a Short
genuinely relates to the documentary: the ASML and NVIDIA chip-tools Shorts on
the Intel and Bosch pages. Clicks fire a GA4 event, `short_click` (`short_id`,
`location`, and `video_slug` on companion pages). Data lives in `SHORTS` in
`src/lib/videos.ts`, with titles, upload dates and durations from each watch
page; the row is `src/components/ShortsRow.tsx`.

**Why.** Every video from the current series is now represented on the site.
Shorts do not get companion pages of their own: a one-minute clip makes a
thin page, which the Operating System rules out.

**Scope decision.** The 32 long-form videos from February to May 2026 stay
off the site for now. They share the legacy framing and unsourced claims
flagged in `docs/legacy-content-triage-2026-10.md` and will be revisited after
that review.

**Follow-ups.** Add each new Short to the top of `SHORTS`, with `related` set
only when the link is genuine. Register `short_id` as a GA4 custom dimension.

---

## Release 1.53 - Walmart drone delivery video companion page (2026-10-21)

**What changed.** New companion page,
`/videos/walmart-wing-drone-delivery-economics`, for "Walmart's $0 Drone
Delivery: Who Pays for the Flight?" (https://youtu.be/i1BGeCRMuqE): H1 and
search title "Walmart Drone Delivery: Who Pays for the $0 Flight?", about 770
words written against the narration, five takeaways, eight timestamped
chapters, six sources, related research from current-standard articles only.
VideoObject from verified YouTube values (uploadDate
2026-10-20T16:00:32-07:00, duration PT4M46S) with eight `Clip` chapters. The
homepage Featured Video now points at this video.

**Sourcing and boundaries.** The $0 is the drone delivery fee for eligible
Walmart+ members, limited time, select markets (Walmart Help Center, checked
October 19, 2026). The about $1.40 figure is from a February 2021 report
Accenture prepared for Wing, in 2020 dollars, on marginal delivery cost; the
page says it is not a current cost or profit figure. AutoLoader (Wing, June
2023), pilots overseeing multiple flights (Wing technology page), one million
deliveries across providers with a 23-minute average (Walmart, May 29, 2026)
and Denver and Seattle in 2027 toward 270+ locations (Wing, October 5, 2026),
labeled as plans. Credits keep the CC BY-SA 4.0 notice for Wing-derived
footage and cover visuals.

**Follow-ups.** None. Recent uploads under one minute (Shorts) do not get
companion pages.

---

## Release 1.52 - Blog deks and Key findings for GEO (2026-10-20)

**What changed.** Blog posts published from July 1, 2026 now show their
excerpt as a dek under the H1, and the same text is added to the Article
JSON-LD as `abstract`. Search/reference articles can carry a Key findings box
(3 to 5 plain-text findings in `schema_json.key_findings`), injected after the
opening section, just before the first H2; posts without findings are
unchanged. Five reference articles received Board-approved findings: Google
Universal Cart, Google Local Coupons, Shopify AI connectors, UCP Analytics and
UCP buyer consent. The dek rule lives in `src/lib/blog-dek.ts`
(`DEK_STANDARD_FROM`), with a per-post `schema_json.show_dek` override.

**Why.** Generative search systems lift self-contained statements. A dek puts
the reviewed summary directly under the title, and Key findings put a
reference article's answers in quotable form without displacing its opening.
Thesis and authority pieces are excluded on purpose: the argument is the
point.

**Why the July 2026 cutoff.** The 65 earlier posts follow an older standard:
marketplace-seller and "Here's what to do" framing, and some claims the Board
has since corrected (for example that OpenAI ended Instant Checkout). Their
excerpts are not promoted under the title or into `abstract` until each post
is reviewed.

**Follow-ups.** Review the 65 pre-July posts, starting with those whose
claims conflict with AI Commerce 2027, and set `show_dek` as each passes.
Measure: compare AI Overview impressions (Search Console generative AI report)
and AI referrals for the five findings articles against comparable articles
over four to six weeks.

---

## Release 1.51 - Visa, BILL and Billtrust agent payment pilot authority article (2026-10-20)

**What changed.** New authority/thesis article,
`/blog/visa-bill-billtrust-ai-agent-b2b-payments`: how the live Visa, BILL and
Billtrust pilot lets BILL's Payment Agent complete already-approved supplier
invoice payments through Billtrust portals, recognized with Visa's Trusted
Agent Protocol and using tokenized credentials, and why agentic commerce may
work first where the judgment has already happened. H1 "Visa's B2B AI Agent
Pilot Shows Where Agentic Commerce May Work First"; search title "Visa, BILL
and Billtrust Pilot AI Agent Invoice Payments". Category E-commerce Strategy.
1,111 source-body words, three internal links, three external sources. AI
Commerce 2027 gains one tracker row (2026-10-20, Buyer to operator) and one
Shift 07 evidence sentence (also in the refresh source). `LAST_UPDATED` and
the sitemap date move together to 2026-10-20.

**Why.** TRH had covered agent recognition (Know Your Agent), the
decision/execution boundary (NPCI) and AI operators (Ant International), but
had no live example of an agent executing an already-approved business
decision. This is the first in the corpus, and the contrast with the July
Visa and Lianlian transaction, where the agent made sourcing and purchasing
choices, is the core evidence.

**Board edits applied.** Revision 1: H1 and metadata; buyer-side instruction
wording that does not imply a disclosed invoice-by-invoice approval;
credential and controls "aligned with" the instruction rather than locked;
Lianlian comparison narrowed to the agent's disclosed role; Visa's first-pilot
claim quoted and attributed. Final: the control-mechanics gap disclosed
alongside approval steps and timing; the commercial-motive sentence tightened
to "moving supplier payments from ACH or check to card would expand card
volume for Visa."

**Sourcing.** The "agent is not making payment decisions" answer is in the
FAQ on Visa's investor-site release, not in the Business Wire body. BILL
posted the joint release; Billtrust's newsroom had not listed it on October
20. No buyers, suppliers, volumes, error rates or savings are disclosed.

**Follow-ups.** Revisit when participants, volumes or control mechanics are
published, or when the pilot expands.

---

## Release 1.50 - Three video companion pages and a redesigned Watch next strip (2026-10-19)

**What changed.** Three new companion pages, each written against the video's
narration with verified YouTube values (upload date, duration) and `Clip`
chapters:

- `/videos/intel-chip-manufacturing`, "Why Intel Needs More Than a Better
  Chip" (https://youtu.be/P2sOPHDMZsU): H1 and search title "How Intel Makes
  Chips: Why a Better Design Isn't Enough". Six sources: Intel's manufacturing
  press kit, Fab 9 opening (January 2024) and Foundry Direct Connect (April
  2025), ASML on chipmaking and measurement, Daifuku on material handling.
- `/videos/john-deere-see-spray-roi`, "John Deere's AI Saves Chemicals. But
  Does It Pay?" (https://youtu.be/cn4JBH8tKEM): H1 and search title "John
  Deere See & Spray: Does AI Spraying Pay for Itself?". Seven sources:
  Precision Farming Dealer (May and July 2024), an RDO dealer panel (March
  2025), University of Arkansas Extension FSA2225, the 2026 Agrosystems,
  Geosciences & Environment study, and two Deere pages.
- `/videos/chatgpt-workout-plan-trust`, "ChatGPT Built My Workout Plan. Could
  I Trust It?" (https://youtu.be/ipCBJ6wJf7o): H1 and search title "Can You
  Trust a ChatGPT Workout Plan? What to Check". Four OpenAI ChatGPT Learn
  sources.

The homepage Featured Video now points at the Intel documentary. The "More
documentaries" strip on every video page is redesigned as "Watch next": the
three newest other videos instead of all of them, a 3-column card grid at
960px on desktop with a YouTube-style duration badge, title, two-line dek and
publish date, compact rows on mobile, and an "All N documentaries" link to
`/videos`. Clicks fire a new GA4 event, `watch_next_click` (`video_slug`,
`target_slug`).

**Why.** With eight videos the old strip listed seven full-width cards on
every page. Capping it at three keeps the strip a recommendation rather than
an index, and the index is one click away.

**Sourcing and boundaries.** Deere: the payback example is hypothetical, uses
documented 2025 U.S. usage terms ($5 per unsprayed in-crop acre) and the
Extension's $25,000 to $100,000 retrofit range; the page states that public
reporting does not establish Tyler Troiola's payback, and Deere's Canadian
pages are used for definitions only. Intel: footage comes from separate
operations, $3.5 billion is the announced New Mexico site investment, and no
return, yield improvement or customer win is claimed. ChatGPT: one person's
experience, no fitness outcomes claimed, gym equipment not independently
verified.

**Follow-ups.** Register `target_slug` as a GA4 custom dimension alongside
`video_slug`. Run Rich Results Tests on the three new pages.

---

## Release 1.49 - Shopify UCP buyer consent authority article (2026-10-17)

**What changed.** New authority/reference article,
`/blog/shopify-ucp-buyer-consent-agentic-checkout`: how Shopify's Checkout MCP
and Cart MCP carry UCP buyer consent (2026-08-25), what happens when an agent
sends nothing, how the specification works, what it does not govern, and why
agent authorization, permission to place the order and buyer consent are
three separate controls. H1 "Shopify Agent Checkout Can Now Carry Customer
Consent"; search title "Shopify UCP Buyer Consent: Marketing Opt-Ins in AI
Checkout". Category E-commerce Strategy. 1,134 source-body words, four
internal links, six external sources. AI Commerce 2027 gains one tracker row
(2026-10-16, Trust) linking to the article; Shift 05 unchanged. `LAST_UPDATED`
and the sitemap date move together to 2026-10-17.

**Why.** TRH already separated agent authorization (Personal Agent Protocol)
from permission to place the order (Shopify WebMCP checkout). Buyer consent is
the third control: what the merchant may do with the shopper's data and
communications once checkout happens through an agent.

**Board edits applied.** Revision 1: H1 narrowed from "Now Carries" to "Can
Now Carry"; "Until now it had no standard way" replaced, because UCP had a
consent extension before Shopify's support; the legal-boundary sentence
narrowed to "does not by itself establish that a merchant may lawfully market
to the buyer in every jurisdiction"; the commercial sentence narrowed to
"cannot assume it may market to." Final: meta description changed to "can now
carry ... can reach the merchant" to separate Shopify capability from agent
adoption.

**Sourcing.** Shopify's October 16 changelog, the UCP buyer consent
specification (2026-08-25 and 2026-04-08), the v2026-08-25 release notes,
Shopify's Checkout MCP reference and Google's UCP FAQ (marketing opt-in still
planned, rechecked October 17). No AI platform has publicly said it
negotiates the extension; the article says so.

**Follow-ups.** Revisit when an AI platform announces support, when Google
ships its marketing opt-in, or when Shopify's Cart and Checkout MCP reference
pages document consent. Consider a Shift 05 evidence sentence once agent-side
adoption is public.

---

## Release 1.48 - FedEx overnight documentary companion page (2026-10-17)

**What changed.** Fifth documentary companion page,
`/videos/fedex-overnight-delivery-promise`, for "Why Fast Sorting Isn't Enough
for FedEx" (https://youtu.be/03QxRmdbn_Y): H1 and search title "How FedEx
Overnight Works: Why Fast Sorting Isn't Enough", about 860 words of context
written against the video's narration, five takeaways, nine timestamped
chapters, seven reporting sources, related research. VideoObject from verified
YouTube values (uploadDate 2026-10-16T16:00:25-07:00, duration PT6M22S) with
nine `Clip` chapters. The homepage Featured Video now points at this
documentary (`FEATURED_VIDEO_SLUG`).

**Why.** The page follows an overnight package through its deadlines (the
drop-off cutoff, the hub sort, the flight connection, the weather) and back to
the seller's inventory, arguing that the delivery promise starts at checkout.

**Sourcing.** FedEx overnight service definitions and cutoffs, the October 30,
2024 Secondary 25 release (56,000 packages an hour, six-sided scanning, 1,000
cameras, a command center three times the original), and the fiscal 2026 Form
10-K (multiple hub-and-spoke network centered on Memphis; severe winter
weather and airport disruptions among factors that could cancel or delay a
significant portion of flights). The FAA on winter operations, Microsoft on
available-to-promise and backorder dates, and Shopify on selling out-of-stock
items. Capacity is labeled as stated design capacity, not measured throughput
or reliability; "spent heavily" was replaced with the 10-K's multi-year
modernization language because no investment figure is sourced.

**Follow-ups.** No backlinks proposed. Run a Rich Results Test on the new page.

---

## Release 1.47 - Google Universal Cart reference (2026-10-16)

**What changed.** New search/reference article,
`/blog/google-universal-cart-retailers-ucp-checkout`: what Google Universal
Cart is, where it is available, how its two checkout paths work, how it
differs from UCP, and what the merchant still owns. H1 "Google Universal Cart:
How It Works and What Retailers Still Own"; search title "Google Universal
Cart: How Checkout and Cart Transfer Work". Category E-commerce Strategy.
1,259 source-body words, four internal links, nine Google primary sources.
AI Commerce 2027 gains one tracker row (2026-10-15, Website handoff) linking
to the article; no shift text changed. `LAST_UPDATED` and the sitemap date
move together to 2026-10-16.

**Why.** Search results were dominated by May I/O coverage that still lists
YouTube and Gmail, and launch coverage blurred the cart with the checkout. The
article's thesis: Universal Cart separates ownership of the shopping state
from ownership of the transaction. The cart is cross-retailer; checkout is
documented one merchant at a time.

**Board edits applied.** The consideration line softened to "A meaningful
part of late-stage consideration used to become visible only after the
shopper reached the retailer's own cart or wish list"; the cart's features
tied to documented behavior ("tracks price changes, surfaces relevant promo
codes, and can suggest which saved card to use"). Meta title "How Checkout and
Cart Transfer Work" chosen over "Cross-Retailer Checkout" because Google
documents no single payment spanning merchants.

**Sourcing.** Google's Oct 15 launch post and May 19 I/O post, the Gemini
Apps Help page on managing the cart, and the UCP developer FAQ, Cart API,
native checkout, order lifecycle, Merchant Center requirements and
integration hub pages. Confirmed: U.S. only in Search and Gemini; YouTube and
Gmail not live; cart transfer is one-way with no update, delete or sync;
merchant remains Merchant of Record; native checkout passes buyer details to
the merchant, is guest checkout by default, and has no marketing opt-in yet;
My Orders data is required for native checkout and retained by Google until
the user deletes it. No fee, commission or revenue model is disclosed.

**Follow-ups.** Update when YouTube or Gmail launch, when cart sync ships,
when Google discloses fees, when the integration hub reaches Australia and
Canada, or when the marketing opt-in arrives.

---

## Release 1.46 - Port handoffs documentary companion page (2026-10-16)

**What changed.** Fourth documentary companion page,
`/videos/why-containers-wait-at-port`, for "The Ship Arrived. Why Is Your Order
Still Waiting?" (https://youtu.be/INAvc-RRBak): H1 and search title "Why
Containers Wait at Port After the Ship Arrives", about 820 words of context
written against the video's narration, five takeaways, ten timestamped
chapters, six reporting sources and four DVIDS footage sources, related
research. VideoObject from verified YouTube values (uploadDate
2026-10-15T16:00:14-07:00, duration PT6M55S) with ten `Clip` chapters. The
homepage Featured Video now points at this documentary
(`FEATURED_VIDEO_SLUG`).

**Why.** The page follows a container from crane to gate and makes the
distinctions the video depends on: arrived versus available, a faster crane
versus a faster exit, and safety inspection versus customs screening versus
physical location. It ties port reliability back to replenishment and the
delivery date a customer sees.

**Sourcing.** Port of Los Angeles figures (dwell-time buckets, booked versus
fulfilled truck appointments, The Signal's three-week view, on-dock rail) and
CBP's 2005 C-TPAT exam-rate statement are attributed and dated. Not repeated:
Yusen's "world's first" framing, and the rail page's two inconsistent rail
shares (about 35% of intermodal containers versus about 26% of all cargo).
Footage is public-domain U.S. government video via DVIDS; the page states it
illustrates port operations, not one traced shipment or current congestion.

**Follow-ups.** No backlinks proposed. Run a Rich Results Test on the new page.

---

## Release 1.45 - Bosch documentary companion page (2026-10-15)

**What changed.** Third documentary companion page,
`/videos/bosch-semiconductors-dresden`, for "Bosch Makes Chips? Inside Its $1.2
Billion Bet" (https://youtu.be/9EhVNMydmM4): H1 and search title "Bosch Makes
Chips: Inside Its $1.2 Billion Dresden Wafer Fab", 748 words of context, five
takeaways, eleven timestamped chapters, five Bosch primary sources, related
research. VideoObject from verified YouTube values (uploadDate
2026-10-14T16:00:29-07:00, duration PT7M23S) with eleven `Clip` chapters. The
homepage Featured Video now points at this documentary
(`FEATURED_VIDEO_SLUG`), per the rule that the newest long-form video replaces
the previous one.

**Why.** The page frames Dresden as scale added to a capability Bosch has had
since 1958, then asks how an operator would know the investment paid off. Bosch
does not publish the fab's returns, and group figures cannot isolate one plant;
the page names supply security, cost against buying chips and ramp speed as the
tests, and notes only the early production start has a public answer.

**Sourcing.** Every figure checked against Bosch's own releases and annual
results. Bosch reports in euros: "roughly one billion euros, or about $1.2
billion at the exchange rate of the time", with the sources note marking the
dollar figure as an approximate June 2021 equivalent. "Biggest single
investment" is attributed to Bosch and dated ("then", "at the time"). Factory
capabilities (AI wafer signatures, digital twin, remote maintenance) are
attributed to Bosch, with a note that yield, uptime and cost figures are not
published.

**Follow-ups.** No backlinks: TRH has no Bosch or manufacturing articles yet.
Run a Rich Results Test on the new page.

---

## Release 1.44 - Google Local Coupons reference (2026-10-15)

**What changed.** New search/reference article,
`/blog/google-local-coupons-pay-per-redemption-ads`: how Google Local Coupons
works, who can use it, what the retailer pays for and what the point-of-sale
integration measures. H1 "Google Local Coupons: How Pay-on-Redemption Search
Ads Work"; search title "Google Local Coupons: How Retailers Pay Per
Redemption". Category Digital Marketing. 1,206 source-body words, three
internal links, five external sources.

**Why.** Search results for the product were trade news plus a partner help
page, and coverage was already blurring the billing event. The article keeps
the distinction prominent: pay per redemption, not pay per click and not
necessarily pay per sale.

**Board edits applied.** Availability ("closed beta, select U.S. accounts, as of
October 2026") stated at word 48; the two-cost economics kept (the retailer
funds the discount and pays Google per redemption); the measurement line
softened to "a directly observed commercial event tied to the ad, which is much
cleaner than modeled store-visit measurement, but it still does not prove the
ad caused the purchase."

**Sourcing and pre-publish check.** The detailed source is Lightspeed's setup
guide (read in a browser; direct fetch is blocked). Google's own public
statements are one phrase in its May 20 Direct Offers post and an October 8
LinkedIn post reported by MediaPost. Re-checked on publication day: Lightspeed's
page unchanged, no Google first-party help page, and Lightspeed's "monthly
spending cap" versus "campaign total budget" wording still unreconciled, so the
article reports both. Not repeated from trade coverage: "pay per sale"
framing, a UCP link that refers to Direct Offers, and per-click Direct Offers
billing.

**Follow-ups.** Re-check when Google publishes a Local Coupons help page, adds
markets, documents return and void treatment, or names more POS partners.
AI Commerce 2027: no change.

---

## Release 1.43 - Domino's documentary companion page and Videos in the nav (2026-10-14)

**What changed.** Second documentary companion page,
`/videos/dominos-turnaround`, for "Domino's Fixed Its Pizza. Why Wasn't That
Enough?" (https://youtu.be/tiScF1e9708): H1 "Domino's Turnaround: Why Fixing the
Pizza Wasn't Enough", 760 words of context, five takeaways, twelve timestamped
chapters, six Domino's primary sources, related research. VideoObject from
verified YouTube values (uploadDate 2026-10-13T17:10:01-07:00, duration
PT9M12S) with twelve `Clip` chapters. The homepage Featured Video now points at
this documentary (`FEATURED_VIDEO_SLUG`), per the Board rule that the next
long-form video replaces the previous one. Videos added to the main navigation
between Blog and About (header, footer and `SiteNavigationElement`). With seven
items the desktop nav wrapped at tablet width (768px), so the header now uses
the hamburger menu below 1024px (`lg`) instead of `md`; nav labels no longer wrap.

**Editorial position.** The 2009 recipe change worked by Domino's own account
(9.9% U.S. same store sales growth in 2010), but online ordering (2007) and the
Tracker (2008) came first, and the operation behind the app (franchise stores,
fortressing, carryout, staffing) decided repeat orders. The 2022 labor shortage
is the example of a problem the app could not solve.

**Sources.** All six from the YouTube description checked against the claims
they support. Domino's investor pages block scripted access and were read in a
browser; the 2022 annual report facts were checked against the FY2022 Form 10-K
on SEC EDGAR.

**Template changes.** Each companion page now shows a "More documentaries"
strip linking the other videos. The Sources intro is now a per-video field
(`sourcesNote`); it had been hard-coded to Walmart wording. The Domino's
thumbnail's CC BY 2.0 photograph is credited on the page.

---

## Release 1.42 - Video companion pages: Walmart and Jet.com (2026-10-14)

**What changed.** New permanent home for long-form YouTube documentaries.
`/videos/walmart-jet-acquisition` is the companion page for "Walmart Bought Jet
for $3.3B. Why Shut It Down?" (https://youtu.be/t4Hf1WLag48): H1 "Why Walmart
Bought Jet.com for $3.3 Billion, Then Shut It Down", a large lazy-loaded player
near the top, 796 words of written context, key takeaways, twelve chapters
linked to YouTube timestamps, seven sources, related research, and Watch on
YouTube CTAs. A lightweight `/videos` index lists all videos. The homepage gets
a Featured Video card directly under the hero, linking to the companion page
(no autoplay). Not added to the main navigation yet (Board: not yet).

**Why.** Give the video a searchable, citable home on theroberthu.com that
answers the business question (did Walmart's Jet acquisition fail?) and sends
qualified visitors to YouTube, while strengthening the Walmart and ecommerce
transformation cluster.

**Editorial position.** Shutting down the Jet brand is not proof the
acquisition failed. Walmart called it "critical to accelerating our omni
strategy." The page credits Jet as an accelerator, not as the source of later
capabilities such as parcel stations, lower last-mile cost and ecommerce
profitability, which arrived years later.

**Sources.** All six Walmart sources from the YouTube description were
downloaded and checked against the claims they support (2016 acquisition, Q1
FY2021 release, November 2023 parcel stations, Q4 FY2024 and Q1 FY2026 call
transcripts, FY2026 Form 10-K), plus Kroger's Nate Faust release, labelled as
cited on the page only.

**Structured data.** VideoObject from verified YouTube values (uploadDate
2026-10-12T15:20:17-07:00, duration PT11M40S, real thumbnail, embedUrl, author,
publisher) with twelve `Clip` chapters; `contentUrl` omitted because it should
point to a media file. BreadcrumbList on the companion page, ItemList on
`/videos`.

**Analytics.** GA4 through the existing gtag only: `video_companion_view`,
`watch_on_youtube_click` (location: below_player, chapter, end_of_page) and
`featured_video_click`. No new vendor, no personal data. Register `video_slug`
and `location` as custom dimensions in GA to report on them.

**Implementation.** Data-driven: `src/lib/videos.ts` holds each video; a new
video is a data entry rendered by `src/app/videos/[slug]/page.tsx`. The
homepage card reads `FEATURED_VIDEO_SLUG` (swap or set to null; no hard-coded
expiry, per Board). The previously unused `LazyYouTube` now accepts a local
poster, uses youtube-nocookie.com and a real button element. Thumbnail stored
locally at `public/images/videos/`. Sitemap adds `/videos` and each video page.

**Backlinks (Supabase, after deploy).** Two contextual links to the companion
page: `kroger-ecommerce-operating-model` ("After Walmart acquired Jet.com") and
`walmart-grocery-ecommerce-growth` ("using existing stores as fulfillment
hubs"). The optional third link was skipped.

---

## Release 1.41 - Shift 07: catalog work delegated, money movement blocked (2026-10-13)

**What changed.** One evidence sentence added to AI Commerce 2027 Shift 07 ("AI
moves from buyer to operator") and one evidence tracker row, approved by the
Editorial Board with Release 1.40. Nothing else on the page changed.

**The sentence.** Shopify documented official connectors for seven
general-purpose assistants that can edit products, collections, inventory and
percentage discounts with write access, while blocking refunds, order
cancellation and capture, returns, gift cards and changes to payments, taxes and
domains for every connected tool.

**Why.** It is documented capability with documented permission boundaries
across multiple assistants, and it is the cleanest example yet of the report's
central line: catalog work is being delegated, money movement is not.

**Dates.** `LAST_UPDATED` and `STATIC_LAST_MODIFIED.aiCommerce2027` moved
together from 2026-10-12 to 2026-10-13. Tracker rows 26 to 27, dated October
2026 and linked to the connectors article. The approved draft
(`Content/pages/ai-commerce-2027-refresh.md`) carries the same sentence so the
copy source and the live module stay in sync.

---

## Release 1.40 - Shopify AI connectors reference (2026-10-13)

**What changed.** New search/reference article,
`/blog/shopify-ai-connectors-chatgpt-claude-gemini`: what a Shopify merchant can
actually do from each of the seven general-purpose assistants Shopify officially
documents (ChatGPT, Claude, Gemini, Grok, Meta Muse, Perplexity and Microsoft
Copilot), where they differ, what Shopify blocks for every connected tool, and
how access is authorized, raised, switched and revoked. H1 "Shopify AI
Connectors: How to Manage Your Store From ChatGPT, Claude, Gemini, and More";
search title "Shopify AI Connectors Compared: ChatGPT, Claude, Gemini and More".
Category Digital Transformation. 1,494 source-body words plus a seven-row
comparison table.

**Why.** A merchant searching "Shopify ChatGPT" or "manage Shopify with Claude"
had to assemble several Shopify Help Center pages, and third-party results
already carry errors (no official Muse connector; Copilot only through Copilot
Studio). No TRH page covered the merchant-facing connectors.

**Board edits applied.** The second paragraph states "These are merchant-side
connectors, not Shopify Agentic Storefronts." The table keeps "Not documented"
exactly where a connector page does not list a capability. The table was not
trimmed for length.

**Sourcing.** Every capability claim comes from Shopify's Help Center: the hub,
the authorization page, the shared considerations page and the seven connector
pages (ten external links). Kept out of the body: ChatGPT Work and Codex (not on
the connector page), the free-trial length for AI-created stores (secondary
only), and Gemini's domain-purchase handoff.

**Site change.** Article bodies had no table styling. Added scoped
`.prose-custom-dark .table-wrapper` rules in `globals.css` so wide reference
tables scroll horizontally on phones instead of overflowing. Unwrapped tables in
older posts are unaffected.

---

## Release 1.39 - AI Commerce 2027 rebuilt around authority (2026-10-12)

**What changed.** Full refresh of `/ai-commerce-2027`, approved by the
Editorial Board (production GO, 2026-10-12). H1 is now "AI Commerce 2027" with
the dek "How the commerce operating model changes when software can act." The
eight shifts become nine, organized by where authority moves: discovery, the
website handoff, the software interface, measurement, trust, advertising,
merchant operations, the operating layer and governance. New sections: a
five-line short version, a definition of AI commerce with authority as the
boundary, "What changed in this update", an authority column on the stack,
verdicted counterarguments, and a three-column 2027 signal tracker. Each shift
now renders What changed / Evidence / Why it matters / Operator consequence /
What is still unproven / Updated view (where a prior view changed), followed by
compact Evidence notes (TRH) and Primary sources lines. The evidence tracker
grows from 12 to 26 rows and the evidence numbers band is refreshed. The
comparison table, disconfirming cards and watchlist are retired, replaced by
the definitions, counterarguments and signal tracker.

**Why.** The September edition left out the strongest counter-evidence of
2026: WIRED reported that Walmart's native checkout test inside ChatGPT
converted at roughly a third of the rate of click-through to Walmart.com, and
OpenAI shifted its emphasis toward product discovery and merchant-controlled
checkout. Meanwhile the newest evidence moved authority to the merchant side
(Amazon Seller Assistant workflows, Full-Funnel Campaigns) faster than to the
shopper side. Central revision: software is gaining authority inside the
merchant's business faster than it is gaining unrestricted authority over the
shopper's wallet.

**Board edits applied before production.** Shift 02 does not claim OpenAI
ended native checkout (OpenAI's developer documentation recommends external
checkout and keeps the ChatGPT payment sheet in private beta for select
partners); it is reframed as "The merchant website stops being the mandatory
handoff, not the inevitable loser." Every shift carries direct primary-source
links (42 in total) rendered visually subordinate to the prose. Walmart's
conversion figure is attributed to WIRED's reporting, not to a Walmart
disclosure.

**Implementation.** Copy was generated from the approved draft
(`Content/pages/ai-commerce-2027-refresh.md`) into `src/lib/ai-commerce-2027.ts`
so the live text matches it exactly. The `Shift` type and the renderer changed
(Board-approved layout change). The protected sentence "Infrastructure exists.
Adoption evidence does not." stays in the opening, now in the hero and in
"What changed in this update". OG card regenerated with the new dek. The
homepage flagship card uses the new title and description.

**Dates.** `LAST_UPDATED` and `STATIC_LAST_MODIFIED.aiCommerce2027` moved
together from 2026-10-11 to 2026-10-12. `datePublished` stays 2026-09-21.

**Follow-ups.** Update Shift 05 and the tracker when Personal Agent Protocol
v0.1 publishes. Shift 08 is labelled least proven: revisit when Amazon's
announced multichannel editing and profitability features ship. Correction to
the record: Release 1.12 and the September copy described native AI checkout
as the direction of travel without the Walmart and OpenAI evidence.

---

## Release 1.38 - Shift 04: transaction-funnel measurement for UCP checkout (2026-10-11)

**What changed.** One evidence line added to AI Commerce 2027 Shift 04 ("GEO
starts to become an operating discipline rather than a theory"), approved by
the Editorial Board with Release 1.37. No new shift, no new tracker row.

**The line.** Google added transaction-funnel reporting for UCP checkout,
including Buy clicks, purchases, purchase rate, AOV and cancellations, through
a UCP Analytics dashboard in Merchant Center and an alpha API covering AI Mode
and Gemini. It starts at the Buy click and does not measure AI impressions or
which products were considered.

**Framed narrowly, as instructed.** The line does not say "first" and does not
claim to meet the shift's signal for a measurement product that reports a
denominator for AI visibility. Purchase Rate has a transaction denominator
(Clicks to Buy), not an AI-impression denominator.

**Dates.** `LAST_UPDATED` and `STATIC_LAST_MODIFIED.aiCommerce2027` moved from
2026-10-09 to 2026-10-11. Shift count stays at 8; tracker rows stay at 12.

---

## Release 1.37 - Google Merchant Center UCP Analytics (2026-10-11)

**What changed.** New reference article at
`/blog/google-ucp-analytics-merchant-center-ai-checkout` on the UCP Analytics
dashboard in Google Merchant Center and its alpha Merchant API reporting.
Ships with a hand-authored OG card and a generated insert script built from the
approved draft.

**What it covers.** The seven dashboard metrics (Clicks to Buy, Purchases,
Purchase Rate, AOV, Cancellations, Account Linking, Top Selling UCP Products);
access for UCP-enabled merchants with the Performance role, with the open
question of platform-managed integrations such as Shopify; the alpha API's
limits (AI Mode and Gemini not separable, date and country segments only,
product view reports Buy clicks not purchases, leaf accounts only); and cart
transfers counted but not followed to completion.

**Why it matters.** It progresses the September measurement article by
splitting the problem in two. Google now measures the transaction half of
agentic commerce, starting at the Buy click. The consideration half, which
products the AI compared and rejected, remains invisible. Search Console's
generative AI report and UCP Analytics are two partial Google views of the same
journey with nothing documented connecting them.

**Editorial Board edits applied.** H1 makes Merchant Center explicit. The first
150 words state that the funnel starts at Clicks to Buy, not at impression or
recommendation. The OG pull quote was also reworded before commit so it does
not imply the AI made the purchase decision.

**Standards applied.** 1,087 source body words, four internal links, three
external primary links, one closing question, zero em dashes. Google's sample
API figures are not cited.

---

## Release 1.36 - Shift 06: retail media absorbs the retailer assistant (2026-10-09)

**What changed.** One evidence line added to AI Commerce 2027 Shift 06
("Advertising becomes conversational, and moves closer to the transaction"),
approved by the Editorial Board alongside Release 1.35. No new shift, no new
tracker row.

**The line.** Retailer-owned AI shopping assistants began absorbing existing
retail media infrastructure rather than requiring a separate ad-buying system:
Criteo defines a retailer's AI assistant as a Sponsored Products page type,
existing campaigns become eligible by default with standard CPC, keyword
targeting, bid multipliers and reporting where a retailer enables it, and
Albertsons has run it since June.

**Why now rather than after a second retailer.** The shift's 2026 evidence
covered platform-built ad formats (OpenAI, ChatGPT Ads, Google UCP in ads) but
not the retailer side. Criteo's documented page type, default eligibility and
a live deployment since June are enough to record the development.

**Dates.** `LAST_UPDATED` and `STATIC_LAST_MODIFIED.aiCommerce2027` moved from
2026-10-03 to 2026-10-09. Shift count stays at 8; tracker rows stay at 12.

---

## Release 1.35 - AI shopping assistants as a retail media page type (2026-10-09)

**What changed.** New article at
`/blog/ai-shopping-assistant-retail-media-sponsored-products` on Criteo
Sponsored Products inside retailer-owned AI shopping assistants. Ships with a
hand-authored OG card and a generated insert script built from the approved
draft. Published on the authority path.

**Why it matters.** Earlier TRH coverage established that ads are entering AI
shopping surfaces. This piece explains the machinery underneath. Criteo lists
a retailer's AI assistant as a Sponsored Products page type; the retailer's
system or LLM partner extracts keywords and filters from the conversation and
sends a standard ad request (the developer docs use the search-results event
type), and the existing auction, CPC bids, bid multipliers and reporting do the
rest. "The keyword did not disappear in conversational commerce. It moved
behind the conversation." Live at Albertsons since June 23, 2026.

**Unsettled, and said so.** Whoever extracts the keywords now shapes which
brands compete, most of all on open-ended prompts. Criteo does not prescribe a
visual treatment for sponsored recommendations. No performance data has been
published for these placements.

**Excluded.** A reported THG Commerce implementation and its 5x CTR / 2x
conversion figures could not be located or verified, so they are not in the
article. THG Ingenuity's Criteo partnership (March 2025) and its separate
Gemini assistant (June 2026) are documented but not linked publicly.

**Editorial Board edits applied.** Default eligibility is stated as
conditional on the retailer enabling the page type. The disclosure paragraph
says Criteo does not prescribe a treatment and retailers control integration
and disclosure, without implying legal requirements are absent.

**Standards applied.** About 1,120 source body words, four internal links,
four external primary links, one closing question, zero em dashes.

---

## Release 1.34 - The RealReal Ask TRR and one-of-one search (2026-10-08)

**What changed.** New article at `/blog/the-realreal-ask-trr-ai-shopping-agent`
on The RealReal's October 8, 2026 expansion of Ask TRR, its AI shopping agent
built with Google Cloud's Gemini Enterprise, to all 45 million members. Ships
with a hand-authored OG card and a generated insert script built from the
approved draft.

**Why it matters.** It adds a model the corpus did not have: the value of
conversational search rises when inventory changes constantly and shoppers
know their intent better than the terminology. The RealReal is high on both;
specification-driven catalogs such as auto parts, B2B and the same-day Newegg
announcement are not, and exact search still matters there.

**The economics, from the Q2 call.** An analyst noted The RealReal already has
high sell-through. Management's answer was that faster matching could mean
less discounting, and the CFO described AI pricing that manages price from the
moment an item launches. The article presents this as a coherent hypothesis
with no reported result. It also covers the dependency underneath the agent:
AI-generated occasion, collection and trend attributes on every listing.

**Restraint recorded.** No conversion, engagement or sales result from the
pilot has been published, and the article says so. 45 million is the member
count, not Ask TRR usage. Product-page recommendations are planned, not live.

**Editorial Board edits applied.** The one-of-one section no longer says
keyword search breaks; the heading and two sentences were softened. The
1M/1.5M inventory discrepancy stays out of the narrative.

**Standards applied.** 1,056 source body words, three internal links, three
external primary links, one closing question, zero em dashes.

---

## Release 1.33 - Personal Agent Protocol reference (2026-10-07)

**What changed.** New article at `/blog/personal-agent-protocol-ai-commerce` on
Personal Agent Protocol, announced by Sierra and Meta on October 6, 2026.
Ships with a hand-authored OG card and a generated insert script built from the
approved draft. Published on the authority/thesis path with search-reference
value.

**Why it matters.** It takes the corpus one step further on permissions.
Permission Stack (Sep 21) covered category-level crawler and agent rules. Know
Your Agent (Sep 10) covered agent verification across payment networks. AI
Commerce 2027 Shift 07 records that consumer and merchant authorization "are
being built by different parties on different timelines." PAP is the first
proposal to put both grants in one session: the customer decides whether the
agent gets read-only or write access, and the business sets what it will
accept.

**Status discipline.** PAP is announced, not published. The article says so up
front, because some search results already describe it as live. Payments and
finer-grained permissions are stated as future extensions. PAP is distinguished
from UCP, MCP and Know Your Agent, and Sierra's partner list (Genesys, Instinct,
Rocket, Shopify, Stripe, Walmart, with Meta) is treated as authoritative.

**Editorial Board edits applied.** The Muse/Amazon passage now states a shared
problem rather than product causality, and its heading was softened to match.
The NiCE/Decagon partner-list discrepancy stays out of the body.

**Standards applied.** 1,035 source body words, three internal links, two
external primary links, one closing question, zero em dashes.

**Follow-up.** When v0.1 publishes: update the status paragraph in this article
and add one evidence line to AI Commerce 2027 Shift 07. Not before.

---

## Release 1.32 - Amazon Review Requests ads explainer (2026-10-07)

**What changed.** New reference article at `/blog/amazon-review-requests-ads`
on Amazon Ads' Review Requests, announced September 29, 2026. Ships with a
hand-authored OG card and a generated insert script built from the approved
draft. First article published under the recalibrated standard: a durable,
accurate merchant resource can pass without a groundbreaking original thesis.

**What it covers.** What the ad is (an invitation shown to recent purchasers on
Amazon's highest-traffic pages, including the homepage, with a one-tap rating
and optional written review); eligibility (advertisers in good standing,
products under 1,000 ratings and reviews, automatic pause at 1,000, US only);
how it differs from the free Request a Review button and from Amazon Vine; and
a billing-agnostic method for cost per incremental review.

**Disclosed rather than resolved.** Amazon's two primary pages conflict on
timing (open beta "late October 2026" on the launch page, "November 2026" on the
unBoxed news post), and neither documents the billing unit, minimum bids or
reporting. One agency claims pay-per-submitted-review without a source; the
article names that claim as unsourced. Both pages were rechecked immediately
before publication and were unchanged. The 3x result is stated as Amazon's
before-and-after closed beta (June 3 to 21, 2026), not causal evidence.

**Phrasing rule.** The article never says or implies paying for reviews. The
product is paid review invitations shown to recent purchasers. The H1 says
"Paid Review Invitations" for that reason.

**Standards applied.** 1,197 source body words, four internal links, four
external primary-source links, one closing question, zero em dashes.

**Follow-up.** Update the billing and timing paragraphs once Amazon documents
them.

---

## Release 1.31 - About page search snippet and one job title (2026-10-06)

**What changed.** The About page's search title was "About | Robert Hu," which
spent half the visible title on the word "About" and gave a branded search no
way to tell which Robert Hu this is. It is now "Robert Hu: AI Commerce
Researcher and Operator," set as an absolute title so the site-wide
"%s | Robert Hu" template does not repeat the name. The meta description now
states the 20+ years in ecommerce, marketplaces and Amazon (already stated in
the page body as "more than two decades") and that the research is published
here. Open Graph title and the Person schema description match.

**One label everywhere.** The page copy said "operator and builder" while the
Person schema on every page said "Commerce and Technology Researcher." The
`jobTitle` is now "AI Commerce Researcher" in all eight places (root layout,
constants, About, GEO, two GEO sub-pages, AEO, AI Commerce 2027), so search
engines and AI assistants read one consistent self-description.

**Why.** Google was showing exactly the title and description we set, so the
snippet was fully in our control. The branded-search article (Release 1.30)
argued that brands should make the sources describing them consistent; the
About page is the most authoritative source about Robert.

**Follow-up.** Google picks this up on the next crawl. Confirm the snippet in a
week.

---

## Release 1.30 - Branded search gets a description (2026-10-04)

**What changed.** New article at
`/blog/google-ai-overviews-branded-search-brand-representation`, on the late
September 2026 expansion of Google AI Overviews into branded searches. Ships
with a hand-authored OG card and a generated insert script built from the
approved draft.

**Why it matters.** Branded search was historically the most navigational and
defensible moment in the search journey. In Ahrefs' exact-name panel of 100
Interbrand Best Global Brands, AI Overviews went from 5 of 98 usable results on
July 1 to 63 of 100 on September 30. Google now frequently writes a description
of a brand, mostly from third-party sources, on a query where the shopper
already named the brand.

**Three corrections to the assignment brief, all made in the body.**
- Branded search did not overtake anything. Ahrefs' monthly averages had
  branded AIO prevalence below non-branded in every month (61.3% vs 73.5% in
  July, 73.3% vs 78.3% in September). The gap closed from 12.2 points to 5.
  Convergence, not takeover. The 82.91% headline is a single-day peak.
- Placement is contested. Ahrefs found 48 of 63 exact-name AIOs in position
  one; Barry Schwartz reported most examples he checked mid-page, below the
  brand's own result. Ahrefs does not define how it ranks an AIO against
  Knowledge Panels, sitelinks or ads. The article treats placement as the
  unresolved crux: above is interception, below is annotation. The H1 avoids
  "introduce" for this reason.
- The "representation layer" framing is substantially the vendors' own. The
  article's original contributions are the convergence correction, the
  volatility in DemandSphere's own published daily series (swings of 25 to 30
  points in a day through September, with no Google announcement), the
  placement conflict, the Search Console blind spot from TRH's August
  reporting, and the brand-side mirror of the Project Swap shopper
  representation problem.

**Editorial Board edits applied.** Clever-line density cut to two
crystallizing lines. The commercial consequence now leads the close: a brand
pays to create demand elsewhere, then the first account of the brand the
shopper reads on a name search may be Google's. Monitoring follows as three
concrete jobs.

**Restraint recorded.** No traffic claim: no branded-query CTR evidence
exists. No competitor-hijacking claim: only 2 of 58 answers discussed a
competitor and 1 of 57 source lists included a competitor-owned site.
DemandSphere used only as directional corroboration because its sample size is
undisclosed, and not averaged with Ahrefs. No Google intent attributed: Google
has not announced the change.

**Standards applied.** Ahrefs and DemandSphere primary sources read in full,
plus Search Engine Roundtable and Search Engine Land for the original
observation and the announcement audit. Source-table denominator derived
arithmetically as 57 where Ahrefs did not state it. 1,097 source body words,
three internal links, one closing question, zero em dashes.

**AI Commerce 2027.** Explicitly NO CHANGE. An unannounced, one-month-old,
visibly volatile SERP change is what the flagship should not ingest yet.
Revisit if branded prevalence holds through Q4 2026.

**Key commit.** See the commit adding
`Content/blog/google-ai-overviews-branded-search-brand-representation.md`.

---

## Release 1.29 - Naming the second half (2026-10-03)

**What changed.** Two bounded evidence updates, both approved by the Editorial
Board alongside the Project Swap article and shipped after it cleared
production.

**1. AEO pillar (`/aeo`).** Added one bordered passage to the definition
section distinguishing **product readiness** from **shopper representation**,
with a link to the Project Swap article. The formal definition is unchanged and
all six evaluation factors are unchanged, deliberately: the Board's instruction
was to keep the formal framework supply-side and then name the boundary
explicitly rather than redefine AEO from one experiment. `dateModified` moved
from 2026-07-05 to 2026-10-03 and the footer line now reads October 2026.

**2. AI Commerce 2027, Shift 07 ("Trust becomes infrastructure, on two sides at
once").** Two edits, no new shift and no new tracker row:

- One `changed2026` line recording Project Swap's finding that representation
  rather than negotiation was the binding constraint, the 85% shortfall
  attribution, the 0.01 human-scored movement from the largest available model
  upgrade, and the 34% versus 23% delegation split.
- The `enables2027` sequence line, which read "identify the agent, verify its
  authority, establish merchant permission, constrain what it may do, execute,
  and preserve evidence afterward," now continues: every step in that sequence
  concerns authority rather than understanding, none of it establishes that the
  agent has accurately modeled the person it acts for, and that is where the
  error actually concentrated.

**Why this was worth doing.** A concept sweep of `src/lib/ai-commerce-2027.ts`
returned zero hits for preference, personalization, memory, representation,
shopper model, user intent and understand. The flagship's trust sequence was
complete on authority and silent on understanding. That is a gap in the
argument rather than a missing topic, which is why it earned an evidence update
instead of a new shift.

**What did not change.** Shift count stays at 8. Tracker rows stay at 12. No
other shift touched. The AEO definition and evaluation factors stay as written.

**Dates.** `LAST_UPDATED` and `STATIC_LAST_MODIFIED.aiCommerce2027` both moved
from 2026-10-02 to 2026-10-03.

**Follow-up.** None open on either page.

---

## Release 1.28 - The second representation problem (2026-10-03)

**What changed.** New article at
`/blog/anthropic-project-swap-agentic-commerce-shopper-preferences`, on
Anthropic's September 24, 2026 Project Swap research. Ships with a
hand-authored OG card and a generated insert script built from the approved
draft.

**Why it matters.** The corpus has covered one half of agentic commerce's
representation problem thoroughly: whether the agent can understand the
product. Structured attributes, catalog accuracy, machine-readable storefronts,
checkout protocols, the whole AEO discipline. A sweep of all 107 live posts
returned zero hits for "representation" and zero for "shopper model" as a
load-bearing idea. Project Swap supplies evidence for the other half, whether
the agent can understand the person.

**The centerpiece is Anthropic's footnote 15, not the 85% headline.** The
largest model-quality gain in the study, a 0.12 gap between Haiku and Opus
floors scored on Claude's inferred rankings, collapses to 0.01 when scored
against people's actual preferences. A full model upgrade moved the human
outcome by one hundredth. The 85/15 decomposition plays a supporting role
because its arithmetic is explicit: of the 0.34 shortfall between the best
feasible assignment (0.89) and the decentralized market (0.55), 0.29 is
representation error and 0.05 is market design.

**The editorial hinge.** The April Rufus memory article treated the shopper
profile as the trustworthy side of the system and the listing as the variable.
Project Swap inverts the burden of proof on that assumption, since Claude's
ranking predicted the participant's own only weakly, at a slope of 0.3.

**The governance extension.** The September Know Your Agent article framed four
questions a merchant's checkout must answer. This adds a fifth, upstream of all
of them: whether the agent understood this particular person well enough to
deserve authority. Anthropic proposes a representation test, and participants
who said its summary of them missed nothing would delegate 34% of their book
budget against 23% for those who said it missed something, a nine-point gap
after controlling for what each would give a well-read friend (p < 0.05,
n = 112).

**Restraint recorded.** Anthropic's headline 30% delegation average is
deliberately omitted from the body, consistent with the September
adoption-definition standard that a delegation percentage is meaningless
without its level. Only the within-study comparison is used. The 61% is stated
as pairwise agreement with its three baselines (53% popularity, 55%
collaborative filtering, 61% algorithm and 57% friends in the reference study),
never as "understands people 61%."

**Standards applied.** Both Anthropic primary sources read in full, including
the 26-page PDF and all 27 footnotes. Anthropic's position as the developer of
the system being studied is disclosed in the body as not independent. 1,101
source body words, three internal links, one closing question, zero em dashes.

**Key commit.** See the commit adding
`Content/blog/anthropic-project-swap-agentic-commerce-shopper-preferences.md`.

**Follow-ups, both Board-approved and shipped in Release 1.29.** A bounded AEO
evidence update distinguishing product readiness from shopper representation,
and a precise Shift 07 evidence update in AI Commerce 2027.

---

## Release 1.27 - The strategy line moves upstream (2026-10-03)

**What changed.** New article at
`/blog/amazon-full-funnel-campaigns-ai-channel-mix`, on Amazon Ads' September
29, 2026 Full-Funnel Campaigns release. Ships with a hand-authored OG card and
a generated insert script built from the approved draft.

**Why it matters, and the belief it revises.** The March 2026 Marty article
advised: "Keep the strategic layer (budget allocation, target ROAS, channel
mix, product prioritization) with a human. Let the AI handle execution within
those constraints." Amazon's own documentation now executes two of those four.
The product FAQ states Full-Funnel Campaigns "uses a daily budget, which
Amazon's AI then allocates across sponsored ads, display, video, and streaming
TV in real time," and the unBoxed recap states "AI handles the channel mix,
creative, audiences, and optimization." Target ROAS stays human and optional.
Product prioritization is split and partly undisclosed.

**The strongest evidence is the delegation-level contrast.** DVA+ publishes a
capability table in which the default mode sets budget once and lets AI
optimize delivery, while advanced settings return "format-level allocation,
budget flighting, budget and frequency caps" and "granular per-format
configuration." Format-level allocation exists at Amazon as a control in one
campaign type and is absent from the other, so delegation level has become a
product choice.

**Protected lines.** The concession that channel mix has not stopped being
strategy but has stopped requiring a human to make every allocation decision;
"The strategic layer did not disappear. It moved upstream."; the four-item
audit split; the surviving half of the March principle; the Long-Term ROAS
proof boundary; and the three-step March to August to October progression. All
recorded in the source draft's PROTECTED SECTIONS block.

**Primary-source corrections made during the audit.** Four premises in the
assignment brief did not survive: the unBoxed recap is "The 11 biggest
takeaways," not 9; "open beta" is DVA+ status language, not Full-Funnel's,
which Amazon describes as "now available to all advertisers in the United
States" against a narrower FAQ eligibility list; the footnote reads "Amazon
internal. June - August 2026. Based on early beta results" with the denominator
"independently configured campaigns," not a blended beta average; and the
advertiser sets a daily budget with a stated minimum, not a total budget.

**Novelty constrained deliberately.** Performance Max and Advantage+ are named
in the body as prior art, and Full-Funnel Campaigns was announced at unBoxed
2025 with continuous adjustment of "budgets, audiences, and tactics" already in
the description. The event is maturation plus published evidence, not
invention.

**Corpus discipline.** The August Trade Desk article already argued that the
buyer's work moves up a level, so that conclusion is cited rather than
re-claimed. The Editorial Board confirmed that internal link as editorially
necessary.

**Standards applied.** Six Amazon primary sources read directly, including the
2024 Long-Term Sales definition page that establishes the metric contains
modeled 12-month future value. 1,079 source body words, three internal links,
one closing question, zero em dashes.

**Key commit.** See the commit adding
`Content/blog/amazon-full-funnel-campaigns-ai-channel-mix.md`.

**Follow-up.** None. AI Commerce 2027 explicitly NO CHANGE: Shift 08 carries
merchant-agent control-surface material, but its spine is reliability evidence
and Amazon published no error or intervention rate here.

---

## Release 1.26 - Flagship correction: WebMCP is shipped, not proposed (2026-10-02)

**What changed.** AI Commerce 2027, Shift 05 ("Commerce stacks grow a second
interface for software"). Three edits, approved by the Editorial Board after the
WebMCP checkout article cleared production.

1. The WebMCP line in `changed2026` described the standard as a W3C draft
   implemented behind a flag in Chrome Canary. It now records what actually
   shipped: Shopify made WebMCP tools live on August 5, 2026 across every Liquid
   storefront and the Hydrogen developer preview with nothing to install or
   configure, and extended the pattern into checkout on September 28. The W3C
   drafting date and early browser support are retained, because both remain
   true.
2. The signal is marked partly satisfied. A major commerce platform shipping an
   agent interface as a default capability rather than an app is no longer a
   prediction.
3. The remaining watch item is now the first published incident where the human
   and agent interfaces disagreed about price or availability, and the first
   published WebMCP order volume or error rate from a major platform.

**Why.** The page was published on September 21, six weeks after Shopify shipped
WebMCP. Describing a live platform capability as a proposal is the kind of error
that makes a living research page worse than no page. The self-correction is
also stated in the article body as my error, not an industry oversight.

**What did not change.** No new tracker row. The `unproven` paragraph stands:
broad adoption is still open, browser support is still early, and nobody has
published what maintaining a second interface costs to run. MCP and UCP lines
untouched, so the protocol distinction between page surface, tool surface and
transaction surface is preserved.

**Dates.** `LAST_UPDATED` and `STATIC_LAST_MODIFIED.aiCommerce2027` both moved
from 2026-09-24 to 2026-10-02.

**Follow-up.** None open on this shift. The watch item is now falsifiable by a
published number rather than by a shipment.

---

## Release 1.25 - A second front door (2026-10-02)

**What changed.** New article at
`/blog/shopify-webmcp-checkout-ai-agent-storefront`, on Shopify's September 28,
2026 extension of WebMCP support to checkout. Ships with a hand-authored OG card
and a generated insert script built from the approved draft.

**Why it matters.** Shopify shipped WebMCP cart and product tools live on August
5, 2026 and extended the same pattern to checkout seven weeks later. The
architectural point is that this is not a parallel storefront for machines.
Shopify's August changelog states that agent actions happen on the shopper's
live session, and the cart tools call the same storefront actions apps use, so a
theme that opens a cart drawer on update opens it for the agent's call too. One
commerce session, two interfaces into it.

**What the article does not claim.** No autonomous purchasing: `complete_checkout`
requires buyer confirmation, `update_checkout` does not touch line items, and
there is no cancel tool. No transaction volume, error rate, or merchant adoption
figure is published, and the article says so rather than estimating.

**Protected lines.** The shared-state evidence, the four buyer-authority
distinctions, the documented limitations, and the self-correction sentence, all
recorded in the source draft's PROTECTED SECTIONS block.

**Standards applied.** Three Shopify primary sources read directly (the
September 28 changelog, the Checkout WebMCP developer docs, the August 5
changelog). Protocol discipline held: WebMCP is the page-level tool surface, not
MCP generally and not UCP. 1,075 body words, two internal links, one closing
question, zero em dashes.

**Key commit.** See the commit adding
`Content/blog/shopify-webmcp-checkout-ai-agent-storefront.md`.

**Follow-up.** AI Commerce 2027 Shift 05 still describes WebMCP as a W3C draft
behind a Chrome Canary flag. Correction approved and executed separately in
Release 1.26.

---

## Release 1.24 - The recommendation gap (2026-10-02)

**What changed.** New article at
`/blog/ai-shopping-retailer-recommendation-gap-lightspeed-vaer`, on the Vaer AI
study conducted for Lightspeed Commerce analyzing roughly 460,000 AI shopping
responses. Ships with a hand-authored OG card and a generated insert script
built from the approved draft.

**Why, and the correction it makes.** The August citation teardown article
asserted that "citation and recommendation are the same discipline." This
evidence shows that was too compressed. The corpus position is now that the two
share a foundation and separate once the model has enough evidence to choose
among merchants. Large and small retailers hold roughly 38% of citations each,
and by the lead recommendation a large chain wins about two and a half times as
often.

**Protected lines.** "Citation is evidence of retrieval. Recommendation is
evidence of selection." used as a section heading, and "A citation dashboard can
tell you the AI saw you. It cannot tell you the AI chose you." Both recorded in
the source draft with the corrected formulation.

**Standards applied.** Both primary sources read in full. Sponsorship is
disclosed early in the body, since Lightspeed sells to the retailers the study
found disadvantaged and Vaer sells AI search advisory. The full technical report
is available on request rather than published, so the article states the work
cannot be independently reproduced, and the claimed 95% confidence intervals
appear in neither public document. The 90 to 94% head-to-head figure is bounded
on first use as model priors rather than live behavior. Retailer never becomes
brand. No citation-to-traffic or recommendation-to-purchase claim appears. The
rational-fulfillment counterargument has its own section, because the pattern
may be a response to fulfillment probability rather than a defect. 1,077 body
words, three internal links, zero em dashes, one closing question.

**Deliberate exclusions.** The Censuswide consumer survey, whose field dates,
weighting and margin of error are undisclosed. The prompt-modifier experiment,
to avoid a prompt-tips article. Links to the DoorDash piece and to The Assistant
Builds the Cart, to avoid a series effect and a retailer-versus-product
conflation.

**Living research gate.** No change. Recommendation-visibility research from a
sponsored study with unpublished methodology advances none of the eight shifts.
`LAST_UPDATED` unchanged.

**Follow-ups.** The August citation teardown article now contains a claim this
release corrects. Consider adding a short pointer from that article to this one
so the corpus does not hold both positions silently.

---

## Release 1.23 - Where the exploration went (2026-10-02)

**What changed.** New article at `/blog/doordash-ai-shopping-messy-middle-discovery`,
on DoorDash's September 30 Ask DoorDash data and Text DoorDash beta, and what
they suggest about where product discovery actually happens. Ships with a
hand-authored OG card and a generated insert script built from the approved
draft.

**Why.** The corpus owned compression of the exploration loop, cart assembly and
mediation. It had never examined what happens to the supply universe before a
shortlist forms.

**Editorial position, and a narrow belief revision.** The March 2026 article
argued AI compresses the exploration loop. That was right about the human
experience and incomplete about the work. DoorDash describes Ask as connecting a
customer to a restaurant that "might not have caught their eye in their usual
scroll," and reports that nearly half of assistant restaurant orders went to
local spots the customer had not tried. The visible consideration set shrinks
while the searched set plausibly grows. The messy middle did not disappear, the
shopper outsourced it.

**Protected lines.** "The messy middle did not disappear. The shopper outsourced
it." and "The messy middle moving into software does not remove gatekeeping. It
makes more of the gatekeeping invisible." Both recorded in the source draft. The
second one is what keeps the piece from becoming an optimistic long tail story.

**Standards applied.** Four primary sources read in full, footnotes included.
Four caveats are load-bearing and recorded as protected: the revision stays
narrow, "discovered" is undefined by DoorDash so the 40,000 figure never carries
the thesis, the three grocery statistics come from different measurement windows
and are never presented as one experiment, and local is not independent while
never tried can only mean never ordered from on DoorDash. Sponsored presence
inside Ask is undocumented in DoorDash's own advertising materials and is
reported as an absence. No causal language anywhere. 1,073 body words, two
internal links, zero em dashes, one closing question.

**Living research gate.** No change. First-party marketplace data with no sample
sizes, no controls and a self-selected user base, in one category.
`LAST_UPDATED` unchanged.

**Follow-ups.** None specific to this article. The index-refresh prototype route
was removed from `src/app/lab` before this release; a stale generated type in
`.next` from that route briefly failed typecheck and was cleared.

---

## Release 1.22 - What a theme is for (2026-10-01)

**What changed.** New article at `/blog/shopify-canvas-ai-themes-design-contract`,
on Shopify's October 1 launch of Canvas and what AI generation does to the role
of the ecommerce theme. Ships with a hand-authored OG card and a generated
insert script built from the approved draft.

**Why.** The corpus covered conversational store building in October 2025
through the Lovable article, and closed-loop measurement through Noibu. It had
never asked what happens to the theme itself when an agent writes the code.

**Editorial position, and a belief revision.** The 2025 article framed AI
generation as an alternative to templates. The Canvas evidence supports a
different reading: the theme becomes the design contract underneath the agent.
Shopify's design director says generating code was easy and guiding design
decisions was hard, and Shopify simplified theme architecture specifically to
make store structure legible to Sidekick. Generating the code is becoming easier
than deciding what the code should produce.

**Protected line.** "Generating the code is becoming easier than deciding what
the code should produce." Recorded in the source draft, with an instruction not
to restore the stronger "productizing judgment" phrasing, which outruns the
evidence.

**Standards applied.** Four primary sources read in full: the newsroom post, the
Help Center requirements page, and both developer community posts. Every
limitation is reported from documentation: early access, certain stores only,
desktop only, Shopify-developed and custom themes only, no third-party themes,
no app blocks or embeds, no Markets, Translations or Rollouts, no theme updates
for Canvas-edited themes, and no theme file download. The 25 million theme edits
figure carries its missing unit and missing denominator and is never converted
into stores or merchants. Design contract is used as Shopify's term, with the
design system reading flagged as interpretation. Canvas feedback is described as
artifact validation, explicitly not outcome measurement, preserving the Noibu
distinction. 1,101 body words, two internal links, zero em dashes, one closing
question.

**Living research gate.** No change. Merchant-side tooling in early access with
no outcome evidence advances none of the eight shifts. `LAST_UPDATED` unchanged.

**Follow-ups.** None specific to this article.

---

## Release 1.21 - Payment choice as policy (2026-09-30)

**What changed.** New article at
`/blog/agentic-commerce-payment-choice-policy-idemia`, on IDEMIA Secure
Transactions' agentic commerce solution and what happens to payment-method
choice when the checkout selector disappears. Synchrony and Oxford Economics
supply supporting consumer evidence. Ships with a hand-authored OG card and a
generated insert script built from the approved draft.

**Why.** The corpus owned agent identity, deterministic authorization,
liability, fraud protection and the disappearance of the checkout page. It had
never asked how a payment method gets chosen when no human is looking at the
options.

**Editorial position.** The industry is shipping payment-policy enforcement
before it has published payment-policy selection. IDEMIA names the challenge as
making cards "available, trusted and selectable" to an agent, then publishes
tokens restricted by merchant, amount, category and time, consent-gated release,
FIDO2 authentication and dispute evidence. No selection mechanism is documented
anywhere: no credential discovery interface, no eligibility signal, no
preference channel, no ranking. That missing half is the article.

**Protected lines.** "The next payment shelf may be a policy object rather than
a row of logos." "A payment method can be accepted by the merchant and still be
invisible to the agent." Both recorded in the source draft, along with the
enforcement-before-selection framing, the IDEMIA selectable and Synchrony
recognizable pairing, and the constraint that verified implementations still
leave payment choice with the person.

**Standards applied.** Both releases read in full. The IDEMIA announcement is
reported as capability, with availability, deployments, volume, geography,
pricing and integration requirements all stated as undisclosed. The agent is
never described as authorizing. Every Synchrony figure is presented as stated
comfort rather than behavior, per the adoption-definition standard. No
private-label decline claim, no pay-to-play allegation, and restricted tokens
are noted as predating agentic commerce. 1,148 body words, three internal links,
zero em dashes, one closing question.

**Living research gate.** No change, and the reasoning is recorded: a vendor
capability announcement with no named deployment, no published selection
interface and no transaction volume is a product launch, not tracker evidence.
`LAST_UPDATED` unchanged.

**Follow-ups.** The `gen-og-png.mjs` duplicate-PNG cleanup ran by hand again.

---

## Release 1.20 - The shared buying interface (2026-09-30)

**What changed.** New article at
`/blog/retail-media-programmatic-buying-openrtb-koddi-teads`, on the Teads and
Koddi partnership opening participating onsite retail inventory through OpenRTB
in the U.S. and Europe. Ships with a hand-authored OG card and a generated
insert script built from the approved draft.

**Why.** The corpus owned retail media as placement, AI surface, rentable
infrastructure, eligibility and data moat. It had never covered the buying
interface or what standardization does to differentiation.

**Editorial position.** The buying pipe can standardize without the commerce
signal standardizing with it. The IAB Tech Lab's Product Listing Ad extension,
final since January 24, 2025, standardizes how a buyer asks for a product
placement and which products are allowed or blocked. It explicitly does not
specify product feed structure, and nothing in it standardizes ranking, auction
logic, pricing, reporting or measurement. Koddi and Wolt both state that
inventory, pricing, quality and monetization control stay with the retailer.

**The measurement absence is load-bearing**, not incidental. The announcement
describes access, not attribution, and discloses no data-sharing or reporting
terms. That absence is the evidence for the article's argument that the most
valuable layers are the ones the protocol does not normalize. It is recorded in
the source draft as protected emphasis.

**Corpus progression.** Chapter one, September 22: a retailer can rent the
infrastructure beneath its media network. Chapter two, this article: advertisers
can increasingly reach that inventory without entering the retailer's
proprietary interface. Gopuff appears in both, in two markets on two rented
stacks, which makes the progression concrete rather than rhetorical.

**Standards applied.** The Teads release and the IAB Tech Lab post read in full.
Only the three networks the release names in context are named; Koddi's
boilerplate customers are not presented as participants. Deal structures are
reported as undisclosed. Commoditization is framed as risk, never as a finding,
and the draft states that nothing here makes two networks interchangeable. 1,106
body words, two internal links, zero em dashes, one closing question.

**Living research gate.** Checked and skipped. Advertising plumbing with no
agent or AI claim. No tracker row, `LAST_UPDATED` unchanged.

**Follow-ups.** The `gen-og-png.mjs` duplicate-PNG issue recurred for a fifth
time and was cleaned by hand again. The fix is queued and should land before the
next article.

---

## Release 1.19 - Negative permissions and the customer promise (2026-09-29)

**What changed.** New article at
`/blog/walmart-sparky-ai-personalization-pricing-governance`, on John Furner's
September 25 customer letter and the governance model it implies. Ships with a
hand-authored OG card and a generated insert script built from the approved
draft.

**Why.** The corpus covered Sparky commercially, Rufus memory as a capability,
and agent authority as operational scope. It had never covered pricing
governance or the question of which held data may influence which decision.

**Editorial position.** Action permission asks what an agent may do. Data-use
permission asks which signals may influence a given decision. Walmart's
commitments constrain no action Sparky takes; they remove the eligibility of
income, shopping history, urgency and estimated ability to pay to shape price,
and the eligibility of shared information to suppress cheaper options. The
lineage is purpose limitation from privacy law; what is new is that the
constraint attaches to a model's decision rather than to a pipeline.

**Protected lines.** "The most important AI permissions may eventually be the
negative ones." "The data that makes an agent better at serving a customer can
also make it better at extracting from that customer." "Price parity is not
economic neutrality." All three are recorded in the source draft as protected,
along with two protected framings: Walmart's asymmetry, and the FTC contrast.

**Standards applied.** Walmart's letter and the FTC proposed policy statement
read in full as primary sources. The FTC statement is described as proposed, not
law, including its own text that it does not bind the FTC or the public. Five
pricing terms are kept separate. Walmart's position is never flattened into
rejecting personalization: the commitment forbids raising a price and hiding
cheaper options, not personalized discounts. No allegation is made against any
company, and the Sparky rule is framed as foresight. Same-day timing with the
FTC comment deadline is stated as coincidence. 1,149 body words, three internal
links, zero em dashes, one closing question.

**Living research gate.** Checked and skipped. A company policy commitment is
not infrastructure or deployed capability. No tracker row, `LAST_UPDATED`
unchanged.

**Follow-ups.** The `gen-og-png.mjs` duplicate-PNG issue recurred and was
cleaned by hand a fourth time. Worth fixing before the next publish.

---

## Release 1.18 - Basket data versus spend data (2026-09-28)

**What changed.** New article at
`/blog/commerce-media-basket-data-spend-data-citi`, on Citi Commerce Media and
the two data structures now competing in commerce media. Ships with a
hand-authored OG card and a generated insert script built from the approved
draft.

**Why.** The corpus had just asked who qualifies to own commerce media. This
asks what kind of commerce data actually differentiates once they qualify.

**Editorial position.** Retailers know more about the basket. Payment networks
know more about the spend. Neither has the whole picture. Citi is the inverse of
McDonald's: it can observe a qualifying card transaction after exposure, which
McDonald's could not, but it sees merchant, amount, category and timing rather
than the product, and only spending that runs on its own cards.

**Standards applied.** Citi's two releases, its advertiser site, PayPal's
advertiser pages, Mastercard's October 2025 release and Citibank's consumer
privacy notice. The 70 million figure carries its footnote scope in the body,
since it counts cardmembers rather than bank customers. The 5x is presented as a
Citi-reported result from a Citi-run test using a method Citi names but does not
document. Kard is stated as pending. Neither data structure is called superior,
and the objective-level claims are labelled hypotheses. 1,149 body words, one
internal link, zero em dashes, one closing question.

**Board safeguards applied before publish.** The instrument-level limitation now
sits in the same paragraph as the protected line about seeing the outcome, not
only in the counterarguments. The Mastercard and Citi observation is stated
observationally, with no implied causation between the 2025 relationship and the
2026 launch.

**Privacy finding.** The commerce media materials are far more specific about
measurement capability than about the consumer-data mechanics behind it. Consent
posture, personalization level, customer controls and whether advertisers
receive underlying records are all undisclosed, and which privacy-notice
category this activity occupies is not stated anywhere I could find.

**Living research gate.** Checked and skipped. Advertising data architecture
with no agent or AI claim, consistent with the Instacart and McDonald's
decisions. No tracker row, `LAST_UPDATED` unchanged.

**Follow-ups.** The `gen-og-png.mjs` duplicate-PNG issue logged in release 1.17
recurred again on this run and was cleaned by hand a third time.

---

## Release 1.17 - McDonald's Media Network and the missing loop (2026-09-27)

**What changed.** New article at
`/blog/mcdonalds-media-network-commerce-media-without-marketplace`, on
McDonald's September 23 Investor Day disclosure of McDonald's Media Network.
Ships with a hand-authored OG card and a generated insert script built from the
approved draft.

**Why.** The corpus covered retail media as placement, as AI surface, as
campaign automation, and as infrastructure a retailer builds or rents. It had
never asked what makes a company eligible to own commerce media at all.

**Editorial position.** Authenticated demand may be enough to enter commerce
media, but not enough to inherit retail media economics. McDonald's has
identity, purchase history, frequency and owned surfaces. It has not
demonstrated closed-loop measurement, and the structural reason is that a
third-party advertiser converts somewhere McDonald's cannot observe. Closer to
addressable media with a first-party audience than to Walmart or Amazon retail
media.

**H1 decision.** The brief preferred "Retail Media Just Outgrew Retail",
conditional on the architecture surviving research. It did not survive
intact, so the piece ships as "McDonald's Is Building a Media Network Without a
Marketplace". The Editorial Board confirmed the deviation.

**Standards applied.** McDonald's Form 8-K exhibit and the Investor Day
transcript for every company claim; trade reporting labelled and linked for
placement detail only. The billion-dollar figure is presented as the company's
own word, aspiration, and the article states it is not guidance and appears in
none of the seven published 2030 financial targets. Measurement is never
presented as established: the word attribution does not appear in the transcript
at all. The franchise-mix target, from about 95% franchised today to about 98%
by the end of 2028, is kept prominent because the pilot sits in the estate the
company is deliberately shrinking. The Investor Day slide deck refused automated
retrieval, and the article discloses that limit. 1,150 body words, two internal
links, zero em dashes, one closing question.

**Living research gate.** Checked and skipped. Advertising infrastructure on
human surfaces with no agent or AI claim, the same reasoning applied to the
Instacart and Gopuff article. No tracker row, `LAST_UPDATED` unchanged.

**Follow-ups.** `scripts/gen-og-png.mjs` scans `public/images/blog/*.svg` and
writes a PNG for every SVG it finds, so the two editorial diagram SVGs now
produce duplicate PNGs in `public/images/blog-og/` on every run. Removed twice
by hand. Either move diagram assets to their own directory or give the generator
an ignore list.

---

## Release 1.16 - Agentic commerce adoption definition problem (2026-09-26)

**What changed.** New article at
`/blog/agentic-commerce-adoption-definition-problem`, comparing the Global
Payments Agentic Commerce Report (published September 23, fielded May 2026) with
the ACI Worldwide and YouGov research (published September 16, fielded June
2026). Ships with a hand-authored OG card and a generated insert script built
from the approved draft.

**Why.** The corpus owned forecasts, journey measurement and agent authorization
on payment rails. It had never asked whether consumer adoption statistics
measure the same behavior.

**Editorial position.** Assist, recommend, prepare, approve, bounded delegation
and autonomous purchasing are different grants of authority. Two of the six are
barely measured, including prepare, which is closest to what platforms actually
ship. The lead finding is that ACI describes one 7% figure three different ways
inside a single release, so the definition problem appears inside a source
before any two studies are compared.

**Standards applied.** Primary releases only for every figure. Population scope
was checked rather than inferred: only two Global Payments numbers are
explicitly attributed to Americans, and the article says so. The brief's 5% and
2% autonomous split could not be verified from any public source and was
dropped in favor of the published 7%. Both full reports sit behind lead-capture
forms and were not obtained, which the piece discloses. Both sponsors are named
as payments companies with a commercial interest. Willingness is never presented
as behavior. 1,115 body words, three internal links, zero em dashes, one closing
question.

**Living research gate.** Checked and deliberately skipped. The AI Commerce 2027
tracker records infrastructure and deployed capability, not stated-preference
surveys, so no row was added and `LAST_UPDATED` is unchanged. The Editorial
Board agreed. If this belongs anywhere on the flagship later, it is the
disconfirming and adoption-evidence discussion.

**Follow-ups.** None specific to this article.

---

## Release 1.15 - Editorial diagram, responsive (2026-09-24)

**What changed.** Added a two-model editorial diagram to
`/blog/agentic-commerce-platform-default-shopify-google`, placed between "The
default is the distribution mechanism" and "Discoverable, transactable,
measurable". Two hand-authored SVGs: a 16:9 desktop version and a stacked
mobile version redrawn for narrow screens rather than scaled down. Delivered
through `<picture>`, with the mobile SVG under 640px and a PNG fallback for
surfaces that cannot render SVG.

**Why.** The article's central contrast, integration versus governance, is
structural and reads faster as a diagram than as prose.

**Accessibility.** Explicit page-level `alt` on the `img` element, in addition
to the `aria-label` inside each SVG. The alt states the concept rather than
repeating the graphic's text.

**Standards applied.** Brand palette only, no logos, no imagery, no gradients.
Article copy, H1, metadata and the AI Commerce 2027 page were not touched, and
the update script aborts if the prose changes by a single byte.

**Type sizing.** The article's content column measures 720px, so the first cut of
the 16:9 asset rendered at roughly 12px effective type. Step text was raised to
32px in the 1600 viewBox, about 14px effective, and the transition marker was
rotated into the gutter because the horizontal chip collided with the governance
rail at the larger size.

**Follow-ups.** The mobile breakpoint is 640px. Revisit if the blog's content
column width changes.

---

## Release 1.14 - Agentic commerce as a platform default (2026-09-24)

**What changed.** New article at
`/blog/agentic-commerce-platform-default-shopify-google`, on Shopify making
direct checkout in Google AI Mode and Gemini active by default for eligible
stores. The living research page was updated in the same cycle: a dated
`EVIDENCE_TRACKER` row, a fourth `changed2026` line on shift two, `LAST_UPDATED`
and `STATIC_LAST_MODIFIED.aiCommerce2027` moved to 2026-09-24. Ships with a
hand-authored OG card and a generated insert script built from the approved
draft.

**Why.** The corpus owned agentic checkout as an architecture question and as a
discovery question. It had never covered the moment agent distribution became a
platform-managed setting with an opt-out.

**Editorial position.** The Google channel is the evidence; the story is channel
governance. Shopify's managed default keeps channels active, keeps direct
checkout on where supported, and enrolls stores in agentic storefront channels
that do not exist yet. What moved is the burden: activation used to require a
decision, and now review does. The durable formulation to carry forward is that
when technical integration stops forcing a channel decision, governance has to
replace the friction that used to create one.

**Standards applied.** Primary sources only: Shopify's Help Center pages for the
Google channel and for managing agentic storefronts, Google's Merchant Center
UCP and UCP onboarding articles, and Shopify's January 11, 2026 post. Every
tradeoff was verified on the Google channel page itself rather than inferred
from the near-identical Microsoft Copilot page. Search Engine Roundtable is
cited for rollout timing only. PPC Land's "without asking" framing was not used,
since the documentation shows supplemental terms, an admin control and a
documented opt-out. The measurement claim is qualified to "some of the
instrumentation" because server-to-server events and Shopify channel reporting
survive. No adoption, volume or conversion claim appears. 1,120 body words, four
internal links, zero em dashes, one closing question.

**Living research gate.** Satisfied in this cycle. Shift one was left untouched
by editorial decision. The new shift two line ends with "and it adds no volume
evidence at all", which keeps the update inside the page's central discipline
that infrastructure exists and adoption evidence does not.

**Follow-ups.** None specific to this article.

---

## Release 1.13 - Instacart, Gopuff and retail media as layers (2026-09-22)

**What changed.** New article at
`/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure`, on Gopuff
adopting Instacart Carrot Ads for its own storefront while continuing to run
Gopuff Ads. Ships with a hand-authored OG card and a generated insert script
built directly from the approved draft in `Content/blog/`.

**Why.** The corpus covered retail media as placement, as AI surface and as
campaign automation, and never covered who builds and operates the
infrastructure underneath a retailer's media business.

**Editorial position.** This is unbundling, not outsourcing. Gopuff kept the
commercial layer and rented the plumbing, and the operator question is shifting
from whether to build a retail media network to which layers are differentiating
enough to justify owning. The piece separates ownership of a layer from control
of a business.

**Standards applied.** Two primary sources: the September 22, 2026 Instacart and
Gopuff release, and Instacart's own November 6, 2025 Carrot Ads newsroom post.
The brief's proposed 220 partner / 7,000 advertiser baseline could not be
verified from a primary source and was replaced with the verified 240+ / 7,500+
pair. MRC accreditation is described as validating measurement process for named
metrics, explicitly not as evidence of incremental sales or partner
profitability. The network effect is labelled a hypothesis. 1,118 body words,
one internal link, zero em dashes, one closing question.

**Living research gate.** Checked against the eight shifts on
`/ai-commerce-2027` and no tracker row added. The development is retail media
infrastructure on human storefronts and makes no agent or AI surface claim, so
it does not materially update a shift. `LAST_UPDATED` is unchanged.

**Follow-ups.** None specific to this article.

---

## Release 1.12 - AI Commerce 2027 flagship research page (2026-09-21)

**What changed.** New route `/ai-commerce-2027`, the first TRH living research
page. Content lives in a typed module (`src/lib/ai-commerce-2027.ts`) and the
route is a thin renderer, so routine updates are data edits. The page carries an
executive thesis, an AI assisted ecommerce versus AI commerce distinction, an
HTML and CSS stack diagram, eight evidence-backed shifts, a disconfirming
section, an operator watchlist, and the 2027 AI Commerce Evidence Tracker seeded
with ten verified 2026 developments. Also added: a flagship OG card at
`/images/research/ai-commerce-2027.png`, a sitemap entry, and a homepage
discovery link under Research Areas.

**Why.** The corpus had 86 articles on individual developments and no synthesis
layer. This page is the hub that future AI commerce articles link back to, and
that links forward to them through the tracker.

**Editorial position.** 2026 built the infrastructure and produced almost no
evidence of use. No platform, network or retailer publishes agent initiated
transaction volume. The page states that gap plainly rather than implying
adoption is further along than it is.

**Standards applied.** Primary sources only for load-bearing claims (Google,
OpenAI, Tapestry, Cloudflare, Ant International, Sabre, W3C, Google Search
Central, five arXiv benchmark papers). Unverified payment claims from Visa,
Mastercard and PayPal were excluded rather than included to make the stack look
complete. Benchmark findings are labelled as simulations throughout. 3,973 prose
words, 16 internal links, zero em dashes, one closing question.

**Accessibility note.** This page uses `#42a5c8` for accent text rather than
`brand-accent` (`#2d7d9a`), which measures 3.17:1 and fails AA for body text.
Borders and fills still use `brand-accent`. This is a deliberate local variance
pending the site-wide contrast fix in the backlog.

**Follow-ups.** Apply the same accent fix site wide. Keep the tracker current per
the living research gate in the operating system doc.

## Release 1.11 - www hostname redirects to the apex (2026-09-13)

**What changed.** Configuration only, in the Vercel dashboard. No code or DNS
change. `www.theroberthu.com` was added to the project as a **308 Permanent
Redirect** to `theroberthu.com`. `theroberthu.com` remains connected to
Production and is unchanged.

**Why.** `www` had a DNS A record pointing at Vercel (216.198.79.1, same as the
apex), but the hostname had never been added to the Vercel project, so no
certificate was issued. `http://www` redirected to `https://www`, which then
failed TLS with "no alternative certificate subject name matches target host
name". Anyone typing `www` hit a certificate error, and Search Console reported
it as a Redirect error.

**How it was configured.** Two defaults in Vercel's Add Domains dialog would
have been harmful and were deliberately unchecked: "Redirect apex domains to
www" (would have flipped the canonical host to `www`, contradicting every
canonical tag, sitemap entry and internal link) and "Include apex and www
variants" (would have applied the redirect to the live apex as well, pointing it
at itself). The redirect was also changed from the default 307 Temporary to 308
Permanent so search engines consolidate `www` onto the apex. The existing DNS
record already satisfied Vercel's validation, so no DNS edit was needed.

**Verified.** `https://www.theroberthu.com/` returns 308 to
`https://theroberthu.com/` then 200. Deep paths are preserved
(`/blog/npci-upi-ai-agent-authorization` redirects to the same path on the
apex). `http://www` resolves in two hops, HTTPS upgrade then the apex redirect.
The apex still returns 200 directly. Certificate issued for
`CN=www.theroberthu.com`, valid 2026-09-13 to 2026-12-12; Vercel renews it
automatically.

**Follow-ups.** Search Console's "Redirect error" validation for the `http://`
URLs may now pass on a new validation run. The "Page with redirect" rows remain
expected and should not be re-validated.

## Release 1.10 - Stop caching transient failures as article 404s (2026-09-13)

**What changed.** The article page's post lookup moved into a shared `getPost`
helper in `src/app/blog/[slug]/page.tsx` that uses `.maybeSingle()` and throws
on a request error, wrapped in React `cache` so `generateMetadata` and the page
share one request.

**Why.** A published article,
`6-dimension-geo-audit-framework-amazon-listing`, was observed returning 404
live, served from Vercel's cache (`x-vercel-cache: HIT`, then `STALE`), and
recovered to 200 about 40 seconds later. The article and template were fine; it
rendered locally. The lookup used `.single()`, which returns `data: null` both
when no row matches (`PGRST116`) and when the request itself fails (`fetch
failed`). The page checked only `data`, so it called `notFound()` in both cases,
and a transient Supabase failure during ISR regeneration was cached as a 404 for
a real article. Any article could hit this at random.

**Fix.** `.maybeSingle()` returns `{ data: null, error: null }` for a missing
row and sets `error` only when the request fails, so the two cases are now
distinct. A genuine miss still calls `notFound()`. A failed request throws,
which makes Next keep serving the last successful render instead of caching a
404.

**Verified.** Client behavior probed directly for real, missing and
unreachable-host queries under both `.single()` and `.maybeSingle()`. Locally:
the previously affected article, the newest article and the oldest-style article
all render 200 with correct titles, and a nonexistent slug still returns 404,
not 500. tsc, lint and build clean. Not verified: an induced live Supabase
outage, which is not practical to trigger safely; the stale-on-throw behavior
relied on is Next's documented ISR behavior.

## Release 1.9 - Server-rendered blog index (2026-09-13)

**What changed.** `/blog` filtering and pagination moved from client state to
`searchParams`, and `BlogPostGrid` became a server component.

- **Root cause.** `BlogPostGrid` called `useSearchParams()` inside a `<Suspense>`
  boundary with no fallback. That forces the subtree out of server rendering, so
  the server emitted nothing: no category filters, no cards, no pagination. The
  entire grid was client-only.
- **Second, larger problem found while fixing it.** Pagination was `useState`
  with no URL representation. There was no address for page 2, so `/blog`
  exposed 12 of 86 posts to anyone, crawler or human, with no path to the other
  74. Category state reached the URL via `replaceState`; pagination did not.
- **Fix.** `src/app/blog/page.tsx` reads `?category=` and `?page=`, filters and
  slices server-side, and passes a ready list down. Category chips and
  pagination are now `<Link>` elements. `BlogPostGrid` dropped `'use client'`,
  `useState`, `useEffect`, `useSearchParams` and `Suspense`.
- **Metadata.** `generateMetadata` gives every view a self-canonical, a distinct
  title ("GEO & SEO", "Research Notebook - Page 2") and a category-specific
  description. Pagination carries `rel="prev"` / `rel="next"`.
- **Out-of-range guard.** `?page=999` rendered the last page while
  self-canonicalising to `?page=999`, which would have minted unbounded
  indexable URLs. `generateMetadata` now runs a head-only count query and clamps
  the canonical to the real last page. An unknown `?category=` falls back to All
  and canonicalises to `/blog`.

**Why.** The index page contributed almost no internal linking, and any crawler
that does not execute JavaScript saw an empty archive. Posts were never
orphaned, since the sitemap carries all 86 and every article surfaces Related
Research, but the shape of the archive was invisible.

**Impact.** Every category and page combination is now a real, crawlable,
shareable URL, and the full grid ships in server HTML. `/blog` changes from
static to server-rendered on demand (`revalidate = 60` still caches the data);
article pages remain statically generated. Verified across `/blog`, `?page=2`,
`?page=8`, `?page=999`, two categories, an invalid category, and an
out-of-range category page.

**Also shipped.** `POSTS_PER_PAGE` 10 -> 12, so the three-column grid has no
empty slots in the last row (commit `4517c82`).

**Blog hero spacing and copy (2026-09-13).** The hero and the grid section
stacked two full `md:py-28` paddings, 224px of empty space between the subtitle
and the category chips on desktop, with no divider to justify it. Hero is now
`pt-20 md:pt-28 pb-10 md:pb-14` and the grid section drops its top padding:
56px desktop, 40px mobile. The stale consulting-era copy was replaced: H1
"Insights & Strategy" became "Research Notebook" (matching the page's own
metadata title), and "Thoughts on e-commerce, AI, and building systems that
scale. No fluff, just what works." became "How technology is changing commerce,
and what operators need to understand before the shift becomes obvious." The
accent glow was redrawn as a radial gradient instead of a `blur-3xl` circle,
because the tighter padding would otherwise clip the blur mid-fade at the
section edge; the gradient is transparent before the edge and visually
near-identical. Verified at 375px and 1024px: zero horizontal overflow, chips
wrap cleanly, no clipping.

**Follow-ups.** Category URLs are still absent from the sitemap. Route-based
categories (`/blog/category/geo-seo`) remain the cleaner long-term structure but
are deliberately deferred while the taxonomy review is open in the backlog.

## Release 1.8 - About page professional narrative (2026-09-10)

**What changed.** Targeted editorial revision of `/about`. No rebuild, no
component or styling changes beyond one card-width adjustment the new content
required.

- **Career section restructured.** Ten flat stage pills (Marketing, Startup,
  Technology, Marketplaces, Amazon, ...) became three connected chapters:
  Build, Adapt, Scale. Each carries its stages plus what that period taught.
  All ten original stages survive inside the chapters; Agency was added to
  chapter two. Timeline component, connector lines, glass treatment and gold
  emphasis on the final chapter all preserved.
- **Hero identity.** Accent line moved from "I study how technology changes
  commerce" to "I turn messy business problems into systems that work," with
  "Operator and builder" opening the body. The study line was kept, relocated
  into the body where it explains why he studies rather than serving as the
  whole identity.
- **Principles rewritten from observations to operating principles.** Five
  cards became four: start with the business problem, stay close to the work,
  prove the workflow before automating it, and the preserved "Understanding
  systems matters more than mastering tools." Four also fixes the orphaned
  fifth card in the two-column grid.
- **Research areas** gained "AI-Enabled Workflows" and "Agent Governance".
- **Meta description** now leads with operator and builder, keeping the domains.

**Why.** The page defined Robert primarily as a researcher, and the career
section read as a list of unrelated ecommerce roles rather than a progression.
The durable identity sits above any single domain or technology: an operator
and builder who turns ambiguity into systems.

**Impact.** Mobile verified at 375px: zero horizontal overflow, chapter cards
at 335px, longest stage string wraps to two lines without clipping. `tsc`,
`next lint` and `next build` all clean. Zero em dashes.

**Deliberately not changed.** `jobTitle` ("Commerce and Technology Researcher")
appears in eight places site-wide including the root layout, all four flagship
pages and `blog-schema.ts`. Changing it on `/about` alone would split the entity
across the site. If the operator identity should reach structured data, that is
a separate coordinated change.

**Removed, preserved here in case they are wanted back.** Two principles cut
when tightening to four: "Technology changes relationships more than
departments" and "AI is changing commerce because it changes customer decision
making". The third cut, about connecting ideas across disciplines, survives in
the closing section.

## Release 1.7 - Split editorial and search titles become the default (2026-09-04)

**What changed.** Documentation only. No live article, route, or database row
was modified.

- [01_EDITORIAL_STYLE_GUIDE.md](01_EDITORIAL_STYLE_GUIDE.md): new section
  "Titles: editorial H1 and search title". `title` is editorial (H1 +
  `Article` JSON-LD headline, answering "What is Robert's argument?");
  `meta_title` is search discovery (`<title>`, `og:title`, `twitter:title`,
  answering "What is the searcher trying to understand?"). Do not duplicate the
  H1 into `meta_title` by default, do not rewrite a good H1 to make it
  search-friendly, do not keyword-stuff. Every draft returns both titles with a
  line on why each fits its surface.
- [00_WEBSITE_OPERATING_SYSTEM.md](00_WEBSITE_OPERATING_SYSTEM.md): new
  "Split-title measurement (open experiment)" under Success metrics. Track
  split-title articles in Search Console and compare CTR against
  identical-title articles **at similar average positions**.
- [Content/blog/_TEMPLATE-research-article.md](../Content/blog/_TEMPLATE-research-article.md):
  `meta_title` is now a distinct search-title field with inline guidance, the
  header states the two-title requirement, and the JSON-LD `headline` is
  explicitly the editorial H1.
- `BLOG_STANDARDS.md` and `NEWS_TO_BLOG.md` (legacy, consulting-era): the
  conflicting "meta title = post title" rule was marked superseded and pointed
  at the style guide. The rest of both documents still contradicts current
  practice; backlogged.

**Why.** The first article published with deliberately separate titles,
`/blog/anthropic-claude-commerce-intelligence-layer`, showed 720 impressions,
15 clicks, 2.1% CTR at average position 7.6, against a site-wide 1.44K
impressions, 19 clicks, 1.3% CTR at average position 10.4 in the same window.

**Read that as an early signal, not as proven causality.** Nothing here
establishes that the title split caused the CTR difference, and no future
session should cite this entry as evidence that it did. See the Impact note
below for what is actually unresolved.

**Impact, stated carefully.** This is an early signal, **not causal proof**.
Freshness, query mix, topic demand, and the article's better average position
all plausibly contribute, and one article in one window cannot separate them.
The practice is adopted because it is cheap, reversible, and structurally
sound: the two surfaces genuinely serve different readers, and the template
already routes them correctly with no code change
(`post.meta_title || post.title` for metadata, `post.title` for the H1 and
schema headline).

**Known side effect.** `og:title` and `twitter:title` follow `meta_title`, so
social shares carry the search title rather than the editorial H1. Documented,
not fixed, and deliberately deferred to its own implementation pass. Pointing
`openGraph.title` at `post.title` in `src/app/blog/[slug]/page.tsx` is a small
change, but it alters live rendered behavior on every article, so it gets an
explicit change and its own verification rather than riding along with a
documentation update.

**Follow-ups.** New High backlog item to review high-impression / low-click
articles for `meta_title`-only optimization (Helium 10 MCP, ChatGPT Ads, Costco
ecommerce strategy, Trade Desk Kokai Zuma, Walmart Sparky AOV, Adobe AI
traffic), gated on query-level Search Console data. New Medium item to
reconcile or retire the legacy authoring docs.

## Release 1.6 - Consulting CTA removal from article bodies (2026-08-21)

**What changed.** Removed retired consulting calls to action, client
testimonials, service pricing, and links to retired service pages from **63 of
74 published article bodies** in Supabase (`scripts/cleanup-consulting-ctas.mjs`).

Operations applied:
- 46 whole CTA paragraphs deleted ("book a free 15-minute strategy session",
  "an e-commerce strategy consultation can help you").
- 17 paragraphs trimmed at sentence level, preserving the "For more on X, see
  <blog link>" sentences that shared those paragraphs.
- 11 client-testimonial blocks removed (two markup variants: an outer
  `div.blog-testimonial-cta` and a nested `div.blog-testimonial-block`).
- 58 `/services/*` links unwrapped, keeping the anchor text as plain prose.
- 2 service-pricing mentions ($499 audit) removed.

**Why.** The Operating System's first hard rule bans lead forms and
"book a call" / consultation CTAs. The Archive and Evolve pass covered routes,
metadata, and structured data but never touched article bodies, so the CTAs were
live on roughly 85% of published posts. 48 of them linked to
`/free-strategy-session`, which is archived and returns 404.

**Impact.** Site-wide scan now reports **0 hits** for
`/free-strategy-session` links, `/services/*` links, "consultation", "strategy
session", "strategy call", testimonial markup, `$499` pricing, and "book a free".
All 74 published posts have balanced `<p>`, `<div>`, and `<a>` tags with no empty
paragraphs or orphaned headings. No replacement CTA was inserted: every article
already renders the "Follow the research" newsletter banner plus an inline
newsletter card, so the consulting CTAs were pure duplication.

**Deliberately kept.** Three RecoScope product mentions (own product, not a
consultation) had only their trailing "Or book a strategy session" sentence
removed.

**Rollback.** Full pre-change snapshot of all 74 rows:
`backups/blog_posts-backup-2026-08-21.json`.

**Follow-ups.** `amazon-advertising-strategy-2026` retains third-person
credential framing ("Robert Hu has spent over 20 years watching brands make this
mistake"). It is not a CTA, so it was left alone; review for tone separately.

## Release 1.5 - Dead URL and Redirect Cleanup

**Release date:** 2026-07-26. Commit `7098408`.

**What changed.** GA4 landing-page data surfaced 42 sessions (about 6.5% of all
sessions) arriving on 404s at roughly 0% engagement, plus redirects that chained
or resolved into dead ends. Most of that traffic was Direct, meaning stale
external links rather than search results.

- `/free-strategy-session` -> `/about`. The retired consulting page was still
  drawing 12 sessions from external links such as the email signature and
  LinkedIn.
- `/blog/amazon-lens-live-ai-visual-search` -> `/geo/alexa-for-shopping`,
  `/blog/journey-ecom-ai` -> `/blog/ai-compresses-messy-middle-ecommerce`, and
  `/blog/how-to-start-online-business` -> `/blog`. All three predate the 2.0
  rebuild and exist in neither Supabase nor the repository.
- `/case-studies`, `/case-studies/` and `/case-studies/:slug*` -> `/about`. The
  route was archived and returned 404, and the trailing-slash rule redirected
  into that 404.
- Removed two redirect chains: `/geo-audit/results` and `/services/` now point
  straight at their destinations.
- Legacy service slugs repointed from the noindex `/services/*` sub-pages to
  live editorial destinations, so inbound links no longer dead-end for search or
  land readers on consulting copy.
- Corrected the stale `utm-tagging-guide.md` header, which still named the
  retired strategy-session page as the primary CTA.

**Analytical note.** Site-wide engagement of 24.73% and 14s average is not a
usable editorial baseline, because it blends 404 traffic, `(not set)` sessions,
and low-quality Direct. Segmented, Organic Search landing on live article pages
runs roughly 57% engagement and 45 seconds. That is the baseline for judging
article changes. Identical pages also behave very differently by channel (the
homepage at 71.4% Organic versus 17.5% Direct), which points to traffic quality
rather than content quality.

**Still open.** No key events are configured, so related-content clicks,
newsletter clicks, and scroll depth are unmeasurable. GA4's automatic `scroll`
event fires at 90% depth and may already provide a retroactive completion
baseline. The remaining dead URLs beyond the visible top 15 of 145 landing-page
rows have not yet been enumerated.

---

## Release 1.4 - Mobile Article Recirculation and Progress

**Release date:** 2026-07-26. Commit `68e8a2a`.

**Affected template:** `/blog/[slug]`, applying to all 68 published articles.

**What changed.** Mobile-only changes to the article template. Desktop layout
unchanged.

- Compact Related Research list below `md`. Three stacked image cards become a
  divider-separated list (category, title, read time), so all three next-reads
  fit in roughly one viewport instead of two screens of images. Desktop keeps
  the card grid via `hidden md:grid`.
- New `ReadingProgress` component: a mobile-only progress bar measured against
  the `<article>` element, so it completes at the end of the reading rather than
  after the related posts and footer. Hidden at `xl:`, matching the existing
  `MobileTocCard` and `FloatingBookCta` convention.
- "All Posts" back link raised from a 20px to a 44px tap target
  (`py-3 md:py-0`).

**Mobile breakpoint behavior.** Compact list below 768px; card grid at 768px and
above; progress bar below 1280px.

**Why.** A 390x844 audit found the article page running 11.4 screens with the
Related Research block sitting 69% down the page as 1,719px of stacked image
cards, and no scroll progress feedback. Measuring Quanta Magazine at the same
width showed near-identical body type (16px, 350px column, 39 chars/line), which
disproved the initial hypothesis that mobile type was too small. The real
difference was recirculation: Quanta surfaces 22 of 47 internal links above the
50% depth mark. Revised diagnosis: the article asks readers to make their
next-content decision too late and presents that decision inefficiently on
mobile.

**Expected behavioral impact.** Improved end-of-article choice surface and
scroll orientation on mobile. Estimated ~1,350px (roughly 1.6 screens) removed
from the recirculation block.

**Deliberately excluded.** A mobile line-height change from 1.8 to 1.85 was
implemented and then reverted: typography was not the issue, and extra leading
lengthens an already-long page against the primary goal. Mid-article
recirculation was deferred pending behavioral evidence on where readers abandon,
since the article already carries one newsletter interruption. A mobile footer
trim (939px, 1.1 screens) was logged but not touched.

**Known measurement limitations.** No custom pre-change baseline exists for
related-content click-through or scroll depth. GA4 may supply directional
historical scroll and exit context only. Metrics to track from here:
related-content click-through, article completion and deepest-scroll, newsletter
interaction, mobile versus desktop recirculation, and article-page exits.

**Follow-ups.** Device review on a real phone and tablet, since this shipped
straight to production rather than through a preview. Specifically inspect
whether `ReadingProgress` should be structurally anchored beneath the header
instead of relying on `fixed top-[71px]` against a 72px header, which is brittle
if the header height changes. Then instrument article analytics and use
post-launch data as a directional baseline.

**Framing note.** Missing progress feedback is treated as a plausible usability
improvement, not a proven abandonment cause. The evidence supports the former
only.

---

## Release 1.3 - Documentation and Operating System

**What changed.** Established `/docs` as the project's source of truth: an
Operating System document, an Editorial Style Guide, a Roadmap (Now/Next/Later/
Future), a prioritized Backlog, and this Changelog. Rewrote `CLAUDE.md` to route
every session into the docs and to reflect the editorial (not consulting)
direction.

**Why.** The repository had been repositioned faster than it was documented.
New AI sessions needed a single, accurate context so the direction stays
coherent over time.

**Impact.** Future work starts from shared standards (flagship page shape,
voice, terminology, what we do not do) instead of re-deriving them.

**Follow-ups.** Reconcile the flagship-standard variances now recorded in the
backlog (`/geo` ending label and schema type; "In Short" primer).

---

## Release 1.2 - Consulting Cleanup

**What changed.**
- Retired `/geo-audit`; deleted the route and permanently redirected it to
  `/geo` (`3ae18b8`).
- Converted `/aeo` into a flagship editorial resource: removed the newsletter/
  CTA ending, added the Key Takeaways + Continue Exploring + Last Updated
  ending, an "In Short" primer, and fixed the SEO/GEO/AEO tagline spacing
  (`ffc8d45`).
- Retired the `/services` index (redirect to `/`), deleted `PricingCarousel`,
  fixed the legacy contact/booking redirects (`/contact`, `/book-a-call`,
  `/consultation`, etc.) that pointed at the archived `/free-strategy-session`
  to point at `/about`, and removed the stale "GEO Audit" consulting project
  from `/work` (`3be59e4`).

**Why.** Remaining consulting/service infrastructure created strategic drift and
broken redirects that no longer fit an editorial publication.

**Impact.** No live service pages, pricing, or booking paths. Legacy URLs
resolve to editorial destinations instead of 404s. `/aeo` matches the flagship
standard.

**Follow-ups.** `/services/*` sub-pages remain noindex/archived; dormant lead
API and email templates still carry consulting copy (see backlog Critical).

---

## Release 1.1 - Editorial Foundation

**What changed.**
- Repositioned the **homepage** as a research notebook with a featured-post
  focal point (`ca830bf`, `a55837f`, `ae6110f`).
- Rewrote **/about** as a research philosophy rather than a resume (`65a46de`,
  `6e095e6`).
- Repositioned the **footer** as a research-site footer (`d30d5c6`).
- Scrubbed consulting positioning from **metadata and JSON-LD** site-wide, set
  the writing/research positioning, dropped Services from the nav schema, and
  removed embedded YouTube (`2549fee`, `7de9a6a`, `cc5c780`, `b2fe4fc`,
  `7dff4ce`, `23ae615`).
- Gave **blog posts** the research article structure and an automatic
  category-based "Related Research" cluster; repositioned the article newsletter
  CTA to an invitation to follow the research; removed the related-service promo
  block (`88b867b`, `a558947`, `b8e5740`).
- Converted **/geo** into the first flagship editorial resource, with a dedicated
  OG card and tightened `Article` structured data (`a89eff1`, `ca59f46`,
  `7bd6bca`).
- Ran the **Archive and Evolve** transition on the consulting service pages
  (noindex, out of sitemap, content preserved) and made the newsletter the sole
  site CTA (`aab897c`, `7053fe3`).

**Why.** Shift the site's identity from consulting/lead-gen to an editorial AI
Commerce publication built on original research.

**Impact.** Home, About, footer, blog, and the first flagship (`/geo`) all read
as a publication. Structured data and metadata reinforce the research
positioning for search and AI systems.

**Follow-ups.** Consolidated into Release 1.2 (finish retiring consulting
infrastructure).
