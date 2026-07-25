import { CheckCircle2 } from "lucide-react";
import { ServicePillar } from "@/data/services";

export function ServiceCard({ service, compact = false }: { service: ServicePillar; compact?: boolean }) {
  const Icon = service.icon;

  return (
    <article className="h-full apple-card apple-card-hover p-6">
      <div className="flex items-start gap-4">
        <span className="apple-icon h-11 w-11">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-ink dark:text-white">{service.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
        </div>
      </div>
      {!compact ? (
        <ul className="mt-5 space-y-2">
          {service.includes.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint drop-shadow-[0_1px_2px_rgba(0,133,119,0.18)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
