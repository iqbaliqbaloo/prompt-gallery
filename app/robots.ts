import type { MetadataRoute } from "next";

const siteUrl = "https://promptgalaxy-44vopfaq.manus.space";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
