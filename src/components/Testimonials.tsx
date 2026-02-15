import SchemaMarkup from './SchemaMarkup'
import { TESTIMONIALS, Testimonial } from '@/lib/testimonials-data'
import { SITE_URL } from '@/lib/constants'

function generateReviewSchema(testimonial: Testimonial) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: testimonial.author,
    },
    reviewBody: testimonial.text,
    itemReviewed: {
      '@type': 'ProfessionalService',
      name: 'Robert Hu \u2014 E-commerce Strategy Consulting',
      url: SITE_URL,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(testimonial.rating),
      bestRating: '5',
    },
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function SourceBadge({ source }: { source: 'linkedin' | 'upwork' }) {
  if (source === 'linkedin') {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-[#0A66C2] bg-[#0A66C2]/[0.1] px-2.5 py-1 rounded-full">
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-[#14A800] bg-[#14A800]/[0.1] px-2.5 py-1 rounded-full">
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l-.228-.183-1.573 1.931.272.228c1.313 1.015 2.89 1.574 4.603 1.574 3.186 0 5.439-2.043 5.439-4.919 0-2.784-2.253-4.91-5.439-4.91-1.713 0-3.29.559-4.603 1.574l-.272.228 1.573 1.931.228-.183c.939-.76 1.972-1.227 3.074-1.227 1.623 0 2.874 1.037 2.874 2.587 0 1.542-1.251 2.596-2.874 2.596zm-15.122 0c-1.623 0-2.874-1.054-2.874-2.596 0-1.55 1.251-2.587 2.874-2.587 1.102 0 2.135.467 3.074 1.227l.228.183 1.573-1.931-.272-.228C6.729 6.211 5.152 5.652 3.439 5.652 .253 5.652-2 7.695-2 10.562c0 2.876 2.253 4.919 5.439 4.919 1.713 0 3.29-.559 4.603-1.574l.272-.228-1.573-1.931-.228.183c-.939.76-1.972 1.227-3.074 1.227z" />
      </svg>
      Upwork
    </span>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
      {/* Review schemas */}
      {TESTIMONIALS.map((t) => (
        <SchemaMarkup key={t.id} data={generateReviewSchema(t)} />
      ))}

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7 hover:border-brand-accent/30 transition-colors duration-300"
            >
              {/* Source badge + rating */}
              <div className="flex items-center justify-between mb-5">
                <SourceBadge source={testimonial.source} />
                {testimonial.source === 'upwork' && (
                  <StarRating rating={testimonial.rating} />
                )}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-300 leading-relaxed mb-5">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-[13px] font-semibold text-white">
                  {testimonial.author}
                </p>
                {testimonial.role && (
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {testimonial.role}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
