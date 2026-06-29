import { motion } from 'motion/react';
import { stagger, fadeUp, slideInRight, VIEW } from '../animation/variants';
import { useCountUp } from '../hooks/useCountUp';

/* SECTION 2 — About
   Fade up · stagger text reveal · image slides from right · counters animate */
function MiniCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp<HTMLElement>(target);
  return (
    <div>
      <b ref={ref}>{Math.round(value)}{suffix}</b>
      <span>{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section className="section" id="about" style={{ background: 'var(--bg-2)' }}>
      <div className="container about-grid">
        <motion.div
          className="about-copy"
          variants={stagger(0.12)}
          initial="hidden" whileInView="show" viewport={VIEW}
        >
          <motion.span className="kicker" variants={fadeUp(20, 0.9)}>ABOUT US</motion.span>
          <motion.h2 className="text-grad" variants={fadeUp(36, 1)}>กว่า 60 ปี<br />บนเส้นทางความไว้วางใจ</motion.h2>
          <motion.p variants={fadeUp(28, 1)}>
            บริษัท พิธานพาณิชย์ จำกัด ก่อตั้งเมื่อปี พ.ศ. 2502 ดำเนินธุรกิจในฐานะผู้แทนจำหน่ายรถยนต์โตโยต้า
            พร้อมศูนย์บริการซ่อมบำรุงและจำหน่ายอะไหล่แท้
          </motion.p>
          <motion.p variants={fadeUp(28, 1)}>
            ได้รับการแต่งตั้งเป็นตัวแทนจำหน่ายอย่างเป็นทางการในปี พ.ศ. 2506 และเติบโตเป็นเครือข่ายธุรกิจ
            ที่หลากหลายในปัจจุบัน ดูแลคุณในทุกมิติของการเดินทาง
          </motion.p>

          <motion.div className="about-stats" variants={fadeUp(24, 1)}>
            <MiniCounter target={60} suffix="+" label="ปีประสบการณ์" />
            <MiniCounter target={6} suffix="" label="สาขา" />
            <MiniCounter target={17} suffix="" label="ธุรกิจในเครือ" />
          </motion.div>
        </motion.div>

        <motion.div
          className="about-media gpu"
          variants={slideInRight(72, 1.2)}
          initial="hidden" whileInView="show" viewport={VIEW}
        >
          <img
            src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80"
            alt="Phithan Toyota showroom"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/about/900/1100'; }}
          />
        </motion.div>
      </div>
    </section>
  );
}
