// MÓDULO RESPONSÁVEL PELA LÓGICA DO MENU MOBILE

export function inicializarmenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('.nav');

    if (!mobileMenuButton || !nav) return;

    mobileMenuButton.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
        });
    });
}