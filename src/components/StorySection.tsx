import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, viewport } from "@/lib/animations";
import { STORY } from "@/content";

const StorySection = () => (
  <section className="py-24 px-6 bg-background">
    <div className="max-w-4xl mx-auto">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        className="font-display text-3xl md:text-4xl font-normal text-center mb-16 text-foreground">
        {STORY.heading}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewport}
          className="space-y-5 font-body text-muted-foreground text-sm leading-relaxed">
          {STORY.body.map((p, i) => (
            <p key={i}>
              {p.bold
                ? <><span className="text-foreground font-semibold">{p.text}</span>{p.suffix}</>
                : p.text}
            </p>
          ))}
          <p className="text-foreground font-medium italic">"{STORY.quote}"</p>
        </motion.div>

        <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport}>
          <img src={STORY.image} alt={STORY.imageAlt} className="w-full rounded-2xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default StorySection;
