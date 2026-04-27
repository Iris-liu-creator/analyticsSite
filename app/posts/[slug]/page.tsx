import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CommentSection } from "@/components/content/CommentSection";
import { MDXContentRenderer } from "@/components/content/MDXContentRenderer";
import { ReactionBar } from "@/components/content/ReactionBar";
import { RelatedArticles } from "@/components/content/RelatedContent";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TagPill } from "@/components/ui/TagPill";
import { ArticleMeta, getAllContent, getContentItem, getRelated, getSlugs } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getSlugs("posts").map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getContentItem<ArticleMeta>("posts", slug);
    return { title: meta.title, description: meta.summary, openGraph: { title: meta.title, description: meta.summary, images: [meta.thumbnail] } };
  } catch {
    return {};
  }
}

export default async function PostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getSlugs("posts").includes(slug)) notFound();
  const post = getContentItem<ArticleMeta>("posts", slug);
  const all = getAllContent<ArticleMeta>("posts");
  const related = getRelated(all, post.meta).map((item) => item.meta);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Posts", href: "/posts" }, { label: post.meta.title }]} />
      <p className="text-sm font-semibold uppercase tracking-wide text-signal">{post.meta.category} • {formatDate(post.meta.date)} • {post.readingTime} min read</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink dark:text-white">{post.meta.title}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{post.meta.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">{post.meta.tags.map((tag) => <TagPill key={tag}>{tag}</TagPill>)}</div>
      <div className="relative my-8 aspect-[16/8] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800">
        <Image src={post.meta.thumbnail} alt="" fill className="object-cover" priority />
      </div>
      <MDXContentRenderer source={post.content} />
      <ReactionBar slug={post.meta.slug} />
      <CommentSection />
      <RelatedArticles articles={related} basePath="/posts" />
    </article>
  );
}
