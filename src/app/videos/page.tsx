import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import ShortsRow from '@/components/ShortsRow'
import { AUTHOR_INFO, SITE_URL } from '@/lib/constants'
import { SHORTS, VIDEOS, VIDEO_TOPICS, youtubeShortUrl } from '@/lib/videos'

const TITLE = 'Videos: Documentaries on How Commerce Changes'
const DESCRIPTION =
  'Short documentaries from Robert Hu on how commerce works, each with a companion page: written context, key takeaways, chapters and primary sources.'

// VIDEOS is newest first, so the first entry dates the collection.
const LATEST = VIDEOS[0]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Los_Angeles',
  })
}

function listOf(items: string[]): string {
  if (items.length <= 1) return items.join('')
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/videos' },
  openGraph: {
    title: `${TITLE} | Robert Hu`,
    description: DESCRIPTION,
    url: `${SITE_URL}/videos`,
    type: 'website',
    images: LATEST ? [{ url: LATEST.thumbnail, width: 1280, height: 720, alt: LATEST.thumbnailAlt }] : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theroberthu',
    creator: '@theroberthu',
    title: `${TITLE} | Robert Hu`,
    description: DESCRIPTION,
    images: LATEST ? [LATEST.thumbnail] : undefined,
  },
}

// Collection-level data. Each item is a ListItem pointing at its companion
// page, which carries the full VideoObject; VideoObjects are not repeated
// here because this page is not a watch page for any of them.
const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}/videos`,
  inLanguage: 'en',
  ...(LATEST && { dateModified: LATEST.uploadDate }),
  author: { '@type': 'Person', name: AUTHOR_INFO.name, url: AUTHOR_INFO.url },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Documentaries by Robert Hu',
    numberOfItems: VIDEOS.length,
    itemListElement: VIDEOS.map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/videos/${v.slug}`,
      name: v.h1,
      description: v.metaDescription,
      image: `${SITE_URL}${v.thumbnail}`,
    })),
  },
}

const shortsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Shorts by Robert Hu',
  numberOfItems: SHORTS.length,
  itemListElement: SHORTS.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: youtubeShortUrl(s.youtubeId),
    name: s.title,
    image: `${SITE_URL}${s.thumbnail}`,
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Videos', item: `${SITE_URL}/videos` },
  ],
}

export default function VideosIndexPage() {
  const topics = VIDEO_TOPICS.map((topic) => ({
    topic,
    videos: VIDEOS.filter((v) => v.topic === topic),
  })).filter((t) => t.videos.length > 0)

  return (
    <>
      <SchemaMarkup data={collectionSchema} />
      {SHORTS.length > 0 && <SchemaMarkup data={shortsSchema} />}
      <SchemaMarkup data={breadcrumbSchema} />

      <section className="relative overflow-hidden bg-brand-dark pt-16 md:pt-24 pb-10 md:pb-12">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3 block">Videos</span>
          <h1 className="text-2xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-4">
            Documentaries on how commerce changes
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
            Short documentaries on how commerce actually works, from the decisions behind a retail turnaround to the
            handoffs behind an overnight delivery. Each one has a companion page with written context, key takeaways,
            chapters and the primary sources behind it, so the argument holds up even if you never press play.
          </p>

          {/* In short: derived from the video data so it never goes stale */}
          {LATEST && (
            <div className="mt-8 max-w-3xl bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-6">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">In short</p>
              <p className="text-[15px] text-gray-300 leading-relaxed mb-3">
                {VIDEOS.length} documentaries by Robert Hu, the most recent published on{' '}
                <time dateTime={LATEST.uploadDate}>{formatDate(LATEST.uploadDate)}</time>, plus {SHORTS.length} one-minute
                Shorts. Topics covered:
              </p>
              <ul className="space-y-1.5">
                {topics.map(({ topic, videos }) => (
                  <li key={topic} className="text-[14px] text-gray-400 leading-relaxed">
                    <span className="font-semibold text-gray-200">{topic}:</span>{' '}
                    {listOf(videos.map((v) => v.subject))}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="pb-14 md:pb-16 bg-brand-dark" aria-label="Documentaries">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VIDEOS.map((v) => (
              <li key={v.slug}>
                <Link
                  href={`/videos/${v.slug}`}
                  className="group block h-full bg-white/[0.05] border border-white/[0.08] rounded-xl overflow-hidden hover:border-brand-accent/40 transition-colors duration-200"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={v.thumbnail}
                      alt={v.thumbnailAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 560px"
                    />
                    <span className="absolute bottom-3 right-3 bg-black/75 text-white text-[12px] font-mono px-2 py-0.5 rounded">
                      {v.durationLabel}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2.5">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.1] px-2.5 py-1 rounded-full">
                        {v.topic}
                      </span>
                      <time dateTime={v.uploadDate} className="text-[12px] font-mono text-gray-500">
                        {formatDate(v.uploadDate)}
                      </time>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-white leading-snug mb-2 group-hover:text-brand-accent transition-colors duration-200">
                      {v.h1}
                    </h2>
                    <p className="text-[15px] text-gray-400 leading-relaxed">{v.dek}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {SHORTS.length > 0 && (
        <section className="pb-20 md:pb-28 bg-brand-dark" aria-labelledby="shorts-heading">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-2 block">
              Shorts
            </span>
            <h2 id="shorts-heading" className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
              One-minute clips
            </h2>
            <p className="text-[15px] text-gray-400 leading-relaxed max-w-2xl mb-6">
              Short takes from the channel. They open on YouTube.
            </p>
            <ShortsRow shorts={SHORTS} location="videos_index" />
          </div>
        </section>
      )}
    </>
  )
}
