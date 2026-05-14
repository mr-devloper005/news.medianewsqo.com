import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, FileText, Globe, Megaphone, Radio, TrendingUp, Users2, Calendar, Tag } from 'lucide-react'
import { siteContent } from '@/config/site.content'
import { SITE_CONFIG } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { PressReleaseArchiveClient } from '@/components/home/press-release-archive-client'

type Task = (typeof SITE_CONFIG.tasks)[number]

const heroImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80&auto=format&fit=crop'

const categories = [
  'Business', 'Technology', 'Finance', 'Healthcare',
  'Entertainment', 'Politics', 'Sports', 'Science',
]

const services = [
  {
    name: 'Press Distribution',
    accent: 'from-[#662222] to-[#842A3B]',
    icon: Megaphone,
    features: [
      'Structured release templates',
      'Category & tag routing',
      'Archive hosting & SEO',
      'Multimedia attachments',
    ],
  },
  {
    name: 'Media Outreach',
    accent: 'from-[#842A3B] to-[#a03550]',
    icon: Radio,
    features: [
      'Journalist & editor targeting',
      'Priority syndication queue',
      'Rich text, tables & embeds',
      'Engagement tracking',
    ],
  },
  {
    name: 'Communications Hub',
    accent: 'from-[#4a1515] to-[#662222]',
    icon: Globe,
    features: [
      'Dedicated account support',
      'Custom distribution lists',
      'Performance snapshots',
      'Team roles & audit trail',
    ],
  },
]

const statRows = [
  { label: 'Network reach', value: '2.4M+', hint: 'monthly impressions' },
  { label: 'Publisher categories', value: '180+', hint: 'trade, national, local' },
  { label: 'Media desk', value: '24/7', hint: 'release monitoring' },
]

const trustLabels = ['AP Style', 'SOC2-ready', 'GDPR', 'ISO 27001']

const whyUs = [
  {
    icon: FileText,
    title: 'Structured Releases',
    desc: 'Every press release follows AP style guidelines with consistent formatting across all channels.',
  },
  {
    icon: Globe,
    title: 'Global Distribution',
    desc: 'Reach journalists, editors, and media outlets across 180+ categories worldwide.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Impact',
    desc: 'Track opens, pickups, and coverage with real-time analytics dashboards.',
  },
  {
    icon: Users2,
    title: 'Team Collaboration',
    desc: 'Roles, approvals, and audit trails keep your communications team aligned.',
  },
]

