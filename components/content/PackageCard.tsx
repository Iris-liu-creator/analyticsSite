import { CheckCircle2 } from "lucide-react";
import { ServicePackage } from "@/data/services";

export function PackageCard({ pkg, index }: { pkg: ServicePackage; index: number }) {
  return (
    <article className="flex h-full flex-col apple-card p-6">
      <div className="mb-4 inline-flex w-fit apple-chip font-semibold">
        Package {index + 1}
      </div>
      <h3 className="text-xl font-semibold text-ink dark:text-white">{pkg.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{pkg.positioning}</p>
      <div className="mt-5 rounded-lg bg-slate-100/65 p-4 ring-1 ring-white/70 dark:bg-white/5 dark:ring-white/10">
        <p className="text-xs font-semibold text-blue-700 dark:text-blue-200">Best for</p>
        <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{pkg.bestFor}</p>
      </div>
      <ul className="mt-5 flex-1 space-y-2">
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 drop-shadow-[0_1px_2px_rgba(124,58,237,0.18)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-lg bg-slate-100/65 px-4 py-3 text-sm font-semibold text-ink ring-1 ring-white/70 dark:bg-white/5 dark:text-white dark:ring-white/10">
        {pkg.pricing}
      </div>
    </article>
  );
}
