(() => {
  const panes = document.querySelectorAll(".pane");
  const segs = document.querySelectorAll(".pf-seg button");
  const sheet = document.getElementById("toolSheet");

  segs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.pane;
      segs.forEach((b) => b.classList.toggle("on", b === btn));
      panes.forEach((p) => {
        const on = p.dataset.pane === key;
        p.classList.toggle("active", on);
        p.hidden = !on;
      });
    });
  });

  document.getElementById("demo-vault")?.addEventListener("click", (e) => {
    if (e.target.closest("[data-tool='auth']")) {
      if (sheet) sheet.hidden = false;
    }
  });

  document.getElementById("sheetClose")?.addEventListener("click", () => {
    if (sheet) sheet.hidden = true;
  });

  document.getElementById("sheetCta")?.addEventListener("click", () => {
    const cta = document.getElementById("sheetCta");
    if (!cta) return;
    const prev = cta.textContent;
    cta.textContent = "已进入流程…";
    setTimeout(() => {
      cta.textContent = prev;
      if (sheet) sheet.hidden = true;
    }, 700);
  });
})();
