import { motion } from "framer-motion";
import { fadeUp, fadeIn, viewport } from "@/lib/animations";
import { CTA } from "@/content";

const CTASection = () => (
  <section className="py-24 px-6 bg-background">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        className="font-display text-3xl md:text-4xl font-normal mb-5 text-foreground">
        {CTA.heading}
      </motion.h2>
      <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewport}
        className="font-body text-muted-foreground mb-10">
        {CTA.subheading}
      </motion.p>
      <motion.a variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        href={CTA.cta.url} target="_blank" rel="noopener noreferrer"
        className="inline-block btn-gold font-body text-sm font-semibold px-12 py-4 rounded-full">
        {CTA.cta.label}
      </motion.a>
    </div>
  </section>
);

export default CTASection;
