import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";
import { RESULTS } from "@/content";

const ResultsBentoSection = () => (
  <section className="py-24 px-6 bg-secondary">
    <div className="max-w-5xl mx-auto">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        className="font-display text-3xl md:text-4xl font-normal text-center mb-16 text-foreground">
        {RESULTS.heading}
      </motion.h2>

      <motion.div className="grid md:grid-cols-2 gap-5"
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
        {RESULTS.items.map((item) => (
          <motion.div key={item.title} variants={staggerItem}
            className={`relative overflow-hidden rounded-2xl border border-border group ${item.span}`}>
            <div className="aspect-[16/10] overflow-hidden">
              <img src={item.image} alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-body font-bold text-foreground text-base mb-1">{item.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ResultsBentoSection;
