import { CheckCircle2 } from "lucide-react";
import { ServiceAddOn } from "@/data/services";

export function AddOnCard({ addOn }: { addOn: ServiceAddOn }) {
  const Icon = addOn.icon;

  return (
    <article className="apple-card p-5">
      <div className="flex items-start gap-3">
        <span className="apple-icon h-10 w-10">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-semibold text-ink dark:text-white">{addOn.title}</h3>
          <p className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">{addOn.pricing}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {addOn.includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint drop-shadow-[0_1px_2px_rgba(0,133,119,0.18)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
