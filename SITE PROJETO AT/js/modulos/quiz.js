// MÓDULO RESPONSÁVEL POR TODA A LÓGICA DO QUIZ

export function inicializarquiz() {
    const quizForm = document.getElementById('digital-habits-quiz');
    if (!quizForm) return;

    const resultsDiv = document.getElementById('quiz-results');
    
    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // --- MELHORIA 1: CONTAGEM AUTOMÁTICA DE PERGUNTAS ---
        // Encontra todos os elementos de pergunta para saber o total
        const questions = quizForm.querySelectorAll('.quiz-question');
        const totalQuestions = questions.length;
        
        let totalScore = 0;
        let allAnswered = true;

        // O laço agora usa o número de perguntas encontrado no HTML
        for (let i = 1; i <= totalQuestions; i++) {
            const selectedOption = quizForm.querySelector(`input[name="q${i}"]:checked`);
            if (selectedOption) {
                totalScore += parseInt(selectedOption.value);
            } else {
                allAnswered = false;
                alert(`Por favor, responda à pergunta ${i} para ver o resultado.`);
                break; 
            }
        }
        
        if (!allAnswered) return;

        // --- MELHORIA 2: PONTUAÇÃO MÁXIMA DINÂMICA ---
        // Calcula a pontuação máxima possível assumindo que a melhor resposta vale 3
        const maxScore = totalQuestions * 3;

        const resultTitle = document.getElementById('result-title');
        const resultScore = document.getElementById('result-score');
        const resultMessage = document.getElementById('result-message');
        
        resultsDiv.classList.remove('result-positive', 'result-neutral', 'result-motivation');

        // --- MELHORIA 3: LÓGICA DE RESULTADO AJUSTADA ---
        // As pontuações foram ajustadas para um máximo de 6 pontos (2 perguntas)
        // Se você adicionar mais perguntas, precisará ajustar esses números novamente.
        if (totalScore >= 5) { // Para pontuação alta (5 ou 6)
            resultsDiv.classList.add('result-positive');
            resultTitle.textContent = 'Parabéns! Você é um Cidadão Digital Consciente!';
            resultScore.textContent = `Sua pontuação: ${totalScore} de ${maxScore}.`;
            resultMessage.textContent = 'Você demonstra ter hábitos digitais muito saudáveis e seguros. Sabe equilibrar o online e o offline, pensa criticamente e protege sua privacidade. Continue sendo esse ótimo exemplo!';
        } else if (totalScore >= 3) { // Para pontuação média (3 ou 4)
            resultsDiv.classList.add('result-neutral');
            resultTitle.textContent = 'Você está no Caminho Certo!';
            resultScore.textContent = `Sua pontuação: ${totalScore} de ${maxScore}.`;
            resultMessage.textContent = 'Você já tem uma boa noção de como navegar no mundo digital de forma segura, mas há espaço para melhorar. Que tal reforçar seus limites de tempo e praticar um pouco mais a verificação de informações? Você está quase lá!';
        } else { // Para pontuação baixa (2 ou menos)
            resultsDiv.classList.add('result-motivation');
            resultTitle.textContent = 'Vamos Refletir Juntos?';
            resultScore.textContent = `Sua pontuação: ${totalScore} de ${maxScore}.`;
            resultMessage.textContent = 'Seus resultados sugerem que sua relação com as telas pode ser melhorada para se tornar mais saudável e segura. Explore as seções de "Riscos" e "Soluções" em nosso site para encontrar dicas práticas. Conversar com seus pais ou responsáveis também é uma ótima ideia.';
        }

        resultsDiv.classList.remove('hidden');
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    });
}