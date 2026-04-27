import { ArticleMeta } from "@/lib/content";
import { PostCard } from "@/components/content/PostCard";

export function AnalysisCard({ analysis }: { analysis: ArticleMeta }) {
  return <PostCard post={analysis} basePath="/analysis" />;
}
