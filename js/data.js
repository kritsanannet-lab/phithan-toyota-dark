/* =========================================================================
   PHITHAN TOYOTA — DATA LAYER
   All site content lives here so markup stays declarative and renderers
   can stay generic. Thai-first copy, mirrors WEBSITESTRUCTURE.
   ========================================================================= */

/* ---------- SECTION 2 — Vehicle Lineup ---------------------------------- */
const carData = [
  // GR Performance
  { id: 1,  name: 'GR 86',         category: 'gr',       price: 2999000, tag: 'Pure Performance',  hp: '228 hp', speed: '6.3s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/cb286fa0b5dd5f2fb079416900dc2f76d58c836b20aa36b37b4600afd0be7e52.webp' },
  { id: 2,  name: 'GR Yaris',      category: 'gr',       price: 3499000, tag: 'Rally Bred',        hp: '261 PS', speed: '5.5s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/3da23817d5c1a2f2a2377913108386f84fe54f428c9917da9e2a4c9c05bed3e7.webp' },
  { id: 3,  name: 'GR Corolla',    category: 'gr',       price: 4199000, tag: 'Track Ready',       hp: '300 PS', speed: '4.9s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/ce2ecfb0cd0104634dd884f1b15dfc0134c41d31524a97f051ccb79f0f45f3ad.webp' },
  { id: 4,  name: 'GR Supra',      category: 'gr',       price: 5349000, tag: 'Legendary Sports',  hp: '382 hp', speed: '4.1s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/63f5b9ba6a948067f3599dbb9018609b7f2eeba8317f463a4589bdffd71c99a0.webp' },

  // Sedan & Hatchback
  { id: 5,  name: 'Yaris ATIV',              category: 'personal', price: 569000,  tag: 'Eco Sedan',      hp: '94 hp',  speed: '11.5s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/249e2ff19dcc13208c98886ff2acb747d8d7f735aa817dda2a6ab879baacf754.webp' },
  { id: 6,  name: 'Yaris ATIV Nightshade',  category: 'personal', price: 709000,  tag: 'Black Edition',  hp: '94 hp',  speed: '11.5s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/68327168ae58294eca4b098d5b0b3758468d6341b18c387376dee04a40babd2e.webp' },
  { id: 7,  name: 'Yaris ATIV GR Sport',    category: 'personal', price: 779000,  tag: 'Sporty Eco',     hp: '94 hp',  speed: '11.2s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/798082ba540d606dc0685bc59430b7b73d557369507cecc644f36825891e6056.webp' },
  { id: 8,  name: 'Yaris',                   category: 'personal', price: 584000,  tag: 'Hatchback',      hp: '94 hp',  speed: '11.0s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/1dea65bfaf4b381d48c507e6a7f801cd8926878db5a8f59875a0333370f54345.webp' },
  { id: 9,  name: 'Corolla Altis',          category: 'personal', price: 909000,  tag: 'Reliable Sedan', hp: '138 hp', speed: '9.8s',  img: 'https://www.toyota.co.th/media/product/series/v/736/model/8279abe91d26902f216a1f27b39e9bbeeeb28082b0aecd4378052a3c8eead109.webp' },
  { id: 10, name: 'Corolla Altis GR Sport', category: 'personal', price: 1129000, tag: 'Sporty Sedan',   hp: '138 hp', speed: '9.4s',  img: 'https://www.toyota.co.th/media/product/series/v/736/model/b4c7caac57731d297126dfbcef278b633e3ec85d55ea4ba0fe31aff8dfae4689.webp' },
  { id: 11, name: 'CAMRY',                   category: 'personal', price: 1475000, tag: 'Executive Luxury', hp: '211 hp', speed: '8.0s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/8e5d47d3d7556ac8cc999b15cf1aa6f6a4d096ac083c018375d369f3321c6c7d.webp' },

  // SUV & EV
  { id: 12, name: 'Yaris Cross',            category: 'suv', price: 809000,  tag: 'Compact SUV',     hp: '111 hp', speed: '10.5s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/72144dce8eeb1fa489d53ec20da1b12ed7bdb5f24f7dbfb347bb2c1565fc7620.webp' },
  { id: 13, name: 'Yaris Cross Nightshade', category: 'suv', price: 929000,  tag: 'Dark Style SUV',  hp: '111 hp', speed: '10.5s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/5534dadb89f4ebe1527e82b560daad1dcf1d0225cc294d01c1dce48214c5937c.webp' },
  { id: 14, name: 'Corolla Cross',          category: 'suv', price: 989000,  tag: 'Family SUV',      hp: '122 hp', speed: '10.0s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/f163d8aab191a03f4f8f354bebe1ebaba24a2350d4567be7668fb5fd1413eb7f.webp' },
  { id: 15, name: 'Corolla Cross GR Sport', category: 'suv', price: 1254000, tag: 'Sporty Family',   hp: '122 hp', speed: '9.8s',  img: 'https://www.toyota.co.th/media/product/series/v/736/model/487bf4e827938f0ba50ec01fb6fbbb68d42a67f40e7250cd2e5782a345fff355.webp' },
  { id: 16, name: 'bZ4X',                    category: 'suv', price: 1529000, tag: 'Pure EV',         hp: '218 hp', speed: '6.9s',  img: 'https://www.toyota.co.th/media/product/series/v/736/model/acd439c5945c98bbc6064c6c106964f0b225096884ea6569e53433801a7eb2cc.webp' },
  { id: 17, name: 'Land Cruiser FJ',        category: 'suv', price: 1269000, tag: 'Classic Off-Road', hp: '244 hp', speed: '8.5s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/40550f915751fcae4ccd0fe28dbf9266adc5df01c21e89f85b5b5416962bf529.webp' },
  { id: 18, name: 'Fortuner Leader',        category: 'suv', price: 1239000, tag: 'Popular PPV',     hp: '150 hp', speed: '11.0s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/5039005bb27b654ca8fd5b450bcdf43fba13863549abe17aab40ba5ee8ff76ae.webp' },
  { id: 19, name: 'Fortuner Legender',      category: 'suv', price: 1643000, tag: 'Premium PPV',     hp: '204 hp', speed: '9.8s',  img: 'https://www.toyota.co.th/media/product/series/v/736/model/a85757b2638a3b3b1dcb0121739ee261b2e494ea9354331f570cc91cf1da30d0.webp' },
  { id: 20, name: 'Fortuner GR Sport',      category: 'suv', price: 1969000, tag: 'Ultimate PPV',    hp: '224 hp', speed: '9.2s',  img: 'https://www.toyota.co.th/media/product/series/v/736/model/c21e957e696f41637a2054e124f64c5a79cb13686c3ede0579662e6fb49d3e96.webp' },

  // MPV
  { id: 21, name: 'Veloz',        category: 'mpv', price: 795000,  tag: 'Family MPV',     hp: '106 hp', speed: '11.8s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/5b62fe2031bd04c164312db1ae7e80f2774ebabd871ddfeff5de6edc13a52452.webp' },
  { id: 22, name: 'Innova Zenix', category: 'mpv', price: 1379000, tag: 'Premium Hybrid', hp: '186 hp', speed: '9.2s',  img: 'https://www.toyota.co.th/media/product/series/v/736/model/a89638e914b43381f362c787406c1e5512b39bc2f71cafe8c59cd4b79c8d41f3.webp' },
  { id: 23, name: 'Alphard',      category: 'mpv', price: 4269000, tag: 'Flagship Luxury', hp: '250 hp', speed: '8.5s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/216e669c08dbce0ea887caaa0f6312b7671b58497788806ff5a748fe631d12f4.webp' },

  // Pickup
  { id: 24, name: 'Hilux Champ',                  category: 'pickup', price: 519000,  tag: 'Custom Commercial', hp: '150 hp', speed: '12.0s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/e9710bd6747b7afb348c8e87f852f1ad7c6b694a18775f7f5b6d7e59780b0b84.webp' },
  { id: 25, name: 'Hilux Revo Standard Cab',      category: 'pickup', price: 584000,  tag: 'Heavy Duty',        hp: '150 hp', speed: '11.5s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/9ea937f22dd5ac6229be3218c42912381834dcb103ca8b91419e1b34372f7c72.webp' },
  { id: 26, name: 'Hilux Revo Z Edition',         category: 'pickup', price: 669000,  tag: 'Street Sport',      hp: '150 hp', speed: '10.8s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/36e500588ab739bd71e3242c1c30b530baa59375e93c9991fa6008007be0ad19.webp' },
  { id: 27, name: 'Hilux Travo Standard Cab 4TREX', category: 'pickup', price: 767000, tag: 'Off-Road Utility', hp: '204 hp', speed: '10.0s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/738785d4a7559cac631c92ac0425bb1c1d828afabacde79d4c854bc41bb5fe26.webp' },
  { id: 28, name: 'Hilux Travo Prerunner & 4TREX', category: 'pickup', price: 789000, tag: 'All-Terrain Mix',  hp: '204 hp', speed: '10.2s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/4b193d86e051eb2e65a3fce9e9a31a8e8f8f1ab654212be3cbe3e0ac9b204040.webp' },
  { id: 29, name: 'Hilux Travo Overland',         category: 'pickup', price: 1102000, tag: 'Adventure Ready',   hp: '204 hp', speed: '10.5s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/b24e01a309073e27422692d6dac59aebdedfa717ccde04210a1572578f6d966e.webp' },
  { id: 30, name: 'Hilux Travo-e',                category: 'pickup', price: 1491000, tag: 'Electric Pickup',   hp: '180 hp', speed: '9.5s',  img: 'https://www.toyota.co.th/media/product/series/v/736/model/32fa54d4258d3a591b58d4f3aeda55e11938d230dcebc667f1e897d25307d171.webp' },

  // Van
  { id: 31, name: 'Hiace',     category: 'van', price: 1069000, tag: 'Commercial Van',  hp: '177 hp', speed: '12.5s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/cb5234e85c0ef01d8a8cb271ef0e7b998279667e9e33cfc80cbcdba5b5048496.webp' },
  { id: 32, name: 'Commuter',  category: 'van', price: 1339000, tag: 'Passenger Van',   hp: '177 hp', speed: '12.0s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/1150deefb2427011255524843d49f438814a4045e90da82147d8e1ecb095aa8a.webp' },
  { id: 33, name: 'Majesty',   category: 'van', price: 1994000, tag: 'Luxury Business', hp: '163 hp', speed: '11.0s', img: 'https://www.toyota.co.th/media/product/series/v/736/model/2cd8e6dd3795f3afb09e5e3027f18a821213b0b4e4bc66428ce9a90f4e536a5c.webp' },
];

