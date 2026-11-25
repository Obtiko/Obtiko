/* Obtiko — icons.js : أيقونات Vector موحّدة لكل المواد والشعب (بدون Emoji) */
(function () {
'use strict';
var T = function (c, s) { return '<text x="12" y="15.4" text-anchor="middle" font-size="' + s + '" font-weight="700" fill="currentColor" stroke="none">' + c + '</text>'; };
var BUBBLE = '<path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-5.5A8 8 0 1 1 21 12z"/>';
var ICONS = {
  math: '<rect x="5" y="2.5" width="14" height="19" rx="2.5"/><rect x="8" y="5.5" width="8" height="3.5" rx=".8"/><path d="M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h.01" stroke-width="2.6"/>',
  physics: '<circle cx="12" cy="12" r="1.8" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
  science: '<path d="M8 2.5c0 5 8 5 8 9.5s-8 4.5-8 9.5M16 2.5c0 5-8 5-8 9.5s8 4.5 8 9.5M9 6h6M8.6 12h6.8M9 18h6"/>',
  electrical: '<path d="M13 2 4.5 13.5H11L10 22l9-12h-6.5z"/><path d="M2 6h2M2 18h2M20 6h2" />',
  mechanical: '<circle cx="12" cy="12" r="8" stroke-width="3" stroke-dasharray="1.6 1.54"/><circle cx="12" cy="12" r="5.6"/><circle cx="12" cy="12" r="2"/>',
  civil: '<path d="M3 21h18"/><path d="M5 21V10l6-3v14M11 21V3l8 4v14"/><path d="M8 12h.01M8 16h.01M15 9h.01M15 13h.01M15 17h.01" stroke-width="2.4"/>',
  process: '<path d="M9 3h6M10 3v6l-5.2 9.3A1.6 1.6 0 0 0 6.2 21h11.6a1.6 1.6 0 0 0 1.4-2.7L14 9V3M7.5 15h9"/>',
  arabic: '<path d="M2 5h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2zM22 5h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z"/><path d="M5 9h3M5 12.5h3M16 9h3M16 12.5h3"/>',
  english: BUBBLE + T('A', 9),
  french: BUBBLE + T('Fr', 7),
  islamic: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 6.8 6.8 0 0 0 20 14.5z"/><path d="m17 4.5.8 1.8 1.9.3-1.4 1.3.4 1.9-1.7-1-1.7 1 .4-1.9-1.4-1.3 1.9-.3z"/>',
  social: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M4.5 7.5h15M4.5 16.5h15"/>',
  philo: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
  law: '<path d="M12 3v18M7 21h10M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
  economy: '<path d="M4 20h16M5 16v-3M10 16V9M15 16v-5"/><path d="M6 8l4.5-4 3 3L20 3M16 3h4v4"/>',
  accounting: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h3M13 12h3M8 16h3M13 16h3"/>',
  info: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 21h8M12 16v5M10 8l-2 2 2 2M14 8l2 2-2 2"/>',
  book: '<path d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z"/>'
};
var META = {
  math: ['الرياضيات', 'c-green'], physics: ['الفيزياء', 'c-blue'], science: ['العلوم الطبيعية', 'c-teal'],
  electrical: ['الهندسة الكهربائية', 'c-blue'], mechanical: ['الهندسة الميكانيكية', 'c-orange'],
  civil: ['الهندسة المدنية', 'c-purple'], process: ['هندسة الطرائق', 'c-teal'],
  arabic: ['اللغة العربية', 'c-orange'], english: ['اللغة الإنجليزية', 'c-blue'], french: ['اللغة الفرنسية', 'c-purple'],
  islamic: ['العلوم الإسلامية', 'c-green'], social: ['الاجتماعيات', 'c-orange'], philo: ['الفلسفة', 'c-purple'],
  law: ['القانون', 'c-purple'], economy: ['الاقتصاد', 'c-purple'], accounting: ['المحاسبة', 'c-orange'],
  info: ['الإعلام الآلي', 'c-blue'], book: ['درس', 'c-green']
};
var RULES = [
  [/accounting|المحاسب/i, 'accounting'], [/transportation|الطرائق/i, 'process'], [/electrical|الكهربائية/i, 'electrical'],
  [/mechanical|الميكانيكية/i, 'mechanical'], [/civil|المدنية/i, 'civil'], [/economy|الاقتصاد/i, 'economy'],
  [/law|القانون/i, 'law'], [/philo|الفلسفة/i, 'philo'], [/social|[اإ]جتماعيات/i, 'social'], [/islamic|الإسلامية/i, 'islamic'],
  [/arabic|العربية/i, 'arabic'], [/english|الإنجليزية/i, 'english'], [/french|الفرنسية/i, 'french'],
  [/physic|الفيزياء/i, 'physics'], [/science|العلوم الطبيعية/i, 'science'], [/math|الرياضيات/i, 'math'], [/info|الإعلام/i, 'info']
];
function keyFor(s) {
  s = String(s || '');
  for (var i = 0; i < RULES.length; i++) if (RULES[i][0].test(s)) return RULES[i][1];
  return 'book';
}
function svg(k) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[k] || ICONS.book) + '</svg>'; }
function color(k) { return (META[k] || META.book)[1]; }
function label(k) { return (META[k] || META.book)[0]; }
function badge(k, cls) { return '<span class="bac-ico ' + color(k) + (cls ? ' ' + cls : '') + '">' + svg(k) + '</span>'; }


