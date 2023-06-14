const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in")

let observerOptions = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0
  };

appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else{
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
          //console.log("in view");
        }
      });
}, observerOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})
