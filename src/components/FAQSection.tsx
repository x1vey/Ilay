import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";
import { FAQ } from "@/content";

const FAQSection = () => (
  <section className="py-24 px-6 bg-secondary">
    <div className="max-w-2xl mx-auto">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        className="font-display text-3xl md:text-4xl font-normal text-center mb-14 text-foreground">
        {FAQ.heading}
      </motion.h2>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ.items.map((faq, i) => (
            <motion.div key={i} variants={staggerItem}>
              <AccordionItem value={`faq-${i}`} className="glass rounded-2xl px-6 mb-0">
                <AccordionTrigger className="font-body font-semibold text-sm text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
