import type { MetadataRoute } from "next";
import { categoryCards } from "../client/src/content/categoryCards";

export const dynamic = "force-static";

const siteUrl = "https://promptgallery.sbs";
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const homepage = { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 };
  const categories = categoryCards.map((category) => ({
    url: `${siteUrl}/category/${slugify(category.title)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [homepage, ...categories];
}
