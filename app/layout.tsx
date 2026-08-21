import type { Metadata } from "next";
import "../client/src/index.css";

const siteUrl = "https://promptgallery.sbs";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "AI Video Prompt Library: 150+ Ready-Made Prompts | Prompt Gallery", template: "%s | Prompt Gallery" },
  description: "Explore 150+ ready-made AI video prompts for stories, cinematic scenes, animation, YouTube, ads, education, vlogs, documentaries, and multi-scene videos.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
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
          description: "A visual library of ready-to-use AI video prompts for stories, cinematic scenes, animation, YouTube, ads, education, vlogs, documentaries, and multi-scene videos.",
          potentialAction: { "@type": "SearchAction", target: `${siteUrl}/?q={search_term_string}`, "query-input": "required name=search_term_string" },
        }) }} />
        {children}
        {analyticsEndpoint && analyticsWebsiteId ? <script defer src={`${analyticsEndpoint}/umami`} data-website-id={analyticsWebsiteId} /> : null}
      </body>
    </html>
  );
}
