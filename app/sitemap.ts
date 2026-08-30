import type { MetadataRoute } from "next";

const siteUrl = "https://sami-abu-touq.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-08-30"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/cv`,
      lastModified: new Date("2026-08-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
