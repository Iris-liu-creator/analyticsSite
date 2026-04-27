import { MDXRemote } from "next-mdx-remote/rsc";
import { ChartEmbed } from "@/components/media/ChartEmbed";
import { PowerBIEmbed } from "@/components/media/PowerBIEmbed";
import { ImageGallery } from "@/components/media/ImageGallery";

const components = {
  ChartEmbed,
  PowerBIEmbed,
  ImageGallery
};

export function MDXContentRenderer({ source }: { source: string }) {
  return (
    <div className="prose-portfolio">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
