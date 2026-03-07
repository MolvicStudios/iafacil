/* ═══════════════════════════════════════════════════════════
   MODAL COMPONENT - IAFACIL.HELP
   Sistema de modales reutilizable
   ═══════════════════════════════════════════════════════════ */

class ModalManager {
    constructor() {
        this._ensureOverlay();
    }

    _ensureOverlay() {
        if (!document.getElementById('modalOverlay')) {
            const overlay = document.createElement('div');
            overlay.id = 'modalOverlay';
            overlay.className = 'modal-overlay';
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) this.close();
            });
            document.body.appendChild(overlay);
        }
    }

    /** Abrir un modal con contenido HTML */
    open({ title = '', body = '', footer = '', className = '', onClose = null }) {
        this._ensureOverlay();
        const overlay = document.getElementById('modalOverlay');

        const modal = document.createElement('div');
        modal.className = `modal ${className}`;
        modal.innerHTML = `
            <div class="modal-header">
                <h3 class="modal-title">${title}</h3>
                <button class="modal-close" aria-label="Cerrar">&times;</button>
            </div>
            <div class="modal-body">${body}</div>
            ${footer ? `<div class="modal-footer">${footer}</div>` : ''}
        `;

        modal.querySelector('.modal-close').addEventListener('click', () => {
            this.close();
            if (onClose) onClose();
        });

        // Limpiar modales anteriores
        overlay.innerHTML = '';
        overlay.appendChild(modal);
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Cerrar con Escape
        this._escHandler = (e) => {
            if (e.key === 'Escape') this.close();
        };
        document.addEventListener('keydown', this._escHandler);

        return modal;
    }

    /** Modal de celebración (subida de nivel, badge, etc.) */
    celebrate({ title, message, icon = '🎉' }) {
        return this.open({
            className: 'modal-celebrate',
            title: '',
            body: `
                <div class="text-center" style="padding: 1rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;" class="animate-celebrate">${icon}</div>
                    <h2 style="margin-bottom: 0.5rem;">${title}</h2>
                    <p style="color: var(--text-secondary);">${message}</p>
                </div>
            `,
            footer: '<button class="btn btn-primary btn-block" onclick="modalManager.close()">¡Genial!</button>'
        });
    }

    /** Modal de confirmación */
    confirm({ title, message, confirmText = 'Confirmar', cancelText = 'Cancelar' }) {
        return new Promise((resolve) => {
            const modal = this.open({
                title,
                body: `<p>${message}</p>`,
                footer: `
                    <button class="btn btn-outline" id="modalCancel">${cancelText}</button>
                    <button class="btn btn-primary" id="modalConfirm">${confirmText}</button>
                `
            });

            modal.querySelector('#modalConfirm').addEventListener('click', () => {
                this.close();
                resolve(true);
            });

            modal.querySelector('#modalCancel').addEventListener('click', () => {
                this.close();
                resolve(false);
            });
        });
    }

    /** Cerrar modal actual */
    close() {
        const overlay = document.getElementById('modalOverlay');
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (this._escHandler) {
            document.removeEventListener('keydown', this._escHandler);
        }
    }
}

export const modalManager = new ModalManager();

// También disponible globalmente para onclick en HTML
window.modalManager = modalManager;
