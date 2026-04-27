const events = [
  { title: "Business-first analytics", text: "Start with decision context, stakeholders, KPI definitions, and operational cadence." },
  { title: "Reliable data models", text: "Shape source data into documented models that analysts and leaders can trust." },
  { title: "Dashboards people use", text: "Design reporting views that make exceptions, trends, and action paths obvious." },
  { title: "Automation and AI", text: "Reduce repetitive reporting work and add AI-assisted workflows where they create measurable leverage." }
];

export function Timeline() {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={event.title} className="grid grid-cols-[2rem_1fr] gap-4">
          <div className="flex flex-col items-center">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-signal text-sm font-semibold text-white">{index + 1}</span>
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
