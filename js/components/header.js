/* ═══════════════════════════════════════════════════════════
   HEADER COMPONENT - IAFACIL.HELP
   Header dinámico (landing vs app) con estado de usuario
   ═══════════════════════════════════════════════════════════ */

import { ROUTES } from '../config/routes.js';

// ── Inject Nunito font (non-blocking <link>, avoids @import CLS) ──
(function injectFont() {
    if (document.querySelector('link[href*="Nunito"]')) return;
    const pre1 = Object.assign(document.createElement('link'), { rel: 'preconnect', href: 'https://fonts.googleapis.com' });
    const pre2 = Object.assign(document.createElement('link'), { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' });
    const font = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap' });
    document.head.prepend(font); document.head.prepend(pre2); document.head.prepend(pre1);
})();

// ── Dark mode: apply persisted or system preference immediately ──
(function applyDarkMode() {
    const saved = localStorage.getItem('iafacil-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();

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
                <button class="dark-mode-toggle" id="darkModeToggle" aria-label="Cambiar tema" title="Cambiar tema claro/oscuro">
                    ${document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙'}
                </button>
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

    // Dark mode toggle
    const dmToggle = container.querySelector('#darkModeToggle');
    if (dmToggle) {
        dmToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('iafacil-theme', 'light');
                dmToggle.textContent = '🌙';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('iafacil-theme', 'dark');
                dmToggle.textContent = '☀️';
            }
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
