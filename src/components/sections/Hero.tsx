import { motion } from "framer-motion";
import { ArrowDown, TrendingUp, Linkedin } from "lucide-react";
import Button from "../ui/Button";
import content from "../../data/content";
import profilePhoto from "../../assets/Sathya PHOTO.JPG";

export default function Hero() {
  const { hero, metrics } = content;
  const headlineMetric = metrics[0];

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb-1 absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="hero-orb-2 absolute left-1/4 top-1/3 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-accent/[0.03] blur-3xl" />
        <div className="hero-orb-1 absolute right-1/4 top-1/4 h-[300px] w-[400px] rounded-full bg-indigo-500/[0.04] blur-3xl" style={{ animationDelay: "-9s" }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          {headlineMetric && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm text-accent"
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
            className="mt-6 max-w-xl text-base leading-relaxed text-light-muted sm:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start"
          >
            <Button href="#samples" size="lg">
              {hero.ctaText}
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Work With Me
            </Button>
          </motion.div>

          <motion.a
            href="https://www.linkedin.com/in/sath47/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.95 }}
            className="mt-6 inline-flex items-center gap-2 text-sm text-light-muted transition-colors hover:text-accent md:justify-start"
          >
            <Linkedin className="h-4 w-4" />
            <span>Connect on LinkedIn</span>
          </motion.a>
        </div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="shrink-0"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-dark-border shadow-2xl shadow-accent/10 sm:h-72 sm:w-72 md:h-80 md:w-80">
            <img
              src={profilePhoto}
              alt="Sathya Srinivasan"
              className="h-full w-full object-cover"
              style={{
    objectPosition: "46% 16%",
      transform: "scale(1.28)",
                transformOrigin: "center",
              }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-light-muted"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
