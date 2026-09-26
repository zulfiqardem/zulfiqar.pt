const menu = document.querySelector(".menu");
const mobileNav = document.querySelector("#mobile-nav");

if (menu && mobileNav) {
  menu.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.textContent = open ? "Close" : "Menu";
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.textContent = "Menu";
    });
  });
}
