/* =========================================================================
   PHITHAN TOYOTA — typed content for the React + Motion build
   ========================================================================= */

export interface Car {
  id: number; name: string; category: string; price: number;
  tag: string; hp: string; speed: string; img: string;
}

export const featuredCars: Car[] = [
  { id: 4,  name: 'GR Supra',      category: 'gr',  price: 5349000, tag: 'Legendary Sports', hp: '382 hp', speed: '4.1s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/63f5b9ba6a948067f3599dbb9018609b7f2eeba8317f463a4589bdffd71c99a0.webp' },
  { id: 16, name: 'bZ4X',          category: 'suv', price: 1529000, tag: 'Pure EV',          hp: '218 hp', speed: '6.9s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/acd439c5945c98bbc6064c6c106964f0b225096884ea6569e53433801a7eb2cc.webp' },
  { id: 23, name: 'Alphard',       category: 'mpv', price: 4269000, tag: 'Flagship Luxury',  hp: '250 hp', speed: '8.5s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/216e669c08dbce0ea887caaa0f6312b7671b58497788806ff5a748fe631d12f4.webp' },
  { id: 20, name: 'Fortuner GR Sport', category: 'suv', price: 1969000, tag: 'Ultimate PPV', hp: '224 hp', speed: '9.2s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/c21e957e696f41637a2054e124f64c5a79cb13686c3ede0579662e6fb49d3e96.webp' },
];

export interface Service { title: string; desc: string; img: string; icon: string; }
export const services: Service[] = [
  { title: 'บริการซ่อมทั่วไป', desc: 'ดูแลรถคุณด้วยทีมช่างผู้ชำนาญการผ่านการรับรองมาตรฐาน พร้อมรับประกันคุณภาพงานซ่อม', img: 'https://aftersales.toyota.co.th/img/general/subnav-pic-business-1.jpg', icon: 'Wrench' },
  { title: 'บริการซ่อมตัวถังและสี', desc: 'บริการซ่อมสีรถยนต์ครบวงจร ใช้เทคโนโลยีสมัยใหม่ มีช่างผู้เชี่ยวชาญเฉพาะทางคอยตรวจสอบ', img: 'http://aftersales.toyota.co.th/img/ourbusiness/body-paint-service/pic-3.jpg', icon: 'SprayCan' },
  { title: 'รถยนต์ให้เช่าระหว่างซ่อม', desc: 'หมดกังวลเรื่องการเดินทางระหว่างนำรถเข้าศูนย์ ด้วยบริการรถเช่าคุณภาพดี ราคาประหยัด', img: 'https://phithan-toyota.com/th/images/index-reserve-new-car.png', icon: 'CarFront' },
  { title: 'นัดหมายออนไลน์', desc: 'จองคิวเข้าศูนย์บริการล่วงหน้า ช่วยประหยัดเวลา และวางแผนการเดินทางได้สะดวก', img: 'https://phithan-toyota.com/th/images/index-appointment.png', icon: 'CalendarCheck' },
];

export interface Stat { label: string; value: number; suffix: string; progress: number; }
export const stats: Stat[] = [
  { label: 'ปีแห่งความไว้วางใจ', value: 60, suffix: '+', progress: 95 },
  { label: 'สาขาทั่วกรุงเทพฯ', value: 6, suffix: '', progress: 70 },
  { label: 'ธุรกิจในเครือ', value: 17, suffix: '', progress: 85 },
  { label: 'รุ่นรถให้เลือก', value: 33, suffix: '', progress: 80 },
];

