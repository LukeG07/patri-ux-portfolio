const faders = document.querySelectorAll(".fade-in, .reveal");
const sliders = document.querySelectorAll(".slide-in")

let observerOptions = {
    root: null,
    rootMargin: "-100px 0px",
    threshold: 0
  };

appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else{
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
}, observerOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})

const navbar = document.querySelector('.nav-container');
const hero = document.querySelector('#home');

function updateNavbar() {
  if (!navbar || !hero) return;
  const pastHero = hero.getBoundingClientRect().bottom <= navbar.offsetHeight;
  navbar.classList.toggle('scroll', pastHero);
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();
