/* BoomPesantren — main.js */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Load dynamic data if containers exist
  loadLayanan();
  loadTestimoni();
  loadFAQ();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (nav) nav.classList.remove('open');
        }
      }
    });
  });
});

async function fetchJSON(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(res.status);
    return await res.json();
  } catch (e) {
    console.warn('Data load failed:', path, e);
    return null;
  }
}

function iconSVG(name) {
  const icons = {
    globe: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    cloud: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    server: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    layers: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    harddrive: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>`,
    layout: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`
  };
  return icons[name] || icons.globe;
}

async function loadLayanan() {
  const container = document.getElementById('layanan-list');
  if (!container) return;
  const data = await fetchJSON('data/layanan.json');
  if (!data) return;
  container.innerHTML = data.map(item => `
    <article class="layanan-card">
      <div class="icon-wrap">${iconSVG(item.icon)}</div>
      <h3>${item.title}</h3>
      <p>${item.short}</p>
      <a href="pages/website-pesantren.html" class="btn btn-outline">Pelajari →</a>
    </article>
  `).join('');
}

async function loadTestimoni() {
  const container = document.getElementById('testimoni-list');
  if (!container) return;
  const data = await fetchJSON('data/testimoni.json');
  if (!data) return;
  container.innerHTML = data.map(t => {
    const initial = t.nama.charAt(0).toUpperCase();
    const stars = '★'.repeat(t.bintang);
    return `
      <article class="testimoni-card">
        <div class="stars">${stars}</div>
        <p class="teks">"${t.teks}"</p>
        <div class="author">
          <div class="avatar">${initial}</div>
          <div>
            <div class="name">${t.nama}</div>
            <div class="instansi">${t.instansi}</div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

async function loadFAQ() {
  const container = document.getElementById('faq-list');
  if (!container) return;
  const data = await fetchJSON('data/faq.json');
  if (!data) return;
  container.innerHTML = data.map(f => `
    <details class="faq-item">
      <summary>${f.q}</summary>
      <div class="answer">${f.a}</div>
    </details>
  `).join('');
}

// WhatsApp helper
function waLink(text = 'Halo, saya ingin bertanya tentang layanan BoomPesantren') {
  const phone = '6281234567890'; // GANTI dengan nomor WhatsApp Anda
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// Update all WA links if needed
document.querySelectorAll('[data-wa]').forEach(el => {
  el.href = waLink(el.dataset.wa || undefined);
});
