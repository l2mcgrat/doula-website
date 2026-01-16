
// Set brand name globally
const BRAND_NAME = "Camille Doula";

document.addEventListener("DOMContentLoaded", () => {
  const brandEl = document.getElementById("brandName");
  if (brandEl) brandEl.textContent = BRAND_NAME;
});

<span id="brandName">Camille Doula</span>

// Mobile menu toggle
const btn = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");
const contactBtn = document.getElementById("contactBtn");
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    window.location.href = "./contact.html";
  });
}


if (btn && links) {
  btn.addEventListener("click", () => links.classList.toggle("open"));
}

// Active link highlight based on current file
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(a => {
  if (a.getAttribute("href") === current) a.classList.add("active");
});
