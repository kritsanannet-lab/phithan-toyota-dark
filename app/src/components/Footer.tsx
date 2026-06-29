import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Send, Play, Camera } from 'lucide-react';
import { stagger, fadeUp, VIEW } from '../animation/variants';

const cols = [
  { h: 'บริษัท', items: ['เกี่ยวกับเรา', 'ประวัติบริษัท', 'สาขาของเรา', 'ร่วมงานกับเรา'] },
  { h: 'รถยนต์', items: ['รถยนต์นั่ง', 'SUV & PPV', 'รถกระบะ', 'โปรโมชั่นรถใหม่'] },
  { h: 'บริการ', items: ['ขอใบเสนอราคา', 'นัดหมายออนไลน์', 'ทดลองขับ', 'ศูนย์บริการ'] },
  { h: 'เครือบริษัท', items: ['Toyota Sure', 'Shops2fun', 'Trumq Cafe', 'ครัวรักเมืองไทย'] },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <motion.div
        className="container"
        variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={VIEW}
      >
        <div className="footer-top">
          <motion.div variants={fadeUp(24, 0.9)} style={{ maxWidth: 320 }}>
            <a href="#hero" className="logo">
              <span className="logo-mark">P</span>
              <span className="logo-text"><b>PHITHAN</b><span>TOYOTA</span></span>
            </a>
            <p>บริษัท พิธานพาณิชย์ จำกัด ตัวแทนจำหน่าย Toyota อย่างเป็นทางการ กว่า 60 ปีแห่งความไว้วางใจ</p>
            <div className="footer-social" style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              {[MessageCircle, Send, Play, Camera].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="call-pill" style={{ width: 40, height: 40, justifyContent: 'center', padding: 0 }}>
                  <Icon style={{ width: 17, height: 17 }} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div className="footer-links" variants={fadeUp(24, 0.9)}>
            {cols.map((c) => (
              <div className="footer-col" key={c.h}>
                <h5>{c.h}</h5>
                {c.items.map((it) => <a key={it} href="#">{it}</a>)}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="footer-bottom" variants={fadeUp(20, 0.9)}>
          <span className="copy">© 2026 Phithan Panich Co., Ltd. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}><Phone style={{ width: 15, height: 15, color: 'var(--silver)' }} /> 02-021-6666</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}><MapPin style={{ width: 15, height: 15, color: 'var(--silver)' }} /> 6 สาขาทั่วกรุงเทพฯ</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
