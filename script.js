const langSwitch = document.getElementById("langSwitch");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

let currentLang = localStorage.getItem("algcan-lang") || "fr";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-fr][data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  langSwitch.textContent = lang === "fr" ? "EN" : "FR";
  langSwitch.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer au français");
  localStorage.setItem("algcan-lang", lang);
}

langSwitch.addEventListener("click", () => applyLanguage(currentLang === "fr" ? "en" : "fr"));

menuToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", opened);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

applyLanguage(currentLang);
