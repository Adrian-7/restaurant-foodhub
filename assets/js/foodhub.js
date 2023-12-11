"use strict";

// navbar variabile
const nav = document.querySelector(".navbar-nav");
const navLinks = document.querySelectorAll(".nav-link");
const cartToggleBtn = document.querySelector(".shopping-cart-btn");
const navToggleBtn = document.querySelector(".menu-toggle-btn");
const shoppingCart = document.querySelector(".cart-box");

// nav  functii
const navToggleFunc = function () {
  nav.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
};

// functii de adaugare in coș
const cartToggleFunc = function () {
  shoppingCart.classList.toggle("active");
};

// adauga eveniment la nav-toggle-btn
navToggleBtn.addEventListener("click", function () {
  if (shoppingCart.classList.contains("active")) cartToggleFunc();

  navToggleFunc();
});

// adauga eveniment cart-toggle-btn
cartToggleBtn.addEventListener("click", function () {
  if (nav.classList.contains("active")) navToggleFunc();

  cartToggleFunc();
});

// adauga eveniment la tot nav-link
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", navToggleFunc);
}
