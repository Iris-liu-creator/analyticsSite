import { analyticsStackSections } from "@/data/skills";

export function SkillsMatrix() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-4xl">
        <p className="apple-label">Skills and Tools</p>
        <h2 className="mt-2 text-3xl font-semibold text-ink dark:text-white">Analytics Stack</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          A practical capability map across data foundations, governance, BI delivery, business domain analytics, stakeholder enablement, and automation.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {analyticsStackSections.map((section, index) => (
          <article key={section.title} className="group relative overflow-hidden apple-card apple-card-hover p-6">
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-slate-400">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-7 text-ink dark:text-white">{section.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{section.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
