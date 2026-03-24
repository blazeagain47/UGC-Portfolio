import { useRef, useState, useEffect } from "react";
import { useCountUp, parseMetricValue } from "../../hooks/useCountUp";
import type { Metric } from "../../data/content";

interface MetricCardProps {
  metric: Metric;
}

export default function MetricCard({ metric }: MetricCardProps) {
  const { num, suffix, decimals } = parseMetricValue(metric.value);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(num, 1600, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display = started
    ? `${count.toFixed(decimals)}${suffix}`
    : `0${suffix}`;

  return (
    <div
      ref={ref}
      className="rounded-xl border border-dark-border bg-dark-card p-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
    >
      <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
        {display}
      </p>
      <p className="mt-2 text-sm font-medium text-light">{metric.label}</p>
      {metric.context && (
        <p className="mt-1 text-xs text-light-muted">{metric.context}</p>
      )}
    </div>
  );
}
