import { ArrowRight, Calendar } from "lucide-react";
import { calendlyUrl } from "@/data/services";
import { Button } from "@/components/ui/Button";

export function CTASection({
  title = "Discuss Your Analytics Needs",
  text = "Share the reporting challenge, KPI question, or workflow you want to improve, and we can map the most practical next step."
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink dark:text-white">{title}</h2>
            <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">{text}</p>
          </div>
          <Button href={calendlyUrl}>
            <Calendar className="h-4 w-4" />
            Book a Discovery Call
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
