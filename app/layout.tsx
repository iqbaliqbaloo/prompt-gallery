import type { Metadata } from "next";
import "../client/src/index.css";

const siteUrl = "https://promptgalaxy-44vopfaq.manus.space";

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
        {children}
        {analyticsEndpoint && analyticsWebsiteId ? <script defer src={`${analyticsEndpoint}/umami`} data-website-id={analyticsWebsiteId} /> : null}
      </body>
    </html>
  );
}
