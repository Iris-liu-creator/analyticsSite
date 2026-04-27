import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getReadingTime } from "@/lib/utils";

export type ContentKind = "projects" | "analysis" | "posts";

export type ProjectMeta = {
  title: string;
  slug: string;
  date: string;
  category: string;
  tools: string[];
  businessFunction?: string[];
  summary: string;
  thumbnail: string;
  featured?: boolean;
  status?: "Featured" | "Recent" | "Archived";
  impact?: string;
  heroImage?: string;
  difficulty?: string;
  tags?: string[];
  embedUrl?: string;
};

export type ArticleMeta = {
  title: string;
  slug: string;
  date: string;
  category: string;
  topic?: string;
  tags: string[];
  summary: string;
  thumbnail: string;
  featured?: boolean;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  readingTime?: number;
};

export type ContentItem<T> = {
  meta: T;
  content: string;
  readingTime: number;
};

const contentRoot = path.join(process.cwd(), "content");

function getDirectory(kind: ContentKind) {
  return path.join(contentRoot, kind);
}

export function getSlugs(kind: ContentKind) {
  const directory = getDirectory(kind);
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getContentItem<T>(kind: ContentKind, slug: string): ContentItem<T> {
  const fullPath = path.join(getDirectory(kind), `${slug}.mdx`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  const readingTime = getReadingTime(content);

  return {
    meta: { ...data, slug: data.slug ?? slug, readingTime } as T,
    content,
    readingTime
  };
}

export function getAllContent<T extends { date: string }>(kind: ContentKind) {
  return getSlugs(kind)
    .map((slug) => getContentItem<T>(kind, slug))
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}

export function getRelated<T extends { slug: string; category?: string; tags?: string[] }>(
  items: ContentItem<T>[],
  current: T,
  limit = 3
) {
  return items
    .filter((item) => item.meta.slug !== current.slug)
    .map((item) => {
      const tagOverlap = item.meta.tags?.filter((tag) => current.tags?.includes(tag)).length ?? 0;
      const categoryScore = item.meta.category === current.category ? 2 : 0;
      return { item, score: tagOverlap + categoryScore };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}
