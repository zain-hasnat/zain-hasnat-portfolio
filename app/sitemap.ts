import type { MetadataRoute } from "next";
import { caseStudies, siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${siteConfig.url}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudyRoutes,
  ];
}
