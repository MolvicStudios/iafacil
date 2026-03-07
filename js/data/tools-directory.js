/* ═══════════════════════════════════════════════════════════
   AI TOOLS DATA - IAFACIL.HELP
   Directorio de herramientas de IA para el explorador
   ═══════════════════════════════════════════════════════════ */

export const AI_TOOLS = [
    // ─── Texto ───
    { id: 'chatgpt',     name: 'ChatGPT',         category: 'texto',  icon: '💬', pricing: 'Freemium', url: 'https://chat.openai.com', description: 'El chatbot de IA más popular. Conversaciones, escritura, análisis, código y más.' },
    { id: 'claude',      name: 'Claude',           category: 'texto',  icon: '🟣', pricing: 'Freemium', url: 'https://claude.ai', description: 'IA de Anthropic. Excelente para análisis largos, escritura y razonamiento.' },
    { id: 'gemini',      name: 'Gemini',           category: 'texto',  icon: '🔵', pricing: 'Gratis', url: 'https://gemini.google.com', description: 'IA de Google. Integrada con Search, Gmail y multimodal.' },
    { id: 'perplexity',  name: 'Perplexity',       category: 'texto',  icon: '🔍', pricing: 'Freemium', url: 'https://perplexity.ai', description: 'Motor de búsqueda con IA. Respuestas con fuentes verificables.' },
    { id: 'copilot',     name: 'Microsoft Copilot',category: 'texto',  icon: '🪟', pricing: 'Gratis', url: 'https://copilot.microsoft.com', description: 'IA de Microsoft integrada con Bing, Office y Windows.' },
    { id: 'mistral',     name: 'Mistral (Le Chat)',category: 'texto',  icon: '🇫🇷', pricing: 'Gratis', url: 'https://chat.mistral.ai', description: 'IA francesa open-source. Rápida y competente.' },

    // ─── Imagen ───
    { id: 'midjourney',  name: 'Midjourney',       category: 'imagen', icon: '🎨', pricing: 'Pago', url: 'https://midjourney.com', description: 'El estándar para generación de imágenes artísticas. Calidad excepcional.' },
    { id: 'dalle',       name: 'DALL-E 3',         category: 'imagen', icon: '🖼️', pricing: 'Freemium', url: 'https://chat.openai.com', description: 'Generador de imágenes de OpenAI. Integrado en ChatGPT.' },
    { id: 'stable-diff', name: 'Stable Diffusion', category: 'imagen', icon: '🎭', pricing: 'Gratis', url: 'https://stability.ai', description: 'Generador de imágenes open-source. Personalizable y gratis.' },
    { id: 'leonardo',    name: 'Leonardo AI',      category: 'imagen', icon: '🎪', pricing: 'Freemium', url: 'https://leonardo.ai', description: 'Generación de imágenes con múltiples modelos y control avanzado.' },
    { id: 'ideogram',    name: 'Ideogram',         category: 'imagen', icon: '✏️', pricing: 'Freemium', url: 'https://ideogram.ai', description: 'Excelente generando texto en imágenes y tipografía.' },
    { id: 'canva-ai',    name: 'Canva Magic Studio',category: 'imagen', icon: '🎯', pricing: 'Freemium', url: 'https://canva.com', description: 'Suite de diseño con IA: generación, edición, presentaciones.' },

    // ─── Audio ───
    { id: 'suno',        name: 'Suno',             category: 'audio',  icon: '🎵', pricing: 'Freemium', url: 'https://suno.ai', description: 'Genera canciones completas con voz y instrumentación desde texto.' },
    { id: 'elevenlabs',  name: 'ElevenLabs',       category: 'audio',  icon: '🎤', pricing: 'Freemium', url: 'https://elevenlabs.io', description: 'Clonación de voz y text-to-speech ultrarrealista.' },
    { id: 'whisper',     name: 'Whisper (OpenAI)', category: 'audio',  icon: '📝', pricing: 'Gratis', url: 'https://github.com/openai/whisper', description: 'Transcripción de audio a texto de alta calidad. Open-source.' },
    { id: 'udio',        name: 'Udio',             category: 'audio',  icon: '🎶', pricing: 'Freemium', url: 'https://udio.com', description: 'Generación de música con IA. Competidor de Suno.' },

    // ─── Video ───
    { id: 'runway',      name: 'Runway',           category: 'video',  icon: '🎬', pricing: 'Freemium', url: 'https://runway.ml', description: 'Generación y edición de video con IA. Gen-3 Alpha es impresionante.' },
    { id: 'pika',        name: 'Pika',             category: 'video',  icon: '🎥', pricing: 'Freemium', url: 'https://pika.art', description: 'Generación de video accesible. Text-to-video e image-to-video.' },
    { id: 'heygen',      name: 'HeyGen',           category: 'video',  icon: '🧑‍💼', pricing: 'Freemium', url: 'https://heygen.com', description: 'Avatares de video hiperrealistas para presentaciones y marketing.' },
    { id: 'invideo',     name: 'InVideo AI',       category: 'video',  icon: '📹', pricing: 'Freemium', url: 'https://invideo.io', description: 'Crea videos completos desde un prompt. Edición con IA.' },

    // ─── Automatización ───
    { id: 'make',        name: 'Make (Integromat)', category: 'auto',  icon: '⚙️', pricing: 'Freemium', url: 'https://make.com', description: 'Plataforma visual para crear automatizaciones conectando apps.' },
    { id: 'zapier',      name: 'Zapier',           category: 'auto',   icon: '⚡', pricing: 'Freemium', url: 'https://zapier.com', description: 'Conecta +5000 apps con automatizaciones simples (Zaps).' },
    { id: 'n8n',         name: 'n8n',              category: 'auto',   icon: '🔄', pricing: 'Gratis', url: 'https://n8n.io', description: 'Automatización open-source. Más técnico pero muy poderoso.' },

    // ─── Agentes ───
    { id: 'custom-gpts', name: 'Custom GPTs',      category: 'agentes', icon: '🤖', pricing: 'Pago', url: 'https://chat.openai.com/gpts', description: 'Crea asistentes personalizados dentro de ChatGPT Plus.' },
    { id: 'poe',         name: 'Poe',              category: 'agentes', icon: '🏛️', pricing: 'Freemium', url: 'https://poe.com', description: 'Accede a múltiples IAs y crea bots personalizados.' },
    { id: 'character-ai', name: 'Character.ai',    category: 'agentes', icon: '🎭', pricing: 'Freemium', url: 'https://character.ai', description: 'Chatbots con personalidades. Conversaciones roleplay.' }
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
