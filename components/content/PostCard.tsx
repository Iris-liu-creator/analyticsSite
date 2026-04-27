import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { ArticleMeta } from "@/lib/content";
import { TagPill } from "@/components/ui/TagPill";
import { formatDate } from "@/lib/utils";

export function PostCard({ post, basePath = "/posts" }: { post: ArticleMeta; basePath?: "/posts" | "/analysis" }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-[16/9] bg-slate-100">
        <Image src={post.thumbnail} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span>{post.category}</span>
          <span aria-hidden="true">•</span>
          <span>{formatDate(post.date)}</span>
          <span aria-hidden="true">•</span>
          <Clock className="h-3.5 w-3.5" />
          <span>{post.readingTime} min</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink dark:text-white">{post.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => <TagPill key={tag}>{tag}</TagPill>)}
          {post.difficulty ? <TagPill className="bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-200">{post.difficulty}</TagPill> : null}
        </div>
        <a href={`${basePath}/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-signal hover:underline">
          Read more <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
