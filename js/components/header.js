/* ═══════════════════════════════════════════════════════════
   HEADER COMPONENT - IAFACIL.HELP
   Header dinámico (landing vs app) con estado de usuario
   ═══════════════════════════════════════════════════════════ */

import { ROUTES } from '../config/routes.js';

export function renderHeader(container, options = {}) {
    if (!container) return;
    const { landing = false } = options;

    container.innerHTML = `
    <header class="header ${landing ? 'header-landing' : ''}" id="header">
        <div class="container">
            <a href="${landing ? '/' : ROUTES.DASHBOARD}" class="header-logo">
                <span class="logo-icon">🤖</span>
                <span class="logo-text">IAFACIL<span class="logo-accent">.HELP</span></span>
            </a>

            ${landing ? renderLandingNav() : renderAppNav()}

            <div class="header-actions">
                ${landing ? renderGuestActions() : renderUserActions()}
            </div>

            <button class="hamburger" id="hamburger" aria-label="Menú">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>`;

    initHeaderEvents(container);
}

function renderLandingNav() {
    return `
    <nav class="header-nav" id="mainNav">
        <a href="#cursos" class="nav-item">Cursos</a>
        <a href="#herramientas" class="nav-item">Herramientas</a>
        <a href="#como-funciona" class="nav-item">Cómo funciona</a>
    </nav>`;
}

function renderAppNav() {
    const path = window.location.pathname;
    return `
    <nav class="header-nav" id="mainNav">
        <a href="${ROUTES.DASHBOARD}" class="nav-item ${path.includes('dashboard') ? 'active' : ''}">Dashboard</a>
        <a href="/pages/cursos/" class="nav-item ${path.includes('cursos') ? 'active' : ''}">Cursos</a>
        <a href="/pages/herramientas/" class="nav-item ${path.includes('herramientas') ? 'active' : ''}">Herramientas</a>
        <a href="${ROUTES.EXPLORER}" class="nav-item ${path.includes('explorador') ? 'active' : ''}">Explorador</a>
    </nav>`;
}

function renderGuestActions() {
    return '';
}

function renderUserActions() {
    return `
        <a href="${ROUTES.DASHBOARD}" class="btn btn-sm btn-outline">Dashboard</a>
        <button class="header-avatar" id="headerAvatar" aria-label="Mi perfil">
            <span id="headerAvatarText">👤</span>
        </button>`;
}

function initHeaderEvents(container) {
    if (!container) return;

    // Scroll effect
    window.addEventListener('scroll', () => {
        const header = container.querySelector('#header');
        if (header) header.classList.toggle('header-scrolled', window.scrollY > 50);
    });

    // Hamburger
    const hamburger = container.querySelector('#hamburger');
    const nav = container.querySelector('#mainNav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Avatar dropdown
    const avatar = container.querySelector('#headerAvatar');
    if (avatar) {
        avatar.addEventListener('click', () => {
            window.location.href = ROUTES.PROFILE;
        });
    }
}
