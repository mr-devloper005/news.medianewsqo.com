import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Professional Press Distribution',
  },
  footer: {
    tagline: 'Trusted Media Relations Platform',
  },
  hero: {
    badge: 'Media Distribution Platform',
    title: ['Distribute Press Releases with Authority, Speed, and Global Reach.'],
    description:
      'Professional press release distribution platform connecting your news with journalists, media outlets, and digital channels worldwide. Built for communications teams who demand precision and measurable results.',
    primaryCta: {
      label: 'View Press Releases',
      href: '/news',
    },
    secondaryCta: {
      label: 'Contact Media Team',
      href: '/contact',
    },
    searchPlaceholder: 'Search press releases',
    focusLabel: 'Latest',
    featureCardBadge: 'Network reach',
    featureCardTitle: 'Track distribution and coverage in one place.',
    featureCardDescription:
      'Monitor where your story travels and keep stakeholders aligned with a single source of truth for every announcement.',
  },
  home: {
    metadata: {
      title: 'Professional Press Release Distribution Platform',
      description:
        'Distribute corporate announcements, product launches, and media statements with a professional press release distribution platform trusted by communications teams worldwide.',
      openGraphTitle: 'Professional Press Release Distribution | Media Relations Platform',
      openGraphDescription: 'Distribute press releases, reach journalists, and track media coverage with our professional distribution platform.',
      keywords: [
        'press release distribution',
        'media relations',
        'public relations',
        'news wire',
        'corporate communications',
        'media outreach',
        'journalist targeting',
        'press distribution',
        'media coverage',
      ],
    },
    servicesHeading: 'Professional Press Release Distribution Services',
    aboutTitle: 'Built for Communications Professionals',
    aboutBody:
      'Our platform is designed specifically for PR professionals, communications teams, and media relations experts who need reliable, measurable press release distribution. Every release follows AP style guidelines with consistent formatting across all channels.',
    resourcesHeading: 'Success Stories',
    caseStudies: [
      { title: 'Global retail product launch', topic: 'Case study', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format&fit=crop' },
      { title: 'Financial services quarterly earnings', topic: 'Case study', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop' },
      { title: 'Technology company acquisition', topic: 'Case study', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&auto=format&fit=crop' },
    ],
  },
  cta: {
    badge: 'Ready to Distribute',
    title: 'From draft to distribution, maintain brand consistency across all channels.',
    description: 'Start with a professionally formatted release, attach multimedia assets, and distribute to targeted media lists with full tracking and analytics.',
    primaryCta: {
      label: 'Contact Sales',
      href: '/contact',
    },
    secondaryCta: {
      label: 'View Latest Releases',
      href: '/news',
    },
  },
  taskSectionHeading: 'Latest Press Releases',
  taskSectionDescriptionSuffix: 'Browse recently distributed announcements.',
} as const

export const sitePricingContent = {
  pageTitle: 'Simple pricing for distribution teams',
  pageDescription: 'Choose a lane that matches how often you publish. Upgrade when volume grows—no surprise limits on reader access.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Release media',
    description: 'Browse the latest distributed announcements and media updates.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Press Release Archive',
    paragraphs: [
      'Browse our complete archive of press releases, corporate announcements, and media statements. Filter by category to find the news that matters to your beat.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contact Press Team', href: '/contact' },
    ],
  },
}
