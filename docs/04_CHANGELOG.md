# Changelog

The record of what shipped and why. Each release notes: what changed, why,
expected impact, key commits, and follow-ups. Newest first. Releases are
thematic, not strict semver.

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
