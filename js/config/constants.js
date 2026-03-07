/* ═══════════════════════════════════════════════════════════
   CONSTANTES - IAFACIL.HELP
   Valores constantes de la plataforma
   ═══════════════════════════════════════════════════════════ */

/* ─── Niveles del sistema de gamificación ─── */
export const LEVELS = [
    { level: 1,  name: 'Novato IA',        xpMin: 0,     xpMax: 100,   icon: '🌱' },
    { level: 2,  name: 'Aprendiz',          xpMin: 100,   xpMax: 300,   icon: '📚' },
    { level: 3,  name: 'Explorador',        xpMin: 300,   xpMax: 600,   icon: '🔍' },
    { level: 4,  name: 'Practicante',       xpMin: 600,   xpMax: 1000,  icon: '⚡' },
    { level: 5,  name: 'Competente',        xpMin: 1000,  xpMax: 1500,  icon: '🎯' },
    { level: 6,  name: 'Avanzado',          xpMin: 1500,  xpMax: 2200,  icon: '🚀' },
    { level: 7,  name: 'Experto',           xpMin: 2200,  xpMax: 3000,  icon: '💎' },
    { level: 8,  name: 'Maestro',           xpMin: 3000,  xpMax: 4000,  icon: '👑' },
    { level: 9,  name: 'Gurú IA',           xpMin: 4000,  xpMax: 5500,  icon: '🧙' },
    { level: 10, name: 'Leyenda',           xpMin: 5500,  xpMax: Infinity, icon: '⭐' }
];

/* ─── Categorías de herramientas / cursos ─── */
export const CATEGORIES = {
    texto:    { label: 'Texto',        color: '#00B894', icon: '✍️'  },
    imagen:   { label: 'Imagen',       color: '#00D9A5', icon: '🎨'  },
    audio:    { label: 'Audio',        color: '#FDCB6E', icon: '🎵'  },
    video:    { label: 'Video',        color: '#FF6B9D', icon: '🎬'  },
    auto:     { label: 'Automatización', color: '#74B9FF', icon: '⚙️' },
    agentes:  { label: 'Agentes IA',   color: '#A29BFE', icon: '🤖'  }
};

/* ─── XP por acciones ─── */
export const XP_REWARDS = {
    LESSON_COMPLETE:  25,
    QUIZ_PERFECT:     50,
    QUIZ_PASS:        30,
    FIRST_TOOL_USE:   15,
    DAILY_LOGIN:      10,
    STREAK_7:        100,
    STREAK_30:       500,
    COURSE_COMPLETE: 200,
    BADGE_EARNED:     20
};

/* ─── Configuración de streaks ─── */
export const STREAK_CONFIG = {
    FREEZE_MAX: 3,
    MILESTONES: [3, 7, 14, 30, 60, 100, 365]
};

/* ─── Tipos de herramientas ─── */
export const TOOLS = {
    promptBuilder:    { id: 'prompt-builder',    name: 'Constructor de Prompts', icon: '🔧', category: 'texto' },
    imageGenerator:   { id: 'image-generator',   name: 'Generador de Imágenes',  icon: '🎨', category: 'imagen' },
    promptAnalyzer:   { id: 'prompt-analyzer',   name: 'Analizador de Prompts',  icon: '🔍', category: 'texto' },
    aiComparator:     { id: 'ai-comparator',     name: 'Comparador de IAs',      icon: '⚖️', category: 'auto' },
    workflowBuilder:  { id: 'workflow-builder',  name: 'Constructor de Workflows',icon: '🔄', category: 'auto' },
    promptLibrary:    { id: 'prompt-library',    name: 'Biblioteca de Prompts',   icon: '📚', category: 'texto' },
    aiGlossary:       { id: 'ai-glossary',       name: 'Glosario IA',            icon: '📖', category: 'texto' }
};

/* ─── Configuración general ─── */
export const APP_CONFIG = {
    APP_NAME: 'IAFACIL.HELP',
    APP_TAGLINE: 'Aprende IA sin programar',
    APP_VERSION: '1.0.0',
    ITEMS_PER_PAGE: 12,
    TOAST_DURATION: 4000,
    DEBOUNCE_MS: 300,
    MAX_FILE_SIZE: 5 * 1024 * 1024 // 5 MB
};

/* ─── Badge rarities ─── */
export const BADGE_RARITY = {
    comun:       { label: 'Común',       color: '#95A5A6' },
    raro:        { label: 'Raro',        color: '#3498DB' },
    epico:       { label: 'Épico',       color: '#9B59B6' },
    legendario:  { label: 'Legendario',  color: '#F39C12' }
};
