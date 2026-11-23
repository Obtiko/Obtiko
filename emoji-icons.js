/* ============================================================
   Obtiko — emoji-icons.js
   استبدال كل الإيموجيات في واجهة الموقع بأيقونات SVG موحّدة الأسلوب
   (خط رفيع 1.9، أطراف دائرية، لون يرث currentColor من العنصر المحيط).

   كيف يعمل:
   - مصدر واحد للأيقونات (ICON) وجدول واحد للمطابقة (MAP: إيموجي ← أيقونة).
   - يمرّ على كل النصوص في الصفحة، ثم يراقب أي نص يُضاف لاحقًا عبر JS
     (رسائل التنبيه، بطاقات المنتدى، الإشعارات...) فيُحوَّل فورًا.
   - لا يلمس: نصوص المستخدمين في المنتدى، حقول الإدخال، الأكواد، العناوين
     داخل <title>، ولا أي أيقونات SVG موجودة أصلًا.
   - بطاقات المواد/الوحدات/المواضيع (.mini-card, *-unit-card, .topic-card h2)
     تتولاها icons.js (أيقونات خاصة بكل وحدة)؛ هنا تُؤجَّل ثوانٍ ثم تُنظَّف
     احتياطيًا إن لم تُعالَج.
   - أي إيموجي غير موجود في الجدول يتحوّل إلى نقطة صغيرة بدل أن يبقى إيموجي.
   لا مكتبات خارجية، ولا تغيير على التصميم أو الوظائف.
   ============================================================ */
