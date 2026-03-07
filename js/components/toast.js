/* ═══════════════════════════════════════════════════════════
   TOAST COMPONENT - IAFACIL.HELP
   Notificaciones toast reutilizables
   ═══════════════════════════════════════════════════════════ */

import { APP_CONFIG } from '../config/constants.js';

class ToastManager {
    constructor() {
        this._ensureContainer();
    }

    _ensureContainer() {
        if (!document.getElementById('toastContainer')) {
            const container = document.createElement('div');
            container.id = 'toastContainer';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
    }

    /** Mostrar toast */
    show(message, type = 'info', duration = APP_CONFIG.TOAST_DURATION) {
        this._ensureContainer();
        const container = document.getElementById('toastContainer');

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const icons = { info: 'ℹ️', success: '✅', warning: '⚠️', error: '❌' };
        toast.innerHTML = `
            <span class="toast-icon">${icons[type] || icons.info}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close" aria-label="Cerrar">&times;</button>
        `;

        toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());

        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('toast-exit');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    info(message)    { this.show(message, 'info'); }
    success(message) { this.show(message, 'success'); }
    warning(message) { this.show(message, 'warning'); }
    error(message)   { this.show(message, 'error'); }
}

export const toast = new ToastManager();
