import { motion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";
import { PROGRAMS } from "@/content";

const ProgramsSection = () => (
  <section className="py-24 px-6 bg-background">
    <div className="max-w-5xl mx-auto">
      <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewport}
        className="font-body text-xs uppercase tracking-widest text-gold-gradient text-center mb-4">
        {PROGRAMS.eyebrow}
      </motion.p>
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        className="font-display text-3xl md:text-4xl font-normal text-center mb-16 text-foreground">
        {PROGRAMS.heading}
      </motion.h2>

      <motion.div className="grid md:grid-cols-3 gap-6"
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
        {PROGRAMS.items.map((program) => (
          <motion.div key={program.name} variants={staggerItem}
            className="glass rounded-2xl p-8 flex flex-col hover:border-accent/40 transition-colors duration-300">
            <h3 className="font-display text-2xl font-normal text-foreground mb-3">{program.name}</h3>
            <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">{program.target}</p>
            <ul className="space-y-3 mt-auto">
              {program.features.map((feature) => (
                <li key={feature} className="font-body text-sm text-foreground flex items-start gap-2">
                  <span className="text-gold-gradient mt-0.5">✦</span>{feature}
                </li>
              ))}
            </ul>
            <a href={PROGRAMS.cta.url} target="_blank" rel="noopener noreferrer"
              className="mt-8 block text-center btn-gold font-body text-sm font-semibold py-3 rounded-full">
              {PROGRAMS.cta.label}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProgramsSection;
