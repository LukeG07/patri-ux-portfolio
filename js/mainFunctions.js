const faders = document.querySelectorAll(".fade-in");
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
          console.log("in view");
        }
      });
}, observerOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.nav-container');
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;

  if (scrollPosition > windowHeight) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});