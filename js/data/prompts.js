/* ═══════════════════════════════════════════════════════════
   PROMPTS LIBRARY DATA - IAFACIL.HELP
   Biblioteca de prompts organizados por categoría
   ═══════════════════════════════════════════════════════════ */

export const PROMPT_CATEGORIES = [
    { id: 'marketing',      label: 'Marketing',          icon: '📢' },
    { id: 'escritura',      label: 'Escritura',          icon: '✍️' },
    { id: 'educacion',      label: 'Educación',          icon: '🎓' },
    { id: 'negocios',       label: 'Negocios',           icon: '💼' },
    { id: 'programacion',   label: 'Programación',       icon: '💻' },
    { id: 'diseno',         label: 'Diseño',             icon: '🎨' },
    { id: 'productividad',  label: 'Productividad',      icon: '⚡' },
    { id: 'redes-sociales', label: 'Redes Sociales',     icon: '📱' },
    { id: 'ventas',         label: 'Ventas',             icon: '🤝' },
    { id: 'creatividad',    label: 'Creatividad',        icon: '💡' }
];

export const PROMPTS_LIBRARY = [
    // ─── Marketing ───
    { id: 1,  category: 'marketing', title: 'Copy para landing page', prompt: 'Actúa como un copywriter experto. Crea el copy para una landing page de [producto/servicio]. Incluye: headline principal, subheadline, 3 beneficios clave, CTA principal y prueba social. Tono: [profesional/casual/urgente]. Audiencia: [descripción].', difficulty: 'intermedio' },
    { id: 2,  category: 'marketing', title: 'Estrategia de contenido mensual', prompt: 'Crea un calendario de contenido para [marca/negocio] para el próximo mes. Incluye: 4 publicaciones por semana, mezcla de formatos (post, reels, stories, carousel), hashtags relevantes y el mejor horario según la audiencia de [país/región].', difficulty: 'avanzado' },
    { id: 3,  category: 'marketing', title: 'Email de bienvenida', prompt: 'Escribe un email de bienvenida para [tipo de negocio]. Debe incluir: saludo personalizado, qué esperar, primer beneficio o regalo, CTA claro. Tono cálido y motivador. Máximo 200 palabras.', difficulty: 'principiante' },
    { id: 4,  category: 'marketing', title: 'Análisis de competencia', prompt: 'Analiza las fortalezas y debilidades de [competidor] en el nicho de [industria]. Compara con [mi marca] en: posicionamiento, propuesta de valor, precios, marketing y experiencia de usuario. Sugiere 5 oportunidades de diferenciación.', difficulty: 'avanzado' },
    { id: 5,  category: 'marketing', title: 'Google Ads copy', prompt: 'Crea 5 variaciones de anuncios para Google Ads sobre [producto/servicio]. Cada uno debe tener: título (30 chars), descripción (90 chars), extensiones sugeridas. Enfócate en el beneficio principal y urgencia.', difficulty: 'intermedio' },

    // ─── Escritura ───
    { id: 6,  category: 'escritura', title: 'Artículo de blog SEO', prompt: 'Escribe un artículo de blog optimizado para SEO sobre "[tema]". Keyword principal: "[keyword]". Incluye: H1, al menos 5 H2, introducción enganchadora, desarrollo de 1500+ palabras, conclusión con CTA, y meta description (155 chars).', difficulty: 'intermedio' },
    { id: 7,  category: 'escritura', title: 'Resumen ejecutivo', prompt: 'Actúa como consultor de negocios. Resume el siguiente texto en un resumen ejecutivo de 250 palabras máximo. Incluye: contexto, hallazgos clave, recomendaciones y próximos pasos. Texto: [pegar texto].', difficulty: 'principiante' },
    { id: 8,  category: 'escritura', title: 'Guión para video YouTube', prompt: 'Crea un guión para un video de YouTube de 10 minutos sobre "[tema]". Estructura: hook (primeros 30 seg), introducción, 3-5 puntos principales con transiciones, CTA para suscribirse y cierre memorable. Tono: educativo pero entretenido.', difficulty: 'intermedio' },
    { id: 9,  category: 'escritura', title: 'Newsletter semanal', prompt: 'Escribe una newsletter sobre [tema de la semana] para una audiencia de [tipo]. Estructura: asunto atractivo, saludo, 1 historia/insight principal, 3 links/recursos útiles, tip de la semana y CTA. Tono conversacional. 400-500 palabras.', difficulty: 'principiante' },
    { id: 10, category: 'escritura', title: 'Historia corta creativa', prompt: 'Escribe una historia corta de 500 palabras en el género [fantasía/ciencia ficción/misterio/romance]. Protagonista: [descripción]. Conflicto principal: [describe]. Debe tener un giro sorpresa al final. Estilo narrativo: [primera/tercera persona].', difficulty: 'intermedio' },

    // ─── Educación ───
    { id: 11, category: 'educacion', title: 'Plan de clase', prompt: 'Crea un plan de clase de 50 minutos sobre [tema] para estudiantes de [nivel/edad]. Incluye: objetivo de aprendizaje, actividad de apertura (5 min), desarrollo (30 min), actividad práctica (10 min) y cierre con evaluación (5 min). Materiales necesarios.', difficulty: 'principiante' },
    { id: 12, category: 'educacion', title: 'Quiz de evaluación', prompt: 'Genera un quiz de 10 preguntas sobre [tema] para nivel [básico/intermedio/avanzado]. Incluye: 5 opción múltiple, 3 verdadero/falso, 2 respuesta corta. Proporciona las respuestas correctas y una breve explicación de cada una.', difficulty: 'principiante' },
    { id: 13, category: 'educacion', title: 'Explicar concepto complejo', prompt: 'Explica [concepto complejo] como si le hablaras a un niño de 10 años. Usa analogías cotidianas, ejemplos visuales y evita jerga técnica. Luego proporciona la explicación técnica real para referencia del educador.', difficulty: 'principiante' },

    // ─── Negocios ───
    { id: 14, category: 'negocios', title: 'Pitch deck estructura', prompt: 'Crea la estructura y contenido clave para un pitch deck de [tipo de startup/negocio]. Incluye las 10 slides esenciales: problema, solución, mercado, modelo de negocio, tracción, equipo, competencia, finanzas, ask y visión. Para cada slide, escribe los bullet points principales.', difficulty: 'avanzado' },
    { id: 15, category: 'negocios', title: 'Análisis FODA', prompt: 'Realiza un análisis FODA completo para [empresa/proyecto/idea]. Identifica al menos 5 elementos en cada cuadrante: Fortalezas, Oportunidades, Debilidades y Amenazas. Luego sugiere 3 estrategias basadas en el cruce FO, FA, DO y DA.', difficulty: 'intermedio' },

    // ─── Productividad ───
    { id: 16, category: 'productividad', title: 'Resumen de reunión', prompt: 'Dado el siguiente contexto de una reunión, genera un acta profesional con: asistentes, temas tratados, decisiones tomadas, action items con responsable y fecha límite, y próxima reunión. Contexto: [pegar notas].', difficulty: 'principiante' },
    { id: 17, category: 'productividad', title: 'Plantilla de email profesional', prompt: 'Escribe un email profesional para [situación: solicitar reunión/seguimiento/propuesta/reclamación]. Destinatario: [cargo/relación]. Incluye: asunto efectivo, saludo apropiado, cuerpo conciso (3-4 párrafos), CTA claro y cierre profesional.', difficulty: 'principiante' },

    // ─── Diseño ───
    { id: 18, category: 'diseno', title: 'Prompt para Midjourney', prompt: '[descripción de la imagen deseada], [estilo artístico: fotorrealista/ilustración/3D/acuarela], [iluminación: natural/dorada/dramática/neón], [composición: primer plano/panorámica/cenital], [paleta de colores] --ar 16:9 --v 6 --style raw', difficulty: 'intermedio' },
    { id: 19, category: 'diseno', title: 'Paleta de colores', prompt: 'Genera una paleta de 5 colores (con valores HEX) para [tipo de proyecto: app, web, marca]. El estilo debe ser [moderno/elegante/juguetón/corporativo]. Incluye: color primario, secundario, acento, fondo y texto. Justifica cada elección.', difficulty: 'principiante' },

    // ─── Redes Sociales ───
    { id: 20, category: 'redes-sociales', title: 'Caption para Instagram', prompt: 'Escribe 3 opciones de caption para un post de Instagram sobre [tema]. Incluye: hook en primera línea, cuerpo con valor, CTA, y 15-20 hashtags relevantes. Tono: [inspiracional/educativo/divertido]. Máximo 250 palabras.', difficulty: 'principiante' },
    { id: 21, category: 'redes-sociales', title: 'Hilo de Twitter/X', prompt: 'Crea un hilo de 10 tweets sobre [tema]. Tweet 1: hook potente. Tweets 2-9: desarrollar un insight por tweet con dato o ejemplo. Tweet 10: resumen + CTA. Usa emojis estratégicamente. Cada tweet ≤ 280 caracteres.', difficulty: 'intermedio' },

    // ─── Ventas ───
    { id: 22, category: 'ventas', title: 'Email frío de ventas', prompt: 'Escribe un email frío de ventas para ofrecer [producto/servicio] a [perfil de cliente ideal]. Método AIDA: Atención (asunto), Interés (dolor del cliente), Deseo (beneficio), Acción (CTA reunión). Máximo 150 palabras. 3 variaciones.', difficulty: 'intermedio' },
    { id: 23, category: 'ventas', title: 'Manejo de objeciones', prompt: 'Dame 10 respuestas profesionales para las objeciones más comunes en ventas de [tipo de producto/servicio]. Objeciones a cubrir: precio alto, no es el momento, necesito consultarlo, ya tengo proveedor, no lo necesito. Cada respuesta debe validar y redirigir.', difficulty: 'avanzado' },

    // ─── Creatividad ───
    { id: 24, category: 'creatividad', title: 'Brainstorming de nombres', prompt: 'Genera 20 nombres creativos para [tipo: marca/producto/app/canal/podcast] del sector [industria]. Criterios: fácil de pronunciar, memorable, dominio .com disponible idealmente, funciona en español e inglés. Agrupa por estilo: descriptivo, abstracto, compuesto.', difficulty: 'principiante' },
    { id: 25, category: 'creatividad', title: 'Generar ideas de contenido', prompt: 'Dame 30 ideas de contenido para [nicho/tema] organizadas en: 10 educativas, 10 de entretenimiento y 10 de conversión. Cada idea debe incluir: título, formato sugerido (post, video, carousel, reel) y una línea de descripción.', difficulty: 'intermedio' }
];

export function getPromptsByCategory(categoryId) {
    return PROMPTS_LIBRARY.filter(p => p.category === categoryId);
}
