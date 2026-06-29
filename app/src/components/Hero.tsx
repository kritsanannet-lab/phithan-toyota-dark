import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Car, FileText } from 'lucide-react';
import { EASE, stagger, fadeUp } from '../animation/variants';

/* SECTION 1 — Hero
   Scale 1.1 → 1 · fade in · background parallax · floating decorative elements */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const carY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);

  const floats: { size: number; top: string; left?: string; right?: string; dur: number }[] = [
    { size: 80, top: '18%', left: '8%', dur: 7 },
    { size: 46, top: '70%', left: '14%', dur: 9 },
    { size: 120, top: '24%', right: '10%', dur: 8 },
  ];

  return (
    <section className="hero section" id="hero" ref={ref} style={{ paddingBlock: 0 }}>
      <motion.div className="hero-bg gpu" style={{ y: reduce ? 0 : bgY }}>
        <div className="hero-grid" />
        <span className="hero-glow red" />
        <span className="hero-glow silver" />
      </motion.div>

      {/* Floating decorative rings */}
      {floats.map((f, i) => (
        <motion.span
          key={i}
          className="hero-float gpu"
          style={{ width: f.size, height: f.size, top: f.top, left: f.left, right: f.right }}
          animate={reduce ? {} : { y: [0, -18, 0] }}
          transition={{ duration: f.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        />
      ))}

      <motion.div
        className="container hero-inner"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <motion.div className="hero-copy" variants={stagger(0.12, 0.2)} initial="hidden" animate="show">
          <motion.span className="kicker" variants={fadeUp(20, 0.9)}>OFFICIAL TOYOTA DEALER</motion.span>
          <motion.h1 variants={fadeUp(30, 1)}>กว่า 60 ปี<br />แห่งความไว้วางใจ</motion.h1>
          <motion.p className="sub" variants={fadeUp(24, 0.9)}>
            ตัวแทนจำหน่าย Toyota อย่างเป็นทางการ ขับเคลื่อนอนาคตการเดินทางไปกับเรา
          </motion.p>
          <motion.div className="hero-cta" variants={fadeUp(20, 0.9)}>
            <a href="#products" className="btn btn-primary"><Car /> ดูรถยนต์ทั้งหมด</a>
            <a href="#contact" className="btn btn-ghost"><FileText /> ขอใบเสนอราคา</a>
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual gpu" style={{ y: reduce ? 0 : carY }}>
          <span className="ring r1" /><span className="ring r2" /><span className="ring r3" />
          <img
            className="hero-car"
            src="https://www.toyota.co.th/media/product/series/v/736/model/acd439c5945c98bbc6064c6c106964f0b225096884ea6569e53433801a7eb2cc.webp"
            alt="Toyota bZ4X"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
