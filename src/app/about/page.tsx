import { Metadata } from 'next'
import Image from 'next/image'

import SchemaMarkup from '@/components/SchemaMarkup'
import CTABanner from '@/components/CTABanner'
import { SITE_URL, SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Robert Hu is an e-commerce strategist with 20+ years of experience helping brands implement AI and digital transformation strategies.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Robert Hu',
    description:
      'E-commerce strategist with 20+ years of experience helping brands grow with AI and digital transformation.',
    url: `${SITE_URL}/about`,
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Robert Hu',
  url: SITE_URL,
  jobTitle: 'E-commerce Strategist',
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.x,
    SOCIAL_LINKS.youtube,
    SOCIAL_LINKS.instagram,
  ],
}

const projects = [
  {
    name: 'FlightPrompts',
    desc: 'An AI prompt toolkit built to help e-commerce teams move faster with ChatGPT, Claude, and other LLMs. Live and actively used.',
    status: 'Live',
    statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dotColor: 'bg-emerald-400',
    link: 'https://flightprompts.com',
  },
  {
    name: 'ProductListingHelp',
    desc: 'A platform to help Amazon sellers optimize their product listings with data-driven recommendations and expert guidance.',
    status: 'In Development',
    statusColor: 'bg-amber-50 text-amber-700 border-amber-200',
    dotColor: 'bg-amber-400',
    link: 'https://productlistinghelp.com',
  },
  {
    name: 'Scoparo',
    desc: 'A strategic framework for scoping the right AI tools for your business before you commit. Structured, repeatable, and vendor-agnostic.',
    status: 'Framework',
    statusColor: 'bg-blue-50 text-blue-700 border-blue-200',
    dotColor: 'bg-blue-400',
    link: null,
  },
]

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup data={personSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-bg via-white to-brand-bg py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1a3a4a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 items-start">
            <div>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">About</span>
              <h1 className="text-3xl md:text-[2.5rem] font-bold text-brand-dark leading-tight tracking-tight mb-3">
                Hi, I&apos;m Robert Hu.
              </h1>
              <p className="text-lg text-brand-accent font-medium mb-8">
                E-commerce strategist. Digital transformation consultant. Quiet operator.
              </p>
              <div className="space-y-5 text-[15px] text-brand-muted leading-relaxed">
            <p>
              I&apos;ve spent 20+ years building, optimizing, and scaling e-commerce
              businesses. I currently work as a Merchandising Manager at a leading consumer brand, where
              I lead digital marketing and e-commerce strategy. Before that, I built
              and ran my own online businesses from the ground up.
            </p>
            <p>
              I&apos;m not the loudest voice in the room, and that&apos;s by design. I
              believe in clarity over hype, systems over shortcuts, and showing how I
              think rather than just telling you what to do.
            </p>
            <p>
              I created frameworks and tools because
              I kept seeing the same patterns: smart founders drowning in tools,
              agencies selling them what they didn&apos;t need, and AI hype that never
              translated to results.
            </p>
            <p>
              My consulting work focuses on helping e-commerce brands ($100K-$2M)
              implement AI and digital transformation strategies that actually fit
              their business.
            </p>
          </div>
            </div>

            {/* Headshot */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-[260px] h-[320px] rounded-2xl bg-gradient-to-br from-brand-accent/10 to-brand-deep/10 overflow-hidden border border-gray-100 shadow-elevated">
                  <Image
                    src="/images/robert-hu-headshot.png"
                    alt="Robert Hu - E-commerce Strategist"
                    width={260}
                    height={320}
                    className="object-cover object-top w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white rounded-lg border border-gray-100 shadow-lifted px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-semibold text-brand-dark">Available for consulting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Projects & Tools */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Building</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-brand-dark tracking-tight">
              Projects &amp; Tools I&apos;ve Built
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group bg-brand-bg border border-gray-100 rounded-xl p-6 md:p-7 hover:shadow-lifted hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-brand-dark">{project.name}</h3>
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${project.statusColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${project.dotColor}`} />
                      {project.status}
                    </span>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-accent hover:text-brand-deep transition-colors duration-200"
                    >
                      Visit site
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-sm text-brand-muted leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Connect</span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-brand-dark tracking-tight mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-sm text-brand-muted max-w-md mx-auto mb-8">
            Follow along for e-commerce insights, AI strategy breakdowns, and behind-the-scenes of what I&apos;m building.
          </p>
          <div className="flex items-center justify-center gap-4">
            {[
              { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { href: SOCIAL_LINKS.x, label: 'X', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              { href: SOCIAL_LINKS.youtube, label: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              { href: SOCIAL_LINKS.instagram, label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-brand-bg border border-gray-100 flex items-center justify-center text-brand-muted hover:text-brand-accent hover:border-brand-accent/30 hover:shadow-soft transition-all duration-200"
                aria-label={social.label}
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon} /></svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
