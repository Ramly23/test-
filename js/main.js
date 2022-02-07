/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const themeButtonOnetap = document.getElementById("theme-button-onetap");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

themeButtonOnetap.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.querySelectorAll(".header");
  const removeLink = document.getElementById("remove__active");

  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) {
    header.forEach((e) => {
      e.classList.add("scroll-header");
    });
    removeLink.classList.remove("active-link");
  } else {
    header.forEach((e) => {
      e.classList.remove("scroll-header");
    });
    removeLink.classList.add("active-link");
  }
}
window.addEventListener("scroll", scrollHeader);

/* ============== Switch Between Neverlose To Onetap =============*/
const buttons = document.querySelectorAll(".buttons button");
const main = document.querySelectorAll(".main__section");
const card = document.querySelector(".main");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#neverlose"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  main.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.text , .rage`, { origin: "left" });
sr.reveal(`.media`, { origin: "right" });

/* =========== Multiple Scroll =========== */

/* Home */
const home = document.querySelector(".home");
const home__onetap = document.querySelector(".home__onetap")

home.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
  intro.classList.remove("active-link")
  about.classList.remove("active-link");
  screenshots.classList.remove("active-link");
  buy.classList.remove("active-link");
  faqs.classList.remove("active-link");
});

home__onetap.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
  intro__onetap.classList.remove("active-link")
  about__onetap.classList.remove("active-link");
  screenshots__onetap.classList.remove("active-link");
  buy__onetap.classList.remove("active-link");
  faqs__onetap.classList.remove("active-link");
  home__onetap.classList.add("active-link")
})

/* Intro  */
const intro = document.querySelector(".intro");
const intro__onetap = document.querySelector(".intro__onetap");

intro.addEventListener("click", () => {
  intro.scrollIntoView();
  intro.classList.add("active-link");
  about.classList.remove("active-link");
  screenshots.classList.remove("active-link");
  buy.classList.remove("active-link");
  faqs.classList.remove("active-link");
});

intro__onetap.addEventListener("click", () => {
  intro__onetap.scrollIntoView();
  intro__onetap.classList.add("active-link");
  about__onetap.classList.remove("active-link");
  screenshots__onetap.classList.remove("active-link");
  buy__onetap.classList.remove("active-link");
  faqs__onetap.classList.remove("active-link");
  home__onetap.classList.remove("active-link");
});

/* About */
const about = document.querySelector(".about");
const about__onetap = document.querySelector(".about__onetap");

about.addEventListener("click", () => {
  about.scrollIntoView();
  about.classList.add("active-link");
  intro.classList.remove("active-link");
  screenshots.classList.remove("active-link");
  buy.classList.remove("active-link");
  faqs.classList.remove("active-link");
});

about__onetap.addEventListener("click", () => {
  about__onetap.scrollIntoView();
  about__onetap.classList.add("active-link");
  intro__onetap.classList.remove("active-link");
  screenshots__onetap.classList.remove("active-link");
  buy__onetap.classList.remove("active-link");
  faqs__onetap.classList.remove("active-link");
  home__onetap.classList.remove("active-link");
});


/* Screenshots */
const screenshots = document.querySelector(".screenshots");
const screenshots__onetap = document.querySelector(".screenshots__onetap");

screenshots.addEventListener("click", () => {
  screenshots.scrollIntoView();
  screenshots.classList.add("active-link");
  about.classList.remove("active-link");
  buy.classList.remove("active-link");
  intro.classList.remove("active-link");
  faqs.classList.remove("active-link");
});

screenshots__onetap.addEventListener("click", () => {
  screenshots__onetap.scrollIntoView();
  screenshots__onetap.classList.add("active-link");
  about__onetap.classList.remove("active-link");
  buy__onetap.classList.remove("active-link");
  intro__onetap.classList.remove("active-link");
  faqs__onetap.classList.remove("active-link");
  home__onetap.classList.remove("active-link");
});

/* Faqs */
const faqs = document.querySelector(".faqs");
const faqs__onetap = document.querySelector(".faqs__onetap");

faqs.addEventListener("click", () => {
  faqs.scrollIntoView();
  faqs.classList.add("active-link");
  about.classList.remove("active-link");
  buy.classList.remove("active-link");
  intro.classList.remove("active-link");
  screenshots.classList.remove("active-link");
});

faqs__onetap.addEventListener("click", () => {
  faqs__onetap.scrollIntoView();
  faqs__onetap.classList.add("active-link");
  about__onetap.classList.remove("active-link");
  buy__onetap.classList.remove("active-link");
  intro__onetap.classList.remove("active-link");
  screenshots__onetap.classList.remove("active-link");
  home__onetap.classList.remove("active-link");
});

/* Buy */
const buy = document.querySelector(".buy");
const buy__onetap = document.querySelector(".buy__onetap");

buy.addEventListener("click", () => {
  buy.scrollIntoView();
  buy.classList.add("active-link");
  about.classList.remove("active-link");
  intro.classList.remove("active-link");
  screenshots.classList.remove("active-link");
  faqs.classList.remove("active-link");
});

buy__onetap.addEventListener("click", () => {
  buy__onetap.scrollIntoView();
  buy__onetap.classList.add("active-link");
  about__onetap.classList.remove("active-link");
  intro__onetap.classList.remove("active-link");
  screenshots__onetap.classList.remove("active-link");
  faqs__onetap.classList.remove("active-link");
  home__onetap.classList.remove("active-link");
});

/*==================== SWIPER  ====================*/
let swiperAbout = new Swiper(".about__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

let swiperScreen = new Swiper(".screen__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".questions__item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
