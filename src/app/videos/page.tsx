import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SchemaMarkup from '@/components/SchemaMarkup'
import { SITE_URL } from '@/lib/constants'
import { VIDEOS } from '@/lib/videos'

const DESCRIPTION =
  'Long-form video research from Robert Hu on how commerce changes: documentaries with written context, chapters and primary sources.'

export const metadata: Metadata = {
  title: 'Videos: Documentaries on How Commerce Changes',
  description: DESCRIPTION,
  alternates: { canonical: '/videos' },
  openGraph: {
    title: 'Videos: Documentaries on How Commerce Changes | Robert Hu',
    description: DESCRIPTION,
    url: `${SITE_URL}/videos`,
  },
}

const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Videos by Robert Hu',
  itemListElement: VIDEOS.map((v, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE_URL}/videos/${v.slug}`,
    name: v.h1,
  })),
}

export default function VideosIndexPage() {
  return (
    <>
      <SchemaMarkup data={listSchema} />
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
            Long-form video research. Each documentary has a companion page with written context, chapters and the
            primary sources behind it, so the argument holds up even if you never press play.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-brand-dark">
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
    </>
  )
}
