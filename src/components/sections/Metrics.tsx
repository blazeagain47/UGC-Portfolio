import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import MetricCard from "../ui/MetricCard";
import content from "../../data/content";

export default function Metrics() {
  return (
    <section id="metrics" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            title="Results That Speak"
            subtitle="Real performance metrics from recent content campaigns"
          />
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {content.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <MetricCard metric={metric} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
