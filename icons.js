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
Object.assign(ICONS, {
  engineer: '<path d="M5 13a7 7 0 0 1 14 0"/><path d="M3 13h18v2.5H3z"/><path d="M12 6v7M9 8v5M15 8v5"/><path d="M5 20h14M8 20v-1.6M11 20v-1M14 20v-1.6M17 20v-1"/>',
  stopwatch: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6M12 2v3"/>',
  gear: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/>',
  signal: '<path d="M3 12h4l2-6 3 12 2-6h7"/>',
  phdrop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5"/>',
  molecule: '<circle cx="6" cy="8" r="2.5"/><circle cx="18" cy="8" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M8 9l3 7M16 9l-3 7M8.5 8h7"/>',
  battery: '<rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10v4M7 10v4M11 10v4"/>',
  wave: '<path d="M2 12c2-6 4-6 6 0s4 6 6 0 4-6 6 0"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  leaf: '<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19l8-8"/>',
  cycle: '<path d="M20 8a8 8 0 0 0-14-2M4 4v4h4M4 16a8 8 0 0 0 14 2M20 20v-4h-4"/>',
  mountain: '<path d="M2 20l7-12 4 6 3-4 6 10z"/>',
  expc: '<path d="M3 3v18h18"/><path d="M6 17c6 0 9-3 12-11"/>',
  logc: '<path d="M3 3v18h18"/><path d="M6 8c1 7 5 9 12 9"/>',
  seq: '<path d="M3 20h18"/><circle cx="6" cy="16" r="1.5"/><circle cx="11" cy="12" r="1.5"/><circle cx="16" cy="8" r="1.5"/><circle cx="20" cy="4.5" r="1"/>',
  plusminus: '<path d="M12 4v10M7 9h10M7 19h10"/>',
  dice: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01" stroke-width="2.6"/>',
  complex: '<path d="M3 12h18M12 3v18"/><circle cx="16" cy="8" r="1.8"/><path d="M12 12l4-4"/>',
  planet: '<circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(-20 12 12)"/>',
  pencil: '<path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"/>',
  file: '<path d="M6 3h8l5 5v13H6zM14 3v5h5M9 13h6M9 17h6"/>',
  pen: '<path d="M4 20h4L19 9l-4-4L4 16zM13 7l4 4"/>'
});
var UNIT = {
  kinetics:['stopwatch','c-orange'], mech:['gear','c-blue'], elec:['signal','c-orange'], ph:['phdrop','c-teal'],
  nuclear:['physics','c-blue'], ester:['molecule','c-purple'], columns:['battery','c-green'], vibration:['wave','c-blue'],
  protein_struct:['science','c-teal'], protein_func:['link','c-blue'], enzyme:['process','c-purple'], immunity:['shield','c-green'],
  nerves:['electrical','c-orange'], photosynthesis:['leaf','c-green'], respiration:['cycle','c-blue'], tectonics:['mountain','c-orange'],
  exp:['expc','c-green'], log:['logc','c-blue'], seq:['seq','c-orange'], num:['plusminus','c-purple'], prob:['dice','c-teal'], cplx:['complex','c-purple'],
  meerath:['law','c-orange'], riba:['economy','c-green'], muamalat:['accounting','c-blue'],
  ethics:['law','c-purple'], safety:['shield','c-orange'], astronomy:['planet','c-blue']
};
var MINI = [['المواضيع المتنوعة','layers','c-purple'],['مواضيع البكالوريا','file','c-orange'],['سلاسل','pencil','c-blue'],['فقرات','pen','c-teal'],['دروس','book','c-green']];
var LEAD = /^[^\u0600-\u06FFA-Za-z0-9]+/;
function decorateExtra() {
  document.querySelectorAll('.im-unit-card,.ii-unit-card,.ip-unit-card,.is-unit-card,.pe-unit-card').forEach(function (b) {
    if (b.querySelector('.bac-ico')) return;
    var u = UNIT[b.dataset.key]; if (!u) return;
    var t = b.textContent.replace(LEAD, '').trim();
    b.classList.add('unit-ico-card');
    b.innerHTML = badge(u[0], u[1]) + '<span>' + esc(t) + '</span>';
  });
  document.querySelectorAll('.mini-card').forEach(function (m) {
    if (m.querySelector('.bac-ico')) return;
    var raw = m.textContent.replace(/\s+/g, ' ').trim(), t = raw.replace(LEAD, '').trim(), hit = null;
    for (var i = 0; i < MINI.length; i++) if (t.indexOf(MINI[i][0]) !== -1) { hit = MINI[i]; break; }
    if (!hit) return;
    m.innerHTML = badge(hit[1], hit[2]) + '<span class="mc-t">' + esc(t) + '</span>';
  });
}
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
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

function decorate() {
  decorateExtra();
  var BR = { math: 'math', science: 'science', technical: 'engineer', economy: 'economy' };
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
}
window.BacIcons = { keyFor: keyFor, svg: svg, badge: badge, label: label, color: color, decorate: decorate };
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', decorate); else decorate();
})();
