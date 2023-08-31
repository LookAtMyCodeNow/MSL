// "use strict";

// TODO:uncomment below later when I put everything together into a ready project
const heroHamburger = document.querySelector("#hero-hamburger");
const heroList = document.querySelector("#hero-list");

heroHamburger.addEventListener("click", function () {
  heroList.classList.toggle("unvisible-x");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

// Start Section 2
