import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";
import { STATS } from "@/content";

const stats = STATS.items;

const AnimatedNumber = ({ value, suffix }: { value: number | string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (typeof value !== "number") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 1500;
          const stepTime = Math.max(Math.floor(duration / end), 10);
          const increment = Math.ceil(end / (duration / stepTime));

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  if (typeof value === "string") {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {hasAnimated ? count : 0}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 px-6 bg-background border-y border-border">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="font-display text-3xl md:text-4xl font-normal text-center mb-16 text-foreground"
        >
          {STATS.heading}
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-5xl font-normal text-gold-gradient mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
