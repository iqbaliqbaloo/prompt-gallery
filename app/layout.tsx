import type { Metadata } from "next";
import "../client/src/index.css";

const siteUrl = "https://promptgallery.sbs";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "AI Video Prompt Library: 165 Ready-Made Prompts | Prompt Gallery", template: "%s | Prompt Gallery" },
  description: "Explore 165 ready-made AI video prompts for stories, cinematic scenes, animation, YouTube, ads, education, vlogs, documentaries, and multi-scene videos.",
  keywords: ["AI video prompts", "ready-made video prompts", "cinematic video prompts", "AI animation prompts", "YouTube video prompts", "multi-scene video prompts"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  openGraph: {
    type: "website",
    siteName: "Prompt Gallery",
    title: "AI Video Prompt Library: 165 Ready-Made Prompts | Prompt Gallery",
    description: "Explore 165 ready-made AI video prompts for stories, cinematic scenes, animation, YouTube, ads, education, vlogs, documentaries, and multi-scene videos.",
    url: siteUrl,
    images: [{ url: "https://promptgalaxy-44vopfaq.manus.space/manus-storage/ai-animation-product-card_022f5f6a.jpg", width: 1200, height: 630, alt: "Prompt Gallery AI video prompt library" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Prompt Library: 165 Ready-Made Prompts | Prompt Gallery",
    description: "Explore 165 ready-made AI video prompts for stories, cinematic scenes, animation, YouTube, ads, education, vlogs, documentaries, and multi-scene videos.",
    images: ["https://promptgalaxy-44vopfaq.manus.space/manus-storage/ai-animation-product-card_022f5f6a.jpg"],
  },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const analyticsEndpoint = process.env.VITE_ANALYTICS_ENDPOINT;
  const analyticsWebsiteId = process.env.VITE_ANALYTICS_WEBSITE_ID;
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Prompt Gallery",
          url: siteUrl,
          description: "A visual library of 165 ready-to-use AI video prompts for stories, cinematic scenes, animation, YouTube, ads, education, vlogs, documentaries, and multi-scene videos.",
        }) }} />
        {children}
        {analyticsEndpoint && analyticsWebsiteId ? <script defer src={`${analyticsEndpoint}/umami`} data-website-id={analyticsWebsiteId} /> : null}
      </body>
    </html>
  );
}
