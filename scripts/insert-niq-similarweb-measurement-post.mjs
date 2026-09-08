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

const DESCRIPTION = 'NIQ and Similarweb are building Agentic Commerce Measurement for Q4 2026. What it could connect, what it still cannot see, and why the click mattered.'

// Primary sources, cited at the claims they support.
const SRC_NIQ = 'https://nielseniq.com/global/en/news-center/2026/niq-and-similarweb-advance-agentic-commerce-measurement-for-the-ai-shopping-era/'
const SRC_SW_ADS = 'https://ir.similarweb.com/news-events/press-releases/detail/158/similarweb-unlocks-the-black-box-of-ai-ad-placements-across-chatgpt-google-ai-overviews-and-ai-mode'
const SRC_NIQ_74 = 'https://nielseniq.com/global/en/news-center/2026/74-of-shoppers-use-ai-for-discovery-niq-showcases-what-that-means-for-the-consumer-purchase-journey-in-new-report/'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'niq-similarweb-agentic-commerce-measurement',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Agentic Commerce Has a Measurement Problem',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'NIQ and Similarweb Agentic Commerce Measurement Explained',
  excerpt: 'NIQ and Similarweb announced a collaboration on measurement for AI shopping. It does not exist yet, and the problem statement is the interesting part: a shopper can compare four brands inside an AI answer and click once, leaving three of them with no record they were ever considered.',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/niq-similarweb-agentic-commerce-measurement.svg',
  category: 'E-commerce Strategy',
  tags: ['NIQ', 'Similarweb', 'agentic commerce', 'AI measurement', 'attribution', 'AI visibility'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['google-search-console-generative-ai-visibility', 'retailers-ai-traffic-customer-ownership', 'amazon-ai-shopping-business-model'],
    featured_image_alt: 'A shopping journey where discovery and comparison happen inside an AI answer, leaving no observable record for the brands that were considered but never clicked',
  },
  published_at: '2026-09-08T13:00:00.000Z',
  content: `<p>A brand can open three dashboards on the same morning and still not answer a simple question.</p>

<p>Sales sit in one. Site traffic sits in another. Search visibility sits in a third. Together they describe a shopper who searched, clicked, browsed, and bought. None of them describes a shopper who asked an assistant for a recommendation, compared four products inside the answer, and never visited three of those brands at all.</p>

<p>On September 2, NIQ and Similarweb <a href="${SRC_NIQ}" ${EXT}>announced they are building something for that gap</a>. The diagnosis in the announcement is more interesting than the news in it.</p>

<h2>What they actually announced</h2>

<p>The two companies announced a collaboration on a product NIQ calls Agentic Commerce Measurement. NIQ contributes "product intelligence, consumer behavior data and retail sales measurement." Similarweb contributes what the release calls "the foundational digital data," adding visibility into AI-driven consumer behavior inside generative AI platforms and along the agentic path to purchase.</p>

<p>It does not exist yet. NIQ's own FAQ asks whether Agentic Commerce Measurement is available today and answers with one word: "No." An initial version is expected in Q4 2026, beginning with a focused set of categories and markets. Planned coverage spans ChatGPT, Gemini, Google AI Mode, Perplexity and Claude, across five areas: consumer intent, agentic shelf visibility, product content readiness, AI-driven traffic, and AI-driven conversion.</p>

<p>So this is a roadmap rather than a capability, and I would not plan a budget around it. What makes it worth reading is the problem statement. NIQ writes that existing measurement approaches "provide visibility into areas such as retail, ecommerce, search and media, but do not provide a comprehensive view of the AI-mediated purchase journey." That is a measurement company describing a hole in the measurement stack it helped build.</p>

<h2>The click was never just traffic</h2>

<p>Web analytics works well because shopping journeys used to contain hyperlinks.</p>

<p>An impression, a click, a session, a conversion. Many of the most important steps left records on surfaces somebody could instrument, and the click often stitched those records into a usable sequence. Attribution has always been contested, but the arguments were about how to weight observable events. The events themselves existed.</p>

<p>An AI answer can remove that transition without removing the influence. A shopper asks for the best option under a hundred dollars, reads a comparison of four products, and clicks once. Four brands were in the consideration set. Three of them have no record that they were ever in the running.</p>

<p>This is the part I keep returning to. The click was not only a traffic event. It was the mechanism that made influence observable at all.</p>

<h2>Visibility is arriving before traffic</h2>

<p>We are getting the first half of the picture before the second.</p>

<p>I wrote in August about <a href="/blog/google-search-console-generative-ai-visibility">Google Search Console's new generative AI report</a>, which shows impressions inside AI Overviews and AI Mode. It reports pages, countries, devices and dates. It does not report queries, clicks, or click-through rate, and it does not separate the two surfaces. Real progress, and a genuinely partial instrument: I can see that Google surfaced a page, and I cannot see what was asked or what happened next.</p>

<p>Commerce operators face a harder version of the same problem, because visibility is not the economic question. The question is whether the visibility changed a purchase. It is the same asymmetry retailers run into when <a href="/blog/retailers-ai-traffic-customer-ownership">the assistant keeps the conversation and the merchant gets the order</a>.</p>

<h2>Why neither dataset answers it alone</h2>

<p>The shape of the collaboration makes sense even though the product does not.</p>

<p>Traffic data is good at visits. It can already show that <a href="/blog/adobe-ai-traffic-393-percent-retail">AI-referred traffic arrived and that it behaves differently once it lands</a>. It is structurally weaker on brands that were considered and never clicked, because there is no visit to observe.</p>

<p>Retail sales data has the opposite shape. It shows what sold, where, and when, with real transactions underneath. It does not carry the reason. A unit that sold because an assistant recommended it and a unit that sold because it was on an endcap look identical in the data.</p>

<p>Each dataset is missing something. They are not missing the same thing.</p>

<h2>What is actually being reconstructed</h2>

<p>This next part is my interpretation rather than anything either company claimed.</p>

<p>The measurement problem in agentic commerce is not attribution after the click. It is reconstruction of what happened before a click existed.</p>

<p>Traditional analytics assumes exposure happens on a trackable page and that consideration happens somewhere an operator can instrument. AI shopping moves both inside the answer. NIQ's second focus area, agentic shelf visibility, is described as where products appear when AI assistants recommend options and how a brand compares with competitors. That is an attempt to instrument the consideration set itself rather than the traffic it happens to produce.</p>

<p>If it works, the useful unit expands beyond the visit to include something closer to the appearance: whether the product entered the machine's consideration set at all.</p>

<h2>The objections that survive</h2>

<p>Attribution was already broken before any of this. Multi-touch journeys were never fully observable, and measurement vendors have been selling solutions to that for twenty years.</p>

<p>The sharper issue is that neither company has explained how the joint product will work, and the methodology is the entire question. Similarweb's most recent public account of how it observes activity inside AI platforms comes from a <a href="${SRC_SW_ADS}" ${EXT}>separate August announcement about AI advertising</a>, where it says its insights are "drawn from real user panel conversations, not synthetic prompts." A panel is a legitimate method. It is also a sample rather than a census, and it is observation of users rather than access to the platform. Similarweb's own standard disclaimer describes its outputs as "estimated metrics and digital insights generated by Similarweb using its proprietary algorithms."</p>

<p>I want to be careful here. That August description covers the AI Ads dataset, not this collaboration. Neither release explains the methodology of the joint product.</p>

<p>And the strongest objection outlives all of it. The platform that owns the most important part of this journey does not expose it. OpenAI and Google can observe the prompt or query and what their systems returned. Third parties cannot see the full decision process behind those outputs. Joining two datasets widens the surface you can correlate across. It does not by itself establish that AI created demand rather than rerouting demand that was already there, which is the same <a href="/blog/amazon-ai-shopping-business-model">incrementality question that keeps surfacing everywhere AI touches commerce</a>.</p>

<p>Worth noting too that the channel's size is still soft. <a href="${SRC_NIQ_74}" ${EXT}>NIQ's own August research</a> says nearly 75% of shoppers use AI during product discovery, and in the same release says 20% of consumers already use AI as part of the shopping process. Both numbers come from NIQ, neither is defined in the release, and the distance between them is most of the argument about how material this is today.</p>

<h2>What remains true</h2>

<p>The structural change holds regardless of whether this particular product ships well.</p>

<p>Discovery, comparison, and recommendation are moving onto surfaces brands do not own and cannot instrument. Measurement has to follow them, and the honest position today is that it has not yet.</p>

<p>For years commerce measurement started with the click. Agentic commerce may force it to start one step earlier, with whether a product entered the consideration set at all.</p>

<p>If an assistant considered your product, recommended a competitor, and the shopper never visited your site, what would your analytics show?</p>
`,
}

const { data: existing } = await supabase
  .from('blog_posts')
  .select('id, slug')
  .eq('slug', post.slug)
  .maybeSingle()

if (existing) {
  const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id)
  if (error) { console.error('Update failed:', error); process.exit(1) }
  console.log('Post updated successfully:', existing.id)
} else {
  const { data, error } = await supabase.from('blog_posts').insert(post).select('id').single()
  if (error) { console.error('Insert failed:', error); process.exit(1) }
  console.log('Post inserted successfully:', data.id)
}
console.log('URL: https://theroberthu.com/blog/' + post.slug)
