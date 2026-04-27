import { CheckCircle2 } from "lucide-react";
import { ServicePillar } from "@/data/services";

export function ServiceCard({ service, compact = false }: { service: ServicePillar; compact?: boolean }) {
  const Icon = service.icon;

  return (
    <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-signal dark:bg-blue-950">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-ink dark:text-white">{service.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
        </div>
      </div>
      {!compact ? (
        <ul className="mt-5 space-y-2">
          {service.includes.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
