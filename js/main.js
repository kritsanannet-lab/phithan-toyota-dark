/* =========================================================================
   PHITHAN TOYOTA — Interaction & motion layer
   ========================================================================= */
(function () {
  'use strict';
  const D = window.PHITHAN;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const baht = (n) => n.toLocaleString('th-TH');

  /* ---------- Header scroll state ------------------------------------- */
  const header = $('#header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile drawer ------------------------------------------- */
  const drawer = $('#drawer');
  $('#menuToggle').addEventListener('click', () => drawer.classList.add('open'));
  $('#drawerClose').addEventListener('click', () => drawer.classList.remove('open'));
  $$('#drawer a').forEach((a) => a.addEventListener('click', () => drawer.classList.remove('open')));

  /* ---------- HERO slider --------------------------------------------- */
  const slides = D.heroSlides;
  const heroEls = { kicker: $('#heroKicker'), title: $('#heroTitle'), sub: $('#heroSub'), car: $('#heroCar') };
  const dotsWrap = $('#heroDots');
  let heroIdx = 0, heroTimer;

  dotsWrap.innerHTML = slides.map((_, i) => `<button data-i="${i}" aria-label="สไลด์ ${i + 1}"></button>`).join('');
  const dots = $$('#heroDots button');

  function setHero(i, animate = true) {
    heroIdx = (i + slides.length) % slides.length;
    const s = slides[heroIdx];
    const apply = () => {
      heroEls.kicker.textContent = s.kicker;
      heroEls.title.innerHTML = s.title;
      heroEls.sub.textContent = s.sub;
      heroEls.car.src = s.img;
    };
    if (animate && window.gsap) {
      gsap.to('.hero-copy > *, .hero-car', {
        opacity: 0, y: 12, duration: 0.25, ease: 'power2.in', stagger: 0.03,
        onComplete: () => { apply(); gsap.fromTo('.hero-copy > *, .hero-car', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.06 }); },
      });
    } else { apply(); }
    dots.forEach((d, di) => d.classList.toggle('active', di === heroIdx));
  }
  function startHero() { clearInterval(heroTimer); heroTimer = setInterval(() => setHero(heroIdx + 1), 6000); }
  dots.forEach((d) => d.addEventListener('click', () => { setHero(+d.dataset.i); startHero(); }));
  setHero(0, false); startHero();

  /* ---------- SECTION 2 — Car showcase -------------------------------- */
  const carGrid = $('#carGrid');
  const carTabs = $('#carTabs');
  let carFilter = 'all';

  carTabs.innerHTML = D.carCategories.map((c) =>
    `<button class="tab${c.key === 'all' ? ' active' : ''}" data-cat="${c.key}"><b>${c.label}</b><span>${c.sub}</span></button>`
  ).join('');

  function renderCars(animate) {
    const list = carFilter === 'all' ? D.carData : D.carData.filter((c) => c.category === carFilter);
    if (!list.length) { carGrid.innerHTML = `<div class="empty-cars">ไม่พบรถยนต์ในหมวดนี้</div>`; return; }
    carGrid.innerHTML = list.map((c) => `
      <article class="car-card">
        <div class="car-media">
          <span class="car-tag">${c.tag}</span>
          <img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/car${c.id}/600/400'" />
        </div>
        <div class="car-body">
          <h3 class="car-name">${c.name}</h3>
          <div class="car-specs">
            <span><i data-lucide="gauge"></i> ${c.hp}</span>
            <span><i data-lucide="timer"></i> 0-100 ${c.speed}</span>
          </div>
          <div class="car-foot">
            <div class="car-price"><small>เริ่มต้น</small><b>฿${baht(c.price)}</b></div>
            <a href="#" class="car-link">ดูรายละเอียด <i data-lucide="arrow-right"></i></a>
          </div>
        </div>
      </article>`).join('');
    refreshIcons();
    if (animate && window.gsap) {
      gsap.fromTo('.car-card', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.05 });
    }
  }
  carTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab'); if (!btn) return;
    $$('.tab', carTabs).forEach((t) => t.classList.remove('active'));
    btn.classList.add('active');
    carFilter = btn.dataset.cat; renderCars(true);
  });
  renderCars();

  /* ---------- SECTION 3 — Services (zig-zag) -------------------------- */
  $('#serviceList').innerHTML = D.serviceData.map((s, i) => `
    <div class="zz-row">
      <div class="zz-media">
        <img src="${s.img}" alt="${s.title}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/svc${i}/800/550'" />
        <span class="zz-num">SERVICE / 0${i + 1}</span>
      </div>
      <div class="zz-copy">
        <div class="icon-chip"><i data-lucide="${s.icon}"></i></div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <a href="#promotions" class="btn btn-ghost btn-sm">เรียนรู้เพิ่มเติม <i data-lucide="arrow-up-right"></i></a>
      </div>
    </div>`).join('');

  /* ---------- SECTION 4 — Promotions ---------------------------------- */
  const promoTabs = $('#promoTabs');
  const promoGrid = $('#promoGrid');
  const promoKeys = Object.keys(D.promotionData);
  let promoFilter = promoKeys[0];

  promoTabs.innerHTML = promoKeys.map((k, i) =>
    `<button class="tab${i === 0 ? ' active' : ''}" data-key="${k}"><b>${D.promotionData[k].label}</b></button>`
  ).join('');

  function renderPromos(animate) {
    const items = D.promotionData[promoFilter].items;
    promoGrid.innerHTML = items.map((p) => `
      <article class="promo-card">
        <div class="promo-media"><img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/${encodeURIComponent(p.url)}/700/400'" /></div>
        <div class="promo-body">
          <span class="promo-date"><i data-lucide="calendar"></i> ${p.date}</span>
          <h3 class="promo-title">${p.title}</h3>
          <p class="promo-desc">${p.description}</p>
          <a href="#" class="promo-more">ดูโปรโมชั่น <i data-lucide="arrow-right"></i></a>
        </div>
      </article>`).join('');
    refreshIcons();
    if (animate && window.gsap) gsap.fromTo('.promo-card', { opacity: 0, scale: 0.96, y: 16 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08 });
  }
  promoTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab'); if (!btn) return;
    $$('.tab', promoTabs).forEach((t) => t.classList.remove('active'));
    btn.classList.add('active');
    promoFilter = btn.dataset.key; renderPromos(true);
  });
  renderPromos();

  /* ---------- SECTION 5 — Branches ------------------------------------ */
  const branchList = $('#branchList');
  const branchPanel = $('#branchPanel');
  let activeBranch = 0;

  branchList.innerHTML = D.branches.map((b, i) => `
    <button class="branch-item${i === 0 ? ' active' : ''}" data-i="${i}">
      <span class="pin"><i data-lucide="map-pin"></i></span>
      <span>
        <span class="b-name">${b.name}</span>
        <span class="b-meta">${b.operatingDays} · ${b.services.length} บริการ</span>
      </span>
    </button>`).join('');

  function renderBranchPanel(i) {
    const b = D.branches[i];
    branchPanel.innerHTML = `
      <div class="bp-bg"><img src="${b.bgImage}" alt="${b.name}" onerror="this.onerror=null;this.src='https://picsum.photos/seed/branch${b.id}/900/600'" /></div>
      <div class="bp-content">
        <h3>${b.name}</h3>
        <p class="bp-addr"><i data-lucide="map-pin"></i> ${b.address}</p>
        <div class="bp-stats">
          <div class="bp-stat"><span>เปิดทำการ</span><b>${b.operatingDays}</b></div>
          <div class="bp-stat"><span>ฝ่ายขาย</span><b class="mono">${b.hoursSales}</b></div>
          <div class="bp-stat"><span>ศูนย์บริการ</span><b class="mono">${b.hoursService}</b></div>
        </div>
        <div class="bp-services">${b.services.map((s) => `<span class="bp-chip">${s}</span>`).join('')}</div>
        <div class="bp-actions">
          <a href="https://www.google.com/maps/search/?api=1&query=${b.lat},${b.lng}" target="_blank" rel="noopener" class="btn btn-primary btn-sm"><i data-lucide="navigation"></i> นำทาง</a>
          <a href="tel:${b.phone}" class="btn btn-ghost btn-sm"><i data-lucide="phone"></i> ${b.phone.replace(/(\d{2})(\d{3})(\d{3,4})/, '$1-$2-$3')}</a>
          <button class="btn btn-ghost btn-sm" data-modal="${i}"><i data-lucide="expand"></i> ดูแผนที่</button>
        </div>
      </div>`;
    refreshIcons();
    if (window.gsap) gsap.fromTo('.bp-content > *', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', stagger: 0.05 });
  }
  branchList.addEventListener('click', (e) => {
    const btn = e.target.closest('.branch-item'); if (!btn) return;
    $$('.branch-item', branchList).forEach((t) => t.classList.remove('active'));
    btn.classList.add('active');
    activeBranch = +btn.dataset.i; renderBranchPanel(activeBranch);
  });
  renderBranchPanel(0);

  /* Branch modal */
  const modal = $('#branchModal');
  const closeModal = () => modal.classList.remove('open');
  branchPanel.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-modal]'); if (!btn) return;
    const b = D.branches[+btn.dataset.modal];
    $('#modalImg').src = b.modalImage;
    $('#modalImg').onerror = function () { this.src = 'https://picsum.photos/seed/map' + b.id + '/700/440'; };
    $('#modalBody').innerHTML = `
      <h3>${b.name}</h3>
      <p class="bp-addr" style="margin-bottom:1rem"><i data-lucide="map-pin"></i> ${b.address}</p>
      <a href="https://www.google.com/maps/search/?api=1&query=${b.lat},${b.lng}" target="_blank" rel="noopener" class="btn btn-primary btn-sm"><i data-lucide="navigation"></i> เปิดใน Google Maps</a>`;
    modal.classList.add('open'); refreshIcons();
  });
  $('#modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  /* ---------- SECTION 6 — Blog ---------------------------------------- */
  const blogTabs = $('#blogTabs');
  const blogGrid = $('#blogGrid');
  let blogFilter = 'all';

  blogTabs.innerHTML = `<button class="tab active" data-cat="all"><b>ทั้งหมด</b></button>` +
    D.blogCategories.map((c) => `<button class="tab" data-cat="${c}"><b>${c}</b></button>`).join('');

  function renderBlog(animate) {
    const list = blogFilter === 'all' ? D.blogPosts : D.blogPosts.filter((p) => p.cat === blogFilter);
    blogGrid.innerHTML = (list.length ? list : D.blogPosts).map((p) => `
      <article class="blog-card">
        <div class="bg"><img src="${p.img}" alt="${p.title}" loading="lazy" /></div>
        <div class="blog-content">
          <span class="blog-cat">${p.cat}</span>
          <h3>${p.title}</h3>
          <div class="blog-meta"><span><i data-lucide="calendar"></i> ${p.date}</span><span><i data-lucide="clock"></i> ${p.read}</span></div>
        </div>
      </article>`).join('');
    refreshIcons();
    if (animate && window.gsap) gsap.fromTo('.blog-card', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.06 });
  }
  blogTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab'); if (!btn) return;
    $$('.tab', blogTabs).forEach((t) => t.classList.remove('active'));
    btn.classList.add('active');
    blogFilter = btn.dataset.cat; renderBlog(true);
  });
  renderBlog();

  /* ---------- SECTION 7 — Knowledge cards ----------------------------- */
  $('#knowGrid').innerHTML = D.knowledgeCards.map((k) => `
    <article class="know-card">
      <div class="bg"><img src="${k.img}" alt="${k.title}" loading="lazy" /></div>
      <div class="know-content">
        <div class="icon-chip"><i data-lucide="${k.icon}"></i></div>
        <h3>${k.title}</h3>
        <p>${k.desc}</p>
      </div>
    </article>`).join('');

  /* ---------- SECTION 8 — Phithan BKK Group --------------------------- */
  $('#ecoGrid').innerHTML = D.groupData.map((g) => `
    <article class="eco-node ${g.color}">
      <div class="eco-head">
        <span class="e-icon"><i data-lucide="${g.icon}"></i></span>
        <div><h4>${g.group}</h4><span class="mono">${g.items.length} ธุรกิจ</span></div>
      </div>
      <ul class="eco-items">
        ${g.items.map((it) => `<li><i data-lucide="chevron-right"></i> ${it}</li>`).join('')}
      </ul>
    </article>`).join('');

  /* ---------- Icons --------------------------------------------------- */
  function refreshIcons() { if (window.lucide) window.lucide.createIcons(); }
  refreshIcons();

  /* ---------- Scroll effects ------------------------------------------
     Reveals + per-section cascade run on IntersectionObserver + CSS, which is
     reliable on every device. GSAP is used only for optional parallax. */
  const reveals = $$('.reveal');
  const grids = ['#carGrid', '#promoGrid', '#blogGrid', '#knowGrid', '#ecoGrid', '#serviceList']
    .map((s) => $(s)).filter(Boolean);
  grids.forEach((g) => g.setAttribute('data-cascade', ''));
  // Distinct motion per section so each reads differently as you scroll
  $('#promoGrid')?.classList.add('fx-scale');
  $('#knowGrid')?.classList.add('fx-scale');
  $('#serviceList')?.classList.add('fx-zigzag');
  const animated = [...reveals, ...grids];

  const reveal = (el) => {
    if (el.classList.contains('is-in')) return;
    if (el.hasAttribute('data-cascade')) {
      Array.from(el.children).forEach((c, i) => { c.style.transitionDelay = Math.min(i * 0.07, 0.7) + 's'; });
    }
    el.classList.add('is-in');
  };

  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('reveal-armed');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        reveal(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });
    // Also reveal whatever is left once the user reaches the bottom, so short
    // elements sitting in the last sliver of the page never stay hidden.
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) animated.forEach(reveal);
    }, { passive: true });

    // Start observing only AFTER the page has loaded. While images are still
    // loading the page height grows, which would otherwise make every section
    // briefly intersect at once and reveal instantly (no animation). Observing
    // once layout is settled keeps the reveals tied to real scroll position.
    let started = false;
    const start = () => {
      if (started) return; started = true;
      requestAnimationFrame(() => animated.forEach((el) => io.observe(el)));
    };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start);
    setTimeout(start, 2500); // fallback if 'load' is slow to fire
    // Safety net: reveal anything still hidden much later (never leave it blank)
    setTimeout(() => animated.forEach(reveal), 5000);
  }
  // If IntersectionObserver is unavailable, CSS keeps everything visible.

  /* GSAP parallax — pure movement, so skip it when the user prefers reduced
     motion (the opacity reveals above still run). */
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && window.gsap && window.ScrollTrigger) {
    try {
      gsap.registerPlugin(ScrollTrigger);
      $$('.zz-media').forEach((m) => {
        const img = m.querySelector('img'); if (!img) return;
        gsap.fromTo(img, { yPercent: -12, scale: 1.22 }, {
          yPercent: 12, ease: 'none',
          scrollTrigger: { trigger: m, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
        });
      });
      gsap.to('.hero-glow.red',  { yPercent: 18,  ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hero-glow.blue', { yPercent: -14, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hero-copy',      { yPercent: -10, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hero-grid-bg',   { yPercent: 12,  ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
    } catch (e) { /* parallax is optional */ }
  }

  /* ---------- Hero split-text reveal on load -------------------------- */
  if (window.gsap) {
    gsap.fromTo('.hero-copy > *', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.09, delay: 0.15 });
    gsap.fromTo('.hero-visual', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.3 });
  }
})();
