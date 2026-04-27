import { skills } from "@/data/skills";

export function SkillsMatrix() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal">Skills and tools</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">Analytics stack</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ name, level, group, icon: Icon }) => (
          <div key={name} className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-signal dark:bg-blue-950"><Icon className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-semibold text-ink dark:text-white">{name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{group}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{level}%</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-2 rounded-full bg-signal" style={{ width: `${level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
