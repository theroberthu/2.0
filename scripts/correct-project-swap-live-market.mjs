// One-word correction for /blog/anthropic-project-swap-agentic-commerce-shopper-preferences
// (Release 1.86), approved by Robert Hu on 2026-11-08. Anthropic's Figure 4
// reports the 0.55 outcome across the 80 runs with neutral instructions, so the
// sentence no longer calls that market "live".
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

const SLUG = 'anthropic-project-swap-agentic-commerce-shopper-preferences'
const APPLY = process.argv.includes('--apply')
const OLD = 'The live decentralized market scored 0.55'
const NEW = 'The decentralized market scored 0.55'

const { data: post, error } = await supabase.from('blog_posts').select('id, content').eq('slug', SLUG).single()
if (error) { console.error('Read failed:', error); process.exit(1) }

if (post.content.includes(NEW)) { console.log('Already corrected; nothing to do.'); process.exit(0) }
const count = post.content.split(OLD).length - 1
if (count !== 1) { console.error(`Expected the sentence once, found ${count}`); process.exit(1) }
const content = post.content.replace(OLD, NEW)

const i = content.indexOf(NEW)
console.log('...' + content.slice(i - 60, i + NEW.length + 50) + '...')
console.log('Length change:', content.length - post.content.length)

if (!APPLY) { console.log('\nDry run. Pass --apply to write.'); process.exit(0) }

const { error: upErr } = await supabase
  .from('blog_posts')
  .update({ content, updated_at: new Date().toISOString() })
  .eq('id', post.id)
if (upErr) { console.error('Update failed:', upErr); process.exit(1) }
console.log('\nCorrection applied: https://theroberthu.com/blog/' + SLUG)
