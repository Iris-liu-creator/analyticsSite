import { capabilityGroups } from "@/data/services";
import { TagPill } from "@/components/ui/TagPill";
import { cn } from "@/lib/utils";

const cardSpans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export function ToolsCapabilities() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">Tools & Capabilities</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">Practical tools for business-ready analytics</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {capabilityGroups.map((group, index) => (
          <div
            key={group.title}
            className={cn(
              "group flex h-full min-h-44 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900",
              cardSpans[index] ?? "lg:col-span-2"
            )}
          >
            <div className="flex flex-1 flex-col">
              <h3 className="text-lg font-semibold leading-7 text-ink dark:text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <TagPill
                  key={tool}
                  className="border border-slate-100 bg-slate-50/70 text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300"
                >
                  {tool}
                </TagPill>
              ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
