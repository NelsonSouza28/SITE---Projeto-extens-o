// MÓDULO RESPONSÁVEL PELA LÓGICA DO TEMA (DARK/LIGHT)

export function inicializartema() {
    const themeSwitcher = document.querySelector('.theme-switcher');
    const body = document.body;

    if (!themeSwitcher || !body) return;

    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
        }
    };

    const toggleTheme = () => {
        body.classList.toggle('light-mode');
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    };

    themeSwitcher.addEventListener('click', toggleTheme);
    applySavedTheme();
}