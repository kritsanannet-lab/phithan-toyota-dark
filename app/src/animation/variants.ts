import type { Variants, Transition } from 'motion/react';

/* Premium spring-like easing required across the site */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Shared viewport config — trigger once, when 20% is on screen */
export const VIEW = { once: true, amount: 0.2 } as const;

export const base = (duration = 1, delay = 0): Transition => ({ duration, delay, ease: EASE });

/* ---- Container (stagger children) ---------------------------------- */
export const stagger = (staggerChildren = 0.12, delayChildren = 0.05): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/* ---- Reusable item variants ---------------------------------------- */
export const fadeUp = (y = 40, duration = 1): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: base(duration) },
});

export const fadeIn = (duration = 1): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: base(duration) },
});

export const slideInRight = (x = 64, duration = 1.1): Variants => ({
  hidden: { opacity: 0, x },
  show: { opacity: 1, x: 0, transition: base(duration) },
});

export const slideInLeft = (x = 64, duration = 1.1): Variants => ({
  hidden: { opacity: 0, x: -x },
  show: { opacity: 1, x: 0, transition: base(duration) },
});

/* Alternating horizontal entrance, used by zig-zag style sections */
export const slideAlternate = (index: number, x = 70, duration = 1.1): Variants => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -x : x },
  show: { opacity: 1, x: 0, transition: base(duration) },
});

export const scaleIn = (from = 0.9, duration = 1): Variants => ({
  hidden: { opacity: 0, scale: from },
  show: { opacity: 1, scale: 1, transition: base(duration) },
});

/* Scale + lift, for product / featured cards */
export const popIn = (duration = 1): Variants => ({
  hidden: { opacity: 0, scale: 0.92, y: 28 },
  show: { opacity: 1, scale: 1, y: 0, transition: base(duration) },
});

/* Gallery: subtle rotate correction + scale settle */
export const gallerySettle = (rotate = 0, duration = 1.1): Variants => ({
  hidden: { opacity: 0, scale: 1.05, rotate },
  show: { opacity: 1, scale: 1, rotate: 0, transition: base(duration) },
});

/* Image mask reveal via clip-path (kept GPU-friendly with a scaling inner img) */
export const maskReveal = (duration = 1.2): Variants => ({
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  show: { clipPath: 'inset(0 0% 0 0)', transition: base(duration) },
});

export const imageZoom = (duration = 1.3): Variants => ({
  hidden: { scale: 1.25 },
  show: { scale: 1, transition: base(duration) },
});

/* Vertical line grow (process timeline) */
export const growLine = (duration = 1.3): Variants => ({
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: base(duration) },
});
