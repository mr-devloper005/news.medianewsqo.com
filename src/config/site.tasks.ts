export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Release media',
    route: '/news',
    description: 'Official announcements, launches, and media statements.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/news',
} as const
