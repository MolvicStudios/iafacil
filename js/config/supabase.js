/* ═══════════════════════════════════════════════════════════
   SUPABASE CONFIG - IAFACIL.HELP
   Conexión con Supabase (Auth + DB + Storage + Realtime)
   ═══════════════════════════════════════════════════════════ */

const SUPABASE_URL = 'https://lvpzxzplusebwdpxeruv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_O1w1Et51gbjM2vZOoA0jjg_Q2DdxeG9';

// Importamos desde CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* ─── Helpers de autenticación ─── */
export const auth = {
    /** Registrar con email/contraseña */
    async signUp(email, password, metadata = {}) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: metadata }
        });
        if (error) throw error;
        return data;
    },

    /** Iniciar sesión con email/contraseña */
    async signIn(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (error) throw error;
        return data;
    },

    /** Cerrar sesión */
    async signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    },

    /** Obtener la sesión actual */
    async getSession() {
        const { data: { session } } = await supabase.auth.getSession();
        return session;
    },

    /** Obtener el usuario actual */
    async getUser() {
        const { data: { user } } = await supabase.auth.getUser();
        return user;
    },

    /** Recuperar contraseña */
    async resetPassword(email) {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/pages/auth/reset-password.html`
        });
        if (error) throw error;
        return data;
    },

    /** Actualizar contraseña */
    async updatePassword(newPassword) {
        const { data, error } = await supabase.auth.updateUser({
            password: newPassword
        });
        if (error) throw error;
        return data;
    },

    /** Escuchar cambios en autenticación */
    onAuthStateChange(callback) {
        return supabase.auth.onAuthStateChange(callback);
    }
};
