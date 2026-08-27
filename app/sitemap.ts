import type { MetadataRoute } from "next";
import { categoryCards } from "../client/src/content/categoryCards";

const topicSlugs = ["ready-made-prompts", "story-prompts", "cinematic-prompts", "behind-the-scenes-prompts", "ai-automation-prompts", "flow-ai-prompts", "image-to-image-prompts", "text-to-image-prompts", "chatgpt-prompts", "youtube-video-prompts"];

export const dynamic = "force-static";

const siteUrl = "https://promptgallery.sbs";
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const contentUpdated = new Date("2026-08-24T00:00:00.000Z");
  const homepage = { url: `${siteUrl}/`, lastModified: contentUpdated, changeFrequency: "weekly" as const, priority: 1 };
  const categories = categoryCards.map((category) => ({
    url: `${siteUrl}/category/${slugify(category.title)}/`,
    lastModified: contentUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const topics = topicSlugs.map((slug) => ({ url: `${siteUrl}/topics/${slug}/`, lastModified: contentUpdated, changeFrequency: "monthly" as const, priority: 0.8 }));
  return [homepage, ...topics, ...categories];
}
