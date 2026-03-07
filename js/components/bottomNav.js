/* ═══════════════════════════════════════════════════════════
   BOTTOM NAV COMPONENT - IAFACIL.HELP
   Navegación inferior móvil (5 items)
   ═══════════════════════════════════════════════════════════ */

import { ROUTES } from '../config/routes.js';

export function renderBottomNav(container) {
    if (!container) return;
    const path = window.location.pathname;

    container.innerHTML = `
    <nav class="bottom-nav" id="bottomNav">
        <a href="${ROUTES.DASHBOARD}" class="bottom-nav-item ${path.includes('dashboard') ? 'active' : ''}">
            <span class="bottom-nav-icon">🏠</span>
            <span class="bottom-nav-label">Inicio</span>
        </a>
        <a href="/pages/cursos/" class="bottom-nav-item ${path.includes('cursos') ? 'active' : ''}">
            <span class="bottom-nav-icon">📚</span>
            <span class="bottom-nav-label">Cursos</span>
        </a>
        <a href="/pages/herramientas/" class="bottom-nav-item ${path.includes('herramientas') ? 'active' : ''}">
            <span class="bottom-nav-icon">🛠️</span>
            <span class="bottom-nav-label">Herramientas</span>
        </a>
        <a href="${ROUTES.EXPLORER}" class="bottom-nav-item ${path.includes('explorador') ? 'active' : ''}">
            <span class="bottom-nav-icon">🔍</span>
            <span class="bottom-nav-label">Explorar</span>
        </a>
        <a href="${ROUTES.PROFILE}" class="bottom-nav-item ${path.includes('perfil') ? 'active' : ''}">
            <span class="bottom-nav-icon">👤</span>
            <span class="bottom-nav-label">Perfil</span>
        </a>
    </nav>`;
}
