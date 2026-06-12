/* ============================================
   GharKhoj.com.np — Core JavaScript
   Shared utilities, i18n, data, components
   ============================================ */

'use strict';

// ── i18n Strings ─────────────────────────────
const i18n = {
  en: {
    nav_home: 'Home',
    nav_listings: 'Properties',
    nav_submit: 'Post Free',
    nav_about: 'About',
    nav_contact: 'Contact',
    search_placeholder: 'Search city, area, location...',
    search_btn: 'Search Properties',
    filter_all_types: 'All Types',
    filter_room: 'Room',
    filter_flat: 'Flat',
    filter_house: 'House',
    filter_land: 'Land',
    filter_commercial: 'Commercial',
    filter_all_cities: 'All Cities',
    filter_rent: 'For Rent',
    filter_buy: 'For Sale',
    filter_all_purpose: 'Rent or Buy',
    filter_btn: 'Filter',
    featured_label: 'Featured Properties',
    featured_heading: 'Properties You\'ll Love',
    featured_sub: 'Hand-picked verified listings across Nepal',
    view_all: 'View All Properties',
    verified: 'Verified',
    featured_badge: 'Featured',
    bedrooms: 'Beds',
    bathrooms: 'Baths',
    area: 'Area',
    contact_owner: 'Contact Owner',
    whatsapp: 'WhatsApp',
    no_results: 'No properties found',
    no_results_sub: 'Try changing your filters or search terms',
    footer_desc: 'Nepal\'s trusted property search platform. Find rooms, flats, houses and land across all major cities.',
    footer_quick: 'Quick Links',
    footer_property: 'Property Types',
    footer_cities: 'Top Cities',
    footer_copy: '© 2025 GharKhoj.com.np — Nepal\'s Trusted Property Search',
    post_free: 'List your property FREE',
    stats_listings: 'Active Listings',
    stats_cities: 'Cities Covered',
    stats_landlords: 'Landlords',
    stats_verified: 'Verified Listings',
    hero_heading: 'Find Your Perfect Home in Nepal',
    hero_sub: 'Search verified rooms, flats, houses and land. No broker fees. Direct contact with owners.',
    hero_trust: 'Trusted by',
    hero_trust2: '10,000+ Nepalis',
    disclaimer: 'Always visit the property before making any payment. GharKhoj does not verify all listings.',
  },
  np: {
    nav_home: 'गृहपृष्ठ',
    nav_listings: 'सम्पत्ति',
    nav_submit: 'नि:शुल्क पोस्ट',
    nav_about: 'हाम्रोबारे',
    nav_contact: 'सम्पर्क',
    search_placeholder: 'सहर, क्षेत्र, स्थान खोज्नुहोस्...',
    search_btn: 'सम्पत्ति खोज्नुहोस्',
    filter_all_types: 'सबै प्रकार',
    filter_room: 'कोठा',
    filter_flat: 'फ्ल्याट',
    filter_house: 'घर',
    filter_land: 'जग्गा',
    filter_commercial: 'व्यावसायिक',
    filter_all_cities: 'सबै सहर',
    filter_rent: 'भाडामा',
    filter_buy: 'बिक्रीमा',
    filter_all_purpose: 'भाडा वा खरिद',
    filter_btn: 'फिल्टर',
    featured_label: 'विशेष सम्पत्तिहरू',
    featured_heading: 'तपाईंलाई मन पर्ने सम्पत्तिहरू',
    featured_sub: 'नेपालभरका सत्यापित सूचीहरू',
    view_all: 'सबै सम्पत्ति हेर्नुहोस्',
    verified: 'प्रमाणित',
    featured_badge: 'विशेष',
    bedrooms: 'बेडरुम',
    bathrooms: 'बाथरुम',
    area: 'क्षेत्रफल',
    contact_owner: 'मालिकलाई सम्पर्क',
    whatsapp: 'व्हाट्सएप',
    no_results: 'कुनै सम्पत्ति फेला परेन',
    no_results_sub: 'फिल्टर वा खोज शर्तहरू परिवर्तन गर्नुहोस्',
    footer_desc: 'नेपालको विश्वसनीय सम्पत्ति खोज प्लेटफर्म। सबै प्रमुख सहरहरूमा कोठा, फ्ल्याट, घर र जग्गा फेला पार्नुहोस्।',
    footer_quick: 'द्रुत लिंकहरू',
    footer_property: 'सम्पत्तिका प्रकारहरू',
    footer_cities: 'शीर्ष सहरहरू',
    footer_copy: '© २०२५ GharKhoj.com.np — नेपालको विश्वसनीय सम्पत्ति खोज',
    post_free: 'आफ्नो सम्पत्ति नि:शुल्क सूचीबद्ध गर्नुहोस्',
    stats_listings: 'सक्रिय सूचीहरू',
    stats_cities: 'सहरहरू',
    stats_landlords: 'घरमालिकहरू',
    stats_verified: 'प्रमाणित सूचीहरू',
    hero_heading: 'नेपालमा आफ्नो सपनाको घर फेला पार्नुहोस्',
    hero_sub: 'प्रमाणित कोठा, फ्ल्याट, घर र जग्गा खोज्नुहोस्। ब्रोकर शुल्क छैन। मालिकसँग सोझो सम्पर्क।',
    hero_trust: 'विश्वास गर्छन्',
    hero_trust2: '१०,०००+ नेपालीहरू',
    disclaimer: 'कुनै पनि भुक्तान गर्नु अघि सम्पत्ति अवश्य भ्रमण गर्नुहोस्। GharKhoj ले सबै सूचीहरू प्रमाणित गर्दैन।',
  }
};

