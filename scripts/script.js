const hamburger = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);
navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

function mobileMenu() {
    const open = hamburger.classList.toggle("active");
    navMenu.classList.toggle("active", open);
    hamburger.setAttribute("aria-expanded", open);
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", false);
}
