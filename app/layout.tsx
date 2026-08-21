import type { Metadata } from "next";
import "../client/src/index.css";

const siteUrl = "https://promptgallery.sbs";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "AI Video Prompt Library | Prompt Gallery", template: "%s | Prompt Gallery" },
  description: "Discover 150 ready-to-use AI video prompts for animated stories, cinematic films, lessons, ads, vlogs, documentaries, and multi-scene video creation.",
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
          description: "A visual library of ready-to-use AI video prompts for stories, lessons, ads, vlogs, documentaries, and animation.",
          potentialAction: { "@type": "SearchAction", target: `${siteUrl}/?q={search_term_string}`, "query-input": "required name=search_term_string" },
        }) }} />
        {children}
        {analyticsEndpoint && analyticsWebsiteId ? <script defer src={`${analyticsEndpoint}/umami`} data-website-id={analyticsWebsiteId} /> : null}
      </body>
    </html>
  );
}
