# พิธานโตโยต้า — Phithan Toyota (Dark)

เว็บไซต์ Landing Page ของ **พิธานโตโยต้า** ตัวแทนจำหน่าย Toyota อย่างเป็นทางการ
ออกแบบในสไตล์ **"Estilo de Futuro Autônomo"** — ธีมมืด (full dark mode) แนว tech-inspired,
electric vehicles, autonomous driving และ AI

## ✨ ไฮไลต์การออกแบบ

- **Full dark mode** — พื้นหลัง off-black/charcoal ตามสเปก (ไม่ใช้ดำสนิท `#000`)
- **Accent:** โมโนโครม — แดง Toyota `#CC0000` เป็นสีเดียว ที่เหลือเป็นเฉดเทา/เงิน `#C7CBD2`
- **Typography:** หัวข้อใช้ **LINE Seed** · เนื้อหาใช้ **Google Sans** · ค่าทางเทคนิคใช้ **JetBrains Mono**
- **Motion:** GSAP + ScrollTrigger — split-text reveal, staggered cascade, parallax, hover lift
- **Layout:** Grid สูงสุด 1280px, hero split-screen, services แบบ zig-zag, ใช้ `min-h-[100dvh]`
- **Icons:** Lucide (ไม่มี emoji ใน UI)
- **Responsive:** ยุบทุก multi-column ที่ < 768px ไม่มี horizontal overflow

## 🧩 โครงสร้าง 11 ส่วน

| # | Section |
|---|---------|
| 0 | Header (sticky) + Mega menu + Mobile drawer |
| 1 | Hero — split-screen slider (5 สไลด์) |
| 2 | Car Showcase — 33 รุ่น + แท็บหมวดหมู่ |
| 3 | Services — zig-zag 5 บริการ |
| 4 | Promotions — 4 แท็บ (รถยนต์ / ศูนย์บริการ / ตัวถังและสี / Toyota Sure) |
| 5 | Branches & Map — 6 สาขา + interactive panel + modal |
| 6 | Blog & Knowledge — magazine layout |
| 7 | สาระน่ารู้และเว็บไซต์ที่เกี่ยวข้อง |
| 8 | Phithan BKK Group — 17 ธุรกิจ (ecosystem) |
| 9 | Call to Action |
| 10 | Footer mega layout + bottom bar |

## 📁 ไฟล์

```
index.html        — โครงสร้างหน้าเว็บ
css/style.css     — design system + ทุก component
js/data.js        — ข้อมูลทั้งหมด (รถ / โปรโมชั่น / สาขา / บทความ ฯลฯ)
js/main.js        — การ render + GSAP animations
```

## 🚀 การใช้งาน

เป็น static site ล้วน — เปิด `index.html` ได้เลย หรือเสิร์ฟด้วยเซิร์ฟเวอร์ใดก็ได้:

```bash
python3 -m http.server 8000
# เปิด http://localhost:8000
```

ไลบรารีภายนอก (GSAP, Lucide, ฟอนต์) โหลดผ่าน CDN และมี graceful fallback
หากรูปจากแหล่งภายนอกโหลดไม่ได้จะ fallback ไปที่ `picsum.photos`
