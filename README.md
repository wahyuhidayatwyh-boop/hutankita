# HutanKita - Portal Edukasi Hutan Tropis Indonesia

**Tagline:** Edukasi botani 3D, informasi pelestarian ekosistem hutan hujan tropis, dan pemantauan titik panas nusantara.

## Deskripsi Proyek

HutanKita adalah portal web satu halaman (single-page application statis) yang menyajikan edukasi seputar ekosistem hutan hujan tropis Indonesia. Proyek ini dikembangkan untuk kompetisi Web Design **Techno Versary Vol. II** dengan tema **"EcoDigital For Environment"**.

Melalui pendekatan visual interaktif berbasis web murni tanpa backend dan tanpa database, HutanKita menggabungkan pemodelan relief kepulauan 3D, anatomi pohon hujan tropis 3D, pemaparan krisis deforestasi dan kebakaran lahan gambut beserta landasan hukumnya, dokumentasi pemulihan hutan, serta peta sebaran titik panas (hotspot) satelit di Indonesia.

## Daftar Fitur

1. **Visualisasi 3D Relief Indonesia dan Peta Penjelasan (`#edukasi`)**: Menampilkan topografi kepulauan Indonesia menggunakan WebGL (Three.js) yang dapat dialihkan ke peta penjelasan distribusi kawasan hutan.
2. **Eksplorasi 3D Anatomi Pohon Hutan Hujan Tropis (`#anatomi-pohon`)**: Model interaktif pohon emergent yang memungkinkan pengunjung mempelajari fungsi biologis akar banir, batang kayu, dahan dan cabang, serta daun dan kanopi.
3. **Informasi Ancaman Perusakan Hutan dan Sanksi Pidana (`#perusakan-hutan`)**: Penjelasan dampak pembalakan liar dan kebakaran gambut, dilengkapi rincian sanksi pidana kehutanan berdasarkan Undang-Undang Republik Indonesia (UU No. 18 Tahun 2013, UU No. 32 Tahun 2009, UU No. 41 Tahun 1999, dan UU No. 5 Tahun 1990).
4. **Galeri Dokumentasi Aksi Lapangan (`#galeri-hutan`)**: Dokumentasi kegiatan patroli rimba, pemadaman bara gambut, rehabilitasi satwa, penegakan hukum, pemantauan titik panas, dan penanaman pohon endemik.
5. **Peta Interaktif Titik Panas Indonesia (`#peta-titik-api`)**: Peta berbasis Leaflet yang menampilkan sebaran titik panas dengan penyaringan berdasarkan wilayah kepulauan dan tingkat kepercayaan, rincian koordinat, serta pintasan pelaporan WhatsApp.
6. **Direktori Kontak Darurat Karhutla (`#kontak-darurat`)**: Daftar nomor telepon posko darurat kebakaran hutan dan penegakan hukum lingkungan yang dapat disalin atau dihubungi langsung.
7. **Pencarian Materi Cepat**: Fitur pencarian langsung di bilah navigasi untuk menemukan topik anatomi pohon, regulasi hukum, maupun bagian halaman.
8. **Pop-up Kuis Ekosistem 15 Soal dan Sertifikat Evaluasi (`#hkQuizDialog`)**: Kuis interaktif 15 soal berdasarkan materi website dengan pengacakan soal dan pembuatan otomatis Sertifikat & Badge Capaian Kuis beresolusi tinggi (`1400x1000` piksel).
9. **Pop-up Sertifikat dan Badge Ikrar Pelestarian Hutan (`#hkPledgeDialog`)**: Formulir komitmen pelestarian hutan yang disimpan di `localStorage` dan menghasilkan Sertifikat & Badge Ikrar resmi bertanda tangan Founder HutanKita dalam format PNG (`1400x1000` piksel).

## Teknologi dan Versi Pustaka

Proyek ini dibangun menggunakan teknologi web standar tanpa kerangka kerja (framework) tambahan, tanpa backend, dan tanpa database:

