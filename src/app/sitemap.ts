import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://skills-dev-care.vercel.app";

  const routes = [
    "",
    "/roadmaps/frontend",
    "/roadmaps/backend",
    "/roadmaps/ai",
    "/roadmaps/dev-ai",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
