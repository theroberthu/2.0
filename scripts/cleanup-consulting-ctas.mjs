/**
 * Controlled content cleanup: remove retired consulting CTAs, client
 * testimonials, service pricing, and links to retired /services/* pages from
 * published article bodies stored in Supabase.
 *
 * The site's first hard rule is no lead forms and no "book a call" /
 * consultation CTAs. The Archive and Evolve pass covered routes, metadata and
 * structured data but never touched article bodies, so these were still live.
 * Many also linked to /free-strategy-session, which is archived and 404s.
 *
 * Five transformations, applied in order:
 *   1. Remove whole <div class="blog-testimonial-cta"> blocks (quote + CTA link).
 *   2. Within any <p> containing CTA language, drop only the CTA sentences.
 *      If nothing substantive remains, drop the paragraph. This preserves the
 *      "For more on X, see <blog link>" sentences that share those paragraphs.
 *   3. Remove service pricing sentences ($499 audit).
 *   4. Unwrap surviving <a href="/services/..."> links, keeping the anchor text.
 *   5. Tidy whitespace left behind.
 *
 * Run with --apply to write. Default is a dry run.
 *
 * Usage: node scripts/cleanup-consulting-ctas.mjs [--apply]
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const envFile = readFileSync(join(__dirname, '..', '.env.local'), 'utf-8')
const envVars = {}
envFile.split('\n').forEach((line) => {
  const m = line.match(/^([^#=]+)=(.*)$/)
  if (m) envVars[m[1].trim()] = m[2].trim()
})
const supabase = createClient(envVars.NEXT_PUBLIC_SUPABASE_URL, envVars.SUPABASE_SERVICE_ROLE_KEY)

const APPLY = process.argv.includes('--apply')

// A sentence is a CTA if it solicits a call, session, consultation, or links to
// the archived lead page. "explore how a ... strategy can help" is the prose
// form of the same solicitation.
const CTA_SENTENCE =
  /(book a|booking a)\s+(free\s+)?(15-minute\s+)?(strategy\s+)?(call|session)|strategy (session|call)|consultation|free-strategy-session|let'?s talk about|you need help navigating|explore (how )?(a |an )?[a-z- ]*?(strategy|consulting)\s+can (help|position|prepare)|can help you (identify|position|evaluate|prepare|build|adopt|navigat)/i

// Sentences that only make sense as part of a removed CTA.
const ORPHAN_SENTENCE =
  /^(that conversation alone|the audit covers|the audit \(\$?\d|it tracks your brand)/i

const PRICE_SENTENCE = /\$499/

// Sentences that pitch a named service offering without using the words
// "consultation" or "strategy session", so the CTA rule alone misses them.
const SERVICE_OFFER =
  /where Robert Hu works through|my [a-z- ]*work is built around|covered in (our|my) [a-z- ]*service|(product listing optimization|e-commerce strategy|digital transformation)\s+(service\b|audit is|is where to start|is the right starting point)|I'?ve been helping brands|the \$?\d{3} audit|for a full assessment/i

function splitSentences(html) {
  // Split on sentence end followed by whitespace, without breaking inside tags.
  const parts = []
  let buf = ''
  let depth = 0
  for (let i = 0; i < html.length; i++) {
    const ch = html[i]
    if (ch === '<') depth++
    if (ch === '>') depth--
    buf += ch
    if (depth <= 0 && /[.!?]/.test(ch)) {
      const rest = html.slice(i + 1)
      if (/^(\s|<\/?[a-z])/i.test(rest) || rest.trim() === '') {
        parts.push(buf)
        buf = ''
      }
    }
  }
  if (buf.trim()) parts.push(buf)
  return parts
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

// Remove a <div> and everything through its matching close tag, counting depth
// so nested divs do not terminate the match early.
function removeBalancedDivs(html, openRe, onRemove) {
  let out = html
  for (;;) {
    openRe.lastIndex = 0
    const m = openRe.exec(out)
    if (!m) return out
    let depth = 0
    let i = m.index
    let endIdx = -1
    const tagRe = /<(\/?)div\b[^>]*>/g
    tagRe.lastIndex = m.index
    let t
    while ((t = tagRe.exec(out))) {
      depth += t[1] ? -1 : 1
      if (depth === 0) { endIdx = t.index + t[0].length; break }
    }
    if (endIdx === -1) return out
    let after = endIdx
    while (/\s/.test(out[after] || '')) after++
    out = out.slice(0, m.index) + out.slice(after)
    if (onRemove) onRemove()
    void i
  }
}

function cleanContent(html) {
  const notes = []
  let out = html

  // 0. Unwrap links to retired service pages first, keeping the anchor text.
  // This must run BEFORE the sentence filters: while the anchor tags are still
  // in place they split phrases like "product listing optimization is where to
  // start" across tag boundaries, and the service-offer patterns fail to match.
  out = out.replace(/<a href="\/services\/[a-z-]*"[^>]*>([\s\S]*?)<\/a>/g, (_m, text) => {
    notes.push('unwrapped /services link')
    return text
  })

  // 1. Testimonial blocks (client quote plus "Book a free 15-minute strategy
  // call"). Two markup variants exist and one nests a div inside the wrapper,
  // so a lazy regex ends at the wrong </div>. Match balanced divs instead.
  out = removeBalancedDivs(out, /<div class="blog-testimonial(?:-cta|-block)">/g, () =>
    notes.push('removed testimonial block'))

  // 2. CTA sentences inside paragraphs.
  out = out.replace(/<p\b[^>]*>[\s\S]*?<\/p>/g, (block) => {
    if (!CTA_SENTENCE.test(block) && !PRICE_SENTENCE.test(block) && !SERVICE_OFFER.test(block)) return block
    const open = block.match(/^<p\b[^>]*>/)[0]
    const inner = block.slice(open.length, block.length - 4)
    const kept = splitSentences(inner).filter((s) => {
      const text = stripTags(s)
      if (!text) return false
      if (CTA_SENTENCE.test(s)) return false
      if (PRICE_SENTENCE.test(s)) return false
      if (SERVICE_OFFER.test(s)) return false
      if (ORPHAN_SENTENCE.test(text)) return false
      return true
    })
    const keptText = stripTags(kept.join(' '))
    if (keptText.length < 25) {
      notes.push('removed whole CTA paragraph')
      return ''
    }
    notes.push('trimmed CTA sentence(s) from paragraph, kept rest')
    return open + kept.join(' ').trim() + '</p>'
  })

  // 3. Service pricing left anywhere else.
  out = out.replace(/<p\b[^>]*>[\s\S]*?<\/p>/g, (block) => {
    if (!PRICE_SENTENCE.test(block)) return block
    const open = block.match(/^<p\b[^>]*>/)[0]
    const inner = block.slice(open.length, block.length - 4)
    const kept = splitSentences(inner).filter((s) => !PRICE_SENTENCE.test(s) && stripTags(s))
    if (stripTags(kept.join(' ')).length < 25) {
      notes.push('removed service-pricing paragraph')
      return ''
    }
    notes.push('removed service-pricing sentence')
    return open + kept.join(' ').trim() + '</p>'
  })

  // 5. Whitespace tidy.
  out = out.replace(/\n{3,}/g, '\n\n').replace(/\s+$/, '') + '\n'

  return { out, notes }
}

const { data: posts, error } = await supabase
  .from('blog_posts')
  .select('id, slug, content')
  .eq('status', 'published')
if (error) { console.error(error); process.exit(1) }

const changed = []
for (const p of posts) {
  const { out, notes } = cleanContent(p.content || '')
  if (out !== (p.content || '')) changed.push({ ...p, next: out, notes })
}

console.log(`${changed.length} of ${posts.length} published posts would change\n`)

const tally = {}
changed.forEach((c) => c.notes.forEach((n) => { tally[n] = (tally[n] || 0) + 1 }))
console.log('operations:', tally)

// Residue check on the proposed output.
const RESIDUE = {
  '/free-strategy-session link': /href="\/free-strategy-session"/,
  '/services link': /href="\/services\//,
  'strategy session/call': /strategy (session|call)/i,
  'consultation': /consultation/i,
  'testimonial block': /blog-testimonial-cta/,
  '$499 pricing': /\$499/,
}
console.log('\nresidue in proposed output:')
for (const [k, re] of Object.entries(RESIDUE)) {
  const hits = changed.filter((c) => re.test(c.next)).map((c) => c.slug)
  const untouched = posts.filter((p) => !changed.find((c) => c.id === p.id) && re.test(p.content || '')).map((p) => p.slug)
  const all = [...new Set([...hits, ...untouched])]
  console.log(`  ${String(all.length).padStart(2)}  ${k}${all.length ? '  ' + all.slice(0, 6).join(', ') : ''}`)
}

writeFileSync(join(__dirname, '..', 'cta-cleanup-diff.json'), JSON.stringify(
  changed.map((c) => ({ slug: c.slug, notes: c.notes, before: c.content, after: c.next })), null, 2))
console.log('\nfull before/after written to cta-cleanup-diff.json')

if (!APPLY) {
  console.log('\nDRY RUN. Re-run with --apply to write.')
  process.exit(0)
}

let n = 0
for (const c of changed) {
  const { error: e } = await supabase.from('blog_posts').update({ content: c.next }).eq('id', c.id)
  if (e) { console.error('FAILED', c.slug, e); process.exit(1) }
  n++
}
console.log(`\napplied to ${n} posts`)