(function () {
'use strict';
if (window.BacEmojiIcons) return;

/* ---------- 1) الأيقونات (viewBox 24×24، stroke) ---------- */
var ICON = {
  book: 'M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z',
  brain: 'M9.5 3A3.5 3.5 0 0 0 6 6.5c-1.7.4-3 1.9-3 3.7 0 1 .4 1.9 1 2.5-.6.7-1 1.6-1 2.6 0 2 1.6 3.5 3.5 3.7A3 3 0 0 0 12 20V5.5A2.5 2.5 0 0 0 9.5 3zM14.5 3A3.5 3.5 0 0 1 18 6.5c1.7.4 3 1.9 3 3.7 0 1-.4 1.9-1 2.5.6.7 1 1.6 1 2.6 0 2-1.6 3.5-3.5 3.7A3 3 0 0 1 12 20V5.5A2.5 2.5 0 0 1 14.5 3z',
  chat: 'M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  home: 'M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10',
  bulb: 'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z',
  calc: 'M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18.5h.01M12 18.5h.01M16 18.5h.01',
  headset: 'M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1v-7h3zM3 19a2 2 0 0 0 2 2h1v-7H3z',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4',
  upload: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
  arrowdown: 'M12 5v14M5 12l7 7 7-7',
  arrowleft: 'M19 12H5M12 19l-7-7 7-7',
  arrowright: 'M5 12h14M12 5l7 7-7 7',
  checkcircle: 'M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4L12 14.010l-3-3',
  xcircle: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM15 9l-6 6M9 9l6 6',
  x: 'M18 6L6 18M6 6l12 12',
  check: 'M20 6L9 17l-5-5',
  bookmark: 'M6 3h12v18l-6-4.5L6 21z',
  file: 'M6 3h9l4 4v14H6zM14 3v5h5',
  filetext: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7',
  pencil: 'M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19zM14 7l3 3',
  penline: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z',
  folder: 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  timer: 'M10 2h4M12 14l3-3M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
  hourglass: 'M5 22h14M5 2h14M17 22v-4.2a2 2 0 0 0-.6-1.4L12 12l-4.4 4.4A2 2 0 0 0 7 17.8V22M7 2v4.2a2 2 0 0 0 .6 1.4L12 12l4.4-4.4A2 2 0 0 0 17 6.2V2',
  bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10.3 21a2 2 0 0 0 3.4 0',
  trash: 'M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6',
  flag: 'M4 22V4M4 4h13l-2 4 2 4H4',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
  clip: 'M21.4 11.1l-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5',
  lock: 'M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM8 11V7a4 4 0 0 1 8 0v4',
  ban: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM4.9 4.9l14.2 14.2',
  star: 'm12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
  sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z',
  flask: 'M10 2v7.5a2 2 0 0 1-.2.9L4.7 20.5a1 1 0 0 0 .9 1.5h12.8a1 1 0 0 0 .9-1.5l-5.1-10.1a2 2 0 0 1-.2-.9V2M8.5 2h7M7 16h10',
  dna: 'M7 3c0 5.5 10 5.5 10 11.5S7 20 7 21M17 3c0 5.5-10 5.5-10 11.5S17 20 17 21M9 7h6M9 12h6M9 17h6',
  globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20',
  scale: 'M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z',
  zap: 'M13 2L4.5 13.5H11L10 22l9-12h-6.5z',
  moon: 'M20 14.5A8.5 8.5 0 1 1 9.5 4 6.8 6.8 0 0 0 20 14.5z',
  moonstar: 'M20 14.5A8.5 8.5 0 1 1 9.5 4 6.8 6.8 0 0 0 20 14.5zM17 4.5l.8 1.8 1.9.3-1.4 1.3.4 1.9-1.7-1-1.7 1 .4-1.9-1.4-1.3 1.9-.3z',
  sun: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  trophy: 'M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3',
  target: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  rocket: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2zM9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.5 4-2c1.1-1.6 0-5 0-5',
  flame: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.4 1-3 0 1.5 1.1 2.5 2.5 2.5z',
  dumbbell: 'M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11',
  leaf: 'M5 19C5 10 10 5 20 4c0 10-5 15-14 15M5 19c3-5 6-8 10-10',
  route: 'M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 19h7.5a3.5 3.5 0 0 0 0-7h-7a3.5 3.5 0 0 1 0-7H16',
  compass: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM16.2 7.8l-2 6.3-6.4 2.1 2-6.3z',
  gradcap: 'M22 10L12 5 2 10l10 5zM6 12v5c0 1.5 2.700 3 6 3s6-1.5 6-3v-5M22 10v6',
  puzzle: 'M9 4h3v2.5a1.8 1.8 0 1 0 3 0V4h5v5h-2.5a1.8 1.8 0 1 0 0 3H20v7H4v-6h2.5a1.8 1.8 0 1 0 0-3H4V4z',
  refresh: 'M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5',
  rotate: 'M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5',
  trendup: 'M22 7l-8.5 8.5-5-5L2 17M16 7h6v6',
  trenddown: 'M22 17l-8.5-8.5-5 5L2 7M16 17h6v-6',
  gem: 'M6 3h12l4 6-10 13L2 9zM11 3L8 9l4 13 4-13-3-6M2 9h20',
  medal: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.2 14l-1.7 8 5.5-3 5.5 3-1.7-8',
  help: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01',
  smile: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01',
  calendar: 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM16 2v4M8 2v4M3 10h18',
  chart: 'M3 3v16a2 2 0 0 0 2 2h16M18 17V9M13 17V5M8 17v-3',
  coins: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM9 15l6-6M9.5 9.5h.01M14.5 14.5h.01',
  volumex: 'M11 5L6 9H2v6h4l5 4zM23 9l-6 6M17 9l6 6',
  building: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 10h.01M15 10h.01',
  wrench: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.100 2.100 0 0 1-3-3l6.900-6.900a6 6 0 0 1 7.900-7.900z',
  inbox: 'M22 12h-6l-2 3h-4l-2-3H2M5.5 5.1L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.700 4H7.200a2 2 0 0 0-1.700 1.100z',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.900M16 3.100a4 4 0 0 1 0 7.800',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  presentation: 'M2 3h20M4 3v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3M12 16v5M8 21h8',
  triangle: 'M4 4v16h16zM8 14v2h2',
  scroll: 'M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4M19 17V5a2 2 0 0 0-2-2H4',
  landmark: 'M12 2l9 5v2H3V7zM5 11v8M9 11v8M15 11v8M19 11v8M3 21h18',
  wind: 'M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2',
  mountain: 'M8 3l4 8 5-5 5 15H2z',
  plug: 'M12 22v-5M9 8V2M15 8V2M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z',
  divide: 'M12 6h.01M12 18h.01M5 12h14',
  hash: 'M4 9h16M4 15h16M10 3L8 21M16 3l-2 18',
  link: 'M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7',
  archive: 'M21 8v13H3V8M1 3h22v5H1zM10 12h4',
  image: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM21 15l-5-5L5 21',
  play: 'M6 4l14 8-14 8z',
  pause: 'M7 4h3v16H7zM14 4h3v16h-3z',
  save: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2zM17 21v-8H7v8M7 3v5h8',
  languages: 'M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6',
  heart: 'M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z',
  eye: 'M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  alert: 'M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01',
  phone: 'M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM12 18h.01',
  hardhat: '<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 6 6v3"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><rect x="2" y="15" width="20" height="4" rx="1"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>',
  atom: '<circle cx="12" cy="12" r="1.6" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
  planet: '<circle cx="12" cy="12" r="4.5"/><ellipse cx="12" cy="12" rx="10" ry="3.2" transform="rotate(-20 12 12)"/>',
  cog: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6.5"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"/>',
  dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h.01M15 9h.01M12 12h.01M9 15h.01M15 15h.01"/>',
  dot: '<circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>'
};

/* ---------- 2) جدول المطابقة: إيموجي ← اسم الأيقونة ---------- */
var MAP_SRC = [
  ['book', '📚 📖 📕 📘 📗 📙 📔 📒 📓 📑'],
  ['brain', '🧠'], ['chat', '💬 🗨 🗣'], ['home', '🏠'],
  ['bulb', '💡'], ['calc', '🧮 🔢'], ['headset', '🎧'],
  ['shield', '🛡'], ['upload', '📤'], ['download', '📥'],
  ['arrowdown', '⬇ 👇'], ['arrowleft', '⬅ ◀ 👈'], ['arrowright', '➡ ▶️ 👉'],
  ['checkcircle', '✅ ☑ ✔ ✔️'], ['xcircle', '❌ ✖ ❎'], ['x', '✕'],
  ['bookmark', '🔖'], ['file', '📄 📃'], ['filetext', '📝 📋 🧾'],
  ['pencil', '✏ 🖊 🖋 ✒'], ['penline', '✍'], ['folder', '🗂 📁 📂'],
  ['clock', '⏰ 🕐 ⏲ 🕒'], ['timer', '⏱'], ['hourglass', '⏳ ⌛'],
  ['bell', '🔔 🔕'], ['trash', '🗑'], ['flag', '🚩 🏁'],
  ['search', '🔍 🔎'], ['clip', '📎'], ['lock', '🔒 🔐 🔓'],
  ['ban', '🚫 ⛔'], ['star', '⭐ 🌟 ★ 🥇'], ['sparkle', '✨ 🎉 🎊 🌈 🙌 💫'],
  ['flask', '🧪 ⚗ 🧫'], ['dna', '🧬'], ['globe', '🌍 🌎 🌏 🌐 🗺'],
  ['scale', '⚖'], ['zap', '⚡'], ['moon', '🌙 🌛'], ['moonstar', '☪'],
  ['sun', '☀ 🌞'], ['trophy', '🏆 🏅'], ['target', '🎯'],
  ['rocket', '🚀'], ['flame', '🔥 ❤‍🔥'], ['dumbbell', '💪'],
  ['leaf', '🌱 🌿 🌾 🌻 🌳 🍃 🌲'], ['route', '🛤 🚶‍♂ 🚶 👣'], ['compass', '🧭'],
  ['gradcap', '🎓 🧑‍🎓 👨‍🎓 👩‍🎓'], ['puzzle', '🧩'], ['refresh', '🔄 🔁'],
  ['rotate', '↺ ↻'], ['trendup', '📈'], ['trenddown', '📉'],
  ['gem', '💎'], ['medal', '🦁'], ['help', '🤔 🧐 ❓ ❔ 🙋‍♂ 🙋'],
  ['smile', '😅 😊 🙂 😄 😁'], ['calendar', '📅 🗓'], ['chart', '📊'],
  ['coins', '💰 💵'], ['volumex', '🤫 📵'], ['building', '🏫 🏢'],
  ['wrench', '🛠 🔧'], ['inbox', '📭 📬 📮'], ['users', '👥 🤝'],
  ['user', '👤'], ['presentation', '👨‍🏫 👩‍🏫'], ['triangle', '📐 📏'],
  ['scroll', '📜'], ['landmark', '🏛'], ['wind', '🫁'],
  ['mountain', '🌋'], ['plug', '🔌'], ['divide', '➗'],
  ['hash', '#️⃣'], ['link', '🔗'], ['archive', '📦'],
  ['image', '🖼'], ['play', '▶ ▶ 🎬'], ['pause', '⏸'],
  ['save', '💾'], ['languages', '🇬🇧 🇺🇸 🇫🇷'], ['heart', '❤ 🤲 💚 💙'],
  ['eye', '👁'], ['alert', '⚠'], ['phone', '📱'],
  ['hardhat', '🦺 ⛑ 👷'], ['briefcase', '💼'], ['atom', '⚛ ☢ ☣'],
  ['planet', '🔭 🪐 🛰'], ['cog', '⚙']
];

var MAP = {};
MAP_SRC.forEach(function (row) {
  row[1].split(' ').forEach(function (k) {
    k = k.replace(/\uFE0F/g, '');
    if (k) MAP[k] = row[0];
  });
});

/* ---------- 3) التعابير النمطية ---------- */
function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
var KEYS = Object.keys(MAP).sort(function (a, b) { return b.length - a.length; });
var FALLBACK = '[\\u{1F300}-\\u{1FAFF}\\u{1F000}-\\u{1F2FF}\\u{2600}-\\u{26FF}\\u{2702}\\u{2705}\\u{2708}-\\u{270D}\\u{270F}\\u{2714}\\u{2716}\\u{2728}\\u{2764}\\u{274C}\\u{274E}\\u{2753}-\\u{2757}\\u{2795}-\\u{2797}\\u{27A1}\\u{2B05}-\\u{2B07}\\u{2B50}\\u{23E9}-\\u{23FA}\\u{231A}\\u{231B}\\u{25B6}\\u{25C0}\\u{1F1E6}-\\u{1F1FF}](?:\\u200D[\\u{1F300}-\\u{1FAFF}\\u{2600}-\\u{26FF}\\u2640\\u2642])*';
var RX = new RegExp('(' + KEYS.map(esc).join('|') + ')|(' + FALLBACK + ')', 'gu');
var QUICK = /[\u2190-\u21FF\u231A-\u23FF\u25A0-\u25FF\u2600-\u27BF\u2B00-\u2BFF\u{1F000}-\u{1FFFF}]/u;

/* ---------- 4) أنماط العرض (تُحقن مرة واحدة) ---------- */
var CSS =
'.bac-eico{display:inline-block;width:1.08em;height:1.08em;vertical-align:-.17em;flex-shrink:0;margin-inline:.06em;' +
'fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}' +
'.hero h1>.bac-eico{width:.95em;height:.95em;margin-inline-end:-12px;color:var(--accent)}' +
'.hero p .bac-eico{color:var(--accent)}' +
'.tip-bullet .bac-eico{width:1.1em;height:1.1em;color:var(--accent)}' +
'.tips-list li:nth-child(3n+2) .tip-bullet .bac-eico{color:var(--blue,#38bdf8)}' +
'.tips-list li:nth-child(3n) .tip-bullet .bac-eico{color:var(--orange,#ffa94d)}' +
'.resource-icon .bac-eico,.teacher-avatar .bac-eico,.sl-item-icon .bac-eico,.auth-icon .bac-eico,.admin-login-icon .bac-eico,.attachment-icon .bac-eico{width:1em;height:1em;margin:0;color:var(--accent)}' +
'.teacher-avatar .bac-eico{width:.8em;height:.8em;fill:currentColor}' +
'.teacher-group-title .bac-eico{color:var(--orange,#ffa94d);width:1.2em;height:1.2em}' +
'.banned-icon .bac-eico{color:var(--danger);width:1em;height:1em;margin:0}' +
'.bac-branch-modal-icon .bac-eico,.sl-empty .bac-eico{color:var(--accent)}' +
'.bac-branch-modal-icon .bac-eico{width:1em;height:1em;margin:0}' +
'.bac-countdown-title .bac-eico{color:var(--orange,#ffa94d)}' +
'.bac-timer-finish-icon .bac-eico{width:1em;height:1em;margin:0;color:var(--accent)}' +
'.theme-switch-icon .bac-eico{width:14px;height:14px;margin:0;vertical-align:middle}' +
'.theme-switch .sun .bac-eico{color:#ffb02e}.theme-switch .moon .bac-eico{color:#9fb8ff}' +
'.book-cover-icon .bac-eico{width:1em;height:1em;margin:0}' +
'.chip-file .bac-eico{width:1em;height:1em;margin:0}' +
'.bac-eico[data-e="play"],.bac-eico[data-e="dot"]{fill:currentColor}' +
'@media (max-width:480px){.hero h1>.bac-eico{margin-inline-end:-6px}}';

function injectCss() {
  if (document.getElementById('bacEicoStyles')) return;
  var st = document.createElement('style');
  st.id = 'bacEicoStyles';
  st.textContent = CSS;
  (document.head || document.documentElement).appendChild(st);
}

/* ---------- 5) بناء الأيقونة ---------- */
var tplCache = {};
function makeIcon(name) {
  var tpl = tplCache[name];
  if (!tpl) {
    var inner = ICON[name] || ICON.dot;
    if (inner.charAt(0) !== '<') inner = '<path d="' + inner + '"/>';
    var wrap = document.createElement('div');
    wrap.innerHTML = '<svg class="bac-eico" data-e="' + name + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + inner + '</svg>';
    tpl = tplCache[name] = wrap.firstChild;
  }
  return tpl.cloneNode(true);
}

/* ---------- 6) القواعد: ما الذي يُتخطّى؟ ---------- */
var SKIP_SEL = 'script,style,textarea,title,noscript,input,select,svg,head,.post-text,.admin-item-text,.admin-reject-input,[contenteditable="true"]';
/* بطاقات تتولاها icons.js بأيقونات خاصة (تُؤجَّل ثوانٍ فقط) */
var DEFER_SEL = '.mini-card,[class*="unit-card"],.subjects>.card>h2,.card-empty>h2';
var strict = true;

function shouldSkip(el) {
  if (!el || el.nodeType !== 1) return false;
  if (el.closest(SKIP_SEL)) return true;
  if (strict && el.closest(DEFER_SEL)) return true;
  return false;
}

/* ---------- 7) تحويل عقدة نص ---------- */
function replaceText(node) {
  var s = node.nodeValue;
  if (!s || !QUICK.test(s)) return;
  var parent = node.parentNode;
  if (!parent) return;

  /* قوائم select: لا يمكن وضع SVG داخل option، فنحذف الإيموجي فقط */
  if (parent.nodeType === 1 && parent.tagName === 'OPTION') {
    RX.lastIndex = 0;
    node.nodeValue = s.replace(/\uFE0F/g, '').replace(RX, '').replace(/^\s+/, '');
    return;
  }
  if (shouldSkip(parent)) return;

  var clean = s.replace(/\uFE0F/g, '');
  RX.lastIndex = 0;
  var frag = document.createDocumentFragment();
  var last = 0, m, any = false;
  while ((m = RX.exec(clean)) !== null) {
    if (m.index > last) frag.appendChild(document.createTextNode(clean.slice(last, m.index)));
    frag.appendChild(makeIcon(m[1] ? MAP[m[1]] : 'dot'));
    last = m.index + m[0].length;
    any = true;
    if (m[0].length === 0) RX.lastIndex++;
  }
  if (!any) return;
  if (last < clean.length) frag.appendChild(document.createTextNode(clean.slice(last)));
  parent.replaceChild(frag, node);
}

/* placeholder / title / aria-label: لا تقبل SVG، فنحذف الإيموجي منها فقط */
function stripAttr(el, attr) {
  var v = el.getAttribute(attr);
  if (!v || !QUICK.test(v)) return;
  RX.lastIndex = 0;
  var out = v.replace(/\uFE0F/g, '').replace(RX, '').replace(/\s{2,}/g, ' ').trim();
  if (out !== v) el.setAttribute(attr, out);
}
function fixAttrs(root) {
  if (!root.querySelectorAll) return;
  var list = root.querySelectorAll('[placeholder],[title],[aria-label]');
  for (var i = 0; i < list.length; i++) {
    stripAttr(list[i], 'placeholder'); stripAttr(list[i], 'title'); stripAttr(list[i], 'aria-label');
  }
  if (root.nodeType === 1) { stripAttr(root, 'placeholder'); stripAttr(root, 'title'); stripAttr(root, 'aria-label'); }
}

/* ---------- 8) مسح شجرة كاملة ---------- */
function scan(root) {
  if (!root) return;
  if (root.nodeType === 3) { replaceText(root); return; }
  if (root.nodeType !== 1) return;
  if (shouldSkip(root)) return;
  var walker = document.createTreeWalker(root, 4, null, false);
  var nodes = [], n;
  while ((n = walker.nextNode())) { if (QUICK.test(n.nodeValue || '')) nodes.push(n); }
  for (var i = 0; i < nodes.length; i++) replaceText(nodes[i]);
  fixAttrs(root);
}

/* ---------- 9) المراقبة الحيّة ---------- */
function start() {
  injectCss();
  var root = document.documentElement;
  var mo = new MutationObserver(function (list) {
    for (var i = 0; i < list.length; i++) {
      var mu = list[i];
      if (mu.type === 'characterData') { replaceText(mu.target); continue; }
      for (var j = 0; j < mu.addedNodes.length; j++) scan(mu.addedNodes[j]);
    }
  });
  mo.observe(root, { childList: true, subtree: true, characterData: true });

  function full() { if (document.body) scan(document.body); }
  full();
  document.addEventListener('DOMContentLoaded', full);

  /* بعد أن تنتهي icons.js من بطاقات المواد/الوحدات: تنظيف احتياطي لما تبقّى */
  function endStrict() { strict = false; full(); }
  if (document.readyState === 'complete') setTimeout(endStrict, 2500);
  else window.addEventListener('load', function () { setTimeout(endStrict, 2500); });
}

window.BacEmojiIcons = { scan: scan, icon: makeIcon, names: Object.keys(ICON) };
start();
})();
