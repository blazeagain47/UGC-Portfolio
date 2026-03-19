import type { Metric } from "../../data/content";

interface MetricCardProps {
  metric: Metric;
}

export default function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-dark-border bg-dark-card p-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
        {metric.value}
      </p>
      <p className="mt-2 text-sm font-medium text-light">{metric.label}</p>
      {metric.context && (
        <p className="mt-1 text-xs text-light-muted">{metric.context}</p>
      )}
    </div>
  );
}
