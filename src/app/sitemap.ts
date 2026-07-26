import type { MetadataRoute } from 'next'

// /contact is deliberately left out until its form actually delivers submissions
// somewhere — no reason to send traffic to a page that drops leads.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: 'https://close.energy',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://close.energy/team',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
