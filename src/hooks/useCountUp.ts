import { useEffect, useRef, useState } from "react";

/** Parse a metric string like "350K+", "308.8K", "150+", "10K+" */
export function parseMetricValue(raw: string): {
  num: number;
  suffix: string;
  decimals: number;
} {
  const m = raw.match(/^([\d.]+)(.*)$/);
  if (!m) return { num: 0, suffix: raw, decimals: 0 };
  const numStr = m[1];
  const decimals = numStr.includes(".") ? (numStr.split(".")[1]?.length ?? 0) : 0;
  return { num: parseFloat(numStr), suffix: m[2] ?? "", decimals };
}

export function useCountUp(target: number, duration = 1600, started = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;
    startRef.current = null;
    setCount(0);

    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(eased * target);
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, started]);

  return count;
}
