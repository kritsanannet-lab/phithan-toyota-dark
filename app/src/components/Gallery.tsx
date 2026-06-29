import { motion } from 'motion/react';
import { galleryImages } from '../data/content';
import { stagger, fadeUp, gallerySettle, VIEW } from '../animation/variants';

/* SECTION 7 — Gallery
   Masonry images reveal randomly · slight rotate correction · scale 1.05 → 1 */
const ROTATES = [-2.5, 1.8, -1.2, 2.4, -2, 1.4]; // deterministic "random" tilt

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <motion.div className="section-head" variants={stagger()} initial="hidden" whileInView="show" viewport={VIEW}>
          <motion.span className="kicker" variants={fadeUp(20, 0.9)}>GALLERY</motion.span>
          <motion.h2 className="text-grad" variants={fadeUp(34, 1)}>โชว์รูมและรถยนต์ของเรา</motion.h2>
        </motion.div>

        <motion.div className="gallery" variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={VIEW}>
          {galleryImages.map((src, i) => (
            <motion.figure key={i} className="gpu" variants={gallerySettle(ROTATES[i % ROTATES.length], 1.1)}>
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                style={{ aspectRatio: i % 3 === 0 ? '4 / 5' : '4 / 3' }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/gal${i}/800/600`; }}
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
