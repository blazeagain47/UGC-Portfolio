import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import BrandCard from "../ui/BrandCard";
import content from "../../data/content";

export default function Brands() {
  return (
    <section id="brands" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            title="Brands I've Worked With"
            subtitle="Experience across apps, AI tools, and consumer products"
          />
        </AnimatedSection>
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
          {content.brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              className="flex min-h-0 h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <BrandCard brand={brand} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
