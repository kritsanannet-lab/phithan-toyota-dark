import { motion } from 'motion/react';
import { Flag, BadgeCheck, Wrench, Zap, type LucideIcon } from 'lucide-react';
import { timeline } from '../data/content';

const ICONS: Record<string, LucideIcon> = { Flag, BadgeCheck, Wrench, Zap };
import { stagger, fadeUp, slideInLeft, scaleIn, growLine, VIEW } from '../animation/variants';

/* SECTION 6 — Process Timeline
   Timeline line grows vertically · steps reveal sequentially · icons scale in */
export default function ProcessTimeline() {
  return (
    <section className="section" id="timeline" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <motion.div className="section-head" variants={stagger()} initial="hidden" whileInView="show" viewport={VIEW}>
          <motion.span className="kicker" variants={fadeUp(20, 0.9)}>OUR JOURNEY</motion.span>
          <motion.h2 className="text-grad" variants={fadeUp(34, 1)}>เส้นทางการเติบโต</motion.h2>
          <motion.p variants={fadeUp(26, 1)}>จากผู้แทนจำหน่ายสู่เครือข่ายธุรกิจครบวงจร</motion.p>
        </motion.div>

        <motion.div className="timeline" variants={stagger(0.18)} initial="hidden" whileInView="show" viewport={VIEW}>
          <motion.span className="timeline-line gpu" variants={growLine(1.3)} />
          {timeline.map((step) => {
            const Icon = ICONS[step.icon] ?? Flag;
            return (
              <motion.div key={step.year} className="tl-step" variants={slideInLeft(40, 1)}>
                <motion.span className="tl-icon" variants={scaleIn(0.4, 0.8)}><Icon /></motion.span>
                <div className="tl-body">
                  <span className="tl-year">พ.ศ. {step.year}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
