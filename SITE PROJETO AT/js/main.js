// ARQUIVO MESTRE DE SCRIPTS
// A função deste arquivo é importar e inicializar todos os outros módulos.

import { inicializaranimacoes } from './modulos/animacoes.js';
import { inicializarmenu } from './modulos/menu.js';
import { inicializartema } from './modulos/tema.js';
import { inicializaracordeon } from './modulos/acordeon.js';
import { inicializarquiz } from './modulos/quiz.js';



// Espera o conteúdo da página ser totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa cada funcionalidade importada
    inicializaranimacoes();
    inicializarmenu();
    inicializartema();
    inicializaracordeon();
    inicializarquiz();
  
    
});