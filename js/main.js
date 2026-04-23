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

// Contact modal
const contactModal = document.getElementById('contactModal');
const openModalBtn = document.getElementById('openContactModal');
const closeModalBtn = document.getElementById('closeModal');

openModalBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  contactModal.classList.add('open');
  document.body.style.overflow = 'hidden';
});

function closeModal() {
  contactModal.classList.remove('open');
  document.body.style.overflow = '';
}

closeModalBtn?.addEventListener('click', closeModal);
contactModal?.addEventListener('click', (e) => {
  if (e.target === contactModal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
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
