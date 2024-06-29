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

  const swiper = new Swiper('.swiper', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
      // Autoplay
  autoplay: {
    delay: 2500, // Затримка між прокручуванням (у мілісекундах)
    disableOnInteraction: false, // Прокручування не зупиняється після взаємодії користувача
  },
  
  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
  });
