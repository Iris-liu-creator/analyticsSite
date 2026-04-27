export function LoadingState() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-4 py-16 sm:px-6 lg:px-8">
      <div className="h-8 w-56 rounded bg-slate-200 dark:bg-slate-800" />
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-56 rounded-lg bg-slate-200 dark:bg-slate-800" />
        ))}
      </div>
    </div>
  );
}
