import type { Variants, Transition } from 'framer-motion';

const STANDARD_EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const SPRING_OVERSHOOT: [number, number, number, number] = [0.34, 1.56, 0.64, 1];
const ACCEL_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

/* ─── Blur-slide-up entrance — used on every section / card / heading ─── */
export const buildEntrance = (reduced: boolean): Variants => ({
  hidden: reduced ? { opacity: 0 } : { opacity: 0, filter: 'blur(12px)', y: 28 },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.7, ease: STANDARD_EASE },
  },
});

/* ─── Stagger container ─── */
export const buildStagger = (reduced: boolean, gap = 0.09, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: reduced ? 0 : gap,
      delayChildren: delay,
    },
  },
});

/* ─── Per-word headline reveal ─── */
export const buildWord = (reduced: boolean): Variants => {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.4 } },
    };
  }
  return {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 40 },
    show: {
      filter: ['blur(10px)', 'blur(4px)', 'blur(0px)'],
      opacity: [0, 0.5, 1],
      y: [40, -4, 0],
      transition: { duration: 0.7, times: [0, 0.5, 1], ease: STANDARD_EASE },
    },
  };
};

/* ─── Conditional element (tooltips, dropdowns, modals, mobile menu) ─── */
export const buildConditional = (reduced: boolean): Variants => ({
  hidden: reduced
    ? { opacity: 0 }
    : { opacity: 0, scale: 0.9, filter: 'blur(8px)', y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.3, ease: STANDARD_EASE },
  },
  exit: reduced
    ? { opacity: 0, transition: { duration: 0.2 } }
    : {
        opacity: 0,
        scale: 0.95,
        filter: 'blur(4px)',
        y: -6,
        transition: { duration: 0.2, ease: STANDARD_EASE },
      },
});

/* ─── Image / media entrance with slight spring overshoot ─── */
export const buildMedia = (reduced: boolean): Variants => ({
  hidden: reduced
    ? { opacity: 0 }
    : { scale: 0.92, opacity: 0, filter: 'blur(10px)' },
  show: {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: SPRING_OVERSHOOT },
  },
});

/* ─── Line / divider reveal ─── */
export const buildLine = (reduced: boolean): Variants => ({
  hidden: reduced ? { opacity: 0 } : { scaleX: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: ACCEL_EASE },
  },
});

/* ─── Hover transitions (kept as Transition objects, not variants) ─── */
export const cardHoverTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 22,
};

export const buttonHoverTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 20,
};

/* Re-exported eases so consumers can use them directly */
export const eases = {
  standard: STANDARD_EASE,
  accel: ACCEL_EASE,
  spring: SPRING_OVERSHOOT,
};