const carCategories = [
  { key: 'all',      label: 'ทั้งหมด',  sub: 'ALL' },
  { key: 'personal', label: 'รถยนต์นั่ง', sub: 'PERSONAL' },
  { key: 'suv',      label: 'SUV & PPV', sub: 'SUV' },
  { key: 'mpv',      label: 'MPV',       sub: 'MPV' },
  { key: 'pickup',   label: 'รถกระบะ',   sub: 'PICKUP' },
  { key: 'van',      label: 'รถตู้',     sub: 'VAN' },
  { key: 'gr',       label: 'GR',        sub: 'PERFORMANCE' },
];

/* ---------- SECTION 3 — Services --------------------------------------- */
const serviceData = [
  { title: 'บริการซ่อมทั่วไป', desc: 'ดูแลรถคุณด้วยทีมช่างผู้ชำนาญการผ่านการรับรองมาตรฐาน พร้อมรับประกันคุณภาพงานซ่อม', img: 'https://aftersales.toyota.co.th/img/general/subnav-pic-business-1.jpg', icon: 'wrench' },
  { title: 'บริการซ่อมตัวถังและสี', desc: 'บริการซ่อมสีรถยนต์ครบวงจร ใช้เทคโนโลยีสมัยใหม่ มีช่างผู้เชี่ยวชาญเฉพาะทางคอยตรวจสอบ', img: 'http://aftersales.toyota.co.th/img/ourbusiness/body-paint-service/pic-3.jpg', icon: 'spray-can' },
  { title: 'รถยนต์ให้เช่าระหว่างซ่อม', desc: 'หมดกังวลเรื่องการเดินทางระหว่างนำรถเข้าศูนย์ ด้วยบริการรถเช่าคุณภาพดี ราคาประหยัด', img: 'https://phithan-toyota.com/th/images/index-reserve-new-car.png', icon: 'car-front' },
  { title: 'นัดหมายออนไลน์', desc: 'จองคิวเข้าศูนย์บริการล่วงหน้า ช่วยประหยัดเวลา และวางแผนการเดินทางได้สะดวก', img: 'https://phithan-toyota.com/th/images/index-appointment.png', icon: 'calendar-check' },
  { title: 'นัดหมายทดลองขับ', desc: 'ลงทะเบียนทดลองขับรถรุ่นที่คุณสนใจ เพื่อสัมผัสสมรรถนะจริงก่อนตัดสินใจ', img: 'https://phithan-toyota.com/th/images/index-test-drive.png', icon: 'car-front' },
];

