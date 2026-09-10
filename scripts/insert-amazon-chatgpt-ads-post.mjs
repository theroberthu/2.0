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

const DESCRIPTION = 'Amazon Ads is piloting ChatGPT advertising with OpenAI. What the announcement confirms, what it leaves out, and why OpenAI still controls delivery.'

// Primary sources, cited at the claims they support.
const SRC_AMZN = 'https://advertising.amazon.com/library/news/amazon-ads-chat-gpt-advertising-integration'
const SRC_MCP = 'https://advertising.amazon.com/library/news/amazon-ads-mcp-server-open-beta'
const SRC_OAI = 'https://openai.com/index/new-ways-to-buy-chatgpt-ads/'
const SRC_OAI_HELP = 'https://help.openai.com/en/articles/20001047-ads-in-chatgpt'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'amazon-ads-chatgpt-openai-partnership',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Amazon Can Now Sell ChatGPT Ads. The Data Did Not Come With It.',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Amazon Ads and ChatGPT: What the OpenAI Partnership Does',
  excerpt: "Amazon Ads announced a ChatGPT advertising partnership with OpenAI, now in pilot with select US advertisers. The announcement confirms a buying route into ChatGPT inventory. It says nothing about Amazon commerce signals, catalog data, measurement, or attribution on that surface, and OpenAI's own documentation says its ads system controls all delivery decisions.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/amazon-ads-chatgpt-openai-partnership.svg',
  category: 'Digital Marketing',
  tags: ['Amazon Ads', 'ChatGPT Ads', 'Amazon DSP', 'retail media', 'OpenAI', 'commerce media'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['chatgpt-ads-self-serve-geo-still-wins-marketplace-sellers', 'chatgpt-ads-billion-revenue-run-rate-distribution', 'walmart-sparky-sponsored-prompts-ads'],
    featured_image_alt: 'An advertiser buying ad placements inside an AI assistant it does not own, while the commerce data and measurement stay behind on the retailer side',
  },
  published_at: '2026-09-10T18:00:00.000Z',
  content: `<p>Amazon Ads <a href="${SRC_AMZN}" ${EXT}>announced a partnership with OpenAI</a> today. Advertisers can extend Amazon Ads campaigns into ChatGPT, and a small group of US brands is already testing it.</p>

<p>The obvious reading is that retail media has followed the shopper into AI. Amazon owns the deepest commerce data in the business, ChatGPT is where a growing share of product research happens, and here they are together.</p>

<p>That reading runs ahead of the announcement. What Amazon confirmed is narrower and, I think, more interesting for what it leaves out.</p>

<h2>What the announcement says</h2>

<p>It is short. Amazon Ads has a partnership with OpenAI to support advertising in ChatGPT. Advertisers can expand their Amazon Ads campaigns with a conversational ad experience there. Select advertisers in the US are testing it as a pilot. Delta Vacations is named as one of them.</p>

<p>The quoted executive is Chris Conetta, Director of Omnichannel Supply at Amazon DSP, and the closing link points to Amazon DSP. Both are strong signals that Amazon is treating ChatGPT as a new supply source inside its broader advertising business. The release points toward Amazon DSP without explicitly naming it as the buying path.</p>

<p>Now the list of things the announcement does not say, which is longer. It does not say Amazon audience or commerce signals inform which ads appear. It does not mention product catalog or ASIN data. It does not describe creative generation, bidding mechanics, optimization, or conversion attribution. It says nothing about Amazon Marketing Cloud, nothing about placement-level reporting, and nothing about whether ChatGPT activity appears separately in Amazon DSP.</p>

<p>None of that is a criticism of a pilot announcement. It is just what is there and what is not.</p>

<h2>This is not the February thing, and the direction matters</h2>

<p>Worth clearing up, because the two get conflated.</p>

<p>In February, Amazon opened its <a href="${SRC_MCP}" ${EXT}>Ads MCP Server</a>, which lets AI assistants including ChatGPT, Claude and Gemini call Amazon Ads APIs and operate campaigns through natural language. That runs one way: the assistant reaches into Amazon's advertising system.</p>

<p>Today runs the other way. Amazon's advertising system reaches into the assistant. Same two companies, opposite architecture, and only the second one puts Amazon in the position of buying inventory it does not own.</p>

<h2>The bound nobody should ignore</h2>

<p>Here is the part that constrains every ambitious interpretation of this deal, and it comes from OpenAI rather than Amazon.</p>

<p>When OpenAI <a href="${SRC_OAI}" ${EXT}>described how buying partners work</a> in its ads ecosystem, it said those partners help support campaign budgeting, bidding and advertising creative, while OpenAI's ads system controls all delivery decisions. OpenAI has been equally direct that <a href="${SRC_OAI_HELP}" ${EXT}>ads run on separate systems from the chat model</a>, that advertisers cannot shape or rank ChatGPT's responses, and that advertisers get aggregated performance data rather than access to conversations.</p>

<p>So Amazon is not choosing which ad a person sees. It is not touching the organic answer. It is not reading anyone's chat. Whatever Amazon knows about shoppers, the selection decision sits with OpenAI.</p>

<p>That matters because the thing that makes retail media valuable is not the ad slot. It is the commerce data and the closed loop behind the slot. On the evidence published so far, <a href="/blog/retailers-ai-traffic-customer-ownership">the slot travelled and the loop did not</a>.</p>

<h2>What actually changed</h2>

<p>Something real did happen, and it is worth naming precisely.</p>

<p>An advertiser who already plans, buys and reports in Amazon Ads can now reach ChatGPT without opening a new platform, learning a new interface, or signing a new contract. That is a distribution and workflow change, and distribution changes are how ad platforms actually scale. OpenAI gets access to Amazon's advertiser base without building the sales organization to court it, which is <a href="/blog/chatgpt-ads-billion-revenue-run-rate-distribution">a faster path than the one it has been building</a>.</p>

<p>For Amazon, this is consistent with a decade of behavior. Amazon DSP has bought third-party inventory for years. Adding a large new supply source is the ordinary version of this story, not the exotic one.</p>

<p>I would also keep the previous argument on the table rather than quietly retiring it. When ChatGPT opened self-serve ads, <a href="/blog/chatgpt-ads-self-serve-geo-still-wins-marketplace-sellers">I argued the spend would compete with retail media budgets</a> brands were already committing across Amazon, Walmart and elsewhere, and that adding it without proven returns was reallocation rather than new demand. Nothing here contradicts that. A brand can buy ChatGPT ads through Amazon and still be moving the same dollar. The buying route changed. The budget question did not.</p>

<h2>The honest counterargument</h2>

<p>The simplest explanation is that Amazon is a demand partner here, one of several, and that OpenAI will keep adding others. Amazon would then be a distribution channel for ChatGPT inventory rather than an architecture for it.</p>

<p>I think that is probably the right read today. The pilot is small, US only, and the named launch brand sells vacation packages rather than anything with an ASIN, which is a hint that this is DSP demand rather than retail demand.</p>

<p>There is a version where this becomes more. If Amazon's audiences begin informing targeting on that surface, or if ChatGPT-driven purchases become measurable inside Amazon Marketing Cloud, then retail media really would have travelled and the comparison to <a href="/blog/walmart-sparky-sponsored-prompts-ads">a retailer monetizing its own assistant</a> stops being a comparison at all. None of that is announced. Some of it may never be technically or commercially possible given who controls delivery.</p>

<p>And Amazon's scale makes this hard to generalize. A smaller retail-media network cannot negotiate its way onto a major AI platform, so if this pattern holds it concentrates rather than distributes the opportunity.</p>

<h2>Where this leaves me</h2>

<p>The useful question this raises is about what retail media actually is.</p>

<p>If it is defined by where the ad appears, then Amazon just extended it into a surface it does not own, and the definition is already loose enough to survive that. If it is defined by the commerce data and measurement behind the ad, then nothing has moved yet, because the published evidence puts selection, delivery and conversation context on OpenAI's side of the line.</p>

<p>I lean toward the second definition, which is why I would not call this retail media moving into ChatGPT. I would call it Amazon selling access to ChatGPT, using the advertiser relationships it already has. That is a real commercial advantage and a smaller claim than the announcement invites.</p>

<p>Watch the measurement disclosures rather than the partnership announcements. If Amazon starts reporting ChatGPT performance the way it reports its own inventory, the architecture will have changed and someone will have had to say so.</p>

<p>If a retailer sells advertising on a surface it does not own, against an answer it does not influence, using data it has not been shown to contribute, what part of that is still retail media?</p>
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
