"use strict";
const menu = document.getElementById("menu-open");
const menuOpen = document.getElementById("menu");
const menuClose = document.getElementById("menu-close");

// EMAIL ENCODER
var encEmail = "aW5mb0B0aGVzYWdhb2ZzYWdlLmNvbQ==";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));

// OPEN MENU
function openMenu() {
  menu.style.display = "block";
}

function closeMenu() {
  menu.style.display = "none";
}

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
