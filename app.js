(() => {
  const TOOLS = {
    auth: {
      title: "鉴别真假",
      desc: "拍照上传关键部位，快速判断正品风险，结果可回流到「我有」或直接挂售。",
      steps: ["选择品类与品牌", "按指引拍摄细节图", "获取鉴别结论与建议"],
      cta: "开始鉴别",
    },
    messages: {
      title: "消息中心",
      desc: "查看交易查验、降价提醒与物流进度，优先处理待办。",
      steps: ["查看未读通知", "处理待办事项", "按需开启推送"],
      cta: "进入消息中心",
    },
    price: {
      title: "AI估价",
      desc: "结合成色、瑕疵与近期成交，给出市场参考价，辅助买卖决策。",
      steps: ["拍摄或选择商品", "确认成色与配件", "查看估价与行情区间"],
      cta: "开始估价",
    },
  };

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

  function bindSummaryTabs(rootId) {
    const root = document.getElementById(rootId);
    if (!root) return;
    root.addEventListener("click", (e) => {
      const tab = e.target.closest("[data-pane]");
      if (!tab || tab.disabled || tab.classList.contains("pane")) return;
      const pane = tab.dataset.pane;
      root.querySelectorAll("[data-pane]").forEach((t) => {
        if (t.classList.contains("pane")) return;
        const on = t === tab;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      const scope = root.closest(".scheme-view") || document.getElementById("demo-vault");
      scope.querySelectorAll(".pane[data-pane]").forEach((p) => {
        const on = p.dataset.pane === pane;
        p.hidden = !on;
        p.classList.toggle("active", on);
      });
    });
  }

  function switchVaultPane(pane) {
    const scope = document.getElementById("scheme-b");
    if (!scope || !pane) return;
    scope.querySelectorAll("#vaultTabs [data-pane]").forEach((t) => {
      const on = t.dataset.pane === pane;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    scope.querySelectorAll("#tbStats [data-pane]").forEach((t) => {
      t.classList.toggle("on", t.dataset.pane === pane);
    });
    scope.querySelectorAll(".pane[data-pane]").forEach((p) => {
      const on = p.dataset.pane === pane;
      p.hidden = !on;
      p.classList.toggle("active", on);
    });
  }

  document.getElementById("vaultTabs")?.addEventListener("click", (e) => {
    const tab = e.target.closest("[data-pane]");
    if (!tab) return;
    switchVaultPane(tab.dataset.pane);
  });

  document.getElementById("tbStats")?.addEventListener("click", (e) => {
    const tab = e.target.closest("[data-pane]");
    if (!tab) return;
    switchVaultPane(tab.dataset.pane);
  });

  bindSummaryTabs("pfTabs");

  // 三方案切换
  const schemeMeta = {
    a: { title: "好物", tab: "好物", label: "货盘" },
    b: { title: "好物", tab: "好物", label: "交易台" },
    c: { title: "服务", tab: "服务", label: "服务台" },
  };

  function switchScheme(key) {
    if (!schemeMeta[key]) return;
    document.querySelectorAll(".scheme-view").forEach((v) => {
      v.classList.toggle("on", v.dataset.scheme === key);
    });
    document.querySelectorAll("#schemeSwitch button").forEach((b) => {
      b.classList.toggle("on", b.dataset.scheme === key);
    });
    const meta = schemeMeta[key];
    const title = document.getElementById("schemeTitle");
    const tabLabel = document.getElementById("mainTabLabel");
    const mainTab = document.getElementById("mainTab");
    if (title) title.textContent = meta.title;
    if (tabLabel) tabLabel.textContent = meta.tab;
    if (mainTab) mainTab.setAttribute("aria-label", `${meta.tab}`);
    history.replaceState(null, "", `#${key}`);
  }

  document.getElementById("schemeSwitch")?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-scheme]");
    if (!btn) return;
    switchScheme(btn.dataset.scheme);
  });

  const hash = (location.hash || "").replace("#", "");
  if (schemeMeta[hash]) switchScheme(hash);
  else switchScheme("b");

  // Tool sheet
  const sheet = document.getElementById("toolSheet");
  const sheetTitle = document.getElementById("sheetTitle");
  const sheetDesc = document.getElementById("sheetDesc");
  const sheetSteps = document.getElementById("sheetSteps");
  const sheetCta = document.getElementById("sheetCta");

  function openTool(key) {
    const tool = TOOLS[key];
    if (!tool || !sheet) return;
    sheetTitle.textContent = tool.title;
    sheetDesc.textContent = tool.desc;
    sheetSteps.innerHTML = tool.steps
      .map((s, i) => `<div class="sheet-step"><i>${i + 1}</i><span>${s}</span></div>`)
      .join("");
    sheetCta.textContent = tool.cta;
    sheet.hidden = false;
  }

  function closeSheet() {
    if (sheet) sheet.hidden = true;
  }

  // Market detail page
  const marketPage = document.getElementById("marketPage");
  const gradeTabs = document.getElementById("gradeTabs");

  function openMarket(key) {
    const data = MARKETS[key] || MARKETS.aj1low;
    document.getElementById("mImg").src = data.img;
    document.getElementById("mTitle").textContent = data.title;
    document.getElementById("mHot").innerHTML = data.hot.replace(
      /^HOT\s*/,
      '<b>HOT</b> '
    );
    document.getElementById("mRetail").textContent = data.retail;
    document.getElementById("mBrand").textContent = data.brand;
    document.getElementById("mSku").textContent = data.sku;
    document.getElementById("gradeTip").textContent = data.tip;
    document.getElementById("mRelate").textContent = data.relate;
    document.getElementById("marketCta").textContent = data.cta;

    gradeTabs.innerHTML = data.grades
      .map(
        (g) =>
          `<button type="button" class="grade${g.g === data.active ? " on" : ""}" data-grade="${g.g}"><em>${g.g}</em><b>${g.price}</b><span>${g.desc}</span></button>`
      )
      .join("");

    document.getElementById("dealList").innerHTML = data.deals
      .map(
        ([a, b, c]) =>
          `<li><span>${a}</span><strong>${b}</strong><time>${c}</time></li>`
      )
      .join("");

    marketPage.hidden = false;
  }

  function closeMarket() {
    marketPage.hidden = true;
  }

  document.getElementById("demo-vault")?.addEventListener("click", (e) => {
    const trendBtn = e.target.closest("button.trend[data-market]");
    if (trendBtn) {
      e.preventDefault();
      openMarket(trendBtn.dataset.market);
      return;
    }

    const msgBtn = e.target.closest("[data-entry='messages'], #openMessages, #openMessages2");
    if (msgBtn) {
      openTool("messages");
      return;
    }

    const toolBtn = e.target.closest("[data-tool]");
    if (!toolBtn) return;

    openTool(toolBtn.dataset.tool);
  });

  gradeTabs?.addEventListener("click", (e) => {
    const btn = e.target.closest(".grade");
    if (!btn) return;
    gradeTabs.querySelectorAll(".grade").forEach((g) => g.classList.toggle("on", g === btn));
  });

  document.getElementById("marketBack")?.addEventListener("click", closeMarket);
  document.getElementById("sheetClose")?.addEventListener("click", closeSheet);
  sheetCta?.addEventListener("click", () => {
    const label = sheetCta.textContent;
    sheetCta.textContent = "已进入流程…";
    setTimeout(() => {
      sheetCta.textContent = label;
      closeSheet();
    }, 700);
  });

  document.getElementById("addItemBtn")?.addEventListener("click", () => openTool("auth"));

  document.querySelectorAll(".rec-add").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.textContent = "已加入";
      btn.disabled = true;
    });
  });
})();
