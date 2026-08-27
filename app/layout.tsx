import type { Metadata } from "next";
import "../client/src/index.css";

const siteUrl = "https://promptgallery.sbs";
const brandIcon = "/manus-storage/prompt-gallery-favicon_47bb54ff.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "AI Video Prompt Library: 165 Ready-Made Prompts | Prompt Gallery", template: "%s | Prompt Gallery" },
  description: "Explore 165 ready-made AI video prompts for stories, cinematic scenes, animation, YouTube, ads, education, vlogs, documentaries, and multi-scene videos.",
  alternates: { canonical: "/" },
  verification: { google: "a3vmbQInCsgeIwxRP1LGD-nToTmWTBNk3JcNYM9sCy4" },
  category: "AI video prompts",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  openGraph: {
    type: "website",
    siteName: "Prompt Gallery",
    title: "AI Video Prompt Library: 165 Ready-Made Prompts | Prompt Gallery",
    description: "Explore 165 ready-made AI video prompts for stories, cinematic scenes, animation, YouTube, ads, education, vlogs, documentaries, and multi-scene videos.",
    url: siteUrl,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Prompt Gallery AI video prompt library" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Prompt Library: 165 Ready-Made Prompts | Prompt Gallery",
    description: "Explore 165 ready-made AI video prompts for stories, cinematic scenes, animation, YouTube, ads, education, vlogs, documentaries, and multi-scene videos.",
    images: ["/og-image.svg"],
  },
  icons: { icon: [{ url: brandIcon, type: "image/png", sizes: "512x512" }], apple: brandIcon, shortcut: brandIcon },
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
          inLanguage: "en",
          publisher: { "@type": "Organization", name: "Prompt Gallery", url: siteUrl, logo: `${siteUrl}${brandIcon}` },
        }) }} />
        {children}
        {analyticsEndpoint && analyticsWebsiteId ? <script defer src={`${analyticsEndpoint}/umami`} data-website-id={analyticsWebsiteId} /> : null}
      </body>
    </html>
  );
}
