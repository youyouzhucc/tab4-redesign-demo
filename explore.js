(() => {
  const TOOLS = {
    auth: {
      title: "鉴别服务",
      desc: "覆盖鞋靴、箱包、腕表等主流类目。拍图上传后快速出结论，假一赔三。",
      steps: ["选择类目", "按指引拍摄细节", "查看鉴别结论与建议"],
      cta: "开始拍图鉴别",
    },
    price: {
      title: "AI估价",
      desc: "结合成色与近期成交，给出闲置参考价，辅助寄卖或还价决策。",
      steps: ["拍摄或选择商品", "确认成色", "查看估价区间"],
      cta: "开始估价",
    },
  };

  const msgPage = document.getElementById("msgPage");
  const sheet = document.getElementById("toolSheet");
  const sheetTitle = document.getElementById("sheetTitle");
  const sheetDesc = document.getElementById("sheetDesc");
  const sheetSteps = document.getElementById("sheetSteps");
  const sheetCta = document.getElementById("sheetCta");

  function openMessages() {
    if (msgPage) msgPage.hidden = false;
  }

  function closeMessages() {
    if (msgPage) msgPage.hidden = true;
  }

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

  document.getElementById("openMessages")?.addEventListener("click", openMessages);
  document.getElementById("openMessages2")?.addEventListener("click", openMessages);
  document.getElementById("msgBack")?.addEventListener("click", closeMessages);

  document.getElementById("app")?.addEventListener("click", (e) => {
    const toolBtn = e.target.closest("[data-tool]");
    if (toolBtn) {
      openTool(toolBtn.dataset.tool);
      return;
    }
    const sell = e.target.closest('[data-entry="sell"]');
    if (sell) {
      sheetTitle.textContent = "闲置换钱";
      sheetDesc.textContent = "填写信息寄出，平台鉴别通过后打款。适合手里闲置快速变现。";
      sheetSteps.innerHTML = ["选择商品成色", "预约寄件或上门", "鉴别通过后收款"]
        .map((s, i) => `<div class="sheet-step"><i>${i + 1}</i><span>${s}</span></div>`)
        .join("");
      sheetCta.textContent = "去寄卖";
      sheet.hidden = false;
    }
  });

  document.getElementById("sheetClose")?.addEventListener("click", closeSheet);
  sheetCta?.addEventListener("click", () => {
    const label = sheetCta.textContent;
    sheetCta.textContent = "已进入流程…";
    setTimeout(() => {
      sheetCta.textContent = label;
      closeSheet();
    }, 700);
  });
})();
