import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ServicePillar } from "@/data/services";

export function ServiceCard({ service, compact = false }: { service: ServicePillar; compact?: boolean }) {
  const Icon = service.icon;

  return (
    <article className={cn("h-full apple-card apple-card-hover", compact ? "p-4 sm:p-6" : "p-6")}>
      <div className={cn("flex items-start", compact ? "gap-3 sm:gap-4" : "gap-4")}>
        <span className={cn("apple-icon", compact ? "h-9 w-9 sm:h-11 sm:w-11" : "h-11 w-11")}>
          <Icon className={cn(compact ? "h-4 w-4 sm:h-5 sm:w-5" : "h-5 w-5")} />
        </span>
        <div>
          <h3 className={cn("font-semibold text-ink dark:text-white", compact ? "text-base leading-6 sm:text-xl" : "text-xl")}>{service.title}</h3>
          <p className={cn("text-slate-600 dark:text-slate-300", compact ? "mt-2 text-xs leading-5 sm:mt-3 sm:text-sm sm:leading-6" : "mt-3 text-sm leading-6")}>{service.description}</p>
        </div>
      </div>
      {!compact ? (
        <ul className="mt-5 space-y-2">
          {service.includes.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600 drop-shadow-[0_1px_2px_rgba(124,58,237,0.18)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
