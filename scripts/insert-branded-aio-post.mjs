import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const envFile = readFileSync(join(__dirname, '..', '.env.local'), 'utf-8')
const envVars = {}
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) envVars[match[1].trim()] = match[2].trim()
})

const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.SUPABASE_SERVICE_ROLE_KEY
)

const DESCRIPTION = "AI Overviews now appear on most branded Google searches in two tracking datasets. The real change is not traffic. It is who writes the first description of your brand."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'google-ai-overviews-branded-search-brand-representation',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Google Now Explains Your Brand to People Who Already Know It',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Google AI Overviews on Branded Search: What Changed in 2026',
  excerpt: "In late September, AI Overviews spread across branded Google searches, from 5 of 98 bare brand names on July 1 to 63 of 100 on September 30 in Ahrefs' panel. Branded search did not overtake non-branded; it caught up. The open question is whether the answer sits above the brand's own result, and what it says when it does.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/google-ai-overviews-branded-search-brand-representation.svg',
  category: 'GEO & SEO',
  tags: ['AI Overviews', 'branded search', 'Google', 'brand representation', 'GEO', 'AI search'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['google-search-console-generative-ai-visibility', 'anthropic-project-swap-agentic-commerce-shopper-preferences', 'ai-shopping-retailer-recommendation-gap-lightspeed-vaer'],
    featured_image_alt: 'A branded Google search where an AI-generated description of the brand, built from third-party sources, appears alongside the brand\'s own result',
  },
  published_at: new Date().toISOString(),
  content: `<p>Most of what I have written about AI search is a discovery problem: whether the machine finds you, cites you or recommends you when a shopper describes a need without naming anyone.</p>

<p>Branded search was supposed to be the part after that. Someone saw you on a creator's feed, in a marketplace, in a store, and typed your name. Historically that query behaved more like navigation than discovery. It was never fully yours, because ads, Knowledge Panels and Wikipedia were always on the page, but it was one of the most defensible moments in the whole search journey. In late September, Google started answering it.</p>

<h2>What was actually measured</h2>

<p><a href="https://ahrefs.com/blog/ai-overviews-on-branded-searches/" ${EXT}>Ahrefs published the most transparent dataset on October 2</a>. It covers 232.8 million U.S. desktop search result crawls from July through September. Those are crawls, not people searching. Of them, 92.5 million were branded keywords, which includes queries like a brand plus "login" or "pricing," not only the bare name.</p>

<p>On September 29, AI Overviews appeared on 82.91% of branded keyword results in that set. That single day is the figure in every headline.</p>

<p>The more useful test is a separate panel. Ahrefs checked bare brand names for 100 companies from Interbrand's Best Global Brands list at 14 weekly checkpoints. On July 1, five of 98 usable results showed an AI Overview. On September 30, 63 of 100 did. This is the evidence that matters, because a bare brand name is as close to pure navigational intent as search data gets.</p>

<h2>The number everyone is quoting is the wrong one</h2>

<p>Read the monthly averages instead of the peak. Branded keywords triggered AI Overviews 61.3% of the time in July and 73.3% in September. Non-branded keywords were at 73.5% and 78.3%.</p>

<p>So branded search did not become the frontier of AI Overviews. In every month Ahrefs measured, it was still the laggard. What changed is that the gap closed, from 12.2 points to 5, which is convergence rather than takeover.</p>

<p><a href="https://www.demandsphere.com/blog/branded-ai-overviews-september-2026/" ${EXT}>DemandSphere's daily series</a>, published a day earlier across all markets and devices, shows how it happened. Its tracked branded keywords sat near 27% for most of September, then jumped to 57% on September 18, fell back to 31% the next day, climbed to 57% on September 23, fell to 30% on September 25, and only then went to 69%, 90% and 82% across September 26 to 29. Google has not announced anything. That pattern looks less like a rollout than like something being switched on and off, which means a given brand's exposure in September could change from one day to the next.</p>

<p>Ahrefs measured 82.91% on U.S. desktop that same September 29, and DemandSphere 82.06% across all markets and devices. Those are different populations, so the near match is a coincidence rather than a confirmation, and I would not average them.</p>

<h2>Above you, or beside you</h2>

<p>Whether this matters depends almost entirely on where the answer sits, and here the sources disagree.</p>

<p>Ahrefs found 48 of the 63 brand-name AI Overviews in position one, with an average position of 1.49. <a href="https://www.seroundtable.com/google-ai-overviews-large-brand-names-42195.html" ${EXT}>Barry Schwartz, testing the same week</a>, reported that most of the examples he checked appeared mid-page, below the company's own result, with Adobe a visible exception.</p>

<p>Those are different methods. Ahrefs does not define how it ranks an AI Overview against a Knowledge Panel, sitelinks or ads, and a crawler position index is not what a person sees. But the disagreement is the whole question. An answer above your own site is an interception. An answer below it is an annotation.</p>

<p>Nobody has measured a branded click yet. <a href="https://searchengineland.com/google-ai-overviews-jump-branded-queries-september-492962" ${EXT}>Search Engine Land noted</a> that neither Chris Long's original test nor DemandSphere's data measured clicks. So any claim about lost traffic is premature, and the case for paying attention has to rest on what the answer says.</p>

<h2>What the answer says, and who supplies it</h2>

<p>Across the 57 brand-name answers where Ahrefs could see the sources, Wikipedia was cited in 41, YouTube in 22, LinkedIn in 13 and Yahoo Finance in 9.</p>

<p>The fear in most coverage is competitors. The data does not support it. Only two of 58 answers discussed a competitor, both in context: Pepsi's mentioned Coca-Cola in describing the cola wars, Intel's mentioned TSMC and NVIDIA. Only one competitor-owned site appeared across 57 source lists. The shift is third-party interpretation, not hijacking.</p>

<p>A Knowledge Panel already did some of this, and that is the strongest objection. The difference is form. A panel states structured facts. An overview writes a narrative, from several sources, and can answer a question the shopper did not quite ask. Ann Smarty, quoted by Ahrefs, flagged cited videos that were not from the brand's own account and could carry outdated product information. That is a new class of error, and a panel could not make it.</p>

<p>The shopper already searched for you. Google still has something to say about you.</p>

<h2>Why you cannot see it</h2>

<p>In August I wrote that <a href="/blog/google-search-console-generative-ai-visibility">Search Console's generative AI report shows impressions but no queries and no clicks</a>. The query type that just changed is precisely the one a brand cannot inspect in the only first-party tool it has.</p>

<p>Earlier this month I wrote about <a href="/blog/anthropic-project-swap-agentic-commerce-shopper-preferences">Anthropic's finding that agents fail mostly by misunderstanding the person they represent</a>. This is the same problem on the brand side. <a href="/geo">GEO</a> asks whether the machine discovers you. This asks whether it describes you accurately once someone already asked for you by name.</p>

<h2>What it costs a brand</h2>

<p>Here is the part I would put in front of a commerce team. Branded search usually comes after the demand was created somewhere else: a creator's video, a marketplace listing, a retail media placement, a friend's recommendation. The brand paid for that intent. Then the shopper finally types the name, and the first account of the brand they read may be Google's, assembled from Wikipedia, YouTube and LinkedIn rather than from anything the brand wrote.</p>

<p>That makes three jobs practical rather than theoretical. Give someone ownership of it: each week, search your main brand terms logged out on desktop and on mobile, record what Google writes and where it sits relative to your own result, and keep the log, because Search Console will not. When the answer is wrong, fix the page it cites, whether that is the Wikipedia entry, the LinkedIn company page or an outdated review video, because editing your own site does not change a synthesis built from other people's pages. And treat the answer as part of the paid funnel: if you are paying to send people to search your name, check what they read when they get there, the same way you would check a landing page.</p>

<p>If someone types your company's name tomorrow, do you know what Google will tell them before they reach you?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
