// Alternar tema claro/escuro
const themeToggle = document.getElementById('themeToggle');
const scrollToTopBtn = document.getElementById('scrollToTop');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
});

// Validação de e-mail
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('emailFeedback');

emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value;
    const isValid = /\\S+@\\S+\\.\\S+/.test(emailValue);
    emailFeedback.textContent = isValid ? 'E-mail válido!' : 'E-mail inválido!';
});

// Scroll suave para voltar ao início
window.onscroll = () => {
    scrollToTopBtn.style.display = document.documentElement.scrollTop > 100 ? 'block' : 'none';
};

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menu hambúrguer
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});