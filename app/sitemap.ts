import type { MetadataRoute } from "next";
import projects from "@/lib/projects.json";
import { SITE_URL } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/about-us", priority: 0.8 },
    { path: "/bathroom-renovations", priority: 0.9 },
    { path: "/service/kitchen-renovations", priority: 0.9 },
    { path: "/service/interior-renovations", priority: 0.9 },
    { path: "/service/home-renovations", priority: 0.9 },
    { path: "/gallery", priority: 0.8 },
    { path: "/faq", priority: 0.6 },
    { path: "/request-consultation", priority: 0.8 },
    { path: "/contact-us", priority: 0.7 },
    { path: "/promotions", priority: 0.5 },
    { path: "/privacy-policy", priority: 0.2 },
    { path: "/kitchen-renovations-canberra", priority: 0.7 },
    { path: "/home-renovations-canberra", priority: 0.7 },
    { path: "/bathroom-renovations-canberra", priority: 0.7 },
    { path: "/kitchen-design-canberra", priority: 0.7 },
    { path: "/interior-designer-canberra", priority: 0.7 },
    { path: "/home-renovations-tuggeranong", priority: 0.7 },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...projects.map((p) => ({
      url: `${SITE_URL}/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
