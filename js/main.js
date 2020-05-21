const nav = document.querySelector(".nav");

const menuItems = nav.querySelector(".menu");

nav.addEventListener("click", showMenu);

function showMenu() {
  menuItems.toggleAttribute("hidden");
  menuItems.classList.toggle("show-menu");
}
