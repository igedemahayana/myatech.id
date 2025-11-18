const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const hamburgerSpans = document.querySelectorAll(".hamburger span");

// Toggle mobile menu saat hamburger diklik
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  // <CHANGE> Animasi hamburger icon (X)
  hamburgerSpans[0].style.transform = mobileMenu.classList.contains("active")
    ? "rotate(45deg) translate(8px, 8px)"
    : "none";
  hamburgerSpans[1].style.opacity = mobileMenu.classList.contains("active")
    ? "0"
    : "1";
  hamburgerSpans[2].style.transform = mobileMenu.classList.contains("active")
    ? "rotate(-45deg) translate(7px, -7px)"
    : "none";
});

// Tutup menu saat link diklik
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburgerSpans[0].style.transform = "none";
    hamburgerSpans[1].style.opacity = "1";
    hamburgerSpans[2].style.transform = "none";
  });
});
