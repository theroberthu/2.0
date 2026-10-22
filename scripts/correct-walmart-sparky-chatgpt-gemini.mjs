// Minimum correction for /blog/walmart-sparky-chatgpt-gemini (Release 1.57),
// approved by the senior editor on 2026-10-22: a dated editor's note linking to
// the Agent Gateway article, and Statement A replaced. The broader legacy
// cleanup (docs/legacy-content-triage-2026-10.md) ships separately.
// Dry run by default; pass --apply to write.
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

const SLUG = 'walmart-sparky-chatgpt-gemini'
const APPLY = process.argv.includes('--apply')

const NOTE = `<div class="callout-box editor-note">
  <p><strong>Editor's note, October 2026.</strong> This post's conclusion that "Walmart won't let anyone else's AI sell Walmart products" is no longer accurate. On October 21, 2026, Walmart announced Agent Profiles and an invitation-only Agent Gateway beta that gives participating companies and developers a controlled path for outside AI agents to shop for customers. See <a href="/blog/walmart-agent-gateway-agent-profiles">Walmart's Agent Profiles Show How Retailers Can Admit AI Shoppers Without Giving Up Control</a>.</p>
</div>

`

const STATEMENT_A_OLD = "Amazon won't let anyone else's AI sell on Amazon. Walmart won't let anyone else's AI sell Walmart products. The only difference is where the shopping happens."
const STATEMENT_A_NEW = "As of March 2026, Amazon had blocked Perplexity's shopping agent, while Walmart's approach was to send its own agent, Sparky, into other AI platforms. In October 2026, Walmart announced a model that also admits outside agents under Walmart-controlled permissions."

const { data: post, error } = await supabase.from('blog_posts').select('id, content').eq('slug', SLUG).single()
if (error) { console.error('Read failed:', error); process.exit(1) }

let content = post.content
if (content.includes("Editor's note, October 2026")) { console.log('Already corrected; nothing to do.'); process.exit(0) }
const count = content.split(STATEMENT_A_OLD).length - 1
if (count !== 1) { console.error(`Expected Statement A once, found ${count}`); process.exit(1) }
content = NOTE + content.replace(STATEMENT_A_OLD, STATEMENT_A_NEW)

console.log(content.slice(0, NOTE.length + 200))
const i = content.indexOf(STATEMENT_A_NEW)
console.log('\n...' + content.slice(i - 90, i + STATEMENT_A_NEW.length + 10) + '...')

if (!APPLY) { console.log('\nDry run. Pass --apply to write.'); process.exit(0) }

const { error: upErr } = await supabase
  .from('blog_posts')
  .update({ content, updated_at: new Date().toISOString() })
  .eq('id', post.id)
if (upErr) { console.error('Update failed:', upErr); process.exit(1) }
console.log('\nCorrection applied: https://theroberthu.com/blog/' + SLUG)
