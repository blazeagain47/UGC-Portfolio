import { useState } from "react";
import { ExternalLink, Youtube } from "lucide-react";
import type { Brand } from "../../data/content";

interface BrandCardProps {
  brand: Brand;
}

function profileIconSrc(label: string): string | null {
  const l = label.toLowerCase();
  if (l.includes("tiktok")) return "/icons/tiktok.svg";
  if (l.includes("instagram")) return "/icons/instagram.svg";
  return null;
}

function isYouTubeLabel(label: string): boolean {
  return label.toLowerCase().includes("youtube");
}

export default function BrandCard({ brand }: BrandCardProps) {
  const [logoFailed, setLogoFailed] = useState(false);
  const hasLogo = !!brand.logo && !logoFailed;
  const profileLinks = brand.profileLinks ?? [];
  const isPrevious = brand.status === "previous";

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/6 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      {brand.keyMetric && (
        <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold tabular-nums tracking-wide text-accent">
          {brand.keyMetric}
        </span>
      )}

      <div className="relative flex min-h-0 flex-1 flex-col gap-3">
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
            <div className="flex flex-wrap items-center gap-2 pr-28">
              <h3 className="text-lg font-semibold tracking-tight">{brand.name}</h3>
              {isPrevious && (
                <span className="rounded-full border border-white/10 bg-dark-hover/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-light-muted">
                  {brand.statusLabel ?? "Previous Work"}
                </span>
              )}
            </div>
            {brand.handle && (
              <p className="mt-1 text-sm leading-snug text-light-muted">
                {brand.handle}
                {brand.platform && (
                  <span className="ml-1 text-xs opacity-80">· {brand.platform}</span>
                )}
              </p>
            )}
          </div>
        </div>

        {profileLinks.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {profileLinks.map((link) => {
              const iconSrc = profileIconSrc(link.label);
              return (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-dark-hover/70 px-3.5 py-2 text-xs font-semibold tracking-wide text-white/95 shadow-sm transition-all hover:border-accent/35 hover:bg-dark-hover hover:text-white"
                >
                  {iconSrc ? (
                    <img
                      src={iconSrc}
                      alt=""
                      className="h-5 w-5 shrink-0 rounded-[4px] object-contain"
                      width={20}
                      height={20}
                    />
                  ) : isYouTubeLabel(link.label) ? (
                    <Youtube className="h-5 w-5 shrink-0 opacity-90" />
                  ) : (
                    <ExternalLink className="h-4 w-4 shrink-0 opacity-80" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>
        )}

        <p className="min-h-0 flex-1 text-sm leading-relaxed text-light-muted">
          {brand.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
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
