/* ═══════════════════════════════════════════════════════════
   BADGES DATA - IAFACIL.HELP
   30+ logros organizados por categoría
   ═══════════════════════════════════════════════════════════ */

export const BADGES = [
    // ─── Primeros pasos ───
    { id: 'primera-leccion',     name: 'Primera Lección',       icon: '📖', description: 'Completa tu primera lección',          rarity: 'comun',      category: 'aprendizaje' },
    { id: 'primer-curso',        name: 'Primer Curso',          icon: '🎓', description: 'Completa un curso entero',             rarity: 'comun',      category: 'aprendizaje' },
    { id: 'primera-herramienta', name: 'Explorador de Tools',   icon: '🔧', description: 'Usa una herramienta por primera vez',  rarity: 'comun',      category: 'herramientas' },

    // ─── Aprendizaje ───
    { id: 'diez-lecciones',      name: 'Estudiante Aplicado',   icon: '📚', description: 'Completa 10 lecciones',               rarity: 'comun',      category: 'aprendizaje' },
    { id: 'cincuenta-lecciones', name: 'Devorador de Lecciones',icon: '🔥', description: 'Completa 50 lecciones',               rarity: 'raro',       category: 'aprendizaje' },
    { id: 'cien-lecciones',      name: 'Centurión del Saber',   icon: '⚡', description: 'Completa 100 lecciones',              rarity: 'epico',      category: 'aprendizaje' },
    { id: 'cinco-cursos',        name: 'Multi-Cursante',        icon: '🏅', description: 'Completa 5 cursos',                   rarity: 'raro',       category: 'aprendizaje' },
    { id: 'quince-cursos',       name: 'Erudito IA',            icon: '🎯', description: 'Completa 15 cursos',                  rarity: 'epico',      category: 'aprendizaje' },
    { id: 'todos-los-cursos',    name: 'Maestro Absoluto',      icon: '👑', description: 'Completa los 25 cursos',              rarity: 'legendario', category: 'aprendizaje' },

    // ─── Quizzes ───
    { id: 'quiz-perfecto',       name: 'Perfeccionista',        icon: '💯', description: 'Obtén 100% en un quiz',               rarity: 'comun',      category: 'quizzes' },
    { id: 'diez-quiz-perfectos', name: 'Cerebro de Acero',      icon: '🧠', description: '10 quizzes perfectos',                rarity: 'raro',       category: 'quizzes' },
    { id: 'sin-errores',         name: 'Infalible',             icon: '🎯', description: 'Completa un curso sin fallar un quiz',rarity: 'epico',      category: 'quizzes' },

    // ─── Rachas ───
    { id: 'racha-3',             name: 'Constante',             icon: '🔥', description: 'Racha de 3 días',                     rarity: 'comun',      category: 'rachas' },
    { id: 'racha-7',             name: 'Semana Completa',       icon: '🔥', description: 'Racha de 7 días',                     rarity: 'raro',       category: 'rachas' },
    { id: 'racha-14',            name: 'Imparable',             icon: '🔥', description: 'Racha de 14 días',                    rarity: 'raro',       category: 'rachas' },
    { id: 'racha-30',            name: 'Máquina de Aprender',   icon: '🔥', description: 'Racha de 30 días',                    rarity: 'epico',      category: 'rachas' },
    { id: 'racha-100',           name: 'Leyenda de la Racha',   icon: '🔥', description: 'Racha de 100 días',                   rarity: 'legendario', category: 'rachas' },

    // ─── Herramientas ───
    { id: 'tool-prompt-builder',   name: 'Constructor Experto',  icon: '🔧', description: 'Usa el Constructor de Prompts',     rarity: 'comun',      category: 'herramientas' },
    { id: 'tool-image-generator',  name: 'Artista Digital',      icon: '🎨', description: 'Usa el Generador de Imágenes',      rarity: 'comun',      category: 'herramientas' },
    { id: 'tool-prompt-analyzer',  name: 'Analista de Prompts',  icon: '🔍', description: 'Usa el Analizador de Prompts',      rarity: 'comun',      category: 'herramientas' },
    { id: 'tool-ai-comparator',    name: 'Comparador Pro',       icon: '⚖️', description: 'Usa el Comparador de IAs',          rarity: 'comun',      category: 'herramientas' },
    { id: 'tool-workflow-builder', name: 'Automatizador',        icon: '🔄', description: 'Usa el Workflow Builder',            rarity: 'comun',      category: 'herramientas' },
    { id: 'todas-herramientas',    name: 'Navaja Suiza',         icon: '🛠️', description: 'Usa todas las herramientas',         rarity: 'epico',      category: 'herramientas' },

    // ─── Niveles ───
    { id: 'nivel-5',             name: 'Competente',             icon: '🎯', description: 'Alcanza el nivel 5',                rarity: 'raro',       category: 'niveles' },
    { id: 'nivel-8',             name: 'Maestro',                icon: '💎', description: 'Alcanza el nivel 8',                rarity: 'epico',      category: 'niveles' },
    { id: 'nivel-10',            name: 'Leyenda IA',             icon: '⭐', description: 'Alcanza el nivel 10',               rarity: 'legendario', category: 'niveles' },

    // ─── Sociales / Especiales ───
    { id: 'early-adopter',       name: 'Early Adopter',          icon: '🚀', description: 'Uno de los primeros 1000 usuarios', rarity: 'epico',      category: 'especiales' },
    { id: 'compartir',           name: 'Embajador',              icon: '📢', description: 'Comparte tu progreso',               rarity: 'comun',      category: 'especiales' },
    { id: 'nocturno',            name: 'Búho Nocturno',          icon: '🦉', description: 'Estudia después de medianoche',     rarity: 'raro',       category: 'especiales' },
    { id: 'fin-de-semana',       name: 'Guerrero del Fin de Semana', icon: '💪', description: 'Estudia sábado y domingo',      rarity: 'comun',      category: 'especiales' },
    { id: 'speed-run',           name: 'Speed Runner',           icon: '⏱️', description: 'Completa un curso en un día',       rarity: 'epico',      category: 'especiales' }
];

/** Buscar un badge por ID */
export function getBadgeById(id) {
    return BADGES.find(b => b.id === id) || null;
}

/** Obtener badges por categoría */
export function getBadgesByCategory(category) {
    return BADGES.filter(b => b.category === category);
}
