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

// Проверка инициализации EmailJS
console.log('EmailJS статус:', typeof emailjs !== 'undefined' ? 'Загружен' : 'Не загружен');

// EmailJS отправка формы
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Получаем данные формы
    const formData = new FormData(this);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    
    console.log('Отправка формы:', { name, email, message });
    
    // Показываем индикатор загрузки
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;
    
    emailjs.sendForm('service_fr3gb6f', 'template_d3q1ak8', this)
      .then((response) => {
        console.log('Успешная отправка:', response);
        alert('Сообщение отправлено!');
        hideContactPopup();
        contactForm.reset();
      }, (err) => {
        console.error('Ошибка отправки:', err);
        alert('Ошибка отправки: ' + err.text || err.message || 'Неизвестная ошибка');
      })
      .finally(() => {
        // Восстанавливаем кнопку
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
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