# BoomPesantren

Website original partner digitalisasi untuk Pondok Pesantren, Madrasah, dan Yayasan Pendidikan Islam.

**Domain target:** https://boompesantren.silverhawk.web.id  
**Teknologi:** HTML + CSS + JavaScript + JSON (static). Siap GitHub Pages.  
**Database:** Data konten disimpan di folder `data/*.json`. Untuk fitur dinamis (order, login, CMS) bisa diintegrasikan Firebase / Supabase nanti tanpa mengubah struktur frontend.

---

## Struktur Folder

```
boompesantren/
├── index.html              # Beranda
├── css/style.css           # Stylesheet utama
├── js/main.js              # Logic + load JSON
├── data/
│   ├── layanan.json
│   ├── faq.json
│   └── testimoni.json
├── assets/
│   ├── logo.svg
│   └── favicon.svg
├── pages/
│   ├── website-pesantren.html
│   ├── tentang.html
│   ├── testimoni.html
│   └── kontak.html
└── README.md
```

---

## Cara Deploy ke GitHub Pages

1. Buat repository baru di GitHub (misal: `boompesantren`).
2. Upload **seluruh isi folder** ini ke root repository (bukan folder di dalam folder).
3. Settings → Pages → Source: **Deploy from a branch** → Branch `main` / `master` → folder `/ (root)`.
4. Custom domain:
   - Settings → Pages → Custom domain → isi `boompesantren.silverhawk.web.id`
   - Di DNS domain Anda, buat record:
     - Type: `CNAME`
     - Name: `boompesantren` (atau sesuai subdomain)
     - Value: `username.github.io` (ganti username GitHub Anda)
5. Centang **Enforce HTTPS** setelah DNS propaga.

Situs akan live di https://boompesantren.silverhawk.web.id

---

## Yang Perlu Anda Ganti

| Item | Lokasi | Keterangan |
|------|--------|------------|
| Nomor WhatsApp | Semua file HTML + `js/main.js` | Ganti `6281234567890` dengan nomor Anda |
| Email | Footer & kontak | `support@boompesantren.silverhawk.web.id` |
| Harga paket | `pages/website-pesantren.html` | Sesuaikan harga aktual |
| Testimoni | `data/testimoni.json` | Ganti dengan testimoni asli |
| Logo / Favicon | `assets/` | Sudah SVG original, bisa diganti |

---

## Palet Warna (Brand)

- **Primary Green:** `#0D5C4B` / `#059669` / `#10B981`
- **Accent (Muted Champagne Gold):** `#C9A227`
- **Background Ivory:** `#F8F6F1`
- **Text Charcoal:** `#1C1917`

Desain dibuat elegan, tenang, dan tidak norak — cocok untuk kalangan yang menghargai desain bersih ala Eropa.

---

## Firebase (Opsional Selanjutnya)

Untuk form order, auth admin, atau CMS sederhana:

1. Buat project di [Firebase Console](https://console.firebase.google.com)
2. Aktifkan Firestore + Authentication
3. Tambahkan Firebase SDK di `index.html` / halaman yang butuh
4. Data JSON yang ada bisa dipindah ke Firestore collection

Website tetap berjalan 100% static tanpa Firebase.

---

## Lisensi Konten

Website ini **original** (bukan salinan situs manapun). Anda bebas menggunakan, memodifikasi, dan men-deploy untuk keperluan BoomPesantren / SilverHawk.
