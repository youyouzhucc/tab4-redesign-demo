(() => {
  const MARKETS = {
    aj1low: {
      title: "Air Jordan 1 Low 绿白",
      img: "assets/p-aj1low.jpg",
      hot: "HOT 328人想要 · 近7日 46人买过",
      retail: "¥1299",
      brand: "Jordan",
      sku: "DV0990-103",
      grades: [
        { g: "SS", price: "¥899", desc: "未使用" },
        { g: "S", price: "¥852", desc: "未使用" },
        { g: "A", price: "¥812", desc: "轻微使用" },
        { g: "B", price: "¥720", desc: "日常使用" },
      ],
      active: "A",
      tip: "你已收藏该款，当前价接近 A 级成交带，比上周低 ¥87",
      relate: "你已收藏该款，当前价低于你的心理区间；同款近 7 日想要人数上升 12%。",
      deals: [
        ["a**8 · A级 · 42.5", "¥812", "07-16"],
        ["小*潮 · SS级 · 43", "¥899", "07-15"],
        ["k**y · B级 · 42", "¥720", "07-14"],
      ],
      cta: "立即购买",
    },
    scarf: {
      title: "Acne Studios 窄版围巾",
      img: "assets/p-scarf.jpg",
      hot: "HOT 86人想要 · 近7日 12人买过",
      retail: "¥2100",
      brand: "Acne",
      sku: "CA0154",
      grades: [
        { g: "SS", price: "¥1380", desc: "未使用" },
        { g: "S", price: "¥1260", desc: "未使用" },
        { g: "A", price: "¥1150", desc: "轻微使用" },
        { g: "B", price: "¥980", desc: "日常使用" },
      ],
      active: "A",
      tip: "收藏价已降 ¥130，接近近 30 日成交中位",
      relate: "你在盯这款降价；同色近 7 日成交增加，适合设到价提醒。",
      deals: [
        ["m**n · A级", "¥1150", "07-16"],
        ["潮*人 · S级", "¥1260", "07-13"],
        ["l**8 · B级", "¥990", "07-11"],
      ],
      cta: "立即购买",
    },
    gshock: {
      title: "Casio G-Shock GA-2100",
      img: "assets/p-gshock.jpg",
      hot: "156人想要 · 近7日 23人买过",
      retail: "¥999",
      brand: "Casio",
      sku: "GA-2100-1A1",
      grades: [
        { g: "SS", price: "¥520", desc: "未使用" },
        { g: "S", price: "¥490", desc: "未使用" },
        { g: "A", price: "¥468", desc: "轻微使用" },
        { g: "B", price: "¥399", desc: "日常使用" },
      ],
      active: "A",
      tip: "距你的目标价 ¥420 还差 ¥48",
      relate: "你设置了到价提醒 ¥420；当前仍在目标上方，建议继续盯盘。",
      deals: [
        ["w**2 · A级", "¥468", "07-16"],
        ["时*表 · SS级", "¥520", "07-14"],
        ["g**k · B级", "¥405", "07-12"],
      ],
      cta: "立即购买",
    },
    aj1: {
      title: "AJ1 Retro High 黑白",
      img: "assets/p-aj1.jpg",
      hot: "HOT 545人想要 · 近7日 61人买过",
      retail: "¥1399",
      brand: "Jordan",
      sku: "555088-125",
      grades: [
        { g: "SS", price: "¥1680", desc: "未使用" },
        { g: "S", price: "¥1490", desc: "未使用" },
        { g: "A", price: "¥1380", desc: "轻微使用" },
        { g: "B", price: "¥1280", desc: "日常使用" },
      ],
      active: "B",
      tip: "你的成色 B 参考价 ¥1,280，近 7 日上涨 ¥90",
      relate: "这是你「我有」里的货；行情走强，可考虑挂售或再估价。",
      deals: [
        ["n**e · B级 · 42.5", "¥1280", "07-16"],
        ["球*王 · A级 · 43", "¥1380", "07-15"],
        ["j**1 · SS级 · 42", "¥1680", "07-13"],
      ],
      cta: "去挂售",
    },
    coach: {
      title: "Coach 托特包",
      img: "assets/p-coach.jpg",
      hot: "HOT 212人想要 · 近7日 18人买过",
      retail: "¥3900",
      brand: "Coach",
      sku: "4455",
      grades: [
        { g: "SS", price: "¥2580", desc: "未使用" },
        { g: "S", price: "¥2360", desc: "未使用" },
        { g: "A", price: "¥2160", desc: "轻微使用" },
        { g: "B", price: "¥1880", desc: "日常使用" },
      ],
      active: "A",
      tip: "你的成色 A 参考价 ¥2,160，近 7 日 +¥120",
      relate: "这是你「我有」的包袋；热度偏高，适合鉴别后挂售。",
      deals: [
        ["包*迷 · A级", "¥2160", "07-15"],
        ["c**h · S级", "¥2360", "07-12"],
        ["丽* · B级", "¥1890", "07-10"],
      ],
      cta: "去挂售",
    },
    nb550: {
      title: "New Balance 550",
      img: "assets/p-nb550.jpg",
      hot: "1.1万件成交 · 近7日 89人买过",
      retail: "¥899",
      brand: "NB",
      sku: "BB550WT1",
      grades: [
        { g: "SS", price: "¥720", desc: "未使用" },
        { g: "S", price: "¥680", desc: "未使用" },
        { g: "A", price: "¥650", desc: "轻微使用" },
        { g: "B", price: "¥620", desc: "日常使用" },
      ],
      active: "B",
      tip: "你的成色 B+ 参考价 ¥620，近 7 日持平",
      relate: "成交量大、价格稳定；适合作为常规出手/入手参考款。",
      deals: [
        ["n**b · B级 · 42", "¥620", "07-16"],
        ["灰*白 · A级 · 41.5", "¥650", "07-15"],
        ["跑*鞋 · SS级 · 43", "¥720", "07-14"],
      ],
      cta: "去挂售",
    },
    samba: {
      title: "adidas Samba OG",
      img: "assets/p-samba.jpg",
      hot: "96人想要 · 近7日成交走弱",
      retail: "¥899",
      brand: "adidas",
      sku: "B75807",
      grades: [
        { g: "SS", price: "¥620", desc: "未使用" },
        { g: "S", price: "¥560", desc: "未使用" },
        { g: "A", price: "¥520", desc: "轻微使用" },
        { g: "B", price: "¥480", desc: "日常使用" },
      ],
      active: "B",
      tip: "你的成色 C/B 参考价 ¥480，近 7 日 -¥35",
      relate: "这是你「我有」里走弱的一款；可观望或鉴别后择机出手。",
      deals: [
        ["s**a · B级 · 42", "¥480", "07-15"],
        ["黑*白 · A级 · 41", "¥520", "07-12"],
        ["德*训 · SS级 · 43", "¥620", "07-09"],
      ],
      cta: "去挂售",
    },
    dunk: {
      title: "Nike Dunk Low 熊猫",
      img: "assets/p-dunk.jpg",
      hot: "HOT 890人想要 · 近7日 72人买过",
      retail: "¥799",
      brand: "Nike",
      sku: "DD1391-100",
      grades: [
        { g: "SS", price: "¥780", desc: "未使用" },
        { g: "S", price: "¥740", desc: "未使用" },
        { g: "A", price: "¥699", desc: "轻微使用" },
        { g: "B", price: "¥620", desc: "日常使用" },
      ],
      active: "A",
      tip: "缺货热门，A 级成交活跃",
      relate: "你已加入想要；同款近 7 日想要人数持续上升。",
      deals: [
        ["d**k · A级 · 42", "¥699", "07-16"],
        ["熊*猫 · SS级 · 43", "¥780", "07-15"],
        ["n**e · B级 · 41.5", "¥620", "07-13"],
      ],
      cta: "立即购买",
    },
    af1: {
      title: "Nike Air Force 1 LE 纯白",
      img: "assets/p-af1.jpg",
      hot: "HOT 1.2万人想要",
      retail: "¥749",
      brand: "Nike",
      sku: "DH2920-111",
      grades: [
        { g: "SS", price: "¥520", desc: "未使用" },
        { g: "S", price: "¥490", desc: "未使用" },
        { g: "A", price: "¥464", desc: "轻微使用" },
        { g: "B", price: "¥380", desc: "日常使用" },
      ],
      active: "A",
      tip: "经典款成交量大，价格带稳定",
      relate: "你想要的基础款；适合设到价后耐心等。",
      deals: [
        ["a**1 · A级 · 36", "¥464", "07-16"],
        ["白*鞋 · SS级 · 38", "¥520", "07-14"],
        ["f**e · B级 · 37", "¥385", "07-12"],
      ],
      cta: "立即购买",
    },
    hoodie: {
      title: "Essentials 基础卫衣",
      img: "assets/p-hoodie.jpg",
      hot: "64人想要 · 仅一件在售",
      retail: "¥690",
      brand: "Fear of God",
      sku: "ESS-HD",
      grades: [
        { g: "SS", price: "¥520", desc: "未使用" },
        { g: "S", price: "¥380", desc: "未使用" },
        { g: "A", price: "¥320", desc: "轻微使用" },
        { g: "B", price: "¥260", desc: "日常使用" },
      ],
      active: "S",
      tip: "当前在售仅一件，S 级成色",
      relate: "你已加入想要；库存紧张，可结合行情尽快决策。",
      deals: [
        ["h**d · S级 · M", "¥380", "07-15"],
        ["卫*衣 · SS级 · L", "¥520", "07-10"],
        ["e**s · A级 · M", "¥325", "07-08"],
      ],
      cta: "立即购买",
    },
  };

  const vaultTabs = document.getElementById("vaultTabs");
  const vaultTabsB = document.getElementById("vaultTabsB");
  const phone = document.getElementById("demo-vault");

  function switchVaultPane(pane) {
    if (!pane) return;
    document.querySelectorAll("#vaultTabs .summary-cell, #vaultTabsB .summary-cell").forEach((t) => {
      const on = t.dataset.pane === pane;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    document.querySelectorAll("#demo-vault .pane").forEach((p) => {
      const on = p.dataset.pane === pane;
      p.hidden = !on;
      p.classList.toggle("active", on);
    });
  }

  function switchScheme(scheme) {
    if (!phone || !scheme) return;
    phone.dataset.scheme = scheme;
    phone.querySelectorAll(".scheme-switch [data-scheme]").forEach((btn) => {
      const on = btn.dataset.scheme === scheme;
      btn.classList.toggle("on", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    phone.querySelectorAll("[data-scheme-top]").forEach((el) => {
      el.hidden = el.dataset.schemeTop !== scheme;
    });
  }

  phone?.querySelector(".scheme-switch")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-scheme]");
    if (!btn) return;
    switchScheme(btn.dataset.scheme);
  });

  vaultTabs?.addEventListener("click", (e) => {
    const tab = e.target.closest(".summary-cell[data-pane]");
    if (!tab) return;
    switchVaultPane(tab.dataset.pane);
  });

  vaultTabsB?.addEventListener("click", (e) => {
    const tab = e.target.closest(".summary-cell[data-pane]");
    if (!tab) return;
    switchVaultPane(tab.dataset.pane);
  });


  // Flow sheets: bargain / buy / auth / market / report
  const flowSheet = document.getElementById("flowSheet");
  const flowViews = {
    bargain: document.getElementById("flow-bargain"),
    buy: document.getElementById("flow-buy"),
    auth: document.getElementById("flow-auth"),
    market: document.getElementById("flow-market"),
    report: document.getElementById("flow-report"),
  };
  const gradeTabs = document.getElementById("gradeTabs");
  let flowContext = { key: "aj1low", title: "", img: "", price: 812 };
  let offerPrice = 760;
  let selectedCat = "";

  function parsePrice(text) {
    const n = Number(String(text || "").replace(/[^\d.]/g, ""));
    return Number.isFinite(n) ? Math.round(n) : 0;
  }

  function formatYen(n) {
    return `¥${Number(n).toLocaleString("zh-CN")}`;
  }

  function cardContext(el) {
    const card = el?.closest?.(".xy-card, .auth-post, .row");
    const marketKey =
      el?.dataset?.market ||
      card?.dataset?.market ||
      el?.closest?.("[data-market]")?.dataset?.market ||
      "aj1low";
    const data = MARKETS[marketKey] || MARKETS.aj1low;
    const img =
      card?.querySelector?.(".row-img, .auth-post-img")?.getAttribute("src") ||
      data.img;
    const title =
      card?.querySelector?.("h3")?.textContent?.trim() || data.title;
    const priceText =
      card?.querySelector?.(".xy-price")?.textContent ||
      data.grades?.find((g) => g.g === data.active)?.price ||
      data.retail;
    return {
      key: marketKey,
      title,
      img,
      price: parsePrice(priceText) || parsePrice(data.retail) || 800,
      data,
    };
  }

  function showFlowView(name) {
    Object.entries(flowViews).forEach(([key, view]) => {
      if (!view) return;
      view.hidden = key !== name;
    });
  }

  function closeFlow() {
    if (flowSheet) flowSheet.hidden = true;
    selectedCat = "";
    document.querySelectorAll(".cat-cell.on").forEach((c) => c.classList.remove("on"));
    const authCta = document.getElementById("authCta");
    if (authCta) {
      authCta.disabled = true;
      authCta.textContent = "请先选择品类";
    }
  }

  function buildRuler(listPrice) {
    const marks = document.getElementById("rulerMarks");
    if (!marks) return;
    const min = Math.max(100, Math.round(listPrice * 0.75 / 10) * 10);
    const max = Math.round(listPrice * 1.1 / 10) * 10;
    const step = 10;
    const count = Math.floor((max - min) / step) + 1;
    marks.innerHTML = Array.from({ length: count }, (_, i) => {
      const v = min + i * step;
      const major = v % 100 === 0;
      return `<span class="${major ? "major" : ""}" data-v="${v}">${major ? v : ""}</span>`;
    }).join("");
    marks.dataset.min = String(min);
    marks.dataset.max = String(max);
    marks.dataset.step = String(step);
  }

  function setOffer(price) {
    const marks = document.getElementById("rulerMarks");
    if (!marks) return;
    const min = Number(marks.dataset.min);
    const max = Number(marks.dataset.max);
    offerPrice = Math.min(max, Math.max(min, Math.round(price / 10) * 10));
    document.getElementById("bgOffer").textContent = formatYen(offerPrice);
    const tip = document.getElementById("bgTip");
    const list = flowContext.price;
    if (offerPrice >= list * 0.95) tip.textContent = "出价接近挂价，成交概率更高";
    else if (offerPrice >= list * 0.88) tip.textContent = "出价竞争力较强，将优先发送卖家";
    else tip.textContent = "出价偏低，卖家可能需要更久决策";
  }

  function bindRuler() {
    const ruler = document.getElementById("priceRuler");
    const marks = document.getElementById("rulerMarks");
    if (!ruler || !marks || ruler.dataset.bound) return;
    ruler.dataset.bound = "1";

    const pick = (clientX) => {
      const rect = ruler.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      const min = Number(marks.dataset.min);
      const max = Number(marks.dataset.max);
      setOffer(min + (max - min) * ratio);
    };

    let dragging = false;
    ruler.addEventListener("pointerdown", (e) => {
      dragging = true;
      ruler.setPointerCapture(e.pointerId);
      pick(e.clientX);
    });
    ruler.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      pick(e.clientX);
    });
    ruler.addEventListener("pointerup", () => { dragging = false; });
    ruler.addEventListener("pointercancel", () => { dragging = false; });
  }

  function fillBargain(ctx) {
    const grade = `${ctx.data.active || "A"}级 · 常穿码`;
    document.getElementById("bgImg").src = ctx.img;
    document.getElementById("bgTitle").textContent = ctx.title;
    document.getElementById("bgSku").innerHTML = `${grade} <span>▾</span>`;
    document.getElementById("bgSkuLabel").textContent = grade;
    document.getElementById("bgListPrice").textContent = formatYen(ctx.price);
    const gallery = document.getElementById("bgGallery");
    if (gallery) {
      // 同款多角度：demo 只有一张主图，复用当前商品图，避免串款
      gallery.innerHTML =
        `<img src="${ctx.img}" alt="" />`.repeat(3) +
        `<div class="gallery-more">共 6 张 ›</div>`;
    }
    buildRuler(ctx.price);
    setOffer(Math.round((ctx.price * 0.94) / 10) * 10);
    bindRuler();
  }

  function fillBuy(ctx) {
    document.getElementById("buyImg").src = ctx.img;
    document.getElementById("buyTitle").textContent = ctx.title;
    document.getElementById("buyPrice").textContent = formatYen(ctx.price);
    document.getElementById("buyPay").textContent = formatYen(ctx.price);
    document.getElementById("buySelected").textContent = `已选：常穿码 · ${ctx.data.active || "A"}级`;
    document.getElementById("buyDaily").textContent = formatYen((ctx.price / 154).toFixed(2));
  }

  function fillMarket(ctx) {
    const data = ctx.data;
    document.getElementById("mImg").src = ctx.img || data.img;
    document.getElementById("mTitle").textContent = ctx.title || data.title;
    document.getElementById("mHot").textContent = (data.hot || "").replace(/^HOT\s*/, "") || "近 7 日成交走势";
    document.getElementById("mRetail").textContent = data.retail;
    document.getElementById("mBrand").textContent = data.brand;
    document.getElementById("mSku").textContent = data.sku;
    document.getElementById("gradeTip").textContent = data.tip;
    document.getElementById("mRelate").textContent = data.relate;
    document.getElementById("marketCta").textContent = data.cta === "去挂售" ? "去挂售" : "立即购买";
    gradeTabs.innerHTML = data.grades
      .map(
        (g) =>
          `<button type="button" class="grade${g.g === data.active ? " on" : ""}" data-grade="${g.g}"><em>${g.g}</em><b>${g.price}</b><span>${g.desc}</span></button>`
      )
      .join("");
    document.getElementById("dealList").innerHTML = data.deals
      .map(([a, b, c]) => `<li><span>${a}</span><strong>${b}</strong><time>${c}</time></li>`)
      .join("");
  }

  function fillReport(ctx) {
    document.getElementById("rpImg").src = ctx.img;
    document.getElementById("rpTitle").textContent = ctx.title;
    const resultText = ctx.cardResult || "结果：鉴别通过";
    document.getElementById("rpResult").textContent = resultText;
  }

  function openFlow(name, el) {
    if (!flowSheet || !flowViews[name]) return;
    const fromCard = el?.closest?.(".xy-card, .auth-post, .row");
    const ctx =
      fromCard || !flowContext?.key ? cardContext(el) : { ...flowContext };
    const post = el?.closest?.(".auth-post");
    if (post) {
      ctx.cardResult = post.querySelector(".auth-result")?.textContent?.trim() || "";
    }
    flowContext = ctx;
    if (name === "bargain") fillBargain(ctx);
    if (name === "buy") fillBuy(ctx);
    if (name === "market") fillMarket(ctx);
    if (name === "report") fillReport(ctx);
    if (name === "auth") {
      selectedCat = "";
      document.querySelectorAll(".cat-cell.on").forEach((c) => c.classList.remove("on"));
      const authCta = document.getElementById("authCta");
      authCta.disabled = true;
      authCta.textContent = "请先选择品类";
    }
    showFlowView(name);
    flowSheet.hidden = false;
  }

  document.getElementById("demo-vault")?.addEventListener("click", (e) => {
    const inFlow = e.target.closest("#flowSheet");

    // inside sheet: category pick
    const cat = e.target.closest(".cat-cell");
    if (cat && inFlow) {
      document.querySelectorAll(".cat-cell").forEach((c) => c.classList.toggle("on", c === cat));
      selectedCat = cat.dataset.cat;
      const authCta = document.getElementById("authCta");
      authCta.disabled = false;
      authCta.textContent = `拍摄${selectedCat}细节图`;
      return;
    }

    // nested flow switches from sheet footers/links
    const nested = e.target.closest("#flowSheet [data-flow]");
    if (nested) {
      e.preventDefault();
      openFlow(nested.dataset.flow, nested);
      return;
    }

    if (inFlow) return;

    const alertBtn = e.target.closest("[data-action='alert']");
    if (alertBtn) {
      e.preventDefault();
      const old = alertBtn.textContent;
      alertBtn.textContent = "已设置";
      alertBtn.disabled = true;
      setTimeout(() => {
        alertBtn.textContent = old;
        alertBtn.disabled = false;
      }, 1200);
      return;
    }

    const trendBtn = e.target.closest("button.trend[data-market]");
    if (trendBtn) {
      e.preventDefault();
      openFlow("market", trendBtn);
      return;
    }

    const flowBtn = e.target.closest("[data-flow]");
    if (flowBtn) {
      e.preventDefault();
      openFlow(flowBtn.dataset.flow, flowBtn);
    }
  });

  gradeTabs?.addEventListener("click", (e) => {
    const btn = e.target.closest(".grade");
    if (!btn) return;
    gradeTabs.querySelectorAll(".grade").forEach((g) => g.classList.toggle("on", g === btn));
    const price = parsePrice(btn.querySelector("b")?.textContent);
    if (price) flowContext.price = price;
  });

  document.getElementById("flowClose")?.addEventListener("click", closeFlow);
  document.getElementById("flowBackdrop")?.addEventListener("click", closeFlow);
  document.getElementById("rpCta")?.addEventListener("click", closeFlow);

  document.getElementById("bgCta")?.addEventListener("click", () => {
    const btn = document.getElementById("bgCta");
    btn.textContent = "已提交还价";
    setTimeout(() => {
      btn.textContent = "还价并支付保证金";
      closeFlow();
    }, 700);
  });

  document.getElementById("buyCta")?.addEventListener("click", () => {
    const btn = document.getElementById("buyCta");
    const old = btn.innerHTML;
    btn.textContent = "支付处理中…";
    setTimeout(() => {
      btn.innerHTML = old;
      closeFlow();
    }, 700);
  });

  document.getElementById("authCta")?.addEventListener("click", () => {
    const btn = document.getElementById("authCta");
    if (btn.disabled) return;
    btn.textContent = "已打开相机…";
    setTimeout(() => {
      btn.textContent = selectedCat ? `拍摄${selectedCat}细节图` : "请先选择品类";
      closeFlow();
    }, 700);
  });

  document.getElementById("bgEdit")?.addEventListener("click", () => {
    const next = window.prompt("输入还价金额", String(offerPrice));
    if (next == null) return;
    const n = parsePrice(next);
    if (n) setOffer(n);
  });

  document.getElementById("addItemBtn")?.addEventListener("click", () => openFlow("auth", document.getElementById("addItemBtn")));

  document.querySelectorAll(".rec-add").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.textContent = "已加入";
      btn.disabled = true;
    });
  });

})();
