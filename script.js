// 共享 JS：导航 + 返回顶部 + reveal 动画 + 产品弹窗
(function () {
  const nav = document.querySelector(".nav");
  const back = document.querySelector(".back-to-top");
  const burger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  // 当前页面高亮
  const path = location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((a) => {
    const href = (a.getAttribute("href") || "").replace(/\/$/, "") || "/";
    if (path.includes(href)) a.classList.add("active");
  });

  // 滚动效果
  let lastY = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("scrolled", y > 40);
    if (back) back.classList.toggle("visible", y > 600);
    lastY = y;
  });
  if (back)
    back.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );

  // 移动菜单
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      mobileMenu.classList.toggle("open");
      document.body.style.overflow = mobileMenu.classList.contains("open")
        ? "hidden"
        : "";
    });
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        burger.classList.remove("open");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // reveal 动画
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("visible"));
  }
})();

// 产品弹窗（仅在产品页加载）
(function () {
  const overlay = document.getElementById("modal-overlay");
  const content = document.getElementById("modal-content");
  if (!overlay || !content) return;

  function openModal(p) {
    let certs = "";
    if (p.cert && p.cert.length) {
      certs =
        '<div class="modal-cert">' +
        p.cert.map((c) => "<span>" + c + "</span>").join("") +
        "</div>";
    }
    content.innerHTML =
      '<p class="modal-cat">' +
      p.tag +
      "</p>" +
      '<h3 class="modal-title">' +
      p.name +
      "<span>" +
      p.en +
      "</span></h3>" +
      '<p class="modal-desc">' +
      p.desc +
      "</p>" +
      '<div class="modal-specs">' +
      p.specs
        .map(
          (s) =>
            '<div class="spec"><span>' +
            s.k +
            "</span><b>" +
            s.v +
            "</b></div>",
        )
        .join("") +
      "</div>" +
      certs +
      '<a class="btn" href="pricing.html">询价</a>';
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.dataset.product;
      if (window.PRODUCTS) {
        const p = window.PRODUCTS.find((x) => x.id === id);
        if (p) openModal(p);
      }
    });
  });

  document.getElementById("modal-close").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
})();

/* ============================================================
   2026-09-12 新增：图标库 + 板块渲染器
   用法：页面里放 <div data-render="stats"></div>，
        script.js 自动按 data.js 的内容渲染，并随语言切换重渲染。
   ============================================================ */
