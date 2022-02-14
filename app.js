////////////////////////
// Opening and closing our mobile navigation
const headerEl = document.querySelector(".header");
const btnNavbarEl = document.querySelector(".btn-mobile-nav");

btnNavbarEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////
// Smooth Scroll animations
const allLinks = document.querySelectorAll("a:link");
//Writing a function to give an event listener to each link
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //turning off default behaviour of scrolling using css using event object e
    e.preventDefault();
    const href = link.getAttribute("href");
    //Styles for smooth scroll back to the top of page by clicking on the Logo
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    //Styles for smooth scroll for different anchor points from Nav Bar
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      //Now that we have selected the locations where the scroll goes to, we now set behaviour to smooth
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

////////////////////////
// STICKY NAV BAR ON SCROLL using the Intersection Observer Method
// which is the the most efficient and modern way.
const sectionHeroEl = document.querySelector(".section-hero");
//we use obs to observe a certain element, here which is our section-hero section
//second curly braces is our root, which is where our element is appearing and we set it to null, this means we will observe our element as it moves through the viewport

const obs = new IntersectionObserver(
  function (entries) {
    //Entires is an array of entries, that is an entry for each threshold value, but here we only have 1 so we set entires to 0
    const ent = entries[0];
    // console.log(ent);
    if (ent.isIntersecting === false) {
      //We add the sticky to the body and not header since, the body is the parent of the header
      document.body.classList.add("sticky");
    }

    //Remove sticky navbar if we scroll to the top
    if (ent.isIntersecting === true) {
      //We add the sticky to the body and not header since, the body is the parent of the header
      document.body.classList.remove("sticky");
    }
  },
  {
    //We observe our sectionEl in the viewport
    //null means our Viewport
    //Our function will fire at a threshold of 0, meaning as soon as our hero section is inside the viewport
    //If we set our threshold to 1, then it will fire only when our section is completely inside our viewport
    root: null,
    threshold: 0,
    //Here we set out rootMargin to 8rem or 80px so that our sticky header starts before we get to the hero section
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

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
//SCROLL To the Top Animations
// Back to top Button Start
let scrollToTopBtn = document.querySelector(".scroll-to-top");

window.onscroll = () => {
  if (document.body.scroll > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};
// Back to top Button End


