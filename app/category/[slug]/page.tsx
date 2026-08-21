import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categoryCards } from "../../../client/src/content/categoryCards";

const siteUrl = "https://promptgallery.sbs";
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function generateStaticParams() {
  return categoryCards.map((category) => ({ slug: slugify(category.title) }));
}

function getCategory(slug: string) {
  return categoryCards.find((category) => slugify(category.title) === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category not found" };
  return {
    title: `${category.title} AI Video Prompt`,
    description: `Use a production-ready ${category.title.toLowerCase()} AI video prompt with connected scenes, visual continuity, camera direction, sound, and character controls.`,
    alternates: { canonical: `${siteUrl}/category/${slug}` },
    openGraph: {
      type: "article",
      title: `${category.title} AI Video Prompt | Prompt Gallery`,
      description: `A ready-made ${category.title.toLowerCase()} prompt for connected AI video scenes.`,
      url: `${siteUrl}/category/${slug}`,
      images: [{ url: category.image, alt: `${category.title} generated artwork` }],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${category.title} AI Video Prompt`,
    description: category.description,
    url: `${siteUrl}/category/${slug}`,
    image: category.image,
    publisher: { "@type": "Organization", name: "Prompt Gallery", url: siteUrl },
  };
  return (

    <main className="min-h-screen bg-[#fbf7ef] px-5 py-8 text-[#28252a] sm:px-8 lg:px-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="mx-auto max-w-[1100px]">
        <Link href="/" className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#ff6b6b]">← Prompt Gallery</Link>
        <article className="mt-8 overflow-hidden rounded-[30px] border border-[#2d2932]/10 bg-white shadow-[8px_8px_0_#28252a]">
          <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <div className="min-h-[280px] bg-[#f4e9e5] lg:min-h-[520px]"><img src={category.image} alt={`${category.title} generated artwork`} className="h-full w-full object-cover" /></div>
            <div className="p-7 sm:p-10">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6b6b]">{String(category.id).padStart(3, "0")} · {category.kind} · {category.duration}</p>
              <h1 className="mt-4 font-display text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">{category.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-[#746c73]">{category.description}</p>
              <section className="mt-8 rounded-2xl border border-[#2d2932]/10 bg-[#fbf7ef] p-5">
                <h2 className="font-display text-2xl font-bold tracking-[-0.04em]">Production-ready prompt</h2>
                <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-[#4d474e]">{category.prompt}</p>
              </section>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
