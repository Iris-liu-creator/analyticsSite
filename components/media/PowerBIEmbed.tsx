export function PowerBIEmbed({ src, title = "Embedded dashboard" }: { src?: string; title?: string }) {
  if (!src) {
    return (
      <div className="my-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
        Dashboard embed placeholder. Add a Power BI, Tableau, Plotly, Observable, or secure iframe URL in MDX to enable it.
      </div>
    );
  }

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
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
