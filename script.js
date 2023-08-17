"use strict";

// EMAIL ENCODER
var encEmail = "aW5mb0B0aGVzYWdhb2ZzYWdlLmNvbQ==";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
