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

function decorate() {
  var BR = { math: 'math', science: 'science', technical: 'mechanical', economy: 'economy' };
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
