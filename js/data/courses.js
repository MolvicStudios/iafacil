/* ═══════════════════════════════════════════════════════════
   COURSES DATA - IAFACIL.HELP
   25 cursos: 15 por nivel + 10 por profesión
   ═══════════════════════════════════════════════════════════ */

export const COURSES = [
    // ─── PRINCIPIANTE (5 cursos) ───
    {
        id: 'intro-ia',
        title: '¿Qué es la Inteligencia Artificial?',
        description: 'Entiende los fundamentos de la IA, su historia y cómo impacta tu vida diaria.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'principiante',
        levelIcon: '🌱',
        levelLabel: 'Principiante',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Fundamentos de IA', lessons: ['que-es-ia', 'historia-ia', 'tipos-ia', 'ia-en-tu-vida'] },
            { id: 'mod-2', title: 'IA Generativa', lessons: ['que-es-IA-generativa', 'modelos-lenguaje', 'modelos-imagen', 'futuro-ia'] }
        ]
    },
    {
        id: 'chatgpt-basico',
        title: 'ChatGPT desde cero',
        description: 'Aprende a usar ChatGPT de forma efectiva. Desde crear tu cuenta hasta conversaciones avanzadas.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'principiante',
        levelIcon: '🌱',
        levelLabel: 'Principiante',
        totalLessons: 10,
        modules: [
            { id: 'mod-1', title: 'Primeros pasos', lessons: ['crear-cuenta', 'interfaz', 'primera-consulta', 'tipos-respuesta', 'limitaciones'] },
            { id: 'mod-2', title: 'Uso efectivo', lessons: ['prompts-basicos', 'contexto', 'formato-respuestas', 'plugins', 'ejercicios'] }
        ]
    },
    {
        id: 'prompts-101',
        title: 'Prompts 101: El Arte de Preguntar a la IA',
        description: 'Domina la habilidad más importante: escribir prompts que obtienen los resultados que necesitas.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'principiante',
        levelIcon: '🌱',
        levelLabel: 'Principiante',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Fundamentos de prompts', lessons: ['que-es-prompt', 'anatomia-prompt', 'errores-comunes', 'practica-basica'] },
            { id: 'mod-2', title: 'Técnicas esenciales', lessons: ['dar-contexto', 'definir-rol', 'formato-salida', 'iteracion'] }
        ]
    },
    {
        id: 'ia-imagenes-basico',
        title: 'Imágenes con IA: Primeros pasos',
        description: 'Crea tus primeras imágenes con DALL-E, Midjourney y herramientas gratuitas.',
        category: 'imagen',
        categoryIcon: '🎨',
        categoryLabel: 'Imagen',
        level: 'principiante',
        levelIcon: '🌱',
        levelLabel: 'Principiante',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Herramientas de imagen', lessons: ['dalle-intro', 'midjourney-intro', 'stable-diffusion', 'herramientas-gratis'] },
            { id: 'mod-2', title: 'Crear imágenes', lessons: ['primer-prompt-imagen', 'estilos-basicos', 'mejorar-resultados', 'proyecto-final'] }
        ]
    },
    {
        id: 'productividad-ia',
        title: 'Productividad con IA en el trabajo',
        description: 'Usa la IA para ser más productivo: emails, presentaciones, resúmenes y más.',
        category: 'auto',
        categoryIcon: '⚙️',
        categoryLabel: 'Automatización',
        level: 'principiante',
        levelIcon: '🌱',
        levelLabel: 'Principiante',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'IA en el trabajo', lessons: ['emails-ia', 'resumenes', 'presentaciones', 'brainstorming'] },
            { id: 'mod-2', title: 'Herramientas prácticas', lessons: ['notion-ai', 'canva-ai', 'google-workspace', 'automatizaciones'] }
        ]
    },

    // ─── INTERMEDIO (5 cursos) ───
    {
        id: 'prompts-avanzados',
        title: 'Prompts Avanzados',
        description: 'Técnicas avanzadas: chain-of-thought, few-shot, role-playing y más.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 10,
        modules: [
            { id: 'mod-1', title: 'Técnicas avanzadas', lessons: ['chain-of-thought', 'few-shot', 'zero-shot', 'role-playing', 'sistema-prompts'] },
            { id: 'mod-2', title: 'Casos prácticos', lessons: ['escritura-creativa', 'analisis-datos', 'programacion', 'investigacion', 'proyecto'] }
        ]
    },
    {
        id: 'midjourney-mastery',
        title: 'Midjourney: De intermedio a experto',
        description: 'Domina parámetros, estilos, composición y técnicas avanzadas de Midjourney.',
        category: 'imagen',
        categoryIcon: '🎨',
        categoryLabel: 'Imagen',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 10,
        modules: [
            { id: 'mod-1', title: 'Parámetros y control', lessons: ['parametros-v6', 'aspect-ratio', 'stylize', 'chaos-weird', 'seed'] },
            { id: 'mod-2', title: 'Técnicas avanzadas', lessons: ['estilos-artisticos', 'composicion', 'iluminacion', 'consistencia', 'portfolio'] }
        ]
    },
    {
        id: 'audio-ia',
        title: 'Audio e IA: Música, voz y sonido',
        description: 'Crea música con Suno, clona voces con ElevenLabs y transcribe con Whisper.',
        category: 'audio',
        categoryIcon: '🎵',
        categoryLabel: 'Audio',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Generación de audio', lessons: ['suno-musica', 'elevenlabs-voz', 'soundraw', 'efectos-sonido'] },
            { id: 'mod-2', title: 'Aplicaciones prácticas', lessons: ['podcast-ia', 'whisper-transcripcion', 'doblaje', 'proyecto-audio'] }
        ]
    },
    {
        id: 'video-ia',
        title: 'Video con IA: Creación y edición',
        description: 'Genera y edita videos con Runway, Pika, HeyGen y otras herramientas de IA.',
        category: 'video',
        categoryIcon: '🎬',
        categoryLabel: 'Video',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Generación de video', lessons: ['runway-gen3', 'pika-labs', 'heygen-avatares', 'text-to-video'] },
            { id: 'mod-2', title: 'Edición y producción', lessons: ['edicion-ia', 'subtitulos-auto', 'shorts-reels', 'proyecto-video'] }
        ]
    },
    {
        id: 'automatizacion-ia',
        title: 'Automatización con IA: Make y Zapier',
        description: 'Crea flujos de trabajo automatizados conectando herramientas de IA.',
        category: 'auto',
        categoryIcon: '⚙️',
        categoryLabel: 'Automatización',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 10,
        modules: [
            { id: 'mod-1', title: 'Fundamentos de automatización', lessons: ['que-es-automatizacion', 'make-intro', 'zapier-intro', 'n8n-intro', 'elegir-herramienta'] },
            { id: 'mod-2', title: 'Flujos prácticos', lessons: ['email-auto', 'social-media', 'generacion-contenido', 'datos-sheets', 'proyecto-flow'] }
        ]
    },

    // ─── AVANZADO (5 cursos) ───
    {
        id: 'agentes-ia',
        title: 'Agentes de IA y GPTs personalizados',
        description: 'Crea tus propios asistentes de IA: GPTs, agentes autónomos y chatbots.',
        category: 'agentes',
        categoryIcon: '🤖',
        categoryLabel: 'Agentes IA',
        level: 'avanzado',
        levelIcon: '🚀',
        levelLabel: 'Avanzado',
        totalLessons: 10,
        modules: [
            { id: 'mod-1', title: 'GPTs Personalizados', lessons: ['crear-gpt', 'instrucciones', 'knowledge-base', 'actions-api', 'publicar-gpt'] },
            { id: 'mod-2', title: 'Agentes autónomos', lessons: ['que-son-agentes', 'crew-ai', 'autogen', 'langchain-basico', 'proyecto-agente'] }
        ]
    },
    {
        id: 'ia-codigo',
        title: 'IA para programadores (sin programar)',
        description: 'Usa GitHub Copilot, Cursor y otras IAs de código sin ser programador.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'avanzado',
        levelIcon: '🚀',
        levelLabel: 'Avanzado',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Herramientas de código', lessons: ['copilot-intro', 'cursor-ide', 'replit-ia', 'v0-dev'] },
            { id: 'mod-2', title: 'Crear sin programar', lessons: ['web-con-ia', 'app-con-ia', 'chrome-extension', 'deploy'] }
        ]
    },
    {
        id: 'multimodal-ia',
        title: 'IA Multimodal: Texto + Imagen + Audio + Video',
        description: 'Combina múltiples modalidades de IA en proyectos complejos.',
        category: 'auto',
        categoryIcon: '⚙️',
        categoryLabel: 'Automatización',
        level: 'avanzado',
        levelIcon: '🚀',
        levelLabel: 'Avanzado',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Fundamentos multimodal', lessons: ['que-es-multimodal', 'gpt-4-vision', 'gemini-multimodal', 'claude-docs'] },
            { id: 'mod-2', title: 'Proyectos combinados', lessons: ['blog-completo', 'presentacion-ia', 'video-marketing', 'portfolio'] }
        ]
    },
    {
        id: 'negocio-ia',
        title: 'Monetizar con IA: Crea tu negocio',
        description: 'Estrategias reales para ganar dinero usando herramientas de IA.',
        category: 'auto',
        categoryIcon: '⚙️',
        categoryLabel: 'Automatización',
        level: 'avanzado',
        levelIcon: '🚀',
        levelLabel: 'Avanzado',
        totalLessons: 10,
        modules: [
            { id: 'mod-1', title: 'Modelos de negocio', lessons: ['freelance-ia', 'agencia-ia', 'contenido-ia', 'saas-ia', 'consultoria'] },
            { id: 'mod-2', title: 'Ejecución', lessons: ['primer-cliente', 'portfolio', 'pricing', 'escalar', 'caso-estudio'] }
        ]
    },
    {
        id: 'etica-ia',
        title: 'Ética y futuro de la IA',
        description: 'Comprende los dilemas éticos, sesgos, regulaciones y el futuro de la IA.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'avanzado',
        levelIcon: '🚀',
        levelLabel: 'Avanzado',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Ética e impacto', lessons: ['sesgos-ia', 'privacidad', 'derechos-autor', 'deepfakes'] },
            { id: 'mod-2', title: 'Futuro', lessons: ['regulaciones', 'agi', 'trabajo-futuro', 'prepararse'] }
        ]
    },

    // ─── POR PROFESIÓN (10 cursos) ───
    {
        id: 'ia-marketing',
        title: 'IA para Marketing Digital',
        description: 'Copywriting, ads, SEO, social media y estrategia con IA.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 10,
        modules: [
            { id: 'mod-1', title: 'Contenido y copy', lessons: ['copywriting-ia', 'blogs-seo', 'email-marketing', 'social-posts', 'ads-copy'] },
            { id: 'mod-2', title: 'Estrategia', lessons: ['seo-ia', 'analytics-ia', 'competencia', 'calendario', 'campana-completa'] }
        ]
    },
    {
        id: 'ia-diseno',
        title: 'IA para Diseñadores',
        description: 'Potencia tu flujo de diseño con IA: logos, mockups, UI y más.',
        category: 'imagen',
        categoryIcon: '🎨',
        categoryLabel: 'Imagen',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Diseño con IA', lessons: ['logos-ia', 'branding', 'mockups', 'ui-design'] },
            { id: 'mod-2', title: 'Flujo de trabajo', lessons: ['figma-plugins', 'canva-avanzado', 'photoshop-ia', 'portfolio-ia'] }
        ]
    },
    {
        id: 'ia-educacion',
        title: 'IA para Educadores',
        description: 'Crea material didáctico, evalúa y personaliza el aprendizaje con IA.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Contenido educativo', lessons: ['planes-clase', 'examenes-ia', 'presentaciones-edu', 'material-didactico'] },
            { id: 'mod-2', title: 'Innovación educativa', lessons: ['tutoria-ia', 'retroalimentacion', 'accesibilidad', 'etica-educativa'] }
        ]
    },
    {
        id: 'ia-escritores',
        title: 'IA para Escritores y Creadores de Contenido',
        description: 'Escritura creativa, guiones, blogs y storytelling asistido por IA.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 10,
        modules: [
            { id: 'mod-1', title: 'Escritura con IA', lessons: ['superar-bloqueo', 'personajes', 'dialogos', 'worldbuilding', 'estilos'] },
            { id: 'mod-2', title: 'Publicación', lessons: ['blogs-monetizar', 'newsletter', 'ebooks', 'ghostwriting', 'isbn-publicar'] }
        ]
    },
    {
        id: 'ia-emprendedores',
        title: 'IA para Emprendedores',
        description: 'Valida ideas, crea MVPs y escala tu negocio con herramientas de IA.',
        category: 'auto',
        categoryIcon: '⚙️',
        categoryLabel: 'Automatización',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 10,
        modules: [
            { id: 'mod-1', title: 'Ideación y validación', lessons: ['generar-ideas', 'validar-mercado', 'modelo-negocio', 'nombre-marca', 'landing-page'] },
            { id: 'mod-2', title: 'Ejecución', lessons: ['mvp-ia', 'pitch-deck', 'legal-ia', 'pricing-ia', 'growth-hacking'] }
        ]
    },
    {
        id: 'ia-rrhh',
        title: 'IA para Recursos Humanos',
        description: 'Reclutamiento, evaluación, onboarding y gestión de talento con IA.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Reclutamiento IA', lessons: ['job-descriptions', 'screening-cv', 'entrevistas', 'evaluaciones'] },
            { id: 'mod-2', title: 'Gestión de personas', lessons: ['onboarding', 'desarrollo', 'comunicacion-interna', 'analytics-rrhh'] }
        ]
    },
    {
        id: 'ia-ventas',
        title: 'IA para Ventas',
        description: 'Prospección, seguimiento, propuestas y cierre de ventas con IA.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Prospección con IA', lessons: ['encontrar-leads', 'investigar-prospectos', 'emails-frios', 'linkedin-ia'] },
            { id: 'mod-2', title: 'Cierre y seguimiento', lessons: ['propuestas-ia', 'objeciones', 'crm-ia', 'analytics-ventas'] }
        ]
    },
    {
        id: 'ia-abogados',
        title: 'IA para Profesionales del Derecho',
        description: 'Investigación legal, contratos, documentos jurídicos y más con IA.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Investigación legal', lessons: ['busqueda-jurisprudencia', 'analisis-leyes', 'comparar-contratos', 'due-diligence'] },
            { id: 'mod-2', title: 'Documentos legales', lessons: ['redactar-contratos', 'demandas', 'compliance', 'etica-legal-ia'] }
        ]
    },
    {
        id: 'ia-salud',
        title: 'IA para Profesionales de Salud',
        description: 'Documentación clínica, investigación y comunicación con pacientes asistida por IA.',
        category: 'texto',
        categoryIcon: '✍️',
        categoryLabel: 'Texto',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'IA en salud', lessons: ['documentacion-clinica', 'investigacion-medica', 'comunicacion-pacientes', 'educacion-salud'] },
            { id: 'mod-2', title: 'Herramientas específicas', lessons: ['transcripcion-consultas', 'imagenes-medicas', 'protocolos', 'etica-salud-ia'] }
        ]
    },
    {
        id: 'ia-freelancers',
        title: 'IA para Freelancers',
        description: 'Multiplica tu productividad y servicios como freelancer usando IA.',
        category: 'auto',
        categoryIcon: '⚙️',
        categoryLabel: 'Automatización',
        level: 'intermedio',
        levelIcon: '⚡',
        levelLabel: 'Intermedio',
        totalLessons: 8,
        modules: [
            { id: 'mod-1', title: 'Servicios con IA', lessons: ['servicios-ofrecer', 'propuestas-ia', 'portfolio-ia', 'precios-ia'] },
            { id: 'mod-2', title: 'Escalar', lessons: ['automatizar-tareas', 'multiples-clientes', 'contenido-marca', 'de-freelance-a-agencia'] }
        ]
    }
];

/** Buscar un curso por ID */
export function getCourseById(id) {
    return COURSES.find(c => c.id === id) || null;
}
