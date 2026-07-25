import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { ArticleMeta } from "@/lib/content";
import { TagPill } from "@/components/ui/TagPill";
import { formatDate } from "@/lib/utils";

export function PostCard({ post, basePath = "/analysis" }: { post: ArticleMeta; basePath?: "/analysis" }) {
  const href = `${basePath}/${post.slug}`;

  return (
    <Link
      href={href}
      aria-label={`Read analysis: ${post.title}`}
      className="group block h-full overflow-hidden apple-card apple-card-hover focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 dark:focus:ring-offset-slate-950"
    >
      <article className="flex h-full flex-col">
        <div className="apple-image-frame aspect-[16/9]">
          <Image src={post.thumbnail} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>{post.category}</span>
            <span aria-hidden="true">|</span>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden="true">|</span>
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readingTime} min</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-ink dark:text-white">{post.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.summary}</p>
          <div className="mb-5 mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => <TagPill key={tag}>{tag}</TagPill>)}
            {post.difficulty ? <TagPill className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-200">{post.difficulty}</TagPill> : null}
          </div>
          <span className="mt-auto inline-flex w-full items-center justify-center gap-2 apple-control px-4 py-2.5 text-sm font-semibold">
            Read Analysis <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}
