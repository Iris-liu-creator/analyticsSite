import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const hasDetailTrail = items.length > 1;

  return (
    <nav aria-label="Breadcrumb" className="mb-6 max-w-full overflow-hidden text-sm text-slate-500 dark:text-slate-400">
      <ol className="flex max-w-full items-center gap-2 overflow-hidden">
        <li className="shrink-0">
          <Link href="/" className="hover:text-signal">Home</Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const hideLongCurrentOnMobile = hasDetailTrail && isLast && !item.href;

          return (
            <li
              key={`${item.label}-${index}`}
              className={`${hideLongCurrentOnMobile ? "hidden sm:flex" : "flex"} min-w-0 items-center gap-2`}
            >
              <ChevronRight className="h-4 w-4 shrink-0" />
              {item.href ? (
                <Link href={item.href} className="shrink-0 hover:text-signal">{item.label}</Link>
              ) : (
                <span aria-current="page" className="truncate sm:max-w-[28rem] lg:max-w-[44rem]" title={item.label}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
