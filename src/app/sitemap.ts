import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [english, chinese] = await Promise.all([
    getBlogPosts(),
    getBlogPosts("zh"),
  ]);
  return [
    { url: `${DATA.url}/` },
    { url: `${DATA.url}/blog` },
    { url: `${DATA.url}/zh/blog` },
    ...english.map((post) => ({ url: `${DATA.url}/blog/${post.slug}` })),
    ...chinese.map((post) => ({ url: `${DATA.url}/zh/blog/${post.slug}` })),
  ];
}
