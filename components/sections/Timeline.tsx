const events = [
  { title: "Business-first analytics", text: "Start with decision context, stakeholder needs, KPI definitions, and operational cadence." },
  { title: "Trusted data groundwork", text: "Shape source data into documented, scalable models that analysts and leaders can trust." },
  { title: "Decision-ready dashboards", text: "Design reporting views that make performance, exceptions, trends, and action paths clear." },
  { title: "Automation and AI workflows", text: "Reduce repetitive reporting work and apply AI-assisted workflows where they create measurable leverage." }
];

export function Timeline() {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={event.title} className="grid grid-cols-[2rem_1fr] gap-4">
          <div className="flex flex-col items-center">
            <span className="apple-icon h-8 w-8 rounded-full"><span className="relative z-10 text-sm font-extrabold text-signal dark:text-blue-200">{index + 1}</span></span>
            {index < events.length - 1 ? <span className="h-full w-px bg-slate-200 dark:bg-slate-700" /> : null}
          </div>
          <div className="pb-5">
            <h3 className="font-semibold text-ink dark:text-white">{event.title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{event.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
