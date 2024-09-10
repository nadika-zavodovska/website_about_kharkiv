const button = document.querySelector(".button");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__link");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  if (button.classList.contains("active")) {
    button.setAttribute("aria-expended", "true");
    menu.setAttribute("aria-hidden", "false");
    menuLinks.forEach((link) => link.setAttribute("tabindex", "0"));
  } else {
    button.setAttribute("aria-expended", "false");
    menu.setAttribute("aria-hidden", "true");
    menuLinks.forEach((link) => link.setAttribute("tabindex", "-1"));
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
