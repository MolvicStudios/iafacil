/* ═══════════════════════════════════════════════════════════
   AI TOOLS DATA - IAFACIL.HELP
   Directorio de herramientas de IA para el explorador
   Actualizado: marzo 2026
   ═══════════════════════════════════════════════════════════ */

export const AI_TOOLS = [
    // ─── Texto ───
    { id: 'chatgpt',     name: 'ChatGPT',              category: 'texto',  icon: '💬', pricing: 'Freemium', url: 'https://chat.openai.com',  description: 'El chatbot de IA más popular. Incluye GPT-4o para uso general y o3 para razonamiento avanzado.' },
    { id: 'claude',      name: 'Claude 3.7 Sonnet',    category: 'texto',  icon: '🟣', pricing: 'Freemium', url: 'https://claude.ai',         description: 'IA de Anthropic con razonamiento extendido. Líder en escritura, análisis y documentos largos (200K contexto).' },
    { id: 'gemini',      name: 'Gemini 2.5 Pro',       category: 'texto',  icon: '🔵', pricing: 'Freemium', url: 'https://gemini.google.com', description: 'IA de Google con 1M de tokens de contexto. Integrada con Search, Gmail, Docs y multimodal nativo.' },
    { id: 'deepseek',    name: 'DeepSeek R1',          category: 'texto',  icon: '🐋', pricing: 'Gratis',   url: 'https://chat.deepseek.com', description: 'IA china open-source con razonamiento paso a paso. Rendimiento comparable a GPT-4o a coste casi cero.' },
    { id: 'grok',        name: 'Grok 3 (xAI)',         category: 'texto',  icon: '✕',  pricing: 'Freemium', url: 'https://grok.com',          description: 'IA de xAI (Elon Musk) integrada con X. Acceso a datos en tiempo real y modo de razonamiento profundo.' },
    { id: 'perplexity',  name: 'Perplexity',           category: 'texto',  icon: '🔍', pricing: 'Freemium', url: 'https://perplexity.ai',     description: 'Motor de búsqueda con IA. Respuestas verificadas con fuentes citadas. Ideal para investigaciones.' },
    { id: 'copilot',     name: 'Microsoft Copilot',    category: 'texto',  icon: '🪟', pricing: 'Gratis',   url: 'https://copilot.microsoft.com', description: 'IA de Microsoft con GPT-4o y o1 integrados. Incluye DALL-E 3 gratis e integración con Microsoft 365.' },
    { id: 'mistral',     name: 'Mistral Large 2',      category: 'texto',  icon: '🇫🇷', pricing: 'Gratis',  url: 'https://chat.mistral.ai',   description: 'IA europea open-source accesible desde Le Chat. Rápida, competente y con privacidad GDPR.' },
    { id: 'llama',       name: 'LLaMA 3.3 (Meta)',     category: 'texto',  icon: '🦙', pricing: 'Gratis',   url: 'https://meta.ai',           description: '100% open-source de Meta. Ejecutable en local, personalizable y sin censura. La base de muchos proyectos.' },

    // ─── Imagen ───
    { id: 'midjourney',  name: 'Midjourney v7',        category: 'imagen', icon: '🎨', pricing: 'Pago',     url: 'https://midjourney.com',    description: 'El referente para imágenes artísticas. Calidad fotorrealista + estética única. Ahora con web propia.' },
    { id: 'flux',        name: 'FLUX 1.1 Pro',         category: 'imagen', icon: '⚡', pricing: 'Freemium', url: 'https://flux1.ai',          description: 'Generador de Black Forest Labs. Supera a Stable Diffusion en calidad, anatómica y tipografía integrada.' },
    { id: 'dalle',       name: 'DALL-E 3',             category: 'imagen', icon: '🖼️', pricing: 'Freemium', url: 'https://chat.openai.com',   description: 'Generador de OpenAI integrado en ChatGPT y Copilot. Excelente siguiendo instrucciones en lenguaje natural.' },
    { id: 'ideogram',    name: 'Ideogram v2',          category: 'imagen', icon: '✏️', pricing: 'Freemium', url: 'https://ideogram.ai',       description: 'El mejor generando texto dentro de imágenes. Ideal para logos, carteles y diseño gráfico con IA.' },
    { id: 'stable-diff', name: 'Stable Diffusion 3.5', category: 'imagen', icon: '🎭', pricing: 'Gratis',   url: 'https://stability.ai',      description: 'Modelo open-source de Stability AI. La opción más personalizable; ejecutable en tu propio hardware.' },
    { id: 'firefly',     name: 'Adobe Firefly 3',      category: 'imagen', icon: '🔥', pricing: 'Freemium', url: 'https://firefly.adobe.com', description: 'Generación de imágenes entrenada con contenido licenciado. Integrada en Photoshop, Illustrator y Canva.' },
    { id: 'leonardo',    name: 'Leonardo AI',          category: 'imagen', icon: '🎪', pricing: 'Freemium', url: 'https://leonardo.ai',       description: 'Generación con múltiples modelos incluido FLUX. Herramientas de control avanzado y lienzo interactivo.' },
    { id: 'canva-ai',    name: 'Canva Magic Studio',   category: 'imagen', icon: '🎯', pricing: 'Freemium', url: 'https://canva.com',         description: 'Suite de diseño con IA: generación, edición con texto, presentaciones y Magic Expand.' },

    // ─── Audio ───
    { id: 'suno',        name: 'Suno v4',              category: 'audio',  icon: '🎵', pricing: 'Freemium', url: 'https://suno.ai',           description: 'Genera canciones completas con letra, voz e instrumentación profesional desde un simple texto.' },
    { id: 'elevenlabs',  name: 'ElevenLabs',           category: 'audio',  icon: '🎤', pricing: 'Freemium', url: 'https://elevenlabs.io',     description: 'Text-to-speech y clonación de voz ultrarrealista. Estándar en doblajes, podcasts y audiolibros con IA.' },
    { id: 'udio',        name: 'Udio',                 category: 'audio',  icon: '🎶', pricing: 'Freemium', url: 'https://udio.com',          description: 'Generación de música de alta fidelidad. Más control sobre género, instrumentos y estructura musical.' },
    { id: 'whisper',     name: 'Whisper (OpenAI)',      category: 'audio',  icon: '📝', pricing: 'Gratis',   url: 'https://github.com/openai/whisper', description: 'Transcripción de audio a texto con precisión multicidioma. Open-source y ejecutable en local.' },

    // ─── Video ───
    { id: 'sora',        name: 'Sora (OpenAI)',         category: 'video',  icon: '🌀', pricing: 'Freemium', url: 'https://sora.com',          description: 'Generador de video de OpenAI. Crea vídeos realistas de hasta 20 segundos con movimiento coherente.' },
    { id: 'kling',       name: 'Kling AI',              category: 'video',  icon: '🎞️', pricing: 'Freemium', url: 'https://klingai.com',       description: 'Modelo de Kuaishou. Uno de los mejores en movimientos fluidos y realismo físico. Muy popular en 2025-26.' },
    { id: 'veo',         name: 'Google Veo 2',          category: 'video',  icon: '📽️', pricing: 'Freemium', url: 'https://labs.google',       description: 'Generador de video de Google DeepMind. Calidad cinematográfica con control de cámara detallado.' },
    { id: 'runway',      name: 'Runway Gen-4',          category: 'video',  icon: '🎬', pricing: 'Freemium', url: 'https://runwayml.com',       description: 'Plataforma profesional de video con IA. Gen-4 ofrece consistencia de personajes y edición avanzada.' },
    { id: 'heygen',      name: 'HeyGen',                category: 'video',  icon: '🧑‍💼', pricing: 'Freemium', url: 'https://heygen.com',       description: 'Avatares de video hiperrealistas para marketing y formación. Traducción de video con lip-sync.' },
    { id: 'pika',        name: 'Pika 2.0',              category: 'video',  icon: '🎥', pricing: 'Freemium', url: 'https://pika.art',          description: 'Generación de video accesible con efectos especiales y pikaffects. Text-to-video e image-to-video.' },
    { id: 'invideo',     name: 'InVideo AI',            category: 'video',  icon: '📹', pricing: 'Freemium', url: 'https://invideo.io',        description: 'Crea vídeos completos con narrador, subtítulos y música desde un simple prompt de texto.' },

    // ─── Automatización ───
    { id: 'make',        name: 'Make',                  category: 'auto',   icon: '⚙️', pricing: 'Freemium', url: 'https://make.com',          description: 'Plataforma visual para crear automatizaciones complejas conectando +2000 apps con IA integrada.' },
    { id: 'zapier',      name: 'Zapier',                category: 'auto',   icon: '⚡', pricing: 'Freemium', url: 'https://zapier.com',         description: 'Conecta +7000 apps con Zaps. Ahora con IA para crear automatizaciones desde lenguaje natural.' },
    { id: 'n8n',         name: 'n8n',                   category: 'auto',   icon: '🔄', pricing: 'Gratis',   url: 'https://n8n.io',            description: 'Automatización open-source con nodos de IA (LLM, agentes). Self-hosteable o en la nube.' },

    // ─── Agentes ───
    { id: 'custom-gpts', name: 'Custom GPTs',           category: 'agentes', icon: '🤖', pricing: 'Pago',    url: 'https://chatgpt.com/gpts',  description: 'Crea asistentes personalizados con instrucciones, archivos y acciones dentro de ChatGPT.' },
    { id: 'cursor',      name: 'Cursor AI',             category: 'agentes', icon: '💻', pricing: 'Freemium', url: 'https://cursor.sh',        description: 'Editor de código con IA integrada. El copiloto de programadores: completa, refactoriza y depura código.' },
    { id: 'poe',         name: 'Poe',                   category: 'agentes', icon: '🏛️', pricing: 'Freemium', url: 'https://poe.com',          description: 'Accede a múltiples IAs (GPT-4o, Claude, Gemini) y crea bots personalizados desde un solo lugar.' },
    { id: 'character-ai', name: 'Character.ai',         category: 'agentes', icon: '🎭', pricing: 'Freemium', url: 'https://character.ai',     description: 'Chatbots con personalidades y memoria. Ideal para práctica de idiomas, roleplay y entretenimiento.' }
];

export function getToolsByCategory(category) {
    return AI_TOOLS.filter(t => t.category === category);
}

export function searchTools(query) {
    const q = query.toLowerCase();
    return AI_TOOLS.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
    );
}
