const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const scrollBtn = document.getElementById("scrollTopBtn");
const modal = document.getElementById("modal");
const openModalButtons = document.querySelectorAll(".open-modal");
const closeBtn = document.querySelector(".close");
const revealElements = document.querySelectorAll(".reveal");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

openModalButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));