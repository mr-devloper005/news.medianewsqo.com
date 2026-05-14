import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'
import { Twitter, Linkedin, Rss, Newspaper, Mail, Phone } from 'lucide-react'

export const FOOTER_OVERRIDE_ENABLED = true

const productLinks = () =>
  SITE_CONFIG.tasks.filter((t) => t.enabled).map((t) => ({ label: t.label, href: t.route }))

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
]

const resources = [
  { label: 'Help Center', href: '/help' },
  { label: 'Search', href: '/search' },
]

export function FooterOverride() {
  return (
    <footer className="border-t-2 border-[#662222] bg-[#0f0303] text-white">
      {/* Top gradient accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#842A3B]/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-content-center rounded-sm bg-gradient-to-br from-[#662222] to-[#842A3B] text-sm font-extrabold shadow-lg" aria-hidden>
                <Newspaper className="h-5 w-5 text-white" />
              </span>
              <span className="font-[family-name:var(--site-font-display)] text-lg font-bold text-white">{SITE_CONFIG.name}</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/60 max-w-xs">{SITE_CONFIG.description}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#842A3B]">{siteContent.footer.tagline}</p>


            {/* Social links */}
            <div className="mt-5 flex gap-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-content-center rounded-sm border border-white/10 text-white/50 transition hover:border-[#662222] hover:bg-[#662222]/20 hover:text-white"
                aria-label="Twitter / X"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-content-center rounded-sm border border-white/10 text-white/50 transition hover:border-[#662222] hover:bg-[#662222]/20 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <Link
                href="/news"
                className="grid h-9 w-9 place-content-center rounded-sm border border-white/10 text-white/50 transition hover:border-[#662222] hover:bg-[#662222]/20 hover:text-white"
                aria-label="Press RSS feed"
              >
                <Rss className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Press Releases */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#842A3B] border-b border-[#662222]/30 pb-2">Press Releases</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {productLinks().map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/search" className="hover:text-white transition">
                  Search Archive
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition">
                  All Releases
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#842A3B] border-b border-[#662222]/30 pb-2">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#842A3B] border-b border-[#662222]/30 pb-2">Resources</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#842A3B] border-b border-[#662222]/30 pb-2">Legal</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter CTA */}
            <div className="mt-8 rounded-sm border border-[#662222]/40 bg-[#662222]/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#842A3B]">Media Inquiries</p>
              <p className="mt-2 text-xs text-white/60 leading-5">For press inquiries and media relations, reach out to our editorial team.</p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1.5 rounded-sm bg-[#662222] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#842A3B]"
              >
                <Mail className="h-3 w-3" />
                Contact Press Team
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-xs text-white/35 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="text-white/25">{SITE_CONFIG.domain}</p>
        </div>
      </div>
    </footer>
  )
}
