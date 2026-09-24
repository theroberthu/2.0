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

const SLUG = 'agentic-commerce-platform-default-shopify-google'

// Editorial diagram, inserted between "The default is the distribution mechanism"
// and "Discoverable, transactable, measurable". Mobile SVG under 640px, desktop
// SVG above it, PNG as the fallback for anything that cannot render SVG.
const ALT = 'Agentic commerce moving from merchant-built integrations to platform-managed distribution, shifting the merchant\'s responsibility from building each channel to governing and configuring platform defaults.'

const FIGURE = `<figure style="margin: 2.5rem 0;">
<picture>
<source media="(max-width: 640px)" type="image/svg+xml" srcset="/images/blog/agentic-commerce-integration-to-governance-mobile.svg" />
<source type="image/svg+xml" srcset="/images/blog/agentic-commerce-integration-to-governance.svg" />
<img src="/images/blog/agentic-commerce-integration-to-governance.png" alt="${ALT}" width="1600" height="900" style="max-width: 100%; height: auto; border-radius: 8px; display: block;" />
</picture>
</figure>`

const ANCHOR = '<h2>Discoverable, transactable, measurable</h2>'

const { data: post, error: readErr } = await supabase
  .from('blog_posts')
  .select('id, slug, content')
  .eq('slug', SLUG)
  .maybeSingle()

if (readErr || !post) { console.error('Post not found:', readErr); process.exit(1) }

const before = post.content

if (before.includes('agentic-commerce-integration-to-governance')) {
  console.log('Diagram already present. No change made.')
  process.exit(0)
}

const anchorCount = before.split(ANCHOR).length - 1
if (anchorCount !== 1) { console.error('Anchor found ' + anchorCount + ' times, expected 1'); process.exit(1) }

const after = before.replace(ANCHOR, FIGURE + '\n\n' + ANCHOR)

// Copy guard: the article's prose must be byte identical once the figure is removed.
const restored = after.replace(FIGURE + '\n\n', '')
if (restored !== before) { console.error('Copy changed. Aborting.'); process.exit(1) }

const { error } = await supabase.from('blog_posts').update({ content: after }).eq('id', post.id)
if (error) { console.error('Update failed:', error); process.exit(1) }

console.log('Diagram inserted. Post id:', post.id)
console.log('Content length:', before.length, '->', after.length)
console.log('URL: https://theroberthu.com/blog/' + SLUG)
