'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, Newspaper, Zap } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'
import { cn } from '@/lib/utils'

export const NAVBAR_OVERRIDE_ENABLED = true

const staticNav = [
  { label: 'Press Releases', href: '/news' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const trendingHeadlines = [
  'Global Markets React to Federal Reserve Rate Decision',
  'Tech Giant Announces $5B Acquisition of AI Startup',
  'Healthcare Sector Reports Record Q3 Earnings Growth',
  'New Climate Agreement Signed by 140 Nations at Summit',
  'Automotive Industry Shifts Fully to EV Production by 2030',
  'Pharmaceutical Company Receives FDA Approval for Breakthrough Drug',
  'Real Estate Market Shows Signs of Recovery in Major Cities',
  'Cybersecurity Firm Uncovers Major Data Breach Affecting Millions',
]

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#662222] via-[#842A3B] to-[#662222]" />

      {/* Main nav */}
      <div className="border-b border-[#3d1010] bg-[#1a0505]/97 shadow-[0_2px_20px_rgba(102,34,34,0.25)] backdrop-blur-md">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span
              className="grid h-10 w-10 place-content-center rounded-sm bg-gradient-to-br from-[#662222] to-[#842A3B] text-sm font-extrabold text-white shadow-lg"
              aria-hidden
            >
              <Newspaper className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-[family-name:var(--site-font-display)] text-lg font-bold tracking-[-0.02em] text-white">
                {SITE_CONFIG.name}
              </span>
              <span className="block truncate text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                {siteContent.navbar.tagline}
              </span>
            </span>
          </Link>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-white/10 lg:block" />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {staticNav.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'rounded-sm px-4 py-2 text-sm font-semibold transition-all',
                    isActive
                      ? 'bg-[#662222] text-white'
                      : 'text-white/70 hover:bg-white/8 hover:text-white',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 ml-auto lg:ml-0">
            <Link
              href="/search"
              className="hidden h-9 w-9 place-content-center rounded-sm border border-white/15 text-white/60 transition hover:border-[#842A3B] hover:text-white sm:grid"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Link>
            <Link
              href="/news"
              className="hidden items-center gap-2 rounded-sm bg-gradient-to-r from-[#662222] to-[#842A3B] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:from-[#7a2828] hover:to-[#9a3347] sm:inline-flex"
            >
              Latest Releases
            </Link>
            <button
              type="button"
              className="grid h-9 w-9 place-content-center rounded-sm border border-white/15 text-white/70 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Open menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── TRENDING NEWS MARQUEE ── */}
      <div className="overflow-hidden border-b border-[#662222]/40 bg-[#0f0303]">
        <div className="flex items-stretch">
          {/* BREAKING label */}
          <div className="flex shrink-0 items-center gap-2 bg-gradient-to-r from-[#662222] to-[#842A3B] px-4 py-2">
            <Zap className="h-3.5 w-3.5 text-white" fill="currentColor" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-white whitespace-nowrap">
              Breaking
            </span>
          </div>
          {/* Scrolling ticker */}
          <div className="relative flex-1 overflow-hidden py-2">
            <div
              className="flex gap-0 whitespace-nowrap"
              style={{ animation: 'marquee-scroll 40s linear infinite' }}
            >
              {/* Duplicate for seamless loop */}
              {[...trendingHeadlines, ...trendingHeadlines].map((headline, i) => (
                <Link
                  key={i}
                  href="/news"
                  className="inline-flex items-center gap-3 px-6 text-xs font-medium text-white/70 transition hover:text-white"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#842A3B]" />
                  {headline}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-white/10 bg-[#1a0505] px-4 py-4 lg:hidden">
          {staticNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-sm px-4 py-3 text-sm font-semibold text-white/80 hover:bg-[#662222]/30 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
            <Link
              href="/search"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm text-white/60"
            >
              <Search className="h-4 w-4" />
              Search
            </Link>
            <Link
              href="/news"
              onClick={() => setOpen(false)}
              className="rounded-sm bg-[#662222] px-4 py-2 text-sm font-semibold text-white"
            >
              Latest Releases
            </Link>
          </div>
        </div>
      ) : null}

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </header>
  )
}
