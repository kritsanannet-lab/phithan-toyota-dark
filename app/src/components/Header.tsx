import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { navLinks } from '../data/content';
import { EASE } from '../animation/variants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`header${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="container nav">
        <a href="#hero" className="logo">
          <span className="logo-mark">P</span>
          <span className="logo-text"><b>PHITHAN</b><span>TOYOTA</span></span>
        </a>

        <nav>
          <ul className="nav-menu">
            {navLinks.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
          </ul>
        </nav>

        <div className="nav-right">
          <a href="tel:020216666" className="call-pill"><Phone /> 02-021-6666</a>
          <a href="#" className="btn btn-sm" style={{ background: '#06C755', color: '#fff' }}><MessageCircle style={{ width: 16, height: 16 }} /> LINE</a>
          <button className="menu-toggle" aria-label="เปิดเมนู" onClick={() => setOpen(true)}><Menu /></button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <button className="drawer-close" aria-label="ปิดเมนู" onClick={() => setOpen(false)}><X /></button>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
