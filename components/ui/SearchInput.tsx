"use client";

import { Search } from "lucide-react";

export function SearchInput({
  value,
  onChange,
  placeholder = "Search"
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">{placeholder}</span>
      <span className="apple-icon pointer-events-none absolute left-2.5 top-1/2 h-7 w-7 -translate-y-1/2"><Search className="h-3.5 w-3.5" /></span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-11 w-full min-w-0 rounded-lg border border-slate-200/70 bg-white/80 pl-11 pr-4 text-sm text-ink outline-none backdrop-blur-xl transition placeholder:text-slate-400 focus:border-signal focus:ring-2 focus:ring-blue-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:focus:ring-blue-950"
      />
    </label>
  );
}
