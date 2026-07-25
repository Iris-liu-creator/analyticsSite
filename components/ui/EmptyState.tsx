import { Inbox } from "lucide-react";

export function EmptyState({ title = "No matches", message = "Try changing the search or filters." }) {
  return (
    <div className="apple-card border-dashed p-10 text-center">
      <span className="apple-icon mx-auto h-12 w-12"><Inbox className="h-6 w-6" /></span>
      <h3 className="mt-4 text-lg font-semibold text-ink dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{message}</p>
    </div>
  );
}
