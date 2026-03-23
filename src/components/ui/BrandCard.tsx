import { useState } from "react";
import type { Brand } from "../../data/content";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  const [logoFailed, setLogoFailed] = useState(false);
  const hasLogo = !!brand.logo && !logoFailed;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/6 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex min-h-0 flex-1 flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-dark-border bg-dark-hover/80 p-2 shadow-inner">
            {hasLogo ? (
              <img
                src={brand.logo}
                alt=""
                className="h-full w-full object-contain"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <span className="text-xl font-bold text-accent">
                {brand.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="text-lg font-semibold tracking-tight">{brand.name}</h3>
            <p className="mt-1 min-h-10 text-sm leading-snug text-light-muted">
              {brand.handle && (
                <>
                  {brand.handle}
                  {brand.platform && (
                    <span className="ml-1 text-xs opacity-80">· {brand.platform}</span>
                  )}
                </>
              )}
            </p>
          </div>
        </div>

        <div className="flex min-h-9 flex-wrap items-center gap-2">
          {brand.keyMetric && (
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold tabular-nums tracking-wide text-accent">
              {brand.keyMetric}
            </span>
          )}
        </div>

        <p className="min-h-0 flex-1 text-sm leading-relaxed text-light-muted">
          {brand.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-0.5">
          {brand.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-dark-border bg-dark-hover/80 px-3 py-1 text-xs text-light-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
