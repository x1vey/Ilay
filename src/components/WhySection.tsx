import { motion } from "framer-motion";
import { slideLeft, slideRight, viewport } from "@/lib/animations";
import { WHY } from "@/content";

const WhySection = () => (
  <section className="py-24 px-6 bg-background">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewport}>
        <h2 className="font-display text-3xl md:text-4xl font-normal mb-6 text-foreground">
          {WHY.heading}
        </h2>
        <div className="space-y-5 font-body text-sm text-muted-foreground leading-relaxed">
          {WHY.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </motion.div>

      <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport}>
        <img src={WHY.image} alt={WHY.imageAlt}
          className="w-full rounded-2xl border border-[hsl(43_90%_52%/0.25)]" />
      </motion.div>
    </div>
  </section>
);

export default WhySection;
