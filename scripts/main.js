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

function fetchWeather() {
  const city = "Kharkiv";
  const APIKey = "cbf07be48bf5aa4c8a899dbaceb6d097";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherBox = document.querySelector(".weather-box");
      weatherBox.innerHTML = `<span>It is</span> ${Math.round(
        data.main.temp
      )}<span>°C in Kharkiv</span>`;
    });
}

window.onload = function () {
  fetchWeather();
};

setInterval(function () {
  fetchWeather();
}, 300000);
