// Navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Nav icon toggle
const hamburger = document.querySelector(".hamburger");
const cancel = document.querySelector(".cancel");
const navList = document.querySelector(".nav-list");

const iconToggle = () => {
  if (navList.style.display == "block") {
    navList.style.display = "none";
    hamburger.style.display = "block";
    cancel.style.display = "none";
  } else {
    navList.style.display = "block";
    hamburger.style.display = "none";
    cancel.style.display = "block";
  }
};

hamburger.addEventListener("click", () => {
  iconToggle();
});

cancel.addEventListener("click", () => {
  iconToggle();
});
