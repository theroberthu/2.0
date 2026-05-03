# UTM Tagging Guide — theroberthu.com

**Site:** theroberthu.com
**Primary CTA:** Free 15-minute strategy call — `https://theroberthu.com/free-strategy-session`
**Last updated:** 2026-03-11

---

## Naming Conventions

- All values: **lowercase, hyphen-separated, no spaces, no special characters**
- `utm_source` = where the traffic comes from (platform or channel)
- `utm_medium` = how it's delivered (outreach, social, signature, organic)
- `utm_campaign` = the initiative or distribution context
- `utm_content` = differentiates links within the same campaign (day of sequence, CTA type, post slug)
- Never tag organic Google/Bing traffic — GA4 captures that automatically via channel grouping
- Never tag internal links — UTMs on internal links overwrite the original source

---

## Tagged URLs by Touchpoint

---

### 1. Cold Outreach Emails (3-part sequence)

**Context:** Sent from robert@theroberthu.com via Resend. Link destination = homepage unless the email has a specific CTA.

**Homepage link — Day 1**
```
https://theroberthu.com?utm_source=email&utm_medium=outreach&utm_campaign=cold-sequence&utm_content=day-1
```

**Homepage link — Day 5**
```
https://theroberthu.com?utm_source=email&utm_medium=outreach&utm_campaign=cold-sequence&utm_content=day-5
```

**Homepage link — Day 12**
```
https://theroberthu.com?utm_source=email&utm_medium=outreach&utm_campaign=cold-sequence&utm_content=day-12
```

**Strategy call link — Day 1**
```
https://theroberthu.com/free-strategy-session?utm_source=email&utm_medium=outreach&utm_campaign=cold-sequence&utm_content=day-1-strategy-call-cta
```

**Strategy call link — Day 5**
```
https://theroberthu.com/free-strategy-session?utm_source=email&utm_medium=outreach&utm_campaign=cold-sequence&utm_content=day-5-strategy-call-cta
```

**Strategy call link — Day 12**
```
https://theroberthu.com/free-strategy-session?utm_source=email&utm_medium=outreach&utm_campaign=cold-sequence&utm_content=day-12-strategy-call-cta
```

> **Note:** `utm_content` combines the day and CTA type so GA4 can show you which sequence day drove bookings. If your email tool (Resend) auto-appends tracking, confirm it doesn't conflict with these UTMs.

---

### 2. LinkedIn — Organic Posts and Comments

**Context:** Links dropped in original posts or as comments on other content. Destination = homepage or a specific blog post.

**Homepage**
```
https://theroberthu.com?utm_source=linkedin&utm_medium=social&utm_campaign=organic-engagement
```

**Strategy call CTA**
```
https://theroberthu.com/free-strategy-session?utm_source=linkedin&utm_medium=social&utm_campaign=organic-engagement&utm_content=strategy-call-cta
```

---

### 3. LinkedIn — Blog Post Distribution

**Context:** Sharing a blog post link on LinkedIn. Replace `post-title-slug` with the actual blog slug.

**Blog post link (replace slug)**
```
https://theroberthu.com/blog/[post-title-slug]?utm_source=linkedin&utm_medium=social&utm_campaign=blog-distribution&utm_content=[post-title-slug]
```

**Example — amazon-advertising-strategy-2026**
```
https://theroberthu.com/blog/amazon-advertising-strategy-2026?utm_source=linkedin&utm_medium=social&utm_campaign=blog-distribution&utm_content=amazon-advertising-strategy-2026
```

**Example — amazon-rufus-optimization**
```
https://theroberthu.com/blog/amazon-rufus-optimization?utm_source=linkedin&utm_medium=social&utm_campaign=blog-distribution&utm_content=amazon-rufus-optimization
```

**Strategy call CTA within a blog distribution post**
```
https://theroberthu.com/free-strategy-session?utm_source=linkedin&utm_medium=social&utm_campaign=blog-distribution&utm_content=strategy-call-cta
```

---

### 4. Email Signature

**Context:** The theroberthu.com link sitting in Robert's standard email signature on all sent emails.

**Homepage**
```
https://theroberthu.com?utm_source=email&utm_medium=signature&utm_campaign=brand
```

**Strategy call link (if used in signature)**
```
https://theroberthu.com/free-strategy-session?utm_source=email&utm_medium=signature&utm_campaign=brand&utm_content=strategy-call-cta
```

> **Note:** Signature traffic will appear in GA4 as `email / signature`. This is useful for seeing how much passive brand visibility your emails generate vs. active outreach clicks.

---

### 5. Blog Post Social Sharing — Twitter/X

**Context:** Sharing a blog post on Twitter/X. Replace slug with the actual post slug.

**Blog post link**
```
https://theroberthu.com/blog/[post-title-slug]?utm_source=twitter&utm_medium=social&utm_campaign=blog-distribution&utm_content=[post-title-slug]
```

