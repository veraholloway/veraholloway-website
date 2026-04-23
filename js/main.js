/* Vera Holloway — main.js */

// Announcement bar dismiss
const bar = document.getElementById('announcementBar');
const closeBar = document.getElementById('closeBar');
closeBar?.addEventListener('click', () => {
  bar.classList.add('hidden');
  sessionStorage.setItem('barDismissed', '1');
});
if (sessionStorage.getItem('barDismissed')) {
  bar?.classList.add('hidden');
}

// Nav mobile toggle
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
});

navLinks?.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.1 }
);
reveals.forEach(el => observer.observe(el));
