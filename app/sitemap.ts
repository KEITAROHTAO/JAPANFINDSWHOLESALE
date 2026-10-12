import type { MetadataRoute } from "next";
import { getVisibleProducts, WEB_GROUPS } from "@/lib/catalog";

const baseUrl = "https://japanfindswholesale-taupe.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getVisibleProducts();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/available-items`, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/how-to-order`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/location`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const groupPages: MetadataRoute.Sitemap = WEB_GROUPS.map((group) => ({
    url: `${baseUrl}/available-items?group=${group.slug}`,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${encodeURIComponent(product.code)}`,
    lastModified: product.createdAt ? new Date(product.createdAt) : undefined,
    changeFrequency: "daily",
    priority: 0.6,
  }));

  return [...staticPages, ...groupPages, ...productPages];
}
