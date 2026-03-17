[3:20 PM] Mekere Manasi
// Theme toggle
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('span') : null;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);
const currentTheme = root.getAttribute('data-theme') || 'dark';
if (themeIcon) themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    if (themeIcon) themeIcon.textContent = next === 'dark' ? '🌙' : '☀️';
  });
}
 
// Mobile nav
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
 
// Smooth scroll (native CSS supports it; this ensures closing mobile)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => navLinks?.classList.remove('show'));
});
 
// Year
document.getElementById('year').textContent = new Date().getFullYear();
 
// Contact form (no backend): demo using mailto OR Formspree/Netlify suggestion
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  // OPTION A: Use Formspree (replace with your endpoint)
  // const resp = await fetch('https://formspree.io/f/your-id', {
  //   method: 'POST',
  //   headers: { 'Accept': 'application/json' },
  //   body: new FormData(form)
  // });
  // if (resp.ok) { statusEl.textContent = 'Thanks! I will get back to you soon.'; form.reset(); return; }
 
  // OPTION B (fallback): mailto link
  const data = new FormData(form);
  const name = encodeURIComponent(data.get('name'));
  const email = encodeURIComponent(data.get('email'));
  const message = encodeURIComponent(data.get('message'));
  window.location.href = `mailto:hello@example.com?subject=Website%20Contact%20from%20${name}&body=From:%20${name}%20%3C${email}%3E%0A%0A${message}`;
  statusEl.textContent = 'Opening your email client…';
});
 