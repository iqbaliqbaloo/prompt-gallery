import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categoryCards } from "../../../client/src/content/categoryCards";

const siteUrl = "https://promptgallery.sbs";
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

type Topic = {
  slug: string;
  title: string;
  description: string;
  
  keywords: string[];
};

const topics: Topic[] = [
  { slug: "ready-made-prompts", title: "Ready Made AI Video Prompts", description: "Ready Made AI Video Prompts for stories, animation, cinematic scenes, lessons, ads, vlogs, and documentaries. Start creating with production ready prompts", "keywords": ["AI video prompts","ready made AI video prompts","AI video prompt templates","AI video generation prompts","cinematic AI video prompts","AI animation prompts","AI storytelling prompts","video prompt ideas" ] },
  { slug: "story-prompts", title: "AI Story Prompts", description: " AI Story Prompts for characters, plots, adventures, mysteries, and cinematic videos. Create engaging stories with ready-to-use prompts.", keywords: ["AI story prompts",
    "AI storytelling prompts","AI story ideas","AI video story prompts","AI prompts for stories","cinematic story prompts","character story prompts","short film story prompts"] },
  { slug: "cinematic-prompts", title: "Cinematic AI Video Prompts", description: "Create cinematic AI videos with prompts for camera movement, lighting, composition, atmosphere, and connected film scenes.",keywords: ["cinematic", "film", "camera", "action"] },
  { slug: "behind-the-scenes-prompts", title: "Behind-the-Scenes Video Prompts", description: "Generate behind-the-scenes AI video prompts for film sets, creative studios, production diaries, and making-of content.", keywords: ["behind", "studio", "production", "documentary"] },
  { slug: "ai-automation-prompts", title: "AI Automation Prompts", description: "Explore AI automation prompts for content workflows, video planning, creative production, and repeatable marketing tasks.", keywords: ["automation", "workflow", "content", "training"] },
  { slug: "flow-ai-prompts", title: "Flow AI Video Prompts", description: "Find Flow AI prompt ideas for connected multi-scene videos, consistent characters, camera continuity, and visual storytelling.", keywords: ["flow", "scene", "character", "video"] },
  { slug: "image-to-image-prompts", title: "Image-to-Image Prompts", description: "Use image-to-image prompts to preserve visual references while exploring new styles, scenes, characters, and compositions.", keywords: ["image", "style", "character", "portrait"] },
  { slug: "text-to-image-prompts", title: "Text-to-Image Prompts", description: "Discover text-to-image prompts for AI art, character design, environments, editorial scenes, products, and visual concepts.", keywords: ["image", "design", "product", "portrait"] },
  { slug: "chatgpt-prompts", title: "ChatGPT Prompts for Video Creation", description: "Use ChatGPT prompts to develop video ideas, scripts, scenes, storyboards, narration, and production plans.", keywords: ["chatgpt", "script", "story", "lesson"] },
  { slug: "youtube-video-prompts", title: "YouTube Video Prompts", description: "Find YouTube video prompts for long-form videos, Shorts, explainers, tutorials, vlogs, product videos, and story-led channels.", keywords: ["youtube", "vlog", "tutorial", "video"] },
];

function getTopic(slug: string) { return topics.find((topic) => topic.slug === slug); }

export function generateStaticParams() { return topics.map((topic) => ({ slug: topic.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return { title: "Topic not found" };
  const canonicalUrl = `${siteUrl}/topics/${slug}/`;
  return {
    title: topic.title,
    description: topic.description,
    keywords: [topic.title, "AI video prompts", ...topic.keywords],
    alternates: { canonical: `/topics/${slug}/` },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    openGraph: { type: "website", title: `${topic.title} | Prompt Gallery`, description: topic.description, url: canonicalUrl, images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Prompt Gallery AI video prompt library" }] },
    twitter: { card: "summary_large_image", title: `${topic.title} | Prompt Gallery`, description: topic.description, images: ["/og-image.svg"] },
  };
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();
  const related = categoryCards.filter((category) => topic.keywords.some((keyword) => `${category.title} ${category.description}`.toLowerCase().includes(keyword))).slice(0, 12);
  const canonicalUrl = `${siteUrl}/topics/${slug}/`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: topic.title,
    description: topic.description,
    url: canonicalUrl,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: "Prompt Gallery", url: siteUrl },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: related.length,
      itemListElement: related.map((category, index) => ({ "@type": "ListItem", position: index + 1, name: category.title, url: `${siteUrl}/category/${slugify(category.title)}/` })),
    },
  };
  return (
    <main className="min-h-screen bg-[#fbf7ef] px-5 py-10 text-[#28252a] sm:px-8 lg:px-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="mx-auto max-w-[1120px]">
        <Link href="/" className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#ff6b6b]">← Prompt Gallery</Link>
        <header className="mt-12 max-w-4xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b6b]">Prompt topic guide</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-7xl">{topic.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#746c73]">{topic.intro}</p>
        </header>
        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {["Start with the subject", "Lock the visual language", "Connect every scene"].map((heading, index) => <div key={heading} className="border-t-2 border-[#28252a] pt-4"><p className="font-mono text-xs font-bold text-[#ff6b6b]">0{index + 1}</p><h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.04em]">{heading}</h2><p className="mt-2 text-sm leading-relaxed text-[#746c73]">{index === 0 ? "Name the audience, action, setting, and emotional goal before adding visual detail." : index === 1 ? "Specify framing, lighting, color, texture, and movement so the model has a coherent visual target." : "Repeat the character reference and make the ending of each scene the starting point for the next."}</p></div>)}
        </section>
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b6b]">Explore the library</p><h2 className="mt-2 font-display text-4xl font-black tracking-[-0.05em]">Related prompt categories</h2></div><Link href="/#categories" className="hidden rounded-full bg-[#28252a] px-4 py-2 text-sm font-bold text-white sm:block">All categories →</Link></div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{related.map((category) => <Link key={category.id} href={`/category/${slugify(category.title)}/`} className="group rounded-2xl border border-[#28252a]/10 bg-white p-5 shadow-[4px_4px_0_#f2d95c] transition-transform hover:-translate-y-1"><p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff6b6b]">{String(category.id).padStart(3, "0")} · {category.kind}</p><h3 className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em] group-hover:text-[#ff6b6b]">{category.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#746c73]">{category.description}</p></Link>)}</div>
        </section>
      </div>
    </main>
  );
}
