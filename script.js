"use strict";
const menu = document.getElementById("menu");
const menuOpen = document.getElementById("menu-toggle-open");
const menuClose = document.getElementById("menu-toggle-close");
const menuInt = document.getElementById("int-nav").querySelectorAll("a");
const reservation = document.getElementById("reservation");

// EMAIL ENCODER
var encEmail = "c29zQHRoZXNhZ2FvZnNhZ2UuY29t";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));

// OPEN MENU
function openMenu() {
  menu.classList.add("toggle-open");
  document.body.style.overflowY = "hidden";
}

function closeMenu() {
  menu.classList.remove("toggle-open");
  document.body.style.overflowY = "visible";
}

menuInt.forEach((btn) => {
  btn.addEventListener("click", closeMenu);
});

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

function changeBtnText() {
  const action = "reserve here";
  const date = "October 8th 2023";
  const attr = reservation.getAttribute("information");
  if (attr === "action") {
    reservation.innerHTML = date;
    reservation.setAttribute("information", "date");
  } else {
    reservation.innerHTML = action;
    reservation.setAttribute("information", "action");
  }
}

setInterval(() => {
  changeBtnText();
}, 3000);
