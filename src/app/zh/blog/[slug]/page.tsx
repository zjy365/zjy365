import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BlogContent } from "@/components/blog-content";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getBlogPosts("zh");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug, "zh");

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    keywords,
    author,
    category,
    tags,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    authors: author ? [{ name: author }] : undefined,
    category,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/zh/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
      tags: tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    other: {
      "article:author": author,
      "article:section": category,
      "article:tag": tags?.join(", "),
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug, "zh");

  if (!post) {
    notFound();
  }

  // Get all Chinese posts to find previous/next
  const allPosts = await getBlogPosts("zh");
  const sortedPosts = allPosts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const currentIndex = sortedPosts.findIndex((p) => p.slug === params.slug);
  const previousPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/zh/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />

      {/* Back to blog link */}
      <Link
        href="/zh/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        返回博客列表
      </Link>

      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <Suspense fallback={<div className="animate-pulse">加载中...</div>}>
        <BlogContent content={post.source} />
      </Suspense>

      {/* Previous/Next navigation */}
      <div className="mt-16 pt-8 border-t border-border max-w-[650px]">
        <div className="flex justify-between items-center gap-4">
          <div className="flex-1">
            {previousPost ? (
              <Link
                href={`/zh/blog/${previousPost.slug}`}
                className="group flex flex-col gap-1 text-sm"
              >
                <div className="flex items-center gap-1 text-muted-foreground group-hover:text-foreground transition-colors">
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>上一篇</span>
                </div>
                <span className="text-foreground group-hover:underline line-clamp-1">
                  {previousPost.metadata.title}
                </span>
              </Link>
            ) : (
              <div className="opacity-0">-</div>
            )}
          </div>

          <div className="flex-1 flex flex-col items-end text-right">
            {nextPost ? (
              <Link
                href={`/zh/blog/${nextPost.slug}`}
                className="group flex flex-col gap-1 text-sm"
              >
                <div className="flex items-center justify-end gap-1 text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>下一篇</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-foreground group-hover:underline line-clamp-1">
                  {nextPost.metadata.title}
                </span>
              </Link>
            ) : (
              <div className="opacity-0">-</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