**Example — chatgpt-shopping-pullback-sellers**
```
https://theroberthu.com/blog/chatgpt-shopping-pullback-sellers?utm_source=twitter&utm_medium=social&utm_campaign=blog-distribution&utm_content=chatgpt-shopping-pullback-sellers
```

**Strategy call CTA in a tweet**
```
https://theroberthu.com/free-strategy-session?utm_source=twitter&utm_medium=social&utm_campaign=blog-distribution&utm_content=strategy-call-cta
```

> **Note:** If you expand to other platforms, follow the same pattern: `utm_source=youtube`, `utm_source=newsletter`, etc. Keep `utm_medium=social` for social platforms and `utm_medium=email` for newsletters.

---

### 6. Strategy Call CTA Link — Context Matrix

The strategy call URL inherits the source/medium/campaign of wherever it appears. `utm_content` is always `strategy-call-cta`, optionally prefixed with the sequence day if inside a cold outreach sequence.

| Context | Full tagged URL |
|---|---|
| Cold outreach Day 1 | `https://theroberthu.com/free-strategy-session?utm_source=email&utm_medium=outreach&utm_campaign=cold-sequence&utm_content=day-1-strategy-call-cta` |
| Cold outreach Day 5 | `https://theroberthu.com/free-strategy-session?utm_source=email&utm_medium=outreach&utm_campaign=cold-sequence&utm_content=day-5-strategy-call-cta` |
| Cold outreach Day 12 | `https://theroberthu.com/free-strategy-session?utm_source=email&utm_medium=outreach&utm_campaign=cold-sequence&utm_content=day-12-strategy-call-cta` |
| LinkedIn organic | `https://theroberthu.com/free-strategy-session?utm_source=linkedin&utm_medium=social&utm_campaign=organic-engagement&utm_content=strategy-call-cta` |
| LinkedIn blog distribution | `https://theroberthu.com/free-strategy-session?utm_source=linkedin&utm_medium=social&utm_campaign=blog-distribution&utm_content=strategy-call-cta` |
| Email signature | `https://theroberthu.com/free-strategy-session?utm_source=email&utm_medium=signature&utm_campaign=brand&utm_content=strategy-call-cta` |
| Twitter/X | `https://theroberthu.com/free-strategy-session?utm_source=twitter&utm_medium=social&utm_campaign=blog-distribution&utm_content=strategy-call-cta` |

---

## GA4 Verification

After tagging goes live, confirm UTMs are flowing correctly before trusting any campaign data.

### Step 1 — Trigger a test click
Click one of your tagged links from outside the site (email client, LinkedIn, or a browser tab). Wait 30-60 seconds.

### Step 2 — Check Realtime
**GA4 > Reports > Realtime**
Look for your session under "Traffic sources." You should see the source/medium you just clicked. If it shows `(direct) / (none)`, the UTM either wasn't applied or was stripped by a redirect.

### Step 3 — Traffic Acquisition report
**GA4 > Reports > Acquisition > Traffic Acquisition**
Set the date range to include your test. Change the primary dimension to **Session source/medium** or **Session campaign**. Your tagged sessions should appear as distinct rows (e.g., `email / outreach`, `linkedin / social`).

### Step 4 — Check for (direct) bleed
If tagged traffic is landing in `(direct) / (none)`, the most common causes are:
- A redirect in the URL chain that strips query parameters (check if theroberthu.com redirects www to non-www or HTTP to HTTPS without passing params)
- A URL shortener that drops UTMs (avoid bit.ly or LinkedIn's native link shortener for tracked links)
- The Resend tracking pixel overwriting UTM data (check Resend's link-tracking settings)

### Step 5 — Confirm the strategy call page
If `/free-strategy-session` uses a third-party booking tool (e.g., Calendly embed), confirm whether GA4 receives the UTM data on that page or if the booking happens in an iframe. If it's an iframe, the UTM won't pass to the booking tool automatically. You'd track clicks to the CTA button as a GA4 event instead.

### Useful GA4 dimensions to cross-reference
| Dimension | Where to find it |
|---|---|
| Session source / medium | Traffic Acquisition report |
| Session campaign | Traffic Acquisition report (add secondary dimension) |
| Session manual ad content | Exploration > Free Form (not in standard reports) |
| Landing page + source/medium | Landing Page report with secondary dimension |

---

## Quick Reference — Parameter Values

| Parameter | Values in use |
|---|---|
| `utm_source` | `email`, `linkedin`, `twitter` |
| `utm_medium` | `outreach`, `social`, `signature` |
| `utm_campaign` | `cold-sequence`, `organic-engagement`, `blog-distribution`, `brand` |
| `utm_content` | `day-1`, `day-5`, `day-12`, `strategy-call-cta`, `day-1-strategy-call-cta`, `day-5-strategy-call-cta`, `day-12-strategy-call-cta`, `[post-title-slug]` |

---

*Keep this file updated when new campaigns or channels are added.*
