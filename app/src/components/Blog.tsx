import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';
import { posts } from '../data/content';
import { stagger, fadeUp, imageZoom, VIEW, base } from '../animation/variants';

/* SECTION 9 — Blog
   Cards fade and slide up · image zoom reveal · metadata stagger · hover elevation */
const cardVariant = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: base(1) },
};

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <motion.div className="section-head" variants={stagger()} initial="hidden" whileInView="show" viewport={VIEW}>
          <motion.span className="kicker" variants={fadeUp(20, 0.9)}>BLOG & NEWS</motion.span>
          <motion.h2 className="text-grad" variants={fadeUp(34, 1)}>บทความและข่าวสาร</motion.h2>
          <motion.p variants={fadeUp(26, 1)}>อัปเดตข่าวสาร Toyota เทคนิคดูแลรถ และรีวิวรถยนต์</motion.p>
        </motion.div>

        <motion.div className="blog-grid" variants={stagger(0.14)} initial="hidden" whileInView="show" viewport={VIEW}>
          {posts.map((p) => (
            <motion.article
              key={p.title}
              className="blog-card gpu"
              variants={cardVariant}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="blog-media">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  variants={imageZoom(1.3)}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/blogx/800/500'; }}
                />
              </div>
              <motion.div className="blog-body" variants={stagger(0.08)}>
                <motion.span className="blog-cat" variants={fadeUp(14, 0.7)}>{p.cat}</motion.span>
                <motion.h3 variants={fadeUp(16, 0.8)}>{p.title}</motion.h3>
                <motion.div className="blog-meta" variants={fadeUp(14, 0.7)}>
                  <span><Calendar /> {p.date}</span>
                  <span><Clock /> {p.read}</span>
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