| Komponen / Pustaka | Versi | Kegunaan |
| :--- | :--- | :--- |
| HTML5 | Standar Living | Struktur semantik halaman web |
| CSS3 | Standar | Tata letak responsif, variabel desain (`:root`), dan transisi |
| JavaScript | ES6+ (Vanilla JS) | Logika antarmuka, pencarian, validasi formulir, dan interaksi DOM |
| Three.js | r128 | Mesin rendering WebGL untuk relief 3D Indonesia dan pohon 3D |
| Leaflet | 1.9.4 | Peta interaktif sebaran titik panas di wilayah Indonesia |
| Google Fonts (Outfit) | Bobot 300-900 | Tipografi utama di seluruh halaman |
| Esri World Imagery | ArcGIS REST Service | Citra satelit dasar dan batas wilayah pada peta Leaflet |

## Struktur Folder

Sesuai ketentuan buku panduan lomba, repositori ini disusun dengan struktur folder sebagai berikut:

```text
hutankita/
|-- README.md
|-- webdesign_HutanKita_technoversary_vol.II/
    |-- README.md
    |-- index.html
    |-- css/
    |   |-- style.css
    |   |-- tambahan.css
    |-- js/
    |   |-- map-assets.js
    |   |-- tree-assets.js
    |   |-- firms-hotspots-data.js
    |   |-- script.js
    |   |-- tambahan.js
    |-- data/
    |   |-- firms_viirs_snpp_indonesia_snapshot.csv
    |-- scripts/
    |   |-- convert_firms_csv.py
    |-- assets/
        |-- images/
        |   |-- akar1.webp
        |   |-- akar2.webp
        |   |-- batang1.webp
        |   |-- batang2.webp
        |   |-- bg-ancaman.webp
        |   |-- bg-galeri.webp
        |   |-- bg-hero-slide2.webp
        |   |-- bg-titik-cta.webp
        |   |-- crisis-kebakaran.webp
        |   |-- crisis-penebangan.webp
        |   |-- dahan1.webp
        |   |-- dahan2.webp
        |   |-- daun1.webp
        |   |-- daun2.webp
        |   |-- Deteksi Titik Api Real-Time.webp
        |   |-- Evakuasi & Pelepasliaran.webp
        |   |-- footer-beground.webp
        |   |-- logo-tab.webp
        |   |-- logo-technoversary.webp
        |   |-- Pemadaman Bara Gambut.webp
        |   |-- Penanaman Pohon Endemik.webp
        |   |-- Penyisiran Zona Inti Rimba.webp
        |   |-- penyitaan-kayu.webp
        |   |-- peta-bump.webp
        |   |-- peta-penjelasan.webp
        |   |-- peta.webp
        |   |-- pohon-3d.webp
        |   |-- pohon-bump.webp
        |   |-- satelit-drone.webp
        |   |-- satwa-orangutan.webp
        |   |-- ttd-wahyu-hidayat.png
        |-- videos/
            |-- footer-video.mp4
            |-- hero-video.mp4
```

## Cara Menjalankan Proyek

Tidak diperlukan proses kompilasi (build) atau instalasi paket (`npm install`). Pilih salah satu dari tiga cara berikut:

### a. Membuka `index.html` Secara Langsung
1. Masuk ke folder `webdesign_HutanKita_technoversary_vol.II`.
2. Klik dua kali berkas `index.html` untuk membukanya di peramban modern (Chrome, Edge, Firefox, atau Safari).
3. **Catatan koneksi internet:** Koneksi internet tetap diperlukan saat membuka halaman agar peramban dapat memuat pustaka Three.js (CDN CloudFlare), Leaflet (CDN unpkg), font Outfit (Google Fonts), serta tile citra satelit Esri World Imagery. Tekstur model 3D telah dikodekan ke dalam `js/map-assets.js` dan `js/tree-assets.js` (Base64) sehingga aman dari pembatasan CORS pada protokol `file://`.

### b. Menggunakan Server Lokal (Direkomendasikan)
Menjalankan proyek melalui server HTTP lokal memberikan perilaku pemuatan aset yang paling mendekati lingkungan produksi:

