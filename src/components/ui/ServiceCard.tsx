import {
  Video,
  Smartphone,
  Monitor,
  Star,
  Play,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "../../data/content";

const iconMap: Record<string, LucideIcon> = {
  Video,
  Smartphone,
  Monitor,
  Star,
  Play,
  Zap,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Zap;

  return (
    <div className="rounded-xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <h3 className="mb-2 text-base font-semibold">{service.title}</h3>
      <p className="text-sm leading-relaxed text-light-muted">
        {service.description}
      </p>
    </div>
  );
}