/* ---------- SECTION 4 — Promotions ------------------------------------- */
const promotionData = {
  new_car: {
    label: 'รถยนต์',
    items: [
      { title: 'พิเศษ ลูกค้าโตโยต้าซื้อฟอร์จูนเนอร์ รับข้อเสนอพิเศษ', date: '1 พ.ค. 69 – 30 มิ.ย. 69', url: 'promotion/fortuner', image: 'https://www.phithan-toyota.com/th/uploads/promotion/fortuner.webp', description: 'ทางเลือกที่ 1 : ผ่อนเริ่มต้น 9,819 บาทต่อเดือน* ทางเลือกที่ 2 : ดอกเบี้ยพิเศษ 0.59% พร้อมประกันภัยชั้นหนึ่ง TOYOTA Care PHYD ทางเลือกที่ 3 : โตโยต้า ขับสบาย ผ่อนคลายค่าน้ำมัน ช่วยค่าน้ำมันมูลค่า 20,000 บาท' },
      { title: 'ซื้อ Yaris Cross, Corolla Cross หรือ bZ4X วันนี้ มั่นใจ..เป็นเจ้าของง่าย', date: '1 พ.ค. 69 – 30 มิ.ย. 69', url: 'promotion/trustedsuv', image: 'https://www.phithan-toyota.com/th/uploads/promotion/trustedsuv.webp', description: 'เป็นเจ้าของ Yaris Cross, Corolla Cross หรือ bZ4X วันนี้ รับข้อเสนอพิเศษจาก TOYOTA TRUSTED SUV' },
      { title: 'โปรที่ใช่ โดนใจทุกภาค YARIS ATIV', date: '1 พ.ค. 69 – 30 มิ.ย. 69', url: 'promotion/yarisativ', image: 'https://www.phithan-toyota.com/th/uploads/promotion/yarisativ.webp', description: 'รับข้อเสนอดอกเบี้ยพิเศษ 0%* พร้อมประกันภัยชั้น 1 Toyota Care PHYD** หรือ ผ่อนต่ำเริ่มต้น 4,797 บาท*** พร้อมฟรีประกันภัยชั้น1 Toyota Care PHYD' },
    ],
  },
  service: {
    label: 'ศูนย์บริการ',
    items: [
      { title: 'โปรสุดใช่ ไปได้สุดคุ้ม - ECO PACK เปลี่ยนน้ำมันเครื่องราคาพิเศษ', date: '1 เม.ย. 69 – 30 มิ.ย. 69', url: 'promotion/summergoecopack_2026', image: 'https://www.phithan-toyota.com/th/uploads/promotion/summergoecopack_2026.jpg', description: 'ECO PACK บริการคุ้มค่า ด้วยอะไหล่ทางเลือก ลดสุดใช่! เปลี่ยนน้ำมันเครื่อง สุดคุ้ม! รุ่น VIOS / YARIS ราคาพิเศษ 690 บาท • รุ่น HILUX VIGO ราคาพิเศษ 990 บาท • รุ่น REVO ราคาพิเศษ 1,150 บาท' },
      { title: 'โปรสุดใช่ ไปได้สุดคุ้ม - เคมีภัณฑ์สำหรับรถ 5 ปีขึ้นไป ลด 15%', date: '1 เม.ย. 69 – 30 มิ.ย. 69', url: 'promotion/summergochemical_2026', image: 'https://www.phithan-toyota.com/th/uploads/promotion/summergochemical_2026.jpg', description: 'คุ้มสุด! สำหรับรถอายุ 5 ปี ขึ้นไป ทุกรุ่น* รับส่วนลด 15% • น้ำมันคลัตช์ • น้ำมันเกียร์ • น้ำมันเบรก • น้ำมันเฟืองท้าย • น้ำมันพวงมาลัยพาวเวอร์' },
      { title: 'โปรสุดใช่ ไปได้สุดคุ้ม - บริการล้างแอร์ฯ, น้ำยาขจัดคราบเขม่า', date: '1 เม.ย. 69 – 30 มิ.ย. 69', url: 'promotion/summergoaircare_2026', image: 'https://www.phithan-toyota.com/th/uploads/promotion/summergoaircare_2026.jpg', description: 'บริการล้างแอร์แบบไม่ถอดตู้ ราคาพิเศษเพียง 1,600 บาท (จาก 1,800 บาท) และน้ำยาขจัดคราบเขม่า Engine Flush ราคาพิเศษเพียง 480 บาท (จาก 532 บาท)' },
    ],
  },
  bodypaint: {
    label: 'ศูนย์ซ่อมตัวถังและสี',
    items: [
      { title: 'บริการซ่อมสีด่วน Express BP รอรับได้ภายในวัน', date: '1 ม.ค. 69 – 31 ธ.ค. 69', url: 'promotion/express_body_and_paint_service', image: 'https://www.phithan-toyota.com/th/uploads/promotion/express-body-and-paint.jpg', description: 'บริการซ่อมสีด่วน ด้วยช่างที่อบรมมาโดยเฉพาะ ใช้เครื่องมือพิเศษและผลิตภัณฑ์แห้งเร็ว ลูกค้าสามารถรอรับรถกลับได้เลย' },
      { title: 'โปรโมชั่นซ่อมสีรอบคัน ราคาพิเศษ', date: '1 ม.ค. 69 – 30 มิ.ย. 69', url: 'promotion/full-body-paint-special', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80', description: 'คืนความเงางามให้รถของคุณด้วยบริการซ่อมสีรอบคัน พร้อมรับประกันคุณภาพงานสีตามมาตรฐานศูนย์บริการ' },
      { title: 'ซ่อมรอยขีดข่วนและรอยบุบเล็ก เริ่มต้น 999 บาท', date: '1 ก.ค. 69 – 31 ธ.ค. 69', url: 'promotion/scratch-repair-special', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80', description: 'บริการซ่อมรอยขีดข่วนและรอยบุบขนาดเล็ก ด้วยอุปกรณ์มาตรฐานและสีคุณภาพสูง งานเสร็จรวดเร็ว' },
    ],
  },
  toyota_sure: {
    label: 'โตโยต้า ชัวร์',
    items: [
      { title: 'Toyota Sure รถใช้แล้วคุณภาพดี รับประกันหลังการขาย', date: '1 ม.ค. 69 – 31 มี.ค. 69', url: 'promotion/toyota_sure_certified_used_car', image: 'https://www.phithan-toyota.com/th/uploads/promotion/toyota-sure-certified-used-car.jpg', description: 'เลือกรถยนต์ใช้แล้วคุณภาพมาตรฐาน Toyota Sure ผ่านการตรวจสอบกว่า 200 รายการ พร้อมรับประกันหลังการขายและบริการช่วยเหลือฉุกเฉิน' },
      { title: 'ดอกเบี้ยพิเศษ Toyota Sure เริ่มต้น 1.99%', date: '1 ก.พ. 69 – 30 เม.ย. 69', url: 'promotion/toyota_sure_special_interest', image: 'https://www.phithan-toyota.com/th/uploads/promotion/toyota-sure-special-interest.jpg', description: 'ออกรถ Toyota Sure วันนี้ รับข้อเสนอดอกเบี้ยพิเศษ พร้อมดาวน์ต่ำ และอนุมัติไว สำหรับรถยนต์ใช้แล้วคุณภาพมาตรฐาน' },
      { title: 'ฟรีประกันภัยชั้น 1 เมื่อออกรถ Toyota Sure', date: '1 มี.ค. 69 – 31 พ.ค. 69', url: 'promotion/toyota_sure_free_insurance', image: 'https://www.phithan-toyota.com/th/uploads/promotion/toyota-sure-free-insurance.jpg', description: 'รับฟรีประกันภัยชั้น 1 และบริการช่วยเหลือฉุกเฉิน 24 ชั่วโมง เมื่อจองและรับรถ Toyota Sure ตามเงื่อนไขที่กำหนด' },
    ],
  },
};

/* ---------- SECTION 5 — Branches --------------------------------------- */
const branches = [
  { id: 1, name: 'สาขาสุรวงศ์', address: '292 ถนนสุรวงศ์ แขวงสี่พระยา เขตบางรัก กรุงเทพฯ', phone: '022348760', bgImage: 'https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?q=80&w=800', modalImage: 'https://www.phithan-toyota.com/th/phithan_bkk_group_assets/img/map/sw.png', operatingDays: 'จันทร์ - เสาร์', hoursSales: '08:30 - 17:00', hoursService: '07:15 - 17:00', services: ['โชว์รูมขาย', 'ศูนย์บริการ'], lat: 13.727192, lng: 100.5214437 },
  { id: 2, name: 'สาขาเพชรบุรีตัดใหม่', address: '2479 ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพฯ', phone: '027166360', bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800', modalImage: 'https://www.phithan-toyota.com/th/phithan_bkk_group_assets/img/map/pb.png', operatingDays: 'เปิดทุกวัน', hoursSales: '08:30 - 17:00', hoursService: '07:15 - 17:00', services: ['โชว์รูมขาย', 'ศูนย์บริการ'], lat: 13.7425621, lng: 100.5956614 },
  { id: 3, name: 'สาขารามอินทรา', address: '365 ถนนรามอินทรา แขวงอนุสาวรีย์ เขตบางเขน กรุงเทพฯ', phone: '020216655', bgImage: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800', modalImage: 'https://www.phithan-toyota.com/th/phithan_bkk_group_assets/img/map/ri.png', operatingDays: 'เปิดทุกวัน', hoursSales: '08:30 - 17:00', hoursService: '08:30 - 17:00', services: ['โชว์รูมขาย', 'ศูนย์บริการ'], lat: 13.8594804, lng: 100.6248463 },
  { id: 4, name: 'สาขารามอินทรา 31', address: '80 ซอยรามอินทรา 31 แขวงอนุสาวรีย์ เขตบางเขน กรุงเทพฯ', phone: '025226859', bgImage: 'https://images.unsplash.com/photo-1583421660936-fc5ce0762df1?q=80&w=800', modalImage: 'https://www.phithan-toyota.com/th/phithan_bkk_group_assets/img/map/ri-31.png', operatingDays: 'จันทร์ - เสาร์', hoursSales: '08:30 - 17:00', hoursService: '08:30 - 17:00', services: ['ศูนย์ซ่อมตัวถังและสี'], lat: 13.8647489, lng: 100.6253051 },
  { id: 5, name: 'สาขาทวีวัฒนา', address: '67 ถนนบรมราชชนนี แขวงศาลาธรรมสพน์ เขตทวีวัฒนา กรุงเทพฯ', phone: '028882999', bgImage: 'https://images.unsplash.com/photo-1601031368146-49b73fcaebb1?q=80&w=800', modalImage: 'https://www.phithan-toyota.com/th/phithan_bkk_group_assets/img/map/tw.png', operatingDays: 'เปิดทุกวัน', hoursSales: '08:30 - 17:00', hoursService: '08:30 - 17:00', services: ['โชว์รูมขาย', 'ศูนย์บริการ', 'ศูนย์ซ่อมตัวถังและสี'], lat: 13.7816707, lng: 100.3638796 },
  { id: 6, name: 'สาขาสุขสวัสดิ์', address: '438 หมู่ 1 ต.ปากคลองบางปลากด อ.พระสมุทรเจดีย์ สมุทรปราการ', phone: '020212222', bgImage: 'https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?q=80&w=800', modalImage: 'https://www.phithan-toyota.com/th/phithan_bkk_group_assets/img/map/ss.png', operatingDays: 'เปิดทุกวัน', hoursSales: '08:30 - 17:00', hoursService: '08:30 - 17:00', services: ['โชว์รูมขาย', 'ศูนย์บริการ', 'ศูนย์ซ่อมตัวถังและสี'], lat: 13.6131644, lng: 100.5473854 },
];

/* ---------- SECTION 6 — Blog & Knowledge ------------------------------- */
const blogCategories = ['ข่าวสาร Toyota', 'เทคนิคดูแลรถ', 'ไลฟ์สไตล์', 'รีวิวรถยนต์', 'CSR'];
const blogPosts = [
  { cat: 'ข่าวสาร Toyota', title: 'Toyota เปิดตัวเทคโนโลยีขับขี่อัตโนมัติรุ่นใหม่ในไทย', date: '24 มิ.ย. 2026', img: 'https://picsum.photos/seed/toyota-news-1/800/600', read: '4 นาที' },
  { cat: 'รีวิวรถยนต์',    title: 'รีวิว bZ4X รถยนต์ไฟฟ้าพลังงานสะอาดเต็มรูปแบบ', date: '20 มิ.ย. 2026', img: 'https://picsum.photos/seed/toyota-bz4x/800/600', read: '6 นาที' },
  { cat: 'เทคนิคดูแลรถ',   title: '5 เทคนิคดูแลแบตเตอรี่รถ EV ให้ใช้งานได้ยาวนาน', date: '18 มิ.ย. 2026', img: 'https://picsum.photos/seed/toyota-ev-care/800/600', read: '3 นาที' },
  { cat: 'ไลฟ์สไตล์',      title: 'ออกเดินทางสุดสัปดาห์กับ Corolla Cross Hybrid', date: '15 มิ.ย. 2026', img: 'https://picsum.photos/seed/toyota-lifestyle/800/600', read: '5 นาที' },
  { cat: 'CSR',           title: 'พิธานโตโยต้า ร่วมปลูกป่าชายเลนเพื่อสิ่งแวดล้อมยั่งยืน', date: '12 มิ.ย. 2026', img: 'https://picsum.photos/seed/toyota-csr/800/600', read: '4 นาที' },
  { cat: 'เทคนิคดูแลรถ',   title: 'เช็คระยะตามกำหนด ยืดอายุเครื่องยนต์อย่างมืออาชีพ', date: '8 มิ.ย. 2026',  img: 'https://picsum.photos/seed/toyota-maintenance/800/600', read: '3 นาที' },
];

/* ---------- SECTION 7 — Knowledge & Related ---------------------------- */
const knowledgeCards = [
  { title: 'ธุรกิจในเครือบริษัท', desc: 'เครือข่ายธุรกิจคุณภาพภายใต้การบริหารของบริษัท พิธานพาณิชย์ จำกัด และบริษัทในเครือ', img: 'https://picsum.photos/seed/biz-network/900/700', icon: 'network' },
  { title: 'สวัสดีตอนเช้า', desc: 'รวมภาพสวย ๆ พร้อมคำอวยพร ข้อความให้กำลังใจ และคำคมดี ๆ เพื่อส่งต่อความสุขในทุกเช้าวันใหม่', img: 'https://picsum.photos/seed/good-morning/900/700', icon: 'sunrise' },
  { title: 'กิจกรรมเพื่อสังคม', desc: 'รวบรวมกิจกรรมช่วยเหลือสังคม แบ่งปันสิ่งดี ๆ และร่วมสร้างประโยชน์ให้กับชุมชนอย่างยั่งยืน', img: 'https://picsum.photos/seed/csr-activity/900/700', icon: 'heart-handshake' },
  { title: 'ความรู้ทางด้านเทคนิครถยนต์', desc: 'แหล่งรวมเทคนิคการดูแลรถยนต์ เคล็ดลับการใช้งาน และความรู้เพื่อการขับขี่อย่างปลอดภัย', img: 'https://picsum.photos/seed/car-tech/900/700', icon: 'cog' },
  { title: 'สาระน่ารู้เพื่อทุกคน', desc: 'บทความความรู้รอบด้าน ทั้งสุขภาพ ประกันภัย ธรรมะ และสาระดี ๆ สำหรับการใช้ชีวิตประจำวัน', img: 'https://picsum.photos/seed/general-knowledge/900/700', icon: 'book-open' },
];

/* ---------- SECTION 8 — Phithan BKK Group ------------------------------ */
const groupData = [
  { group: 'ธุรกิจยานยนต์', icon: 'car', color: 'red', items: ['ผู้แทนจำหน่ายรถยนต์โตโยต้า และ Flash Home', 'ศูนย์บริการมาตรฐานและศูนย์ซ่อมตัวถังและสี', 'โตโยต้า พิธานพาณิชย์ ยูสคาร์', 'ศูนย์รวมอะไหล่แท้และอุปกรณ์ตกแต่งรถยนต์โตโยต้า'] },
  { group: 'ธุรกิจสินค้าและบริการ', icon: 'shopping-bag', color: 'blue', items: ['บริการรถแท็กซี่ให้เช่า', 'บริการให้เช่ารถยนต์', 'สินค้าภายใต้แบรนด์ TRUMQ', 'ธุรกิจประกันภัย', 'Shops2fun แพลตฟอร์มสินค้าออนไลน์', 'Trumq Handmade'] },
  { group: 'ธุรกิจอาหารและเครื่องดื่ม', icon: 'utensils', color: 'red', items: ['ครัวรักเมืองไทย', 'Trumq Cafe รักเมืองไทย'] },
  { group: 'ธุรกิจกีฬาและสุขภาพ', icon: 'dumbbell', color: 'blue', items: ['ทรัมแบดมินตัน', 'น้ำดื่มทรัม', 'ม้านั่งออกกำลังกาย TRUMQ'] },
  { group: 'ธุรกิจด้านสิ่งแวดล้อม', icon: 'leaf', color: 'red', items: ['เครื่องบีบอัดขวดพลาสติก', 'TQ ไม้พันธุ์และต้นไม้ฟอกอากาศ'] },
];

/* ---------- SECTION 1 — Hero slides ------------------------------------ */
const heroSlides = [
  { kicker: 'OFFICIAL TOYOTA DEALER', title: 'กว่า 60 ปี<br>แห่งความไว้วางใจ', sub: 'ตัวแทนจำหน่าย Toyota อย่างเป็นทางการ ขับเคลื่อนอนาคตการเดินทางไปกับเรา', img: 'https://www.toyota.co.th/media/product/series/v/736/model/acd439c5945c98bbc6064c6c106964f0b225096884ea6569e53433801a7eb2cc.webp' },
  { kicker: 'NEW CAMPAIGN', title: 'bZ4X<br>Pure Electric', sub: 'สัมผัสการขับขี่ไฟฟ้าเต็มรูปแบบ ไร้มลพิษ เงียบสงบ และทรงพลัง', img: 'https://www.toyota.co.th/media/product/series/v/736/model/acd439c5945c98bbc6064c6c106964f0b225096884ea6569e53433801a7eb2cc.webp' },
  { kicker: 'GR PERFORMANCE', title: 'GR Supra<br>Legendary Sports', sub: 'สมรรถนะระดับตำนาน 0-100 ใน 4.1 วินาที สำหรับผู้ที่ไม่ยอมประนีประนอม', img: 'https://www.toyota.co.th/media/product/series/v/736/model/63f5b9ba6a948067f3599dbb9018609b7f2eeba8317f463a4589bdffd71c99a0.webp' },
  { kicker: 'PHITHAN BKK GROUP', title: 'เครือข่าย<br>17 ธุรกิจคุณภาพ', sub: 'ระบบนิเวศธุรกิจครบวงจร ดูแลคุณในทุกมิติของการใช้ชีวิต', img: 'https://www.toyota.co.th/media/product/series/v/736/model/216e669c08dbce0ea887caaa0f6312b7671b58497788806ff5a748fe631d12f4.webp' },
];

window.PHITHAN = { carData, carCategories, serviceData, promotionData, branches, blogCategories, blogPosts, knowledgeCards, groupData, heroSlides };
