import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import SchemaMarkup from '@/components/SchemaMarkup'
import CTABanner from '@/components/CTABanner'
import { SITE_URL, SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Robert Hu | E-commerce Strategist & Digital Transformation Consultant',
  description:
    '20+ years of e-commerce experience. From building startups to leading marketplace strategy at KENT\u00AE Worldwide. Now helping brand owners grow smarter with strategy, GEO, and AI-powered operations.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Robert Hu | E-commerce Strategist & Digital Transformation Consultant',
    description:
      '20+ years of e-commerce experience. From building startups to leading marketplace strategy at KENT\u00AE Worldwide. Now helping brand owners grow smarter with strategy, GEO, and AI-powered operations.',
    url: `${SITE_URL}/about`,
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Robert Hu',
  url: SITE_URL,
  jobTitle: 'E-commerce Strategist & Digital Transformation Consultant',
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.x,
    SOCIAL_LINKS.youtube,
    SOCIAL_LINKS.instagram,
  ],
}

const milestones = [
  {
    label: 'Small-town Iowa roots',
    desc: 'Where I learned the value of showing up and doing the work',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    label: '6+ years building a startup',
    desc: 'The highs, the lows, and the lessons that stuck',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    label: 'Years living across Asia',
    desc: 'New cultures, fresh perspectives, deeper empathy',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    label: 'Now helping e-commerce brands scale',
    desc: '20+ years of experience in e-commerce strategy, digital marketing, and digital transformation',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
]

const values = [
  {
    emoji: '\uD83D\uDEE4\uFE0F',
    title: 'The Long Way Around Often Leads Somewhere Good',
    desc: "My path hasn\u2019t been linear, and that\u2019s taught me more than any straight line ever could. Resilience, flexibility, and the ability to see things from different angles \u2014 these came from the detours.",
  },
  {
    emoji: '\uD83D\uDD25',
    title: 'Hard Lessons Become Quiet Strengths',
    desc: "When my startup failed, it was painful. But that experience gave me a kind of clarity I couldn\u2019t have found any other way. Now I help others navigate challenges with that hard-won perspective.",
  },
  {
    emoji: '\u2764\uFE0F',
    title: 'People Come First',
    desc: "Behind every business decision is a real person. Whether I\u2019m caring for family or working with founders, I believe the best outcomes come from leading with empathy and genuine care.",
  },
  {
    emoji: '\uD83C\uDF0D',
    title: 'A Wider View Makes Better Decisions',
    desc: "Living and working across different cultures taught me that good ideas don\u2019t come from one place. I try to bring that openness to every conversation and every problem.",
  },
]

const projects = [
  {
    name: 'FlightPrompts',
    desc: 'An AI-powered decision tool that helps travelers find and evaluate flight options. Built to test prompt-driven product design and real-world AI UX.',
    status: 'Live',
    statusColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/[0.08]',
    dotColor: 'bg-emerald-400',
    link: 'https://flightprompts.com',
  },
  {
    name: 'ProductListingHelp',
    desc: 'A GEO audit tool for Amazon and Walmart sellers. Analyzes product listings for traditional SEO and Generative Engine Optimization readiness.',
    status: 'Live',
    statusColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/[0.08]',
    dotColor: 'bg-emerald-400',
    link: 'https://productlistinghelp.com',
  },
  {
    name: 'Scoparo',
    desc: 'A framework for scoping AI tools before committing time or money. Designed to help teams evaluate AI solutions with clarity, not hype.',
    status: 'In Development',
    statusColor: 'text-gray-400 border-gray-400/30 bg-gray-400/[0.08]',
    dotColor: 'bg-gray-400',
    link: null,
  },
]

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup data={personSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2d7d9a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 items-start">
            <div>
              <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">About</span>
              <h1 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight mb-3">
                E-commerce Strategist &amp; Digital Transformation Consultant
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                The winding path that taught me what clarity really means. From small-town Iowa to Southeast Asian markets, my journey has been anything but linear.
              </p>
            </div>

            {/* Headshot */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-[260px] h-[320px] rounded-2xl bg-gradient-to-br from-brand-accent/10 to-brand-deep/10 overflow-hidden border border-white/[0.08] shadow-elevated">
                  <Image
                    src="/images/robert-hu-headshot.png"
                    alt="Robert Hu - E-commerce Strategist"
                    width={260}
                    height={320}
                    className="object-cover object-top w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white/[0.08] backdrop-blur-md rounded-lg border border-white/[0.1] px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-semibold text-white">Available for consulting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="py-16 md:py-20 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-5 hover:-translate-y-1 hover:border-brand-accent/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-accent/[0.12] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={m.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{m.label}</h3>
                <p className="text-[13px] text-gray-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story: How I Got Here */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">My Story</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              How I Got Here
            </h2>
          </div>

          <div className="space-y-10">
            {/* Where It Started */}
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/[0.12] flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Where It Started</h3>
              </div>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                I grew up in Cedar Falls and Ottumwa, Iowa &mdash; places where hard work and quiet persistence were the norm. After finishing my Marketing degree at{' '}
                <a href="https://www.iastate.edu" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-accent/80 transition-colors underline underline-offset-2">
                  Iowa State University
                </a>
                {' '}(it took me a little longer than planned, and that&apos;s okay), I thought I knew what came next.
              </p>
            </div>

            {/* AT&T / Startup */}
            <div className="pl-2 md:pl-6 border-l-2 border-brand-accent/20">
              <p className="text-[15px] text-gray-400 leading-relaxed pl-5">
                I started at{' '}
                <a href="https://www.att.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-accent/80 transition-colors underline underline-offset-2">
                  AT&amp;T
                </a>
                {' '}right out of school, but something inside me wanted more autonomy. So I left to build an e-commerce auction startup. For over six years, I poured everything into it &mdash; the late nights, the pivots, the moments of hope and the stretches of uncertainty.
              </p>
            </div>

            {/* The Moment That Changed Everything */}
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/[0.12] flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">The Moment That Changed Everything</h3>
              </div>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                Then it ended. A critical technology failure &mdash; one I was responsible for &mdash; forced us to close. It was painful, humbling, and clarifying all at once. But looking back, that failure gave me something I couldn&apos;t have earned any other way: perspective.
              </p>
            </div>

            {/* Learning e-commerce */}
            <div className="pl-2 md:pl-6 border-l-2 border-brand-accent/20">
              <p className="text-[15px] text-gray-400 leading-relaxed pl-5">
                That experience taught me to slow down and understand things deeply. I committed to learning e-commerce technology inside and out &mdash; not just to protect myself, but so I could help others avoid the same hard lessons. I built and ran a marketing and tech agency, guiding businesses through decisions I&apos;d once struggled with myself.
              </p>
            </div>

            {/* Taiwan / Asia */}
            <div className="pl-2 md:pl-6 border-l-2 border-brand-accent/20">
              <p className="text-[15px] text-gray-400 leading-relaxed pl-5">
                When my dad got sick, I paused everything to fly to Taiwan and help my mom care for him. That season reminded me what actually matters. It also opened a new chapter &mdash; I spent time as a digital nomad across Southeast Asia, working with clients while gaining a wider view of how people live and build.
              </p>
            </div>

            {/* Where I Am Now */}
            <div className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/[0.12] flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Where I Am Now</h3>
              </div>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                COVID brought me back to the U.S., where I started an Amazon-focused agency and later joined as a Brand Manager. Today, I&apos;m a Merchandising Manager at{' '}
                <a href="https://kentworldwide.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-accent/80 transition-colors underline underline-offset-2">
                  KENT&reg; Worldwide
                </a>
                , leading e-commerce strategy across Amazon and marketplace channels &mdash; including evaluating and implementing the team&apos;s e-commerce tech stack. I also consult independently with brand owners on growth strategy, listing optimization, GEO (Generative Engine Optimization), and digital transformation.
              </p>
            </div>

            {/* Closing pull quote */}
            <div className="bg-white/[0.05] backdrop-blur-md border-l-4 border-brand-gold rounded-r-xl p-6 md:p-8">
              <p className="text-[15px] text-gray-300 leading-relaxed italic">
                Every chapter &mdash; the wins and the setbacks &mdash; has shaped how I work with brand owners today. I bring a mix of startup grit, corporate experience, and global perspective to help e-commerce brands build operations that are sustainable, not just successful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Guides Me */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Values</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight">
              What Guides Me
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 md:p-7 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-[0_0_20px_rgba(45,125,154,0.12)] transition-all duration-300"
              >
                <span className="text-2xl mb-3 block">{v.emoji}</span>
                <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm Building */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Building</span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-3">
              What I&apos;m Building
            </h2>
            <p className="text-sm text-gray-400 max-w-md mx-auto">
              Side projects where I put my own strategy to the test.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl p-6 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-[0_0_20px_rgba(45,125,154,0.12)] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-base font-semibold text-white">{project.name}</h3>
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${project.statusColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${project.dotColor}`} />
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">{project.desc}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-accent hover:gap-2.5 transition-all duration-200"
                  >
                    Visit Site
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* A Little More About Me */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Personal</span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-6">
            A Little More About Me
          </h2>
          <p className="text-[15px] text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
            When I&apos;m not building growth strategies or shipping side projects, I&apos;m usually planning my next solo trip, tending to my houseplants, or exploring how AI is changing the way we work and live. I believe the best ideas come when you stay curious and keep building.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-brand-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-accent/85 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              Start Here
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-md border border-white/[0.1] text-white font-semibold px-6 py-3 rounded-md hover:border-brand-accent/40 hover:bg-white/[0.08] transition-all duration-200 text-sm"
            >
              Read My Thoughts
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/free-strategy-session"
              className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-md border border-white/[0.1] text-white font-semibold px-6 py-3 rounded-md hover:border-brand-accent/40 hover:bg-white/[0.08] transition-all duration-200 text-sm"
            >
              Get In Touch
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-20 md:py-28 bg-brand-dark border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-brand-accent mb-3 block">Connect</span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto mb-8">
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
                className="w-11 h-11 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-200"
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
