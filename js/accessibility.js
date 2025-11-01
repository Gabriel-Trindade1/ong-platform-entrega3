/*
 * accessibility.js - Módulo de funcionalidades de acessibilidade
 * Inclui a função para alternar o modo de alto contraste.
 */

const HIGH_CONTRAST_CLASS = 'high-contrast';

/**
 * Alterna a classe de alto contraste no body.
 */
export function toggleHighContrast() {
    const body = document.body;
    const isHighContrast = body.classList.toggle(HIGH_CONTRAST_CLASS);
    
    // Salva a preferência no localStorage
    localStorage.setItem('highContrastMode', isHighContrast ? 'enabled' : 'disabled');
    
    // Notifica o usuário (opcional, mas bom para acessibilidade)
    alert(`Modo de Alto Contraste ${isHighContrast ? 'ativado' : 'desativado'}.`);
}

/**
 * Aplica a preferência de alto contraste ao carregar a página.
 */
export function applyHighContrastPreference() {
    if (localStorage.getItem('highContrastMode') === 'enabled') {
        document.body.classList.add(HIGH_CONTRAST_CLASS);
    }
}

/**
 * Adiciona um botão de alternância de alto contraste ao DOM (simulação).
 * Em um projeto real, isso estaria no HTML, mas aqui o adicionamos via JS.
 */
export function addHighContrastToggle() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Alto Contraste';
    toggleButton.setAttribute('aria-label', 'Alternar modo de alto contraste');
    toggleButton.classList.add('accessibility-toggle');
    
    // Estilização básica para o botão (para fins de demonstração)
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    toggleButton.style.zIndex = '1000';
    toggleButton.style.padding = '5px 10px';
    toggleButton.style.backgroundColor = 'var(--color-primary)';
    toggleButton.style.color = 'var(--color-white)';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';
    
    toggleButton.addEventListener('click', toggleHighContrast);
    
    document.body.appendChild(toggleButton);
}
