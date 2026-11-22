#!/usr/bin/env node
/**
 * Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver and other participating
 * engines share submissions). Run after a release is live on production.
 *
 *   node scripts/indexnow.mjs /videos/new-page /blog/new-post
 *   node scripts/indexnow.mjs https://theroberthu.com/blog/updated-post
 *   node scripts/indexnow.mjs --sitemap          # every URL in the live sitemap
 *   node scripts/indexnow.mjs --dry-run /geo     # print the payload, send nothing
 *
 * The key is the 32-hex-character .txt file in /public, served at
 * https://theroberthu.com/<key>.txt. The script confirms that file is live and
 * matches before submitting. Only theroberthu.com URLs are accepted.
 */
import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HOST = 'theroberthu.com'
const ORIGIN = `https://${HOST}`
const ENDPOINT = 'https://api.indexnow.org/indexnow'
const UA = 'theroberthu-indexnow/1.0'

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')
const keyFiles = readdirSync(publicDir).filter((f) => /^[a-f0-9]{32}\.txt$/.test(f))
if (keyFiles.length !== 1) {
  console.error(`Expected exactly one IndexNow key file in public/, found ${keyFiles.length}.`)
  process.exit(1)
}
const key = keyFiles[0].replace(/\.txt$/, '')
if (readFileSync(join(publicDir, keyFiles[0]), 'utf8').trim() !== key) {
  console.error('Key file content does not match its filename.')
  process.exit(1)
}
const keyLocation = `${ORIGIN}/${key}.txt`

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const useSitemap = args.includes('--sitemap')
const inputs = args.filter((a) => !a.startsWith('--'))

async function sitemapUrls() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
}

function normalize(input) {
  const url = new URL(input, ORIGIN)
  if (url.protocol !== 'https:' || url.hostname !== HOST) {
    throw new Error(`Not a ${HOST} URL: ${input}`)
  }
  url.hash = ''
  return url.toString()
}

let urls = inputs.map(normalize)
if (useSitemap) urls = urls.concat(await sitemapUrls())
urls = [...new Set(urls)]

if (urls.length === 0) {
  console.error('No URLs given. Pass paths or URLs, or --sitemap.')
  process.exit(1)
}
if (urls.length > 10000) {
  console.error(`IndexNow accepts at most 10,000 URLs per request; got ${urls.length}.`)
  process.exit(1)
}

const payload = { host: HOST, key, keyLocation, urlList: urls }

if (dryRun) {
  console.log(JSON.stringify(payload, null, 2))
  process.exit(0)
}

const keyRes = await fetch(keyLocation, { headers: { 'User-Agent': UA } })
const keyBody = keyRes.ok ? (await keyRes.text()).trim() : ''
if (keyBody !== key) {
  console.error(`Key file not live at ${keyLocation} (status ${keyRes.status}). Deploy first.`)
  process.exit(1)
}

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'User-Agent': UA },
  body: JSON.stringify(payload),
})
const meaning = {
  200: 'OK, URLs submitted',
  202: 'Accepted, key validation pending',
  400: 'Bad request',
  403: 'Key not valid',
  422: 'URLs do not belong to the host or key mismatch',
  429: 'Too many requests',
}
console.log(`IndexNow ${res.status} ${meaning[res.status] ?? ''} (${urls.length} URL${urls.length === 1 ? '' : 's'})`)
if (res.status !== 200 && res.status !== 202) {
  const text = await res.text()
  if (text) console.log(text.slice(0, 500))
  process.exit(1)
}