```bash
cd webdesign_HutanKita_technoversary_vol.II
python -m http.server 8000
```

Setelah perintah berjalan, buka peramban dan kunjungi alamat `http://localhost:8000`.

### c. Melalui GitHub Pages
Website dapat diakses secara daring melalui tautan berikut:
- **Link GitHub Pages:** https://wahyuhidayatwyh-boop.github.io/hutankita/

## Catatan Sumber Data Peta

1. **Citra Satelit Dasar:** Menggunakan layanan tile publik Esri World Imagery (`server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer`) dan label batas wilayah dari Esri Reference (`World_Boundaries_and_Places`) dengan atribusi resmi Esri diaktifkan (`attributionControl: true`).
2. **Data Titik Panas (Hotspot) Snapshot NASA FIRMS:**
   - Peta titik panas menampilkan **Snapshot 1-2 November 2026** dari data resmi **NASA FIRMS (VIIRS S-NPP 375m)** wilayah Indonesia (`data/firms_viirs_snpp_indonesia_snapshot.csv`), bukan klaim pemantauan langsung (real-time).
   - Skrip konversi `scripts/convert_firms_csv.py` menyaring titik di dalam batas geografis kepulauan Indonesia, mengurutkannya berdasarkan *Fire Radiative Power* (`frp`) tertinggi, dan mengambil maksimal **150 titik** ke dalam berkas data terpisah `js/firms-hotspots-data.js` agar peramban tetap ringan.
   - Cara menjalankan ulang konversi dari berkas CSV NASA FIRMS:
     ```bash
     python scripts/convert_firms_csv.py --input data/firms_viirs_snpp_indonesia_snapshot.csv --output js/firms-hotspots-data.js --limit 150
     ```
   - Atribut yang tersedia langsung dari CSV NASA FIRMS meliputi `latitude`, `longitude`, `bright_ti4` (brightness dalam Kelvin), `frp` (MW), `confidence`, `acq_date`, `acq_time` (UTC), dan `satellite`.
   - Atribut yang tidak tersedia di dalam CSV mentah NASA FIRMS tidak dikarang, melainkan diisi secara jujur atau diturunkan dengan aturan tertulis:
     - `name`: `"Titik " + lat + ", " + lng` (contoh: `"Titik -4.4843, 122.0778"`)
     - `province`: `"Tidak diketahui"` (CSV FIRMS tidak memuat batas administrasi provinsi)
     - `ecosystem`: `"Tidak diketahui"` (CSV FIRMS tidak memuat poligon tutupan lahan/ekosistem)
     - `isPeat`: `false` (CSV FIRMS tidak memuat poligon Kesatuan Hidrologis Gambut)
     - `region`: diturunkan secara deterministik dari rentang koordinat geografis (`lat`, `lng`) ke kelompok wilayah kepulauan (`Sumatera`, `Kalimantan`, `Jawa`, `Sulawesi`, `Papua`).
     - Pemetaan `confidence` (`l`/`n`/`h` atau `low`/`nominal`/`high`) ke `status`:
       - `high` / `h` dipetakan menjadi `status: "critical"` (`statusLabel: "Confidence Tinggi (High)"`, `confidence: 90`).
       - `nominal` / `n` dipetakan menjadi `status: "high"` (`statusLabel: "Confidence Nominal"`, `confidence: 65`).
       - `low` / `l` dipetakan menjadi `status: "medium"` (`statusLabel: "Confidence Rendah (Low)"`, `confidence: 35`).

## Tabel Kredit Media dan Pustaka

Seluruh pustaka pihak ketiga bersifat gratis dan sumber terbuka (open-source), sedangkan aset visual dan video di dalam folder `assets/` bersumber dari Pinterest untuk keperluan edukasi non-komersial lomba:

