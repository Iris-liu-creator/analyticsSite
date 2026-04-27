import Image from "next/image";

export function ImageGallery({ images = [] }: { images?: string[] }) {
  if (!images.length) return null;
  return (
    <div className="my-6 grid gap-4 md:grid-cols-2">
      {images.map((image) => (
        <div key={image} className="relative aspect-[16/10] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800">
          <Image src={image} alt="" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      ))}
    </div>
  );
}
