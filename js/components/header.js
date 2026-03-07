/* ═══════════════════════════════════════════════════════════
   HEADER COMPONENT - IAFACIL.HELP
   Header dinámico (landing vs app) con estado de usuario
   ═══════════════════════════════════════════════════════════ */

import { authService } from '../services/auth.js';
import { gamification } from '../services/gamification.js';
import { db } from '../services/database.js';
import { ROUTES } from '../config/routes.js';

export function renderHeader(container, options = {}) {
    const { landing = false } = options;
    const user = authService.getUser();
    const isAuth = authService.isAuthenticated();

    container.innerHTML = `
    <header class="header ${landing ? 'header-landing' : ''}" id="header">
        <div class="container">
            <a href="${isAuth ? ROUTES.DASHBOARD : '/'}" class="header-logo">
                <span class="logo-icon">🤖</span>
                <span class="logo-text">IAFACIL<span class="logo-accent">.HELP</span></span>
            </a>

            ${isAuth ? renderAppNav() : renderLandingNav()}

            <div class="header-actions">
                ${isAuth ? renderUserActions() : renderGuestActions()}
            </div>

            <button class="hamburger" id="hamburger" aria-label="Menú">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>`;

    initHeaderEvents(container);

    if (isAuth) {
        loadUserStats(container);
    }
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
        <div class="header-xp" id="headerXp">
            <span class="xp-icon">⚡</span>
            <span class="xp-value" id="headerXpValue">0</span>
        </div>
        <div class="header-streak" id="headerStreak">
            <span class="streak-icon">🔥</span>
            <span class="streak-value" id="headerStreakValue">0</span>
        </div>
        <button class="header-avatar" id="headerAvatar" aria-label="Mi perfil">
            <span id="headerAvatarText">?</span>
        </button>`;
}

async function loadUserStats(container) {
    try {
        const user = authService.getUser();
        if (!user) return;

        const profile = await db.getProfile(user.id);
        if (!profile) return;

        const xpEl = container.querySelector('#headerXpValue');
        const streakEl = container.querySelector('#headerStreakValue');
        const avatarEl = container.querySelector('#headerAvatarText');

        if (xpEl) xpEl.textContent = profile.xp || 0;
        if (streakEl) streakEl.textContent = profile.streak || 0;
        if (avatarEl) {
            const name = profile.full_name || user.email || '?';
            avatarEl.textContent = name.charAt(0).toUpperCase();
        }
    } catch (e) {
        // Silently fail for header stats
    }
}

function initHeaderEvents(container) {
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
