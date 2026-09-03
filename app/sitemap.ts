import type { MetadataRoute } from "next";
import { categoryCards } from "../client/src/content/categoryCards";

const topicSlugs = [
  "ready-made-prompts", "story-prompts", "cinematic-prompts",
  "behind-the-scenes-prompts", "ai-automation-prompts", "flow-ai-prompts",
  "image-to-image-prompts", "text-to-image-prompts", "chatgpt-prompts",
  "youtube-video-prompts",
];

export const dynamic = "force-static";

const siteUrl = "https://promptgallery.sbs";
const slugify = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(); // ✅ dynamic, updates every build/request

  const homepage = {
    url: `${siteUrl}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 1,
  };

  const categories = categoryCards.map((category) => ({
    url: `${siteUrl}/category/${category.slug ?? slugify(category.title)}/`, // ✅ prefer real slug field
    lastModified: category.updatedAt ? new Date(category.updatedAt) : now, // ✅ per-item date if you have it
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const topics = topicSlugs.map((slug) => ({
    url: `${siteUrl}/topics/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [homepage, ...topics, ...categories];
}