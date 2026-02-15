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
  'clawdbot-decision-fog',
  'The Decision Fog Around Clawdbot',
  'The Messy Middle'
)
console.log('Generated OG image:', ogImagePath)

const post = {
  slug: 'clawdbot-decision-fog',
  title: 'The Decision Fog Around Clawdbot',
  excerpt: 'I see the potential of browser-based AI agents like Clawdbot. I am just not sure I am ready. The honest answer to whether you should adopt powerful AI tools is usually a question back: have you built the systems they need?',
  meta_title: 'The Decision Fog Around Clawdbot',
  meta_description: 'Robert Hu on the honest tension of adopting AI agents like Clawdbot. The real question is not whether the tool works, but whether you have built the foundation it needs.',
  og_image: ogImagePath,
  category: 'The Messy Middle',
  tags: ['Clawdbot', 'AI agents', 'AI adoption', 'decision making', 'building foundations'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What is Clawdbot and why is it significant?',
        a: 'Clawdbot (now rebranded to Moltbot) is a browser-based AI agent that can operate your browser, handle email, and execute tasks autonomously. Unlike chatbots you babysit, it functions more like a digital teammate that can take actions in your systems. It represents the next step in AI agent capability.'
      },
      {
        q: 'What foundation do you need before using AI agents like Clawdbot?',
        a: 'You need context documents (.md files) explaining your projects, preferences, and constraints. You need SOPs clear enough to hand a task to someone new. You need organized workflows and folder structures. Most importantly, you need prior experience managing AI agents in more controlled environments.'
      },
      {
        q: 'What are the main risks of adopting browser-based AI agents?',
        a: 'Key risks include hallucination (AI agents can confidently do the wrong thing), brand voice drift (the AI speaks for you but not quite like you), and security concerns (the agent operates in your browser with access to sensitive information, client data, and accounts).'
      },
      {
        q: 'How do I know if I am ready for advanced AI agent tools?',
        a: 'Ask yourself: How long have you been using AI agents (not just chatbots)? Have you used tools like Cowork where you learned to give instructions and refine output? Have you built the documentation, processes, and structure that make delegation possible? If most answers are no, start with foundation work first.'
      },
      {
        q: 'Is it okay to wait before adopting new AI tools?',
        a: 'Yes. Input quality determines output quality. If you hand a powerful AI agent a mess, you get chaos back. Doing the foundation work first, building context documents, SOPs, and organized workflows, is what determines whether a tool becomes a genuine multiplier or something you try and abandon.'
      }
    ],
    related_services: ['digital-transformation'],
    related_posts: ['who-pays-when-ai-agents-fail', 'moltbook-ai-agents-social'],
    featured_image_alt: 'A person hesitating before adopting a powerful AI tool, representing the decision fog of AI agent adoption'
  },
  published_at: '2026-01-25T12:00:00.000Z',
  content: `<p>There is a particular kind of fog that settles when you are standing at the edge of something genuinely powerful. Not confusion, exactly. More like the pause before a decision you know will change how you work, and you are not quite sure if you are ready for that change.</p>

<p>That is where I am with Clawdbot. I have watched the demos. I have seen what it can do. The promise is real: an AI agent that can operate your browser, handle your email, execute tasks without you being in the loop for every step. Not a chatbot you have to babysit. Something closer to a digital teammate who can actually do things in your systems.</p>

<p>And I find myself hesitating. Not because I do not believe it works. Because I am not sure I have built the foundation it needs.</p>

<h2>What Is Clawdbot and Why Does It Matter?</h2>

<p>Clawdbot (now rebranded to Moltbot) is a browser-based AI agent that operates directly in your browser, email, and other systems. Unlike traditional AI assistants that answer questions, Clawdbot can take actions: navigate pages, click buttons, send emails, and execute multi-step tasks autonomously. It represents the next step in AI agent capability, moving from conversation to execution.</p>

<p>The potential is not hype. A tool like this could genuinely replace headcount for certain kinds of work: research tasks, data entry, routine communications. The stuff that eats hours but does not require judgment on every keystroke. More than that, it shifts your role. You move from doing to directing. Instead of being the one who opens every tab and clicks every button, you become the one who sets the parameters and reviews the output.</p>

<h2>The Concerns That Keep Me Honest</h2>

<p>But then there is the other side. The part that does not show up in the demo videos.</p>

<p>Hallucination is still a real risk. AI agents can confidently do the wrong thing. They can send an email that sounds like you but is not quite you. They can navigate to a page and take an action based on a misunderstanding you never caught because you were not watching.</p>

<p>Brand voice is tricky to hand over. Robert Hu has spent years developing how he communicates, the words chosen, the rhythm of sentences, the things left unsaid. The quiet drift happens faster than you expect when you let something else speak for you.</p>

<p>And then there is the access question. Clawdbot needs to operate in your browser. Your email. The same systems that hold your sensitive information, your client data, your half-finished thoughts. The security implications are not theoretical.</p>

<h2>What Foundation Do You Need Before Using AI Agents?</h2>

<p>The people who will use tools like Clawdbot well are not the ones excited about the demos. They are the ones who have already done the boring work.</p>

<p>They have .md files for everything. Context documents that explain their projects, their preferences, their constraints. Not because anyone told them to, but because they learned that AI works better with good inputs.</p>

<p>They have SOPs. Not elaborate ones, but clear enough that they could hand a task to someone new without a three-hour walkthrough. The kind of documentation that forces you to think through what you actually do.</p>

<p>They have workflows and folder structures that make sense. Not perfect, but organized enough that they can find what they need and explain where things go.</p>

<p>Most importantly, they have already managed AI agents in more controlled environments. They have seen how agents interpret instructions. They have learned to be specific in ways that feel tedious until you have watched an agent do exactly what you said instead of what you meant.</p>

<h2>The Honest Answer</h2>

<p>When someone asks me if they should try Clawdbot, I find myself asking questions back. How long have you been using AI agents? Have you used something like Cowork? Have you built the systems, the documentation, the processes, the structure that makes delegation possible?</p>

<p>If the answer to most of these is no, then Clawdbot might not be the starting point. It might be the destination after you have done the foundation work. The tool will expose what you have not built yet. Not because it is broken, but because powerful tools require prepared ground.</p>

<h2>Where I Am With This</h2>

<p>I am being honest: I am not ready yet. My documentation is not where it needs to be. My SOPs exist mostly in my head. The workflows I follow are intuitive to me but would be opaque to anyone, or anything, else.</p>

<p>I could dive in anyway. But I have learned enough about working with AI as a thinking partner to know that input quality determines output quality. If I hand Clawdbot a mess, I get chaos back. If I hand it clear structure, I might get something useful.</p>

<p>So I am doing the foundation work first. Not because it is exciting. It is the kind of work that feels like bureaucracy until you need what you have built. But it is also the work that will determine whether Clawdbot becomes a genuine multiplier or just another tool I tried and abandoned.</p>

<h2>A Note on the Rebrand</h2>

<p>Since I first started thinking through this decision, Clawdbot became Moltbot. A rebrand in the middle of early adoption. It reinforces something I was already feeling: this is a tool that is still finding its shape. The core functionality is real, the vision is clear, but the edges are still being defined.</p>

<p>For some people, that is a reason to wait. For others, building alongside a product means you shape how you use it as it evolves. The rebrand did not change my assessment. It confirmed it. I am still in the foundation-building phase, and the tool is still in its foundation-building phase too.</p>

<p>If you are figuring out how AI agents fit into your workflow, <a href="/services/digital-transformation">a digital transformation strategy</a> can help you build the foundation before the tools arrive. For more on the accountability questions that come with AI agents, see <a href="/blog/who-pays-when-ai-agents-fail">who pays when AI agents fail</a>.</p>`
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
