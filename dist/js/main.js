// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    //Add classes to nav
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    // Add show class to all nav links
    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu state
    showMenu = true;
  } else {
    //Remove classes from nav
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    // Add show class to all nav close
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu state
    showMenu = false;
  }
}
