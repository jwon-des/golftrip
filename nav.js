(function () {
  const btn = document.getElementById("nav-hamburger");
  const menu = document.getElementById("site-nav-menu");
  if (!btn || !menu) return;

  function setOpen(open) {
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function close() {
    setOpen(false);
  }

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(menu.hidden);
  });

  document.addEventListener("click", function (e) {
    if (menu.hidden) return;
    const t = e.target;
    if (menu.contains(t) || btn.contains(t)) return;
    close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
})();
