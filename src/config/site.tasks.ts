export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Press Releases',
    route: '/news',
    description: 'Official press releases, corporate announcements, and media statements.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/news',
} as const
