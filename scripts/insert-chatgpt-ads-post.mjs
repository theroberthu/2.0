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

const DESCRIPTION = 'OpenAI reached a $1B ad run rate in under 200 days. It did not build an audience for ads. It built ads for an audience it already had.'

// OpenAI primary sources, cited at the claims they support.
const SRC_MILESTONE = 'https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/'
const SRC_TESTING = 'https://openai.com/index/testing-ads-in-chatgpt/'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'chatgpt-ads-billion-revenue-run-rate-distribution',
  title: 'ChatGPT Ads Hit a $1 Billion Run Rate in 200 Days. The Audience Came First.',
  excerpt: 'OpenAI says ChatGPT Ads reached a $1 billion annualized revenue run rate in under 200 days. A run rate is an extrapolation, not collected revenue. The more useful question is how any ad business scales that fast, and the answer sits in a sentence about something else: more than a billion weekly active users were already there.',
  meta_title: 'ChatGPT Ads Hit a $1 Billion Run Rate in 200 Days. The Audience Came First.',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/chatgpt-ads-billion-revenue-run-rate-distribution.svg',
  category: 'Digital Marketing',
  tags: ['OpenAI', 'ChatGPT Ads', 'advertising', 'platform economics', 'monetization', 'conversational advertising'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['chatgpt-ads-self-serve-geo-still-wins-marketplace-sellers', 'amazon-ai-shopping-business-model', 'walmart-sparky-sponsored-prompts-ads'],
    featured_image_alt: 'An advertising business layered onto consumer distribution that already existed',
  },
  published_at: '2026-08-31T21:00:00.000Z',
  content: `<p>OpenAI <a href="${SRC_MILESTONE}" ${EXT}>announced today</a> that "in less than 200 days after launch, ChatGPT Ads has reached $1 billion in annualized revenue run rate."</p>

<p>Start with what that sentence does not say. A run rate is an extrapolation: it takes the current revenue pace and projects it forward twelve months. OpenAI has not said it collected a billion dollars, and it has not said it will. The claim is that the business is running at a pace which, if it held for a year, would produce that figure. Whether it holds is the open question.</p>

<p>With that established, the interesting question is not the number. It is how any advertising business gets to that pace in roughly six months.</p>

<h2>The audience was already there</h2>

<p>The answer is in OpenAI's announcement, in a sentence about something else. The company describes an "advertising-supported free tier that helps keep ChatGPT available to more than 1 billion weekly active users."</p>

<p>That is the whole story. OpenAI did not spend 200 days building an audience for an advertising platform. It spent 200 days building an advertising platform for an audience it already had.</p>

<p>What is unusual here is the sequence. ChatGPT reached massive consumer scale before OpenAI introduced an advertising business at all.</p>

<h2>What OpenAI thinks it is selling</h2>

<p>The company is explicit about why it believes the inventory is valuable, and the framing is worth reading closely.</p>

<p>Under a heading called "Where decisions take shape," OpenAI writes that people arrive with clear goals and explain "what they want to accomplish, what matters to them, and the constraints they face." It describes ChatGPT helping them "frame the decision, establish criteria, understand alternatives," and concludes that "discovery, consideration, and decision-making come together in a single experience."</p>

<p>That is a claim about context, not volume. The argument is not that ChatGPT has many users. It is that a meaningful share are mid-decision when the ad appears.</p>

<p>I want to be careful here. Not every conversation is commercial. Most are not. Conversational intent is genuinely different from search intent, and nobody has established it is worth more. OpenAI has an obvious interest in this framing. But the underlying observation seems right, and it is the same asset I described when <a href="/blog/retailers-ai-traffic-customer-ownership">assistants keep the context that produced the decision</a>. Ads launched into an environment where people were already deciding, rather than into a feed where attention has to be interrupted.</p>

<h2>Then the machinery arrived, fast</h2>

<p>The timeline in OpenAI's own posts is the part that supports the thesis.</p>

<p>Ads began as a <a href="${SRC_TESTING}" ${EXT}>U.S. test on February 9</a>, limited to logged-in adults on the Free and Go tiers, with Plus, Pro, Business, Enterprise, and Education excluded. Canada, Australia, and New Zealand followed in March. The UK, Mexico, Brazil, Japan, and South Korea came by August 11. Today the platform is in more than 40 countries, with self-service buying expanding across India, Europe, the Middle East, and North Africa.</p>

<p>The commercial infrastructure filled in on a similar clock. <a href="/blog/chatgpt-ads-self-serve-geo-still-wins-marketplace-sellers">Ads Manager arrived in May</a> and opened the platform to small and medium businesses, which OpenAI now says "represent a material share of the business." The partner ecosystem grew past 50 technology and measurement partners. CPC and outcome-optimized bidding now account for most campaigns, and Pixel and Conversions API have become, in OpenAI's words, "important foundations for measurement and optimization."</p>

<p>None of that is remarkable technology. Every mature ad platform has it. What is remarkable is the compression. Those layers took Google and Meta years, and they were building them while also acquiring the audience.</p>

<h2>The sequence is the strategic point</h2>

<p>Here is my interpretation rather than anything OpenAI has claimed.</p>

<p>The hardest thing to build in an advertising business is not the auction, the measurement stack, or the advertiser relationships. Those are difficult, expensive, and well understood. The hardest thing is large-scale habitual attention, because you cannot buy it reliably and you cannot rush it.</p>

<p>Once that distribution exists, the monetization problem changes. OpenAI still had to build the buying, measurement, optimization, and partner infrastructure, but it was building those systems on top of existing demand rather than trying to create an audience at the same time.</p>

<p>Which implies something broader. An AI product that reaches large consumer distribution before it has any monetization model has several available afterward: subscriptions, advertising, commerce, enterprise, infrastructure. The distribution is the durable asset. The monetization product is a later choice, and it can be changed.</p>

<h2>What a run rate does not establish</h2>

<p>A billion-dollar run rate is strong evidence that advertisers are willing to buy this inventory at meaningful scale. It does not prove much else.</p>

<p>It says nothing about margin, and OpenAI has disclosed nothing about the cost of serving these ads. It does not establish advertiser retention, the number separating a real ad business from a well-attended experiment. And it does not tell us whether ad load can rise without degrading the product.</p>

<p>OpenAI does cite outcomes: an ecommerce advertiser reporting 3x return on ad spend over 28 days, and a technology partner reporting that more than 80% of ad-driven ChatGPT traffic came from new customers. Both are company-selected examples with no disclosed methodology, sample, or category. Read them as illustrations rather than evidence.</p>

<h2>The honest counterargument</h2>

<p>The strongest objection is that the comparison flatters OpenAI.</p>

<p>Measuring 200 days from the ad launch rather than from ChatGPT's makes the growth look faster than the underlying achievement. The audience took years and enormous capital to assemble. Measured from the start of that effort, the number looks ordinary.</p>

<p>Early growth in new inventory is also partly experimental. Agencies test novel placements because they are novel, and some of that spend is a budget line for learning rather than a durable commitment. First-mover pricing tends to be favorable, which is a reason to try and not necessarily a reason to stay. Conversational ad inventory is also no longer scarce, with <a href="/blog/walmart-sparky-sponsored-prompts-ads">Walmart putting sponsored placements inside Sparky</a> and Amazon doing the same.</p>

<p>Then there is scale. Google, Meta, and Amazon run advertising businesses an order of magnitude larger and far more mature. A billion-dollar run rate is a strong start and a small number in that company. Early growth can come disproportionately from advertisers willing to experiment. Sustaining growth requires those budgets to survive novelty, measurement scrutiny, and renewal decisions.</p>

<p>And there is a tension OpenAI names but has not resolved. It says ads are "always clearly labeled and separate from ChatGPT's answers," that "advertising does not influence the answers ChatGPT provides," and that "advertisers do not receive access to people's private conversations." Those are meaningful commitments and I take them at face value. Holding them as ad load grows is a different problem from holding them during a pilot.</p>

<h2>Where this leaves me</h2>

<p>The remarkable part is not that ChatGPT Ads reached a billion-dollar run rate in under 200 days. It is that once the distribution and the decision context already existed, 200 days turned out to be enough.</p>

<p>That reorders how I think about AI products generally. The interesting question about a consumer AI company may not be how it plans to make money. It may be whether it can accumulate enough habitual attention that the question can be deferred, then answered quickly, and answered more than once. It is the pattern I found in commerce, where <a href="/blog/amazon-ai-shopping-business-model">an assistant becomes valuable by connecting to several businesses at once</a> rather than by charging for itself.</p>

<p>If audience and intent can now be built before anyone decides how to monetize them, what should we make of a company that has the distribution but has not yet chosen?</p>
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
