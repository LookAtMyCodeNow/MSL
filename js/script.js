"use strict";

const heroHamburger = document.querySelector("#hero-hamburger");
const heroList = document.querySelector("#hero-list");

heroHamburger.addEventListener("click", function () {
  heroList.classList.toggle("unvisible");
});
