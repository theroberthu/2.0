import Link from 'next/link'
import { Service } from '@/lib/types'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white border border-gray-100 rounded-xl p-7 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300"
    >
      {/* Icon placeholder */}
      <div className="w-10 h-10 rounded-lg bg-brand-accent/[0.08] flex items-center justify-center mb-5">
        <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-brand-dark mb-2 group-hover:text-brand-accent transition-colors duration-200">
        {service.title}
      </h3>
      <p className="text-sm text-brand-muted leading-relaxed mb-5">
        {service.description}
      </p>
      <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent group-hover:gap-2.5 transition-all duration-200">
        Learn more
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}