function HeroDivider() {
  return (
    <svg
      className="absolute -bottom-px left-0 w-full text-[#fff8f8]"
      viewBox="0 0 1440 56"
      fill="currentColor"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d="M0,28L80,24C160,20,320,12,480,10.7C640,9,800,13,960,18.7C1120,24,1280,30,1360,32L1440,34L1440,56L0,56Z" />
    </svg>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-sm border border-[#662222]/20 bg-[#662222]/6 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[#662222]">
      {children}
    </span>
  )
}

export function NewsprlinePressHome({ posts, primaryTask }: { posts: SitePost[]; primaryTask?: Task }) {
  const latest = posts.slice(0, 8)
  const featured = posts.slice(0, 3)
  const c = siteContent

  return (
    <main className="bg-[#fff8f8] text-[#1a0505]">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#3d0f0f] to-[#662222]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(132,42,59,0.5),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_100%,rgba(102,34,34,0.4),transparent_45%)]" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-[1] mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pt-22">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: copy */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#842A3B]" />
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/70">{c.hero.badge}</p>
              </div>
              <h1 className="mt-5 font-[family-name:var(--site-font-display)] text-4xl font-bold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[3.2rem]">
                {c.hero.title[0]}
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/80">{c.hero.description}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={primaryTask?.route || c.hero.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-bold text-[#662222] shadow-lg shadow-black/20 transition hover:bg-[#fff0f0]"
                >
                  {c.hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={c.hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-6 py-3 text-sm font-semibold text-white/85 transition hover:border-white/40 hover:text-white"
                >
                  {c.hero.secondaryCta.label}
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-2">
                {trustLabels.map((name) => (
                  <div
                    key={name}
                    className="rounded-sm border border-white/12 bg-white/6 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white/75 backdrop-blur-sm"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stats card */}
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-tr from-[#842A3B]/25 to-white/0 blur-3xl" />
              <div className="overflow-hidden rounded-xl border border-white/15 bg-white/6 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={heroImage}
                    alt="Newsroom and press distribution"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0505]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between gap-2 rounded-lg bg-white/96 p-3 text-[#1a0505] shadow-xl">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#662222]">Live Coverage</p>
                        <p className="text-lg font-bold tabular-nums">128k opens</p>
                        <p className="text-xs text-[#662222]/70">7-day window</p>
                      </div>
                      <div className="grid h-12 w-12 place-content-center rounded-lg bg-gradient-to-br from-[#662222] to-[#842A3B] text-white">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-[#1a0505]/90 p-3 text-center text-sm text-white">
                  {statRows.map((s) => (
                    <div key={s.label} className="px-2 py-2">
                      <p className="text-2xl font-bold tabular-nums text-[#e87070]">{s.value}</p>
                      <p className="text-[10px] font-medium uppercase leading-tight tracking-wider text-white/60">{s.label}</p>
                      <p className="text-[9px] text-white/40">{s.hint}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeroDivider />
      </section>

      {/* ── CATEGORY STRIP ── */}
      <section className="border-b border-[#e8c8c8] bg-white py-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {/* Label */}
            <span className="shrink-0 border-r border-[#e8c8c8] pr-5 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#662222] py-4">
              Topics
            </span>
            {/* Pills */}
            <div className="flex items-center gap-1 px-4 py-3 flex-wrap">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/news?category=${cat.toLowerCase()}`}
                  className="rounded-sm px-3.5 py-1.5 text-xs font-semibold text-[#3d1010] transition-all hover:bg-[#662222] hover:text-white"
                >
                  {cat}
                </Link>
              ))}
            </div>
            {/* View all — pushed to right */}
            <Link
              href="/news"
              className="ml-auto shrink-0 border-l border-[#e8c8c8] pl-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#662222]/60 py-4 transition hover:text-[#662222] whitespace-nowrap"
            >
              View all →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED RELEASES ── */}
      {featured.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <SectionLabel>Featured</SectionLabel>
                <h2 className="mt-3 font-[family-name:var(--site-font-display)] text-3xl font-bold tracking-[-0.03em] text-[#1a0505] sm:text-4xl">
                  Latest Press Releases
                </h2>
              </div>
              <Link
                href="/news"
                className="hidden items-center gap-2 text-sm font-semibold text-[#662222] hover:underline sm:inline-flex"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {featured.map((post, i) => {
                const content = (post.content || {}) as Record<string, unknown>
                const category = typeof content.category === 'string' ? content.category : 'Release'
                const date = post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                  : ''
                return (
                  <Link
                    key={post.id}
                    href={`/news/${post.slug}`}
                    className={`group flex flex-col overflow-hidden rounded-xl border transition hover:shadow-lg ${
                      i === 0
                        ? 'border-[#662222]/20 bg-gradient-to-br from-[#662222] to-[#842A3B] text-white shadow-md lg:col-span-2 lg:row-span-1'
                        : 'border-[#e8c8c8] bg-white hover:border-[#662222]/40'
                    }`}
                  >
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1 rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] ${
                          i === 0 ? 'bg-white/15 text-white' : 'bg-[#662222]/8 text-[#662222]'
                        }`}>
                          <Tag className="h-2.5 w-2.5" />
                          {category}
                        </span>
                        {date && (
                          <span className={`flex items-center gap-1 text-[10px] ${i === 0 ? 'text-white/60' : 'text-[#662222]/60'}`}>
                            <Calendar className="h-2.5 w-2.5" />
                            {date}
                          </span>
                        )}
                      </div>
                      <h3 className={`mt-3 font-[family-name:var(--site-font-display)] font-bold leading-tight tracking-[-0.02em] ${
                        i === 0 ? 'text-2xl text-white sm:text-3xl' : 'text-xl text-[#1a0505]'
                      }`}>
                        {post.title}
                      </h3>
                      {post.summary && (
                        <p className={`mt-3 line-clamp-3 text-sm leading-7 ${i === 0 ? 'text-white/80' : 'text-[#5c2020]'}`}>
                          {post.summary}
                        </p>
                      )}
                      <div className={`mt-4 flex items-center gap-2 text-xs font-semibold ${
                        i === 0 ? 'text-white/80 group-hover:text-white' : 'text-[#662222] group-hover:text-[#842A3B]'
                      }`}>
                        Read full release <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── SERVICES ── */}
      <section id="services" className="bg-[#1a0505] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="mt-4 font-[family-name:var(--site-font-display)] text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
              {c.home.servicesHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60">
              End-to-end press release distribution with multimedia support, journalist targeting, and measurable reach.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-white/8 bg-white/4 transition hover:border-[#662222]/50 hover:bg-white/6"
              >
                <div className={`bg-gradient-to-r px-5 py-5 ${service.accent}`}>
                  <service.icon className="h-6 w-6 text-white/90" />
                  <h3 className="mt-2 text-lg font-bold text-white">{service.name}</h3>
                </div>
                <ul className="flex flex-1 flex-col gap-3 px-5 py-6 text-sm text-white/75">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e87070]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/8 p-5">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#662222] py-2.5 text-sm font-semibold text-white transition hover:bg-[#842A3B]"
                  >
                    Get in touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="mt-4 font-[family-name:var(--site-font-display)] text-3xl font-bold tracking-[-0.03em] text-[#1a0505] sm:text-4xl">
                {c.home.aboutTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5c2020]">{c.home.aboutBody}</p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#662222] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#842A3B]"
              >
                About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#e8c8c8] bg-white p-5 shadow-sm transition hover:border-[#662222]/30 hover:shadow-md"
                >
                  <div className="grid h-10 w-10 place-content-center rounded-lg bg-gradient-to-br from-[#662222] to-[#842A3B] text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-[#1a0505]">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#5c2020]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="border-y border-[#e8c8c8] bg-gradient-to-br from-[#662222] to-[#842A3B] py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-5 w-5 text-[#e87070]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="font-[family-name:var(--site-font-display)] text-2xl font-bold italic leading-snug text-white sm:text-3xl">
            &ldquo;The clearest win was executive confidence — one archive, one voice, and stakeholders actually read the update.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-medium text-white/70">Communications lead, B2B technology</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Work with us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── LATEST RELEASES ARCHIVE ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <SectionLabel>Press Archive</SectionLabel>
              <h2 className="mt-3 font-[family-name:var(--site-font-display)] text-2xl font-bold tracking-[-0.02em] text-[#1a0505] sm:text-3xl">
                Latest Release Media
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-[#5c2020]">
                From the live feed — newest stories published to the archive. Filter by recency to scan what landed this week.
              </p>
            </div>
            <Link
              href="/news"
              className="hidden items-center gap-2 rounded-sm border border-[#662222] px-4 py-2 text-sm font-semibold text-[#662222] transition hover:bg-[#662222] hover:text-white sm:inline-flex"
            >
              Full archive <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {latest.length ? (
            <>
              <PressReleaseArchiveClient posts={latest} taskKey="mediaDistribution" />
              <p className="mt-8 text-center">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 rounded-sm bg-[#662222] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#842A3B]"
                >
                  Open full press archive
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </p>
            </>
          ) : (
            <p className="rounded-xl border border-dashed border-[#e8c8c8] py-14 text-center text-sm text-[#5c2020]">
              Releases will appear here as soon as they are published.{' '}
              <Link href="/contact" className="font-semibold text-[#662222] underline">
                Get notified
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#1a0505] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e87070]">{c.cta.badge}</p>
          <h2 className="mt-4 font-[family-name:var(--site-font-display)] text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
            {c.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60">{c.cta.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={c.cta.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-[#662222] to-[#842A3B] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#662222]/30 transition hover:from-[#7a2828] hover:to-[#9a3347]"
            >
              {c.cta.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={c.cta.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-7 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              {c.cta.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
