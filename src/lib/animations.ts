import { Variants } from "framer-motion";

/** Shared easing curve — smooth deceleration */
export const ease = [0.16, 1, 0.3, 1] as const;

/** Fade up — single element */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease },
  },
};

/** Fade in — no movement, for labels/eyebrows */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease } },
};

/** Stagger container — wraps a list of children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/** Stagger item — used inside staggerContainer */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
};

/** Slide in from left */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
};

/** Slide in from right */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
};

/** Shared viewport config */
export const viewport = { once: true, margin: "-80px" } as const;
