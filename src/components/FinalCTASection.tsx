import { motion } from "framer-motion";
import { fadeUp, fadeIn, viewport } from "@/lib/animations";
import { FINAL_CTA } from "@/content";

const FinalCTASection = () => (
  <section className="py-28 px-6 bg-background">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        className="font-display text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-foreground">
        {FINAL_CTA.heading}
      </motion.h2>
      <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewport}
        className="font-body text-muted-foreground mb-10 max-w-lg mx-auto">
        {FINAL_CTA.subheading}
      </motion.p>
      <motion.a variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        href={FINAL_CTA.cta.url} target="_blank" rel="noopener noreferrer"
        className="inline-block btn-gold font-body text-sm font-semibold px-14 py-4 rounded-full">
        {FINAL_CTA.cta.label}
      </motion.a>
    </div>
  </section>
);

export default FinalCTASection;
