// script.js — smooth nav highlight and basic front-end behaviors

document.addEventListener("DOMContentLoaded", function () {
  // Add active class to the link matching current file
  const links = document.querySelectorAll(".nav-link");
  const current = window.location.pathname.split("/").pop() || "index.html";
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });

  // Smooth scroll for same-page anchors (if used)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Small accessible skip-to-content (if required)
  // [Optional expansion point for accessibility enhancements]
});
