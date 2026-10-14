import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import SchemaMarkup from '@/components/SchemaMarkup'
import LazyYouTube from '@/components/LazyYouTube'
import TrackedLink from '@/components/TrackedLink'
import TrackOnView from '@/components/TrackOnView'
import { AUTHOR_INFO, SITE_URL, SOCIAL_LINKS } from '@/lib/constants'
import {
  VIDEOS,
  chapterSeconds,
  getVideo,
  youtubeThumbnailUrl,
  youtubeWatchUrl,
  type VideoEntry,
} from '@/lib/videos'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return VIDEOS.map((v) => ({ slug: v.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: Props): Metadata {
  const video = getVideo(params.slug)
  if (!video) return {}
  const url = `${SITE_URL}/videos/${video.slug}`
  return {
    title: video.seoTitle,
    description: video.metaDescription,
    alternates: { canonical: `/videos/${video.slug}` },
    openGraph: {
      title: `${video.seoTitle} | Robert Hu`,
      description: video.metaDescription,
      url,
      type: 'video.other',
      images: [{ url: video.thumbnail, width: 1280, height: 720, alt: video.thumbnailAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@theroberthu',
      creator: '@theroberthu',
      title: `${video.seoTitle} | Robert Hu`,
      description: video.metaDescription,
      images: [video.thumbnail],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Los_Angeles',
  })
}

function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Renders body copy, turning [label](/internal-path) into site links. */
function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = []
  const pattern = /\[([^\]]+)\]\((\/[^)]+)\)/g
  let last = 0
  let match: RegExpExecArray | null
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    parts.push(
      <Link key={match.index} href={match[2]}>
        {match[1]}
      </Link>,
    )
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

/** Seconds in an ISO 8601 duration such as "PT11M40S". */
function isoDurationSeconds(iso: string): number {
  const m = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(iso)
  return m ? Number(m[1] ?? 0) * 3600 + Number(m[2] ?? 0) * 60 + Number(m[3] ?? 0) : 0
}

function videoSchema(video: VideoEntry) {
  const seconds = video.chapters.map((c) => chapterSeconds(c.time))
  const durationSeconds = isoDurationSeconds(video.duration)
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.youtubeTitle,
    description: video.metaDescription,
    thumbnailUrl: [youtubeThumbnailUrl(video.youtubeId), `${SITE_URL}${video.thumbnail}`],
    uploadDate: video.uploadDate,
    duration: video.duration,
    embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
    url: `${SITE_URL}/videos/${video.slug}`,
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: AUTHOR_INFO.name,
      url: AUTHOR_INFO.url,
      sameAs: [...AUTHOR_INFO.sameAs, SOCIAL_LINKS.youtube],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Robert Hu',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/theroberthulogo.png` },
    },
    hasPart: video.chapters.map((c, i) => ({
      '@type': 'Clip',
      name: c.label,
      startOffset: seconds[i],
      endOffset: i < seconds.length - 1 ? seconds[i + 1] : durationSeconds,
      url: youtubeWatchUrl(video.youtubeId, seconds[i]),
    })),
  }
}

function breadcrumbSchema(video: VideoEntry) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Videos', item: `${SITE_URL}/videos` },
      { '@type': 'ListItem', position: 3, name: video.h1, item: `${SITE_URL}/videos/${video.slug}` },
    ],
  }
}

const YT_ICON = (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
  </svg>
)

