import type { MetadataRoute } from "next";
import { sanity } from "@/lib/sanity.client";

const locales = ["el", "en"];
const staticPaths = ["about", "arthra", "simeioseis", "rantevou", "epikoinonia", "privacy"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yoursite.gr";

  const posts: { slug: string; publishedAt?: string }[] = await sanity.fetch(`
    *[_type=="post" && isPublished==true]{
      "slug": slug.current,
      publishedAt
    } | order(publishedAt desc)
  `);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    ...locales.flatMap((locale) =>
      staticPaths.map((path) => ({
        url: `${baseUrl}/${locale}/${path}`,
        lastModified: new Date(),
      }))
    ),
  ];

  const postRoutes: MetadataRoute.Sitemap = (posts || [])
    .filter((p) => p?.slug)
    .flatMap((p) =>
      locales.map((locale) => ({
        url: `${baseUrl}/${locale}/arthra/${p.slug}`,
        lastModified: p.publishedAt ? new Date(p.publishedAt) : new Date(),
      }))
    );

  return [...staticRoutes, ...postRoutes];
}
