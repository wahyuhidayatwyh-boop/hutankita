/**
 * ============================================================================
 * HUTANKITA - SISTEM DWIBAHASA (INDONESIAN & ENGLISH i18n ENGINE)
 * Menjamin 100% seluruh konten teks pada website dapat dialihkan secara instan
 * antara Bahasa Indonesia (ID) dan English (EN) tanpa me-reload peramban.
 * ============================================================================
 */

(function () {
  "use strict";

  const STORAGE_KEY = "hk_user_language";
  const DEFAULT_LANG = "id";

  const TRANSLATIONS = {
    id: {
      // PRELOADER & AKSESIBILITAS
      "page_title": "HutanKita - Edukasi Hutan Tropis Indonesia",
      "skip_link": "Lewati ke konten utama",
      "preloader_title": "HutanKita",
      "preloader_desc": "Menjelajahi keajaiban rimba & ekosistem paru-paru dunia nusantara",
      "preloader_loading_1": "Memuat aset visual rimba...",
      "preloader_loading_2": "Menyiapkan koordinat satelit...",
      "preloader_loading_3": "Merender vegetasi 3D nusantara...",
      "preloader_loading_4": "Siap menjelajahi HutanKita...",

      // NAVIGASI
      "nav_home": "Home",
      "nav_anatomy": "Anatomi",
      "nav_crisis": "Krisis Hutan",
      "nav_gallery": "Galeri",
      "nav_map": "Peta Api",
      "nav_contacts": "Kontak Darurat",
      "nav_search_placeholder": "Cari materi rimba, satwa, api...",
      "nav_search_clear_aria": "Hapus teks pencarian",
      "nav_search_btn_aria": "Cari",
      "nav_sound_muted": "Suara Mati (Klik untuk Menyalakan)",
      "nav_sound_unmuted": "Suara Aktif (Klik untuk Mematikan)",
      "nav_menu_toggle_aria": "Buka Menu Navigasi",

      // SEARCH DROPDOWN
      "search_hint": "Ketik minimal 2 huruf untuk mencari topik materi, undang-undang, atau satwa.",
      "search_no_results": "Tidak ditemukan materi untuk pencarian:",
      "search_cat_all": "Semua Kategori",

      "hero_desc": "Edukasi botani 3D, informasi pelestarian ekosistem hutan hujan tropis, dan pemantauan titik panas nusantara.",
      "edu_p1": "Menaungi lebih dari 120 juta hektar kawasan hutan tropis alami, kepulauan Indonesia menjadi rumah bagi lebih dari 30.000 spesies flora berpembuluh serta ribuan fauna khas yang tidak dapat dijumpai di belahan bumi mana pun.",
      "edu_p2": "Hutan tropis Indonesia berfungsi sebagai spons penyerap karbon global alami terbesar, mengunci miliaran ton cadangan karbon bumi sekaligus menghasilkan pasokan oksigen murni bagi kelangsungan generasi dunia.",
      "stats_global_label": "Hutan Tropis Dunia",
      "ref_wa_label": "WHATSAPP OFFICIAL",
      "ref_damkar_label": "PEMADAM KEBAKARAN",
      "ref_bpbd_label": "LOKASI PUSDALOPS",
      "ref_gakkum_label": "PENEGAKAN HUKUM",
      "cta_btn_share": "Bagikan Aksi",
      "cta_video_badge": "Dokumenter Rimba Tropis",
      "footer_sources_heading": "Sumber Data & Kemitraan",
      "footer_back_to_top": "Kembali ke Atas",
      // HERO SECTION
      "hero_kicker": "PARU-PARU DUNIA NUSANTARA",
      "hero_title": "Rimba Tropis Kita, Benteng Terakhir Kehidupan.",
      "hero_subtitle": "Menjelajahi keanekaragaman botani 3D, memantau sebaran titik panas satelit, dan menjaga warisan hutan hujan tropis Indonesia demi masa depan peradaban bumi.",
      "hero_btn_explore": "Eksplorasi Edukasi 3D",
      "hero_btn_pledge": "Ikrar Rimba Nusantara",
      "hero_btn_map": "Pantau Titik Panas",

      // STATISTIK EKOLOGIS
      "stats_peat_title": "Kubah Gambut Tropis",
      "stats_peat_num": "13.4 Juta Ha",
      "stats_peat_desc": "Cadangan karbon bawah tanah raksasa yang menopang stabilitas iklim planet.",
      "stats_canopy_title": "Tutupan Kanopi Alami",
      "stats_canopy_num": "120+ Juta Ha",
      "stats_canopy_desc": "Bentang hutan hujan tropis terluas ke-3 dunia dengan kanopi emergent menjulang 70m.",
      "stats_biodiversity_title": "Spesies Hayati Endemik",
      "stats_biodiversity_num": "300.000+ Spesies",
      "stats_biodiversity_desc": "Habitat utama Orangutan, Harimau Sumatera, Badak Jawa, dan flora purba bernilai tinggi.",

      // VIDEO DOKUMENTASI SLIDE HERO
      "video_section_kicker": "DOKUMENTASI KANOPY NUSANTARA",
      "video_section_title": "Melintasi Belantara Hutan Primer Kalimantan & Papua",
      "video_section_desc": "Video lanskap udara merekam kemegahan vegetasi tajuk rapat yang menjaga keseimbangan siklus hidrologi bumi.",

      // 3D RELIEF INDONESIA (#edukasi)
      "stats_canopy_num_short": "120+ Jt Ha",
      "relief_pill_3d": "Relief 3D",
      "relief_pill_data": "Data Penjelasan",
      "relief_hint_to_data": "Klik peta untuk melihat data penjelasan wilayah",
      "relief_hint_to_3d": "Klik peta untuk kembali ke 3D relief",
      "relief_kicker": "LANSKAP GEOGRAFIS & VEGETASI",
      "relief_title": "Relief Zamrud Khatulistiwa.",
      "relief_desc": "Indonesia merupakan rumah bagi kepulauan tropis terluas di dunia. Gerakkan mouse atau sentuh layar untuk memutar pemodelan 3D relief kepulauan dan sebaran tutupan tajuk hijau.",
      "relief_btn_view_data": "Buka Peta Penjelasan Data",
      "relief_btn_view_3d": "Kembali ke Model 3D Relief",
      "relief_scroll_cue": "Gulir ke bawah untuk eksplorasi anatomi pohon 3D",
      "relief_btn_zoom_in": "+ Zoom",
      "relief_btn_zoom_out": "− Zoom",
      "relief_btn_reset": "Reset Peta",
      "relief_modal_title": "Penjelasan Zona Tutupan Hutan Nusantara",
      "relief_modal_desc": "Infografis distribusi tutupan hutan hujan tropis dari dataran rendah Sumatera, jantung Kalimantan, hingga bentang perawan Papua.",
      "relief_modal_close": "Tutup Jendela",

      // ANATOMI POHON 3D (#anatomi-pohon)
      "tree_hotspot_leaves": "Daun & Kanopi",
      "tree_hotspot_branches": "Dahan & Cabang",
      "tree_hotspot_trunk": "Batang Kayu",
      "tree_hotspot_roots": "Akar Banir",
      "tree_btn_zoom_in": "+ Zoom",
      "tree_btn_zoom_out": "− Zoom",
      "tree_btn_reset": "Pohon Utuh",
      "tree_title": "Keajaiban Struktur Pohon Raksasa.",
      "tree_desc": "Pohon emergent hutan hujan tropis menjulang lebih dari 60 meter. Klik bagian pohon di atas untuk mempelajari detail lapisan struktur biologisnya.",
      "tree_tab_full": "Pohon Utuh",
      "tree_tab_roots": "Akar Banir",
      "tree_tab_trunk": "Batang Kayu",
      "tree_tab_branches": "Dahan & Cabang",
      "tree_tab_leaves": "Daun & Kanopi",
      "tree_btn_quiz": "Uji Pemahaman: Kuis Ekosistem & Sertifikat (15 Soal)",
      "tree_btn_back": "Kembali ke Pohon Utuh",
      "tree_btn_quiz_inline": "Mulai Kuis Anatomi & Rimba (15 Soal)",

      // BIOLOGI POHON
      "bio_roots_structure": "Akar papan (buttress roots) berstruktur pipih melebar hingga 5 meter ke samping dengan kedalaman jangkar vertikal yang menopang pohon emergent berbobot puluhan ton di tanah tropis tipis.",
      "bio_roots_benefit": "Mencegah pohon rubuh di tanah rawa gambut tipis, mengunci erosi tanah tepi sungai hutan, serta menjadi mikrokosmos pelindung jamur mikoriza simbiosis.",
      "bio_trunk_structure": "Lapisan kayu keras berdiameter hingga 3 meter tersusun atas xilem aktif dan floem silindris dengan kulit batang tebal dilapisi resin antibakteri.",
      "bio_trunk_benefit": "Menyerap dan mengalirkan 400+ liter air per hari ke pucuk tajuk tertinggi, serta menyimpan tonase karbon biomassa masif untuk menekan pemanasan global.",
      "bio_branches_structure": "Percabangan horizontal kokoh di ketinggian 40–50 meter yang membentuk kerangka arsitektur kanopi penangkap radiasi matahari maksimal.",
      "bio_branches_benefit": "Menjadi koridor lintasan primata arboreal (orangutan & gibbon) serta penopang ribuan epifit seperti anggrek bulan dan sarang burung langka.",
      "bio_leaves_structure": "Kanopi emergent dengan stomata adaptif, klorofil berkepadatan tinggi, serta lapisan lilin kutikula anti-evaporasi berlebih di bawah sengatan matahari khatulistiwa.",
      "bio_leaves_benefit": "Pabrik fotosintesis penghasil jutaan ton oksigen murni, pembentuk iklim mikro lembap, serta penangkap rintik hujan pertama agar tidak merusak permukaan tanah rimba.",

      // KRISIS PERUSAKAN HUTAN (#perusakan-hutan)
      "crisis_kicker": "ANCAMAN EKSPLOITASI & DEFORESTASI",
      "crisis_title": "Luka Menganga Rimba Kita.",
      "crisis_desc": "Setiap menit, hektaran hutan primer musnah akibat penebangan liar dan pembakaran lahan gambut. Berikut fakta krisis dan sanksi pidana tegas menurut hukum Republik Indonesia.",
      "crisis_tab_logging": "Pembalakan Liar (Illegal Logging)",
      "crisis_tab_fire": "Kebakaran Lahan Gambut",
      "crisis_logging_lead": "Penebangan tanpa izin membabat pohon purba seperti Meranti dan Ulin, membuka jalan masuk eksploitasi ilegal, serta memusnahkan habitat satwa endemik.",
      "crisis_logging_impact": "Dampak: Hilangnya tutupan kanopi penahan hujan, banjir bandang, erosi masif, dan kepunahan habitat Orangutan Sumatera serta Harimau.",
      "crisis_fire_lead": "Pengeringan kanal dan pembakaran gambut memicu bara bawah tanah sedalam 4–8 meter yang menghasilkan kabut asap beracun dan pelepasan karbon gigaton.",
      "crisis_fire_impact": "Dampak: Pelepasan jutaan ton karbon dioksida ke atmosfer, bencana ISPA bagi jutaan warga, matinya mikroorganisme tanah, dan kebakaran berkepanjangan.",
      "crisis_law_heading": "Dasar Hukum & Sanksi Pidana Kehutanan RI",
      "crisis_law_sub": "Undang-Undang RI menetapkan hukuman pidana berat bagi pelaku perusakan hutan:",
      "crisis_law_1": "<strong>UU No. 18 Tahun 2013 (P3H) Pasal 82-84:</strong> Penebangan liar dan perambahan kawasan hutan diancam pidana penjara paling lama <strong>15 tahun</strong> dan denda maksimal <strong>Rp 100 miliar</strong>.",
      "crisis_law_2": "<strong>UU No. 32 Tahun 2009 (PPLH) Pasal 108:</strong> Membakar hutan dan lahan gambut diancam pidana penjara paling lama <strong>10 tahun</strong> dan denda maksimal <strong>Rp 10 miliar</strong>.",
      "crisis_law_3": "<strong>UU No. 41 Tahun 1999 (Kehutanan) Pasal 78:</strong> Pembakaran hutan dengan sengaja diancam penjara <strong>15 tahun</strong> dan denda <strong>Rp 5 miliar</strong>.",
      "crisis_law_4": "<strong>UU No. 5 Tahun 1990 (KSDAE) Pasal 40:</strong> Menangkap atau membunuh satwa dilindungi diancam pidana penjara paling lama <strong>5 tahun</strong> dan denda <strong>Rp 100 juta</strong>.",

      // KARTU SANKSI PIDANA & PASAL (#hukuman-perusakan)
      "penalty_action_detail": "Detail",
      "penalty_action_close": "Tutup",
      "penalty_1_title": "Sanksi Penebangan Liar (Illegal Logging)",
      "penalty_1_law_tag": "UU No. 18 Tahun 2013 (P3H)",
      "penalty_1_m1_label": "Hukuman Kurungan",
      "penalty_1_m1_val": "3 - 15 Tahun",
      "penalty_1_m1_sub": "Pidana penjara maksimal",
      "penalty_1_m2_label": "Denda Finansial",
      "penalty_1_m2_val": "Rp 100 Miliar",
      "penalty_1_m2_sub": "Maksimal korporasi/cukong",
      "penalty_1_m3_label": "Sanksi Aset",
      "penalty_1_m3_val": "Sita & Rampas",
      "penalty_1_m3_sub": "Alat berat & kayu disita",
      "penalty_1_p1": "<strong>Pasal 82 - 84 UU P3H:</strong> Penebangan pohon tanpa izin di dalam kawasan hutan konservasi atau lindung, pemuatan, pengangkutan, serta penadahan kayu tanpa Surat Keterangan Sahnya Hasil Hutan (SKSHH) diancam kurungan penjara maksimal 15 tahun.",
      "penalty_1_p2": "<strong>Pemberatan Korporasi:</strong> Pelaku korporasi, direksi, komisaris, maupun pemodal/cukong kayu diancam pidana denda hingga <strong>Rp 100 Miliar</strong> dan pemberatan sepertiga hukuman pokok.",
      "penalty_1_p3": "<strong>Perampasan Total Aset:</strong> Seluruh alat berat (eskavator, buldoser), gergaji mesin (chainsaw), armada truk pengangkut, dan seluruh tegakan kayu hasil tebangan ilegal dirampas untuk kas negara.",

      "penalty_2_title": "Sanksi Pembakaran Hutan (Karhutla)",
      "penalty_2_law_tag": "UU No. 32/2009 (PPLH) & UU 41/1999",
      "penalty_2_m1_label": "Hukuman Kurungan",
      "penalty_2_m1_val": "3 - 15 Tahun",
      "penalty_2_m1_sub": "Pasal 108 UU PPLH",
      "penalty_2_m2_label": "Denda Pidana",
      "penalty_2_m2_val": "Rp 15 Miliar",
      "penalty_2_m2_sub": "Denda pencemaran lingkungan",
      "penalty_2_m3_label": "Sanksi Korporasi",
      "penalty_2_m3_val": "Cabut Izin HGU",
      "penalty_2_m3_sub": "Ganti rugi restorasi lahan",
      "penalty_2_p1": "<strong>Pasal 108 UU No. 32/2009:</strong> Setiap orang yang melakukan pembukaan lahan dengan cara membakar diancam pidana penjara paling singkat 3 tahun dan paling lama 10 hingga 15 tahun serta denda hingga Rp 15 Miliar.",
      "penalty_2_p2": "<strong>Prinsip Pertanggungjawaban Mutlak (Strict Liability):</strong> Korporasi pemegang izin HGU bertanggung jawab mutlak atas setiap titik kebakaran yang terjadi di areal konsesinya tanpa perlu pembuktian unsur kesalahan sengaja/lalai.",
      "penalty_2_p3": "<strong>Pencabutan Izin &amp; Pemulihan Ekologis:</strong> Pembekuan dan pencabutan izin usaha secara permanen, sita jaminan perdata, dan kewajiban ganti rugi pemulihan ekologis tanah gambut bernilai miliaran rupiah.",

      "penalty_3_title": "Perusakan Habitat Hayati & Satwa Dilindungi",
      "penalty_3_law_tag": "UU No. 5 Tahun 1990 (KSDAE)",
      "penalty_3_m1_label": "Hukuman Kurungan",
      "penalty_3_m1_val": "5 - 10 Tahun",
      "penalty_3_m1_sub": "Pasal 40 UU KSDAE",
      "penalty_3_m2_label": "Denda Pidana",
      "penalty_3_m2_val": "Rp 5 Miliar",
      "penalty_3_m2_sub": "Denda perusakan satwa/flora",
      "penalty_3_m3_label": "Status Perlindungan",
      "penalty_3_m3_val": "Pidana Berlapis",
      "penalty_3_m3_sub": "Flora & fauna dilindungi",
      "penalty_3_p1": "<strong>Pasal 21 &amp; 40 UU KSDAE:</strong> Larangan menangkap, melukai, membunuh, menyimpan, memiliki, memelihara, mengangkut, dan memperniagakan satwa yang dilindungi (seperti Orangutan, Harimau Sumatera, Gajah Sumatera, Badak Jawa) maupun bagian tubuhnya.",
      "penalty_3_p2": "<strong>Perlindungan Flora Purba Langka:</strong> Menjerat siapa pun yang menebang, merusak, mengambil, atau memindahkan tumbuhan langka dilindungi seperti Ulin purba, Damar, Cendana, Kantong Semar, dan bunga Padma Raksasa (<em>Rafflesia arnoldii</em>).",
      "penalty_3_p3": "<strong>Rehabilitasi Wajib:</strong> Pelaku dikenakan kewajiban pembiayaan penuh rehabilitasi satwa ke habitat aslinya dan restorasi zona konservasi suaka margasatwa.",

      // GALERI KONSERVASI (#galeri-hutan)
      "gallery_kicker": "AKSI NYATA PELESTARIAN",
      "gallery_title": "Jejak Langkah Penjaga Rimba.",
      "gallery_desc": "Dari patroli pencegahan jerat hingga rehabilitasi satwa liar endemik, inilah dedikasi tim konservasi menjaga keutuhan ekosistem hutan hujan Indonesia.",
      "gallery_filter_all": "Semua Aksi",
      "gallery_filter_patrol": "Patroli Rimba",
      "gallery_filter_fire": "Operasi Karhutla",
      "gallery_filter_wildlife": "Konservasi Satwa",
      "gallery_filter_law": "Penegakan Hukum",
      "gallery_filter_restoration": "Restorasi Endemik",
      "gallery_btn_detail": "Buka Rincian Cerita",
      "gallery_modal_close": "Tutup Cerita",

      // 6 ITEM GALERI DETAIL
      "gallery_item_1_title": "Penyisiran Zona Inti Rimba",
      "gallery_item_1_tag": "Patroli Kawasan",
      "gallery_item_1_desc": "Operasi terpadu polisi kehutanan menyusuri batas taman nasional untuk membongkar jerat satwa liar dan mencegah perambahan lahan konsesi.",
      "gallery_item_1_extra": "Patroli berkala ini melibatkan masyarakat mitra kehutanan (MMP) untuk memetakan jalur lintasan satwa dan menjaga keutuhan 120+ juta hektar tutupan kanopi alami nusantara.",

      "gallery_item_2_title": "Pemadaman Bara Gambut",
      "gallery_item_2_tag": "Operasi Karhutla",
      "gallery_item_2_desc": "Satuan Manggala Agni memadamkan api bawah tanah di kubah gambut yang rawan menjalar luas saat musim kemarau ekstrem.",
      "gallery_item_2_extra": "Pemadaman lahan gambut membutuhkan teknik penyuntikan air bertekanan tinggi hingga kedalaman 4-8 meter di bawah permukaan untuk mematikan sisa bara pembakaran biomassa.",

      "gallery_item_3_title": "Evakuasi & Pelepasliaran Orangutan",
      "gallery_item_3_tag": "Konservasi Satwa",
      "gallery_item_3_desc": "Penyelamatan induk dan bayi orangutan dari areal terdampak menuju stasiun rehabilitasi dan suaka hutan lindung alami.",
      "gallery_item_3_extra": "Orangutan (Pongo pygmaeus & Pongo abelii) merupakan spesies payung penyebar biji hutan tropis yang sangat krusial dalam regenerasi vegetasi pohon purba alami.",

      "gallery_item_4_title": "Penyitaan Armada & Kayu Ilegal",
      "gallery_item_4_tag": "Gakkum Kehutanan",
      "gallery_item_4_desc": "Penyegelan barang bukti buldoser, truk logging, dan ribuan batang kayu bulat hasil operasi tangkap tangan pembalakan liar.",
      "gallery_item_4_extra": "Gakkum KLHK berkoordinasi dengan Polri dan TNI memberlakukan sanksi pidana UU No. 18 Tahun 2013 hingga 15 tahun kurungan dan denda Rp 100 miliar bagi korporasi dan cukong kayu.",

      "gallery_item_5_title": "Deteksi Titik Api Real-Time",
      "gallery_item_5_tag": "Satelit Radar",
      "gallery_item_5_desc": "Pengawasan spasial resolusi tinggi untuk mendeteksi anomali suhu dan pembukaan tutupan tajuk pohon secara seketika dari orbit.",
      "gallery_item_5_extra": "Data radar satelit VIIRS SNPP 375m dan MODIS Terra/Aqua terintegrasi secara otomatis ke sistem monitoring Sipongi+ untuk peringatan dini sebelum bara membesar.",

      "gallery_item_6_title": "Penanaman Pohon Endemik",
      "gallery_item_6_tag": "Restorasi Ekologis",
      "gallery_item_6_desc": "Penanaman kembali bibit Meranti dan Ulin purba di lahan konservasi untuk memulihkan daya serap karbon alami.",
      "gallery_item_6_extra": "Program reboisasi menggunakan bibit pohon bernilai konservasi tinggi yang mampu bertahan di tanah miskin hara dan mengembalikan keanekaragaman hayati tanah rimba.",

      // PETA TITIK API NASA FIRMS (#peta-titik-api)
      "map_kicker": "Snapshot 1–2 November 2026, sumber NASA FIRMS",
      "map_title": "Sebaran Titik Panas & Bara Api Hutan",
      "map_desc": "Pemantauan visual sebaran titik api (thermal anomalies) di Indonesia dari sensor satelit VIIRS S-NPP (resolusi 375m) resmi NASA FIRMS. Data ini menunjukkan lokasi koordinat rawan karhutla.",
      "map_filter_island_all": "Semua Wilayah",
      "map_filter_island_sumatera": "Sumatera",
      "map_filter_island_kalimantan": "Kalimantan",
      "map_filter_island_jawa": "Jawa & Bali",
      "map_filter_island_sulawesi": "Sulawesi",
      "map_filter_island_papua": "Maluku & Papua",
      "map_filter_conf_all": "Semua Tingkat Kepercayaan",
      "map_filter_conf_high": "Confidence Tinggi (High)",
      "map_filter_conf_nom": "Confidence Nominal",
      "map_filter_conf_low": "Confidence Rendah (Low)",
      "map_toggle_table": "Tampilkan Tabel Data Hotspot",
      "map_toggle_map": "Tampilkan Peta Interaktif",
      "map_table_col_no": "No",
      "map_table_col_point": "Titik Koordinat",
      "map_table_col_island": "Pulau",
      "map_table_col_conf": "Tingkat Kepercayaan",
      "map_table_col_frp": "Intensitas FRP",
      "map_table_col_action": "Tindakan Cepat",
      "map_table_btn_focus": "Fokus di Peta",
      "map_table_btn_report": "Lapor via WA",
      "map_cluster_label": "LOKASI KLASTER",
      "map_cluster_title": "Pilih Wilayah Klaster",
      "map_status_label": "STATUS TITIK API",
      "map_status_title": "Pilih Status Titik Bara Api",
      "map_wa_title": "Chat WhatsApp Posko HutanKita",
      "map_reset_title": "Pusatkan Kembali Peta Indonesia",
      "map_reset_aria": "Reset Tampilan Peta",
      "ref_wa_title": "WhatsApp Posko HutanKita (0838-4365-3251)",
      "ref_damkar_title": "Panggil Damkar 113 Bebas Pulsa",
      "ref_damkar_val": "DAMKAR Siaga 113",
      "ref_bpbd_title": "Panggil Pusdalops BPBD 112",
      "ref_bpbd_val": "BPBD Bencana 112",
      "ref_gakkum_title": "Panggil Penegakan Hukum LHK & Polri 110",
      "ref_gakkum_val": "Gakkum & Polri 110",

      // AJAKAN AKSI (#ajakan-aksi)
      "cta_kicker": "Gerakan Pelestarian Rimba Nusantara",
      "cta_title": "Mari Jaga Rimba Kita, Demi Masa Depan Bumi",
      "cta_desc": "Setiap hembusan napas kita berhutang pada rimbunnya hutan tropis Indonesia. Nyatakan komitmen Anda melalui Ikrar Rimba dan bagikan sertifikat aksi nyata ini kepada dunia.",
      "cta_btn_pledge": "Buat Sertifikat Ikrar Rimba",
      "cta_btn_pledged": "Ikrar Anda Telah Tercatat!",
      "cta_btn_quiz": "Uji Kompetensi: Kuis 15 Soal",
      "wa_report_href": "https://wa.me/6283843653251?text=Halo%20Posko%20HutanKita%2C%20saya%20ingin%20melaporkan%20kejadian%20kebakaran%20hutan",
      "wa_report_short_href": "https://wa.me/6283843653251?text=Halo%20Posko%20HutanKita%2C%20saya%20ingin%20lapor%20karhutla",
      "wa_float_aria": "WhatsApp Posko HutanKita",

      // TENTANG KAMI (#tentang)
      "about_kicker": "TENTANG HUTANKITA",
      "about_title": "Gerakan Edukasi & Konservasi Rimba.",
      "about_desc": "HutanKita adalah platform edukasi digital mandiri tanpa database yang memadukan visualisasi 3D botani, kesadaran hukum kehutanan, dan pengawasan satelit untuk menumbuhkan kepedulian publik.",
      "about_card_vision_title": "Visi Konservasi",
      "about_card_vision_desc": "Mewujudkan generasi muda Indonesia yang literat dan proaktif menjaga keutuhan 120+ juta hektar hutan hujan tropis nusantara.",
      "about_card_mission_title": "Misi Kami",
      "about_card_mission_desc": "Menyajikan data ilmiah botani 3D yang mudah diakses, memaparkan sanksi pidana kehutanan, dan mengedukasi mitigasi kebakaran gambut.",
      "about_card_focus_title": "Fokus Pembelajaran",
      "about_card_focus_desc": "Studi botani akar hingga kanopi, regulasi hukum perusakan hutan RI, serta aksi nyata pemulihan satwa dan flora endemik.",

      // KONTAK DARURAT (#kontak-darurat)
      "contacts_kicker": "POSKO & KANAL PENGADUAN",
      "contacts_title": "Direktori Kontak Darurat Karhutla.",
      "contacts_desc": "Temukan nomor darurat posko penanganan kebakaran hutan dan pos pelaporan kejahatan lingkungan di sekitar Anda.",
      "contacts_call_btn": "Panggil Posko",
      "contacts_copy_btn": "Salin Nomor",
      "contacts_copied": "Nomor berhasil disalin!",

      // FORMULIR KONTAK (#kontak)
      "form_title": "Kirimkan Pesan atau Masukan",
      "form_subtitle": "Pesan akan dibuka langsung di aplikasi email resmi Anda.",
      "form_name_label": "Nama Lengkap",
      "form_name_placeholder": "Nama lengkap Anda",
      "form_email_label": "Alamat Email",
      "form_email_placeholder": "alamat.email@contoh.com",
      "form_msg_label": "Isi Pesan",
      "form_msg_placeholder": "Tuliskan pesan, pertanyaan, atau masukan untuk pelestarian hutan...",
      "form_btn_send": "Kirim Pesan via Email",
      "form_err_name": "Silakan isi nama Anda (minimal 2 huruf).",
      "form_err_email": "Silakan masukkan alamat email yang valid.",
      "form_err_msg": "Pesan tidak boleh kosong (minimal 8 huruf).",
      "form_success_toast": "Membuka aplikasi email untuk mengirim pesan...",

      // IKRAR RIMBA POPUP (#hkPledgeDialog)
      "pledge_dialog_title": "Sertifikat & Badge Ikrar Pelestarian Hutan",
      "pledge_dialog_desc": "Ketik nama lengkap Anda untuk mencetak Sertifikat & Badge Komitmen Resmi bertanda tangan Founder HutanKita.",
      "pledge_name_label": "Nama Lengkap pada Sertifikat",
      "pledge_name_placeholder": "Ketik nama lengkap Anda...",
      "pledge_items_label": "Butir Komitmen Ikrar Rimba Nusantara:",
      "pledge_item_1": "Mempelajari dan menyebarkan literasi pentingnya keanekaragaman hayati hutan hujan tropis.",
      "pledge_item_2": "Menolak dan melawan pembalakan liar serta perusakan habitat satwa langka nusantara.",
      "pledge_item_3": "Tanggap melaporkan anomali titik api dan mendukung aksi pemadaman bara gambut.",
      "pledge_item_4": "Menerapkan gaya hidup ramah lingkungan dan mendukung penanaman pohon endemik.",
      "pledge_preview_label": "Pratinjau Sertifikat & Badge Ikrar Resmi (1400x1000 px)",
      "pledge_btn_download": "Unduh Sertifikat Ikrar (PNG)",
      "pledge_btn_close": "Tutup Jendela",
      "pledge_download_success": "Sertifikat & Badge Ikrar (PNG) berhasil diunduh.",

      // KUIS POPUP (#hkQuizDialog)
      "quiz_dialog_title": "Kuis Edukasi Rimba Nusantara (15 Soal)",
      "quiz_dialog_title_active": "Pengerjaan Evaluasi Rimba Nusantara",
      "quiz_dialog_title_summary": "Hasil Evaluasi & Sertifikat Resmi",
      "quiz_dialog_desc": "Uji pemahaman Anda melalui 15 pertanyaan yang bersumber langsung dari materi anatomi pohon 3D, ancaman deforestasi, pasal undang-undang kehutanan, galeri konservasi, serta pemantauan satelit di halaman HutanKita. Selesaikan seluruh soal untuk mengunduh Sertifikat & Badge Kelulusan Resmi.",
      "quiz_start_name_label": "Nama Lengkap Peserta",
      "quiz_start_name_placeholder": "Ketik nama lengkap Anda (contoh: Wahyu Hidayat)",
      "quiz_start_name_error": "Silakan isi nama lengkap Anda (minimal 2 huruf) terlebih dahulu.",
      "quiz_start_name_helper": "Nama ini akan dicetak otomatis secara resmi pada Sertifikat Kompetensi & Badge Kelulusan Nilai Anda.",
      "quiz_briefing_heading": "Petunjuk & Cakupan Materi Kuis",
      "quiz_briefing_label_1": "Cakupan Materi Evaluasi:",
      "quiz_briefing_text_1": "Anatomi Pohon 3D (akar banir, kambium, xilem floem, kanopi emergent), Ekologi Hutan & Kubah Gambut Tropis, Regulasi Sanksi Pidana UU Kehutanan RI, Dokumentasi Aksi Konservasi Rimba, dan Deteksi Hotspot NASA FIRMS.",
      "quiz_briefing_label_2": "Format Pengerjaan & Jumlah Soal:",
      "quiz_briefing_text_2": "Total 15 Soal Pilihan Ganda (diacak setiap sesi). Setiap soal dilengkapi pembahasan edukasi interaktif langsung setelah memilih jawaban.",
      "quiz_briefing_label_3": "Penilaian & Sertifikat Resmi:",
      "quiz_briefing_text_3": "Setelah seluruh soal diselesaikan dan disubmit, skor nilai akhir (0–100) langsung keluar beserta Sertifikat & Badge Kelulusan Resmi (1400x1000 px) bertanda tangan Founder HutanKita yang siap diunduh (PNG).",
      "quiz_btn_start": "Mulai Mengerjakan Kuis (15 Soal)",
      "quiz_progress_prefix": "Soal",
      "quiz_progress_of": "dari",
      "quiz_progress_correct": "Benar",
      "quiz_user_badge_prefix": "Peserta:",
      "quiz_topic_prefix": "Topik:",
      "quiz_feedback_correct": "Jawaban tepat",
      "quiz_feedback_incorrect": "Jawaban belum tepat",
      "quiz_btn_next": "Soal berikutnya",
      "quiz_btn_submit": "Selesaikan & Submit Kuis",
      "quiz_score_kicker": "Hasil Evaluasi Pembelajaran",
      "quiz_score_title_template": "Nilai Akhir Anda: {score} / 100 ({correct} dari {total} Soal Tepat)",
      "quiz_score_desc_template": "Selamat {name}! Anda berhasil menyelesaikan seluruh evaluasi 15 soal dan meraih predikat \"{predicate}\". Nama Anda otomatis tercantum pada Sertifikat Resmi di bawah ini. Anda dapat mengunduhnya langsung dalam format PNG.",
      "quiz_btn_download_cert": "Unduh Sertifikat Nilai (PNG)",
      "quiz_btn_restart": "Ulangi Kuis (15 Soal)",
      "quiz_btn_close": "Tutup Jendela",
      "quiz_download_success": "Sertifikat & Badge Nilai Kuis (PNG) berhasil diunduh.",

      // PREDIKAT KUIS
      "predicate_high": "PENJAGA UTAMA RIMBA NUSANTARA",
      "predicate_mid": "SAHABAT KONSERVASI HUTAN TROPIS",
      "predicate_low": "PEMBELAJAR EKOSISTEM RIMBA",

      // SERTIFIKAT KANVAS TEKS
      "cert_top_pill": "HUTANKITA INDONESIA  •  PUSAT LITERASI EKOSISTEM & BOTANI",
      "cert_quiz_title": "SERTIFIKAT KOMPETENSI & BADGE",
      "cert_quiz_subtitle": "KELULUSAN EVALUASI EKOSISTEM HUTAN HUJAN TROPIS NUSANTARA (15 SOAL)",
      "cert_quiz_awarded_to": "Sertifikat kelulusan evaluasi literasi kehutanan ini diberikan kepada:",
      "cert_quiz_col_score": "NILAI EVALUASI",
      "cert_quiz_col_badge": "PREDIKAT BADGE KOMPETENSI",
      "cert_quiz_col_accuracy": "KETEPATAN SOAL",
      "cert_quiz_questions_correct": "Soal",
      "cert_quiz_summary_text": "Telah menyelesaikan uji pemahaman 15 soal mencakup Anatomi Pohon 3D (Akar Banir, Batang, Dahan, Kanopi), Ekologi Kubah Gambut, Sanksi Pidana UU Kehutanan (UU P3H, UU PPLH, UU KSDAE), serta Pemantauan Satelit Titik Panas.",
      "cert_pledge_title": "SERTIFIKAT IKRAR & BADGE KOMITMEN",
      "cert_pledge_subtitle": "PELESTARIAN EKOSISTEM HUTAN HUJAN TROPIS NUSANTARA",
      "cert_pledge_awarded_to": "Sertifikat komitmen moral pelestarian alam ini diterbitkan secara resmi kepada:",
      "cert_pledge_main_text": "Menyatakan sumpah dan ikrar setia untuk senantiasa menjaga kelestarian 120+ juta hektar rimba tropis Indonesia, menolak perusakan alam dan pembalakan liar, serta aktif menyebarkan edukasi perlindungan kubah gambut dan satwa liar endemik.",
      "cert_date_prefix": "Diterbitkan pada:",
      "cert_founder_role": "Founder HutanKita & Pengembang",

      // FOOTER
      "nav_home_mobile": "Beranda",
      "pledge_dialog_desc_full": "Isi nama lengkap Anda dan pilih satu komitmen pelestarian. Sertifikat & Badge resmi bertanda tangan Founder HutanKita akan dibuat secara otomatis dan siap diunduh dalam resolusi tinggi (1400x1000 piksel).",
      "pledge_name_label_full": "Nama Lengkap Penerima Sertifikat",
      "pledge_name_placeholder_full": "Tulis nama lengkap Anda untuk sertifikat ikrar",
      "pledge_choices_legend": "Pilih satu komitmen pelestarian rimba",
      "pledge_opt_1": "Tidak membuka lahan dengan membakar serta tidak membuang bara api di area vegetasi kering.",
      "pledge_opt_2": "Menghemat pemakaian kertas dan memilih produk hasil hutan yang bersertifikat lestari.",
      "pledge_opt_3": "Melaporkan temuan titik api, kabut asap, atau penebangan liar ke posko darurat kehutanan.",
      "pledge_opt_4": "Menanam dan merawat pohon lokal di lingkungan sekitar untuk menjaga resapan air dan cadangan karbon.",
      "pledge_opt_5": "Membagikan pengetahuan tentang fungsi hutan hujan tropis dan lahan gambut kepada keluarga serta teman.",
      "pledge_saved_note": "Perubahan disimpan otomatis di peramban perangkat ini.",
      "pledge_preview_label_full": "Pratinjau Sertifikat & Badge Ikrar (1400x1000 px)",
      "footer_tagline": "Portal Edukasi Hutan Tropis Indonesia",
      "footer_tagline_long": "Platform edukasi sains botani, visualisasi 3D anatomi pohon, investigasi ancaman perusakan alam, serta pemantauan terpadu kebakaran hutan tropis nusantara.",
      "footer_desc": "Edukasi botani 3D, informasi pelestarian ekosistem hutan hujan tropis, dan pemantauan titik panas nusantara.",
      "footer_nav_heading": "Navigasi Cepat",
      "footer_link_home": "Beranda Utama",
      "footer_link_anatomy": "Anatomi Pohon & Botani 3D",
      "footer_link_crisis": "Krisis Perusakan Hutan",
      "footer_link_gallery": "Galeri Rekaman Aksi",
      "footer_link_map": "Peta Hotspot Satelit",
      "footer_link_contacts": "Kontak Posko Darurat",
      "footer_contacts_heading": "Kontak Pengaduan",
      "footer_emerg_1": "<strong>Damkar Nasional:</strong> <a href=\"tel:113\">113 / 112</a>",
      "footer_emerg_2": "<strong>Posko HutanKita:</strong> <a href=\"https://wa.me/6283843653251?text=Halo%20Posko%20HutanKita%2C%20saya%20ingin%20melaporkan%20kejadian%20kebakaran%20hutan\" target=\"_blank\" rel=\"noopener noreferrer\">0838-4365-3251</a>",
      "footer_emerg_3": "<strong>BPBD Pusdalops:</strong> <a href=\"tel:112\">112 (Bebas Pulsa)</a>",
      "footer_emerg_4": "<strong>Polisi Gakkum:</strong> <a href=\"tel:110\">110 (Pengaduan Pidana)</a>",
      "footer_emerg_5": "<strong>Medis &amp; ISPA:</strong> <a href=\"tel:119\">119 (Darurat Ambulans)</a>",
      "footer_src_1": "Kementerian Lingkungan Hidup & Kehutanan (Sipongi+)",
      "footer_src_2": "NASA Earthdata (FIRMS Active Fire System)",
      "footer_src_3": "Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)",
      "footer_src_4": "Badan Nasional Penanggulangan Bencana (BNPB)",
      "footer_src_5": "Global Forest Watch (GFW)",
      "footer_copy": "&copy; 2026 <strong>HutanKita Indonesia</strong> &bull; Didedikasikan untuk Pelestarian Rimba Tropis &amp; Perlindungan Paru-Paru Dunia.",
      "footer_org_heading": "Penyelenggara Lomba",
      "footer_org_text": "Techno Versary Vol. II — \"EcoDigital For Environment\" diselenggarakan oleh HIMA-TI FKOM Universitas Kuningan.",
      "footer_copyright": "© 2026 HutanKita. Hak cipta dilindungi undang-undang. Dibuat oleh Tim HutanKita (Wahyu Hidayat)."
    },

    en: {
      "hero_desc": "3D botanical education, tropical rainforest ecosystem conservation information, and archipelago satellite hotspot monitoring.",
      "edu_p1": "Sheltering over 120 million hectares of natural tropical forest, the Indonesian archipelago is home to more than 30,000 vascular plant species and thousands of distinctive fauna found nowhere else on earth.",
      "edu_p2": "Indonesia's tropical forests function as the planet's largest natural carbon sponge, sequestering billions of tons of global carbon reserves while supplying pure oxygen for future generations.",
      "stats_global_label": "World's Tropical Forests",
      "ref_wa_label": "OFFICIAL WHATSAPP",
      "ref_damkar_label": "FIRE BRIGADE (DAMKAR)",
      "ref_bpbd_label": "BPBD DISASTER OPS",
      "ref_gakkum_label": "LAW ENFORCEMENT",
      "cta_btn_share": "Share Action",
      "cta_video_badge": "Rainforest Documentary",
      "footer_sources_heading": "Data Sources & Partnerships",
      "footer_back_to_top": "Back to Top",
      // PRELOADER & ACCESSIBILITY
      "page_title": "HutanKita - Indonesian Tropical Rainforest Education",
      "skip_link": "Skip to main content",
      "preloader_title": "HutanKita",
      "preloader_desc": "Exploring the wonders of the rainforest & the archipelago's lungs of the world",
      "preloader_loading_1": "Loading rainforest visual assets...",
      "preloader_loading_2": "Preparing satellite coordinates...",
      "preloader_loading_3": "Rendering 3D vegetation model...",
      "preloader_loading_4": "Ready to explore HutanKita...",

      // NAVIGATION
      "nav_home": "Home",
      "nav_anatomy": "Anatomy",
      "nav_crisis": "Forest Crisis",
      "nav_gallery": "Gallery",
      "nav_map": "Hotspot Map",
      "nav_contacts": "Emergency Contacts",
      "nav_search_placeholder": "Search rainforest topics, wildlife, fires...",
      "nav_search_clear_aria": "Clear search input",
      "nav_search_btn_aria": "Search",
      "nav_sound_muted": "Sound Muted (Click to Unmute)",
      "nav_sound_unmuted": "Sound Active (Click to Mute)",
      "nav_menu_toggle_aria": "Toggle Navigation Menu",

      // SEARCH DROPDOWN
      "search_hint": "Type at least 2 letters to search forest topics, laws, or wildlife.",
      "search_no_results": "No results found for search:",
      "search_cat_all": "All Categories",

      // HERO SECTION
      "hero_kicker": "THE ARCHIPELAGO'S LUNGS OF THE WORLD",
      "hero_title": "Our Tropical Rainforest, The Last Stronghold of Life.",
      "hero_subtitle": "Exploring 3D botanical biodiversity, monitoring satellite hotspots, and safeguarding Indonesia's tropical rainforest heritage for the future of Earth's civilization.",
      "hero_btn_explore": "Explore 3D Education",
      "hero_btn_pledge": "Rainforest Pledge",
      "hero_btn_map": "Monitor Hotspots",

      // ECOLOGICAL STATS
      "stats_peat_title": "Tropical Peat Domes",
      "stats_peat_num": "13.4 Million Ha",
      "stats_peat_desc": "Giant subterranean carbon reserves sustaining planetary climate stability.",
      "stats_canopy_title": "Natural Canopy Cover",
      "stats_canopy_num": "120+ Million Ha",
      "stats_canopy_desc": "The world's 3rd largest tropical rainforest with emergent canopies soaring 70m.",
      "stats_biodiversity_title": "Endemic Wildlife Species",
      "stats_biodiversity_num": "300,000+ Species",
      "stats_biodiversity_desc": "Prime sanctuary for Orangutans, Sumatran Tigers, Javan Rhinos, and ancient flora.",

      // VIDEO DOCUMENTARY HERO SLIDE
      "video_section_kicker": "ARCHIPELAGO CANOPY ARCHIVES",
      "video_section_title": "Traversing the Primary Jungles of Borneo & Papua",
      "video_section_desc": "Aerial landscape footage capturing the majesty of dense canopies regulating Earth's hydrological cycle.",

      // 3D RELIEF INDONESIA (#edukasi)
      "stats_canopy_num_short": "120+ M Ha",
      "relief_pill_3d": "3D Relief",
      "relief_pill_data": "Data Overview",
      "relief_hint_to_data": "Click map to view regional canopy data",
      "relief_hint_to_3d": "Click map to return to 3D relief",
      "relief_kicker": "GEOGRAPHICAL LANDSCAPE & VEGETATION",
      "relief_title": "Equatorial Emerald Relief.",
      "relief_desc": "Indonesia is home to the world's most expansive tropical archipelago. Move your mouse or touch the screen to rotate the 3D island terrain and green canopy distribution.",
      "relief_btn_view_data": "Open Data Explanation Map",
      "relief_btn_view_3d": "Return to 3D Relief Model",
      "relief_scroll_cue": "Scroll down to explore 3D tree anatomy",
      "relief_btn_zoom_in": "+ Zoom",
      "relief_btn_zoom_out": "− Zoom",
      "relief_btn_reset": "Reset Map",
      "relief_modal_title": "Archipelago Forest Canopy Zone Overview",
      "relief_modal_desc": "Infographic on tropical rainforest canopy distribution spanning lowland Sumatra, the heart of Borneo, to pristine Papua.",
      "relief_modal_close": "Close Window",

      // 3D TREE ANATOMY (#anatomi-pohon)
      "tree_hotspot_leaves": "Leaves & Canopy",
      "tree_hotspot_branches": "Branches & Limbs",
      "tree_hotspot_trunk": "Woody Trunk",
      "tree_hotspot_roots": "Buttress Roots",
      "tree_btn_zoom_in": "+ Zoom",
      "tree_btn_zoom_out": "− Zoom",
      "tree_btn_reset": "Full Tree",
      "tree_title": "Wonders of the Giant Tree Structure.",
      "tree_desc": "Emergent tropical rainforest trees soar over 60 meters high. Click on the tree parts above to examine their biological structural layers.",
      "tree_tab_full": "Full Tree",
      "tree_tab_roots": "Buttress Roots",
      "tree_tab_trunk": "Woody Trunk",
      "tree_tab_branches": "Branches & Limbs",
      "tree_tab_leaves": "Leaves & Canopy",
      "tree_btn_quiz": "Test Knowledge: Ecosystem Quiz & Certificate (15 Questions)",
      "tree_btn_back": "Return to Full Tree",
      "tree_btn_quiz_inline": "Start Anatomy & Rainforest Quiz (15 Questions)",

      // TREE BIOLOGY
      "bio_roots_structure": "Flanged buttress roots expanding up to 5 meters laterally with vertical anchors stabilizing emergent trees weighing tens of tons in thin rainforest soil.",
      "bio_roots_benefit": "Prevents windthrow in shallow peat swamp soils, anchors riverbank soil against erosion, and shields symbiotic mycorrhizal fungi.",
      "bio_trunk_structure": "Hardwood cylinder up to 3 meters in diameter composed of active xylem and phloem, shielded by thick resinous antibacterial bark.",
      "bio_trunk_benefit": "Transports 400+ liters of water daily to topmost crown layers and sequesters massive biomass carbon tonnage to mitigate global warming.",
      "bio_branches_structure": "Sturdy horizontal scaffolding at 40–50 meters height forming a robust architecture that captures maximum solar radiation.",
      "bio_branches_benefit": "Serves as an arboreal primate highway (orangutans & gibbons) and supports thousands of epiphytes such as orchids and rare bird nests.",
      "bio_leaves_structure": "Emergent canopy featuring adaptive stomata, dense chlorophyll packaging, and waxy cuticles preventing excessive evaporation under equatorial sun.",
      "bio_leaves_benefit": "Photosynthesis powerhouse producing pure oxygen, creating humid microclimates, and buffering raindrops to protect the forest floor.",

      // FOREST CRISIS (#perusakan-hutan)
      "crisis_kicker": "THREATS OF EXPLOITATION & DEFORESTATION",
      "crisis_title": "The Bleeding Scars of Our Forest.",
      "crisis_desc": "Every minute, hectares of primary rainforest vanish due to illegal logging and peatland fires. Here are the crisis facts and strict legal penal sanctions under Indonesian law.",
      "crisis_tab_logging": "Illegal Logging",
      "crisis_tab_fire": "Peatland Wildfires",
      "crisis_logging_lead": "Unlicensed felling clears ancient trees such as Meranti and Ironwood, opening pathways for illegal exploitation and destroying endemic habitats.",
      "crisis_logging_impact": "Impact: Loss of rainfall-buffering canopy, flash flooding, massive erosion, and extinction of Sumatran Orangutan and Tiger habitats.",
      "crisis_fire_lead": "Canal draining and peat burning ignite subterranean fires 4–8 meters deep, generating toxic haze and releasing gigatons of stored carbon.",
      "crisis_fire_impact": "Impact: Millions of tons of CO2 emitted, severe respiratory illness for millions of citizens, destruction of soil biota, and lingering fires.",
      "crisis_law_heading": "Legal Basis & Indonesian Forestry Penal Sanctions",
      "crisis_law_sub": "Indonesian Law imposes severe criminal penalties for perpetrators of forest destruction:",
      "crisis_law_1": "<strong>Law No. 18/2013 (P3H) Articles 82-84:</strong> Illegal logging and forest encroachment carry up to <strong>15 years imprisonment</strong> and fines up to <strong>IDR 100 billion</strong>.",
      "crisis_law_2": "<strong>Law No. 32/2009 (PPLH) Article 108:</strong> Burning forests and peatlands carries up to <strong>10 years imprisonment</strong> and fines up to <strong>IDR 10 billion</strong>.",
      "crisis_law_3": "<strong>Law No. 41/1999 (Forestry) Article 78:</strong> Intentional forest burning carries up to <strong>15 years imprisonment</strong> and fines of <strong>IDR 5 billion</strong>.",
      "crisis_law_4": "<strong>Law No. 5/1990 (KSDAE) Article 40:</strong> Capturing or killing protected wildlife carries up to <strong>5 years imprisonment</strong> and fines of <strong>IDR 100 million</strong>.",

      // PENALTY CARDS & ARTICLES (#hukuman-perusakan)
      "penalty_action_detail": "Details",
      "penalty_action_close": "Close",
      "penalty_1_title": "Illegal Logging Penalties",
      "penalty_1_law_tag": "Law No. 18/2013 (P3H)",
      "penalty_1_m1_label": "Imprisonment",
      "penalty_1_m1_val": "3 - 15 Years",
      "penalty_1_m1_sub": "Maximum prison sentence",
      "penalty_1_m2_label": "Financial Fine",
      "penalty_1_m2_val": "IDR 100 Billion",
      "penalty_1_m2_sub": "Max for corporations/financiers",
      "penalty_1_m3_label": "Asset Seizure",
      "penalty_1_m3_val": "Seize & Confiscate",
      "penalty_1_m3_sub": "Heavy machinery & timber seized",
      "penalty_1_p1": "<strong>Articles 82–84, Law No. 18/2013 (P3H):</strong> Unauthorized felling in conservation or protected forests, as well as loading, transporting, or receiving timber without Legal Forest Product Certificates (SKSHH), carries up to 15 years imprisonment.",
      "penalty_1_p2": "<strong>Corporate Aggravation:</strong> Corporate perpetrators, directors, commissioners, and timber financiers face fines up to <strong>IDR 100 Billion</strong> plus an additional one-third of the primary sentence.",
      "penalty_1_p3": "<strong>Total Asset Confiscation:</strong> All heavy machinery (excavators, bulldozers), chainsaws, logging truck fleets, and all illegally felled timber are confiscated for the state treasury.",

      "penalty_2_title": "Forest & Peatland Arson Penalties",
      "penalty_2_law_tag": "Law No. 32/2009 (PPLH) & Law No. 41/1999",
      "penalty_2_m1_label": "Imprisonment",
      "penalty_2_m1_val": "3 - 15 Years",
      "penalty_2_m1_sub": "Article 108, Law PPLH",
      "penalty_2_m2_label": "Criminal Fine",
      "penalty_2_m2_val": "IDR 15 Billion",
      "penalty_2_m2_sub": "Environmental pollution fine",
      "penalty_2_m3_label": "Corporate Sanctions",
      "penalty_2_m3_val": "Permit Revocation",
      "penalty_2_m3_sub": "Land restoration compensation",
      "penalty_2_p1": "<strong>Article 108, Law No. 32/2009:</strong> Anyone clearing land by burning faces a minimum of 3 years and up to 10–15 years imprisonment, alongside fines reaching IDR 15 Billion.",
      "penalty_2_p2": "<strong>Strict Liability Principle:</strong> Concession-holding corporations bear absolute liability for every fire outbreak within their permit areas without requiring proof of intent or negligence.",
      "penalty_2_p3": "<strong>License Revocation &amp; Ecological Restoration:</strong> Permanent suspension and revocation of business permits, civil asset seizure, and mandatory peatland ecological restoration compensation worth billions of rupiah.",

      "penalty_3_title": "Protected Habitat & Wildlife Destruction",
      "penalty_3_law_tag": "Law No. 5/1990 (KSDAE)",
      "penalty_3_m1_label": "Imprisonment",
      "penalty_3_m1_val": "5 - 10 Years",
      "penalty_3_m1_sub": "Article 40, Law KSDAE",
      "penalty_3_m2_label": "Criminal Fine",
      "penalty_3_m2_val": "IDR 5 Billion",
      "penalty_3_m2_sub": "Flora & fauna destruction fine",
      "penalty_3_m3_label": "Protection Status",
      "penalty_3_m3_val": "Layered Charges",
      "penalty_3_m3_sub": "Protected flora & fauna",
      "penalty_3_p1": "<strong>Articles 21 &amp; 40, Law No. 5/1990 (KSDAE):</strong> Prohibits capturing, injuring, killing, possessing, transporting, or trading protected wildlife (such as Orangutans, Sumatran Tigers, Sumatran Elephants, Javan Rhinos) or their body parts.",
      "penalty_3_p2": "<strong>Protection of Rare Ancient Flora:</strong> Prosecutes anyone felling, damaging, harvesting, or relocating protected rare plants such as ancient Ironwood, Damar, Sandalwood, Pitcher Plants, and the Giant Corpse Flower (<em>Rafflesia arnoldii</em>).",
      "penalty_3_p3": "<strong>Mandatory Rehabilitation:</strong> Perpetrators are legally required to fully fund wildlife rehabilitation back to natural habitats and restore wildlife sanctuary conservation zones.",

      // CONSERVATION GALLERY (#galeri-hutan)
      "gallery_kicker": "TANGIBLE CONSERVATION ACTIONS",
      "gallery_title": "Footprints of the Forest Guardians.",
      "gallery_desc": "From anti-poaching patrols to endemic wildlife rehabilitation, this is the conservation team's dedication to preserving Indonesia's rainforest ecosystem.",
      "gallery_filter_all": "All Actions",
      "gallery_filter_patrol": "Ranger Patrols",
      "gallery_filter_fire": "Wildfire Operations",
      "gallery_filter_wildlife": "Wildlife Conservation",
      "gallery_filter_law": "Law Enforcement",
      "gallery_filter_restoration": "Endemic Restoration",
      "gallery_btn_detail": "Read Full Story",
      "gallery_modal_close": "Close Story",

      // 6 GALLERY ITEMS
      "gallery_item_1_title": "Core Rainforest Zone Patrol",
      "gallery_item_1_tag": "Area Patrol",
      "gallery_item_1_desc": "Joint forest police operations patrolling national park boundaries to dismantle snares and prevent illegal concession encroachment.",
      "gallery_item_1_extra": "Periodic patrols engage local forestry partners (MMP) to map wildlife corridors and safeguard 120+ million hectares of natural canopy.",

      "gallery_item_2_title": "Subterranean Peat Fire Suppression",
      "gallery_item_2_tag": "Wildfire Operation",
      "gallery_item_2_desc": "Manggala Agni brigades dousing underground smoldering fires across peat domes vulnerable during extreme dry seasons.",
      "gallery_item_2_extra": "Peat firefighting requires high-pressure water injection up to 4-8 meters deep to extinguish smoldering biomass embers.",

      "gallery_item_3_title": "Orangutan Rescue & Release",
      "gallery_item_3_tag": "Fauna Conservation",
      "gallery_item_3_desc": "Rescuing mother and infant orangutans from affected areas to rehabilitation stations and natural protected forest reserves.",
      "gallery_item_3_extra": "Orangutans (Pongo pygmaeus & Pongo abelii) are keystone seed dispersers vital for the natural regeneration of ancient tropical trees.",

      "gallery_item_4_title": "Seizure of Illegal Logs & Fleet",
      "gallery_item_4_tag": "Forest Law Enforcement",
      "gallery_item_4_desc": "Confiscation of bulldozers, logging trucks, and thousands of round timber logs from undercover illegal logging operations.",
      "gallery_item_4_extra": "KLHK Law Enforcement coordinates with Police and Military to enforce Law No. 18/2013 penalties of up to 15 years prison and IDR 100B fines.",

      "gallery_item_5_title": "Real-Time Satellite Thermal Detection",
      "gallery_item_5_tag": "Satellite Radar",
      "gallery_item_5_desc": "High-resolution orbital surveillance detecting temperature anomalies and sudden canopy openings directly from space.",
      "gallery_item_5_extra": "VIIRS SNPP 375m and MODIS Terra/Aqua radar data feed automatically into Sipongi+ early warning systems before flames spread.",

      "gallery_item_6_title": "Endemic Tree Reforestation",
      "gallery_item_6_tag": "Ecological Restoration",
      "gallery_item_6_desc": "Replanting native Meranti and ancient Ironwood saplings in conservation lands to restore natural carbon absorption capacity.",
      "gallery_item_6_extra": "Reforestation utilizes high conservation value native species capable of thriving in depleted soils and revitalizing biodiversity.",

      // NASA FIRMS HOTSPOT MAP (#peta-titik-api)
      "map_kicker": "Snapshot November 1–2, 2026, NASA FIRMS source",
      "map_title": "Satellite Hotspots & Wildfire Distribution",
      "map_desc": "Visual spatial monitoring of thermal anomalies across Indonesia from NASA FIRMS VIIRS S-NPP 375m satellite sensors. Displays coordinate data of fire-prone zones.",
      "map_filter_island_all": "All Regions",
      "map_filter_island_sumatera": "Sumatra",
      "map_filter_island_kalimantan": "Borneo (Kalimantan)",
      "map_filter_island_jawa": "Java & Bali",
      "map_filter_island_sulawesi": "Sulawesi",
      "map_filter_island_papua": "Maluku & Papua",
      "map_filter_conf_all": "All Confidence Levels",
      "map_filter_conf_high": "High Confidence",
      "map_filter_conf_nom": "Nominal Confidence",
      "map_filter_conf_low": "Low Confidence",
      "map_toggle_table": "Show Hotspot Data Table",
      "map_toggle_map": "Show Interactive Map",
      "map_table_col_no": "No",
      "map_table_col_point": "Coordinates",
      "map_table_col_island": "Region",
      "map_table_col_conf": "Confidence Level",
      "map_table_col_frp": "FRP Intensity",
      "map_table_col_action": "Quick Action",
      "map_table_btn_focus": "Focus on Map",
      "map_table_btn_report": "Report via WA",
      "map_cluster_label": "CLUSTER LOCATION",
      "map_cluster_title": "Select Cluster Region",
      "map_status_label": "HOTSPOT STATUS",
      "map_status_title": "Select Hotspot Status",
      "map_wa_title": "Chat HutanKita Command Post on WhatsApp",
      "map_reset_title": "Re-center Indonesia Map",
      "map_reset_aria": "Reset Map View",
      "ref_wa_title": "WhatsApp HutanKita Command Post (0838-4365-3251)",
      "ref_damkar_title": "Call Fire Brigade 113 (Toll-Free)",
      "ref_damkar_val": "DAMKAR Hotline 113",
      "ref_bpbd_title": "Call BPBD Disaster Ops 112",
      "ref_bpbd_val": "BPBD Emergency 112",
      "ref_gakkum_title": "Call Forestry Law Enforcement & Police 110",
      "ref_gakkum_val": "Forest Law & Police 110",

      // CALL TO ACTION (#ajakan-aksi)
      "cta_kicker": "Archipelago Rainforest Conservation Movement",
      "cta_title": "Let's Protect Our Rainforest, For Earth's Future",
      "cta_desc": "Every breath we take owes its vitality to Indonesia's lush tropical forests. Affirm your commitment with the Rainforest Pledge and share your certificate with the world.",
      "cta_btn_pledge": "Generate Rainforest Pledge Certificate",
      "cta_btn_pledged": "Your Pledge Is Recorded!",
      "cta_btn_quiz": "Take Ecosystem Quiz (15 Questions)",
      "wa_report_href": "https://wa.me/6283843653251?text=Hello%20HutanKita%20Command%20Post%2C%20I%20would%20like%20to%20report%20a%20forest%20fire%20incident",
      "wa_report_short_href": "https://wa.me/6283843653251?text=Hello%20HutanKita%20Command%20Post%2C%20I%20would%20like%20to%20report%20a%20wildfire",
      "wa_float_aria": "WhatsApp HutanKita Command Post",

      // ABOUT US (#tentang)
      "about_kicker": "ABOUT HUTANKITA",
      "about_title": "Rainforest Education & Conservation Movement.",
      "about_desc": "HutanKita is an independent, database-free digital education platform combining 3D botanical modeling, forestry legal literacy, and satellite surveillance to foster public environmental stewardship.",
      "about_card_vision_title": "Conservation Vision",
      "about_card_vision_desc": "Empowering young Indonesians to be literate and proactive guardians of 120+ million hectares of archipelago rainforest.",
      "about_card_mission_title": "Our Mission",
      "about_card_mission_desc": "Delivering accessible 3D botanical science, promoting legal forestry literacy, and educating on peatland fire mitigation.",
      "about_card_focus_title": "Learning Focus",
      "about_card_focus_desc": "Botanical studies from roots to canopy, Indonesian forestry legal sanctions, and tangible wildlife restoration actions.",

      // EMERGENCY CONTACTS (#kontak-darurat)
      "contacts_kicker": "EMERGENCY POSTS & REPORTING",
      "contacts_title": "Wildfire Emergency Contact Directory.",
      "contacts_desc": "Find emergency hotline numbers for wildfire response units and environmental crime reporting posts near you.",
      "contacts_call_btn": "Call Hotline",
      "contacts_copy_btn": "Copy Number",
      "contacts_copied": "Number copied to clipboard!",

      // CONTACT FORM (#kontak)
      "form_title": "Send a Message or Feedback",
      "form_subtitle": "Your message will open directly in your official email client.",
      "form_name_label": "Full Name",
      "form_name_placeholder": "Your full name",
      "form_email_label": "Email Address",
      "form_email_placeholder": "email.address@example.com",
      "form_msg_label": "Message Content",
      "form_msg_placeholder": "Write your message, inquiries, or feedback for rainforest conservation...",
      "form_btn_send": "Send Message via Email",
      "form_err_name": "Please enter your name (at least 2 characters).",
      "form_err_email": "Please enter a valid email address.",
      "form_err_msg": "Message cannot be empty (at least 8 characters).",
      "form_success_toast": "Opening email application to send your message...",

      // PLEDGE POPUP (#hkPledgeDialog)
      "pledge_dialog_title": "Rainforest Conservation Pledge & Badge",
      "pledge_dialog_desc": "Type your full name to generate an official Certificate & Commitment Badge signed by the Founder of HutanKita.",
      "pledge_name_label": "Full Name on Certificate",
      "pledge_name_placeholder": "Type your full name...",
      "pledge_items_label": "Archipelago Rainforest Pledge Commitments:",
      "pledge_item_1": "Learn and share literacy regarding the critical importance of tropical rainforest biodiversity.",
      "pledge_item_2": "Reject and oppose illegal logging and the destruction of rare wildlife habitats.",
      "pledge_item_3": "Promptly report wildfire hotspot anomalies and support peatland fire suppression efforts.",
      "pledge_item_4": "Adopt an eco-friendly lifestyle and actively support endemic tree planting initiatives.",
      "pledge_preview_label": "Official Pledge Certificate & Badge Preview (1400x1000 px)",
      "pledge_btn_download": "Download Pledge Certificate (PNG)",
      "pledge_btn_close": "Close Window",
      "pledge_download_success": "Pledge Certificate & Badge (PNG) downloaded successfully.",

      // QUIZ POPUP (#hkQuizDialog)
      "quiz_dialog_title": "Rainforest Ecosystem Quiz (15 Questions)",
      "quiz_dialog_title_active": "Rainforest Knowledge Evaluation",
      "quiz_dialog_title_summary": "Evaluation Results & Official Certificate",
      "quiz_dialog_desc": "Test your understanding through 15 questions sourced directly from 3D tree anatomy, deforestation threats, forestry law articles, conservation gallery, and satellite monitoring on HutanKita. Complete all questions to download your official Certificate & Graduation Badge.",
      "quiz_start_name_label": "Participant Full Name",
      "quiz_start_name_placeholder": "Type your full name (e.g. Wahyu Hidayat)",
      "quiz_start_name_error": "Please enter your full name (at least 2 letters) before starting the quiz.",
      "quiz_start_name_helper": "This name will be automatically printed on your official Certificate of Competency & Graduation Badge.",
      "quiz_briefing_heading": "Quiz Instructions & Topic Coverage",
      "quiz_briefing_label_1": "Evaluation Topic Scope:",
      "quiz_briefing_text_1": "3D Tree Anatomy (buttress roots, cambium, xylem/phloem, emergent canopy), Tropical Peat Ecosystems, Indonesian Forestry Law Sanctions, Conservation Actions, and NASA FIRMS Hotspot Detection.",
      "quiz_briefing_label_2": "Question Format & Quantity:",
      "quiz_briefing_text_2": "Total 15 Multiple-Choice Questions (shuffled each session). Each question includes instant interactive educational explanations upon selecting an answer.",
      "quiz_briefing_label_3": "Scoring & Official Certificate:",
      "quiz_briefing_text_3": "After all questions are answered and submitted, your final score (0–100) is displayed alongside an official Certificate & Badge (1400x1000 px) signed by the Founder of HutanKita ready for PNG download.",
      "quiz_btn_start": "Start Answering Quiz (15 Questions)",
      "quiz_progress_prefix": "Question",
      "quiz_progress_of": "of",
      "quiz_progress_correct": "Correct",
      "quiz_user_badge_prefix": "Participant:",
      "quiz_topic_prefix": "Topic:",
      "quiz_feedback_correct": "Correct Answer",
      "quiz_feedback_incorrect": "Incorrect Answer",
      "quiz_btn_next": "Next Question",
      "quiz_btn_submit": "Finish & Submit Quiz",
      "quiz_score_kicker": "Learning Evaluation Results",
      "quiz_score_title_template": "Your Final Score: {score} / 100 ({correct} of {total} Questions Correct)",
      "quiz_score_desc_template": "Congratulations {name}! You have successfully completed all 15 questions and earned the \"{predicate}\" badge. Your name is officially printed on the Certificate below. You can download it directly in PNG format.",
      "quiz_btn_download_cert": "Download Certificate (PNG)",
      "quiz_btn_restart": "Retake Quiz (15 Questions)",
      "quiz_btn_close": "Close Window",
      "quiz_download_success": "Quiz Certificate & Badge (PNG) downloaded successfully.",

      // QUIZ PREDICATES
      "predicate_high": "PRIMARY GUARDIAN OF ARCHIPELAGO RAINFOREST",
      "predicate_mid": "TROPICAL FOREST CONSERVATION ALLY",
      "predicate_low": "RAINFOREST ECOSYSTEM LEARNER",

      // CANVAS CERTIFICATE TEXTS
      "cert_top_pill": "HUTANKITA INDONESIA  •  CENTER FOR ECOSYSTEM & BOTANICAL LITERACY",
      "cert_quiz_title": "CERTIFICATE OF COMPETENCY & BADGE",
      "cert_quiz_subtitle": "GRADUATION EVALUATION OF ARCHIPELAGO TROPICAL RAINFOREST ECOSYSTEMS (15 QUESTIONS)",
      "cert_quiz_awarded_to": "This forestry literacy competency certificate is officially presented to:",
      "cert_quiz_col_score": "EVALUATION SCORE",
      "cert_quiz_col_badge": "COMPETENCY BADGE",
      "cert_quiz_col_accuracy": "ACCURACY RATE",
      "cert_quiz_questions_correct": "Questions",
      "cert_quiz_summary_text": "Has successfully completed the 15-question evaluation covering 3D Tree Anatomy (Buttress Roots, Trunk, Branches, Canopy), Peat Dome Ecology, Forestry Criminal Sanctions (Laws No. 18/2013, 32/2009, 5/1990), and Satellite Fire Monitoring.",
      "cert_pledge_title": "PLEDGE CERTIFICATE & COMMITMENT BADGE",
      "cert_pledge_subtitle": "PRESERVATION OF ARCHIPELAGO TROPICAL RAINFOREST ECOSYSTEMS",
      "cert_pledge_awarded_to": "This moral environmental commitment certificate is officially granted to:",
      "cert_pledge_main_text": "Declares an oath and steadfast pledge to safeguard 120+ million hectares of Indonesia's tropical rainforest, oppose illegal logging and environmental destruction, and actively promote the protection of peat domes and endangered wildlife.",
      "cert_date_prefix": "Issued on:",
      "cert_founder_role": "Founder of HutanKita & Lead Developer",

      // FOOTER
      "nav_home_mobile": "Home",
      "pledge_dialog_desc_full": "Enter your full name and select one conservation commitment. An official Certificate & Badge signed by the Founder of HutanKita will be generated automatically and ready for high-resolution download (1400x1000 px).",
      "pledge_name_label_full": "Recipient Full Name",
      "pledge_name_placeholder_full": "Enter your full name for the pledge certificate",
      "pledge_choices_legend": "Choose one rainforest conservation commitment",
      "pledge_opt_1": "Refrain from land clearing by burning and avoid discarding embers in dry vegetation areas.",
      "pledge_opt_2": "Reduce paper consumption and choose sustainably certified forest products.",
      "pledge_opt_3": "Report hotspot sightings, haze, or illegal logging to emergency forestry command posts.",
      "pledge_opt_4": "Plant and nurture native trees in local surroundings to preserve water absorption and carbon reserves.",
      "pledge_opt_5": "Share knowledge about tropical rainforests and peatland functions with family and friends.",
      "pledge_saved_note": "Changes are automatically saved in this device's browser.",
      "pledge_preview_label_full": "Pledge Certificate & Badge Preview (1400x1000 px)",
      "footer_tagline": "Indonesian Tropical Rainforest Education Portal",
      "footer_tagline_long": "Botanical science education platform, 3D tree anatomy visualization, forest destruction investigation, and integrated archipelago rainforest fire monitoring.",
      "footer_desc": "3D botanical education, tropical rainforest ecosystem conservation information, and archipelago satellite hotspot monitoring.",
      "footer_nav_heading": "Quick Navigation",
      "footer_link_home": "Home",
      "footer_link_anatomy": "3D Tree Anatomy & Botany",
      "footer_link_crisis": "Forest Destruction Crisis",
      "footer_link_gallery": "Conservation Action Gallery",
      "footer_link_map": "Satellite Hotspot Map",
      "footer_link_contacts": "Emergency Command Contacts",
      "footer_contacts_heading": "Emergency Hotlines",
      "footer_emerg_1": "<strong>National Fire Brigade:</strong> <a href=\"tel:113\">113 / 112</a>",
      "footer_emerg_2": "<strong>HutanKita Command Post:</strong> <a href=\"https://wa.me/6283843653251?text=Hello%20HutanKita%20Command%20Post%2C%20I%20would%20like%20to%20report%20a%20forest%20fire%20incident\" target=\"_blank\" rel=\"noopener noreferrer\">0838-4365-3251</a>",
      "footer_emerg_3": "<strong>BPBD Disaster Ops:</strong> <a href=\"tel:112\">112 (Toll-Free)</a>",
      "footer_emerg_4": "<strong>Forestry Police (Gakkum):</strong> <a href=\"tel:110\">110 (Criminal Reports)</a>",
      "footer_emerg_5": "<strong>Medical &amp; Respiratory:</strong> <a href=\"tel:119\">119 (Emergency Ambulance)</a>",
      "footer_src_1": "Ministry of Environment & Forestry (Sipongi+)",
      "footer_src_2": "NASA Earthdata (FIRMS Active Fire System)",
      "footer_src_3": "Meteorology, Climatology, and Geophysical Agency (BMKG)",
      "footer_src_4": "National Agency for Disaster Management (BNPB)",
      "footer_src_5": "Global Forest Watch (GFW)",
      "footer_copy": "&copy; 2026 <strong>HutanKita Indonesia</strong> &bull; Dedicated to Tropical Rainforest Conservation &amp; Protecting the Lungs of the World.",
      "footer_org_heading": "Competition Organizers",
      "footer_org_text": "Techno Versary Vol. II — \"EcoDigital For Environment\" organized by HIMA-TI FKOM Universitas Kuningan.",
      "footer_copyright": "© 2026 HutanKita. All rights reserved. Developed by Team HutanKita (Wahyu Hidayat)."
    }
  };

  let currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  if (currentLang !== "id" && currentLang !== "en") {
    currentLang = DEFAULT_LANG;
  }

  function getLanguage() {
    return currentLang;
  }

  function t(key, fallback = "") {
    if (!key) return fallback;
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS[DEFAULT_LANG];
    if (dict && typeof dict[key] !== "undefined") {
      return dict[key];
    }
    const fallbackDict = TRANSLATIONS[DEFAULT_LANG];
    if (fallbackDict && typeof fallbackDict[key] !== "undefined") {
      return fallbackDict[key];
    }
    return fallback || key;
  }

  function updateDomTranslations() {
    document.documentElement.lang = currentLang;
    document.title = t("page_title", document.title);

    // 1. Text / innerHTML
    const translatables = document.querySelectorAll("[data-i18n]");
    translatables.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (val) {
        if (
          val.includes("<strong") ||
          val.includes("<span") ||
          val.includes("<br") ||
          val.includes("<a ") ||
          val.includes("<em")
        ) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // 2. Placeholders
    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = t(key);
      if (val) el.setAttribute("placeholder", val);
    });

    // 3. Titles / Tooltips
    const titles = document.querySelectorAll("[data-i18n-title]");
    titles.forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      const val = t(key);
      if (val) el.setAttribute("title", val);
    });

    // 4. Aria Labels
    const arias = document.querySelectorAll("[data-i18n-aria]");
    arias.forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const val = t(key);
      if (val) el.setAttribute("aria-label", val);
    });

    // 4b. Hrefs (mis. template pesan WhatsApp)
    const hrefs = document.querySelectorAll("[data-i18n-href]");
    hrefs.forEach((el) => {
      const key = el.getAttribute("data-i18n-href");
      const val = t(key);
      if (val) el.setAttribute("href", val);
    });

    // 5. Update Switcher UI Buttons
    const switchers = document.querySelectorAll(".hk-lang-btn");
    switchers.forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      const isActive = btnLang === currentLang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    // 6. Dispatch custom event so dynamic modules (3D, Canvas, Quiz, Map) can update
    window.dispatchEvent(
      new CustomEvent("hk:languagechange", {
        detail: { language: currentLang }
      })
    );
  }

  function setLanguage(lang) {
    if (lang !== "id" && lang !== "en") return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_err) {
      // storage unavailable
    }
    updateDomTranslations();
  }

  function toggleLanguage() {
    setLanguage(currentLang === "id" ? "en" : "id");
  }

  // Inisialisasi saat DOM siap
  document.addEventListener("DOMContentLoaded", () => {
    // Daftarkan event click pada semua tombol switcher bahasa
    document.addEventListener("click", (event) => {
      const btn = event.target.closest(".hk-lang-btn");
      if (btn) {
        event.preventDefault();
        event.stopPropagation();
        const targetLang = btn.getAttribute("data-lang");
        if (targetLang) {
          setLanguage(targetLang);
        }
      }
    });

    // Jalankan terjemahan awal
    updateDomTranslations();
  });

  // Ekspor API Global HutanKita i18n
  window.hkI18n = {
    getLanguage,
    setLanguage,
    toggleLanguage,
    t,
    translations: TRANSLATIONS
  };
  window.t = t;
  window.getHkLanguage = getLanguage;
  window.setHkLanguage = setLanguage;
})();