/* ── أيقونات إضافية: الوحدات الدراسية والبطاقات الصغيرة والهندسة ── */
var ST = function (c, s) { return '<text x="12" y="15.6" text-anchor="middle" font-size="' + s + '" font-weight="700" fill="currentColor" stroke="none">' + c + '</text>'; };
var HAT = '<path d="M7 10.5a5 5 0 0 1 10 0"/><path d="M5 10.5h14v2H5z"/><path d="M12 5.5v5"/>';
Object.assign(ICONS, {
  br_math: '<rect x="4" y="2.5" width="16" height="19" rx="2.5"/><rect x="7.5" y="5.5" width="9" height="4" rx=".8"/><path d="M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17.5h.01M12 17.5h.01M16 17.5h.01" stroke-width="2.4"/>',
  br_science: '<path d="M10 2.5v6.6a2 2 0 0 1-.2.9L4.7 19.800A1.600 1.600 0 0 0 6.100 22h11.800a1.600 1.600 0 0 0 1.400-2.200L14.200 10a2 2 0 0 1-.2-.9V2.500M8.500 2.500h7M7.200 15.500h9.600"/><path d="M10.500 18.500h.01M13.500 17.500h.01" stroke-width="2.4"/>',
  br_economy: '<path d="M3.500 3.500v16a1.500 1.500 0 0 0 1.500 1.500h16"/><path d="M8 17v-4M12.500 17V9M17 17v-7"/><path d="M7 8l4-3.500 3 2.500 5-4.500M16 2.500h3v3"/>',
  engineer: '<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 6 6v3"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><rect x="2" y="15" width="20" height="4" rx="1"/>',
  hardhat: HAT + '<path d="M6.5 16.5c.6-2.2 2.6-3.4 5.5-3.4s4.9 1.2 5.5 3.4M12 13.1v7.4"/>',
  note: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h7"/>',
  pencil: '<path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19z"/><path d="M14 7l3 3"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  filecheck: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 14l2.2 2.2L15.5 12"/>',
  penline: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  timer: '<circle cx="12" cy="13" r="7.5"/><path d="M12 9v4l2.5 2M9.5 2.5h5M12 2.5V5.5"/>',
  cog: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6.5"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"/>',
  circuit: '<path d="M3 12h6M9 6v12M14 6v12M14 12h7"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 14.5a2.6 2.6 0 0 0 2.5 2.5"/>',
  nucleus: '<circle cx="10.5" cy="11" r="2.3"/><circle cx="14" cy="13.2" r="2.3"/><circle cx="11.5" cy="15" r="2.3"/><path d="M4 7a9 9 0 0 1 4-3M20 17a9 9 0 0 1-4 3M18 5a9 9 0 0 1 2.5 4"/>',
  molecule: '<circle cx="6" cy="17" r="2.5"/><circle cx="18" cy="17" r="2.5"/><circle cx="12" cy="6" r="2.5"/><path d="M10.7 8.2 7.3 14.8M13.3 8.2l3.4 6.6M8.5 17h7"/>',
  battery: '<rect x="2.5" y="7" width="17" height="10" rx="2"/><path d="M22 10.5v3M9 12h5M11.5 9.5v5"/>',
  wave: '<path d="M2 12c1.7-7 3.3-7 5 0s3.3 7 5 0 3.3-7 5 0 3.3 7 5 0"/>',
  expo: '<path d="M3 3v18h18"/><path d="M6 17c6 0 9-3 12-11"/>', logn: '<path d="M3 3v18h18"/><path d="M6 8c1 7 5 9 12 9"/>',
  seq: '<circle cx="5" cy="18" r="1.6"/><circle cx="10" cy="14" r="1.6"/><circle cx="15" cy="9" r="1.6"/><circle cx="20" cy="5" r="1.6"/><path d="M5 18l5-4 5-5 5-4" stroke-dasharray="2 2"/>',
  arith: '<path d="M5 7h6M8 4v6M13 7h6M5 18h6M13 15l6 6M19 15l-6 6"/>',
  dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="9" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="15" r="1" fill="currentColor"/><circle cx="15" cy="15" r="1" fill="currentColor"/>',
  complex: '<path d="M12 3v18M3 12h18"/><circle cx="17" cy="7" r="1.6" fill="currentColor"/><path d="M12 12l5-5" stroke-dasharray="2 2"/>',
  dna: '<path d="M7 3c0 5.5 10 5.5 10 11.5S7 20 7 21M17 3c0 5.5-10 5.5-10 11.5S17 20 17 21"/><path d="M9 7h6M9 12h6M9 17h6"/>',
  puzzle: '<path d="M9 4h3v2.5a1.8 1.8 0 1 0 3 0V4h5v5h-2.5a1.8 1.8 0 1 0 0 3H20v7H4v-6h2.5a1.8 1.8 0 1 0 0-3H4V4z"/>',
  key: '<circle cx="8" cy="12" r="3.5"/><path d="M11.5 12H21M17 12v3M20 12v2.5"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M12 9v6M9 12h6"/>',
  neuron: '<circle cx="12" cy="12" r="2.6"/><path d="M12 9.4V4.5M14.3 10.6 18.6 8M14.3 13.4 18.6 16M12 14.6v4.9M9.7 13.4 5.4 16M9.7 10.6 5.4 8"/><circle cx="12" cy="3.5" r="1"/><circle cx="19.5" cy="7.5" r="1"/><circle cx="19.5" cy="16.5" r="1"/><circle cx="12" cy="20.5" r="1"/><circle cx="4.5" cy="16.5" r="1"/><circle cx="4.5" cy="7.5" r="1"/>',
  leaf: '<path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15"/><path d="M5 19c3-5 6-8 10-10"/>',
  lungs: '<path d="M12 4v8M12 12c-2 0-3.5 1-4.5 3-1 2-1.5 4-3 4.5C3 20 3 12 6 9c1.5-1.5 4-1 6-1M12 12c2 0 3.5 1 4.5 3 1 2 1.5 4 3 4.5C21 20 21 12 18 9c-1.5-1.5-4-1-6-1"/>',
  plates: '<path d="M3 13h8l2-2h8M3 17h6l2 2h10"/><path d="M12 3v6M9.5 6.5 12 9l2.5-2.5"/>',
  family: '<circle cx="12" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M12 7v4M6 17v-3h12v3"/>',
  coin: '<circle cx="12" cy="12" r="9"/><path d="M9 15l6-6"/><circle cx="9.5" cy="9.5" r="1"/><circle cx="14.5" cy="14.5" r="1"/>',
  exchange: '<path d="M3 8h14l-3-3M21 16H7l3 3"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>',
  planet: '<circle cx="12" cy="12" r="4.5"/><ellipse cx="12" cy="12" rx="10" ry="3.2" transform="rotate(-20 12 12)"/>'
});
Object.assign(META, { engineer: ['الهندسة', 'c-orange'], br_math: ['الرياضيات', 'c-green'], br_science: ['العلوم التجريبية', 'c-blue'], br_economy: ['التسيير والاقتصاد', 'c-purple'] });
var UNIT_MAP = {
  kinetics: ['timer', 'c-blue'], mech: ['cog', 'c-orange'], elec: ['circuit', 'c-blue'], ph: ['drop', 'c-teal'],
  nuclear: ['nucleus', 'c-green'], ester: ['molecule', 'c-purple'], columns: ['battery', 'c-orange'], vibration: ['wave', 'c-blue'],
  exp: ['expo', 'c-green'], log: ['logn', 'c-teal'], seq: ['seq', 'c-blue'], num: ['arith', 'c-orange'], prob: ['dice', 'c-purple'], cplx: ['complex', 'c-green'],
  protein_struct: ['dna', 'c-teal'], protein_func: ['puzzle', 'c-blue'], enzyme: ['key', 'c-orange'], immunity: ['shield', 'c-green'],
  nerves: ['neuron', 'c-purple'], photosynthesis: ['leaf', 'c-green'], respiration: ['lungs', 'c-blue'], tectonics: ['plates', 'c-orange'],
  meerath: ['family', 'c-green'], riba: ['coin', 'c-orange'], muamalat: ['exchange', 'c-teal'],
  safety: ['hardhat', 'c-orange'], ethics: ['briefcase', 'c-blue'], astronomy: ['planet', 'c-purple']
};
var MINI_MAP = [['📝', 'note', 'c-green'], ['✏', 'pencil', 'c-blue'], ['🗂', 'folder', 'c-orange'], ['📄', 'filecheck', 'c-purple'], ['✍', 'penline', 'c-teal']];
var LEAD = /^[^\u0600-\u06FFA-Za-z0-9]+/;
function mk(k, c, extra) { return '<span class="bac-ico ' + c + (extra ? ' ' + extra : '') + '">' + svg(k) + '</span>'; }
function setIconLabel(el, html, text) {
  el.innerHTML = html + '<span class="bac-lbl"></span>';
  el.lastChild.textContent = text;
}
function decorateExtras() {
  document.querySelectorAll('[class*="unit-card"]').forEach(function (b) {
    if (b.querySelector('.bac-ico')) return;
    var m = UNIT_MAP[b.dataset.key] || ['book', 'c-green'];
    var txt = b.textContent.replace(LEAD, '').trim();
    b.classList.add('bac-unit');
    setIconLabel(b, mk(m[0], m[1]), txt);
  });
  document.querySelectorAll('.mini-card').forEach(function (b) {
    if (b.querySelector('.bac-ico')) return;
    var raw = b.textContent.trim(), m = ['book', 'c-green'];
    for (var i = 0; i < MINI_MAP.length; i++) if (raw.indexOf(MINI_MAP[i][0]) === 0) { m = [MINI_MAP[i][1], MINI_MAP[i][2]]; break; }
    setIconLabel(b, mk(m[0], m[1]), raw.replace(LEAD, '').trim());
  });
  document.querySelectorAll('.topic-card > h2, .card-empty > h2').forEach(function (h) {
    if (h.querySelector('.bac-ico')) return;
    var raw = h.textContent.trim();
    setIconLabel(h, mk(raw.indexOf('⭐') === 0 ? 'star' : 'filecheck', raw.indexOf('⭐') === 0 ? 'c-orange' : 'c-green'), raw.replace(LEAD, '').trim());
  });
  /* بطاقات الفصول في صفحات «المواضيع المتنوعة» (T_*): نزيل الإيموجي المتكرر بجانب أيقونة الفيزياء/المادة */
  document.querySelectorAll('.subjects > .card:not(.topic-card):not(.card-empty) > h2').forEach(function (h) {
    var last = h.lastChild;
    if (last && last.nodeType === 3 && /^\s*[^\u0600-\u06FFA-Za-z0-9\s]/.test(last.nodeValue)) last.nodeValue = last.nodeValue.replace(LEAD, '');
  });
}

function decorate() {
  var BR = { math: 'br_math', science: 'br_science', technical: 'engineer', economy: 'br_economy' };
  document.querySelectorAll('[data-branch-key] .bac-card-icon').forEach(function (el) {
    var k = BR[el.parentNode.getAttribute('data-branch-key')] || 'book';
    el.className = 'bac-card-icon bac-ico ' + color(k);
    el.innerHTML = svg(k);
  });
  document.querySelectorAll('.subjects > .card:not(.topic-card):not(.card-empty) > h2').forEach(function (h) {
    if (h.querySelector('.bac-ico')) return;
    var k = keyFor(h.textContent);
    h.insertAdjacentHTML('afterbegin', badge(k, 'card-sub-ico'));
  });
  decorateExtras();
  if (!decorate._mo && window.MutationObserver) {
    var t;
    decorate._mo = new MutationObserver(function () { clearTimeout(t); t = setTimeout(decorateExtras, 60); });
    document.querySelectorAll('[id$="Units"],#tmGrid').forEach(function (c) { decorate._mo.observe(c, { childList: true }); });
  }
}
window.BacIcons = { keyFor: keyFor, svg: svg, badge: badge, label: label, color: color, decorate: decorate };
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', decorate); else decorate();
})();
