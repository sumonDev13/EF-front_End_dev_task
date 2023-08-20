document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchBar = document.querySelector(".search-bar");
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu");
  
    searchIcon.addEventListener("click", function () {
      navbar.classList.toggle("search-active");
    });
  
    menu.addEventListener("click", function () {
      navbar.classList.toggle("mobile-active");
    });
  });
  