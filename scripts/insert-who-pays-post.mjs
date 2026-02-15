import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { generateOgImage } from './generate-og-image.mjs'

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

const ogImagePath = generateOgImage(
  'who-pays-when-ai-agents-fail',
  'Who Pays When AI Agents Make Mistakes?',
  'The Messy Middle'
)
console.log('Generated OG image:', ogImagePath)

const post = {
  slug: 'who-pays-when-ai-agents-fail',
  title: 'Who Pays When AI Agents Make Mistakes?',
  excerpt: 'Teams are deploying AI agents before having internal conversations about accountability. The real risk is not AI mistakes. It is the ambiguity around who owns the resolution when things go wrong.',
  meta_title: 'Who Pays When AI Agents Make Mistakes?',
  meta_description: 'AI agents are making real decisions in commerce. Robert Hu explores why the accountability conversation matters more than the technology, and how to structure it.',
  og_image: ogImagePath,
  category: 'The Messy Middle',
  tags: ['AI accountability', 'AI agents', 'agentic commerce', 'AI risk', 'team leadership'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'Who is responsible when an AI agent makes a mistake in commerce?',
        a: 'There is no universal answer, and that is the problem. Most teams deploy AI automation before having an internal conversation about responsibility. The accountability question needs to be answered by specific stakeholders before deployment, not after the first incident.'
      },
      {
        q: 'What should teams discuss before deploying AI agents?',
        a: 'Ask this question out loud with stakeholders present: If this AI makes a decision that costs us a customer, who in the room right now would own the resolution, and do they know that? This surfaces gaps in escalation protocols, monitoring ownership, and documentation of accountability.'
      },
      {
        q: 'How does ambiguity around AI liability affect business risk?',
        a: 'Ambiguity amplifies risk perception. Without a clear owner for AI decisions, every mistake feels bigger than it is. The pattern is: excitement, first incident, blame scramble, overcorrection. Leadership pulls back on AI autonomy entirely, and progress stalls. The incident itself is often minor. The lack of clarity makes it painful.'
      },
      {
        q: 'How does AI accountability affect customer trust?',
        a: 'Customer trust in AI-driven experiences depends on whether customers feel someone is accountable when things go wrong. In traditional commerce, there is a manager to talk to and a return process that feels human. With AI agents, that visibility disappears. Brands that cannot answer the accountability question clearly lose trust fast.'
      },
      {
        q: 'What are the hardest AI accountability problems beyond payments?',
        a: 'The hardest problems are upstream from payments: recommendation accountability (who owns mismatched suggestions), intent interpretation (how to course-correct when AI misreads customer intent), escalation paths (how seamlessly AI hands off to humans), and feedback loops (how you know if AI decisions are improving over time).'
      }
    ],
    related_services: ['digital-transformation'],
    related_posts: ['clawdbot-decision-fog', 'moltbook-ai-agents-social'],
    featured_image_alt: 'Business team discussing AI agent accountability and decision ownership for commerce workflows'
  },
  published_at: '2026-01-06T12:00:00.000Z',
  content: `<p>In the past few months, Robert Hu has had a version of the same conversation with at least a dozen founders and operators. It usually starts with excitement about agentic commerce, AI systems that can browse, compare, and even buy on behalf of customers. But then the tone shifts: "What happens when the agent messes up?" "Who is on the hook if it recommends the wrong thing?" These are not hypothetical edge cases anymore.</p>

<p>As AI agents start making real decisions in commerce, recommending products, initiating purchases, handling returns, the question of accountability is becoming urgent. And the real risk is not AI mistakes. It is that most teams have not talked about who owns the resolution.</p>

<h2>Who Is Responsible When an AI Agent Makes a Mistake?</h2>

<p>Teams are deploying AI automation before they have had a single internal conversation about responsibility. Not because they do not care, but because the pressure to experiment is intense. There is a fear of being left behind, of not having an "AI strategy" to point to.</p>

<p>So they ship something. A chatbot that can place orders. A recommendation engine with more autonomy. An agent that handles customer service escalations. And then, when something goes wrong, the finger-pointing begins. The problem is not that teams lack legal frameworks for AI liability. It is that they have not agreed on what "accountability" even means internally before deploying automation.</p>

<h2>How Ambiguity Makes Every Mistake Worse</h2>

<p>When there is no clear owner for AI decisions, every mistake feels bigger than it is. Ambiguity creates anxiety, not just for customers, but for the teams managing these systems.</p>

<p>Consider a scenario: an AI shopping agent recommends a product that a customer later returns. Was that a bad recommendation? A mismatch in preference data? A failure in the underlying model? Or just normal customer behavior that would have happened anyway? Without clarity on what the AI is supposed to optimize for and who is responsible for monitoring its decisions, every outcome becomes a source of debate.</p>

<h3>The Pattern That Keeps Repeating</h3>
<ol>
<li><strong>Excitement phase:</strong> Team deploys AI automation with minimal guardrails, focused on proving value fast</li>
<li><strong>First incident:</strong> Something goes wrong, a customer complains, a transaction fails, or an edge case surfaces</li>
<li><strong>Blame scramble:</strong> No one knows who should own the fix. Engineering says it is a product issue. Product says it is an operations issue. Operations says they were not told the AI could do that.</li>
<li><strong>Overcorrection:</strong> Leadership pulls back on AI autonomy entirely. Progress stalls.</li>
</ol>

<p>The irony is that the incident itself is often minor. What makes it painful is the lack of clarity around responsibility.</p>

<h2>Where Trust and Clarity Intersect</h2>

<p>Customer trust in AI-driven experiences is not just about whether the AI gets things right. It is about whether customers feel like someone is accountable when it does not.</p>

<p>Think about how traditional commerce handles mistakes. If a store associate recommends the wrong product, there is a clear path to resolution, a manager to talk to, a return process that feels human. The mistake is annoying, but it does not break trust because there is a visible system for accountability.</p>

<p>With AI agents, that visibility disappears. When an algorithm makes a decision, customers do not know who to hold responsible. And if the brand cannot answer that question clearly either, trust erodes fast.</p>

<p><strong>The trust equation:</strong> Customer trust in AI commerce = (value delivered) + (clarity when things go wrong). You cannot control every outcome, but you can control how clearly you own them.</p>

<h2>What Should Teams Discuss Before Deploying AI Agents?</h2>

<p>The accountability problems that matter most are not about payments. The harder problems are upstream:</p>

<ul>
<li><strong>Recommendation accountability:</strong> When an AI suggests products that do not fit, who owns that mismatch?</li>
<li><strong>Intent interpretation:</strong> When an agent misreads what a customer wants, how do you course-correct?</li>
<li><strong>Escalation paths:</strong> When the AI hits its limits, how seamlessly does it hand off to a human?</li>
<li><strong>Feedback loops:</strong> How do you know if the AI's decisions are actually improving over time?</li>
</ul>

<p>If you are deploying AI agents in any part of your commerce stack, here is a question worth asking out loud with your stakeholders: <strong>"If this AI makes a decision that costs us a customer, who in the room right now would own the resolution, and do they know that?"</strong></p>

<p>Whatever it surfaces, you are better off knowing now than after the first incident.</p>

<h2>The Real Risk</h2>

<p>AI agents will make mistakes. That is the nature of probabilistic systems operating in complex environments. The question is not how to eliminate errors. It is how to build systems, organizational, not just technical, that can absorb them without breaking trust.</p>

<p>The brands that win in agentic commerce will not be the ones with perfect AI. They will be the ones who have done the unglamorous work of defining accountability before they need it. Who have clear escalation paths that customers actually experience as responsive. Who treat AI decisions as shared team outputs, not black-box magic.</p>

<p>The liability conversation is not a legal exercise to hand off to counsel. It is a strategic clarity exercise that belongs in your next team meeting.</p>

<p>If you are navigating how AI fits into your commerce operations, <a href="/services/digital-transformation">a digital transformation strategy</a> can help you build the accountability frameworks alongside the technology. For more on the tension of adopting powerful AI tools, see <a href="/blog/clawdbot-decision-fog">the decision fog around Clawdbot</a>.</p>`
}

async function insertPost() {
  const { data: existing } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', post.slug)
    .single()

  if (existing) {
    console.log('Post already exists, updating...')
    const { data, error } = await supabase
      .from('blog_posts')
      .update(post)
      .eq('slug', post.slug)
      .select()
    if (error) { console.error('Error updating post:', error); process.exit(1) }
    console.log('Post updated successfully:', data[0].id)
  } else {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(post)
      .select()
    if (error) { console.error('Error inserting post:', error); process.exit(1) }
    console.log('Post inserted successfully:', data[0].id)
  }
  console.log('Slug:', post.slug)
  console.log('Title:', post.title)
}

insertPost()
