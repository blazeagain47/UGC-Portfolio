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
            subtitle="Play in-browser previews when available, or use the link under each card for TikTok and Instagram"
          />
        </AnimatedSection>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {content.samples.map((sample, i) => (
            <motion.div
              key={`${sample.title}-${sample.brand}`}
              className="flex h-full w-full min-h-0 shrink-0 grow-0 sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)] lg:max-w-[calc((100%-3rem)/3)]"
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
