import { capabilityGroups } from "@/data/services";
import { TagPill } from "@/components/ui/TagPill";
import { cn } from "@/lib/utils";

const cardSpans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export function ToolsCapabilities() {
  return (
    <section className="apple-page">
      <div className="mb-8">
        <p className="apple-label">Tools & Capabilities</p>
        <h2 className="mt-2 text-3xl font-semibold text-ink dark:text-white">Practical tools for business-ready analytics</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {capabilityGroups.map((group, index) => (
          <div
            key={group.title}
            className={cn(
              "group flex h-full min-h-44 flex-col apple-card apple-card-hover p-6",
              cardSpans[index] ?? "lg:col-span-2"
            )}
          >
            <div className="flex flex-1 flex-col">
              <h3 className="text-lg font-semibold leading-7 text-ink dark:text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <TagPill
                  key={tool}
                  className="text-slate-600 dark:text-slate-300"
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
