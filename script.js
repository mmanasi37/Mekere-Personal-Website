[3:20 PM] Mekere Manasi
// ===============================
THEME TOGGLE — FIXED
// ===============================
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("span");

// Load saved theme or default to dark
let savedTheme = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", savedTheme);
themeIcon.textContent = savedTheme === "dark" ? "🌙" : "☀️";

// Toggle event
themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeIcon.textContent = next === "dark" ? "🌙" : "☀️";
});


// ===============================
MOBILE NAV — FIXED
// ===============================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu when clicking links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});


// ===============================
FOOTER YEAR
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();


// ===============================
CONTACT FORM — FIXED EMAIL
// ===============================
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = encodeURIComponent(data.get("name"));
  const email = encodeURIComponent(data.get("email"));
  const message = encodeURIComponent(data.get("message"));

  window.location.href = `mailto:manasimekere@gmail.com?subject=Website%20Contact%20from%20${name}&body=From:%20${name}%20<${email}>%0A%0A${message}`;
  statusEl.textContent = "Opening your email client…";
});
 