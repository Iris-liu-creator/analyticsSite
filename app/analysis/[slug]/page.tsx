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
  return getSlugs("analysis").map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getContentItem<ArticleMeta>("analysis", slug);
    return { title: meta.title, description: meta.summary, openGraph: { title: meta.title, description: meta.summary, images: [meta.thumbnail] } };
  } catch {
    return {};
  }
}

export default async function AnalysisDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getSlugs("analysis").includes(slug)) notFound();
  const article = getContentItem<ArticleMeta>("analysis", slug);
  const all = getAllContent<ArticleMeta>("analysis");
  const related = getRelated(all, article.meta).map((item) => item.meta);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Analysis", href: "/analysis" }, { label: article.meta.title }]} />
      <p className="text-sm font-semibold uppercase tracking-wide text-signal">{article.meta.topic ?? article.meta.category} • {formatDate(article.meta.date)} • {article.readingTime} min read</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink dark:text-white">{article.meta.title}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{article.meta.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">{article.meta.tags.map((tag) => <TagPill key={tag}>{tag}</TagPill>)}</div>
      <div className="relative my-8 aspect-[16/8] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800">
        <Image src={article.meta.thumbnail} alt="" fill className="object-cover" priority />
      </div>
      <MDXContentRenderer source={article.content} />
      <ReactionBar slug={article.meta.slug} />
      <CommentSection />
      <RelatedArticles articles={related} basePath="/analysis" />
    </article>
  );
}