window.MR = (function () {
  /* ---------- 线性图标库（24×24，仅描边） ---------- */
  const ICONS = {
    drop: '<path d="M12 3c3.6 4.6 6 7.6 6 10.6A6 6 0 0 1 6 13.6C6 10.6 8.4 7.6 12 3z"/>',
    leaf: '<path d="M20 4c-9 0-14 4-14 10a6 6 0 0 0 6 6c6 0 8-6 8-16z"/><path d="M6.5 19.5C9 15 12.5 12 17 10"/>',
    chip: '<rect x="7.5" y="7.5" width="9" height="9" rx="1.5"/><path d="M10 3.5v4M14 3.5v4M10 16.5v4M14 16.5v4M3.5 10h4M3.5 14h4M16.5 10h4M16.5 14h4"/>',
    anchor:
      '<circle cx="12" cy="4.6" r="2"/><path d="M12 6.6V21"/><path d="M7 11.5H4a8 8 0 0 0 16 0h-3"/>',
    snow: '<path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9"/>',
    shield:
      '<path d="M12 3l7 3v5.6c0 4.5-3 8-7 9.4-4-1.4-7-4.9-7-9.4V6l7-3z"/><path d="M9 12.2l2.2 2.2L15.4 10"/>',
    factory: '<path d="M3 21h18"/><path d="M4 21V10l5 3v-3l5 3v-3l6 3.6V21"/>',
    doc: '<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4z"/><path d="M14 3v4h4"/><path d="M9 13h6M9 17h4"/>',
    box: '<path d="M21 8.5L12 3.5 3 8.5v7l9 5 9-5v-7z"/><path d="M3 8.5l9 5 9-5"/><path d="M12 13.5v7"/>',
    check: '<path d="M4.5 12.5l5 5L20 6.8"/>',
    medal:
      '<circle cx="12" cy="9" r="5.5"/><path d="M8.5 13.6L7 21l5-2.6L17 21l-1.5-7.4"/>',
    globe:
      '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.6 2.1"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.6 7l8.4 6 8.4-6"/>',
    pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
    phone:
      '<path d="M5 3.5h3.5l1.8 4.4-2.1 1.6a12 12 0 0 0 6.3 6.3l1.6-2.1 4.4 1.8V19a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.7 2 2 0 0 1 5 3.5z"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
  };
  const icon = (name) =>
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    (ICONS[name] || ICONS.check) +
    "</svg>";
  // 特性卡里的图标用 CSS 控制描边色，这里不写 color
  const iconRaw = (name) =>
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    (ICONS[name] || ICONS.check) +
    "</svg>";
  // 指定描边色的图标（用于深色背景卡片）
  const iconC = (name, color) =>
    '<svg viewBox="0 0 24 24" fill="none" stroke="' +
    color +
    '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
    (ICONS[name] || ICONS.check) +
    "</svg>";

  const isEn = () => window.i18n.current() === "en";
  /* 取双语文案：{zh,en} → 字符串 */
  const t = (o) =>
    o && typeof o === "object" ? (isEn() ? o.en || o.zh : o.zh) : o;
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const BUSINESS_ICON = { seafood: "drop", agri: "leaf", electronic: "chip" };

  /* ---------- 各板块渲染器 ---------- */
  function lines(el) {
    el.innerHTML = (window.BUSINESS_LINES || [])
      .map(
        (b) =>
          '<a class="card" href="products.html#' +
          b.id +
          '" style="text-decoration:none;color:inherit">' +
          '<div class="card-img placeholder ' +
          b.icon +
          '">' +
          iconC(BUSINESS_ICON[b.id] || "drop", "#F4EDE4") +
          "</div>" +
          '<div class="card-body"><h4>' +
          esc(isEn() ? b.en : b.name) +
          "</h4>" +
          "<p>" +
          esc(isEn() ? b.en_desc : b.desc) +
          "</p>" +
          '<span class="card-tag">' +
          window.i18n("index.card.more") +
          "</span></div>" +
          "</a>",
      )
      .join("");
  }
  function linesPlain(el) {
    el.innerHTML = (window.BUSINESS_LINES || [])
      .map(
        (b) =>
          '<div class="card"><div class="card-body"><h4>' +
          esc(isEn() ? b.en : b.name) +
          "</h4>" +
          "<p>" +
          esc(isEn() ? b.en_desc : b.desc) +
          "</p></div></div>",
      )
      .join("");
  }
  function stats(el) {
    el.innerHTML = (window.SITE_STATS || [])
      .map(
        (s) =>
          '<div class="stat"><b>' +
          esc(s.value) +
          "</b><span>" +
          esc(t(s)) +
          "</span></div>",
      )
      .join("");
  }
  function featured(el) {
    const list = (window.FEATURED_IDS || [])
      .map((id) => (window.PRODUCTS || []).find((p) => p.id === id))
      .filter(Boolean);
    el.innerHTML = list
      .map(
        (p) =>
          '<a class="card" href="products.html#' +
          p.category +
          '" style="text-decoration:none;color:inherit">' +
          '<div class="card-img"><img src="' +
          p.img +
          '" alt="' +
          esc(isEn() ? p.en : p.name) +
          '" loading="lazy"></div>' +
          '<div class="card-body"><h4>' +
          esc(isEn() ? p.en : p.name) +
          "</h4>" +
          "<p>" +
          esc(
            isEn()
              ? p.en_specs && p.en_specs[0]
                ? p.en_specs[0].v
                : ""
              : p.specs[0]
                ? p.specs[0].v
                : "",
          ) +
          "</p>" +
          '<span class="card-tag">' +
          esc(p.tag) +
          "</span></div>" +
          "</a>",
      )
      .join("");
  }
  function markets(el) {
    el.innerHTML = (window.MARKETS || [])
      .map((m) => {
        const dev = m.tone === "coral";
        const cls = dev ? "coral" : m.tone === "muted" ? "muted" : "";
        const pill = dev
          ? '<span class="pill coral">' +
            window.i18n("index.market.dev") +
            "</span>"
          : m.tone === "muted"
            ? ""
            : '<span class="pill">' +
              window.i18n("index.market.core") +
              "</span>";
        return (
          '<div class="market ' +
          cls +
          '"><div class="market-head"><b>' +
          esc(t(m.area)) +
          "</b>" +
          pill +
          "</div>" +
          "<span>" +
          esc(t(m.desc)) +
          "</span></div>"
        );
      })
      .join("");
  }
  function mideast(el) {
    const d = window.MIDEAST;
    if (!d) return;
    el.innerHTML =
      '<p class="section-label reveal">' +
      esc(t(d.label)) +
      "</p>" +
      '<h2 class="section-title reveal">' +
      esc(t(d.title)) +
      ' <span class="pill coral">' +
      esc(t(d.status)) +
      "</span></h2>" +
      '<p class="section-desc reveal">' +
      esc(t(d.desc)) +
      "</p>" +
      '<div class="market-grid reveal">' +
      d.items
        .map(
          (it) =>
            '<div class="market coral"><div class="market-head"><b>' +
            esc(t(it)) +
            "</b></div><span>" +
            esc(t(it.d)) +
            "</span></div>",
        )
        .join("") +
      "</div>" +
      '<p class="section-desc reveal" style="margin:1.75rem 0 0;font-size:.82rem">' +
      esc(t(d.note)) +
      ' <a href="contact.html" style="color:var(--mid)">' +
      window.i18n("nav.contact") +
      "</a></p>";
  }
  function features(el) {
    el.innerHTML = (window.ADVANTAGES || [])
      .map(
        (a) =>
          '<div class="feature"><div class="feature-icon">' +
          iconRaw(a.icon) +
          "</div>" +
          "<h4>" +
          esc(t(a.title)) +
          "</h4><p>" +
          esc(t(a.desc)) +
          "</p></div>",
      )
      .join("");
  }
  function steps(el) {
    el.innerHTML = (window.EXPORT_STEPS || [])
      .map(
        (s) =>
          '<div class="step"><div class="step-dot">' +
          esc(s.n) +
          "</div>" +
          "<h4>" +
          esc(t(s.title)) +
          "</h4><p>" +
          esc(t(s.desc)) +
          "</p></div>",
      )
      .join("");
  }
  function badges(el) {
    el.innerHTML = (window.CERT_BADGES || [])
      .map(
        (c) =>
          '<span class="badge">' + iconRaw("check") + esc(t(c)) + "</span>",
      )
      .join("");
  }
  function faq(el) {
    el.innerHTML =
      '<div class="faq">' +
      (window.FAQ || [])
        .map(
          (f, i) =>
            '<div class="faq-item' +
            (i === 0 ? " open" : "") +
            '">' +
            '<button class="faq-q" type="button" aria-expanded="' +
            (i === 0) +
            '">' +
            esc(t(f.q)) +
            "</button>" +
            '<div class="faq-a">' +
            esc(t(f.a)) +
            "</div></div>",
        )
        .join("") +
      "</div>";
  }
  function chain(el) {
    el.innerHTML =
      '<div class="timeline">' +
      (window.CHAIN_FLOW || [])
        .map(
          (c) =>
            '<div class="tl-item"><b>' +
            esc(t(c.step)) +
            "</b><p>" +
            esc(t(c.desc)) +
            "</p></div>",
        )
        .join("") +
      "</div>";
  }
  function coop(el) {
    el.innerHTML = (window.COOP_MODES || [])
      .map(
        (c) =>
          '<div class="feature"><h4>' +
          esc(t(c.title)) +
          "</h4><p>" +
          esc(t(c.desc)) +
          "</p></div>",
      )
      .join("");
  }
  function facts(el) {
    el.innerHTML = (window.SITE_STATS || [])
      .map(
        (s) =>
          '<div class="fact"><b>' +
          esc(s.value) +
          "</b><span>" +
          esc(t(s)) +
          "</span></div>",
      )
      .join("");
  }
  function catnav(el) {
    el.innerHTML = (window.BUSINESS_LINES || [])
      .map(
        (b) =>
          '<a href="#' + b.id + '">' + esc(isEn() ? b.en : b.name) + "</a>",
      )
      .join("");
  }
  function supply(el) {
    const d = window.SUPPLY_CHAIN;
    if (!d) return;
    el.innerHTML =
      '<div class="split-media"><img src="' +
      d.media +
      '" alt="" loading="lazy">' +
      '<div class="split-cap">' +
      esc(t(d.cap)) +
      "</div></div>" +
      '<div class="split-body">' +
      '<p class="section-label">' +
      esc(t(d.label)) +
      "</p>" +
      '<h2 class="section-title">' +
      esc(t(d.title)) +
      "</h2>" +
      "<p>" +
      esc(t(d.p1)) +
      "</p><p>" +
      esc(t(d.p2)) +
      "</p>" +
      '<ul class="split-list">' +
      d.points.map((p) => "<li>" + esc(t(p)) + "</li>").join("") +
      "</ul>" +
      "</div>";
  }
  function prep(el) {
    const keys = [
      "pricing.prep.1",
      "pricing.prep.2",
      "pricing.prep.3",
      "pricing.prep.4",
    ];
    el.innerHTML =
      '<ul class="split-list">' +
      keys.map((k) => "<li>" + esc(window.i18n(k)) + "</li>").join("") +
      "</ul>";
  }

  const RENDERERS = {
    lines: lines,
    "lines-plain": linesPlain,
    catnav: catnav,
    facts: facts,
    stats: stats,
    featured: featured,
    markets: markets,
    mideast: mideast,
    supply: supply,
    features: features,
    steps: steps,
    badges: badges,
    faq: faq,
    chain: chain,
    coop: coop,
    prep: prep,
  };

  function renderAll() {
    document.querySelectorAll("[data-render]").forEach((el) => {
      const fn = RENDERERS[el.getAttribute("data-render")];
      if (fn) {
        try {
          fn(el);
        } catch (err) {
          console.warn(
            "[MR] render failed:",
            el.getAttribute("data-render"),
            err,
          );
        }
      }
    });
    if (window.I18N && window.i18n.apply) {
      // 让新渲染出的静态文案节点也跟随语言（渲染器已直接用双语字段，这里仅为兜底）
    }
  }

  /* FAQ 手风琴（事件委托，重渲染后依然有效） */
  document.addEventListener("click", (e) => {
    const q = e.target.closest(".faq-q");
    if (!q) return;
    const item = q.parentElement;
    item.classList.toggle("open");
    q.setAttribute("aria-expanded", item.classList.contains("open"));
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderAll);
  } else {
    renderAll();
  }
  document.addEventListener("langchange", renderAll);

  return {
    renderAll: renderAll,
    icons: ICONS,
    icon: iconRaw,
    iconC: iconC,
    t: t,
  };
})();