export default function VideoCompanionPage({ params }: Props) {
  const video = getVideo(params.slug)
  if (!video) notFound()

  const watchUrl = youtubeWatchUrl(video.youtubeId)
  const trackParams = { video_slug: video.slug, youtube_id: video.youtubeId }

  return (
    <>
      <SchemaMarkup data={videoSchema(video)} />
      <SchemaMarkup data={breadcrumbSchema(video)} />
      <TrackOnView event="video_companion_view" params={trackParams} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark pt-16 md:pt-24 pb-8 md:pb-10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />

        <div className="relative max-w-[960px] mx-auto px-5 sm:px-8">
          <div className="mb-6">
            <Link
              href="/videos"
              className="inline-flex items-center gap-1.5 py-3 md:py-0 text-[13px] font-medium text-gray-400 hover:text-brand-accent transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All videos
            </Link>
          </div>

          <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-brand-accent bg-brand-accent/[0.1] px-2.5 py-1 rounded-full mb-4">
            Documentary
          </span>

          <h1 className="text-2xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-4 max-w-[820px]">
            {video.h1}
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-[720px] mb-5">{video.dek}</p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-gray-400">
            <span className="font-medium text-gray-300">Robert Hu</span>
            <span className="hidden sm:inline text-gray-600" aria-hidden="true">·</span>
            <span>
              Published on YouTube <time dateTime={video.uploadDate}>{formatDate(video.uploadDate)}</time>
            </span>
            <span className="hidden sm:inline text-gray-600" aria-hidden="true">·</span>
            <span>
              <time dateTime={video.duration}>{video.durationLabel}</time> watch
            </span>
          </div>
        </div>
      </section>

      {/* Player */}
      <section className="bg-brand-dark pb-10 md:pb-12">
        <div className="max-w-[960px] mx-auto px-5 sm:px-8">
          <LazyYouTube
            videoId={video.youtubeId}
            title={video.youtubeTitle}
            thumbnail={video.thumbnail}
            sizes="(max-width: 1000px) 100vw, 960px"
            priority
          />
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-5">
            <TrackedLink
              href={watchUrl}
              external
              event="watch_on_youtube_click"
              params={{ ...trackParams, location: 'below_player' }}
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-gold/85 transition-colors duration-200"
            >
              {YT_ICON}
              Watch on YouTube
            </TrackedLink>
            <a
              href="#chapters"
              className="inline-flex items-center justify-center gap-2 border border-white/[0.15] text-white font-semibold px-6 py-3 rounded-md hover:bg-white/[0.08] transition-colors duration-200"
            >
              Jump to chapters
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="pb-14 md:pb-16 bg-brand-dark">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
          {/* Key takeaways */}
          <aside className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 md:p-7 mb-10" aria-labelledby="key-takeaways">
            <h2 id="key-takeaways" className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-4">
              Key takeaways
            </h2>
            <ul className="space-y-3">
              {video.takeaways.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] text-gray-300 leading-relaxed">
                  <span className="block w-1.5 h-1.5 rounded-full bg-brand-gold/70 mt-2.5 shrink-0" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="prose-custom-dark">
            {video.sections.map((section, i) => (
              <div key={i}>
                {section.heading && <h2 id={headingId(section.heading)}>{section.heading}</h2>}
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{renderInline(p)}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Chapters */}
          <section id="chapters" className="mt-12 scroll-mt-24" aria-labelledby="chapters-heading">
            <h2 id="chapters-heading" className="text-[1.375rem] font-bold text-white tracking-tight mb-2">
              Chapters
            </h2>
            <p className="text-[14px] text-gray-400 mb-5">Each chapter opens the video on YouTube at that moment.</p>
            <ol className="grid sm:grid-cols-2 gap-2">
              {video.chapters.map((c) => (
                <li key={c.time}>
                  <TrackedLink
                    href={youtubeWatchUrl(video.youtubeId, chapterSeconds(c.time))}
                    external
                    event="watch_on_youtube_click"
                    params={{ ...trackParams, location: 'chapter', chapter: c.time }}
                    className="flex items-center gap-3 min-h-[48px] bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-2.5 text-[15px] text-gray-200 hover:border-brand-accent/40 hover:text-white transition-colors duration-200"
                  >
                    <span className="font-mono text-[13px] text-[#42a5c8] w-11 shrink-0">{c.time}</span>
                    <span className="leading-snug">{c.label}</span>
                  </TrackedLink>
                </li>
              ))}
            </ol>
          </section>

          {/* Sources */}
          <section className="mt-12" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-[1.375rem] font-bold text-white tracking-tight mb-2">
              Sources
            </h2>
            <p className="text-[14px] text-gray-400 mb-5">
              Walmart primary sources cited in the documentary, plus one additional source used on this page.
            </p>
            <ol className="space-y-4">
              {video.sources.map((s) => (
                <li key={s.href} className="text-[14px] leading-relaxed">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 underline decoration-white/20 underline-offset-2 hover:text-[#42a5c8] break-words"
                  >
                    {s.label}
                  </a>
                  <span className="block text-[12px] font-mono uppercase tracking-[0.1em] text-gray-500 mt-0.5">
                    {s.date}
                    {s.note ? `. ${s.note}` : ''}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* Closing CTA */}
          <div className="mt-12 bg-white/[0.04] border border-brand-gold/25 rounded-xl p-6 md:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className="text-white font-semibold mb-1">Watch the full documentary</p>
              <p className="text-[14px] text-gray-400">{video.durationLabel} on YouTube.</p>
            </div>
            <TrackedLink
              href={watchUrl}
              external
              event="watch_on_youtube_click"
              params={{ ...trackParams, location: 'end_of_page' }}
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-gold/85 transition-colors duration-200 whitespace-nowrap"
            >
              {YT_ICON}
              Watch on YouTube
            </TrackedLink>
          </div>

          <p className="mt-8 text-[13px] text-gray-500 leading-relaxed">{video.credits}</p>
        </div>
      </article>

      {/* Related research */}
      <section className="py-14 md:py-16 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-gold mb-2 block">
            Keep Exploring
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight mb-6">Related research</h2>
          <ul className="border-t border-white/[0.06]">
            {video.related.map((r) => (
              <li key={r.href} className="border-b border-white/[0.06]">
                <Link href={r.href} className="group flex items-start justify-between gap-4 py-4">
                  <span className="min-w-0">
                    <span className="block text-[15px] font-medium text-gray-200 group-hover:text-brand-accent transition-colors duration-200 leading-snug">
                      {r.title}
                    </span>
                    <span className="block text-[13px] text-gray-500 mt-1 leading-relaxed">{r.note}</span>
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-600 mt-1 shrink-0 group-hover:text-brand-accent transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