| Berkas / Komponen | Kategori | Sumber | Lisensi |
| :--- | :--- | :--- | :--- |
| `Three.js r128` | Pustaka JavaScript 3D | https://threejs.org (cdnjs) | MIT License |
| `Leaflet 1.9.4` | Pustaka Peta Interaktif | https://leafletjs.com (unpkg) | BSD-2-Clause License |
| `Outfit Font` | Tipografi | https://fonts.google.com/specimen/Outfit | SIL Open Font License (OFL) |
| `Esri World Imagery` | Tile Peta Dasar | Esri, Maxar, Earthstar Geographics, GIS User Community | Ketentuan Layanan Esri ArcGIS Online |
| `assets/videos/hero-video.mp4` | Video Latar Hero | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/videos/footer-video.mp4` | Video Bagian Ajakan | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/logo-tab.webp` | Ikon Tab Peramban | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/peta.webp` | Tekstur Peta Relief 3D | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/peta-bump.webp` | Tekstur Elevasi Peta 3D | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/peta-penjelasan.webp` | Infografik Peta Hutan | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/pohon-3d.webp` | Tekstur Pohon 3D Utuh | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/pohon-bump.webp` | Tekstur Kedalaman Pohon 3D | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/akar1.webp` | Foto Detail Akar Utama | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/akar2.webp` | Foto Detail Akar Sekunder | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/batang1.webp` | Foto Detail Batang Utama | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/batang2.webp` | Foto Detail Batang Sekunder | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/dahan1.webp` | Foto Detail Dahan Utama | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/dahan2.webp` | Foto Detail Dahan Sekunder | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/daun1.webp` | Foto Detail Daun Utama | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/daun2.webp` | Foto Detail Daun Sekunder | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/bg-hero-slide2.webp` | Latar Bagian Edukasi | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/bg-ancaman.webp` | Latar Bagian Ancaman Hutan | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/bg-galeri.webp` | Latar Bagian Galeri | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/bg-titik-cta.webp` | Latar Bagian Peta dan Ajakan | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/footer-beground.webp` | Latar Bagian Footer | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/crisis-penebangan.webp` | Ilustrasi Pembalakan Liar | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/crisis-kebakaran.webp` | Ilustrasi Kebakaran Gambut | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/satwa-orangutan.webp` | Foto Satwa Dilindungi | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/satelit-drone.webp` | Poster Video Dokumentasi | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/Penyisiran Zona Inti Rimba.webp` | Foto Galeri Dokumentasi 1 | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/Pemadaman Bara Gambut.webp` | Foto Galeri Dokumentasi 2 | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/Evakuasi & Pelepasliaran.webp` | Foto Galeri Dokumentasi 3 | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/penyitaan-kayu.webp` | Foto Galeri Dokumentasi 4 | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/Deteksi Titik Api Real-Time.webp` | Foto Galeri Dokumentasi 5 | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/Penanaman Pohon Endemik.webp` | Foto Galeri Dokumentasi 6 | Pinterest (https://id.pinterest.com) | Penggunaan Edukasi Non-Komersial |
| `assets/images/logo-technoversary.webp` | Logo Penyelenggara di Footer | Universitas Kuningan, FKOM, TI, HMTI, Techno Versary Vol. II | Aset Resmi Penyelenggara Lomba |
| `assets/images/ttd-wahyu-hidayat.png` | Tanda Tangan Sertifikat | Wahyu Hidayat (Founder HutanKita) | Hak Cipta Tim HutanKita |

## Skor Pengujian Lighthouse

Hasil pengujian menggunakan Google Lighthouse 13.5.0 melalui server lokal (`http://localhost:8000`) dalam mode penyamaran (Incognito):

| Kategori Pengujian | Skor Desktop | Skor Mobile |
| :--- | :--- | :--- |
| Performance | 50 | 42 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

## Data Tim Pengembang

- **Nama tim:** HutanKita
- **Ketua (satu-satunya anggota):** Wahyu Hidayat
- **Kampus:** Telkom University Purwokerto
- **Email:** wahyuhidayat.wyh@gmail.com
- **Instagram:** @whyuhdyat___ (https://instagram.com/whyuhdyat___)
- **Repo GitHub:** https://github.com/wahyuhidayatwyh-boop/hutankita
- **Link GitHub Pages:** https://wahyuhidayatwyh-boop.github.io/hutankita/

