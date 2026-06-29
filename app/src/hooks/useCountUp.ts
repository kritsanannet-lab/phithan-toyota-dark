import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion, animate } from 'motion/react';
import { EASE } from '../animation/variants';

/**
 * Counts up to `target` once the element scrolls into view.
 * Respects prefers-reduced-motion by jumping straight to the value.
 */
export function useCountUp<T extends Element = HTMLSpanElement>(target: number, duration = 1.4) {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setValue(target); return; }
    const controls = animate(0, target, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, target, duration, reduce]);

  return { ref, value };
}
