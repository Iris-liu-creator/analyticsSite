import { capabilityGroups } from "@/data/services";
import { TagPill } from "@/components/ui/TagPill";

export function ToolsCapabilities() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">Tools & Capabilities</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">Practical tools for business-ready analytics</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {capabilityGroups.map((group) => (
          <div key={group.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-ink dark:text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <TagPill key={tool}>{tool}</TagPill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
