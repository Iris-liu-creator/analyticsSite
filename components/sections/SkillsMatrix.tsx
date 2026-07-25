import { analyticsStackSections } from "@/data/skills";

export function SkillsMatrix() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mb-4 max-w-4xl sm:mb-8">
        <p className="apple-label">Skills and Tools</p>
        <h2 className="mt-2 text-xl font-semibold text-ink dark:text-white sm:text-3xl">Analytics Stack</h2>
        <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300 sm:mt-3 sm:text-sm sm:leading-6">
          A practical capability map across data foundations, governance, BI delivery, business domain analytics, stakeholder enablement, and automation.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
        {analyticsStackSections.map((section, index) => (
          <article key={section.title} className="group relative overflow-hidden apple-card apple-card-hover px-2.5 py-3 sm:p-6">
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[0.65rem] font-semibold text-slate-400 sm:text-xs">0{index + 1}</span>
              </div>
              <h3 className="mt-2 text-[0.8rem] font-semibold leading-4 text-ink dark:text-white sm:mt-5 sm:text-lg sm:leading-7">{section.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300 sm:mt-3 sm:text-sm sm:leading-6">{section.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
