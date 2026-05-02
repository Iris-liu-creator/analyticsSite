import { MDXRemote } from "next-mdx-remote/rsc";
import { ChartEmbed } from "@/components/media/ChartEmbed";
import { PowerBIEmbed } from "@/components/media/PowerBIEmbed";
import { ImageGallery } from "@/components/media/ImageGallery";
import { cn } from "@/lib/utils";

const components = {
  ChartEmbed,
  PowerBIEmbed,
  ImageGallery
};

export function MDXContentRenderer({ source, className }: { source: string; className?: string }) {
  return (
    <div className={cn("prose-portfolio", className)}>
      <MDXRemote source={source} components={components} />
    </div>
  );
}
