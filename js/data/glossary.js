/* ═══════════════════════════════════════════════════════════
   GLOSSARY DATA - IAFACIL.HELP
   Glosario de términos de IA en español
   ═══════════════════════════════════════════════════════════ */

export const GLOSSARY = [
    { term: 'Inteligencia Artificial (IA)', definition: 'Tecnología que permite a las máquinas realizar tareas que normalmente requieren inteligencia humana, como entender lenguaje, reconocer imágenes o tomar decisiones.', category: 'fundamentos' },
    { term: 'Machine Learning', definition: 'Subcampo de la IA donde los sistemas aprenden de datos sin ser programados explícitamente. Mejoran con la experiencia.', category: 'fundamentos' },
    { term: 'Deep Learning', definition: 'Tipo de machine learning que usa redes neuronales con muchas capas. Detrás de ChatGPT, DALL-E y la mayoría de IAs modernas.', category: 'fundamentos' },
    { term: 'LLM (Large Language Model)', definition: 'Modelo de lenguaje grande entrenado con enormes cantidades de texto. Ejemplos: GPT-4, Claude, Gemini, LLaMA.', category: 'modelos', relatedCourse: {id: 'intro-ia', name: '¿Qué es la Inteligencia Artificial?'} },
    { term: 'Prompt', definition: 'La instrucción o pregunta que le das a una IA para obtener una respuesta. La calidad del prompt determina la calidad de la respuesta.', category: 'prompts', relatedCourse: {id: 'prompts-101', name: 'Prompts 101: El Arte de Preguntar a la IA'}, relatedTool: {name: 'Constructor de Prompts', url: '/pages/herramientas/prompt-builder.html'} },
    { term: 'Prompt Engineering', definition: 'El arte y la ciencia de diseñar prompts efectivos para obtener los mejores resultados de una IA.', category: 'prompts', relatedCourse: {id: 'prompts-101', name: 'Prompts 101: El Arte de Preguntar a la IA'}, relatedTool: {name: 'Constructor de Prompts', url: '/pages/herramientas/prompt-builder.html'} },
    { term: 'Token', definition: 'La unidad mínima de texto que procesa un LLM. Una palabra puede ser 1-3 tokens. Determina el costo y los límites.', category: 'modelos' },
    { term: 'Fine-tuning', definition: 'Proceso de re-entrenar un modelo existente con datos específicos para adaptarlo a una tarea particular.', category: 'modelos' },
    { term: 'RAG (Retrieval-Augmented Generation)', definition: 'Técnica que combina búsqueda en documentos con generación de IA. Permite que la IA responda basándose en tus documentos.', category: 'modelos' },
    { term: 'Alucinación', definition: 'Cuando una IA genera información falsa o inventada que parece real. Es uno de los principales problemas de los LLMs.', category: 'conceptos', relatedTool: {name: 'Analizador de Prompts', url: '/pages/herramientas/analizador-prompts.html'} },
    { term: 'Temperatura', definition: 'Parámetro que controla la "creatividad" de la IA. Temperatura baja = respuestas predecibles. Temperatura alta = respuestas más creativas/aleatorias.', category: 'prompts' },
    { term: 'Few-shot Learning', definition: 'Técnica de prompt donde das pocos ejemplos a la IA para que entienda el patrón que quieres que siga.', category: 'prompts', relatedCourse: {id: 'prompts-101', name: 'Prompts 101: El Arte de Preguntar a la IA'}, relatedTool: {name: 'Analizador de Prompts', url: '/pages/herramientas/analizador-prompts.html'} },
    { term: 'Zero-shot', definition: 'Cuando la IA realiza una tarea sin recibir ejemplos previos, solo con la instrucción.', category: 'prompts', relatedTool: {name: 'Analizador de Prompts', url: '/pages/herramientas/analizador-prompts.html'} },
    { term: 'Chain-of-Thought', definition: 'Técnica de prompt que le pide a la IA que razone paso a paso antes de dar la respuesta final. Mejora la precisión.', category: 'prompts', relatedTool: {name: 'Analizador de Prompts', url: '/pages/herramientas/analizador-prompts.html'} },
    { term: 'API', definition: 'Interfaz que permite conectar y usar servicios de IA desde otras aplicaciones. Es como un puente entre programas.', category: 'tecnico', relatedTool: {name: 'Workflow Builder', url: '/pages/herramientas/workflow-builder.html'} },
    { term: 'GPT', definition: 'Generative Pre-trained Transformer. La arquitectura detrás de ChatGPT. Genera texto prediciendo la siguiente palabra.', category: 'modelos', relatedCourse: {id: 'chatgpt-basico', name: 'ChatGPT desde cero'} },
    { term: 'Difusión (Diffusion)', definition: 'Técnica detrás de generadores de imagen como Midjourney, DALL-E y Stable Diffusion. Genera imágenes a partir de ruido.', category: 'modelos', relatedCourse: {id: 'ia-imagenes-basico', name: 'Imágenes con IA: Primeros pasos'}, relatedTool: {name: 'Generador de Imágenes', url: '/pages/herramientas/generador-imagenes.html'} },
    { term: 'Embedding', definition: 'Representación numérica de texto/imágenes que permite a las máquinas entender similitudes y relaciones.', category: 'tecnico' },
    { term: 'Multimodal', definition: 'IA capaz de procesar múltiples tipos de información: texto, imagen, audio y video simultáneamente. Ejemplo: GPT-4V, Gemini.', category: 'modelos', relatedTool: {name: 'Comparador de IAs', url: '/pages/herramientas/comparador-ias.html'} },
    { term: 'Agente IA', definition: 'Sistema de IA que puede tomar decisiones y ejecutar acciones de forma autónoma para completar tareas complejas.', category: 'conceptos', relatedTool: {name: 'Workflow Builder', url: '/pages/herramientas/workflow-builder.html'} },
    { term: 'Context Window', definition: 'La cantidad máxima de texto (tokens) que un LLM puede procesar en una sola conversación. GPT-4: ~128K tokens.', category: 'modelos' },
    { term: 'Sesgo (Bias)', definition: 'Prejuicios presentes en los datos de entrenamiento que se reflejan en las respuestas de la IA. Un problema ético importante.', category: 'etica' },
    { term: 'Transfer Learning', definition: 'Técnica donde un modelo entrenado para una tarea se reutiliza para otra diferente. Base del éxito de los LLMs actuales.', category: 'tecnico' },
    { term: 'NLP (Natural Language Processing)', definition: 'Rama de la IA enfocada en que las máquinas entiendan, interpreten y generen lenguaje humano.', category: 'fundamentos' },
    { term: 'Computer Vision', definition: 'Rama de la IA que permite a las máquinas "ver" e interpretar imágenes y videos.', category: 'fundamentos' },
    { term: 'Generative AI', definition: 'Tipo de IA que puede crear contenido nuevo: texto, imágenes, música, código, video. La revolución actual.', category: 'fundamentos' },
    { term: 'Open Source', definition: 'Modelos de IA con código abierto que cualquiera puede usar y modificar. Ejemplos: LLaMA, Stable Diffusion, Mistral.', category: 'conceptos' },
    { term: 'System Prompt', definition: 'Instrucción inicial que define el comportamiento, personalidad y reglas de un asistente de IA.', category: 'prompts', relatedTool: {name: 'Biblioteca de Prompts', url: '/pages/herramientas/biblioteca-prompts.html'} },
    { term: 'Hallucination Mitigation', definition: 'Técnicas para reducir información falsa: pedir fuentes, usar RAG, verificar datos, chain-of-thought.', category: 'prompts' },
    { term: 'Workflow', definition: 'Flujo de trabajo automatizado que conecta varias herramientas de IA y acciones en secuencia.', category: 'herramientas', relatedTool: {name: 'Workflow Builder', url: '/pages/herramientas/workflow-builder.html'} }
];

export function searchGlossary(query) {
    const q = query.toLowerCase();
    return GLOSSARY.filter(item =>
        item.term.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q)
    );
}
