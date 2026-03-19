import { useState } from "react";
import type { Brand } from "../../data/content";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  const [logoFailed, setLogoFailed] = useState(false);
  const hasLogo = !!brand.logo && !logoFailed;

  return (
    <div className="group rounded-xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-dark-hover p-1.5">
          {hasLogo ? (
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-full w-full object-contain"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <span className="text-lg font-bold text-accent">
              {brand.name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{brand.name}</h3>
          {brand.handle && (
            <p className="text-sm text-light-muted">
              {brand.handle}
              {brand.platform && (
                <span className="ml-1 text-xs">· {brand.platform}</span>
              )}
            </p>
          )}
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-light-muted">
        {brand.description}
      </p>

      {brand.keyMetric && (
        <p className="mb-4 text-sm font-semibold text-accent">
          {brand.keyMetric}
        </p>
      )}

      {brand.proofImage && (
        <div className="mb-4 overflow-hidden rounded-lg border border-dark-border">
          <img
            src={brand.proofImage}
            alt={`${brand.name} metrics`}
            className="w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {brand.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-dark-border bg-dark-hover px-3 py-1 text-xs text-light-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
