document.addEventListener("DOMContentLoaded", () => {
  const revealTargets = document.querySelectorAll(
    ".hero, .section, .banner, .card, .panel, .faq-item, .table, .site-footer"
  );

  revealTargets.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${Math.min((i % 8) * 60, 360)}ms`;
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealTargets.forEach((el) => observer.observe(el));
});
