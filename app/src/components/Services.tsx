import { motion } from 'motion/react';
import { Wrench, SprayCan, CarFront, CalendarCheck, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { services } from '../data/content';

const ICONS: Record<string, LucideIcon> = { Wrench, SprayCan, CarFront, CalendarCheck };
import { stagger, fadeUp, slideAlternate, imageZoom, VIEW } from '../animation/variants';

/* SECTION 3 — Services
   Cards reveal one by one · alternate left/right entrance · hover scale ·
   background subtle zoom */
export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <motion.div className="section-head" variants={stagger()} initial="hidden" whileInView="show" viewport={VIEW}>
          <motion.span className="kicker" variants={fadeUp(20, 0.9)}>OUR SERVICES</motion.span>
          <motion.h2 className="text-grad" variants={fadeUp(34, 1)}>บริการของเรา</motion.h2>
          <motion.p variants={fadeUp(26, 1)}>ดูแลรถคุณด้วยมาตรฐานจากโตโยต้า พร้อมทีมช่างผู้เชี่ยวชาญและเทคโนโลยีที่ทันสมัย</motion.p>
        </motion.div>

        <div className="zigzag">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Wrench;
            return (
              <motion.div
                key={s.title}
                className={`zz-row${i % 2 === 1 ? ' rev' : ''}`}
                variants={slideAlternate(i, 70, 1.1)}
                initial="hidden" whileInView="show" viewport={VIEW}
              >
                <motion.div className="zz-media gpu" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                  <motion.img
                    src={s.img}
                    alt={s.title}
                    variants={imageZoom(1.4)}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/svc${i}/800/550`; }}
                  />
                </motion.div>
                <div className="zz-copy">
                  <div className="icon-chip"><Icon /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href="#contact" className="btn btn-ghost btn-sm" style={{ marginTop: '1.4rem' }}>
                    เรียนรู้เพิ่มเติม <ArrowUpRight />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
