import type { Brand } from "../../data/content";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="group rounded-xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-dark-hover">
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-8 w-8 object-contain"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement("span");
                fallback.className = "text-lg font-bold text-accent";
                fallback.textContent = brand.name.charAt(0);
                parent.appendChild(fallback);
              }
            }}
          />
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
