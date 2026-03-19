import { motion } from "framer-motion";
import { ArrowDown, TrendingUp } from "lucide-react";
import Button from "../ui/Button";
import content from "../../data/content";

export default function Hero() {
  const { hero, metrics } = content;
  const headlineMetric = metrics[0];

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {headlineMetric && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm text-accent"
          >
            <TrendingUp className="h-4 w-4" />
            <span className="font-medium">
              {headlineMetric.value} {headlineMetric.label.toLowerCase()}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-lg text-accent sm:text-xl"
        >
          {hero.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-light-muted sm:text-lg"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="#samples" size="lg">
            {hero.ctaText}
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Work With Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16 animate-bounce text-light-muted"
        >
          <ArrowDown className="mx-auto h-5 w-5" />
        </motion.div>
      </div>
    </section>
  );
}
