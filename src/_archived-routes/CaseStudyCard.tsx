import Link from 'next/link'
import { CaseStudy } from '@/lib/types'

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block bg-white border border-gray-100 rounded-xl p-7 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300"
    >
      {study.client_name && (
        <span className="inline-block text-[11px] font-semibold text-brand-accent uppercase tracking-wider mb-3">
          {study.client_name}
        </span>
      )}
      <h3 className="text-lg font-semibold text-brand-dark mb-2 group-hover:text-brand-accent transition-colors duration-200 leading-snug">
        {study.title}
      </h3>
      {study.excerpt && (
        <p className="text-sm text-brand-muted leading-relaxed mb-4 line-clamp-3">
          {study.excerpt}
        </p>
      )}
      <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent group-hover:gap-2.5 transition-all duration-200">
        Read case study
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}
