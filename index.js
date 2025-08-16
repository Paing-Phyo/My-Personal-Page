
//creating the year of web!
const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear


let menu = document.querySelector(`#menu-bar`);
let navbar = document.querySelector(`#navbar`);

menu.onclick = () => {
    menu.classList.toggle(`bx-x`);
    navbar.classList.toggle(`active`);
}

window.onscroll = () => {
    menu.classList.remove(`bx-x`);
    navbar.classList.remove(`active`);
}


var swiper = new Swiper(".home-slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
