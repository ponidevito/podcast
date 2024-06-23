// Custom Scripts
// Custom scripts

// burger

//burger js
let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

// submenu
const submenu = document.querySelector(".submenu");
const submenuLinkRotate = submenu.querySelector(".link-submenu img");
const submenuLink = submenu.querySelector(".link-submenu");


document.addEventListener("DOMContentLoaded", function () {
  submenuLink.addEventListener("click", function (event) {
    event.preventDefault();
    submenu.classList.toggle("open");
    submenuLink.classList.toggle("_active");
    submenuLinkRotate.classList.toggle("_active");
  });
});

document.addEventListener("click", function (event) {
    if (!submenu.contains(event.target) && submenu.classList.contains("open")) {
      submenu.classList.remove("open");
      submenuLinkRotate.classList.remove("_active");
      submenuLink.classList.remove("_active");
    }
  });
