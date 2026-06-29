import { motion } from 'motion/react';
import { Gauge, Timer, ArrowRight } from 'lucide-react';
import { featuredCars, baht } from '../data/content';
import { stagger, fadeUp, maskReveal, imageZoom, VIEW, base } from '../animation/variants';

/* SECTION 4 — Featured Products
   Horizontal slide-in · image mask reveal · content stagger · smooth scale */
const cardVariant = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  show: { opacity: 1, x: 0, scale: 1, transition: base(1.1) },
};

export default function FeaturedProducts() {
  return (
    <section className="section" id="products" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <motion.div className="section-head" variants={stagger()} initial="hidden" whileInView="show" viewport={VIEW}>
          <motion.span className="kicker" variants={fadeUp(20, 0.9)}>FEATURED VEHICLES</motion.span>
          <motion.h2 className="text-grad" variants={fadeUp(34, 1)}>รุ่นเด่นที่คัดมาเพื่อคุณ</motion.h2>
          <motion.p variants={fadeUp(26, 1)}>ตั้งแต่สมรรถนะระดับตำนาน GR ไปจนถึงพลังงานไฟฟ้าเต็มรูปแบบ bZ4X</motion.p>
        </motion.div>

        <motion.div className="prod-grid" variants={stagger(0.14)} initial="hidden" whileInView="show" viewport={VIEW}>
          {featuredCars.map((c) => (
            <motion.article key={c.id} className="prod-card gpu" variants={cardVariant}>
              <div className="prod-media">
                <span className="prod-tag">{c.tag}</span>
                <motion.div className="gpu" variants={maskReveal(1.2)} style={{ height: '100%' }}>
                  <motion.img
                    src={c.img}
                    alt={c.name}
                    variants={imageZoom(1.3)}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/car${c.id}/700/400`; }}
                  />
                </motion.div>
              </div>
              <motion.div className="prod-body" variants={stagger(0.08)}>
                <motion.h3 className="prod-name" variants={fadeUp(18, 0.8)}>{c.name}</motion.h3>
                <motion.div className="prod-specs" variants={fadeUp(16, 0.8)}>
                  <span><Gauge /> {c.hp}</span>
                  <span><Timer /> 0-100 {c.speed}</span>
                </motion.div>
                <motion.div className="prod-foot" variants={fadeUp(16, 0.8)}>
                  <div className="prod-price"><small>เริ่มต้น</small><b>฿{baht(c.price)}</b></div>
                  <a href="#contact" className="btn btn-ghost btn-sm">ดูรายละเอียด <ArrowRight /></a>
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
