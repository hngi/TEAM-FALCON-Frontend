// Contact Page Navbar 
let navBar = document.getElementById("contact-us-nav");
let navUl = document.getElementById("contact-us-ul");
let hamburgerMenu = document.getElementById("hamburger");

hamburgerMenu.addEventListener("click", function() {
  navBar.classList.toggle("active");
  navUl.classList.toggle("active");
});
