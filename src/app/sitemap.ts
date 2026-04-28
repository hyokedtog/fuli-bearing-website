import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fuli-bearing-website.vercel.app';

const pages = [
  { path: '',          priority: 1.0, changeFrequency: 'weekly'  as const },
  { path: '/products', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/about',    priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact',  priority: 0.7, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ['en', 'ar'].flatMap((locale) =>
    pages.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }))
  );
}
