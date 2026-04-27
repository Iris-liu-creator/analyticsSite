import type { Metadata } from "next";
import { ArticleLibrary } from "@/components/content/ArticleLibrary";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { postCategories } from "@/data/tags";
import { ArticleMeta, getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Posts",
  description: "Personal updates, learning notes, technical blogs, and career reflections."
};

export default function PostsPage() {
  const posts = getAllContent<ArticleMeta>("posts").map((item) => item.meta);
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags)));
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Posts" }]} />
      <div className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight text-ink dark:text-white">Posts</h1>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">Learning notes, career reflections, and practical technical write-ups.</p>
      </div>
      <ArticleLibrary articles={posts} basePath="/posts" filters={{ categories: postCategories, tags }} />
    </section>
  );
}
