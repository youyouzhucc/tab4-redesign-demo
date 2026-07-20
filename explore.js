(() => {
  const TOOLS = {
    auth: {
      title: "鉴别服务",
      desc: "覆盖鞋靴、箱包、腕表等主流类目。拍图上传后快速出结论，假一赔三。",
      steps: ["选择类目", "按指引拍摄细节", "查看鉴别结论与建议"],
      cta: "开始拍图鉴别",
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
  document.getElementById("openMessages3")?.addEventListener("click", openMessages);
  document.getElementById("msgBack")?.addEventListener("click", closeMessages);

  document.getElementById("app")?.addEventListener("click", (e) => {
    const entryBtn = e.target.closest("[data-entry='messages']");
    if (entryBtn) {
      openMessages();
      return;
    }
    const toolBtn = e.target.closest("[data-tool]");
    if (toolBtn) openTool(toolBtn.dataset.tool);
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
