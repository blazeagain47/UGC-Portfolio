import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import VideoCard from "../ui/VideoCard";
import content from "../../data/content";

export default function SampleGallery() {
  return (
    <section id="samples" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            title="Content Samples"
            subtitle="A selection of recent work across brands and content styles"
          />
        </AnimatedSection>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {content.samples.map((sample, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <VideoCard sample={sample} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