export interface Step { year: string; title: string; desc: string; icon: string; }
export const timeline: Step[] = [
  { year: '2502', title: 'ก่อตั้งบริษัท', desc: 'บริษัท พิธานพาณิชย์ จำกัด เริ่มดำเนินธุรกิจยานยนต์ในกรุงเทพฯ', icon: 'Flag' },
  { year: '2506', title: 'ตัวแทนจำหน่ายอย่างเป็นทางการ', desc: 'ได้รับการแต่งตั้งเป็นผู้แทนจำหน่าย Toyota อย่างเป็นทางการ', icon: 'BadgeCheck' },
  { year: '2540', title: 'ขยายศูนย์บริการ', desc: 'เปิดศูนย์บริการมาตรฐานและศูนย์ซ่อมตัวถังและสีครบวงจร', icon: 'Wrench' },
  { year: '2569', title: 'ก้าวสู่ยุคพลังงานสะอาด', desc: 'พร้อมให้บริการรถยนต์ไฟฟ้าและไฮบริดเต็มรูปแบบ', icon: 'Zap' },
];

export const galleryImages: string[] = [
  'https://www.toyota.co.th/media/product/series/v/736/model/63f5b9ba6a948067f3599dbb9018609b7f2eeba8317f463a4589bdffd71c99a0.webp',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
  'https://www.toyota.co.th/media/product/series/v/736/model/acd439c5945c98bbc6064c6c106964f0b225096884ea6569e53433801a7eb2cc.webp',
  'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80',
  'https://www.toyota.co.th/media/product/series/v/736/model/216e669c08dbce0ea887caaa0f6312b7671b58497788806ff5a748fe631d12f4.webp',
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80',
];

export interface Testimonial { name: string; role: string; quote: string; }
export const testimonials: Testimonial[] = [
  { name: 'คุณสมชาย ว.', role: 'เจ้าของ Fortuner', quote: 'บริการประทับใจมาก ทีมช่างดูแลละเอียด นัดหมายออนไลน์สะดวก ไม่ต้องรอนาน' },
  { name: 'คุณนภา ส.', role: 'เจ้าของ Corolla Cross', quote: 'ออกรถง่าย ได้ข้อเสนอดี พนักงานให้คำแนะนำตรงไปตรงมา ดูแลหลังการขายดีเยี่ยม' },
  { name: 'คุณธนกร พ.', role: 'เจ้าของ bZ4X', quote: 'ปรึกษาเรื่อง EV ได้ครบทุกประเด็น ตั้งแต่ชาร์จจนถึงการดูแลแบตเตอรี่ มั่นใจมาก' },
];

export interface Post { cat: string; title: string; date: string; read: string; img: string; }
export const posts: Post[] = [
  { cat: 'ข่าวสาร Toyota', title: 'Toyota เปิดตัวเทคโนโลยีขับขี่อัตโนมัติรุ่นใหม่ในไทย', date: '24 มิ.ย. 2026', read: '4 นาที', img: 'https://picsum.photos/seed/toyota-news-1/800/600' },
  { cat: 'รีวิวรถยนต์', title: 'รีวิว bZ4X รถยนต์ไฟฟ้าพลังงานสะอาดเต็มรูปแบบ', date: '20 มิ.ย. 2026', read: '6 นาที', img: 'https://picsum.photos/seed/toyota-bz4x/800/600' },
  { cat: 'เทคนิคดูแลรถ', title: '5 เทคนิคดูแลแบตเตอรี่รถ EV ให้ใช้งานได้ยาวนาน', date: '18 มิ.ย. 2026', read: '3 นาที', img: 'https://picsum.photos/seed/toyota-ev-care/800/600' },
];

export const partners: string[] = [
  'TOYOTA', 'Flash Home', 'Toyota Sure', 'TRUMQ', 'Shops2fun',
  'ครัวรักเมืองไทย', 'Trumq Cafe', 'ทรัมแบดมินตัน', 'TQ Green',
];

export const navLinks = [
  { label: 'หน้าแรก', href: '#hero' },
  { label: 'เกี่ยวกับเรา', href: '#about' },
  { label: 'บริการ', href: '#services' },
  { label: 'รถยนต์', href: '#products' },
  { label: 'บทความ', href: '#blog' },
  { label: 'ติดต่อเรา', href: '#contact' },
];

export const baht = (n: number) => n.toLocaleString('th-TH');
