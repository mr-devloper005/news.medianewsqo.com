export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || '8yc73u266k',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'News Medianewsqo',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Independent media updates',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A media-distribution newsroom for announcements, coverage, and press updates on News Medianewsqo.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'news.medianewsqo.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://news.medianewsqo.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
