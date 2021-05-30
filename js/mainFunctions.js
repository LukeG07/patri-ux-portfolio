const animateInItems = document.querySelectorAll(".animate-in-view");
console.log(animateInItems)

let observerOptions = {
    root: null,
    rootMargin: "180px",
    threshold: [0.50]
  };

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
            entry.target.classList.add('is-visible');
            console.log("in view")
        } else {
            entry.target.classList.remove('is-visible');
            console.log("out of view")
        }
      });
}, observerOptions);

animateInItems.forEach(item => {
  observer.observe(item);
});