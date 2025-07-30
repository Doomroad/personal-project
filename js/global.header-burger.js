const burger = document.querySelector(".header__burger");
const navList = document.querySelector(".global-header__nav-list");

if (!burger || !navList) {
  console.warn("Burger or navList not found");
} else {
  function toggleMenu() {
    const isOpen = navList.classList.toggle("open");
    burger.classList.toggle("is-active");
    document.body.classList.toggle("no-scroll", isOpen);
    burger.setAttribute("aria-expanded", isOpen);
  }

  function closeMenu() {
    navList.classList.remove("open");
    burger.classList.remove("is-active");
    document.body.classList.remove("no-scroll");
    burger.setAttribute("aria-expanded", "false");
  }

  burger.addEventListener("click", toggleMenu);

  navList.querySelectorAll("a.nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (e) => {
    if (
      !navList.contains(e.target) &&
      !burger.contains(e.target) &&
      navList.classList.contains("open")
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navList.classList.contains("open")) {
      closeMenu();
    }
  });
}