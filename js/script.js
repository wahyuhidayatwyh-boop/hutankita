/**
 * HUTANKITA - INDONESIA TROPICAL RAINFOREST INTERACTIVE EXPERIENCE
 * Slide 1: Video Hero, Sound Toggle, Search, Navigation
 * Slide 2: Peta Indonesia (assets/images/peta.webp 3D Relief) <-> Peta Penjelasan (assets/images/peta-penjelasan.webp)
 */

document.addEventListener("DOMContentLoaded", () => {
  // ========================================================================
  // 1. HERO SECTION (SOUND, SEARCH, MENU, SCROLL CUE)
  // ========================================================================
  const video = document.querySelector(".hero-video");
  const soundBtn = document.getElementById("soundBtn");
  const soundMutedIcon = document.getElementById("soundMutedIcon");
  const soundActiveIcon = document.getElementById("soundActiveIcon");
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  const scrollCue = document.getElementById("scrollCue");

  // Video Sound Mute / Unmute
  if (soundBtn && video) {
    soundBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      if (video.muted) {
        soundMutedIcon.classList.remove("hidden");
        soundActiveIcon.classList.add("hidden");
        soundBtn.title = "Sound Muted";
      } else {
        soundMutedIcon.classList.add("hidden");
        soundActiveIcon.classList.remove("hidden");
        soundBtn.title = "Sound Playing";
      }
    });
  }

  // ========================================================================
  // EXPANDABLE & INTERACTIVE FULL-TEXT LIVE SEARCH
  // ========================================================================
  const searchClearBtn = document.getElementById("searchClearBtn");
  const searchResultsDropdown = document.getElementById("searchResultsDropdown");

  // Database Konten Edukasi HutanKita
  const SEARCH_DATABASE = [
    {
      title: "Anatomi Pohon & Botani 3D",
      category: "Anatomi 3D",
      snippet: "Visualisasi interaktif 3D struktur pohon, jaringan botani, xilem floem, dan fisiologi.",
      target: "#edukasi",
      keywords: ["anatomi", "botani", "pohon", "3d", "struktur", "sel", "jaringan", "fisiologi", "edukasi"]
    },
    {
      title: "Daun & Klorofil (Fotosintesis)",
      category: "Anatomi 3D",
      snippet: "Pabrik biokimia penghasil oksigen dunia, penyerapan CO2, dan respirasi stomata.",
      target: "#edukasi",
      action: () => triggerAnatomyPart("daun"),
      keywords: ["daun", "klorofil", "fotosintesis", "oksigen", "stomata", "karbon", "co2", "hijau", "pabrik oksigen"]
    },
    {
      title: "Batang & Kambium (Xilem - Floem)",
      category: "Anatomi 3D",
      snippet: "Pilar kokoh rimba, cincin pertumbuhan tahunan, serta pembuluh transportasi hara.",
      target: "#edukasi",
      action: () => triggerAnatomyPart("batang"),
      keywords: ["batang", "kambium", "xilem", "floem", "cincin", "kayu", "nutrisi", "transportasi", "pembuluh"]
    },
    {
      title: "Akar & Jaringan Mikoriza",
      category: "Anatomi 3D",
      snippet: "Jangkar penopang bumi, pencegah longsor & erosi, serta simbiotik mikoriza.",
      target: "#edukasi",
      action: () => triggerAnatomyPart("akar"),
      keywords: ["akar", "mikoriza", "jamur", "tanah", "longsor", "jangkar", "erosi", "hara", "serapan"]
    },
    {
      title: "Bunga Rimba & Penyerbukan",
      category: "Anatomi 3D",
      snippet: "Siklus reproduksi botani kanopi rimba, nektar bunga, dan polinator lebah hutan.",
      target: "#edukasi",
      action: () => triggerAnatomyPart("bunga"),
      keywords: ["bunga", "penyerbukan", "polinasi", "lebah", "nektar", "reproduksi", "benang sari"]
    },
    {
      title: "Buah & Biji Kanopi",
      category: "Anatomi 3D",
      snippet: "Generasi penerus rimba, regenerasi kanopi lewat angin dan satwa endemik nusantara.",
      target: "#edukasi",
      action: () => triggerAnatomyPart("buah"),
      keywords: ["buah", "biji", "kanopi", "regenerasi", "persebaran", "satwa", "generasi"]
    },
    {
      title: "Pohon Ulin Kalimantan (Kayu Besi)",
      category: "Spesies Langka",
      snippet: "Kayu besi Kalimantan legendaris (Eusideroxylon zwageri) yang tahan ratusan tahun.",
      target: "#edukasi",
      keywords: ["ulin", "kayu besi", "kalimantan", "zwageri", "eusideroxylon", "endemik", "purba", "tenggarong"]
    },
    {
      title: "Meranti Merah & Dipterokarpa",
      category: "Spesies Langka",
      snippet: "Raksasa kanopi rimba Dipterokarpa nusantara yang menjulang hingga 70 meter.",
      target: "#edukasi",
      keywords: ["meranti", "meranti merah", "shorea", "dipterokarpa", "kanopi", "pohon raksasa"]
    },
    {
      title: "Cendana Wangi & Gaharu Super",
      category: "Spesies Langka",
      snippet: "Spesies resin aromatik bernilai tinggi asli NTT dan kepulauan nusantara.",
      target: "#edukasi",
      keywords: ["cendana", "gaharu", "cendana wangi", "atsiri", "ntt", "aquilaria", "resin"]
    },
    {
      title: "Krisis & Ancaman Perusakan Hutan",
      category: "Krisis Hutan",
      snippet: "Investigasi laju deforestasi liar, pembukaan lahan sawit, dan emisi karbon karhutla.",
      target: "#perusakan-hutan",
      keywords: ["krisis", "perusakan", "deforestasi", "ancaman", "pembalakan", "gambut", "rusak", "karbon"]
    },
    {
      title: "Penebangan Liar (Illegal Logging)",
      category: "Krisis Hutan",
      snippet: "Penyitaan truk logging, perambahan suaka alam, dan penindakan mafia perusak rimba.",
      target: "#perusakan-hutan",
      keywords: ["penebangan liar", "illegal logging", "logging", "pembalakan", "penebangan", "mafia kayu", "kayu bulat"]
    },
    {
      title: "Karhutla & Kebakaran Lahan Gambut",
      category: "Krisis Hutan",
      snippet: "Bara gambut kedalaman 4 meter penyumbang kabut asap beracun dan krisis iklim.",
      target: "#perusakan-hutan",
      keywords: ["karhutla", "kebakaran", "api", "gambut", "kabut asap", "asap", "bara", "emisi", "lahan gambut"]
    },
    {
      title: "Jerat Hukum & Sanksi Pidana Kehutanan",
      category: "Hukum Kehutanan",
      snippet: "Ancaman 15 tahun penjara dan denda Rp 10 Miliar berdasarkan UU No. 18 Tahun 2013.",
      target: "#perusakan-hutan",
      action: () => openPenaltyAccordion(),
      keywords: ["sanksi", "pidana", "hukum", "uu kehutanan", "penjara", "denda", "15 tahun", "10 miliar", "gakkum", "undang-undang"]
    },
    {
      title: "Galeri Rekaman: Aksi Nyata Rimba",
      category: "Galeri Rimba",
      snippet: "Dokumentasi visual patroli rimba nusantara, evakuasi satwa, dan pemadaman garis depan.",
      target: "#galeri-hutan",
      keywords: ["galeri", "dokumentasi", "foto", "rekaman", "aksi", "patroli", "koleksi"]
    },
    {
      title: "Evakuasi & Pelepasan Orangutan",
      category: "Galeri Rimba",
      snippet: "Penyelamatan induk dan anak orangutan dari kepungan karhutla menuju suaka rehabilitasi.",
      target: "#galeri-hutan",
      action: () => slideGalleryTo(0),
      keywords: ["orangutan", "evakuasi", "satwa", "pelepasliaran", "konservasi", "primata", "hewan"]
    },
    {
      title: "Penyegelan Truk Kayu Bulat & Logging Liar",
      category: "Galeri Rimba",
      snippet: "Penyegelan barang bukti kayu curian dan alat berat oleh satuan Polisi Kehutanan.",
      target: "#galeri-hutan",
      action: () => slideGalleryTo(1),
      keywords: ["penyegelan", "truk logging", "alat berat", "sita", "tangkap", "gakkum", "kayu bulat"]
    },
    {
      title: "Operasi Pemadaman Karhutla Manggala Agni",
      category: "Galeri Rimba",
      snippet: "Perjuangan brigade damkar rimba menembus bara gambut di Sumatra dan Kalimantan.",
      target: "#galeri-hutan",
      action: () => slideGalleryTo(2),
      keywords: ["pemadaman", "manggala agni", "pemadam", "brigade", "damkar", "asap pekat"]
    },
    {
      title: "Peta Hotspot & Sensor Satelit Api",
      category: "Peta Api",
      snippet: "Pemantauan koordinat suhu ekstrem dan titik bara aktif satelit NASA FIRMS & BMKG.",
      target: "#peta-titik-api",
      keywords: ["peta", "titik api", "hotspot", "satelit", "nasa", "modis", "viirs", "bmkg", "sipongi", "koordinat", "peta api"]
    },
    {
      title: "Kontak Posko Darurat Karhutla",
      category: "Posko Darurat",
      snippet: "Hotline siaga Manggala Agni (+62 811-9620-1123), Damkar 113, BPBD 112, dan Gakkum 110.",
      target: "#kontak-darurat",
      keywords: ["kontak", "darurat", "posko", "telepon", "hotline", "bantuan", "nomor darurat", "nomor darurat karhutla"]
    },
    {
      title: "Hotline WhatsApp Manggala Agni",
      category: "Posko Darurat",
      snippet: "Kanal pelaporan cepat kebakaran hutan langsung ke posko terpadu Manggala Agni KLHK.",
      target: "#kontak-darurat",
      keywords: ["whatsapp", "manggala agni", "081196201123", "lapor wa", "pengaduan", "wa"]
    },
    {
      title: "Layanan Pemadam Kebakaran (Damkar 113)",
      category: "Posko Darurat",
      snippet: "Panggilan darurat pemadam karhutla dan penanganan kedaruratan kebakaran permukiman.",
      target: "#kontak-darurat",
      keywords: ["damkar", "113", "pemadam kebakaran", "pemadam", "siaga 113"]
    },
    {
      title: "Ikrar Komitmen Jaga Hutan Nusantara",
      category: "Aksi Nyata",
      snippet: "Deklarasikan komitmen nyata dan catat ikrar Anda untuk pelestarian hutan Indonesia.",
      target: "#ajakan-jaga-hutan",
      keywords: ["ikrar", "pledge", "komitmen", "dukungan", "deklarasi", "jaga hutan"]
    }
  ];

  function triggerAnatomyPart(partKey) {
    const btn = document.querySelector(`.part-nav-btn[data-part="${partKey}"]`) ||
                document.querySelector(`[data-part="${partKey}"]`);
    if (btn) btn.click();
  }

  function slideGalleryTo(index) {
    const dots = document.querySelectorAll(".doc-dot");
    if (dots && dots[index]) {
      dots[index].click();
    }
  }

  function openPenaltyAccordion() {
    const header = document.querySelector(".penalty-accordion-header");
    if (header) {
      const card = header.closest(".penalty-accordion-card");
      if (card && !card.classList.contains("is-open")) {
        header.click();
      }
    }
  }

  function highlightAndScroll(targetSelector, actionFn, title) {
    const targetEl = document.querySelector(targetSelector);
    if (!targetEl) return;

    if (typeof actionFn === "function") {
      try { actionFn(); } catch (e) { }
    }

    targetEl.scrollIntoView({ behavior: "smooth", block: "center" });

    targetEl.classList.remove("search-target-highlight");
    void targetEl.offsetWidth; // trigger reflow
    targetEl.classList.add("search-target-highlight");

    setTimeout(() => {
      targetEl.classList.remove("search-target-highlight");
    }, 2500);

    if (window.showToast) {
      window.showToast("Membuka: " + title);
    }

    closeSearchDropdown();
  }

  function performSearch(rawQuery) {
    if (!searchResultsDropdown) return;
    const query = (rawQuery || "").trim().toLowerCase();

    if (!query) {
      searchResultsDropdown.innerHTML = "";
      searchResultsDropdown.classList.remove("is-active");
      if (searchClearBtn) searchClearBtn.classList.add("hidden");
      return;
    }

    if (searchClearBtn) searchClearBtn.classList.remove("hidden");

    const matches = SEARCH_DATABASE.filter((item) => {
      const inTitle = item.title.toLowerCase().includes(query);
      const inCat = item.category.toLowerCase().includes(query);
      const inSnippet = item.snippet.toLowerCase().includes(query);
      const inKeywords = item.keywords.some((k) => k.toLowerCase().includes(query));
      return inTitle || inCat || inSnippet || inKeywords;
    });

    if (matches.length === 0) {
      searchResultsDropdown.innerHTML = `
        <div class="search-no-results">
          <span>Tidak ditemukan materi untuk "<strong>${escapeHtml(rawQuery)}</strong>"</span>
          <div class="search-suggestions-wrap">
            <span class="search-suggestions-label">Rekomendasi pencarian:</span>
            <button type="button" class="search-hint-pill" data-hint="ulin">Pohon Ulin</button>
            <button type="button" class="search-hint-pill" data-hint="karhutla">Karhutla</button>
            <button type="button" class="search-hint-pill" data-hint="akar">Akar 3D</button>
            <button type="button" class="search-hint-pill" data-hint="damkar">Damkar 113</button>
            <button type="button" class="search-hint-pill" data-hint="sanksi">Sanksi UU</button>
            <button type="button" class="search-hint-pill" data-hint="orangutan">Orangutan</button>
          </div>
        </div>
      `;
      searchResultsDropdown.classList.add("is-active");

      searchResultsDropdown.querySelectorAll(".search-hint-pill").forEach((pill) => {
        pill.addEventListener("click", () => {
          const hint = pill.getAttribute("data-hint");
          if (searchInput) {
            searchInput.value = hint;
            searchInput.focus();
            performSearch(hint);
          }
        });
      });
      return;
    }

    let html = `
      <div class="search-dropdown-header">
        <span>Hasil Pencarian (${matches.length})</span>
        <span style="font-size:0.7rem; color:rgba(255,255,255,0.4);">Klik untuk menuju</span>
      </div>
    `;

    matches.slice(0, 8).forEach((item, idx) => {
      const highlightedTitle = highlightKeyword(item.title, query);
      html += `
        <button class="search-result-item" type="button" data-index="${idx}">
          <div class="search-item-top">
            <span class="search-item-title">${highlightedTitle}</span>
            <span class="search-item-category">${escapeHtml(item.category)}</span>
            <div class="search-item-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
          <p class="search-item-snippet">${escapeHtml(item.snippet)}</p>
        </button>
      `;
    });

    searchResultsDropdown.innerHTML = html;
    searchResultsDropdown.classList.add("is-active");

    searchResultsDropdown.querySelectorAll(".search-result-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        const item = matches[idx];
        if (item) {
          highlightAndScroll(item.target, item.action, item.title);
        }
      });
    });
  }

  function showInitialRecommendations() {
    if (!searchResultsDropdown) return;
    searchResultsDropdown.innerHTML = `
      <div class="search-no-results">
        <span class="search-suggestions-label">Rekomendasi kata kunci:</span>
        <div class="search-suggestions-wrap">
          <button type="button" class="search-hint-pill" data-hint="ulin">Pohon Ulin</button>
          <button type="button" class="search-hint-pill" data-hint="karhutla">Karhutla</button>
          <button type="button" class="search-hint-pill" data-hint="akar">Akar 3D</button>
          <button type="button" class="search-hint-pill" data-hint="damkar">Damkar 113</button>
          <button type="button" class="search-hint-pill" data-hint="sanksi">Sanksi UU</button>
          <button type="button" class="search-hint-pill" data-hint="orangutan">Orangutan</button>
        </div>
      </div>
    `;
    searchResultsDropdown.classList.add("is-active");

    searchResultsDropdown.querySelectorAll(".search-hint-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const hint = pill.getAttribute("data-hint");
        if (searchInput) {
          searchInput.value = hint;
          searchInput.focus();
          performSearch(hint);
        }
      });
    });
  }

  function highlightKeyword(text, keyword) {
    if (!keyword) return escapeHtml(text);
    const regex = new RegExp(`(${escapeRegex(keyword)})`, "gi");
    return escapeHtml(text).replace(regex, "<mark>$1</mark>");
  }

  function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/[&<>"']/g, (m) => {
      switch (m) {
        case "&": return "&amp;";
        case "<": return "&lt;";
        case ">": return "&gt;";
        case "\"": return "&quot;";
        case "'": return "&#039;";
        default: return m;
      }
    });
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function closeSearchDropdown() {
    if (searchResultsDropdown) {
      searchResultsDropdown.classList.remove("is-active");
    }
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = searchInput.classList.contains("open");
      const val = searchInput.value.trim();

      if (!isOpen) {
        searchInput.classList.add("open");
        searchInput.focus();
        if (val) {
          performSearch(val);
        } else {
          showInitialRecommendations();
        }
      } else {
        if (val) {
          const firstItem = searchResultsDropdown ? searchResultsDropdown.querySelector(".search-result-item") : null;
          if (firstItem) {
            firstItem.click();
          } else {
            performSearch(val);
          }
        } else {
          searchInput.classList.remove("open");
          closeSearchDropdown();
        }
      }
    });

    searchInput.addEventListener("focus", () => {
      if (!searchInput.value.trim()) {
        showInitialRecommendations();
      }
    });

    let searchDebounceTimer = null;
    searchInput.addEventListener("input", () => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        performSearch(searchInput.value);
      }, 120);
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const firstItem = searchResultsDropdown ? searchResultsDropdown.querySelector(".search-result-item") : null;
        if (firstItem) {
          firstItem.click();
        } else if (searchInput.value.trim()) {
          performSearch(searchInput.value);
        }
      } else if (e.key === "Escape") {
        searchInput.classList.remove("open");
        closeSearchDropdown();
        searchInput.blur();
      }
    });

    if (searchClearBtn) {
      searchClearBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        searchInput.value = "";
        searchClearBtn.classList.add("hidden");
        closeSearchDropdown();
        searchInput.focus();
      });
    }

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-box")) {
        closeSearchDropdown();
        if (!searchInput.value.trim()) {
          searchInput.classList.remove("open");
        }
      }
    });
  }



  // Scroll Cue Click -> Slide 2
  if (scrollCue) {
    scrollCue.addEventListener("click", () => {
      const eduSection = document.getElementById("edukasi");
      if (eduSection) {
        eduSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Smooth Scroll for Navigation Anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // ========================================================================
  // 2. TOGGLE ANTARA PETA 3D (assets/images/peta.webp) & PETA PENJELASAN (assets/images/peta-penjelasan.webp)
  // ========================================================================
  const view3DLayer = document.getElementById("view3DLayer");
  const viewExplanationLayer = document.getElementById("viewExplanationLayer");
  const btnSwitchTo3D = document.getElementById("btnSwitchTo3D");
  const btnSwitchToExplanation = document.getElementById("btnSwitchToExplanation");
  const btnActionToggleMap = document.getElementById("btnActionToggleMap");
  const actionBtnLabel = document.getElementById("actionBtnLabel");
  const hintBadgeText = document.getElementById("hintBadgeText");
  const imgExplanation = document.getElementById("imgExplanation");

  let currentMapMode = "3d"; // "3d" | "explanation"

  function setMapMode(mode) {
    if (mode === currentMapMode) return;
    currentMapMode = mode;

    if (currentMapMode === "explanation") {
      // Tampilkan Peta Penjelasan
      view3DLayer.classList.remove("active");
      viewExplanationLayer.classList.add("active");

      btnSwitchTo3D.classList.remove("active");
      btnSwitchToExplanation.classList.add("active");

      if (actionBtnLabel) actionBtnLabel.textContent = "Kembali ke 3D Relief";
      if (hintBadgeText) hintBadgeText.textContent = "Klik peta untuk kembali ke 3D relief";
    } else {
      // Tampilkan Peta 3D Relief (assets/images/peta.webp)
      viewExplanationLayer.classList.remove("active");
      view3DLayer.classList.add("active");

      btnSwitchToExplanation.classList.remove("active");
      btnSwitchTo3D.classList.add("active");

      if (actionBtnLabel) actionBtnLabel.textContent = "Buka Peta Penjelasan Data";
      if (hintBadgeText) hintBadgeText.textContent = "Klik peta untuk melihat data penjelasan wilayah";
    }
  }

  // Klik tombol switcher pill
  if (btnSwitchTo3D) {
    btnSwitchTo3D.addEventListener("click", (e) => {
      e.stopPropagation();
      setMapMode("3d");
    });
  }

  if (btnSwitchToExplanation) {
    btnSwitchToExplanation.addEventListener("click", (e) => {
      e.stopPropagation();
      setMapMode("explanation");
    });
  }

  // Tombol aksi di kolom kiri
  if (btnActionToggleMap) {
    btnActionToggleMap.addEventListener("click", () => {
      setMapMode(currentMapMode === "3d" ? "explanation" : "3d");
    });
  }

  // Klik langsung pada gambar penjelasan -> kembali ke 3D
  if (imgExplanation) {
    imgExplanation.addEventListener("click", () => {
      setMapMode("3d");
    });
  }

  // ========================================================================
  // 3. THREE.JS 3D RELIEF TERRAIN ENGINE DENGAN assets/images/peta.webp
  // ========================================================================
  const canvas3D = document.getElementById("indonesia3DCanvas");
  const container = document.getElementById("mapInteractiveStage");

  if (canvas3D && container && typeof THREE !== "undefined") {
    try {
      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(
        40,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      const defaultCamZ = 36;
      const defaultCamY = -12;
      camera.position.set(0, defaultCamY, defaultCamZ);
      camera.lookAt(0, 0, 0);

      // WebGL Renderer (Alpha Transparent, Card-Free)
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas3D,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Pencahayaan Realistis
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
      scene.add(ambientLight);

      const sunLight = new THREE.DirectionalLight(0xfef08a, 1.4);
      sunLight.position.set(22, -26, 42);
      scene.add(sunLight);

      const emeraldRimLight = new THREE.PointLight(0x34d399, 1.3, 85);
      emeraldRimLight.position.set(-25, 20, 25);
      scene.add(emeraldRimLight);

      // Group Objek Peta
      const mapGroup = new THREE.Group();
      scene.add(mapGroup);

      // Texture Loading: Base64 data URI (CORS-safe for local file://)
      const textureLoader = new THREE.TextureLoader();
      const mapSrc = window.MAP_TEXTURE_B64 || "assets/images/peta.webp";
      const bumpSrc = window.MAP_BUMP_B64 || "assets/images/peta-bump.webp";

      const mapTexture = textureLoader.load(
        mapSrc,
        () => {
          // Tekstur 3D berhasil dimuat -> sembunyikan gambar fallback secara halus
          const fallback = document.getElementById("mapFallbackImg");
          if (fallback) {
            fallback.style.opacity = "0";
            setTimeout(() => {
              fallback.style.display = "none";
            }, 400);
          }
        },
        undefined,
        (err) => {
          console.warn("Notice loading 3D texture:", err);
        }
      );

      const bumpTexture = textureLoader.load(bumpSrc);

      mapTexture.generateMipmaps = true;
      mapTexture.minFilter = THREE.LinearMipmapLinearFilter;

      // Geometri Relief Indonesia (Aspect Ratio: 2172 / 724 = 3.0)
      const meshWidth = 36;
      const meshHeight = meshWidth / (2172 / 724); // 12 unit

      const reliefGeometry = new THREE.PlaneGeometry(
        meshWidth,
        meshHeight,
        128,
        64
      );

      const reliefMaterial = new THREE.MeshStandardMaterial({
        map: mapTexture,
        bumpMap: bumpTexture,
        bumpScale: 1.5,
        transparent: true,
        alphaTest: 0.05,
        roughness: 0.45,
        metalness: 0.1,
        side: THREE.DoubleSide,
      });

      const indonesiaMesh = new THREE.Mesh(reliefGeometry, reliefMaterial);
      // Sudut pandang relief yang nyaman
      indonesiaMesh.rotation.x = -Math.PI / 4.4;
      mapGroup.add(indonesiaMesh);

      // Partikel Hutan / Spora Hijau Melayang
      const sporeCount = 40;
      const sporeGeo = new THREE.BufferGeometry();
      const sporePositions = new Float32Array(sporeCount * 3);

      for (let i = 0; i < sporeCount * 3; i += 3) {
        sporePositions[i] = (Math.random() - 0.5) * 45;
        sporePositions[i + 1] = (Math.random() - 0.5) * 35;
        sporePositions[i + 2] = (Math.random() - 0.5) * 25;
      }

      sporeGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(sporePositions, 3)
      );
      const sporeMat = new THREE.PointsMaterial({
        size: 0.65,
        color: 0x34d399,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      });
      const sporePoints = new THREE.Points(sporeGeo, sporeMat);
      scene.add(sporePoints);

      // Status Rotasi & Drag (Peta diam tidak berputar otomatis)
      let isAutoRotate = false;
      let isDragging = false;
      let dragDistance = 0;
      let prevMousePos = { x: 0, y: 0 };
      let mouseDownPos = { x: 0, y: 0 };

      // Drag Orbit & Click Detection pada Canvas
      canvas3D.addEventListener("mousedown", (e) => {
        isDragging = true;
        dragDistance = 0;
        mouseDownPos = { x: e.clientX, y: e.clientY };
        prevMousePos = { x: e.clientX, y: e.clientY };
      });

      window.addEventListener("mouseup", (e) => {
        if (isDragging) {
          isDragging = false;
          // Jika pergerakan mouse < 6px, anggap sebagai KLIK
          const dist = Math.hypot(e.clientX - mouseDownPos.x, e.clientY - mouseDownPos.y);
          if (dist < 6) {
            setMapMode("explanation");
          }
        }
      });

      canvas3D.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        dragDistance += Math.hypot(deltaX, deltaY);

        mapGroup.rotation.z += deltaX * 0.009;
        mapGroup.rotation.x += deltaY * 0.007;

        prevMousePos = { x: e.clientX, y: e.clientY };
      });

      // Touch Orbit & Click Detection untuk Mobile/Tablet
      let touchStart = { x: 0, y: 0 };
      let touchStartTime = 0;

      canvas3D.addEventListener(
        "touchstart",
        (e) => {
          if (e.touches.length === 1) {
            isDragging = true;
            dragDistance = 0;
            touchStartTime = Date.now();
            touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          }
        },
        { passive: true }
      );

      canvas3D.addEventListener(
        "touchmove",
        (e) => {
          if (isDragging && e.touches.length === 1) {
            const deltaX = e.touches[0].clientX - prevMousePos.x;
            const deltaY = e.touches[0].clientY - prevMousePos.y;
            dragDistance += Math.hypot(deltaX, deltaY);

            mapGroup.rotation.z += deltaX * 0.009;
            mapGroup.rotation.x += deltaY * 0.007;

            prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          }
        },
        { passive: true }
      );

      canvas3D.addEventListener(
        "touchend",
        (e) => {
          isDragging = false;
          const touchDuration = Date.now() - touchStartTime;
          if (dragDistance < 8 && touchDuration < 350) {
            setMapMode("explanation");
          }
        },
        { passive: true }
      );

      // Mouse Wheel Zoom
      canvas3D.addEventListener(
        "wheel",
        (e) => {
          e.preventDefault();
          camera.position.z += e.deltaY * 0.03;
          camera.position.z = Math.min(Math.max(camera.position.z, 22), 55);
        },
        { passive: false }
      );

      // Resize Handler
      window.addEventListener("resize", () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });

      // Animasi Loop
      let clock = new THREE.Clock();

      function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        // Peta 3D diam (tidak berputar-putar otomatis sesuai permintaan)
        // Posisi tetap stabil dan elegan untuk dibaca
        mapGroup.position.y = 0;

        // Gerakan Spora Hutan
        sporePoints.rotation.y = elapsedTime * 0.035;

        if (currentMapMode === "3d") {
          renderer.render(scene, camera);
        }
      }

      animate();
    } catch (err) {
      console.warn("Three.js initialization notice:", err);
    }
  }

  // ========================================================================
  // 4. POHON 3D REALISTIS UTUH (AKAR SAMPAI DAUN) - ZOOM & KLIK INTERAKTIF
  // ========================================================================
  const treeAnatomyData = {
    utuh: {
      imgMain: "assets/images/pohon-3d.webp",
      imgSecondary: "assets/images/pohon-3d.webp",
      desc: "",
      camPos: { x: 0, y: 0.5, z: 27.5 },
      lookAt: { x: 0, y: 0.5, z: 0 },
      fallbackTransform: "scale(1) translate(0%, 0%)",
    },
    akar: {
      imgMain: "assets/images/akar1.webp",
      imgSecondary: "assets/images/akar2.webp",
      struktur: "Sistem perakaran pohon raksasa hutan tropis ditopang oleh akar banir (buttress root) yang memipih melebar di atas tanah humus dangkal, diperkuat lapisan epidermis luar dan tudung akar (kaliptra) yang menembus sela bebatuan. Di dalamnya, silinder pusat vaskular (stele) tersusun atas pembuluh xilem berdinding tebal berlignin dan tapis floem yang dikelilingi pita Caspary pada endodermis untuk menyaring nutrisi mineral tanah, bersimbiosis erat dengan jaringan hifa jamur mikoriza yang memperluas jangkauan penyerapan air hingga ratusan meter.",
      manfaat: "Bagi lingkungan, jalinan perakaran masif ini berfungsi sebagai jangkar geologis terkuat yang mencengkeram tanah lereng terjal, secara efektif mencegah longsor dan erosi saat diterpa curah hujan ekstrem khatulistiwa. Jaringan akar juga bertindak sebagai spons raksasa alami yang menginfiltrasi dan mengunci cadangan air tawar ke dalam akuifer tanah, mencegah banjir bandang di hilir, serta memelihara kesuburan tanah hutan melalui perputaran mikroorganisme pengurai bahan organik.",
      camPos: { x: 0, y: -7.8, z: 12.0 },
      lookAt: { x: 0, y: -8.2, z: 0 },
      fallbackTransform: "scale(2.35) translate(0%, -32%)",
    },
    batang: {
      imgMain: "assets/images/batang1.webp",
      imgSecondary: "assets/images/batang2.webp",
      struktur: "Batang pohon emergent tersusun atas formasi cincin konsentris berarsitektur kokoh. Lapisan terluar berupa ritidom (kulit kayu mati bergabus) dan periderm pelindung yang kedap patogen, disusul lapisan floem sekunder yang menyalurkan fotosintat ke bawah. Tepat di bawahnya, cincin meristem kambium vaskular aktif membelah membentuk kayu gubal (sapwood) yang menyalurkan ribuan liter air ke ketinggian 60 meter, sedangkan inti terdalamnya adalah kayu teras (heartwood) padat dengan timbunan senyawa resin, tanin, dan lignin tua berkekuatan tarik luar biasa.",
      manfaat: "Bagi lingkungan, batang raksasa ini merupakan rosot karbon alami (carbon sink) terpenting di muka bumi, yang mampu mengunci puluhan hingga ratusan ton karbon dioksida atmosfer dalam wujud biomassa padat selama berabad-abad. Selain menopang struktur kubah kanopi pelindung iklim mikro, volume batang kayu tua menjadi penahan cadangan kelembapan udara hutan tropis, meredam panas permukaan bumi, dan menyediakan mikronutrien penting bagi ribuan spesies lumut, jamur, serta serangga dekomposer penyeimbang ekosistem.",
      camPos: { x: 0, y: -1.5, z: 11.5 },
      lookAt: { x: 0, y: -1.5, z: 0 },
      fallbackTransform: "scale(2.35) translate(0%, -8%)",
    },
    dahan: {
      imgMain: "assets/images/dahan1.webp",
      imgSecondary: "assets/images/dahan2.webp",
      struktur: "Percabangan dahan dirancang secara biomekanis melalui pola simpodial fleksibel dengan penguatan serat kayu tegangan tinggi (tension wood) pada pangkal nodus dahan untuk menahan torsi angin kencang. Kulit dahan dilapisi lentisel mikro sebagai pertukaran gas respirasi selular, menyelimuti silinder xilem sekunder berpori yang mengalirkan air ke ranting-ranting terluar. Permukaan kulit dahan yang tebal dan lembap membentuk stratum substrat organik alami yang menampung tumpukan seresah mikro dan humus gantung.",
      manfaat: "Bagi lingkungan, dahan-dahan kanopi membentuk ekosistem bertingkat atau 'taman gantung udara' yang menjadi habitat bagi ribuan tanaman epifit seperti anggrek hutan, paku sarang burung, dan lumut yang menyaring partikel udara. Percabangan ini berfungsi sebagai koridor mobilitas dan jembatan jelajah esensial bagi satwa kanopi langka—seperti Orangutan, Owa, serta Rangkong—sekaligus memecah kecepatan terpaan angin badai tropis sehingga lantai hutan di bawahnya tetap teduh, tenang, dan stabil.",
      camPos: { x: 0, y: 3.2, z: 12.0 },
      lookAt: { x: 0, y: 3.2, z: 0 },
      fallbackTransform: "scale(2.25) translate(0%, 14%)",
    },
    daun: {
      imgMain: "assets/images/daun1.webp",
      imgSecondary: "assets/images/daun2.webp",
      struktur: "Daun hutan hujan tropis merupakan instrumen konversi energi surya dengan struktur seluler berlapis. Permukaan atasnya dilapisi kutikula lilin mengilap dan berujung menetes (drip tips) agar air hujan lebat segera mengalir turun tanpa membusukkan helai daun. Di bawah epidermis transparan terdapat jaringan tiang palisade yang padat akan butir kloroplas kaya klorofil untuk fotosintesis, ditopang jaringan spons bervakuola dan tulang daun berurat vaskular rapat, serta ribuan stomata berpasang sel penjaga di permukaan bawah untuk regulasi transpirasi gas.",
      manfaat: "Bagi lingkungan, kanopi daun bertindak sebagai 'paru-paru hijau' global yang mengonversi karbon dioksida menjadi jutaan ton pasokan oksigen murni, sekaligus menahan energi kinetik tetesan air hujan lebat agar tidak mengikis tanah secara langsung. Melalui proses transpirasi harian, triliunan lembar daun mengembuskan miliaran liter uap air ke atmosfer, membentuk siklus awan dan presipitasi hujan lokal yang mendinginkan suhu khatulistiwa serta menstabilkan cuaca regional di seluruh Asia Tenggara.",
      camPos: { x: 0, y: 7.6, z: 12.5 },
      lookAt: { x: 0, y: 7.6, z: 0 },
      fallbackTransform: "scale(2.2) translate(0%, 28%)",
    },
  };

  // DOM Elements untuk Anatomi Pohon & Detail Seamless
  const treeDetailDrawer = document.getElementById("treeDetailDrawer");
  const detailImgMain = document.getElementById("detailImgMain");
  const detailImgSecondary = document.getElementById("detailImgSecondary");
  const detailPureDesc = document.getElementById("detailPureDesc");
  const btnCloseDetail = document.getElementById("btnCloseDetail");
  const treeFallbackImg = document.getElementById("treeFallbackImg");

  const partButtons = document.querySelectorAll(".part-pill-btn");
  const hotspotButtons = document.querySelectorAll(".tree-hotspot");
  const btnTreeZoomIn = document.getElementById("btnTreeZoomIn");
  const btnTreeZoomOut = document.getElementById("btnTreeZoomOut");
  const btnTreeReset = document.getElementById("btnTreeReset");

  let activeTreePart = "utuh";
  const targetTreeCamPos = { x: 0, y: 0.5, z: 27.5 };
  const targetTreeLookAt = { x: 0, y: 0.5, z: 0 };

  function selectTreePart(partKey, userTriggered = false) {
    const info = treeAnatomyData[partKey];
    if (!info) return;

    activeTreePart = partKey;

    // Update target kamera 3D untuk efek zoom & pan halus
    targetTreeCamPos.x = info.camPos.x;
    targetTreeCamPos.y = info.camPos.y;
    targetTreeCamPos.z = info.camPos.z;
    targetTreeLookAt.x = info.lookAt.x;
    targetTreeLookAt.y = info.lookAt.y;
    targetTreeLookAt.z = info.lookAt.z;

    // Update transform pada fallback image jika WebGL belum aktif
    if (treeFallbackImg) {
      treeFallbackImg.style.transform = info.fallbackTransform;
    }

    // Update tombol navigasi pill
    partButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-part") === partKey);
    });

    // Update titik hotspot di atas pohon 3D
    hotspotButtons.forEach((hs) => {
      hs.classList.toggle("active", hs.getAttribute("data-part") === partKey);
    });

    if (btnTreeReset) {
      btnTreeReset.classList.toggle("active", partKey === "utuh");
    }

    // Kelola Detail Lapisan di Bawah (Tanpa Card)
    if (partKey === "utuh") {
      if (treeDetailDrawer) {
        treeDetailDrawer.classList.remove("active");
      }
    } else {
      if (treeDetailDrawer) {
        // Update Foto Utama & Foto Tambahan di Sampingnya
        if (detailImgMain && info.imgMain) {
          detailImgMain.style.opacity = "0.2";
          detailImgMain.src = info.imgMain;
          setTimeout(() => {
            detailImgMain.style.opacity = "1";
          }, 120);
        }

        if (detailImgSecondary && info.imgSecondary) {
          detailImgSecondary.style.opacity = "0.2";
          detailImgSecondary.src = info.imgSecondary;
          setTimeout(() => {
            detailImgSecondary.style.opacity = "1";
          }, 120);
        }

        // Update Deskripsi Murni (Struktur Bagian & Manfaat bagi Lingkungan)
        if (detailPureDesc) {
          if (info.struktur && info.manfaat) {
            detailPureDesc.innerHTML = `
              <p class="desc-paragraph"><strong class="desc-lead-label">Struktur Bagian:</strong> ${info.struktur}</p>
              <p class="desc-paragraph"><strong class="desc-lead-label">Manfaat bagi Lingkungan:</strong> ${info.manfaat}</p>
            `;
          } else if (info.desc) {
            detailPureDesc.innerHTML = `<p class="desc-paragraph">${info.desc}</p>`;
          }
        }

        treeDetailDrawer.classList.add("active");

        // Scroll halus ke arah detail jika dipicu klik oleh user
        if (userTriggered) {
          setTimeout(() => {
            treeDetailDrawer.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }, 240);
        }
      }
    }
  }

  // Event Listener Tombol Navigasi Bagian Pohon
  partButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const part = btn.getAttribute("data-part");
      selectTreePart(part, true);
    });
  });

  // Event Listener Titik Hotspot pada Pohon
  hotspotButtons.forEach((hs) => {
    hs.addEventListener("click", (e) => {
      e.stopPropagation();
      const part = hs.getAttribute("data-part");
      if (activeTreePart === part) {
        selectTreePart("utuh", true);
      } else {
        selectTreePart(part, true);
      }
    });
  });

  // Tombol Tutup Detail / Reset
  if (btnCloseDetail) {
    btnCloseDetail.addEventListener("click", () => {
      selectTreePart("utuh", false);
      const treeStageWrapper = document.querySelector(".tree-stage-wrapper");
      if (treeStageWrapper) {
        treeStageWrapper.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  // Tombol Zoom In / Out / Reset
  if (btnTreeZoomIn) {
    btnTreeZoomIn.addEventListener("click", (e) => {
      e.stopPropagation();
      targetTreeCamPos.z = Math.max(9, targetTreeCamPos.z - 4);
      if (btnTreeReset) btnTreeReset.classList.remove("active");
    });
  }

  if (btnTreeZoomOut) {
    btnTreeZoomOut.addEventListener("click", (e) => {
      e.stopPropagation();
      targetTreeCamPos.z = Math.min(38, targetTreeCamPos.z + 4);
      if (btnTreeReset) btnTreeReset.classList.remove("active");
    });
  }

  if (btnTreeReset) {
    btnTreeReset.addEventListener("click", (e) => {
      e.stopPropagation();
      selectTreePart("utuh", true);
    });
  }

  // Inisialisasi WebGL Three.js untuk Pohon 3D Utuh
  const treeCanvas = document.getElementById("tree3DCanvas");
  const treeStage = document.getElementById("treeInteractiveStage");

  if (treeCanvas && treeStage && typeof THREE !== "undefined") {
    try {
      const treeScene = new THREE.Scene();

      const treeCamera = new THREE.PerspectiveCamera(
        40,
        treeStage.clientWidth / treeStage.clientHeight,
        0.1,
        1000
      );
      treeCamera.position.set(0, 0.5, 27.5);
      const currentLookAt = new THREE.Vector3(0, 0.5, 0);
      treeCamera.lookAt(currentLookAt);

      const treeRenderer = new THREE.WebGLRenderer({
        canvas: treeCanvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      treeRenderer.setSize(treeStage.clientWidth, treeStage.clientHeight);
      treeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Pencahayaan Hutan Tropis untuk Volume 3D Batang, Akar, dan Kanopi
      const treeAmbient = new THREE.AmbientLight(0xffffff, 0.92);
      treeScene.add(treeAmbient);

      const treeSunLight = new THREE.DirectionalLight(0xfef08a, 1.5);
      treeSunLight.position.set(18, 22, 35);
      treeScene.add(treeSunLight);

      const treeEmeraldLight = new THREE.PointLight(0x34d399, 1.25, 90);
      treeEmeraldLight.position.set(-22, -10, 24);
      treeScene.add(treeEmeraldLight);

      const treeGroup = new THREE.Group();
      treeScene.add(treeGroup);

      // Load Tekstur Base64 Pohon 3D & Bump/Depth Map (Bebas CORS)
      const treeLoader = new THREE.TextureLoader();
      const treeTexSrc = window.TREE_TEXTURE_B64 || "assets/images/pohon-3d.webp";
      const treeBumpSrc = window.TREE_BUMP_B64 || "assets/images/pohon-bump.webp";
      const treeAspect = window.TREE_ASPECT_RATIO || 694 / 1080;

      const treeTexture = treeLoader.load(
        treeTexSrc,
        () => {
          if (treeFallbackImg) {
            treeFallbackImg.style.opacity = "0";
            setTimeout(() => {
              treeFallbackImg.style.display = "none";
            }, 400);
          }
        },
        undefined,
        (err) => {
          console.warn("Notice loading 3D tree texture:", err);
        }
      );

      const treeBump = treeLoader.load(treeBumpSrc);
      treeTexture.generateMipmaps = true;
      treeTexture.minFilter = THREE.LinearMipmapLinearFilter;

      // Geometri Relief 3D Pohon Utuh (Tinggi 25 unit, lebar proporsional)
      const treeMeshHeight = 25;
      const treeMeshWidth = treeMeshHeight * treeAspect;

      const treeGeo = new THREE.PlaneGeometry(
        treeMeshWidth,
        treeMeshHeight,
        128,
        192
      );

      const treeMat = new THREE.MeshStandardMaterial({
        map: treeTexture,
        bumpMap: treeBump,
        bumpScale: 1.45,
        displacementMap: treeBump,
        displacementScale: 1.65,
        displacementBias: -0.6,
        transparent: true,
        alphaTest: 0.04,
        roughness: 0.52,
        metalness: 0.08,
        side: THREE.DoubleSide,
      });

      const treeMesh = new THREE.Mesh(treeGeo, treeMat);
      treeGroup.add(treeMesh);

      // Partikel Spora & Kunang-kunang di Sekitar Pohon
      const treeSporeCount = 45;
      const treeSporeGeo = new THREE.BufferGeometry();
      const treeSporePos = new Float32Array(treeSporeCount * 3);
      for (let i = 0; i < treeSporeCount * 3; i += 3) {
        treeSporePos[i] = (Math.random() - 0.5) * 32;
        treeSporePos[i + 1] = (Math.random() - 0.5) * 28;
        treeSporePos[i + 2] = (Math.random() - 0.5) * 18;
      }
      treeSporeGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(treeSporePos, 3)
      );
      const treeSporeMat = new THREE.PointsMaterial({
        size: 0.55,
        color: 0x34d399,
        transparent: true,
        opacity: 0.68,
        blending: THREE.AdditiveBlending,
      });
      const treeSpores = new THREE.Points(treeSporeGeo, treeSporeMat);
      treeScene.add(treeSpores);

      // Koordinat 3D Titik Hotspot pada Pohon (Agar Ikut Bergerak Saat Zoom & Rotasi)
      const hotspotAnchors3D = {
        daun: new THREE.Vector3(1.1, 7.6, 1.2),
        dahan: new THREE.Vector3(-1.5, 3.0, 1.1),
        batang: new THREE.Vector3(0.6, -2.2, 1.3),
        akar: new THREE.Vector3(-1.2, -8.8, 1.2),
      };

      const hotspotElements = {
        daun: document.getElementById("hotspot-daun"),
        dahan: document.getElementById("hotspot-dahan"),
        batang: document.getElementById("hotspot-batang"),
        akar: document.getElementById("hotspot-akar"),
      };

      // Raycaster untuk Klik Langsung pada Bagian Mesh Pohon 3D
      const raycaster = new THREE.Raycaster();
      const pointerNDC = new THREE.Vector2();

      function handleTreeCanvasClick(clientX, clientY) {
        const rect = treeCanvas.getBoundingClientRect();
        pointerNDC.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        pointerNDC.y = -((clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(pointerNDC, treeCamera);
        const intersects = raycaster.intersectObject(treeMesh);

        if (intersects.length > 0) {
          // Ambil koordinat lokal Y pada pohon (-12.5 s/d +12.5)
          const localPoint = treeMesh.worldToLocal(intersects[0].point.clone());
          const y = localPoint.y;

          if (y < -5.2) {
            selectTreePart("akar", true);
          } else if (y < 0.8) {
            selectTreePart("batang", true);
          } else if (y < 5.0) {
            selectTreePart("dahan", true);
          } else {
            selectTreePart("daun", true);
          }
        } else if (activeTreePart !== "utuh") {
          // Klik di ruang kosong luar pohon mengembalikan ke tampilan utuh
          selectTreePart("utuh", false);
        }
      }

      // Interaksi Drag Rotasi 3D & Deteksi Klik pada Pohon
      let isTreeDragging = false;
      let treeDragDist = 0;
      let treePrevMouse = { x: 0, y: 0 };
      let treeDownMouse = { x: 0, y: 0 };

      treeCanvas.addEventListener("mousedown", (e) => {
        isTreeDragging = true;
        treeDragDist = 0;
        treeDownMouse = { x: e.clientX, y: e.clientY };
        treePrevMouse = { x: e.clientX, y: e.clientY };
      });

      window.addEventListener("mouseup", (e) => {
        if (isTreeDragging) {
          isTreeDragging = false;
          const dist = Math.hypot(
            e.clientX - treeDownMouse.x,
            e.clientY - treeDownMouse.y
          );
          if (dist < 6) {
            handleTreeCanvasClick(e.clientX, e.clientY);
          }
        }
      });

      treeCanvas.addEventListener("mousemove", (e) => {
        if (!isTreeDragging) return;
        const dx = e.clientX - treePrevMouse.x;
        const dy = e.clientY - treePrevMouse.y;
        treeDragDist += Math.hypot(dx, dy);

        // Batasi sudut rotasi agar relief 3D tetap natural dari depan/samping
        treeGroup.rotation.y = Math.max(
          -0.65,
          Math.min(0.65, treeGroup.rotation.y + dx * 0.008)
        );
        treeGroup.rotation.x = Math.max(
          -0.35,
          Math.min(0.35, treeGroup.rotation.x + dy * 0.006)
        );

        treePrevMouse = { x: e.clientX, y: e.clientY };
      });

      // Touch Interaksi untuk Mobile
      let treeTouchStartTime = 0;
      treeCanvas.addEventListener(
        "touchstart",
        (e) => {
          if (e.touches.length === 1) {
            isTreeDragging = true;
            treeDragDist = 0;
            treeTouchStartTime = Date.now();
            treePrevMouse = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
            };
          }
        },
        { passive: true }
      );

      treeCanvas.addEventListener(
        "touchmove",
        (e) => {
          if (isTreeDragging && e.touches.length === 1) {
            const dx = e.touches[0].clientX - treePrevMouse.x;
            const dy = e.touches[0].clientY - treePrevMouse.y;
            treeDragDist += Math.hypot(dx, dy);

            treeGroup.rotation.y = Math.max(
              -0.65,
              Math.min(0.65, treeGroup.rotation.y + dx * 0.008)
            );
            treeGroup.rotation.x = Math.max(
              -0.35,
              Math.min(0.35, treeGroup.rotation.x + dy * 0.006)
            );

            treePrevMouse = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
            };
          }
        },
        { passive: true }
      );

      treeCanvas.addEventListener(
        "touchend",
        (e) => {
          isTreeDragging = false;
          const duration = Date.now() - treeTouchStartTime;
          if (
            treeDragDist < 8 &&
            duration < 350 &&
            e.changedTouches &&
            e.changedTouches.length > 0
          ) {
            handleTreeCanvasClick(
              e.changedTouches[0].clientX,
              e.changedTouches[0].clientY
            );
          }
        },
        { passive: true }
      );

      // Mouse Wheel Zoom Halus pada Pohon 3D
      treeCanvas.addEventListener(
        "wheel",
        (e) => {
          e.preventDefault();
          targetTreeCamPos.z += e.deltaY * 0.025;
          targetTreeCamPos.z = Math.min(Math.max(targetTreeCamPos.z, 9), 38);
        },
        { passive: false }
      );

      // Resize Handler
      window.addEventListener("resize", () => {
        if (!treeStage) return;
        treeCamera.aspect = treeStage.clientWidth / treeStage.clientHeight;
        treeCamera.updateProjectionMatrix();
        treeRenderer.setSize(treeStage.clientWidth, treeStage.clientHeight);
      });

      // Animasi Loop Pohon 3D
      const treeClock = new THREE.Clock();
      const projectedVec = new THREE.Vector3();

      function animateTree3D() {
        requestAnimationFrame(animateTree3D);

        const elapsed = treeClock.getElapsedTime();

        // Ayunan 3D organik lembut saat tidak di-drag
        if (!isTreeDragging) {
          const targetRotY = Math.sin(elapsed * 0.65) * 0.16;
          treeGroup.rotation.y += (targetRotY - treeGroup.rotation.y) * 0.03;
          treeGroup.rotation.x += (0 - treeGroup.rotation.x) * 0.04;
        }

        // Interpolasi Kamera Halus (Smooth Zoom & Pan ke Bagian Pohon)
        treeCamera.position.x +=
          (targetTreeCamPos.x - treeCamera.position.x) * 0.08;
        treeCamera.position.y +=
          (targetTreeCamPos.y - treeCamera.position.y) * 0.08;
        treeCamera.position.z +=
          (targetTreeCamPos.z - treeCamera.position.z) * 0.08;

        currentLookAt.x += (targetTreeLookAt.x - currentLookAt.x) * 0.08;
        currentLookAt.y += (targetTreeLookAt.y - currentLookAt.y) * 0.08;
        currentLookAt.z += (targetTreeLookAt.z - currentLookAt.z) * 0.08;
        treeCamera.lookAt(currentLookAt);

        // Gerakan Partikel Spora
        treeSpores.rotation.y = elapsed * 0.03;

        treeRenderer.render(treeScene, treeCamera);

        // Proyeksi Posisi 3D Hotspot ke Layar 2D Secara Real-Time
        const stageW = treeStage.clientWidth;
        const stageH = treeStage.clientHeight;

        Object.keys(hotspotAnchors3D).forEach((key) => {
          const el = hotspotElements[key];
          if (!el) return;

          projectedVec.copy(hotspotAnchors3D[key]);
          projectedVec.applyMatrix4(treeMesh.matrixWorld);
          projectedVec.project(treeCamera);

          const screenX = (projectedVec.x * 0.5 + 0.5) * stageW;
          const screenY = (-projectedVec.y * 0.5 + 0.5) * stageH;

          // Tampilkan hotspot jika berada di dalam area pandang kamera
          if (
            projectedVec.z < 1 &&
            screenX >= 20 &&
            screenX <= stageW - 20 &&
            screenY >= 20 &&
            screenY <= stageH - 20
          ) {
            el.style.left = `${screenX}px`;
            el.style.top = `${screenY}px`;
            el.style.opacity = "1";
          } else {
            el.style.opacity = "0";
          }
        });
      }

      animateTree3D();
    } catch (err) {
      console.warn("Three.js Tree 3D notice:", err);
    }
  }

  /* ==========================================================================
     INTERAKTIVITAS CARD SANKSI PIDANA (BISA DIBUKA & DITUTUP)
     ========================================================================== */
  const accordionHeaders = document.querySelectorAll(".penalty-accordion-header");

  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const card = header.closest(".penalty-accordion-card");
        if (!card) return;

        const isOpen = card.classList.contains("open");
        const actionText = header.querySelector(".chevron-action-text");

        if (isOpen) {
          card.classList.remove("open");
          header.setAttribute("aria-expanded", "false");
          if (actionText) actionText.textContent = "Detail";
        } else {
          card.classList.add("open");
          header.setAttribute("aria-expanded", "true");
          if (actionText) actionText.textContent = "Tutup";
        }
      });
    });
  }

  /* ==========================================================================
     5. DOKUMENTASI CARD GESER 1 PER 1 BERLANJUT TANPA BALIK (INFINITE SLIDER)
     FULL-WIDTH SAMPAI POJOK BATAS LAYAR TANPA KEPOTONG
     ========================================================================== */
  const docContainer = document.getElementById("docCarouselContainer");
  const docTrack = document.getElementById("docCarouselTrack");
  const docViewport = document.getElementById("docCarouselViewport");
  const docBtnPrev = document.getElementById("docBtnPrev");
  const docBtnNext = document.getElementById("docBtnNext");
  const docDotsContainer = document.getElementById("docCarouselDots");

  if (docContainer && docTrack) {
    const originalCards = Array.from(docTrack.querySelectorAll(".doc-card:not(.is-clone)"));
    const totalOriginal = originalCards.length;

    // Bersihkan klon lama jika ada
    docTrack.querySelectorAll(".is-clone").forEach((c) => c.remove());

    // 1 set klon sebelum original (agar geser mundur bisa looping tanpa batas)
    originalCards.slice().reverse().forEach((card) => {
      const clone = card.cloneNode(true);
      clone.classList.add("is-clone", "is-prepend");
      docTrack.insertBefore(clone, docTrack.firstChild);
    });

    // 1 set klon sesudah original (agar geser maju terus ke kanan looping ke kartu 1 tanpa pernah balik mundur ke kiri)
    originalCards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.classList.add("is-clone", "is-append");
      docTrack.appendChild(clone);
    });

    // Mulai dari set kartu original pertama (indeks awal = totalOriginal)
    let currentIndex = totalOriginal;
    let isTransitioning = false;
    let autoPlayTimer = null;

    // Buat indikator dot navigasi untuk kartu original
    if (docDotsContainer && totalOriginal > 0) {
      docDotsContainer.innerHTML = "";
      for (let i = 0; i < totalOriginal; i++) {
        const dot = document.createElement("button");
        dot.className = `doc-dot ${i === 0 ? "active" : ""}`;
        dot.setAttribute("type", "button");
        dot.setAttribute("aria-label", `Menuju dokumentasi ${i + 1}`);
        dot.addEventListener("click", () => {
          if (isTransitioning) return;
          const currentNorm = ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;
          let diff = i - currentNorm;
          if (diff < -totalOriginal / 2) diff += totalOriginal;
          if (diff > totalOriginal / 2) diff -= totalOriginal;
          currentIndex += diff;
          goToSlide(currentIndex, true);
        });
        docDotsContainer.appendChild(dot);
      }
    }

    function getStepSize() {
      const firstCard = docTrack.querySelector(".doc-card");
      if (!firstCard) return 286;
      const computed = window.getComputedStyle(docTrack);
      const gap = parseFloat(computed.gap) || (window.innerWidth <= 768 ? 16 : 24);
      return firstCard.offsetWidth + gap;
    }

    function getCenterShift() {
      // Khusus mobile (<= 768px): posisikan kartu aktif tepat di tengah horizontal viewport
      // Desktop (> 768px): jangan diubah (return 0 agar tetap mengalir alami dari tepi)
      if (window.innerWidth > 768) return 0;
      const firstCard = docTrack.querySelector(".doc-card");
      if (!firstCard || !docViewport) return 0;
      const viewportWidth = docViewport.clientWidth;
      const cardWidth = firstCard.offsetWidth;
      const computed = window.getComputedStyle(docTrack);
      const padLeft = parseFloat(computed.paddingLeft) || 0;
      return (viewportWidth - cardWidth) / 2 - padLeft;
    }

    function updateDots(activeIdx) {
      if (!docDotsContainer) return;
      const dots = docDotsContainer.querySelectorAll(".doc-dot");
      const normalizedIdx = ((activeIdx % totalOriginal) + totalOriginal) % totalOriginal;
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === normalizedIdx);
      });
    }

    function goToSlide(index, withTransition = true) {
      if (withTransition) {
        docTrack.style.transition = "transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)";
      } else {
        docTrack.style.transition = "none";
      }

      const centerShift = getCenterShift();
      const offset = index * getStepSize() - centerShift;
      docTrack.style.transform = `translateX(-${offset}px)`;
      updateDots(index);

      // Tandai kartu aktif di tengah untuk highlight responsif di mobile
      const allCards = docTrack.querySelectorAll(".doc-card");
      allCards.forEach((c, idx) => {
        c.classList.toggle("is-center-active", idx === index);
      });
    }

    function nextSlide() {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex++;
      goToSlide(currentIndex, true);
    }

    function prevSlide() {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex--;
      goToSlide(currentIndex, true);
    }

    // Reset instan TANPA TRANSISI saat mencapai batas klon agar looping selalu maju tanpa pernah balik ke kiri
    docTrack.addEventListener("transitionend", (e) => {
      // Hanya tanggapi event transitionend dari docTrack itu sendiri
      if (e.target !== docTrack) return;
      isTransitioning = false;

      // Saat geser maju melewati kartu ke-6 menuju klon kartu 1 (indeks >= 2 * totalOriginal):
      // Reset instan tanpa animasi ke posisi kartu 1 original (indeks totalOriginal).
      // Hasilnya: gerak geser selalu maju ke kanan berkesinambungan tanpa pernah membal/mundur ke kiri!
      if (currentIndex >= 2 * totalOriginal) {
        currentIndex = currentIndex - totalOriginal;
        goToSlide(currentIndex, false);
      } else if (currentIndex < totalOriginal) {
        // Saat geser mundur melewati kartu ke-1 menuju klon kiri:
        // Reset instan ke posisi kartu 6 original di kanan tanpa animasi
        currentIndex = currentIndex + totalOriginal;
        goToSlide(currentIndex, false);
      }
    });

    // Inisialisasi awal pada kartu original pertama (Card 1) tanpa animasi
    goToSlide(currentIndex, false);

    if (docBtnNext) {
      docBtnNext.addEventListener("click", () => nextSlide());
    }

    if (docBtnPrev) {
      docBtnPrev.addEventListener("click", () => prevSlide());
    }

    window.addEventListener("resize", () => {
      goToSlide(currentIndex, false);
    });

    // Touch & Mouse Drag Handling untuk geser interaktif
    if (docViewport) {
      let isDragging = false;
      let startX = 0;
      let currentX = 0;

      const onPointerDown = (e) => {
        isDragging = true;
        startX = e.pageX || (e.touches && e.touches[0].pageX) || 0;
        currentX = startX;
        stopAutoPlay();
      };

      const onPointerMove = (e) => {
        if (!isDragging) return;
        currentX = e.pageX || (e.touches && e.touches[0].pageX) || 0;
      };

      const onPointerUp = () => {
        if (!isDragging) return;
        isDragging = false;
        const diff = currentX - startX;
        if (Math.abs(diff) > 45) {
          if (diff < 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
        startAutoPlay();
      };

      docViewport.addEventListener("mousedown", onPointerDown);
      docViewport.addEventListener("mousemove", onPointerMove);
      window.addEventListener("mouseup", onPointerUp);

      docViewport.addEventListener("touchstart", onPointerDown, { passive: true });
      docViewport.addEventListener("touchmove", onPointerMove, { passive: true });
      docViewport.addEventListener("touchend", onPointerUp, { passive: true });
    }

    // Autoplay
    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(nextSlide, 3500);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    docContainer.addEventListener("mouseenter", stopAutoPlay);
    docContainer.addEventListener("mouseleave", startAutoPlay);

    window.addEventListener("resize", () => {
      goToSlide(currentIndex, false);
    });

    startAutoPlay();
  }

  /* ==========================================================================
     6. PETA TITIK API INTERAKTIF (SNAPSHOT NASA FIRMS - LEAFLET HOTSPOT MONITOR)
     HK-PATCH: Diubah dari klaim real-time/terverifikasi menjadi snapshot jujur NASA FIRMS
     ========================================================================== */
  const mapElement = document.getElementById("hotspotLeafletMap");

  // HK-PATCH: Data cadangan lokal; secara utama digantikan oleh snapshot asli NASA FIRMS (js/firms-hotspots-data.js)
  const INDONESIA_HOTSPOTS = [
    // RIAU
    {
      id: "HS-RIAU-01",
      name: "Siak Kecil, Kab. Bengkalis",
      province: "Riau",
      region: "Sumatera",
      lat: 1.2483,
      lng: 102.1345,
      ecosystem: "Kubah Gambut Dalam",
      satellite: "VIIRS SNPP (375m)",
      frp: 74.2,
      brightness: 368.5,
      confidence: 98,
      status: "critical",
      statusLabel: "Kritis",
      time: "15:42 WIB",
      isPeat: true
    },
    {
      id: "HS-RIAU-02",
      name: "Teluk Meranti, Pelalawan",
      province: "Riau",
      region: "Sumatera",
      lat: 0.3241,
      lng: 102.612,
      ecosystem: "Semenanjung Kampar",
      satellite: "VIIRS NOAA-20",
      frp: 63.8,
      brightness: 361.2,
      confidence: 95,
      status: "critical",
      statusLabel: "Kritis",
      time: "15:10 WIB",
      isPeat: true
    },
    {
      id: "HS-RIAU-03",
      name: "Sungai Sembilan, Kota Dumai",
      province: "Riau",
      region: "Sumatera",
      lat: 1.7214,
      lng: 101.3255,
      ecosystem: "Lahan Gambut Terbuka",
      satellite: "VIIRS SNPP (375m)",
      frp: 48.5,
      brightness: 349.4,
      confidence: 88,
      status: "high",
      statusLabel: "Tinggi",
      time: "14:28 WIB",
      isPeat: true
    },
    {
      id: "HS-RIAU-04",
      name: "Tanah Putih, Rokan Hilir",
      province: "Riau",
      region: "Sumatera",
      lat: 1.612,
      lng: 100.892,
      ecosystem: "Perbatasan Hutan Produksi",
      satellite: "MODIS Terra",
      frp: 54.1,
      brightness: 355.0,
      confidence: 91,
      status: "critical",
      statusLabel: "Kritis",
      time: "13:50 WIB",
      isPeat: true
    },
    {
      id: "HS-RIAU-05",
      name: "Koto Gasib, Kab. Siak",
      province: "Riau",
      region: "Sumatera",
      lat: 0.7812,
      lng: 101.8924,
      ecosystem: "Kanal Gambut Sekunder",
      satellite: "VIIRS NOAA-20",
      frp: 38.6,
      brightness: 341.8,
      confidence: 84,
      status: "high",
      statusLabel: "Tinggi",
      time: "12:15 WIB",
      isPeat: true
    },
    {
      id: "HS-RIAU-06",
      name: "Gaung Anak Serka, Inhil",
      province: "Riau",
      region: "Sumatera",
      lat: -0.312,
      lng: 103.142,
      ecosystem: "Hutan Rawa Gambut",
      satellite: "VIIRS SNPP (375m)",
      frp: 43.7,
      brightness: 344.2,
      confidence: 86,
      status: "high",
      statusLabel: "Tinggi",
      time: "11:45 WIB",
      isPeat: true
    },

    // KALIMANTAN TENGAH
    {
      id: "HS-KALTENG-01",
      name: "Sebangau Border, Pulang Pisau",
      province: "Kalimantan Tengah",
      region: "Kalimantan",
      lat: -2.7482,
      lng: 114.1284,
      ecosystem: "Kubah Gambut Dalam Ex-PLG",
      satellite: "VIIRS SNPP (375m)",
      frp: 89.4,
      brightness: 374.8,
      confidence: 99,
      status: "critical",
      statusLabel: "Kritis",
      time: "16:05 WIB",
      isPeat: true
    },
    {
      id: "HS-KALTENG-02",
      name: "Kel. Sabaru, Palangka Raya",
      province: "Kalimantan Tengah",
      region: "Kalimantan",
      lat: -2.2415,
      lng: 113.9214,
      ecosystem: "Gambut Pinggiran Kota",
      satellite: "VIIRS NOAA-20",
      frp: 71.0,
      brightness: 366.1,
      confidence: 96,
      status: "critical",
      statusLabel: "Kritis",
      time: "15:20 WIB",
      isPeat: true
    },
    {
      id: "HS-KALTENG-03",
      name: "Mentaya Hilir, Sampit (Kotim)",
      province: "Kalimantan Tengah",
      region: "Kalimantan",
      lat: -2.8124,
      lng: 112.9124,
      ecosystem: "Semak Belukar Rawa",
      satellite: "VIIRS SNPP (375m)",
      frp: 57.8,
      brightness: 358.3,
      confidence: 92,
      status: "critical",
      statusLabel: "Kritis",
      time: "14:40 WIB",
      isPeat: true
    },
    {
      id: "HS-KALTENG-04",
      name: "Katingan Kuala, Katingan",
      province: "Kalimantan Tengah",
      region: "Kalimantan",
      lat: -3.1245,
      lng: 113.4128,
      ecosystem: "Hutan Lindung Pesisir",
      satellite: "MODIS Aqua",
      frp: 45.2,
      brightness: 346.0,
      confidence: 85,
      status: "high",
      statusLabel: "Tinggi",
      time: "13:25 WIB",
      isPeat: true
    },
    {
      id: "HS-KALTENG-05",
      name: "Mantangai, Kab. Kapuas",
      province: "Kalimantan Tengah",
      region: "Kalimantan",
      lat: -2.124,
      lng: 114.542,
      ecosystem: "Kanal Sekunder Gambut",
      satellite: "VIIRS SNPP (375m)",
      frp: 66.5,
      brightness: 363.4,
      confidence: 94,
      status: "critical",
      statusLabel: "Kritis",
      time: "12:50 WIB",
      isPeat: true
    },

    // KALIMANTAN BARAT
    {
      id: "HS-KALBAR-01",
      name: "Rasau Jaya, Kubu Raya",
      province: "Kalimantan Barat",
      region: "Kalimantan",
      lat: -0.2145,
      lng: 109.3852,
      ecosystem: "Lahan Gambut Kering",
      satellite: "VIIRS SNPP (375m)",
      frp: 64.1,
      brightness: 362.8,
      confidence: 93,
      status: "critical",
      statusLabel: "Kritis",
      time: "15:35 WIB",
      isPeat: true
    },
    {
      id: "HS-KALBAR-02",
      name: "Kendawangan, Ketapang",
      province: "Kalimantan Barat",
      region: "Kalimantan",
      lat: -2.3412,
      lng: 110.2145,
      ecosystem: "Area Konsesi Terbuka",
      satellite: "VIIRS NOAA-20",
      frp: 51.3,
      brightness: 352.5,
      confidence: 89,
      status: "critical",
      statusLabel: "Kritis",
      time: "14:15 WIB",
      isPeat: false
    },
    {
      id: "HS-KALBAR-03",
      name: "Sungai Pinyuh, Mempawah",
      province: "Kalimantan Barat",
      region: "Kalimantan",
      lat: 0.3421,
      lng: 109.0842,
      ecosystem: "Semak Belukar Lereng",
      satellite: "MODIS Terra",
      frp: 36.7,
      brightness: 340.1,
      confidence: 82,
      status: "high",
      statusLabel: "Tinggi",
      time: "11:20 WIB",
      isPeat: false
    },
    {
      id: "HS-KALBAR-04",
      name: "Paloh, Kab. Sambas",
      province: "Kalimantan Barat",
      region: "Kalimantan",
      lat: 1.8124,
      lng: 109.2814,
      ecosystem: "Hutan Pesisir Perbatasan",
      satellite: "VIIRS SNPP (375m)",
      frp: 28.5,
      brightness: 334.6,
      confidence: 78,
      status: "medium",
      statusLabel: "Waspada",
      time: "10:45 WIB",
      isPeat: false
    },

    // SUMATERA SELATAN
    {
      id: "HS-SUMSEL-01",
      name: "Cengal, Ogan Komering Ilir (OKI)",
      province: "Sumatera Selatan",
      region: "Sumatera",
      lat: -3.4512,
      lng: 105.4125,
      ecosystem: "Rawa Gambut Pesisir",
      satellite: "VIIRS SNPP (375m)",
      frp: 82.0,
      brightness: 371.4,
      confidence: 97,
      status: "critical",
      statusLabel: "Kritis",
      time: "15:50 WIB",
      isPeat: true
    },
    {
      id: "HS-SUMSEL-02",
      name: "Tulung Selapan, Kab. OKI",
      province: "Sumatera Selatan",
      region: "Sumatera",
      lat: -3.3124,
      lng: 105.2148,
      ecosystem: "Kubah Gambut OKI",
      satellite: "VIIRS NOAA-20",
      frp: 78.4,
      brightness: 369.0,
      confidence: 95,
      status: "critical",
      statusLabel: "Kritis",
      time: "15:15 WIB",
      isPeat: true
    },
    {
      id: "HS-SUMSEL-03",
      name: "Bayung Lencir, Musi Banyuasin",
      province: "Sumatera Selatan",
      region: "Sumatera",
      lat: -1.9241,
      lng: 103.7125,
      ecosystem: "Batas Kawasan Suaka",
      satellite: "VIIRS SNPP (375m)",
      frp: 59.2,
      brightness: 357.2,
      confidence: 90,
      status: "critical",
      statusLabel: "Kritis",
      time: "13:40 WIB",
      isPeat: true
    },
    {
      id: "HS-SUMSEL-04",
      name: "Muara Telang, Banyuasin",
      province: "Sumatera Selatan",
      region: "Sumatera",
      lat: -2.4125,
      lng: 104.9124,
      ecosystem: "Rawa Pasang Surut",
      satellite: "MODIS Aqua",
      frp: 42.1,
      brightness: 343.8,
      confidence: 87,
      status: "high",
      statusLabel: "Tinggi",
      time: "12:10 WIB",
      isPeat: true
    },

    // JAMBI
    {
      id: "HS-JAMBI-01",
      name: "Kumpeh Ilir, Muaro Jambi",
      province: "Jambi",
      region: "Sumatera",
      lat: -1.5824,
      lng: 103.9421,
      ecosystem: "Kubah Gambut Kumpeh",
      satellite: "VIIRS SNPP (375m)",
      frp: 63.0,
      brightness: 360.5,
      confidence: 92,
      status: "critical",
      statusLabel: "Kritis",
      time: "14:55 WIB",
      isPeat: true
    },
    {
      id: "HS-JAMBI-02",
      name: "Betara, Tanjung Jabung Barat",
      province: "Jambi",
      region: "Sumatera",
      lat: -1.1425,
      lng: 103.3842,
      ecosystem: "Kanal Rawa Gambut",
      satellite: "VIIRS NOAA-20",
      frp: 47.3,
      brightness: 348.0,
      confidence: 86,
      status: "high",
      statusLabel: "Tinggi",
      time: "13:10 WIB",
      isPeat: true
    },
    {
      id: "HS-JAMBI-03",
      name: "Dendang, Tanjung Jabung Timur",
      province: "Jambi",
      region: "Sumatera",
      lat: -1.2841,
      lng: 103.8124,
      ecosystem: "Taman Hutan Raya",
      satellite: "MODIS Terra",
      frp: 38.0,
      brightness: 341.2,
      confidence: 81,
      status: "high",
      statusLabel: "Tinggi",
      time: "11:50 WIB",
      isPeat: true
    },

    // KALIMANTAN SELATAN & TIMUR
    {
      id: "HS-KALSEL-01",
      name: "Kertak Hanyar, Kab. Banjar",
      province: "Kalimantan Selatan",
      region: "Kalimantan",
      lat: -3.3842,
      lng: 114.6842,
      ecosystem: "Lahan Gambut Kering",
      satellite: "VIIRS SNPP (375m)",
      frp: 52.6,
      brightness: 353.4,
      confidence: 89,
      status: "high",
      statusLabel: "Tinggi",
      time: "14:30 WIB",
      isPeat: true
    },
    {
      id: "HS-KALSEL-02",
      name: "Bati-Bati, Tanah Laut",
      province: "Kalimantan Selatan",
      region: "Kalimantan",
      lat: -3.6124,
      lng: 114.7812,
      ecosystem: "Padang Rumput Ilalang",
      satellite: "MODIS Aqua",
      frp: 34.2,
      brightness: 338.5,
      confidence: 80,
      status: "medium",
      statusLabel: "Waspada",
      time: "10:15 WIB",
      isPeat: false
    },
    {
      id: "HS-KALTIM-01",
      name: "Muara Kaman, Kutai Kartanegara",
      province: "Kalimantan Timur",
      region: "Kalimantan",
      lat: -0.1425,
      lng: 116.8421,
      ecosystem: "Perbukitan Hutan Sekunder",
      satellite: "VIIRS SNPP (375m)",
      frp: 46.8,
      brightness: 347.5,
      confidence: 84,
      status: "high",
      statusLabel: "Tinggi",
      time: "12:40 WIB",
      isPeat: false
    },
    {
      id: "HS-KALTIM-02",
      name: "Kelay, Kab. Berau",
      province: "Kalimantan Timur",
      region: "Kalimantan",
      lat: 1.6842,
      lng: 117.2145,
      ecosystem: "Hutan Alami Lereng",
      satellite: "MODIS Terra",
      frp: 31.4,
      brightness: 336.2,
      confidence: 76,
      status: "medium",
      statusLabel: "Waspada",
      time: "09:30 WIB",
      isPeat: false
    },

    // PAPUA
    {
      id: "HS-PAPUA-01",
      name: "Kimaam, Merauke (Gambut Pesisir)",
      province: "Papua",
      region: "Papua",
      lat: -7.8421,
      lng: 138.8421,
      ecosystem: "Kubah Gambut & Sabana",
      satellite: "VIIRS SNPP (375m)",
      frp: 68.2,
      brightness: 364.5,
      confidence: 91,
      status: "critical",
      statusLabel: "Kritis",
      time: "16:20 WIT",
      isPeat: true
    },
    {
      id: "HS-PAPUA-02",
      name: "Muting, Merauke",
      province: "Papua",
      region: "Papua",
      lat: -7.4124,
      lng: 140.2145,
      ecosystem: "Hutan Sabana Trans-Papua",
      satellite: "VIIRS NOAA-20",
      frp: 53.6,
      brightness: 354.0,
      confidence: 87,
      status: "critical",
      statusLabel: "Kritis",
      time: "15:00 WIT",
      isPeat: false
    },
    {
      id: "HS-PAPUA-03",
      name: "Citak Mitak, Kab. Mappi",
      province: "Papua",
      region: "Papua",
      lat: -6.5841,
      lng: 139.7125,
      ecosystem: "Rawa Pedalaman Mappi",
      satellite: "MODIS Aqua",
      frp: 41.5,
      brightness: 342.9,
      confidence: 82,
      status: "high",
      statusLabel: "Tinggi",
      time: "13:30 WIT",
      isPeat: true
    },

    // JAWA & NUSA TENGGARA
    {
      id: "HS-JAWA-01",
      name: "TN Bromo Tengger Semeru",
      province: "Jawa Timur",
      region: "Jawa",
      lat: -7.9425,
      lng: 112.9532,
      ecosystem: "Sabana Kering Kaldera",
      satellite: "VIIRS SNPP (375m)",
      frp: 28.0,
      brightness: 335.0,
      confidence: 80,
      status: "medium",
      statusLabel: "Waspada",
      time: "11:10 WIB",
      isPeat: false
    },
    {
      id: "HS-JAWA-02",
      name: "Lereng Gunung Merbabu",
      province: "Jawa Tengah",
      region: "Jawa",
      lat: -7.4521,
      lng: 110.4382,
      ecosystem: "Vegetasi Semak Kering",
      satellite: "MODIS Terra",
      frp: 22.4,
      brightness: 331.2,
      confidence: 74,
      status: "medium",
      statusLabel: "Waspada",
      time: "10:05 WIB",
      isPeat: false
    },
    {
      id: "HS-NTT-01",
      name: "Haharu, Sumba Timur",
      province: "Nusa Tenggara",
      region: "Jawa",
      lat: -9.7421,
      lng: 120.2145,
      ecosystem: "Padang Sabana Tropis",
      satellite: "VIIRS SNPP (375m)",
      frp: 35.8,
      brightness: 339.4,
      confidence: 81,
      status: "high",
      statusLabel: "Tinggi",
      time: "12:00 WITA",
      isPeat: false
    }
  ];

  // HK-PATCH: Dataset aktif (diisi dari file terpisah js/firms-hotspots-data.js saat peta mendekati viewport)
  let activeHotspotsDataset = Array.isArray(window.FIRMS_HOTSPOTS_DATA) && window.FIRMS_HOTSPOTS_DATA.length
    ? window.FIRMS_HOTSPOTS_DATA
    : INDONESIA_HOTSPOTS;
  let currentHotspots = [...activeHotspotsDataset];
  let leafletMapInstance = null;
  let hotspotMarkersLayer = null;
  let activeFilter = "all";
  let activeRegionFilter = "all";
  let isHotspotMapInitialized = false;
  let isFirmsScriptLoading = false;

  // HK-PATCH: Pemuatan berkas data terpisah js/firms-hotspots-data.js (aman untuk protokol file:// maupun http://)
  function loadFirmsSnapshotScript(onDone) {
    if (Array.isArray(window.FIRMS_HOTSPOTS_DATA) && window.FIRMS_HOTSPOTS_DATA.length) {
      activeHotspotsDataset = window.FIRMS_HOTSPOTS_DATA;
      if (typeof onDone === "function") onDone();
      return;
    }
    if (isFirmsScriptLoading) {
      if (typeof onDone === "function") setTimeout(onDone, 180);
      return;
    }
    isFirmsScriptLoading = true;
    const scriptEl = document.createElement("script");
    scriptEl.src = "js/firms-hotspots-data.js";
    scriptEl.async = true;
    scriptEl.onload = () => {
      if (Array.isArray(window.FIRMS_HOTSPOTS_DATA) && window.FIRMS_HOTSPOTS_DATA.length) {
        activeHotspotsDataset = window.FIRMS_HOTSPOTS_DATA;
      }
      if (window.FIRMS_SNAPSHOT_META && window.FIRMS_SNAPSHOT_META.dateRange) {
        const badgeEl = document.getElementById("hotspotSourceBadgeText");
        if (badgeEl) {
          badgeEl.textContent = `Snapshot 1–2 November 2026, sumber NASA FIRMS`;
        }
      }
      if (typeof onDone === "function") onDone();
    };
    scriptEl.onerror = () => {
      activeHotspotsDataset = INDONESIA_HOTSPOTS;
      const badgeEl = document.getElementById("hotspotSourceBadgeText");
      if (badgeEl) {
        badgeEl.textContent = "Data contoh/ilustrasi titik panas";
      }
      if (typeof onDone === "function") onDone();
    };
    document.head.appendChild(scriptEl);
  }

  // HK-PATCH: Penyaringan wilayah klaster terhadap dataset aktif
  function applyRegionDatasetFilter(regionKey) {
    activeRegionFilter = regionKey || "all";
    if (activeRegionFilter === "sumatra") {
      currentHotspots = activeHotspotsDataset.filter((s) => s.region === "Sumatera");
    } else if (activeRegionFilter === "kalimantan") {
      currentHotspots = activeHotspotsDataset.filter((s) => s.region === "Kalimantan");
    } else if (activeRegionFilter === "papua") {
      currentHotspots = activeHotspotsDataset.filter(
        (s) => s.region === "Papua" || s.region === "Sulawesi"
      );
    } else if (activeRegionFilter === "jawa") {
      currentHotspots = activeHotspotsDataset.filter((s) => s.region === "Jawa");
    } else {
      currentHotspots = [...activeHotspotsDataset];
    }
  }

  // Helper membuat ikon titik api berdenyut alami (Pure SVG Marker: Merah Api Kritis & Emas Bara Gambut)
  function createPulseIcon(status) {
    let markerClass = "marker-high";
    if (status === "critical") markerClass = "marker-critical";
    else if (status === "medium") markerClass = "marker-medium";
    else if (status === "user") markerClass = "marker-user";

    return L.divIcon({
      className: "leaflet-custom-pulse",
      html: `
        <div class="hotspot-pulse-marker ${markerClass}">
          <div class="hotspot-pulse-ring"></div>
          <div class="marker-flame-circle">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
              <path d="M12 2c-.5 2.5-2 4.9-4 6.5-2 1.6-3 3.5-3 5.5a7 7 0 1 0 14 0c0-1.153-.433-2.294-1-3a2.5 2.5 0 0 1-2.5-2.5c0-1.38.5-2 1-3 1.072-2.143.224-4.054-2-6z"/>
            </svg>
          </div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -18]
    });
  }

  // Helper membuat pop-up ringkas & langsung to-the-point (Pure SVG Icons, No Emojis)
  function createPopupHTML(spot) {
    const isCritical = spot.status === "critical";
    const badgeClass = isCritical ? "badge-danger" : (spot.isPeat ? "badge-amber" : "badge-emerald");
    const heatColor = isCritical ? "#f87171" : (spot.isPeat ? "#fbbf24" : "#34d399");

    const latFixed = spot.lat.toFixed(4);
    const lngFixed = spot.lng.toFixed(4);

    return `
      <div class="simple-hotspot-bubble">
        <div class="bubble-header">
          <span class="hotspot-badge-pill ${badgeClass}">${spot.statusLabel}</span>
          <span class="bubble-time">${spot.time}</span>
        </div>
        <h4 class="bubble-title">${spot.name}</h4>
        <div class="bubble-info-row">
          <div>Ekosistem: <strong>${spot.ecosystem}</strong></div>
          <div>Radiasi Panas: <strong style="color: ${heatColor};">${spot.frp} MW</strong></div>
        </div>
        <div class="bubble-actions">
          <a href="tel:113" class="btn-bubble-call">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>Panggil Damkar 113</span>
          </a>
          <a href="https://wa.me/6281196201123?text=Halo%20Manggala%20Agni%2C%20saya%20melihat%20titik%20api%20di%20${encodeURIComponent(spot.name)}%20(GPS%3A%20${latFixed}%2C%20${lngFixed})" target="_blank" rel="noopener noreferrer" class="btn-bubble-wa">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>Lapor WA Posko</span>
          </a>
          <button class="btn-bubble-copy" onclick="window.copyToClipboard('${latFixed}, ${lngFixed}', 'Koordinat GPS disalin!')" type="button">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Salin Koordinat</span>
          </button>
        </div>
      </div>
    `;
  }

  // Render Markers & Update Ringkasan Filter (Sinkronisasi Penuh Lokasi Klaster & Status Titik Api)
  function renderHotspots() {
    const filtered = currentHotspots.filter((spot) => {
      if (activeFilter === "critical") return spot.status === "critical";
      if (activeFilter === "peat") return spot.isPeat === true;
      return true;
    });

    // 1. Update angka pada Status Titik Api sesuai Wilayah Klaster yang sedang aktif
    const totalCount = currentHotspots.length;
    const criticalCount = currentHotspots.filter((s) => s.status === "critical").length;
    const peatCount = currentHotspots.filter((s) => s.isPeat).length;

    const elCountAll = document.getElementById("simpleCountAll");
    const dropCountAll = document.getElementById("dropCountAll");
    const dropCountPeat = document.getElementById("dropCountPeat");
    const dropCountCrit = document.getElementById("dropCountCrit");
    const floatingStatusVal = document.getElementById("floatingStatusVal");

    if (elCountAll) elCountAll.textContent = totalCount;
    if (dropCountAll) dropCountAll.textContent = totalCount;
    if (dropCountPeat) dropCountPeat.textContent = peatCount;
    if (dropCountCrit) dropCountCrit.textContent = criticalCount;

    if (floatingStatusVal) {
      if (activeFilter === "critical") {
        floatingStatusVal.innerHTML = `Kritis Ekstrem (<span id="simpleCountAll">${criticalCount}</span>)`;
      } else if (activeFilter === "peat") {
        floatingStatusVal.innerHTML = `Kubah Gambut (<span id="simpleCountAll">${peatCount}</span>)`;
      } else {
        floatingStatusVal.innerHTML = `Semua Titik (<span id="simpleCountAll">${totalCount}</span>)`;
      }
    }

    // 2. Update angka pada Lokasi Klaster sesuai Status Titik Api yang sedang aktif
    const statusMatchedDataset = activeHotspotsDataset.filter((spot) => {
      if (activeFilter === "critical") return spot.status === "critical";
      if (activeFilter === "peat") return spot.isPeat === true;
      return true;
    });

    const countRegAll = statusMatchedDataset.length;
    const countRegSumatra = statusMatchedDataset.filter((s) => s.region === "Sumatera").length;
    const countRegKalimantan = statusMatchedDataset.filter((s) => s.region === "Kalimantan").length;
    const countRegPapua = statusMatchedDataset.filter((s) => s.region === "Papua" || s.region === "Sulawesi").length;
    const countRegJawa = statusMatchedDataset.filter((s) => s.region === "Jawa").length;

    const elRegAll = document.getElementById("regCountAll");
    const elRegSumatra = document.getElementById("regCountSumatra");
    const elRegKalimantan = document.getElementById("regCountKalimantan");
    const elRegPapua = document.getElementById("regCountPapua");
    const elRegJawa = document.getElementById("regCountJawa");
    const floatingRegionVal = document.getElementById("floatingRegionVal");

    if (elRegAll) elRegAll.textContent = countRegAll;
    if (elRegSumatra) elRegSumatra.textContent = countRegSumatra;
    if (elRegKalimantan) elRegKalimantan.textContent = countRegKalimantan;
    if (elRegPapua) elRegPapua.textContent = countRegPapua;
    if (elRegJawa) elRegJawa.textContent = countRegJawa;

    if (floatingRegionVal) {
      const regionTitles = {
        all: `Semua Wilayah (${countRegAll})`,
        sumatra: `Sumatera — Riau & Jambi (${countRegSumatra})`,
        kalimantan: `Kalimantan — Kalteng & Kalbar (${countRegKalimantan})`,
        papua: `Papua & Maluku (${countRegPapua})`,
        jawa: `Jawa & Nusa Tenggara (${countRegJawa})`
      };
      floatingRegionVal.textContent = regionTitles[activeRegionFilter] || regionTitles.all;
    }

    if (!hotspotMarkersLayer) return;
    hotspotMarkersLayer.clearLayers();

    // Render marker ke map dengan popup warna dinamis (Merah jika status kritis)
    filtered.forEach((spot) => {
      const marker = L.marker([spot.lat, spot.lng], {
        icon: createPulseIcon(spot.status),
        title: spot.name
      });

      const popupTheme = spot.status === "critical" ? "popup-theme-danger" : (spot.isPeat ? "popup-theme-amber" : "popup-theme-emerald");

      marker.bindPopup(createPopupHTML(spot), {
        maxWidth: 300,
        className: `custom-seamless-popup ${popupTheme}`
      });
      spot._marker = marker;
      hotspotMarkersLayer.addLayer(marker);
    });
  }

  // HK-PATCH: Inisialisasi Leaflet & tile Esri ditunda sampai section #peta-titik-api mendekati viewport
  function initHotspotLeafletMap(onReady) {
    if (!mapElement || typeof L === "undefined") return;
    if (isHotspotMapInitialized && leafletMapInstance) {
      if (typeof onReady === "function") onReady();
      return;
    }

    isHotspotMapInitialized = true;
    loadFirmsSnapshotScript(() => {
      applyRegionDatasetFilter(activeRegionFilter);

      const initialZoom = window.innerWidth <= 768 ? 4 : 5;
      // HK-PATCH: Aktifkan attributionControl: true sesuai syarat atribusi Esri
      leafletMapInstance = L.map("hotspotLeafletMap", {
        center: [-1.5, 117.5],
        zoom: initialZoom,
        minZoom: 3,
        maxZoom: 16,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: true
      });

      // HK-PATCH: Teks atribusi resmi Esri World Imagery dan sumber data NASA FIRMS
      const satelliteTile = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          maxZoom: 18,
          attribution:
            "Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community | Data titik panas: NASA FIRMS"
        }
      );
      satelliteTile.addTo(leafletMapInstance);

      // HK-PATCH: Teks atribusi resmi Esri Reference Boundaries and Places
      const boundariesTile = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
        {
          maxZoom: 18,
          attribution: "Esri, HERE, Garmin, OpenStreetMap contributors",
          opacity: 0.6
        }
      );
      boundariesTile.addTo(leafletMapInstance);

      window.addEventListener("resize", () => {
        if (leafletMapInstance) leafletMapInstance.invalidateSize();
      });
      setTimeout(() => {
        if (leafletMapInstance) leafletMapInstance.invalidateSize();
      }, 250);

      hotspotMarkersLayer = L.layerGroup().addTo(leafletMapInstance);
      renderHotspots();

      if (typeof onReady === "function") onReady();
    });
  }

  if (mapElement && typeof L !== "undefined") {
    // HK-PATCH: Sinkronkan jumlah klaster & status titik api sejak awal
    loadFirmsSnapshotScript(() => {
      applyRegionDatasetFilter(activeRegionFilter);
      renderHotspots();
    });

    // HK-PATCH: Gunakan IntersectionObserver agar inisialisasi Leaflet & pemuatan tile Esri ringan
    const mapSectionTarget = document.getElementById("peta-titik-api") || mapElement;
    if ("IntersectionObserver" in window && mapSectionTarget) {
      const mapLazyObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              obs.unobserve(entry.target);
              initHotspotLeafletMap();
            }
          });
        },
        {
          root: null,
          rootMargin: "350px 0px",
          threshold: 0.01
        }
      );
      mapLazyObserver.observe(mapSectionTarget);
    } else {
      initHotspotLeafletMap();
    }

    // Dropdown Handling untuk Lokasi Klaster & Status Titik Api
    const filterCapsuleRegion = document.getElementById("filterCapsuleRegion");
    const dropdownRegionMenu = document.getElementById("dropdownRegionMenu");
    const filterCapsuleStatus = document.getElementById("filterCapsuleStatus");
    const dropdownStatusMenu = document.getElementById("dropdownStatusMenu");

    function closeAllCapsuleDropdowns() {
      if (dropdownRegionMenu) dropdownRegionMenu.classList.remove("show");
      if (dropdownStatusMenu) dropdownStatusMenu.classList.remove("show");
      if (filterCapsuleRegion) filterCapsuleRegion.classList.remove("open");
      if (filterCapsuleStatus) filterCapsuleStatus.classList.remove("open");
    }

    // Toggle Dropdown Wilayah
    if (filterCapsuleRegion && dropdownRegionMenu) {
      filterCapsuleRegion.addEventListener("click", (e) => {
        if (e.target.closest(".dropdown-item")) return;
        const isShown = dropdownRegionMenu.classList.contains("show");
        closeAllCapsuleDropdowns();
        if (!isShown) {
          dropdownRegionMenu.classList.add("show");
          filterCapsuleRegion.classList.add("open");
        }
      });

      dropdownRegionMenu.querySelectorAll(".dropdown-item").forEach((item) => {
        item.addEventListener("click", (e) => {
          e.stopPropagation();
          const region = item.getAttribute("data-region") || "all";
          const regionLabel = item.querySelector("span")?.textContent || "Semua Wilayah";
          const valText = document.getElementById("floatingRegionVal");
          if (valText) valText.textContent = regionLabel;

          dropdownRegionMenu.querySelectorAll(".dropdown-item").forEach((it) => it.classList.remove("active"));
          item.classList.add("active");

          closeAllCapsuleDropdowns();

          initHotspotLeafletMap(() => {
            applyRegionDatasetFilter(region);
            renderHotspots();

            if (region === "sumatra") {
              leafletMapInstance.flyTo([0.5, 101.5], 6, { duration: 1.2 });
            } else if (region === "kalimantan") {
              leafletMapInstance.flyTo([-1.5, 113.5], 6, { duration: 1.2 });
            } else if (region === "papua") {
              leafletMapInstance.flyTo([-3.5, 134.5], 5, { duration: 1.2 });
            } else if (region === "jawa") {
              leafletMapInstance.flyTo([-7.5, 113.5], 6, { duration: 1.2 });
            } else {
              leafletMapInstance.flyTo([-1.5, 117.5], 5, { duration: 1.2 });
            }

            if (typeof window.showToast === "function") {
              window.showToast(`Fokus peta: ${regionLabel}`);
            }
          });
        });
      });
    }

    // Toggle Dropdown Status Titik Api
    if (filterCapsuleStatus && dropdownStatusMenu) {
      filterCapsuleStatus.addEventListener("click", (e) => {
        if (e.target.closest(".dropdown-item")) return;
        const isShown = dropdownStatusMenu.classList.contains("show");
        closeAllCapsuleDropdowns();
        if (!isShown) {
          dropdownStatusMenu.classList.add("show");
          filterCapsuleStatus.classList.add("open");
        }
      });

      dropdownStatusMenu.querySelectorAll(".dropdown-item").forEach((item) => {
        item.addEventListener("click", (e) => {
          e.stopPropagation();
          activeFilter = item.getAttribute("data-status") || "all";

          dropdownStatusMenu.querySelectorAll(".dropdown-item").forEach((it) => it.classList.remove("active"));
          item.classList.add("active");

          closeAllCapsuleDropdowns();

          initHotspotLeafletMap(() => {
            renderHotspots();

            if (typeof window.showToast === "function") {
              if (activeFilter === "peat" && currentHotspots.filter((s) => s.isPeat).length === 0) {
                window.showToast("Data CSV NASA FIRMS tidak memuat atribut gambut (0 titik).");
              } else {
                const filterLabel =
                  activeFilter === "critical"
                    ? "Kritis Ekstrem"
                    : activeFilter === "peat"
                    ? "Kubah Gambut"
                    : "Semua Titik";
                window.showToast(`Menampilkan: ${filterLabel}`);
              }
            }
          });
        });
      });
    }

    // Tutup Dropdown jika Klik di Luar Kapsul
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".floating-capsule-item")) {
        closeAllCapsuleDropdowns();
      }
    });

    // Listener Tombol Reset / Search Bulat Emas
    const btnResetZoom = document.getElementById("btnResetMapZoom");
    if (btnResetZoom) {
      btnResetZoom.addEventListener("click", () => {
        activeFilter = "all";
        activeRegionFilter = "all";
        const valRegion = document.getElementById("floatingRegionVal");
        if (valRegion) valRegion.textContent = "Semua Wilayah (Nusantara)";
        if (dropdownRegionMenu) {
          dropdownRegionMenu.querySelectorAll(".dropdown-item").forEach((it) => it.classList.toggle("active", it.getAttribute("data-region") === "all"));
        }
        if (dropdownStatusMenu) {
          dropdownStatusMenu.querySelectorAll(".dropdown-item").forEach((it) => it.classList.toggle("active", it.getAttribute("data-status") === "all"));
        }
        closeAllCapsuleDropdowns();

        initHotspotLeafletMap(() => {
          applyRegionDatasetFilter("all");
          leafletMapInstance.flyTo([-1.5, 117.5], 5, { duration: 1.2 });
          renderHotspots();
          if (typeof window.showToast === "function") {
            window.showToast("Tampilan peta Indonesia dipusatkan kembali.");
          }
        });
      });
    }
  }

  /* ==========================================================================
     8. MODAL POP-UP DETAIL INFORMASI & FOTO KARTU (GALLERY & ANCAMAN)
     ========================================================================== */
  const cardModal = document.getElementById("cardDetailModal");
  const modalImg = document.getElementById("modalCardImg");
  const modalTag = document.getElementById("modalCardTag");
  const modalTitle = document.getElementById("modalCardTitle");
  const modalDesc = document.getElementById("modalCardDesc");
  const modalExtra = document.getElementById("modalCardExtra");
  const btnCloseModal = document.getElementById("btnCloseCardModal");
  const btnDismissModal = document.getElementById("btnDismissCardModal");

  const GALLERY_DETAIL_DATA = [
    {
      title: "Penyisiran Zona Inti Rimba",
      tag: "Patroli Kawasan",
      desc: "Operasi terpadu polisi kehutanan menyusuri batas taman nasional untuk membongkar jerat satwa liar dan mencegah perambahan lahan konsesi.",
      extra: "Patroli berkala ini melibatkan masyarakat mitra kehutanan (MMP) untuk memetakan jalur lintasan satwa dan menjaga keutuhan 120+ juta hektar tutupan kanopi alami nusantara.",
      theme: "emerald"
    },
    {
      title: "Pemadaman Bara Gambut",
      tag: "Operasi Karhutla",
      desc: "Satuan Manggala Agni memadamkan api bawah tanah di kubah gambut yang rawan menjalar luas saat musim kemarau ekstrem.",
      extra: "Pemadaman lahan gambut membutuhkan teknik penyuntikan air bertekanan tinggi hingga kedalaman 4-8 meter di bawah permukaan untuk mematikan sisa bara pembakaran biomassa.",
      theme: "emerald"
    },
    {
      title: "Evakuasi & Pelepasliaran Orangutan",
      tag: "Konservasi Satwa",
      desc: "Penyelamatan induk dan bayi orangutan dari areal terdampak menuju stasiun rehabilitasi dan suaka hutan lindung alami.",
      extra: "Orangutan (Pongo pygmaeus & Pongo abelii) merupakan spesies payung penyebar biji hutan tropis yang sangat krusial dalam regenerasi vegetasi pohon purba alami.",
      theme: "emerald"
    },
    {
      title: "Penyitaan Armada & Kayu Ilegal",
      tag: "Gakkum Kehutanan",
      desc: "Penyegelan barang bukti buldoser, truk logging, dan ribuan batang kayu bulat hasil operasi tangkap tangan pembalakan liar.",
      extra: "Gakkum KLHK berkoordinasi dengan Polri dan TNI memberlakukan sanksi pidana UU No. 18 Tahun 2013 hingga 15 tahun kurungan dan denda Rp 100 miliar bagi korporasi dan cukong kayu.",
      theme: "danger"
    },
    {
      title: "Deteksi Titik Api Real-Time",
      tag: "Satelit Radar",
      desc: "Pengawasan spasial resolusi tinggi untuk mendeteksi anomali suhu dan pembukaan tutupan tajuk pohon secara seketika dari orbit.",
      extra: "Data radar satelit VIIRS SNPP 375m dan MODIS Terra/Aqua terintegrasi secara otomatis ke sistem monitoring Sipongi+ untuk peringatan dini sebelum bara membesar.",
      theme: "emerald"
    },
    {
      title: "Penanaman Pohon Endemik",
      tag: "Restorasi Ekologis",
      desc: "Penanaman kembali bibit Meranti dan Ulin purba di lahan konservasi untuk memulihkan daya serap karbon alami.",
      extra: "Program reboisasi menggunakan bibit pohon bernilai konservasi tinggi yang mampu bertahan di tanah miskin hara dan mengembalikan keanekaragaman hayati tanah rimba.",
      theme: "emerald"
    }
  ];

  // Helper Membuka Modal Pop-up dengan Pewarnaan Dinamis Sesuai Tema Kartu (Hijau untuk Konservasi/Restorasi, Merah untuk Bahaya/Sanksi)
  function openCardModal(imgSrc, tagText, titleText, descText, extraText, themeOverride) {
    if (!cardModal) return;
    if (modalImg) modalImg.src = imgSrc || "assets/images/bg-hero-slide2.webp";
    if (modalTag) modalTag.textContent = tagText || "Dokumentasi";
    if (modalTitle) modalTitle.textContent = titleText || "";
    if (modalDesc) modalDesc.textContent = descText || "";
    if (modalExtra) {
      modalExtra.textContent = extraText || "";
      modalExtra.style.display = extraText ? "block" : "none";
    }

    const dialog = cardModal.querySelector(".site-modal-dialog");
    if (dialog) {
      dialog.classList.remove("modal-theme-danger", "modal-theme-amber", "modal-theme-emerald");

      // Deteksi tema: prioritaskan themeOverride jika ada
      let theme = "emerald";
      if (themeOverride === "danger" || themeOverride === "red") {
        theme = "danger";
      } else if (themeOverride === "emerald" || themeOverride === "green") {
        theme = "emerald";
      } else {
        // Fallback jika tidak ada override: periksa tag dan judul secara ketat
        const titleAndTag = `${tagText} ${titleText}`.toLowerCase();
        const isStrictDanger = titleAndTag.includes("sanksi") ||
          titleAndTag.includes("pidana") ||
          titleAndTag.includes("penyitaan") ||
          titleAndTag.includes("ilegal") ||
          titleAndTag.includes("karhutla") ||
          titleAndTag.includes("bara gambut") ||
          titleAndTag.includes("pemadaman") ||
          titleAndTag.includes("penebangan liar") ||
          titleAndTag.includes("krisis");
        theme = isStrictDanger ? "danger" : "emerald";
      }

      dialog.classList.add(`modal-theme-${theme}`);
    }

    cardModal.classList.add("show");
    cardModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeCardModal() {
    if (!cardModal) return;
    cardModal.classList.remove("show");
    cardModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (btnCloseModal) btnCloseModal.addEventListener("click", closeCardModal);
  if (btnDismissModal) btnDismissModal.addEventListener("click", closeCardModal);
  if (cardModal) {
    cardModal.addEventListener("click", (e) => {
      if (e.target === cardModal) closeCardModal();
    });
  }

  // Pasang event listener klik pada semua kartu galeri (.doc-card)
  const docCarouselTrack = document.getElementById("docCarouselTrack");
  if (docCarouselTrack) {
    docCarouselTrack.addEventListener("click", (e) => {
      const card = e.target.closest(".doc-card");
      if (!card) return;

      const imgEl = card.querySelector(".doc-card-img");
      const titleEl = card.querySelector(".doc-card-title");
      const descEl = card.querySelector(".doc-card-desc");
      const tagEl = card.querySelector(".doc-pill");

      const rawIndex = parseInt(card.getAttribute("data-index"), 10) || 0;
      const dataDetail = GALLERY_DETAIL_DATA[rawIndex % GALLERY_DETAIL_DATA.length];

      openCardModal(
        imgEl ? imgEl.src : "",
        tagEl ? tagEl.textContent.trim() : (dataDetail ? dataDetail.tag : "Galeri Rimba"),
        titleEl ? titleEl.textContent.trim() : (dataDetail ? dataDetail.title : ""),
        descEl ? descEl.textContent.trim() : (dataDetail ? dataDetail.desc : ""),
        dataDetail ? dataDetail.extra : "",
        dataDetail ? dataDetail.theme : "emerald"
      );
    });
  }

  // Pasang listener pada banner foto krisis (.crisis-half) - Otomatis Bertema Merah (Danger)
  const crisisHalves = document.querySelectorAll(".crisis-half");
  crisisHalves.forEach((half) => {
    half.style.cursor = "pointer";
    half.addEventListener("click", () => {
      const img = half.querySelector(".crisis-half-img");
      const title = half.querySelector(".crisis-title-in-photo");
      const desc = half.querySelector(".crisis-desc-in-photo");
      const pill = half.querySelector(".card-pill span:last-child");

      openCardModal(
        img ? img.src : "",
        pill ? pill.textContent.trim() : "Investigasi Krisis",
        title ? title.textContent.trim() : "Dampak Kerusakan Lingkungan",
        desc ? desc.textContent.trim() : "",
        "Perusakan hutan secara ilegal melanggar UU No. 18/2013 dan UU No. 32/2009 dengan ancaman sanksi pidana kurungan hingga 15 tahun dan denda ratusan miliar rupiah.",
        "danger"
      );
    });
  });



  /* ==========================================================================
     9. MODAL POP-UP DIREKTORI LENGKAP NOMOR KONTAK DARURAT
     ========================================================================== */
  const hotlineModal = document.getElementById("hotlineQuickModal");
  const btnOpenHotlines = document.getElementById("btnOpenHotlineModal");
  const btnCloseHotlines = document.getElementById("btnCloseHotlineModal");

  function openHotlineModal() {
    if (!hotlineModal) return;
    hotlineModal.classList.add("show");
    hotlineModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeHotlineModal() {
    if (!hotlineModal) return;
    hotlineModal.classList.remove("show");
    hotlineModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (btnOpenHotlines) btnOpenHotlines.addEventListener("click", openHotlineModal);
  if (btnCloseHotlines) btnCloseHotlines.addEventListener("click", closeHotlineModal);
  if (hotlineModal) {
    hotlineModal.addEventListener("click", (e) => {
      if (e.target === hotlineModal) closeHotlineModal();
    });
  }

  // Tombol Escape menutup semua modal yang sedang terbuka
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCardModal();
      closeHotlineModal();
    }
  });

  /* ==========================================================================
     10. CTA AJAKAN MENJAGA HUTAN: IKRAR & BAGIKAN
     ========================================================================== */
  const btnPledge = document.getElementById("btnPledgeForest");
  const btnShare = document.getElementById("btnShareCampaign");

  if (btnPledge) {
    btnPledge.addEventListener("click", () => {
      btnPledge.classList.add("pledged");
      btnPledge.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Ikrar Anda Telah Tercatat!</span>
      `;
      window.showToast("Terima kasih atas komitmen Anda menjaga kelestarian rimba Indonesia!");
    });
  }

  if (btnShare) {
    btnShare.addEventListener("click", () => {
      const shareData = {
        title: "HutanKita - Edukasi & Pelestarian Hutan Tropis Indonesia",
        text: "Mari bersama menjaga dan melestarikan paru-paru dunia rimba nusantara!",
        url: window.location.href
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData).catch(() => { });
      } else {
        window.copyToClipboard(window.location.href, "Tautan edukasi rimba disalin ke clipboard!");
      }
    });
  }

  // Back to Top Button
  const btnBackToTop = document.getElementById("btnBackToTop");
  if (btnBackToTop) {
    btnBackToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Global Helper: Salin Teks ke Clipboard
  window.copyToClipboard = function (text, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        window.showToast(successMessage || "Berhasil disalin ke clipboard!");
      });
    } else {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      window.showToast(successMessage || "Berhasil disalin ke clipboard!");
    }
  };

  // Global Helper: Tampilkan Toast Notifikasi
  window.showToast = function (message) {
    const toast = document.getElementById("siteToast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  };

  /* ==========================================================================
     MOBILE APP BOTTOM NAV SCROLL SPY (PRECISION SYNCHRONIZATION)
     ========================================================================== */
  const mobileNavItems = document.querySelectorAll(".mobile-bottom-app-bar .app-nav-item");
  if (mobileNavItems.length > 0) {
    const trackedSections = [
      { id: "hero", el: document.getElementById("hero") },
      { id: "edukasi", el: document.getElementById("edukasi") },
      { id: "perusakan-hutan", el: document.getElementById("perusakan-hutan") },
      { id: "galeri-hutan", el: document.getElementById("galeri-hutan") },
      { id: "peta-titik-api", el: document.getElementById("peta-titik-api") || document.getElementById("area-titik-dan-cta") }
    ];

    function setActiveNav(targetId) {
      mobileNavItems.forEach((navItem) => {
        const isMatch = navItem.getAttribute("data-nav") === targetId;
        navItem.classList.toggle("active", isMatch);
      });
    }

    function updateActiveMobileNav() {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Jika sudah dekat bagian paling bawah (Footer/CTA/Titik Api), aktifkan Titik Api
      if (windowHeight + scrollY >= documentHeight - 120) {
        setActiveNav("peta-titik-api");
        return;
      }

      // 2. Jika di paling atas (Hero), aktifkan Beranda
      if (scrollY < 120) {
        setActiveNav("hero");
        return;
      }

      // 3. Gunakan getBoundingClientRect untuk deteksi akurat bagian yang sedang di tengah layar
      const viewportMid = windowHeight * 0.42;
      let activeId = "hero";

      for (let i = 0; i < trackedSections.length; i++) {
        const sec = trackedSections[i];
        if (!sec.el) continue;
        const rect = sec.el.getBoundingClientRect();
        if (rect.top <= viewportMid && rect.bottom > 80) {
          activeId = sec.id;
        }
      }

      setActiveNav(activeId);
    }

    // Navigasi responsif seketika saat di-tap/klik
    mobileNavItems.forEach((navItem) => {
      navItem.addEventListener("click", () => {
        const targetId = navItem.getAttribute("data-nav");
        if (targetId) setActiveNav(targetId);
      });
    });

    window.addEventListener("scroll", updateActiveMobileNav, { passive: true });
    window.addEventListener("resize", updateActiveMobileNav, { passive: true });
    updateActiveMobileNav();
  }

  /* ==========================================================================
     8. EFEK TRANSISI SMOOTH SCROLL REVEAL (INTERSECTION OBSERVER)
     Elemen muncul secara halus dan anggun saat di-scroll ke dalam layar
     ========================================================================== */
  function initScrollReveal() {
    const revealTargets = [
      ".edu-text-col",
      ".edu-3d-col",
      ".stat-item",
      ".tree-center-header",
      ".tree-3d-stage",
      ".detail-desc-wrapper",
      ".interactive-part-card",
      ".destruction-header",
      ".unified-crisis-banner",
      ".penalties-header",
      ".penalty-accordion-card",
      ".gallery-header",
      ".doc-carousel-container",
      ".simple-map-header",
      ".seamless-map-stage",
      ".cta-content-col",
      ".cta-video-col",
      ".footer-top-grid .footer-col",
      ".footer-bottom-bar"
    ];

    const elements = Array.from(document.querySelectorAll(revealTargets.join(", ")))
      .filter((el) => !el.closest(".hero-fullscreen"));

    if (!elements.length) return;

    // Pasang class .scroll-reveal dan stagger delay otomatis untuk grid/kartu bersaudara
    elements.forEach((el) => {
      el.classList.add("scroll-reveal");

      const parentGrid = el.closest(".edu-stats-row, .tree-parts-interactive-grid, .penalty-accordions-wrapper, .footer-top-grid");
      if (parentGrid) {
        const siblings = Array.from(parentGrid.children).filter(c => c.classList.contains("scroll-reveal"));
        const idx = siblings.indexOf(el);
        if (idx > 0 && !el.hasAttribute("data-delay")) {
          el.setAttribute("data-delay", String(Math.min(idx * 80, 400)));
        }
      }
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const isMobile = window.innerWidth <= 768;
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.add("is-visible");

          // Refresh ukuran peta leaflet saat mulai terlihat
          if (target.classList.contains("seamless-map-stage") && typeof leafletMapInstance !== "undefined" && leafletMapInstance) {
            setTimeout(() => {
              leafletMapInstance.invalidateSize();
            }, 300);
          }

          obs.unobserve(target);
          setTimeout(() => {
            target.classList.add("reveal-complete");
          }, 950);
        }
      });
    }, {
      root: null,
      rootMargin: isMobile ? "0px 0px -40px 0px" : "0px 0px -60px 0px",
      threshold: isMobile ? 0.05 : 0.1
    });

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        el.classList.add("is-visible");
        setTimeout(() => el.classList.add("reveal-complete"), 500);
      } else {
        observer.observe(el);
      }
    });
  }

  // Aktifkan scroll reveal
  setTimeout(initScrollReveal, 100);

  // ========================================================================
  // 13. SITE PRELOADER / LOADING SCREEN
  // ========================================================================
  function initPreloader() {
    const preloader = document.getElementById("sitePreloader");
    if (!preloader) return;

    const progressBar = document.getElementById("preloaderProgress");
    const percentText = document.getElementById("preloaderPercent");
    const statusText = document.getElementById("preloaderStatusText");

    document.body.classList.add("is-preloading");

    let currentProgress = 0;
    let targetProgress = 20;
    let isWindowLoaded = document.readyState === "complete";
    let isDismissed = false;
    const startTime = Date.now();
    const minDisplayDuration = 1200; // Minimal display duration for smooth feel

    const statusStages = [
      { max: 30, text: "Memuat aset visual rimba..." },
      { max: 65, text: "Menyiapkan koordinat satelit..." },
      { max: 90, text: "Menyinkronkan data ekosistem..." },
      { max: 100, text: "Siap menjelajah rimba nusantara..." }
    ];

    function updateStatus(val) {
      if (!statusText) return;
      for (const stage of statusStages) {
        if (val <= stage.max) {
          statusText.textContent = stage.text;
          break;
        }
      }
    }

    const progressInterval = setInterval(() => {
      if (isDismissed) {
        clearInterval(progressInterval);
        return;
      }

      if (currentProgress < targetProgress) {
        const step = Math.max(1, Math.ceil((targetProgress - currentProgress) * 0.18));
        currentProgress = Math.min(targetProgress, currentProgress + step);

        if (progressBar) progressBar.style.width = currentProgress + "%";
        if (percentText) percentText.textContent = currentProgress + "%";
        updateStatus(currentProgress);
      }

      const elapsed = Date.now() - startTime;
      if (isWindowLoaded && elapsed >= minDisplayDuration) {
        targetProgress = 100;
        if (currentProgress >= 100) {
          isDismissed = true;
          clearInterval(progressInterval);
          dismissPreloader();
        }
      } else if (!isWindowLoaded) {
        if (targetProgress < 88 && Math.random() > 0.45) {
          targetProgress = Math.min(88, targetProgress + Math.floor(Math.random() * 9) + 4);
        }
      } else {
        const progressByTime = Math.min(99, Math.floor((elapsed / minDisplayDuration) * 99));
        if (progressByTime > targetProgress) {
          targetProgress = progressByTime;
        }
      }
    }, 40);

    function dismissPreloader() {
      if (progressBar) progressBar.style.width = "100%";
      if (percentText) percentText.textContent = "100%";
      if (statusText) statusText.textContent = "Selamat datang di HutanKita";

      setTimeout(() => {
        preloader.classList.add("is-loaded");
        document.body.classList.remove("is-preloading");

        setTimeout(() => {
          preloader.style.display = "none";
          preloader.setAttribute("aria-hidden", "true");
        }, 750);
      }, 280);
    }

    window.addEventListener("load", () => {
      isWindowLoaded = true;
    });

    setTimeout(() => {
      if (!isDismissed) {
        isWindowLoaded = true;
        targetProgress = 100;
        currentProgress = 100;
        isDismissed = true;
        clearInterval(progressInterval);
        dismissPreloader();
      }
    }, 3200);
  }

  // Inisialisasi loading screen
  initPreloader();
});
