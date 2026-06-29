import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { stats } from '../data/content';
import { stagger, fadeUp, VIEW, EASE } from '../animation/variants';
import { useCountUp } from '../hooks/useCountUp';

/* SECTION 5 — Statistics
   Count-up · progress bars fill on scroll · fade-up numbers · parallax bg */
function StatCard({ value, suffix, label, progress }: typeof stats[number]) {
  const { ref, value: v } = useCountUp<HTMLDivElement>(value);
  return (
    <motion.div className="stat-card" variants={fadeUp(36, 1)}>
      <div className="stat-num" ref={ref}>
        {Math.round(v)}<span className="suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-bar">
        <motion.i
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={VIEW}
          transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section className="section" id="stats" ref={ref}>
      <motion.div
        className="hero-glow red gpu"
        style={{ y: reduce ? 0 : bgY, top: '20%', left: '50%', opacity: 0.18, filter: 'blur(140px)' }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div className="section-head" variants={stagger()} initial="hidden" whileInView="show" viewport={VIEW}>
          <motion.span className="kicker" variants={fadeUp(20, 0.9)}>BY THE NUMBERS</motion.span>
          <motion.h2 className="text-grad" variants={fadeUp(34, 1)}>ตัวเลขที่บอกความไว้วางใจ</motion.h2>
        </motion.div>

        <motion.div className="stats-grid" variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={VIEW}>
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </motion.div>
      </div>
    </section>
  );
}
