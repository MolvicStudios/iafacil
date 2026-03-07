/* ═══════════════════════════════════════════════════════════
   AUTH SERVICE - IAFACIL.HELP
   Gestión de autenticación y sesiones
   ═══════════════════════════════════════════════════════════ */

import { auth, supabase } from '../config/supabase.js';

class AuthService {
    constructor() {
        this.user = null;
        this.session = null;
        this.listeners = [];
        this._init();
    }

    async _init() {
        // Obtener sesión actual
        this.session = await auth.getSession();
        if (this.session) {
            this.user = this.session.user;
        }

        // Escuchar cambios de autenticación
        auth.onAuthStateChange((event, session) => {
            this.session = session;
            this.user = session?.user || null;

            this._notifyListeners(event, session);

            if (event === 'SIGNED_IN') {
                this._handleSignIn();
            } else if (event === 'SIGNED_OUT') {
                this._handleSignOut();
            }
        });
    }

    /** Registro con email */
    async register(email, password, name) {
        const data = await auth.signUp(email, password, {
            full_name: name,
            avatar_url: '',
            xp: 0,
            level: 1,
            streak: 0
        });

        // Crear perfil en tabla profiles
        if (data.user) {
            await supabase.from('profiles').insert({
                id: data.user.id,
                full_name: name,
                email: email,
                xp: 0,
                level: 1,
                streak: 0,
                badges: [],
                created_at: new Date().toISOString()
            });
        }

        return data;
    }

    /** Login con email */
    async login(email, password) {
        return await auth.signIn(email, password);
    }

    /** Logout */
    async logout() {
        await auth.signOut();
        window.location.href = '/';
    }

    /** Recuperar contraseña */
    async forgotPassword(email) {
        return await auth.resetPassword(email);
    }

    /** Actualizar contraseña */
    async updatePassword(newPassword) {
        return await auth.updatePassword(newPassword);
    }

    /** Obtener usuario actual */
    getUser() {
        return this.user;
    }

    /** Verificar si está autenticado */
    isAuthenticated() {
        return !!this.session;
    }

    /** Suscribirse a cambios de auth */
    onAuthChange(callback) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(l => l !== callback);
        };
    }

    /** Verificar permisos de ruta */
    checkRouteAccess() {
        // Modo abierto: todas las rutas son públicas.
        return true;
    }

    _handleSignIn() {
        // Modo abierto: no forzamos redirecciones automáticas.
    }

    _handleSignOut() {
        // Modo abierto: no forzamos redirecciones automáticas.
    }

    _notifyListeners(event, session) {
        this.listeners.forEach(cb => cb(event, session));
    }
}

export const authService = new AuthService();
