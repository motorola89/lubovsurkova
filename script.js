// Мобильное меню
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    navToggle.classList.toggle('open');
  });
}
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    navToggle.classList.remove('open');
  });
});

// Открытие/закрытие формы обратной связи
const openContactForm = document.getElementById('openContactForm');
const openContactForm2 = document.getElementById('openContactForm2');
const contactPopup = document.getElementById('contactPopup');
const closeContactPopup = document.getElementById('closeContactPopup');

function showContactPopup() {
  contactPopup.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function hideContactPopup() {
  contactPopup.classList.remove('show');
  document.body.style.overflow = '';
}
if (openContactForm) openContactForm.onclick = showContactPopup;
if (openContactForm2) openContactForm2.onclick = showContactPopup;
if (closeContactPopup) closeContactPopup.onclick = hideContactPopup;
if (contactPopup) {
  contactPopup.addEventListener('click', (e) => {
    if (e.target === contactPopup) hideContactPopup();
  });
}

// EmailJS отправка формы
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('service_fr3gb6f', 'template_d3q1ak8', this)
      .then(() => {
        alert('Сообщение отправлено!');
        hideContactPopup();
        contactForm.reset();
      }, (err) => {
        alert('Ошибка: ' + err);
      });
  });
}

// Плавный скролл для якорей
for (const link of document.querySelectorAll('a[href^="#"]')) {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
// Кнопка "Наверх"
const toTop = document.getElementById('toTop');
if (toTop) {
  toTop.onclick = function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
} 