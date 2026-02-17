import Link from 'next/link'

interface CTABannerProps {
  heading?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTABanner({
  heading = "Let's Talk About Your E-commerce Growth",
  buttonText = 'Book a Free Strategy Session',
  buttonHref = '/free-strategy-session',
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/80 via-brand-dark to-brand-dark" />
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-accent/[0.04] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="text-2xl md:text-[2rem] font-bold text-white leading-snug mb-4 tracking-tight">
          {heading}
        </h2>
        <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
          15 minutes. No pitch. Just honest strategy for your brand.
        </p>
        <Link
          href={buttonHref}
          className="inline-block bg-brand-gold text-white font-semibold px-8 py-3.5 rounded-md hover:bg-brand-gold/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
