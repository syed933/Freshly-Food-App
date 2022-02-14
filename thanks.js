////////////////////////
// Opening and closing our mobile navigation
const headerEl = document.querySelector(".header");
const btnNavbarEl = document.querySelector(".btn-mobile-nav");

btnNavbarEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////
//SCROLL Reveal
ScrollReveal().reveal(".headline");
window.sr = ScrollReveal();

sr.reveal(".animate-from-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-from-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-from-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-from-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

////////////////////////
// Setting our copyright year to dynamically change on its own
const copyrightYear = document.querySelector(".year");
const year = new Date().getFullYear();
copyrightYear.textContent = year;

////////////////////////
//Fixing flex-box property missing in some older Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");

  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();


