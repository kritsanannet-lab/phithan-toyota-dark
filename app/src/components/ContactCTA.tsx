import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import { FileText, Car, CalendarCheck, Phone } from 'lucide-react';
import { stagger, fadeUp, scaleIn, maskReveal, VIEW } from '../animation/variants';

/* SECTION 11 — Contact CTA
   Large scale reveal · text mask animation · magnetic button · gradient movement */
function MagneticButton({ children, href, primary }: { children: ReactNode; href: string; primary?: boolean }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      href={href}
      className={`btn ${primary ? 'btn-primary' : 'btn-ghost'}`}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.a>
  );
}

export default function ContactCTA() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="section cta" id="contact">
      <div className="container">
        <motion.div
          className="cta-inner gpu"
          ref={ref}
          variants={scaleIn(0.9, 1.2)}
          initial="hidden" whileInView="show" viewport={VIEW}
        >
          <motion.div
            className="cta-grad"
            animate={reduce ? {} : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />

          <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={VIEW}>
            <motion.div style={{ overflow: 'hidden' }} variants={maskReveal(1.2)}>
              <h2 className="text-grad">พร้อมให้เราดูแลคุณ<br />และรถยนต์ Toyota ของคุณ</h2>
            </motion.div>
            <motion.p variants={fadeUp(24, 1)}>ทีมงานพิธานโตโยต้าพร้อมให้บริการคุณในทุกขั้นตอน</motion.p>
            <motion.div className="cta-buttons" variants={fadeUp(20, 1)}>
              <MagneticButton href="#" primary><FileText /> ขอใบเสนอราคา</MagneticButton>
              <MagneticButton href="#products"><Car /> นัดทดลองขับ</MagneticButton>
              <MagneticButton href="#services"><CalendarCheck /> นัดเข้าศูนย์บริการ</MagneticButton>
              <MagneticButton href="#"><Phone /> ติดต่อเรา</MagneticButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
