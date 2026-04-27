import { CheckCircle2 } from "lucide-react";
import { ServicePackage } from "@/data/services";

export function PackageCard({ pkg, index }: { pkg: ServicePackage; index: number }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        Package {index + 1}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-ink dark:text-white">{pkg.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{pkg.positioning}</p>
      <div className="mt-5 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/40">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Best for</p>
        <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{pkg.bestFor}</p>
      </div>
      <ul className="mt-5 flex-1 space-y-2">
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-ink dark:border-slate-700 dark:bg-slate-950 dark:text-white">
        {pkg.pricing}
      </div>
    </article>
  );
}
