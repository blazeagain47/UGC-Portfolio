import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import VideoCard from "../ui/VideoCard";
import content from "../../data/content";

const ALL = "All";

export default function SampleGallery() {
  const categories = useMemo(() => {
    const set = new Set<string>();
    content.samples.forEach((s) => {
      if (s.category) set.add(s.category);
    });
    return [ALL, ...Array.from(set)];
  }, []);

  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(() => {
    if (active === ALL) return content.samples;
    return content.samples.filter((s) => s.category === active);
  }, [active]);

  const showFilters = categories.length > 2;

  return (
    <section id="samples" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            title="Content Samples"
            subtitle="Every sample plays directly in your browser — tap any card to watch."
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="mx-auto mb-8 flex w-full max-w-3xl flex-col items-center gap-3 sm:mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {filtered.length} {filtered.length === 1 ? "Sample" : "Samples"}
            </span>

            {showFilters && (
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((c) => {
                  const isActive = c === active;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setActive(c)}
                      className={
                        "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 " +
                        (isActive
                          ? "border-accent/50 bg-accent/15 text-accent shadow-sm shadow-accent/10"
                          : "border-white/10 bg-white/5 text-light-muted hover:border-white/20 hover:text-white")
                      }
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </AnimatedSection>

        <div className="mx-auto grid w-full grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((sample, i) => (
              <motion.div
                layout
                key={`${sample.title}-${sample.brand}`}
                className="w-full max-w-sm sm:max-w-none"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                <VideoCard sample={sample} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
