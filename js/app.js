/*
 * app.js - Módulo principal da aplicação
 * Inicializa a validação de formulários e outras funcionalidades.
 */

import { setupValidation } from "./validation.js";
import { setupRouter } from "./templates.js";
import { applyHighContrastPreference, addHighContrastToggle } from "./accessibility.js";

document.addEventListener("DOMContentLoaded", function() {
    // Aplica a preferência de alto contraste salva
    applyHighContrastPreference();

    // Adiciona o botão de alternância (para demonstração)
    addHighContrastToggle();

    // Inicializa o roteador para o SPA básico
    setupRouter();

    // A validação do formulário é inicializada dentro do loadTemplate
    // quando a rota 'cadastro' é carregada.
});
