/* =========================================================================
   PHITHAN TOYOTA — CINEMATIC SCROLL EXPERIENCE
   Each section gets its own animation language. GSAP ScrollTrigger.
   Only opacity / transform / clip-path / filter are animated (GPU-friendly).
   Content is visible by default, so a failure here never hides anything.
   ========================================================================= */
(function () {
  'use strict';
  if (!(window.gsap && window.ScrollTrigger)) return;
  gsap.registerPlugin(ScrollTrigger);

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const desktop = window.matchMedia('(min-width: 768px)').matches;
  const EXPO = 'expo.out';
  const POWER = 'power3.out';

  /* Respect reduced motion: leave everything in its natural, visible state. */
  if (reduce) { ScrollTrigger.refresh(); return; }

  /* ---------- text splitting helpers ---------------------------------- */
  function graphemes(text) {
    if (window.Intl && Intl.Segmenter) {
      try { return Array.from(new Intl.Segmenter('th', { granularity: 'grapheme' }).segment(text), (s) => s.segment); }
      catch (e) { /* fall through */ }
    }
    return Array.from(text);
  }
  function splitChars(el) {
    const frag = document.createDocumentFragment();
    el.childNodes.forEach((node) => {
      if (node.nodeType === 3) {
        graphemes(node.textContent).forEach((g) => {
          const s = document.createElement('span');
          s.className = 'ch';
          if (g === ' ') s.innerHTML = '&nbsp;'; else s.textContent = g;
          frag.appendChild(s);
        });
      } else if (node.nodeName === 'BR') {
        frag.appendChild(document.createElement('br'));
      } else {
        frag.appendChild(node.cloneNode(true));
      }
    });
    el.innerHTML = '';
    el.appendChild(frag);
    return $$('.ch', el);
  }
  function splitWords(el) {
    const parts = el.textContent.split(/(\s+)/);
    el.textContent = '';
    const inners = [];
    parts.forEach((w) => {
      if (w === '' || /^\s+$/.test(w)) { el.appendChild(document.createTextNode(w || ' ')); return; }
      const line = document.createElement('span'); line.className = 'word-line';
      const inner = document.createElement('span'); inner.className = 'word'; inner.textContent = w;
      line.appendChild(inner); el.appendChild(line); inners.push(inner);
    });
    return inners;
  }
  function countUp(el, trigger) {
    const raw = el.textContent.trim();
    const m = raw.match(/([\d,]+(?:\.\d+)?)/);
    if (!m) return;
    const target = parseFloat(m[1].replace(/,/g, ''));
    const prefix = raw.slice(0, m.index);
    const suffix = raw.slice(m.index + m[1].length);
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: trigger || el, start: 'top 85%', once: true,
      onEnter: () => gsap.to(obj, {
        v: target, duration: 1.8, ease: 'power2.out',
        onUpdate() { el.textContent = prefix + Math.round(obj.v).toLocaleString('th-TH') + suffix; },
      }),
    });
  }
  const parallax = (img, from, to, trigger) => gsap.fromTo(img, { yPercent: from }, {
    yPercent: to, ease: 'none',
    scrollTrigger: { trigger: trigger || img, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
  });

  /* ===================================================================
     SECTION 1 — HERO · Cinematic Opening (runs immediately, above the fold)
     bg zoom · headline char reveal · subtitle words · CTA rise · particles
     =================================================================== */
  function hero() {
    const grid = $('.hero-grid-bg');
    const title = $('#heroTitle');
    const sub = $('#heroSub');
    const tl = gsap.timeline({ defaults: { ease: EXPO } });

    if (grid) { gsap.set(grid, { scale: 1.12, transformOrigin: '50% 45%' }); tl.to(grid, { scale: 1, duration: 2.0 }, 0); }

    if ($('#heroKicker')) { gsap.set('#heroKicker', { opacity: 0, y: 18 }); tl.to('#heroKicker', { opacity: 1, y: 0, duration: 0.8 }, 0.15); }
    if (title) {
      const chars = splitChars(title);
      gsap.set(chars, { yPercent: 60, opacity: 0 });
      tl.to(chars, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.025, ease: 'power4.out' }, 0.25);
    }
    if (sub) {
      const words = splitWords(sub);
      gsap.set(words, { opacity: 0, yPercent: 50 });
      tl.to(words, { opacity: 1, yPercent: 0, duration: 0.8, stagger: 0.04, ease: 'power3.out' }, 0.6);
    }
    gsap.set('.hero-cta', { opacity: 0, y: 28 }); tl.to('.hero-cta', { opacity: 1, y: 0, duration: 0.9 }, 0.8);
    gsap.set('.hero-stats', { opacity: 0, y: 20 }); tl.to('.hero-stats', { opacity: 1, y: 0, duration: 0.9 }, 0.95);
    if ($('.hero-visual')) { gsap.set('.hero-visual', { opacity: 0, scale: 0.92 }); tl.to('.hero-visual', { opacity: 1, scale: 1, duration: 1.3 }, 0.5); }
    gsap.set('.scroll-hint', { opacity: 0 }); tl.to('.scroll-hint', { opacity: 1, duration: 1 }, 1.3);

    // count up the hero stats
    $$('.hero-stats .stat b').forEach((b) => countUp(b, '#hero'));

    // floating particles
    const hostHero = $('#hero');
    if (hostHero) {
      const layer = document.createElement('div'); layer.className = 'hero-particles';
      hostHero.appendChild(layer);
      for (let i = 0; i < 16; i++) {
        const p = document.createElement('span'); p.className = 'particle';
        const size = gsap.utils.random(2, 5);
        gsap.set(p, { width: size, height: size, left: gsap.utils.random(0, 100) + '%', top: gsap.utils.random(0, 100) + '%', opacity: gsap.utils.random(0.15, 0.5) });
        layer.appendChild(p);
        gsap.to(p, { y: gsap.utils.random(-40, -90), x: gsap.utils.random(-20, 20), duration: gsap.utils.random(6, 12), repeat: -1, yoyo: true, ease: 'sine.inOut', delay: gsap.utils.random(0, 4) });
      }
    }

    // hero depth parallax on scroll
    if ($('.hero-glow.red')) gsap.to('.hero-glow.red', { yPercent: 22, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
    if ($('.hero-glow.silver, .hero-glow.blue')) gsap.to('.hero-glow.silver, .hero-glow.blue', { yPercent: -16, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
    if ($('.hero-visual')) gsap.to('.hero-visual', { yPercent: 14, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
  }

  /* ===================================================================
     Shared — section heading: kicker slide, title clip-reveal, lead fade
     =================================================================== */
  function headings() {
    $$('.section-head').forEach((head) => {
      const k = $('.kicker', head); const h = $('h2', head); const p = $('p', head);
      const tl = gsap.timeline({ scrollTrigger: { trigger: head, start: 'top 84%', once: true } });
      if (k) { gsap.set(k, { opacity: 0, x: -24 }); tl.to(k, { opacity: 1, x: 0, duration: 0.7, ease: POWER }, 0); }
      if (h) { gsap.set(h, { clipPath: 'inset(0 0 100% 0)', yPercent: 6 }); tl.to(h, { clipPath: 'inset(0 0 -2% 0)', yPercent: 0, duration: 1.0, ease: EXPO }, 0.1); }
      if (p) { gsap.set(p, { opacity: 0, y: 16 }); tl.to(p, { opacity: 1, y: 0, duration: 0.8, ease: POWER }, 0.35); }
    });
  }

  /* ===================================================================
     SECTION 2 — CAR SHOWCASE · Porsche Gallery
     cards emerge from blur+dark, scale 0.86 → 1, image parallax
     =================================================================== */
  function cars() {
    $$('#carGrid .car-card').forEach((card) => {
      gsap.set(card, { opacity: 0, scale: 0.86, filter: 'blur(10px) brightness(0.55)' });
      gsap.to(card, {
        opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 1.1, ease: EXPO,
        scrollTrigger: { trigger: card, start: 'top 88%', once: true },
      });
      const img = $('.car-media img', card);
      if (img) parallax(img, -7, 7, card);
    });
  }

  /* ===================================================================
     SECTION 3 — SERVICES · card grid (featured + tiles)
     cards rise with a depth scale (0.94 → 1), image settles from a zoom
     =================================================================== */
  function services() {
    $$('#serviceList .service-card').forEach((card, i) => {
      gsap.set(card, { opacity: 0, y: 60, scale: 0.94 });
      gsap.to(card, {
        opacity: 1, y: 0, scale: 1, duration: 1.1, ease: EXPO, delay: (i % 3) * 0.06,
        scrollTrigger: { trigger: card, start: 'top 85%', once: true },
      });
      const img = $('.service-media img', card);
      if (img) gsap.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 1.4, ease: EXPO, scrollTrigger: { trigger: card, start: 'top 85%', once: true } });
    });
  }

  /* ===================================================================
     SECTION 4 — PROMOTIONS · Luxury Editorial
     3D page-turn, slow image zoom, light sweep across the image
     =================================================================== */
  function promotions() {
    $$('#promoGrid .promo-card').forEach((card) => {
      if (desktop) {
        gsap.set(card, { opacity: 0, rotateY: 14, rotateX: 6, y: 50, transformPerspective: 1000, transformOrigin: 'left center' });
        gsap.to(card, {
          opacity: 1, rotateY: 0, rotateX: 0, y: 0, duration: 1.3, ease: EXPO,
          scrollTrigger: { trigger: card, start: 'top 86%', once: true },
        });
      } else {
        // On the mobile slider, a flat fade-up avoids 3D clipping inside the
        // horizontal scroll container; all cards reveal as the slider enters.
        gsap.set(card, { opacity: 0, y: 28 });
        gsap.to(card, { opacity: 1, y: 0, duration: 0.9, ease: EXPO, scrollTrigger: { trigger: '#promoGrid', start: 'top 85%', once: true } });
      }
      const media = $('.promo-media', card);
      const img = $('img', media);
      if (img) gsap.fromTo(img, { scale: 1.28 }, { scale: 1, duration: 1.7, ease: EXPO, scrollTrigger: { trigger: card, start: 'top 86%', once: true } });
      if (media) {
        const sweep = document.createElement('span'); sweep.className = 'sweep'; media.appendChild(sweep);
        gsap.fromTo(sweep, { xPercent: -130 }, { xPercent: 130, duration: 1.4, ease: 'power2.inOut', delay: 0.5, scrollTrigger: { trigger: card, start: 'top 86%', once: true } });
      }
    });
  }

  /* ===================================================================
     SECTION 5 — BRANCHES · Journey
     list slides in, panel image slowly pans, info slides from the side
     =================================================================== */
  function branches() {
    const list = $('#branchList');
    if (list) gsap.fromTo($$('.branch-item', list), { opacity: 0, x: -44 }, {
      opacity: 1, x: 0, duration: 0.9, stagger: 0.1, ease: EXPO,
      scrollTrigger: { trigger: list, start: 'top 80%', once: true },
    });
    const panel = $('#branchPanel');
    if (panel) {
      const bg = $('.bp-bg img', panel);
      if (bg) gsap.fromTo(bg, { scale: 1.3, xPercent: -6 }, { xPercent: 6, ease: 'none', scrollTrigger: { trigger: panel, start: 'top bottom', end: 'bottom top', scrub: true } });
      gsap.fromTo($$('.bp-content > *', panel), { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 0.9, stagger: 0.08, ease: EXPO,
        scrollTrigger: { trigger: panel, start: 'top 75%', once: true },
      });
    }
  }

  /* ===================================================================
     SECTION 6 — BLOG · Editorial Reveal
     image unmasks with clip-path, headline reveals word by word
     =================================================================== */
  function blog() {
    $$('#blogGrid .blog-card').forEach((card) => {
      const img = $('.bg img', card);
      if (img) gsap.fromTo(img, { clipPath: 'inset(0 0 100% 0)', scale: 1.2 }, {
        clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 1.3, ease: EXPO,
        scrollTrigger: { trigger: card, start: 'top 85%', once: true },
      });
      const h = $('h3', card);
      if (h) {
        const words = splitWords(h);
        gsap.set(words, { opacity: 0, yPercent: 60 });
        gsap.to(words, { opacity: 1, yPercent: 0, duration: 0.8, stagger: 0.05, ease: 'power4.out', scrollTrigger: { trigger: card, start: 'top 82%', once: true } });
      }
      gsap.fromTo($$('.blog-cat, .blog-meta', card), { opacity: 0, y: 18 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: POWER,
        scrollTrigger: { trigger: card, start: 'top 80%', once: true },
      });
    });
  }

  /* ===================================================================
     SECTION 7 — KNOWLEDGE · Floating Glass
     cards lift with a 3D tilt; follow the cursor's perspective
     =================================================================== */
  function knowledge() {
    $$('#knowGrid .know-card').forEach((card, i) => {
      gsap.set(card, { opacity: 0, y: 56, rotateX: 10, transformPerspective: 1000 });
      gsap.to(card, {
        opacity: 1, y: 0, rotateX: 0, duration: 1.1, ease: EXPO, delay: (i % 3) * 0.05,
        scrollTrigger: { trigger: card, start: 'top 86%', once: true },
      });
      if (fine && desktop) {
        const rxTo = gsap.quickTo(card, 'rotateX', { duration: 0.5, ease: 'power3' });
        const ryTo = gsap.quickTo(card, 'rotateY', { duration: 0.5, ease: 'power3' });
        card.addEventListener('mousemove', (e) => {
          const r = card.getBoundingClientRect();
          rxTo((-(e.clientY - (r.top + r.height / 2)) / r.height) * 10);
          ryTo(((e.clientX - (r.left + r.width / 2)) / r.width) * 10);
        });
        card.addEventListener('mouseleave', () => { rxTo(0); ryTo(0); });
      }
    });
  }

  /* ===================================================================
     SECTION 8 — PHITHAN GROUP · Bento Build
     each node assembles individually (back-ease pop + tilt) + counter
     =================================================================== */
  function group() {
    const gh = $('.group-hero');
    if (gh) gsap.fromTo(gh, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: EXPO, scrollTrigger: { trigger: gh, start: 'top 85%', once: true } });
    const num = $('.gh-num b'); if (num) countUp(num, gh || num);

    $$('#ecoGrid .eco-node').forEach((node, i) => {
      gsap.set(node, { opacity: 0, scale: 0.8, rotate: i % 2 ? 3 : -3, y: 44 });
      gsap.to(node, {
        opacity: 1, scale: 1, rotate: 0, y: 0, duration: 0.9, ease: 'back.out(1.5)',
        delay: gsap.utils.random(0, 0.35),
        scrollTrigger: { trigger: node, start: 'top 88%', once: true },
      });
      // each business line slides in as the node lands
      gsap.fromTo($$('.eco-items li', node), { opacity: 0, x: -14 }, {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.06, ease: POWER,
        scrollTrigger: { trigger: node, start: 'top 84%', once: true },
      });
    });
  }

  /* ===================================================================
     SECTION 9 — CTA · cinematic finish
     scale reveal, headline clip-mask, drifting glows
     =================================================================== */
  function cta() {
    const inner = $('.cta-inner');
    if (!inner) return;
    gsap.fromTo(inner, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 1.3, ease: EXPO, scrollTrigger: { trigger: inner, start: 'top 85%', once: true } });
    const h = $('h2', inner);
    if (h) gsap.fromTo(h, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 -2% 0)', duration: 1.1, ease: EXPO, scrollTrigger: { trigger: inner, start: 'top 80%', once: true } });
    gsap.fromTo($$('.cta-buttons .btn', inner), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: POWER, scrollTrigger: { trigger: inner, start: 'top 78%', once: true } });
    if ($('.glow.red', inner)) gsap.to('.glow.red', { xPercent: 28, yPercent: 18, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    if ($('.glow.blue', inner)) gsap.to('.glow.blue', { xPercent: -22, yPercent: -16, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }

  /* ===================================================================
     SECTION 10 — FOOTER · Elegant Ending
     columns and links fade in one by one, logo glows softly
     =================================================================== */
  function footer() {
    const f = $('.footer');
    if (!f) return;
    gsap.fromTo($$('.footer-grid > *', f), { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: EXPO,
      scrollTrigger: { trigger: f, start: 'top 88%', once: true },
    });
    gsap.fromTo($$('.f-col a', f), { opacity: 0, y: 10 }, {
      opacity: 1, y: 0, duration: 0.5, stagger: 0.03, ease: POWER,
      scrollTrigger: { trigger: '.footer-grid', start: 'top 82%', once: true },
    });
    gsap.fromTo($('.footer-bottom', f), { opacity: 0 }, { opacity: 1, duration: 1.1, ease: 'power2.out', scrollTrigger: { trigger: '.footer-bottom', start: 'top 96%', once: true } });
    const mark = $('.f-brand .logo-mark', f);
    if (mark) gsap.to(mark, { filter: 'drop-shadow(0 0 12px rgba(204,0,0,0.7))', duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }

  /* ===================================================================
     MICRO-INTERACTIONS — magnetic buttons (fine pointers only)
     =================================================================== */
  function magnetics() {
    if (!fine) return;
    $$('.btn').forEach((btn) => {
      const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.4);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.4);
      });
      btn.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
    });
  }

  /* ---------- orchestration ------------------------------------------- */
  hero();        // immediate opening (above the fold)
  magnetics();

  // Scroll-triggered sections are built after load so trigger positions are
  // measured against the final, image-settled layout (no premature reveals).
  let built = false;
  function buildScroll() {
    if (built) return; built = true;
    headings(); cars(); services(); promotions(); branches(); blog(); knowledge(); group(); cta(); footer();
    ScrollTrigger.refresh();
  }
  if (document.readyState === 'complete') requestAnimationFrame(buildScroll);
  else window.addEventListener('load', () => requestAnimationFrame(buildScroll));
  setTimeout(buildScroll, 2800); // fallback if load is slow

  // Keep trigger positions correct as fonts / late images shift layout
  const refresh = () => ScrollTrigger.refresh();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh).catch(() => {});
  $$('img').forEach((img) => img.addEventListener('load', refresh, { once: true }));
  [1200, 2600].forEach((t) => setTimeout(refresh, t));
})();
