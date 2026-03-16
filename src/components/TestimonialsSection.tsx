import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";
import { TESTIMONIALS } from "@/content";

const TestimonialsSection = () => (
  <section className="py-24 px-6 bg-secondary">
    <div className="max-w-5xl mx-auto">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        className="font-display text-3xl md:text-4xl font-normal text-center mb-16 text-foreground">
        {TESTIMONIALS.heading}
      </motion.h2>

      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
        {TESTIMONIALS.items.map((t) => (
          <motion.div key={t.name} variants={staggerItem}
            className="glass rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-5">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
                <p className="font-body text-xs font-semibold text-gold-gradient">{t.result}</p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">"{t.quote}"</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
