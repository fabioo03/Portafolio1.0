const nav__menu = document.querySelector(".nav__menu");
const open__MenuBtn = document.querySelector(".open__menu");
const close__MenuBtn = document.querySelector(".close__menu");

function toggleMenu() {
    nav__menu.classList.toggle("menu__opened");
}

open__MenuBtn.addEventListener("click", toggleMenu);
close__MenuBtn.addEventListener("click", toggleMenu);

const menuLinks= document.querySelectorAll('.nav__menu a[href^="#"]');
console.log(menuLinks);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.nav__menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".nav__menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    nav__menu.classList.remove("menu__opened");
    console.log("Click");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});
