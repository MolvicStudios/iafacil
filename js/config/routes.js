/* ═══════════════════════════════════════════════════════════
   RUTAS - IAFACIL.HELP
   Definición centralizada de rutas de la aplicación
   ═══════════════════════════════════════════════════════════ */

export const ROUTES = {
    HOME:            '/',
    LOGIN:           '/pages/auth/login.html',
    REGISTER:        '/pages/auth/register.html',
    FORGOT_PASSWORD: '/pages/auth/forgot-password.html',
    RESET_PASSWORD:  '/pages/auth/reset-password.html',

    DASHBOARD:       '/pages/dashboard.html',

    COURSES:         '/pages/cursos/',
    COURSE_DETAIL:   (slug) => `/pages/cursos/${slug}.html`,
    LESSON:          (courseSlug, lessonId) => `/pages/cursos/${courseSlug}.html?leccion=${lessonId}`,

    TOOLS:           '/pages/herramientas/',
    PROMPT_BUILDER:  '/pages/herramientas/prompt-builder.html',
    IMAGE_GENERATOR: '/pages/herramientas/generador-imagenes.html',
    PROMPT_ANALYZER: '/pages/herramientas/analizador-prompts.html',
    AI_COMPARATOR:   '/pages/herramientas/comparador-ias.html',
    WORKFLOW_BUILDER:'/pages/herramientas/workflow-builder.html',
    PROMPT_LIBRARY:  '/pages/herramientas/biblioteca-prompts.html',

    EXPLORER:        '/pages/explorador.html',
    GLOSSARY:        '/pages/glosario.html',

    PROFILE:         '/pages/perfil.html',
    CERTIFICATES:    '/pages/certificados.html',

    PRIVACY:         '/pages/legal/privacidad.html',
    TERMS:           '/pages/legal/terminos.html',
    COOKIES:         '/pages/legal/cookies.html'
};

/* ─── Rutas que requieren autenticación ─── */
export const PROTECTED_ROUTES = [
    ROUTES.DASHBOARD,
    ROUTES.PROFILE,
    ROUTES.CERTIFICATES,
    '/pages/cursos/',
    '/pages/herramientas/'
];

/* ─── Rutas públicas (solo sin autenticación) ─── */
export const AUTH_ROUTES = [
    ROUTES.LOGIN,
    ROUTES.REGISTER,
    ROUTES.FORGOT_PASSWORD
];

/**
 * Verifica si la ruta actual necesita autenticación
 */
export function isProtectedRoute(path) {
    return PROTECTED_ROUTES.some(route => path.startsWith(route));
}

/**
 * Verifica si la ruta actual es de autenticación
 */
export function isAuthRoute(path) {
    return AUTH_ROUTES.some(route => path.startsWith(route));
}

/**
 * Navegar a una ruta
 */
export function navigateTo(route) {
    window.location.href = route;
}
