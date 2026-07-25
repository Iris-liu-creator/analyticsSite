export function PowerBIEmbed({ src, title = "Embedded dashboard" }: { src?: string; title?: string }) {
  if (!src) {
    return (
      <div className="my-6 apple-card border-dashed p-6 text-sm text-slate-600 dark:text-slate-300">
        Dashboard embed placeholder. Add a Power BI, Tableau, Plotly, Observable, or secure iframe URL in MDX to enable it.
      </div>
    );
  }

  return (
    <div className="my-6 overflow-hidden apple-card">
      <iframe
        title={title}
        src={src}
        className="aspect-video w-full"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
