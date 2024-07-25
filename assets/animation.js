// Active nav link
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".navLink");

  function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove("active"));
    if (window.scrollY === 0) {
      document.getElementById("homeLink").classList.add("active");
    } else {
      links[index].classList.add("active");
    }
  }

  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// About animation
document.addEventListener("DOMContentLoaded", function () {
  const about = document.querySelector("#about");

  function checkVisibility() {
    const aboutTop = about.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (aboutTop < screenHeight - 50) {
      about.classList.add("visible");
      window.removeEventListener("scroll", checkVisibility);
    }
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

// Services animation
document.addEventListener("DOMContentLoaded", function () {
  const servicesHeader = document.querySelector(".servicesHeader");
  const cards = document.querySelectorAll(".card");
  const elements = [servicesHeader, ...cards];

  function checkVisibility() {
    const servicesTop = document
      .querySelector("#services")
      .getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (servicesTop < screenHeight - 250) {
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 200);
      });
      window.removeEventListener("scroll", checkVisibility);
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

// Projects animation
document.addEventListener("DOMContentLoaded", function () {
  const projectsHeader = document.querySelector(".projectsHeader");
  const projects = document.querySelectorAll(".projectImg");
  const elements = [projectsHeader, ...projects];

  function checkVisibility() {
    const projectsTop = document
      .querySelector("#projects")
      .getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (projectsTop < screenHeight - 300) {
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 200);
      });
      window.removeEventListener("scroll", checkVisibility);
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

// Contact animation
document.addEventListener("DOMContentLoaded", function () {
  const contactHeader = document.querySelector(".contactHeader");
  const contactDetails = document.querySelector(".contactDetails");
  const elements = [contactHeader, contactDetails];

  function checkVisibility() {
    const contactTop = document
      .querySelector("#contact")
      .getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (contactTop < screenHeight - 300) {
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 200);
      });
      window.removeEventListener("scroll", checkVisibility);
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
