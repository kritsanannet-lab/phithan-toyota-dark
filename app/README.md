# Phithan Toyota — React + Motion.dev

เวอร์ชัน React + TypeScript ของหน้า Phithan Toyota ที่ใช้ **Motion.dev** (`motion/react`)
สำหรับ scroll-triggered animation แบบพรีเมียมในทั้ง 11 sections

## รันโปรเจกต์

```bash
cd app
npm install
npm run dev      # โหมดพัฒนา (Vite)
npm run build    # ตรวจ TypeScript + build production -> dist/
npm run preview  # พรีวิว build ที่ dist/
```

## โครงสร้าง

```
src/
  animation/variants.ts   # reusable variants (easing [0.22,1,0.36,1], stagger, ฯลฯ)
  hooks/useCountUp.ts      # count-up เมื่อเข้า viewport (เคารพ reduced-motion)
  data/content.ts          # ข้อมูลเนื้อหาแบบ typed
  components/*.tsx          # 11 sections + Header/Footer
  main.tsx                 # MotionConfig reducedMotion="user"
```

## Animation ต่อ section

| # | Section | Scroll animation |
|---|---------|------------------|
| 1 | Hero | Scale 1.1→1, fade, background parallax, floating rings |
| 2 | About | Fade-up, stagger text, image slide จากขวา, counter |
| 3 | Services | Cards เผยทีละใบ สลับซ้าย/ขวา, hover scale, image zoom |
| 4 | Featured Products | Horizontal slide-in, image mask reveal, content stagger |
| 5 | Statistics | Count-up, progress bar fill, parallax background |
| 6 | Process Timeline | เส้น timeline ยืดแนวตั้ง, steps เรียงลำดับ, icon scale |
| 7 | Gallery | Masonry reveal + rotate correction + scale 1.05→1 |
| 8 | Testimonials | Cards เลื่อนขึ้น, stagger, quote icon scale, bg parallax |
| 9 | Blog | Fade+slide up, image zoom, metadata stagger, hover lift |
| 10 | Partners | Logo marquee loop + floating + fade-in |
| 11 | Contact CTA | Scale reveal, text mask, magnetic button, gradient move |

## หลักการ

- `viewport={{ once: true, amount: 0.2 }}` — เล่นครั้งเดียวตอนเข้าจอ
- Easing `[0.22, 1, 0.36, 1]`, duration 0.8s–1.4s, stagger children
- เคารพ `prefers-reduced-motion` ผ่าน `<MotionConfig reducedMotion="user">`
- เร่งด้วย GPU (`will-change`, `translateZ(0)`) เฉพาะที่จำเป็น
- เฉพาะ `transform`/`opacity` เพื่อประสิทธิภาพ
