import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/content';
import { stagger, fadeUp, scaleIn, VIEW, base } from '../animation/variants';

/* SECTION 8 — Testimonials
   Cards slide upward · stagger delay · quote icon scales · background blur move */
const cardUp = {
  hidden: { opacity: 0, y: 56 },
  show: { opacity: 1, y: 0, transition: base(1.1) },
};

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const blobX = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section className="section" id="testimonials" ref={ref} style={{ background: 'var(--bg-2)' }}>
      <motion.div
        className="hero-glow silver gpu"
        style={{ x: reduce ? 0 : blobX, top: '10%', right: '6%', opacity: 0.5, filter: 'blur(150px)' }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div className="section-head" variants={stagger()} initial="hidden" whileInView="show" viewport={VIEW}>
          <motion.span className="kicker" variants={fadeUp(20, 0.9)}>TESTIMONIALS</motion.span>
          <motion.h2 className="text-grad" variants={fadeUp(34, 1)}>เสียงจากลูกค้าของเรา</motion.h2>
        </motion.div>

        <motion.div className="tst-grid" variants={stagger(0.14)} initial="hidden" whileInView="show" viewport={VIEW}>
          {testimonials.map((t) => (
            <motion.figure key={t.name} className="tst-card gpu" variants={cardUp}>
              <motion.span className="tst-quote" variants={scaleIn(0.3, 0.9)}><Quote /></motion.span>
              <blockquote className="tst-text">“{t.quote}”</blockquote>
              <figcaption className="tst-who">
                <span className="tst-avatar">{t.name.charAt(0)}</span>
                <span><b>{t.name}</b><span>{t.role}</span></span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
