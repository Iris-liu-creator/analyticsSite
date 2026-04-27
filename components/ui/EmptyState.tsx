import { Inbox } from "lucide-react";

export function EmptyState({ title = "No matches", message = "Try changing the search or filters." }) {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
      <Inbox className="mx-auto h-10 w-10 text-slate-400" />
      <h3 className="mt-4 text-lg font-semibold text-ink dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{message}</p>
    </div>
  );
}
