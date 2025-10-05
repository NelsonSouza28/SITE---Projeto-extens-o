// MÓDULO RESPONSÁVEL PELA ANIMAÇÃO DE SCROLL (FADE-IN)

export function inicializaranimacoes() {
    const sectionsToAnimate = document.querySelectorAll('.hero, .banner, .content-section, .flashcards-container, .content-section1, #quiz');

    // Verifica se o navegador suporta a API IntersectionObserver
    if ("IntersectionObserver" in window) {
        sectionsToAnimate.forEach(section => {
            section.classList.add('fade-in-section');
        });

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Para a observação após animar
                }
            });
        }, observerOptions);

        sectionsToAnimate.forEach(section => {
            observer.observe(section);
        });
    }
}