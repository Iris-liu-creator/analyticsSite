"use client";

import { ThumbsUp, Lightbulb, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const reactions = [
  { key: "like", label: "Like", icon: ThumbsUp },
  { key: "useful", label: "Useful", icon: Lightbulb },
  { key: "insightful", label: "Insightful", icon: Sparkles }
];

type State = Record<string, boolean>;

export function ReactionBar({ slug }: { slug: string }) {
  const storageKey = `portfolio-reactions:${slug}`;
  const [state, setState] = useState<State>({});

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    setState(raw ? JSON.parse(raw) as State : {});
  }, [storageKey]);

  function toggle(key: string) {
    const next = { ...state, [key]: !state[key] };
    setState(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  }

  return (
    <section className="mt-10 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900" aria-label="Reactions">
      <div className="flex flex-wrap gap-3">
        {reactions.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            type="button"
            onClick={() => toggle(key)}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition",
              state[key]
                ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800"
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
            <span className="rounded-full bg-white px-1.5 text-xs text-slate-500 dark:bg-slate-900">{state[key] ? 1 : 0}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
