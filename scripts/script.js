const hamburger = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);
navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

// Escape closes the menu and hands focus back to the burger
document.addEventListener("keydown", e => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
        closeMenu();
        hamburger.focus();
    }
});

// Don't leave the page scroll-locked if the window grows to desktop width
window.matchMedia("(min-width: 769px)").addEventListener("change", e => {
    if (e.matches) closeMenu();
});

function mobileMenu() {
    const open = hamburger.classList.toggle("active");
    navMenu.classList.toggle("active", open);
    document.body.classList.toggle("menu-open", open);
    hamburger.setAttribute("aria-expanded", open);
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
    hamburger.setAttribute("aria-expanded", false);
}
