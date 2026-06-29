import { motion, useReducedMotion } from 'motion/react';
import { partners } from '../data/content';
import { stagger, fadeUp, VIEW } from '../animation/variants';

/* SECTION 10 — Partners
   Logo marquee · fade in when visible · slight floating · continuous loop */
export default function Partners() {
  const reduce = useReducedMotion();
  const row = [...partners, ...partners]; // duplicate for a seamless loop

  return (
    <section className="section" id="partners" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <motion.div
          className="section-head"
          style={{ textAlign: 'center', marginInline: 'auto' }}
          variants={stagger()} initial="hidden" whileInView="show" viewport={VIEW}
        >
          <motion.span className="kicker" style={{ justifyContent: 'center' }} variants={fadeUp(20, 0.9)}>ECOSYSTEM</motion.span>
          <motion.h2 className="text-grad" variants={fadeUp(34, 1)}>เครือข่าย Phithan BKK Group</motion.h2>
        </motion.div>
      </div>

      <motion.div
        className="marquee"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VIEW}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="marquee-track"
          animate={reduce ? {} : { x: ['0%', '-50%'] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        >
          {row.map((p, i) => (
            <motion.span
              key={i}
              className="partner-chip"
              animate={reduce ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: (i % partners.length) * 0.25 }}
            >
              {p}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