// ── Language State ────────────────────────────
let currentLang = localStorage.getItem('gk_lang') || 'en';

function t(key) {
  return i18n[currentLang][key] || i18n.en[key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('gk_lang', lang);
  document.documentElement.lang = lang === 'np' ? 'ne' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Re-render cards if they exist
  if (typeof renderCards === 'function') renderCards();
}

// ── Data Layer ────────────────────────────────
let allListings = [];

async function loadListings() {
  try {
    // Works both locally and on GitHub Pages
    const base = window.location.pathname.includes('/pages/')
      ? '../data/listings.json'
      : 'data/listings.json';
    const res = await fetch(base);
    allListings = await res.json();
    return allListings;
  } catch (e) {
    console.warn('Could not load listings:', e);
    allListings = [];
    return [];
  }
}

// ── Property Card Generator ────────────────────
function propertyCardHTML(p) {
  const lang = currentLang;
  const title = lang === 'np' && p.title_np ? p.title_np : p.title;
  const img   = p.images && p.images[0]
    ? p.images[0]
    : 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80';

  const bedsHTML   = p.bedrooms > 0 ? `<span class="property-card__meta-item">🛏 ${p.bedrooms} ${t('bedrooms')}</span>` : '';
  const bathsHTML  = p.bathrooms > 0 ? `<span class="property-card__meta-item">🚿 ${p.bathrooms} ${t('bathrooms')}</span>` : '';
  const areaHTML   = p.area ? `<span class="property-card__meta-item">📐 ${p.area}</span>` : '';

  return `
    <a href="${_p('property.html')}?id=${p.id}" class="property-card" aria-label="${title}" style="${p.status === 'sold' || p.status === 'rented' ? 'opacity:0.72' : ''}">
      <div style="position:relative">
        <img class="property-card__img" src="${img}" alt="${title}" loading="lazy">
        <div class="property-card__badges">
          ${p.status === 'sold'   ? `<span class="badge" style="background:#7c3aed;color:white">💵 Sold</span>` : ''}
          ${p.status === 'rented' ? `<span class="badge" style="background:#374151;color:white">🔑 Rented</span>` : ''}
          ${p.verified ? `<span class="badge badge-verified">✓ ${t('verified')}</span>` : ''}
          ${p.featured ? `<span class="badge badge-featured">★ ${t('featured_badge')}</span>` : ''}
          <span class="badge ${p.purpose === 'rent' ? 'badge-rent' : 'badge-buy'}">${p.purpose === 'rent' ? t('filter_rent') : t('filter_buy')}</span>
        </div>
      </div>
      <div class="property-card__body">
        <div class="property-card__price">${p.price_label}</div>
        <div class="property-card__title">${title}</div>
        <div class="property-card__location">📍 ${p.location}, ${p.city}</div>
        ${bedsHTML || bathsHTML || areaHTML ? `
        <div class="property-card__meta">
          ${bedsHTML}${bathsHTML}${areaHTML}
        </div>` : ''}
      </div>
    </a>`;
}

// ── Path helper: detect if we're inside /pages/ ───
// Returns '../' if inside /pages/, '' if at root
function _base() {
  // Check direct parent folder name to avoid false positives
  // (e.g. repo named 'pages-project' would break the old includes() check)
  const parts = window.location.pathname.split('/').filter(Boolean);
  const filename = parts[parts.length - 1] || '';
  const parentDir = parts[parts.length - 2] || '';
  // We're inside /pages/ only when the direct parent is literally 'pages'
  return parentDir === 'pages' ? '../' : '';
}
// For links that always point to /pages/
function _p(file) {
  const b = _base();
  return b === '' ? 'pages/' + file : file;
}

// ── Navbar Builder ─────────────────────────────
function buildNavbar(activePage = '') {
  const b = _base();
  const navPages = [
    { key: 'nav_home',     href: b + 'index.html' },
    { key: 'nav_listings', href: _p('listings.html') },
    { key: 'nav_about',    href: _p('about.html') },
    { key: 'nav_contact',  href: _p('contact.html') },
  ];
  const links = navPages.map(p =>
    `<a href="${p.href}" class="nav-link${activePage === p.key ? ' active' : ''}" data-i18n="${p.key}">${t(p.key)}</a>`
  ).join('');

  return `
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="nav-inner">
      <a href="${b}index.html" class="nav-logo" aria-label="GharKhoj Home">
        <div class="nav-logo-icon">🏠</div>
        <span class="nav-logo-text">Ghar<span>Khoj</span></span>
      </a>
      <div class="nav-links">${links}</div>
      <div class="nav-actions">
        <div class="lang-toggle" role="group" aria-label="Language selector">
          <button class="lang-btn${currentLang === 'en' ? ' active' : ''}" data-lang="en" onclick="setLang('en')" aria-label="English">EN</button>
          <button class="lang-btn${currentLang === 'np' ? ' active' : ''}" data-lang="np" onclick="setLang('np')" aria-label="नेपाली">NP</button>
        </div>
        <a href="${_p('submit.html')}" class="btn btn-primary btn-sm" data-i18n="nav_submit">${t('nav_submit')}</a>
      </div>
      <button class="hamburger" onclick="toggleMobileNav()" aria-label="Menu" aria-expanded="false" id="hamburger">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="mobile-nav" id="mobileNav">
  ${links}
  <div class="lang-toggle" style="margin-top:8px">
    <button class="lang-btn${currentLang === 'en' ? ' active' : ''}" data-lang="en" onclick="setLang('en')">EN</button>
    <button class="lang-btn${currentLang === 'np' ? ' active' : ''}" data-lang="np" onclick="setLang('np')">NP</button>
  </div>
  <a href="${_p('submit.html')}" class="btn btn-primary btn-block" style="margin-top:12px" data-i18n="nav_submit">${t('nav_submit')}</a>
</div>`;
}

function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  const btn = document.getElementById('hamburger');
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

// ── Footer Builder ─────────────────────────────
function buildFooter() {
  const b = _base();
  return `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div class="nav-logo-icon">🏠</div>
          <span style="color:white;font-size:20px;font-weight:700">Ghar<span style="color:#60a5fa">Khoj</span></span>
        </div>
        <p data-i18n="footer_desc">${t('footer_desc')}</p>
        <div style="display:flex;gap:12px;margin-top:16px">
          <a href="#" style="color:rgba(255,255,255,0.5);font-size:20px" aria-label="Facebook">📘</a>
          <a href="#" style="color:rgba(255,255,255,0.5);font-size:20px" aria-label="Instagram">📸</a>
          <a href="#" style="color:rgba(255,255,255,0.5);font-size:20px" aria-label="Twitter">🐦</a>
        </div>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer_quick">${t('footer_quick')}</h4>
        <a href="${b}index.html" data-i18n="nav_home">${t('nav_home')}</a>
        <a href="${_p('listings.html')}" data-i18n="nav_listings">${t('nav_listings')}</a>
        <a href="${_p('submit.html')}" data-i18n="nav_submit">${t('nav_submit')}</a>
        <a href="${_p('about.html')}" data-i18n="nav_about">${t('nav_about')}</a>
        <a href="${_p('contact.html')}" data-i18n="nav_contact">${t('nav_contact')}</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer_property">${t('footer_property')}</h4>
        <a href="${_p('listings.html')}?type=room"       data-i18n="filter_room">${t('filter_room')}</a>
        <a href="${_p('listings.html')}?type=flat"       data-i18n="filter_flat">${t('filter_flat')}</a>
        <a href="${_p('listings.html')}?type=house"      data-i18n="filter_house">${t('filter_house')}</a>
        <a href="${_p('listings.html')}?type=land"       data-i18n="filter_land">${t('filter_land')}</a>
        <a href="${_p('listings.html')}?type=commercial" data-i18n="filter_commercial">${t('filter_commercial')}</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer_cities">${t('footer_cities')}</h4>
        <a href="${_p('listings.html')}?city=Kathmandu">Kathmandu</a>
        <a href="${_p('listings.html')}?city=Pokhara">Pokhara</a>
        <a href="${_p('listings.html')}?city=Lalitpur">Lalitpur</a>
        <a href="${_p('listings.html')}?city=Bhaktapur">Bhaktapur</a>
        <a href="${_p('listings.html')}?city=Chitwan">Chitwan</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-i18n="footer_copy">${t('footer_copy')}</span>
      <div style="display:flex;gap:16px">
        <a href="${_p('privacy.html')}" style="color:rgba(255,255,255,0.5);font-size:13px">Privacy Policy</a>
        <a href="${_p('terms.html')}"  style="color:rgba(255,255,255,0.5);font-size:13px">Terms</a>
      </div>
    </div>
  </div>
</footer>`;
}

// ── URL Params Helper ──────────────────────────
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

// ── Format price ───────────────────────────────
function formatPrice(n) {
  if (n >= 10000000) return `Rs ${(n/10000000).toFixed(1)} Crore`;
  if (n >= 100000)   return `Rs ${(n/100000).toFixed(1)} Lakh`;
  if (n >= 1000)     return `Rs ${(n/1000).toFixed(0)}K`;
  return `Rs ${n.toLocaleString()}`;
}

// ── Relative time ──────────────────────────────
function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr);
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7)   return `${days}d ago`;
  if (days < 30)  return `${Math.floor(days/7)}w ago`;
  return `${Math.floor(days/30)}mo ago`;
}

// ── Init on DOM Ready ──────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = currentLang === 'np' ? 'ne' : 'en';
});

// ── Back to Top Button ─────────────────────────
(function() {
  const btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '↑';
  btn.style.cssText = [
    'position:fixed', 'bottom:24px', 'right:24px', 'z-index:999',
    'width:44px', 'height:44px', 'border-radius:50%',
    'background:var(--blue)', 'color:white', 'border:none',
    'font-size:20px', 'cursor:pointer', 'opacity:0', 'pointer-events:none',
    'transition:opacity 0.3s', 'box-shadow:0 2px 12px rgba(26,86,219,0.35)',
    'display:flex', 'align-items:center', 'justify-content:center'
  ].join(';');
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    const show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
