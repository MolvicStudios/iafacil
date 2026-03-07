/* ═══════════════════════════════════════════════════════════
   COURSE QUIZZES - IAFACIL.HELP
   Quizzes de evaluación para todos los cursos
   10 preguntas por curso con explicaciones
   ═══════════════════════════════════════════════════════════ */

export const COURSE_QUIZZES = {
    "intro-ia": {
        title: "Quiz: ¿Qué es la Inteligencia Artificial?",
        description: "Evalúa tus conocimientos del curso \"¿Qué es la Inteligencia Artificial?\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué es la Inteligencia Artificial en su definición más básica?",
                options: ["Un robot con forma humana","Sistemas que simulan capacidades cognitivas humanas","Un lenguaje de programación","Una red social avanzada"],
                correct: 1,
                explanation: "La IA son sistemas informáticos diseñados para realizar tareas que normalmente requieren inteligencia humana, como aprender, razonar y resolver problemas."
            },
            {
                id: 2,
                question: "¿Cuál fue uno de los primeros hitos de la IA en los años 50?",
                options: ["GPT-4","El test de Turing","DALL-E","TikTok"],
                correct: 1,
                explanation: "Alan Turing propuso en 1950 un test para evaluar si una máquina puede exhibir comportamiento inteligente indistinguible del humano."
            },
            {
                id: 3,
                question: "¿Qué tipo de IA usamos hoy en día en nuestro móvil?",
                options: ["IA general (AGI)","IA superinteligente","IA estrecha o especializada","IA cuántica"],
                correct: 2,
                explanation: "Actualmente toda la IA comercial es \"estrecha\" — diseñada para tareas específicas como reconocer voz, traducir o recomendar contenido."
            },
            {
                id: 4,
                question: "¿Qué es la IA Generativa?",
                options: ["IA que solo analiza datos","IA que crea contenido nuevo (texto, imágenes, audio)","IA que programa sola","Un tipo de base de datos"],
                correct: 1,
                explanation: "La IA generativa crea contenido original — texto, imágenes, música, video — a partir de los patrones aprendidos durante su entrenamiento."
            },
            {
                id: 5,
                question: "¿Qué es un modelo de lenguaje (LLM)?",
                options: ["Un diccionario digital","Una red neuronal entrenada para entender y generar texto","Un traductor automático","Un corrector ortográfico"],
                correct: 1,
                explanation: "Los LLMs son redes neuronales masivas entrenadas con enormes cantidades de texto que pueden generar, resumir y transformar lenguaje natural."
            },
            {
                id: 6,
                question: "¿Cuál de estas NO es una herramienta de IA generativa de imágenes?",
                options: ["DALL-E","Midjourney","Excel","Stable Diffusion"],
                correct: 2,
                explanation: "Excel es una hoja de cálculo. DALL-E, Midjourney y Stable Diffusion son modelos de IA que generan imágenes a partir de texto."
            },
            {
                id: 7,
                question: "¿Qué significa \"entrenar\" un modelo de IA?",
                options: ["Darle instrucciones en tiempo real","Exponerlo a grandes cantidades de datos para que aprenda patrones","Conectarlo a internet","Instalarlo en un servidor"],
                correct: 1,
                explanation: "El entrenamiento expone al modelo a millones de ejemplos para que aprenda patrones estadísticos que después usa para generar respuestas."
            },
            {
                id: 8,
                question: "¿Cómo impacta la IA en la vida cotidiana?",
                options: ["Solo afecta a programadores","Está en recomendaciones, asistentes de voz, navegación y redes sociales","Solo funciona en ordenadores de escritorio","No tiene impacto real todavía"],
                correct: 1,
                explanation: "La IA está integrada en apps de navegación, asistentes como Siri/Alexa, filtros de spam, recomendaciones de Netflix/Spotify y mucho más."
            },
            {
                id: 9,
                question: "¿Qué es un \"prompt\" en el contexto de la IA?",
                options: ["Un programa informático","La instrucción o pregunta que le das a la IA","Una base de datos","El resultado que genera la IA"],
                correct: 1,
                explanation: "Un prompt es el texto que escribes para comunicarte con la IA y pedirle que realice una tarea específica."
            },
            {
                id: 10,
                question: "¿Cuál es el principal riesgo de confiar ciegamente en la IA?",
                options: ["Que sea demasiado cara","Que genere información incorrecta (alucinaciones)","Que sea muy lenta","Que gaste mucha batería"],
                correct: 1,
                explanation: "Los modelos de IA pueden generar respuestas que suenan convincentes pero son incorrectas — esto se conoce como \"alucinaciones\"."
            }
        ]
    },
    "chatgpt-basico": {
        title: "Quiz: ChatGPT desde cero",
        description: "Evalúa tus conocimientos del curso \"ChatGPT desde cero\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué necesitas para empezar a usar ChatGPT?",
                options: ["Una licencia de software especial","Solo un navegador web y crear una cuenta gratuita","Conocimientos de programación","Un ordenador de gama alta"],
                correct: 1,
                explanation: "ChatGPT es accesible desde cualquier navegador. Solo necesitas registrarte con un email para usar la versión gratuita."
            },
            {
                id: 2,
                question: "¿Cuál es la diferencia principal entre GPT-3.5 y GPT-4?",
                options: ["GPT-4 es más rápido","GPT-4 es más preciso y puede analizar imágenes","Son exactamente iguales","GPT-3.5 es más inteligente"],
                correct: 1,
                explanation: "GPT-4 tiene mayor precisión, mejor razonamiento, puede procesar imágenes y comete menos errores que GPT-3.5."
            },
            {
                id: 3,
                question: "¿Qué es una \"conversación\" en ChatGPT?",
                options: ["Una llamada telefónica con IA","Un hilo de mensajes donde la IA mantiene el contexto","Un documento PDF","Un grupo de chat con otros usuarios"],
                correct: 1,
                explanation: "ChatGPT mantiene el contexto de toda la conversación, recordando lo que dijiste antes para dar respuestas coherentes."
            },
            {
                id: 4,
                question: "¿Cuál es una limitación importante de ChatGPT?",
                options: ["No puede escribir en español","Su conocimiento tiene una fecha de corte y puede inventar datos","Solo funciona con imágenes","No puede hacer resúmenes"],
                correct: 1,
                explanation: "ChatGPT tiene un límite temporal en sus datos de entrenamiento y puede generar información incorrecta con total confianza."
            },
            {
                id: 5,
                question: "¿Para qué sirven los plugins/GPTs de ChatGPT?",
                options: ["Para hackear otras páginas web","Para extender las capacidades con herramientas especializadas","Para cambiar el idioma del sistema","Para hacer la interfaz más bonita"],
                correct: 1,
                explanation: "Los plugins y GPTs personalizados añaden funcionalidades como navegar la web, analizar datos, generar imágenes o conectar con servicios externos."
            },
            {
                id: 6,
                question: "¿Qué pasa si le pides a ChatGPT algo que no sabe?",
                options: ["Se apaga automáticamente","Puede inventar una respuesta que parece correcta","Siempre dice \"no sé\"","Busca la respuesta en Google"],
                correct: 1,
                explanation: "ChatGPT puede \"alucinar\" — generar respuestas plausibles pero incorrectas. Siempre verifica información crítica."
            },
            {
                id: 7,
                question: "¿Cuál es un buen prompt básico para ChatGPT?",
                options: ["Hola","Dime cosas","Actúa como un experto en marketing. Escribe 3 ideas de posts para Instagram sobre cocina saludable","Dame algo"],
                correct: 2,
                explanation: "Un buen prompt incluye contexto (rol), tarea clara (qué hacer), y detalles específicos (tema, formato, cantidad)."
            },
            {
                id: 8,
                question: "¿Qué significa \"iterar\" un prompt?",
                options: ["Borrarlo y empezar de cero","Refinarlo progresivamente para mejorar los resultados","Copiarlo en otro chat","Traducirlo a otro idioma"],
                correct: 1,
                explanation: "Iterar significa ajustar y mejorar tu prompt basándote en las respuestas que recibes hasta obtener el resultado deseado."
            },
            {
                id: 9,
                question: "¿Para qué sirven los \"Custom Instructions\" de ChatGPT?",
                options: ["Para cambiar el color de la interfaz","Para definir contexto personal que se aplica a todas las conversaciones","Para bloquear usuarios","Para acelerar las respuestas"],
                correct: 1,
                explanation: "Las instrucciones personalizadas le dicen a ChatGPT quién eres, qué haces y cómo prefieres las respuestas, aplicándose a todos tus chats."
            },
            {
                id: 10,
                question: "¿Qué deberías hacer SIEMPRE con información importante de ChatGPT?",
                options: ["Publicarla inmediatamente","Verificarla con fuentes externas confiables","Traducirla a inglés","Compartirla en redes sociales"],
                correct: 1,
                explanation: "Siempre verifica datos importantes, estadísticas, fechas y hechos en fuentes confiables. ChatGPT es una herramienta de asistencia, no una fuente de verdad."
            }
        ]
    },
    "prompts-101": {
        title: "Quiz: Prompts 101: El Arte de Preguntar a la IA",
        description: "Evalúa tus conocimientos del curso \"Prompts 101: El Arte de Preguntar a la IA\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué es un prompt?",
                options: ["Un tipo de inteligencia artificial","Una instrucción o texto que le das a la IA para obtener un resultado","Un lenguaje de programación","Un plugin de ChatGPT"],
                correct: 1,
                explanation: "Un prompt es la entrada de texto que usas para comunicar a la IA qué necesitas. Es tu herramienta principal de interacción."
            },
            {
                id: 2,
                question: "¿Cuáles son las partes fundamentales de un buen prompt?",
                options: ["Solo la pregunta","Contexto, instrucción clara, formato deseado y restricciones","Emojis y saltos de línea","Solo el formato de salida"],
                correct: 1,
                explanation: "Un prompt efectivo combina contexto (quién eres, para qué), instrucción clara, formato esperado y restricciones que guían la respuesta."
            },
            {
                id: 3,
                question: "¿Cuál es el error más común al escribir prompts?",
                options: ["Ser demasiado específico","Ser demasiado vago y sin contexto","Escribir en mayúsculas","Usar emojis"],
                correct: 1,
                explanation: "Prompts vagos como \"escríbeme algo sobre marketing\" producen respuestas genéricas. La especificidad es clave para buenos resultados."
            },
            {
                id: 4,
                question: "¿Qué es el \"role prompting\"?",
                options: ["Crear un videojuego","Asignarle un rol o persona experta a la IA","Cambiar el idioma de la IA","Un tipo de error"],
                correct: 1,
                explanation: "Decirle a la IA \"Actúa como un experto en SEO con 10 años de experiencia\" ajusta el tono, profundidad y vocabulario de la respuesta."
            },
            {
                id: 5,
                question: "¿Por qué es importante dar contexto en el prompt?",
                options: ["Para gastar más tokens","Para que la IA personalice la respuesta a tu situación específica","No es importante","Para confundir a la IA"],
                correct: 1,
                explanation: "Sin contexto, la IA da respuestas genéricas. Con contexto sobre tu audiencia, objetivo y situación, las respuestas son mucho más útiles."
            },
            {
                id: 6,
                question: "¿Qué significa especificar el formato de salida?",
                options: ["Elegir el color del texto","Indicar si quieres lista, párrafo, tabla, bullet points, etc.","Cambiar la tipografía","Decidir el tamaño del archivo"],
                correct: 1,
                explanation: "Pedir \"responde en formato tabla con 3 columnas\" o \"dame 5 bullet points\" hace que la respuesta sea directamente utilizable."
            },
            {
                id: 7,
                question: "¿Qué es la iteración de prompts?",
                options: ["Copiar el mismo prompt muchas veces","Refinar progresivamente el prompt basándote en los resultados","Borrar el chat y empezar de nuevo","Usar solo un prompt por conversación"],
                correct: 1,
                explanation: "La iteración es el proceso de ajustar tu prompt paso a paso: \"esto está bien, pero hazlo más corto y añade ejemplos prácticos\"."
            },
            {
                id: 8,
                question: "¿Cuál de estos es MEJOR prompt?",
                options: ["Dime sobre cocina","Escríbeme un email","Actúa como chef italiano. Dame una receta de risotto para 4 personas, paso a paso, con tiempos de cocción","Quiero información"],
                correct: 2,
                explanation: "Este prompt tiene rol (chef italiano), tarea clara (receta de risotto), restricciones (4 personas, paso a paso) y formato (con tiempos)."
            },
            {
                id: 9,
                question: "¿Qué son las \"restricciones\" en un prompt?",
                options: ["Censura de la IA","Límites que defines para acotar la respuesta (longitud, estilo, lo que NO incluir)","Errores del sistema","La velocidad de respuesta"],
                correct: 1,
                explanation: "Las restricciones como \"máximo 200 palabras\", \"no uses jerga técnica\" o \"enfócate solo en el punto 3\" mejoran enormemente las respuestas."
            },
            {
                id: 10,
                question: "¿Qué técnica usarías para obtener varias perspectivas?",
                options: ["Apagar y encender ChatGPT","Pedir que analice el tema desde diferentes roles o puntos de vista","Escribir en otro idioma","Usar solo mayúsculas"],
                correct: 1,
                explanation: "Puedes pedir: \"Analiza esta idea de negocio desde la perspectiva de un inversor, un cliente potencial y un competidor\"."
            }
        ]
    },
    "ia-imagenes-basico": {
        title: "Quiz: Imágenes con IA: Primeros pasos",
        description: "Evalúa tus conocimientos del curso \"Imágenes con IA: Primeros pasos\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué es DALL-E?",
                options: ["Un programa de edición de fotos como Photoshop","Un modelo de IA de OpenAI que genera imágenes a partir de texto","Un formato de imagen digital","Un filtro de Instagram"],
                correct: 1,
                explanation: "DALL-E es un modelo de IA creado por OpenAI que genera imágenes originales a partir de descripciones en texto natural."
            },
            {
                id: 2,
                question: "¿Cuál es la diferencia principal entre Midjourney y DALL-E?",
                options: ["No hay ninguna diferencia","Midjourney destaca en estética artística, DALL-E en precisión de instrucciones","DALL-E solo hace fotos reales","Midjourney es gratuito"],
                correct: 1,
                explanation: "Midjourney tiende a producir imágenes más estéticas y artísticas, mientras DALL-E 3 sigue instrucciones con mayor precisión literal."
            },
            {
                id: 3,
                question: "¿Qué es Stable Diffusion?",
                options: ["Una app de Instagram","Un modelo de generación de imágenes open-source que puedes ejecutar localmente","Un servicio de streaming","Un editor de video"],
                correct: 1,
                explanation: "Stable Diffusion es un modelo de código abierto que genera imágenes y puede ejecutarse en tu propio ordenador sin pagar suscripción."
            },
            {
                id: 4,
                question: "¿Cómo se llama el texto que le das a la IA para generar una imagen?",
                options: ["Caption","Prompt","Tag","Filtro"],
                correct: 1,
                explanation: "Un prompt de imagen es la descripción textual que le das al modelo de IA para que genere la imagen que necesitas."
            },
            {
                id: 5,
                question: "¿Qué elemento NO es importante en un prompt de imagen?",
                options: ["Sujeto principal","Estilo artístico","Tu estado de ánimo personal","Iluminación y composición"],
                correct: 2,
                explanation: "Un buen prompt de imagen incluye sujeto, estilo, iluminación, composición y ambiente. Tu estado de ánimo no afecta el resultado."
            },
            {
                id: 6,
                question: "¿Qué son los \"estilos\" en generación de imágenes con IA?",
                options: ["Los colores disponibles","Indicaciones como \"fotografía realista\", \"acuarela\", \"pixel art\" que definen la estética","Los tamaños de imagen","Los formatos de archivo"],
                correct: 1,
                explanation: "Los estilos guían la estética del resultado: realista, cartoon, 3D render, pintura al óleo, etc. Son fundamentales para el resultado."
            },
            {
                id: 7,
                question: "¿Cuál es una herramienta gratuita para generar imágenes con IA?",
                options: ["Solo existen de pago","Microsoft Copilot (que usa DALL-E) o Leonardo.AI","Netflix","Google Maps"],
                correct: 1,
                explanation: "Microsoft Copilot integra DALL-E gratis, Leonardo.AI ofrece créditos diarios gratuitos, y Stable Diffusion es totalmente libre."
            },
            {
                id: 8,
                question: "¿Cómo mejorar un resultado de imagen que no te gusta?",
                options: ["Pedir exactamente lo mismo otra vez","Refinar el prompt añadiendo más detalles, estilo y composición","Cambiar de ordenador","Esperar unos días"],
                correct: 1,
                explanation: "Añade detalles como estilo de iluminación, ángulo de cámara, paleta de colores y ambiente para obtener resultados más precisos."
            },
            {
                id: 9,
                question: "¿Qué es el \"negative prompt\"?",
                options: ["Un prompt con errores","Instrucciones sobre qué NO incluir en la imagen","Un prompt escrito en negativo","Un prompt que genera imágenes oscuras"],
                correct: 1,
                explanation: "El negative prompt le dice a la IA qué evitar: \"sin texto, sin manos deformadas, sin fondo borroso\", mejorando la calidad del resultado."
            },
            {
                id: 10,
                question: "¿Para qué profesiones es útil la generación de imágenes con IA?",
                options: ["Solo para artistas","Marketing, diseño, educación, redes sociales, emprendedores y más","Solo para programadores","Solo para fotógrafos"],
                correct: 1,
                explanation: "La generación de imágenes es útil en prácticamente cualquier campo: posts de redes sociales, presentaciones, mockups, material educativo, etc."
            }
        ]
    },
    "productividad-ia": {
        title: "Quiz: Productividad con IA en el trabajo",
        description: "Evalúa tus conocimientos del curso \"Productividad con IA en el trabajo\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Cuál es el principal beneficio de usar IA para emails?",
                options: ["Enviar spam","Redactar emails claros y profesionales en segundos","Hackear cuentas ajenas","Eliminar todos tus emails"],
                correct: 1,
                explanation: "La IA te ayuda a redactar, responder y mejorar emails rápidamente, manteniendo un tono profesional adaptado al contexto."
            },
            {
                id: 2,
                question: "¿Para qué sirve Notion AI en productividad?",
                options: ["Solo para tomar notas","Resumir documentos, generar ideas, organizar información y crear plantillas","Para enviar emails","Solo para hacer presentaciones"],
                correct: 1,
                explanation: "Notion AI está integrado en Notion y permite resumir, traducir, generar borradores, brainstorming y organizar información directamente."
            },
            {
                id: 3,
                question: "¿Cómo puede la IA ayudarte con presentaciones?",
                options: ["No puede hacer presentaciones","Generando estructuras, contenido de slides, puntos clave y notas del orador","Solo haciendo diapositivas en blanco","Solo poniendo imágenes aleatorias"],
                correct: 1,
                explanation: "Puedes pedirle a la IA que genere la estructura, el contenido por slide, puntos clave de discurso y hasta sugerir imágenes."
            },
            {
                id: 4,
                question: "¿Qué herramienta de Google tiene IA integrada?",
                options: ["Google Maps","Google Workspace (Docs, Sheets, Slides con Gemini)","Google Earth","Google Chrome únicamente"],
                correct: 1,
                explanation: "Google ha integrado Gemini en Docs, Sheets, Gmail y Slides, permitiendo generar con IA directamente en las herramientas de trabajo."
            },
            {
                id: 5,
                question: "¿Cuál es el mayor error al usar IA para productividad?",
                options: ["Usarla demasiado poco","Copiar el resultado sin revisarlo ni adaptarlo a tu contexto","Usarla en inglés","Usarla por la mañana"],
                correct: 1,
                explanation: "La IA genera borradores excelentes pero siempre debes revisar, personalizar y verificar antes de usar el resultado en un contexto real."
            },
            {
                id: 6,
                question: "¿Qué es Canva AI?",
                options: ["Una red social","Una herramienta de diseño con funciones de IA para crear gráficos, presentaciones y más","Un procesador de texto","Un sistema operativo"],
                correct: 1,
                explanation: "Canva AI integra texto a imagen, redimensionado inteligente, eliminación de fondos y generación de diseños completos con IA."
            },
            {
                id: 7,
                question: "¿Cómo puede la IA ayudarte con brainstorming?",
                options: ["No sirve para eso","Generando listas de ideas, ángulos creativos y variaciones sobre un tema","Solo repitiendo tus ideas","Copiando ideas de internet"],
                correct: 1,
                explanation: "La IA es excelente para generar múltiples ideas rápidamente, explorar ángulos diferentes y combinar conceptos que no habrías considerado."
            },
            {
                id: 8,
                question: "¿Qué es una automatización básica con IA?",
                options: ["Un robot físico","Conectar herramientas para que tareas repetitivas se ejecuten automáticamente","Un virus informático","Un programa de contabilidad"],
                correct: 1,
                explanation: "Automatizar = conectar apps para que acciones como \"guardar adjuntos de email en Drive\" o \"resumir reuniones\" se hagan solas."
            },
            {
                id: 9,
                question: "¿Cuánto tiempo puede ahorrar la IA en tareas de oficina rutinarias?",
                options: ["Nada, es igual de lento","Entre 30-70% del tiempo en tareas como redacción, resúmenes y organización","El 100% del tiempo","Solo 1 minuto al día"],
                correct: 1,
                explanation: "Estudios muestran que la IA puede reducir entre 30-70% el tiempo en tareas como redacción, análisis y resúmenes de documentos."
            },
            {
                id: 10,
                question: "¿Cuál el primer paso para integrar IA en tu flujo de trabajo?",
                options: ["Reemplazar todo tu equipo","Identificar 2-3 tareas repetitivas donde la IA puede ayudarte","Aprender a programar","Comprar el hardware más caro"],
                correct: 1,
                explanation: "Empieza pequeño: identifica las tareas que te quitan más tiempo y son más repetitivas — ahí es donde la IA tiene mayor impacto."
            }
        ]
    },
    "prompts-avanzados": {
        title: "Quiz: Prompts Avanzados",
        description: "Evalúa tus conocimientos del curso \"Prompts Avanzados\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué es la técnica \"Chain-of-Thought\"?",
                options: ["Encadenar varios chats","Pedir a la IA que razone paso a paso antes de dar la respuesta final","Escribir el prompt en cadena de texto","Usar varias IAs a la vez"],
                correct: 1,
                explanation: "Chain-of-Thought instruye a la IA a mostrar su razonamiento paso a paso, mejorando significativamente la precisión en problemas complejos."
            },
            {
                id: 2,
                question: "¿Qué es el \"Few-Shot Prompting\"?",
                options: ["Tirar varias veces del dado","Dar 2-3 ejemplos de entrada/salida deseada antes de tu petición real","Usar pocas palabras","Hacer prompts muy cortos"],
                correct: 1,
                explanation: "Few-shot da ejemplos concretos del formato y estilo esperados para que la IA replique el patrón en tu caso específico."
            },
            {
                id: 3,
                question: "¿Qué diferencia hay entre Zero-Shot y Few-Shot?",
                options: ["No hay diferencia","Zero-shot no incluye ejemplos, few-shot incluye 2-3 ejemplos demostrativos","Zero-shot es más avanzado","Few-shot usa menos texto"],
                correct: 1,
                explanation: "Zero-shot confía en la capacidad innata del modelo sin ejemplos; few-shot le muestra el patrón esperado con ejemplos concretos."
            },
            {
                id: 4,
                question: "¿Para qué sirve el System Prompt?",
                options: ["Para reiniciar el sistema","Para definir el comportamiento base, personalidad y reglas de la IA","Para cambiar el idioma solo","Para acelerar las respuestas"],
                correct: 1,
                explanation: "El system prompt define la \"personalidad\" de la IA: su rol, tono, formato de respuesta, restricciones y comportamiento por defecto."
            },
            {
                id: 5,
                question: "¿Qué es el Role-Playing avanzado en prompts?",
                options: ["Un videojuego","Crear un personaje detallado con expertise, contexto y estilo de comunicación para la IA","Cambiar la voz de la IA","Usar chatbots diferentes"],
                correct: 1,
                explanation: "Von más allá de \"actúa como experto\": defines experiencia, metodología, sesgos a evitar, formato de respuesta y nivel de detalle."
            },
            {
                id: 6,
                question: "¿Cómo usarías la IA para análisis de datos?",
                options: ["No sirve para datos","Dándole el dataset y pidiendo patrones, resúmenes estadísticos y visualizaciones","Solo sumando números","Creando gráficos a mano"],
                correct: 1,
                explanation: "La IA puede analizar datos tabulares, encontrar patrones, generar código para visualizaciones y resumir hallazgos en lenguaje natural."
            },
            {
                id: 7,
                question: "¿Qué técnica usarías para un prompt de escritura creativa?",
                options: ["Solo decir \"escribe algo\"","Definir estilo, tono, audiencia, estructura y dar un fragmento de ejemplo","Copiar un libro existente","Usar solo emojis"],
                correct: 1,
                explanation: "Para escritura creativa define voz narrativa, referentes literarios, estructura, tono emocional y muestra un ejemplo del estilo deseado."
            },
            {
                id: 8,
                question: "¿Qué es el \"prompt chaining\"?",
                options: ["Repetir el mismo prompt","Dividir una tarea compleja en una secuencia de prompts conectados","Escribir prompts muy largos","Usar varios idiomas en un prompt"],
                correct: 1,
                explanation: "Prompt chaining divide tareas complejas en pasos: investigar → analizar → redactar → revisar, usando la salida de uno como entrada del siguiente."
            },
            {
                id: 9,
                question: "¿Cuándo usar prompts de investigación?",
                options: ["Nunca, la IA no investiga","Para explorar un tema desde múltiples ángulos, comparar fuentes y sintetizar información","Solo para temas científicos","Solo cuando no hay Google"],
                correct: 1,
                explanation: "La IA es excelente para sintetizar, comparar perspectivas y estructurar información compleja, siempre verificando datos con fuentes reales."
            },
            {
                id: 10,
                question: "¿Cómo evaluarías la calidad de un prompt avanzado?",
                options: ["Por su longitud","Por la especificidad, reproducibilidad y calidad consistente del resultado","Por cuántos emojis tiene","Por lo rápido que responde"],
                correct: 1,
                explanation: "Un buen prompt avanzado produce resultados consistentes, específicos y de alta calidad cada vez que lo usas, con mínima edición posterior."
            }
        ]
    },
    "midjourney-mastery": {
        title: "Quiz: Midjourney: De intermedio a experto",
        description: "Evalúa tus conocimientos del curso \"Midjourney: De intermedio a experto\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué hace el parámetro --ar en Midjourney?",
                options: ["Activa la realidad aumentada","Define la relación de aspecto de la imagen (ej: --ar 16:9)","Añade un filtro artístico","Reduce el tamaño del archivo"],
                correct: 1,
                explanation: "El parámetro --ar controla la relación de aspecto: --ar 1:1 (cuadrado), --ar 16:9 (panorámico), --ar 9:16 (móvil vertical)."
            },
            {
                id: 2,
                question: "¿Para qué sirve el parámetro --stylize (--s)?",
                options: ["Para añadir subtítulos","Para controlar cuánta libertad artística toma Midjourney sobre el prompt","Para cambiar el idioma","Para hacer zoom"],
                correct: 1,
                explanation: "Stylize va de 0 a 1000. Valores bajos = más literal al prompt. Valores altos = más artístico y estilizado pero menos preciso."
            },
            {
                id: 3,
                question: "¿Qué efecto tiene --chaos en Midjourney?",
                options: ["Rompe la imagen","Genera variaciones más diferentes entre sí en cada generación","Añade efectos de distorsión","Reduce la calidad"],
                correct: 1,
                explanation: "Chaos (0-100) controla cuánta variación hay entre las 4 imágenes generadas. Más chaos = resultados más diversos e inesperados."
            },
            {
                id: 4,
                question: "¿Qué es el --seed en Midjourney?",
                options: ["Una semilla para plantar","Un número que controla la reproducibilidad de los resultados","Un efecto de textura","El tamaño de la imagen"],
                correct: 1,
                explanation: "El seed es un número que hace los resultados reproducibles. Mismo prompt + mismo seed = resultado muy similar cada vez."
            },
            {
                id: 5,
                question: "¿Cómo lograr consistencia de personaje en Midjourney?",
                options: ["Es imposible","Usando descripciones detalladas, seeds, y la función --cref","Usando solo fotos reales","Cambiando de modelo"],
                correct: 1,
                explanation: "La consistencia se logra con descripción detallada del personaje, usando --cref (character reference) y manteniendo el mismo seed."
            },
            {
                id: 6,
                question: "¿Qué es la composición en imágenes de IA?",
                options: ["Escribir música","La disposición de elementos visuales: encuadre, ángulo, regla de tercios, profundidad","El formato del archivo","La paleta de colores únicamente"],
                correct: 1,
                explanation: "La composición determina cómo se organizan los elementos: primer plano, fondo, ángulos de cámara, regla de tercios, líneas guía."
            },
            {
                id: 7,
                question: "¿Cómo especificar iluminación en Midjourney?",
                options: ["No se puede controlar","Usando términos como \"golden hour\", \"studio lighting\", \"dramatic rim light\"","Solo ajustando brillo después","Cambiando el monitor"],
                correct: 1,
                explanation: "Incluye términos de iluminación: \"soft natural light\", \"neon glow\", \"volumetric fog\", \"cinematic lighting\" para controlar la atmósfera."
            },
            {
                id: 8,
                question: "¿Qué son los estilos artísticos en Midjourney?",
                options: ["Filtros de Instagram","Referencias estéticas como \"oil painting\", \"watercolor\", \"cyberpunk\", \"art deco\"","Tipos de archivo","Resoluciones de imagen"],
                correct: 1,
                explanation: "Los estilos dirigen la estética: \"en estilo de Studio Ghibli\", \"photorealistic\", \"brutalist architecture\", \"vaporwave colors\"."
            },
            {
                id: 9,
                question: "¿Para qué sirve crear un portfolio con imágenes de Midjourney?",
                options: ["Solo para guardar las que te gustan","Para demostrar tu habilidad en prompt engineering visual y ofrecer servicios","Para imprimirlas","Para venderlas como fotos reales"],
                correct: 1,
                explanation: "Un portfolio muestra tu dominio del prompt engineering visual, útil para ofrecer servicios de diseño, arte conceptual o marketing."
            },
            {
                id: 10,
                question: "¿Cuál es la clave para resultados profesionales en Midjourney?",
                options: ["Usar prompts al azar","Combinar prompts detallados con parámetros técnicos y iteración constante","Solo usar la versión más nueva","Copiar prompts de otros"],
                correct: 1,
                explanation: "Los resultados profesionales vienen de prompts descriptivos + parámetros técnicos + iteración + conocimiento de estilos y composición."
            }
        ]
    },
    "audio-ia": {
        title: "Quiz: Audio e IA: Música, voz y sonido",
        description: "Evalúa tus conocimientos del curso \"Audio e IA: Música, voz y sonido\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué es Suno AI?",
                options: ["Un servicio de streaming de música","Una plataforma de IA que genera canciones completas con voz y letra","Un micrófono inteligente","Un sintetizador analógico"],
                correct: 1,
                explanation: "Suno genera canciones completas — letra, melodía, voz, instrumentación — a partir de un prompt de texto describiendo el estilo deseado."
            },
            {
                id: 2,
                question: "¿Para qué sirve ElevenLabs?",
                options: ["Para limpiar audio","Para generar voces realistas, clonar voces y crear narraciones con IA","Para editar video","Para componer partituras"],
                correct: 1,
                explanation: "ElevenLabs permite generar voces ultra-realistas, clonar tu propia voz y crear narraciones en múltiples idiomas con control emocional."
            },
            {
                id: 3,
                question: "¿Qué es Whisper de OpenAI?",
                options: ["Un asistente de voz","Un modelo de IA para transcripción de audio a texto con alta precisión","Un generador de música","Una app de mensajes"],
                correct: 1,
                explanation: "Whisper transcribe audio a texto en múltiples idiomas con precisión profesional, incluso con ruido de fondo o acentos."
            },
            {
                id: 4,
                question: "¿Cómo puede la IA ayudar a crear un podcast?",
                options: ["No tiene relación","Generando guiones, transcribiendo episodios, editando audio y creando show notes","Solo poniendo música de fondo","Solo grabando la voz"],
                correct: 1,
                explanation: "La IA puede escribir guiones, transcribir episodios, generar show notes, editar audio, crear intros musicales y hasta generar voces."
            },
            {
                id: 5,
                question: "¿Qué es el doblaje con IA?",
                options: ["Doblar papel con un robot","Traducir y re-narrar contenido audiovisual a otros idiomas manteniendo la voz original","Grabar audio dos veces","Un efecto de reverberación"],
                correct: 1,
                explanation: "El doblaje con IA traduce audio/video a otros idiomas, sincronizando labios y manteniendo el timbre de la voz original."
            },
            {
                id: 6,
                question: "¿Qué herramienta genera efectos de sonido con IA?",
                options: ["Photoshop","ElevenLabs Sound Effects o Stable Audio","Microsoft Word","Google Maps"],
                correct: 1,
                explanation: "ElevenLabs Sound Effects y Stable Audio generan efectos de sonido personalizados describiendo el sonido deseado en texto."
            },
            {
                id: 7,
                question: "¿Cuál es la calidad de la música generada por IA actualmente?",
                options: ["Muy mala, inutilizable","Suficiente para contenido, podcasts, videos y demos, mejorando rápidamente","Idéntica a un Grammy","Solo ruido"],
                correct: 1,
                explanation: "La música IA es perfecta para contenido digital, fondos, demos y creatividad. Aún no compite con producción de estudio profesional."
            },
            {
                id: 8,
                question: "¿Qué precaución debes tener al clonar voces?",
                options: ["Ninguna","Solo clonar tu propia voz o tener autorización explícita del dueño de la voz","Usar auriculares","Hablar más alto"],
                correct: 1,
                explanation: "Clonar la voz de alguien sin permiso es éticamente problemático y potencialmente ilegal. Siempre obtén consentimiento explícito."
            },
            {
                id: 9,
                question: "¿Para qué sirve SoundRaw?",
                options: ["Para grabar llamadas","Para crear música de fondo personalizable ajustando género, tempo y ánimo","Para ecualizar audio","Para videollamadas"],
                correct: 1,
                explanation: "SoundRaw genera pistas de música de fondo personalizables: eliges género, energía, duración e instrumentos para tu proyecto."
            },
            {
                id: 10,
                question: "¿Qué proyecto práctico combina varias herramientas de audio IA?",
                options: ["Instalar un estudio de grabación","Crear un episodio de podcast con guión IA, voz sintética, intro musical y transcripción","Solo escuchar música","Comprar equipos caros"],
                correct: 1,
                explanation: "Un proyecto completo: ChatGPT para el guión, ElevenLabs para la narración, Suno para la intro, y Whisper para la transcripción."
            }
        ]
    },
    "video-ia": {
        title: "Quiz: Video con IA: Creación y edición",
        description: "Evalúa tus conocimientos del curso \"Video con IA: Creación y edición\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué es Runway Gen-3?",
                options: ["Una pista de aterrizaje","Una plataforma de IA que genera y edita video a partir de texto e imágenes","Un reproductor de video","Un cable HDMI"],
                correct: 1,
                explanation: "Runway es una plataforma líder en generación de video con IA, permitiendo crear clips desde texto, imágenes o video existente."
            },
            {
                id: 2,
                question: "¿Qué puede hacer Pika Labs?",
                options: ["Solo fotos","Generar videos cortos desde texto o imagen con movimiento y efectos","Editar documentos","Crear música"],
                correct: 1,
                explanation: "Pika genera videos creativos desde texto o imagen, con control de movimiento, efectos especiales y modificación de video existente."
            },
            {
                id: 3,
                question: "¿Para qué sirve HeyGen?",
                options: ["Para saludar a la gente","Para crear videos con avatares realistas que hablan en múltiples idiomas","Para editar fotos","Para enviar emails"],
                correct: 1,
                explanation: "HeyGen crea avatares digitales realistas que hablan con sincronización labial, ideal para contenido educativo, ventas y formación."
            },
            {
                id: 4,
                question: "¿Qué es text-to-video?",
                options: ["Subtítulos","Generar un video completo a partir de una descripción en texto","Escribir sobre un video","Leer texto en voz alta"],
                correct: 1,
                explanation: "Text-to-video convierte una descripción textual en un clip de video generado por IA, incluyendo movimiento, escenarios y personajes."
            },
            {
                id: 5,
                question: "¿Cómo puede la IA generar subtítulos automáticos?",
                options: ["No puede","Transcribiendo el audio y sincronizando el texto con el timeline del video","Solo copiándolos de internet","Solo en inglés"],
                correct: 1,
                explanation: "Herramientas como Captions, Descript o CapCut usan IA para transcribir audio y generar subtítulos sincronizados automáticamente."
            },
            {
                id: 6,
                question: "¿Qué formato de video es ideal para redes sociales?",
                options: ["Solo horizontal","Formato vertical (9:16) para Shorts, Reels y TikTok","Solo cuadrado","Cualquiera, no importa"],
                correct: 1,
                explanation: "El formato vertical 9:16 es el estándar para Instagram Reels, TikTok y YouTube Shorts, optimizado para visualización móvil."
            },
            {
                id: 7,
                question: "¿Qué es la edición de video con IA?",
                options: ["Que la IA mire el video","Usar IA para cortar, mejorar, eliminar fondos, estabilizar y añadir efectos automáticamente","Solo añadir filtros","Comprimir el archivo"],
                correct: 1,
                explanation: "La edición IA incluye eliminación de fondos, estabilización, mejora de calidad, recorte inteligente, efectos y corrección de color automática."
            },
            {
                id: 8,
                question: "¿Cuál es el límite actual de duración en generación de video IA?",
                options: ["2 horas mínimo","Generalmente clips de 4-15 segundos, aunque están mejorando rápidamente","Solo GIFs de 1 segundo","No hay límite"],
                correct: 1,
                explanation: "Actualmente los modelos generan clips cortos (4-15 seg), pero se combinan con edición tradicional para crear videos más largos."
            },
            {
                id: 9,
                question: "¿Qué herramienta usarías para un Reel de marketing rápido?",
                options: ["Solo grabación manual","CapCut con IA + HeyGen para avatar o Runway para clips generados","Solo PowerPoint","Contratar un equipo de filmación"],
                correct: 1,
                explanation: "Para Reels rápidos: CapCut (edición IA), HeyGen (avatar presentador), Runway (clips visuales) o Canva (templates animados)."
            },
            {
                id: 10,
                question: "¿Cuál es un proyecto práctico de video IA completo?",
                options: ["Grabar con tu móvil","Crear un short/reel combinando guión IA, clips generados, avatar, subtítulos y música","Subir un video sin editar","Solo descargar videos de YouTube"],
                correct: 1,
                explanation: "Proyecto completo: ChatGPT (guión) + Runway/Pika (clips) + HeyGen (avatar) + CapCut (edición, subtítulos) + Suno (música de fondo)."
            }
        ]
    },
    "automatizacion-ia": {
        title: "Quiz: Automatización con IA: Make y Zapier",
        description: "Evalúa tus conocimientos del curso \"Automatización con IA: Make y Zapier\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué es una automatización en el contexto de la IA?",
                options: ["Un robot físico","Un flujo que conecta herramientas para ejecutar tareas repetitivas sin intervención manual","Un programa antivirus","Una macro de Excel"],
                correct: 1,
                explanation: "Una automatización conecta aplicaciones y servicios entre sí, ejecutando secuencias de acciones automáticamente cuando ocurre un evento."
            },
            {
                id: 2,
                question: "¿Qué es Make (antes Integromat)?",
                options: ["Un juego de construcción","Una plataforma visual de automatización que conecta 1000+ apps sin código","Un editor de video","Un servicio de email"],
                correct: 1,
                explanation: "Make permite crear flujos de trabajo visuales arrastrando y conectando módulos, integrando cientos de herramientas y APIs sin programar."
            },
            {
                id: 3,
                question: "¿Cuál es la diferencia principal entre Make y Zapier?",
                options: ["Son exactamente iguales","Make es más visual y flexible; Zapier es más simple y tiene más integraciones nativas","Make es gratuito, Zapier no","Zapier ya no existe"],
                correct: 1,
                explanation: "Make ofrece flujos visuales complejos a menor costo; Zapier es más fácil para automatizaciones lineales simples y tiene más conectores."
            },
            {
                id: 4,
                question: "¿Qué es n8n?",
                options: ["Un juego","Una herramienta de automatización open-source que puedes alojar tú mismo","Un lenguaje de programación","Un navegador web"],
                correct: 1,
                explanation: "n8n es una alternativa open-source a Make/Zapier que puedes alojar en tu propio servidor, con control total y sin límites de ejecución."
            },
            {
                id: 5,
                question: "¿Qué es un \"trigger\" en automatización?",
                options: ["Un arma","El evento que inicia una automatización (ej: recibir un email, nuevo formulario)","El resultado final","Un botón físico"],
                correct: 1,
                explanation: "El trigger es el detonante: \"cuando recibo un email con adjunto\" → la automatización se activa y ejecuta los pasos configurados."
            },
            {
                id: 6,
                question: "¿Cómo automatizar la publicación en redes sociales con IA?",
                options: ["Publicar manualmente","Conectar ChatGPT para generar contenido + Make/Zapier para publicar automáticamente","Contratar un community manager","Imposible de automatizar"],
                correct: 1,
                explanation: "Un flujo típico: trigger (calendario) → ChatGPT genera post → DALL-E genera imagen → publicar en Instagram/LinkedIn automáticamente."
            },
            {
                id: 7,
                question: "¿Qué automatización es útil para email marketing?",
                options: ["Enviar spam","Segmentar audiencia con IA, personalizar contenido y enviar secuencias automáticas","Solo reenviar emails","Borrar todos los emails"],
                correct: 1,
                explanation: "La IA puede analizar comportamiento, segmentar contactos, generar asuntos personalizados y crear secuencias de nurturing automáticas."
            },
            {
                id: 8,
                question: "¿Qué es la generación de contenido automatizada?",
                options: ["Copiar contenido de otros","Crear flujos que generan artículos, posts y newsletters con IA sin intervención manual","Escribir más rápido a mano","Usar plantillas de Word"],
                correct: 1,
                explanation: "Automatizas la generación: trigger → IA genera borrador → revisión/aprobación → publicación, produciendo contenido de forma escalable."
            },
            {
                id: 9,
                question: "¿Para qué sirve conectar Google Sheets con IA?",
                options: ["Solo para hacer tablas bonitas","Para analizar datos, generar informes automáticos y alimentar automatizaciones","Para navegar por internet","Para enviar faxes"],
                correct: 1,
                explanation: "Google Sheets como hub de datos: la IA puede analizar ventas, generar informes, crear dashboards y activar acciones basadas en datos."
            },
            {
                id: 10,
                question: "¿Cuál es el proyecto práctico ideal para aprender automatización?",
                options: ["Leer un libro","Crear un flujo completo: trigger → IA procesa → acción automática (ej: newsletter semanal)","Solo ver tutoriales","Memorizarlas herramientas"],
                correct: 1,
                explanation: "Mejor proyecto: crear un flujo real — ej: cada lunes la IA genera un newsletter personalizado desde tus fuentes y lo envía automáticamente."
            }
        ]
    },
    "agentes-ia": {
        title: "Quiz: Agentes de IA y GPTs personalizados",
        description: "Evalúa tus conocimientos del curso \"Agentes de IA y GPTs personalizados\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué es un GPT personalizado?",
                options: ["Una versión de pago de ChatGPT","Una versión de ChatGPT configurada con instrucciones, conocimientos y herramientas específicas","Un chatbot simple","Un motor de búsqueda"],
                correct: 1,
                explanation: "Un GPT personalizado es ChatGPT configurado con instrucciones específicas, documentos propios y acciones API para un caso de uso concreto."
            },
            {
                id: 2,
                question: "¿Qué es una \"knowledge base\" en un GPT personalizado?",
                options: ["Wikipedia","Documentos que subes para que el GPT los use como fuente de información","Un cerebro artificial","Una base de datos SQL"],
                correct: 1,
                explanation: "La knowledge base son archivos (PDFs, docs, CSVs) que subes al GPT para que responda basándose en tu información específica."
            },
            {
                id: 3,
                question: "¿Qué son las \"Actions\" en un GPT?",
                options: ["Botones de la interfaz","Conexiones a APIs externas que permiten al GPT interactuar con servicios reales","Movimientos del cursor","Acciones de teclado"],
                correct: 1,
                explanation: "Las Actions conectan tu GPT con APIs externas: puede buscar en tu CRM, crear tickets, consultar bases de datos y más."
            },
            {
                id: 4,
                question: "¿Qué es un agente de IA autónomo?",
                options: ["Un robot humanoide","Un sistema de IA que planifica, ejecuta y evalúa tareas de forma independiente","Un chatbot simple","Un asistente que solo responde preguntas"],
                correct: 1,
                explanation: "Un agente IA puede descomponer objetivos, planificar pasos, usar herramientas, evaluar resultados y ajustar su estrategia autónomamente."
            },
            {
                id: 5,
                question: "¿Qué es CrewAI?",
                options: ["Una app de tripulación naval","Un framework para crear equipos de agentes de IA que colaboran entre sí","Una red social","Un servicio de hosting"],
                correct: 1,
                explanation: "CrewAI permite crear \"equipos\" de agentes especializados que trabajan juntos: uno investiga, otro analiza, otro redacta, coordinados."
            },
            {
                id: 6,
                question: "¿Qué es AutoGen de Microsoft?",
                options: ["Un generador de automóviles","Un framework para crear sistemas multi-agente con conversaciones entre agentes IA","Un editor de texto","Un antivirus"],
                correct: 1,
                explanation: "AutoGen permite que múltiples agentes IA conversen entre sí para resolver problemas complejos, con o sin intervención humana."
            },
            {
                id: 7,
                question: "¿Para qué sirve LangChain?",
                options: ["Para traducir idiomas","Para construir aplicaciones con LLMs: cadenas de prompts, memoria, herramientas y agentes","Para blockchain","Para cadenas de suministro"],
                correct: 1,
                explanation: "LangChain es un framework para construir aplicaciones potentes con LLMs: gestiona memoria, herramientas, cadenas de razonamiento y agentes."
            },
            {
                id: 8,
                question: "¿Cuándo conviene crear un agente vs. un prompt simple?",
                options: ["Siempre hay que crear agentes","Cuando la tarea requiere múltiples pasos, herramientas externas o decisiones autónomas","Nunca, los agentes son innecesarios","Solo si sabes programar"],
                correct: 1,
                explanation: "Usa agentes cuando la tarea implica pasos complejos, acceso a herramientas, toma de decisiones o ejecución autónoma sin supervisión constante."
            },
            {
                id: 9,
                question: "¿Cuál es el riesgo principal de los agentes autónomos?",
                options: ["Que sean muy lentos","Que tomen decisiones incorrectas sin supervisión en tareas críticas","Que gasten mucha batería","Que no funcionen en móvil"],
                correct: 1,
                explanation: "Los agentes pueden tomar caminos equivocados o ejecutar acciones no deseadas. Siempre implementa límites, revisiones y la opción de intervención humana."
            },
            {
                id: 10,
                question: "¿Qué proyecto demuestra dominio de agentes IA?",
                options: ["Instalar ChatGPT","Crear un agente que investigue un tema, analice datos y genere un informe completo automáticamente","Solo chatear con IA","Leer documentación"],
                correct: 1,
                explanation: "Un agente que recibe un tema, busca información, analiza múltiples fuentes, sintetiza hallazgos y genera un informe bien estructurado."
            }
        ]
    },
    "ia-codigo": {
        title: "Quiz: IA para programadores (sin programar)",
        description: "Evalúa tus conocimientos del curso \"IA para programadores (sin programar)\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué es GitHub Copilot?",
                options: ["Una red social para programadores","Un asistente de IA que sugiere código en tiempo real dentro del editor","Un repositorio de código","Un sistema operativo"],
                correct: 1,
                explanation: "GitHub Copilot es un asistente de IA que sugiere código, funciones completas y soluciones mientras escribes, integrado en editores como VS Code."
            },
            {
                id: 2,
                question: "¿Qué es Cursor IDE?",
                options: ["Un puntero de ratón","Un editor de código con IA integrada que puede editar, explicar y generar código","Un terminal de comandos","Un navegador web"],
                correct: 1,
                explanation: "Cursor es un IDE (basado en VS Code) con IA nativa que puede entender tu proyecto completo, editar archivos y generar código contextualnente."
            },
            {
                id: 3,
                question: "¿Para qué sirve Replit con IA?",
                options: ["Solo para chatear","Para escribir, ejecutar y desplegar código directamente en el navegador con asistencia IA","Para diseñar logos","Para enviar emails"],
                correct: 1,
                explanation: "Replit permite escribir código en el navegador con un asistente de IA que genera, explica y depura código en tiempo real."
            },
            {
                id: 4,
                question: "¿Qué es v0.dev de Vercel?",
                options: ["Una versión de prueba","Una herramienta de IA que genera interfaces web (UI) a partir de descripciones en texto","Un dominio web","Un servicio de email"],
                correct: 1,
                explanation: "v0.dev genera componentes React/Next.js con diseño profesional describiendo en texto lo que necesitas: \"un dashboard con gráficos y tabla\"."
            },
            {
                id: 5,
                question: "¿Puedes crear una web completa sin saber programar?",
                options: ["Es absolutamente imposible","Sí, usando herramientas como Cursor, v0 y Replit con asistencia de IA","Solo con 10 años de experiencia","Solo si pagas mucho dinero"],
                correct: 1,
                explanation: "Herramientas de IA para código permiten crear webs funcionales describiendo lo que necesitas, la IA genera el código y te guía."
            },
            {
                id: 6,
                question: "¿Qué lenguaje es más fácil de generar con IA para webs?",
                options: ["C++","HTML, CSS y JavaScript por tener la mayor base de entrenamiento","Assembly","Fortran"],
                correct: 1,
                explanation: "Las IAs tienen el mejor rendimiento generando HTML/CSS/JS porque representan la mayor proporción de datos de entrenamiento web."
            },
            {
                id: 7,
                question: "¿Cómo crear una Chrome Extension con IA?",
                options: ["Necesitas un título en informática","Describir la funcionalidad y usar Cursor/ChatGPT para generar el código necesario","Contactar a Google","Es ilegal"],
                correct: 1,
                explanation: "Puedes describir qué debe hacer tu extensión y la IA genera el manifest.json, popup.html, content scripts y background scripts."
            },
            {
                id: 8,
                question: "¿Qué es \"deploy\" o desplegar una aplicación?",
                options: ["Borrarla","Publicarla en internet para que otros puedan acceder a ella","Descargarla","Imprimirla"],
                correct: 1,
                explanation: "Desplegar = publicar tu aplicación en un servidor accesible por internet. Servicios como Vercel, Netlify o Replit lo simplifican enormemente."
            },
            {
                id: 9,
                question: "¿Cuál es la mejor práctica al usar IA para código?",
                options: ["Copiar todo sin entender","Entender el código generado, revisar y probar antes de usarlo en producción","Solo usar un lenguaje","No usar IA"],
                correct: 1,
                explanation: "Siempre revisa y entiende el código generado. La IA puede introducir bugs, vulnerabilidades o lógica incorrecta que debes verificar."
            },
            {
                id: 10,
                question: "¿Qué proyecto demostraría que dominas la creación con IA?",
                options: ["Instalar VS Code","Crear y desplegar una app web funcional describiendo los requisitos a la IA","Solo leer tutoriales","Memorizar lenguajes"],
                correct: 1,
                explanation: "Crea una app real: describe los requisitos, genera el código con IA, prueba, itera y despliégala en producción accesible por internet."
            }
        ]
    },
    "multimodal-ia": {
        title: "Quiz: IA Multimodal: Texto + Imagen + Audio + Video",
        description: "Evalúa tus conocimientos del curso \"IA Multimodal: Texto + Imagen + Audio + Video\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué significa \"IA multimodal\"?",
                options: ["IA que funciona en varios dispositivos","IA que puede procesar y generar múltiples tipos de contenido: texto, imagen, audio, video","IA que funciona en varios idiomas","IA más rápida"],
                correct: 1,
                explanation: "Multimodal = múltiples modalidades. La IA procesa y genera contenido combinando texto, imágenes, audio y video en un mismo sistema."
            },
            {
                id: 2,
                question: "¿Qué capacidad multimodal tiene GPT-4 Vision?",
                options: ["Solo texto","Puede analizar imágenes, gráficos, capturas y documentos combinando visión con razonamiento","Solo audio","Solo video"],
                correct: 1,
                explanation: "GPT-4V puede \"ver\" imágenes: analiza fotos, gráficos, capturas de pantalla, documentos escaneados y combina ese análisis con razonamiento textual."
            },
            {
                id: 3,
                question: "¿Qué ofrece Gemini de Google en multimodalidad?",
                options: ["Solo búsqueda web","Procesamiento nativo de texto, imagen, audio y video en un único modelo","Solo asistente de voz","Solo email"],
                correct: 1,
                explanation: "Gemini fue diseñado desde cero como multimodal, procesando texto, imagen, audio y video de forma nativa en un solo modelo."
            },
            {
                id: 4,
                question: "¿Cómo puede Claude de Anthropic ayudar con documentos?",
                options: ["No puede leer documentos","Analiza PDFs extensos, extrae información clave y responde preguntas sobre el contenido","Solo lee emails","Solo archivos de Word"],
                correct: 1,
                explanation: "Claude puede analizar documentos extensos (hasta 200K tokens), extraer datos, resumir, comparar y responder preguntas contextuales."
            },
            {
                id: 5,
                question: "¿Qué es un proyecto \"blog completo\" multimodal?",
                options: ["Solo escribir texto","Combinar IA de texto (artículo) + imagen (gráficos) + audio (podcast) + video (resumen)","Solo subir fotos","Solo hacer un video"],
                correct: 1,
                explanation: "Un blog multimodal: ChatGPT redacta el artículo, DALL-E/Midjourney las ilustraciones, ElevenLabs la versión audio, y Runway un video-resumen."
            },
            {
                id: 6,
                question: "¿Cómo crear una presentación con múltiples IAs?",
                options: ["Solo con PowerPoint","ChatGPT (estructura y contenido) + DALL-E (imágenes) + ElevenLabs (narración) + Gamma (slides)","Solo con Google Slides","Es imposible"],
                correct: 1,
                explanation: "Combina: ChatGPT para estructura y contenido, DALL-E/Midjourney para las imágenes, ElevenLabs para narración y Gamma/Beautiful.ai para slides."
            },
            {
                id: 7,
                question: "¿Qué es el video marketing con IA multimodal?",
                options: ["Solo grabar con el móvil","Crear campañas de video combinando guión IA, imágenes generadas, voces sintéticas y música","Solo editar videos","Solo comprar anuncios"],
                correct: 1,
                explanation: "Marketing multimodal: guión (ChatGPT) + avatar o clips (HeyGen/Runway) + voz (ElevenLabs) + música (Suno) + edición (CapCut IA)."
            },
            {
                id: 8,
                question: "¿Por qué es importante combinar modalidades?",
                options: ["Solo por diversión","Porque el contenido multi-formato tiene mayor alcance, engagement y impacto que un solo formato","No es importante","Solo para impresionar"],
                correct: 1,
                explanation: "El contenido multimodal alcanza diferentes audiencias, mejora la retención del mensaje y permite reutilizar contenido en múltiples plataformas."
            },
            {
                id: 9,
                question: "¿Qué incluiría un portfolio multimodal con IA?",
                options: ["Solo capturas de pantalla","Proyectos que combinen texto, imágenes, audio y video generados/asistidos por IA","Solo currículum","Solo enlaces a herramientas"],
                correct: 1,
                explanation: "Un portfolio multimodal muestra dominio integral: artículos, diseños, podcasts, videos, presentaciones — todo creado o mejorado con IA."
            },
            {
                id: 10,
                question: "¿Cuál es la tendencia del futuro multimodal?",
                options: ["Volver al texto plano","Modelos unificados que procesen y generen cualquier tipo de contenido fluidamente","Solo realidad virtual","IA solo para imágenes"],
                correct: 1,
                explanation: "La tendencia es hacia modelos que trabajen con todas las modalidades nativamente, permitiendo flujos creativos sin cambiar de herramienta."
            }
        ]
    },
    "negocio-ia": {
        title: "Quiz: Monetizar con IA: Crea tu negocio",
        description: "Evalúa tus conocimientos del curso \"Monetizar con IA: Crea tu negocio\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Cuál es la oportunidad de negocio más accesible con IA?",
                options: ["Crear tu propio modelo de IA","Ofrecer servicios de consultoría y creación de contenido usando herramientas de IA existentes","Fabricar chips","Solo invertir en bolsa"],
                correct: 1,
                explanation: "Lo más accesible es usar herramientas existentes para ofrecer servicios: copywriting, diseño, automatización, consultoría — sin necesidad de programar."
            },
            {
                id: 2,
                question: "¿Qué es un servicio de \"agencia IA\"?",
                options: ["Una agencia de viajes","Una empresa que ofrece servicios de automatización, contenido y estrategia IA a clientes","Una agencia gubernamental","Una app de citas"],
                correct: 1,
                explanation: "Una agencia IA ofrece servicios como automatización de flujos, generación de contenido, chatbots y consultoría de adopción de IA a empresas."
            },
            {
                id: 3,
                question: "¿Cómo puede un freelancer monetizar la IA?",
                options: ["Vendiendo la propia IA","Ofreciendo servicios amplificados por IA: copywriting 10x más rápido, diseño escalable, automatización","Solo dando clases","No se puede como freelancer"],
                correct: 1,
                explanation: "La IA multiplica la productividad del freelancer: puedes ofrecer más servicios, entregar más rápido y manejar más clientes con la misma calidad."
            },
            {
                id: 4,
                question: "¿Qué es un SaaS basado en IA?",
                options: ["Un servicio de limpieza","Software como servicio que usa IA como componente central del producto","Una red social","Un SO"],
                correct: 1,
                explanation: "Un SaaS IA es un producto de software online que resuelve un problema específico usando IA: generador de emails, analizador de CV, etc."
            },
            {
                id: 5,
                question: "¿Cómo conseguir tu primer cliente de servicios IA?",
                options: ["Esperar a que te encuentren","Identificar un problema real, resolver un caso gratis como muestra, y compartirlo en LinkedIn","Comprar anuncios caros","Solo enviar CVs"],
                correct: 1,
                explanation: "Resuelve un problema real del sector de tu potencial cliente, documenta el proceso y resultado, y compártelo como caso de estudio público."
            },
            {
                id: 6,
                question: "¿Cómo crear un portfolio de servicios IA?",
                options: ["Solo poner tu nombre","Mostrar casos reales con antes/después, proceso y resultados medibles","Solo listar herramientas","Copiar portfolios de otros"],
                correct: 1,
                explanation: "Un portfolio efectivo muestra problemas resueltos con datos: \"redujo el tiempo de creación de contenido un 80%\" con capturas del proceso."
            },
            {
                id: 7,
                question: "¿Cómo fijar precios para servicios IA?",
                options: ["Cobrar lo mínimo posible","Basarse en el valor entregado al cliente, no en las horas invertidas","Solo cobrar por hora","Copiar precios de competidores"],
                correct: 1,
                explanation: "Pricing basado en valor: si tu automatización ahorra al cliente 40h/mes, cobra proporcionalmente a ese ahorro, no a tus 3h de configuración."
            },
            {
                id: 8,
                question: "¿Cómo escalar un negocio de servicios IA?",
                options: ["Trabajar más horas","Productizar servicios, crear plantillas reusables y automatizar tu propio flujo de entrega","Solo subir precios","Contratar 50 personas"],
                correct: 1,
                explanation: "Escalar = convertir servicios personalizados en productos estandarizados + automatizar tu propia entrega + crear sistemas que no dependan 100% de ti."
            },
            {
                id: 9,
                question: "¿Qué modelo de negocio es más escalable?",
                options: ["Consultoría 1-a-1 únicamente","Productos digitales (plantillas, cursos, herramientas) + consultoría","Solo trabajo por hora","Solo vender libros"],
                correct: 1,
                explanation: "Los productos digitales escalan infinitamente: una plantilla de automatización la vendes mil veces. La consultoría es complementaria."
            },
            {
                id: 10,
                question: "¿Cuál es el factor clave para monetizar con IA exitosamente?",
                options: ["Conocer todas las herramientas","Resolver un problema real específico y demostrar resultados medibles","Tener muchos seguidores","Usar la IA más cara"],
                correct: 1,
                explanation: "El éxito viene de resolver problemas reales, no de conocer herramientas. Enfócate en un nicho, resuelve un dolor específico y muestra resultados."
            }
        ]
    },
    "etica-ia": {
        title: "Quiz: Ética y futuro de la IA",
        description: "Evalúa tus conocimientos del curso \"Ética y futuro de la IA\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Qué son los sesgos en la IA?",
                options: ["Errores de programación intencionales","Tendencias discriminatorias heredadas de los datos de entrenamiento","Solo errores de traducción","Fallos de hardware"],
                correct: 1,
                explanation: "Los sesgos reflejan prejuicios presentes en los datos de entrenamiento: si los datos tienen sesgos de género, raza o clase, la IA los replica."
            },
            {
                id: 2,
                question: "¿Por qué importa la privacidad en el contexto de la IA?",
                options: ["No importa realmente","Porque la IA puede almacenar, analizar y potencialmente filtrar datos personales sensibles","Solo importa para empresas","Solo afecta a programadores"],
                correct: 1,
                explanation: "Todo lo que envías a herramientas IA puede ser almacenado y potencialmente usado para entrenamiento. Nunca compartas datos confidenciales sin verificar las políticas."
            },
            {
                id: 3,
                question: "¿Cuál es el debate sobre derechos de autor de contenido generado por IA?",
                options: ["No hay debate","Si el contenido IA es original, quién es el autor, y si infringe obras usadas en entrenamiento","Solo afecta a músicos","Ya está resuelto legalmente"],
                correct: 1,
                explanation: "El debate incluye: ¿los modelos violan copyright al entrenarse con obras protegidas? ¿El contenido generado tiene copyright? Está siendo definido legalmente."
            },
            {
                id: 4,
                question: "¿Qué son los deepfakes?",
                options: ["Fotos de alta resolución","Contenido audio/visual falso generado por IA que imita personas reales de forma convincente","Filtros de TikTok","Efectos de Photoshop"],
                correct: 1,
                explanation: "Los deepfakes usan IA para crear videos, audio o imágenes ultra-realistas de personas diciendo o haciendo cosas que nunca hicieron."
            },
            {
                id: 5,
                question: "¿Qué es la regulación de IA más avanzada actualmente?",
                options: ["No existe regulación","El AI Act de la Unión Europea, con un marco de regulación basado en riesgo","Solo las leyes de EEUU","Las normas de China únicamente"],
                correct: 1,
                explanation: "El AI Act de la UE clasifica los usos de IA por nivel de riesgo (inaceptable, alto, limitado, mínimo) y establece obligaciones proporcionadas."
            },
            {
                id: 6,
                question: "¿Qué es la AGI (Inteligencia Artificial General)?",
                options: ["La IA actual","Una IA hipotética con capacidad intelectual humana en todas las tareas","Un tipo de GPU","Un lenguaje de programación"],
                correct: 1,
                explanation: "La AGI sería una IA capaz de entender, aprender y actuar como un humano en cualquier tarea. Actualmente no existe — lo que tenemos es IA estrecha."
            },
            {
                id: 7,
                question: "¿Cómo puede la IA afectar al mercado laboral?",
                options: ["No lo afectará","Transformará roles: eliminará tareas repetitivas pero creará nuevos roles y demandará nuevas habilidades","Eliminará todos los trabajos","Solo afecta a programadores"],
                correct: 1,
                explanation: "La IA automatiza tareas, no trabajos completos. Los roles evolucionarán: más énfasis en supervisión, creatividad, estrategia y habilidades humanas."
            },
            {
                id: 8,
                question: "¿Qué significa \"IA responsable\"?",
                options: ["IA que trabaja sin supervisión","Desarrollar y usar IA con transparencia, equidad, seguridad y consideración del impacto social","IA que se autodestruye","Solo IA de código abierto"],
                correct: 1,
                explanation: "IA responsable implica transparencia en cómo funciona, equidad en los resultados, seguridad ante usos maliciosos y consideración del impacto social."
            },
            {
                id: 9,
                question: "¿Cómo prepararse para el futuro de la IA?",
                options: ["Ignorarla","Desarrollar habilidades complementarias: pensamiento crítico, creatividad, ética y aprender a usar IA","Solo aprender programación","Esperar a ver qué pasa"],
                correct: 1,
                explanation: "Combina habilidades técnicas (usar herramientas IA) con habilidades humanas (pensamiento crítico, creatividad, ética, comunicación)."
            },
            {
                id: 10,
                question: "¿Cuál es tu responsabilidad al usar IA?",
                options: ["Ninguna","Verificar información, ser transparente sobre su uso, proteger datos y considerar el impacto","Solo usarla para ganar dinero","Solo evitar errores ortográficos"],
                correct: 1,
                explanation: "Eres responsable de verificar la información, ser transparente cuando usas IA, proteger datos sensibles y considerar el impacto de tu contenido."
            }
        ]
    },
    "ia-marketing": {
        title: "Quiz: IA para Marketing Digital",
        description: "Evalúa tus conocimientos del curso \"IA para Marketing Digital\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Cómo puede la IA mejorar el copywriting?",
                options: ["Reemplaza completamente al copywriter","Genera borradores rápidos, variaciones de copy, headlines y CTAs que el marketer refina","No sirve para copy","Solo traduce textos"],
                correct: 1,
                explanation: "La IA genera borradores, variaciones A/B de headlines, CTAs, descripciones de producto y body copy que el profesional revisa y personaliza."
            },
            {
                id: 2,
                question: "¿Para qué sirve la IA en SEO?",
                options: ["Para engañar a Google","Para investigar keywords, optimizar contenido, generar meta-descriptions y analizar competencia","Solo para comprar dominios","SEO está muerto"],
                correct: 1,
                explanation: "La IA ayuda en keyword research, generación de contenido optimizado, meta-descriptions, análisis de competencia y estructura de contenido."
            },
            {
                id: 3,
                question: "¿Cómo usar IA para email marketing?",
                options: ["Enviar spam masivo","Personalizar asuntos, segmentar audiencias, generar secuencias y optimizar horarios de envío","Solo diseñar plantillas","Solo reenviar emails"],
                correct: 1,
                explanation: "La IA personaliza asuntos, predice mejores horarios, segmenta audiencias por comportamiento y genera secuencias de nurturing personalizadas."
            },
            {
                id: 4,
                question: "¿Qué herramienta de IA es útil para Social Media?",
                options: ["Excel únicamente","ChatGPT para contenido + DALL-E para imágenes + Hootsuite/Buffer para programar","Solo Photoshop","Ninguna, no sirve"],
                correct: 1,
                explanation: "Combina: ChatGPT (copy y captions), DALL-E/Midjourney (visuales), Canva AI (diseño) y herramientas de scheduling para un flujo completo."
            },
            {
                id: 5,
                question: "¿Cómo puede la IA ayudar con anuncios (Ads)?",
                options: ["Hackear plataformas de ads","Generar variaciones de copy, crear audiencias, analizar rendimiento y optimizar campañas","Solo gastar más presupuesto","No se relaciona con ads"],
                correct: 1,
                explanation: "La IA genera múltiples variaciones de ad copy, sugiere segmentaciones, analiza qué funciona mejor y ayuda a optimizar el ROAS."
            },
            {
                id: 6,
                question: "¿Para qué sirve la IA en análisis de competencia?",
                options: ["Para copiarlos","Para analizar su contenido, estrategia, keywords, tono y encontrar oportunidades","Solo para investigar precios","No se puede analizar competencia con IA"],
                correct: 1,
                explanation: "La IA puede analizar contenido de competidores, identificar huecos, comparar estrategias y sugerir ángulos diferenciadores."
            },
            {
                id: 7,
                question: "¿Cómo crear un calendario editorial con IA?",
                options: ["Solo con un calendario físico","Pidiendo a la IA que genere un mes de contenido alineado con objetivos y tendencias","Copiando el de otra marca","Publicando al azar"],
                correct: 1,
                explanation: "La IA genera calendarios mensuales personalizados: tema, formato, canal, CTA, hashtags — alineados con tus objetivos de negocio y estacionalidad."
            },
            {
                id: 8,
                question: "¿Qué es una campaña de marketing completa con IA?",
                options: ["Solo escribir un blog","Estrategia + contenido multi-formato + ads + email + analytics, todo asistido por IA","Solo pagar anuncios","Solo hacer reels"],
                correct: 1,
                explanation: "Una campaña completa: la IA ayuda en investigación de mercado, creación de contenido, copy de ads, secuencias de email y análisis de resultados."
            },
            {
                id: 9,
                question: "¿Cuál es el límite de la IA en marketing?",
                options: ["No tiene límites","La IA genera borradores excelentes pero la estrategia, voz de marca y juicio final son humanos","Solo funciona en inglés","Solo sirve para grandes empresas"],
                correct: 1,
                explanation: "La IA es una herramienta poderosa pero la estrategia, la autenticidad de marca, las relaciones con clientes y el juicio ético son irremplazablemente humanos."
            },
            {
                id: 10,
                question: "¿Cómo medir el impacto del marketing con IA?",
                options: ["No se puede medir","Comparando métricas antes/después: velocidad de producción, engagement, conversiones y ROI","Solo por likes","Solo por seguidores"],
                correct: 1,
                explanation: "Mide: tiempo de producción (antes vs después), engagement rates, tasas de conversión, coste por lead y ROI de contenido generado con IA."
            }
        ]
    },
    "ia-diseno": {
        title: "Quiz: IA para Diseñadores",
        description: "Evalúa tus conocimientos del curso \"IA para Diseñadores\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Cómo puede la IA ayudar a diseñar logos?",
                options: ["Creando logos idénticos a otros","Generando conceptos, variaciones y opciones rápidas que el diseñador refina","Reemplazando al diseñador","Solo cambiando colores"],
                correct: 1,
                explanation: "La IA genera múltiples conceptos de logo rápidamente: variaciones de estilo, tipografía y composición que el diseñador selecciona y perfecciona."
            },
            {
                id: 2,
                question: "¿Para qué sirven los plugins IA en Figma?",
                options: ["Para hackear Figma","Para generar imágenes, rellenar contenido, crear variantes y automatizar tareas repetitivas","Solo para cambiar colores","No existen"],
                correct: 1,
                explanation: "Plugins como Automator, AI Image Generator y Text Content Generator aceleran el flujo de diseño generando contenido y componentes."
            },
            {
                id: 3,
                question: "¿Cómo usar IA para crear mockups?",
                options: ["Solo con Photoshop clásico","Generando escenas realistas con IA para presentar diseños en contexto profesional","Solo usando fotos de stock","Dibujando a mano"],
                correct: 1,
                explanation: "La IA genera mockups contextualizados: tu diseño en pantallas de móvil, en manos de usuarios, en escenarios isométricos, etc."
            },
            {
                id: 4,
                question: "¿Qué es Photoshop IA (Generative Fill)?",
                options: ["Un filtro básico","Una herramienta que genera, elimina o extiende contenido de imágenes con IA integrada","Un programa separado","Solo autocorrección"],
                correct: 1,
                explanation: "Generative Fill permite seleccionar áreas de una imagen y generar, reemplazar o expandir contenido usando IA directamente en Photoshop."
            },
            {
                id: 5,
                question: "¿Cómo puede la IA ayudar en branding?",
                options: ["No se relaciona con branding","Generando paletas, conceptos visuales, moodboards y variaciones de identidad","Solo haciendo tarjetas de visita","Solo eligiendo tipografías"],
                correct: 1,
                explanation: "La IA ayuda en exploración de conceptos, generación de moodboards, paletas de color, estilos visuales y materiales de brand identity."
            },
            {
                id: 6,
                question: "¿Qué ofrece Canva AI avanzado?",
                options: ["Solo plantillas básicas","Diseño mágico, text-to-image, eliminación de fondos, redimensionado inteligente y más","Solo descargar imágenes","Solo edición de video"],
                correct: 1,
                explanation: "Canva AI incluye Magic Design (diseños desde cero), text-to-image, background remover, Magic Eraser, Magic Resize y Auto-translate."
            },
            {
                id: 7,
                question: "¿Cómo crear un sistema de diseño con ayuda de IA?",
                options: ["Copiar uno existente","Usando IA para generar tokens, componentes base, documentación y guías de estilo","Solo usando Figma sin IA","No es posible"],
                correct: 1,
                explanation: "La IA puede generar variables de diseño, componentes base, documentación de uso, accesibilidad y guías de estilo a partir de tus criterios."
            },
            {
                id: 8,
                question: "¿Para qué sirve la IA en diseño UI?",
                options: ["Solo para colores bonitos","Para generar layouts, wireframes, componentes y crear prototipos rápidos de interfaces","No aplica a UI","Solo para diseño print"],
                correct: 1,
                explanation: "La IA genera wireframes, sugiere layouts, crea variaciones de componentes y puede producir prototipos interactivos rápidamente."
            },
            {
                id: 9,
                question: "¿Cómo construir un portfolio de diseño con IA?",
                options: ["Inventando proyectos","Mostrando proyectos reales donde la IA amplificó tu capacidad creativa y productividad","Solo con capturas de pantalla","Solo listando herramientas"],
                correct: 1,
                explanation: "Un portfolio efectivo muestra el proceso: briefing → exploración con IA → selección → refinamiento → pieza final, demostrando tu juicio creativo."
            },
            {
                id: 10,
                question: "¿Cuál es el papel del diseñador en la era de la IA?",
                options: ["Será reemplazado","Evoluciona de ejecutor a director creativo que guía, selecciona y refina resultados IA","Solo supervisar robots","No cambia nada"],
                correct: 1,
                explanation: "El diseñador pasa de crear cada pixel manualmente a ser un director creativo: define criterios, guía la IA, selecciona los mejores resultados y refina."
            }
        ]
    },
    "ia-educacion": {
        title: "Quiz: IA para Educadores",
        description: "Evalúa tus conocimientos del curso \"IA para Educadores\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Cómo puede la IA mejorar la planificación de clases?",
                options: ["Reemplazando al profesor","Generando secuencias didácticas, actividades y recursos adaptados a objetivos de aprendizaje","Solo haciendo exámenes","No se aplica a educación"],
                correct: 1,
                explanation: "La IA genera planes de clase completos: objetivos, secuencia didáctica, actividades, evaluación y materiales, adaptados al nivel y contexto."
            },
            {
                id: 2,
                question: "¿Para qué sirve la IA en evaluación educativa?",
                options: ["Para aprobar a todos","Para crear rúbricas, generar preguntas variadas y dar retroalimentación personalizada","Solo para exámenes tipo test","Para reemplazar la evaluación"],
                correct: 1,
                explanation: "La IA genera rúbricas, crea preguntas de diferentes niveles cognitivos, y puede proporcionar retroalimentación personalizada y constructiva."
            },
            {
                id: 3,
                question: "¿Cómo crear material didáctico con IA?",
                options: ["Solo comprando libros","Generando guías, infografías, ejercicios interactivos y contenido adaptado al nivel del alumno","Fotocopiando","Usando solo PowerPoint"],
                correct: 1,
                explanation: "La IA crea fichas de trabajo, guías visuales, ejercicios escalonados, resúmenes, glosarios y material multimedia adaptado."
            },
            {
                id: 4,
                question: "¿Qué es la personalización del aprendizaje con IA?",
                options: ["Dar el mismo contenido a todos","Adaptar ritmo, contenidos y actividades a las necesidades individuales de cada estudiante","Solo cambiar el nombre del alumno","Solo traducir el idioma"],
                correct: 1,
                explanation: "La IA puede adaptar la dificultad, sugerir recursos adicionales, identificar áreas de mejora y crear rutas individualizadas de aprendizaje."
            },
            {
                id: 5,
                question: "¿Cómo usar IA para tutoría?",
                options: ["Dejando al alumno solo con la IA","Como asistente que refuerza conceptos, resuelve dudas y ofrece práctica adicional bajo supervisión","Reemplazando completamente al tutor","Solo para idiomas"],
                correct: 1,
                explanation: "La IA funciona como tutor complementario: explica conceptos, da ejercicios adicionales y aclara dudas, siempre supervisado por el docente."
            },
            {
                id: 6,
                question: "¿Cuál es un riesgo ético del uso de IA en educación?",
                options: ["Que los alumnos aprendan demasiado","Que los estudiantes deleguen el pensamiento crítico y la creación original a la IA","Que los profesores trabajen menos","No hay riesgos"],
                correct: 1,
                explanation: "El mayor riesgo es la dependencia: los alumnos deben aprender a pensar, crear y analizar, usando la IA como herramienta, no como sustituto."
            },
            {
                id: 7,
                question: "¿Para qué sirve la IA en accesibilidad educativa?",
                options: ["No tiene relación","Para crear materiales en múltiples formatos, traducir, subtitular y adaptar contenido","Solo para Braille","Solo para idiomas"],
                correct: 1,
                explanation: "La IA genera versiones en audio, texto simplificado, subtítulos, traducciones y adaptaciones que hacen el contenido accesible a todos."
            },
            {
                id: 8,
                question: "¿Cómo puede la IA mejorar la retroalimentación?",
                options: ["Enviando \"bien hecho\" automático","Generando feedback específico, constructivo e inmediato sobre el trabajo del estudiante","Solo poniendo notas","No puede dar feedback"],
                correct: 1,
                explanation: "La IA puede analizar una redacción y dar feedback específico: \"tu argumento en el párrafo 2 necesita una evidencia más concreta...\"."
            },
            {
                id: 9,
                question: "¿Qué presentaciones educativas puede generar la IA?",
                options: ["Solo diapositivas en blanco","Slides con estructura pedagógica, contenido adaptado, imágenes y notas del orador","Solo textos largos","Solo videos"],
                correct: 1,
                explanation: "La IA genera presentaciones con secuencia didáctica, contenido por slide, imágenes relevantes, preguntas de reflexión y notas para el docente."
            },
            {
                id: 10,
                question: "¿Cuál debería ser la actitud del educador hacia la IA?",
                options: ["Prohibirla completamente","Integrarla críticamente como herramienta, enseñando a usarla de forma ética y responsable","Dejar que los alumnos hagan todo con IA","Ignorarla"],
                correct: 1,
                explanation: "El educador debe integrar la IA planificadamente: enseñar a usarla como herramienta, desarrollar pensamiento crítico y establecer límites claros."
            }
        ]
    },
    "ia-escritores": {
        title: "Quiz: IA para Escritores y Creadores de Contenido",
        description: "Evalúa tus conocimientos del curso \"IA para Escritores y Creadores de Contenido\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Cómo puede la IA ayudar a superar el bloqueo creativo?",
                options: ["Escribiendo todo por ti","Generando ideas iniciales, ángulos y variaciones que desbloquean tu creatividad","No sirve para creatividad","Solo reescribiendo textos"],
                correct: 1,
                explanation: "La IA es excelente para brainstorming: genera 20 ideas en segundos, explora ángulos que no habrías considerado y rompe la parálisis creativa."
            },
            {
                id: 2,
                question: "¿Cómo usar IA para crear personajes consistentes?",
                options: ["Copiando personajes famosos","Definiendo perfil detallado y pidiendo a la IA que mantenga la coherencia en diálogos y acciones","No se puede con IA","Usando plantillas genéricas"],
                correct: 1,
                explanation: "Define psicología, backstory, voz y motivaciones del personaje. La IA genera diálogos y escenas consistentes con ese perfil."
            },
            {
                id: 3,
                question: "¿Para qué sirve la IA en worldbuilding?",
                options: ["Crear mapas solo","Generar mundos coherentes: culturas, historia, geografía, reglas y detalles internamente lógicos","Copiar mundos de otros","Solo para fantasía"],
                correct: 1,
                explanation: "La IA ayuda a crear mundos detallados y coherentes: sistemas de magia, culturas, calendarios, economías — manteniendo la consistencia interna."
            },
            {
                id: 4,
                question: "¿Cómo puede la IA ayudar con la estructura de una historia?",
                options: ["No se relacionan","Generando esquemas de trama, arcos narrativos y estructura de actos","Solo corrigiendo ortografía","Solo añadiendo adjetivos"],
                correct: 1,
                explanation: "La IA puede generar estructuras de 3 actos, arcos de personaje, puntos de giro y esquemas de trama que el escritor desarrolla con su voz."
            },
            {
                id: 5,
                question: "¿Qué es el ghostwriting asistido por IA?",
                options: ["Escritura fantasmal","Escribir contenido para otros usando IA como productividad, manteniendo la voz del cliente","Copiar textos automáticamente","Escribir anónimamente en foros"],
                correct: 1,
                explanation: "El ghostwriter usa IA para generar borradores más rápido, manteniendo la voz y estilo del cliente, multiplicando su capacidad de producción."
            },
            {
                id: 6,
                question: "¿Cómo monetizar un blog con ayuda de IA?",
                options: ["Al IA no se relaciona con monetización","Generando contenido SEO más rápido + newsletters + productos digitales + afiliación","Solo poniendo anuncios","Vendiendo la IA"],
                correct: 1,
                explanation: "La IA acelera la creación de contenido SEO, newsletters, ebooks y lead magnets — multiplicando los ingresos por afiliación, ads y ventas digitales."
            },
            {
                id: 7,
                question: "¿Cómo crear un ebook con asistencia IA?",
                options: ["Solo dictando","Generando estructura, borradores por capítulo y refinando con tu voz y expertise","Copiando artículos de internet","Usando solo la IA sin editar"],
                correct: 1,
                explanation: "Proceso: define tema y outline → genera borradores por capítulo con IA → edita, añade tu experiencia → refina voz → publica con formato profesional."
            },
            {
                id: 8,
                question: "¿Qué son las newsletters generadas con asistencia IA?",
                options: ["Spam automático","Contenido curado y creado con IA que el escritor personaliza y envía a suscriptores","Solo emails automáticos","Reenvíos masivos"],
                correct: 1,
                explanation: "La IA ayuda a generar el borrador, sugerir temas, crear headlines y resumir artículos. El escritor añade su perspectiva y toque personal."
            },
            {
                id: 9,
                question: "¿Cuál es la forma correcta de usar IA como escritor?",
                options: ["Publicar directamente lo que genera","Usarla como herramienta de brainstorming y borrador, aplicando siempre tu voz editorial humana","No usarla nunca","Sustituir completamente la escritura manual"],
                correct: 1,
                explanation: "La IA es tu asistente de escritura: genera borradores, ideas y estructura. Tú aportas la voz, la experiencia, el juicio editorial y la autenticidad."
            },
            {
                id: 10,
                question: "¿Cómo publicar un ebook en Amazon con ISBN?",
                options: ["Es imposible sin editorial","Adquirir ISBN, formatear con herramientas adecuadas y subir a KDP cumpliendo los requisitos","Solo enviar un PDF por email","Necesitas imprimir miles de copias"],
                correct: 1,
                explanation: "Con Amazon KDP: prepara el manuscrito, adquiere un ISBN (opcional en KDP), formatea a ePub/KDP, crea la portada y publica siguiendo las guías."
            }
        ]
    },
    "ia-emprendedores": {
        title: "Quiz: IA para Emprendedores",
        description: "Evalúa tus conocimientos del curso \"IA para Emprendedores\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Cómo puede la IA ayudar a generar ideas de negocio?",
                options: ["No sirve para eso","Analizando tendencias, identificando nichos y sugiriendo modelos de negocio basados en datos","Copiando negocios existentes","Solo prediciendo el futuro"],
                correct: 1,
                explanation: "La IA analiza tendencias, identifica problemas sin resolver, sugiere modelos de negocio y genera variaciones de ideas que puedes validar."
            },
            {
                id: 2,
                question: "¿Para qué sirve la IA en validación de mercado?",
                options: ["Para crear el producto directamente","Para investigar competencia, analizar demanda, identificar audiencia y validar hipótesis","No se puede validar con IA","Solo para encuestas"],
                correct: 1,
                explanation: "La IA investiga competidores, analiza reseñas, identifica tendencias de búsqueda y ayuda a construir hipótesis de negocio basadas en datos."
            },
            {
                id: 3,
                question: "¿Cómo crear un modelo de negocio con IA?",
                options: ["Solo con un MBA","Generando Business Model Canvas, analizando ingresos potenciales y refinando la propuesta de valor","Copiando otro modelo","Solo adivinando"],
                correct: 1,
                explanation: "La IA genera BMC completos, analiza modelos de monetización, compara opciones y te ayuda a iterar hasta encontrar el modelo más viable."
            },
            {
                id: 4,
                question: "¿Cómo puede la IA ayudar a crear un MVP (Producto Mínimo Viable)?",
                options: ["Creándolo completamente sola","Generando código con IA, diseño con herramientas no-code, y contenido automáticamente","No se relaciona con MVPs","Solo haciendo presentaciones"],
                correct: 1,
                explanation: "Con herramientas IA puedes crear un MVP funcional: v0/Cursor para código, Figma AI para diseño, ChatGPT para contenido — reduciendo tiempo un 80%."
            },
            {
                id: 5,
                question: "¿Para qué sirve un pitch deck creado con IA?",
                options: ["Solo para decorar la oficina","Para presentar tu negocio a inversores, socios o clientes de forma clara y profesional","Solo para la universidad","No se usa en negocios reales"],
                correct: 1,
                explanation: "Un pitch deck IA genera estructura, contenido por slide, datos de mercado y diseño profesional para presentar tu negocio convincentemente."
            },
            {
                id: 6,
                question: "¿Cómo puede la IA ayudar con temas legales?",
                options: ["Reemplazando abogados","Generando borradores de términos, privacy policies y contratos básicos para revisión legal","No tiene relación con lo legal","Solo traduciendo leyes"],
                correct: 1,
                explanation: "La IA genera borradores legales iniciales que SIEMPRE deben ser revisados por un abogado. Ahorra tiempo pero no sustituye asesoría legal real."
            },
            {
                id: 7,
                question: "¿Qué es el pricing con IA?",
                options: ["Dejar que la IA ponga precios","Analizar competencia, costos, valor percibido y segmentos para definir estrategia de precios","Solo copiar precios de otros","Poner el precio más bajo"],
                correct: 1,
                explanation: "La IA analiza precios de competidores, calcula costos, sugiere modelos (freemium, tiered, por uso) y ayuda a optimizar el pricing strategy."
            },
            {
                id: 8,
                question: "¿Qué es growth hacking con IA?",
                options: ["Hackear cuentas para crecer","Usar IA para encontrar canales de crecimiento rápido, automatizar marketing y optimizar conversión","Solo hacer spam","Un truco viral"],
                correct: 1,
                explanation: "Growth hacking con IA: analizar datos de usuario, identificar canales de adquisición, automatizar experimentos y optimizar el funnel con IA."
            },
            {
                id: 9,
                question: "¿Cómo crear una landing page con IA?",
                options: ["Necesitas contratar un desarrollador","Usando v0/Framer/Carrd + ChatGPT para el copy y DALL-E para las imágenes","Solo con HTML manual","Las landing pages no funcionan"],
                correct: 1,
                explanation: "Combina: ChatGPT (copy persuasivo), DALL-E (hero images), v0/Framer (diseño y código), todo sin saber programar en menos de un día."
            },
            {
                id: 10,
                question: "¿Cuál es el consejo más importante para emprender con IA?",
                options: ["Esperar a dominar todas las herramientas","Empezar antes de estar listo: lanza una primera versión y mejora con feedback real","Solo planificar durante meses","Copiar exactamente lo que otros hacen"],
                correct: 1,
                explanation: "La IA reduce drásticamente el tiempo de idea a lanzamiento. El mayor error es no lanzar. Saca una V1 rápidamente y mejora con datos reales."
            }
        ]
    },
    "ia-rrhh": {
        title: "Quiz: IA para Recursos Humanos",
        description: "Evalúa tus conocimientos del curso \"IA para Recursos Humanos\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Cómo puede la IA mejorar las descripciones de puestos?",
                options: ["Copiando de otras empresas","Generando JDs inclusivas, específicas y atractivas adaptadas al rol y cultura de empresa","Solo traduciendo al inglés","Eliminando requisitos"],
                correct: 1,
                explanation: "La IA genera descripciones de puesto optimizadas: lenguaje inclusivo, requisitos relevantes, beneficios atractivos y tono coherente con la cultura."
            },
            {
                id: 2,
                question: "¿Para qué sirve la IA en screening de CVs?",
                options: ["Para rechazar todos automáticamente","Para filtrar candidatos por criterios relevantes, identificar los mejores perfiles y resumirlos","Solo para cambiar formato","Para copiar CVs"],
                correct: 1,
                explanation: "La IA analiza CVs contra los requisitos del puesto, identifica los candidatos más relevantes y genera resúmenes comparativos para agilizar la selección."
            },
            {
                id: 3,
                question: "¿Cómo puede la IA ayudar en entrevistas?",
                options: ["Reemplazando al entrevistador","Generando preguntas técnicas y conductuales específicas al rol, y guías de evaluación","Solo grabando la entrevista","Entrevistando por chat"],
                correct: 1,
                explanation: "La IA genera preguntas por competencias, criterios de evaluación, roleplay scenarios y guías de scoring adaptadas a cada posición."
            },
            {
                id: 4,
                question: "¿Qué es un plan de onboarding con IA?",
                options: ["Solo documentar el primer día","Un proceso estructurado de integración con contenido personalizado generado por IA","Solo enviar un email de bienvenida","Dar acceso a LinkedIn"],
                correct: 1,
                explanation: "La IA genera planes de onboarding completos: cronograma, materiales por etapa, quizzes de validación y seguimiento personalizado por rol."
            },
            {
                id: 5,
                question: "¿Cómo usar IA para desarrollo de talento?",
                options: ["Solo dando cursos genéricos","Identificando gaps de habilidades, sugiriendo rutas de desarrollo personalizadas","No aplica a RRHH","Solo para evaluaciones anuales"],
                correct: 1,
                explanation: "La IA identifica necesidades de desarrollo por rol, sugiere programas formativos, genera contenido de aprendizaje y monitorea progreso."
            },
            {
                id: 6,
                question: "¿Qué es la comunicación interna con IA?",
                options: ["Emails automáticos sin contexto","Generar comunicaciones adaptadas al equipo: newsletters internas, anuncios y encuestas","Solo usar un chat grupal","Spam interno"],
                correct: 1,
                explanation: "La IA crea comunicaciones internas personalizadas, newsletters del equipo, encuestas de clima y resúmenes de actualizaciones importantes."
            },
            {
                id: 7,
                question: "¿Cómo puede la IA mejorar las evaluaciones de desempeño?",
                options: ["Evaluando automáticamente sin supervisión","Generando formularios por competencias, sugiriendo feedback constructivo y analizando tendencias","Solo poniendo notas numéricas","Eliminando las evaluaciones"],
                correct: 1,
                explanation: "La IA genera evaluaciones estructuradas, sugiere feedback constructivo basado en competencias y analiza tendencias de desempeño del equipo."
            },
            {
                id: 8,
                question: "¿Para qué sirve People Analytics con IA?",
                options: ["Para espiar empleados","Para analizar datos de personas: retención, engagement, productividad y predecir tendencias","Solo para nóminas","No existe en RRHH"],
                correct: 1,
                explanation: "People Analytics con IA analiza patrones de rotación, predice riesgo de fuga de talento, mide engagement y sugiere acciones preventivas."
            },
            {
                id: 9,
                question: "¿Cuál es el riesgo principal de la IA en reclutamiento?",
                options: ["Que sea muy lenta","Que replique sesgos de género, edad o etnia presentes en datos históricos","Que contrate demasiada gente","No tiene riesgos"],
                correct: 1,
                explanation: "El mayor riesgo es el sesgo: si los datos históricos favorecen ciertos perfiles, la IA replicará esa discriminación. Siempre audita los resultados."
            },
            {
                id: 10,
                question: "¿Cuál es el equilibrio correcto entre IA y factor humano en RRHH?",
                options: ["Solo IA, sin humanos","La IA automatiza lo operativo, los humanos lideran las relaciones, decisiones y cultura","Solo humanos, sin IA","Dejar que decida la dirección"],
                correct: 1,
                explanation: "La IA optimiza procesos (screening, scheduling, reportes). El profesional de RRHH se enfoca en relaciones, cultura, desarrollo y decisiones estratégicas."
            }
        ]
    },
    "ia-ventas": {
        title: "Quiz: IA para Ventas",
        description: "Evalúa tus conocimientos del curso \"IA para Ventas\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Cómo puede la IA mejorar la prospección?",
                options: ["Enviando spam masivo","Identificando leads cualificados, investigando prospectos y priorizando oportunidades","Solo haciendo llamadas automáticas","Comprando listas de contactos"],
                correct: 1,
                explanation: "La IA investiga prospectos, identifica señales de compra, puntúa leads por probabilidad de conversión y prioriza las mejores oportunidades."
            },
            {
                id: 2,
                question: "¿Cómo usar IA para emails de venta en frío?",
                options: ["Enviando el mismo email a todos","Generando emails personalizados para cada prospecto basados en su perfil y contexto","Solo usando plantillas genéricas","Enviando adjuntos pesados"],
                correct: 1,
                explanation: "La IA investiga al prospecto and genera emails hiperpersonalizados: referencia su empresa, sus desafíos y cómo tu solución les ayuda específicamente."
            },
            {
                id: 3,
                question: "¿Para qué sirve la IA en LinkedIn para ventas?",
                options: ["Para añadir contactos aleatorios","Para optimizar perfil, generar contenido de autoridad y crear secuencias de outreach","Solo para publicar CV","Para hackear perfiles"],
                correct: 1,
                explanation: "La IA optimiza tu perfil de LinkedIn, genera posts de thought leadership, crea secuencias de conexión y personaliza mensajes de outreach."
            },
            {
                id: 4,
                question: "¿Cómo puede la IA ayudar con propuestas comerciales?",
                options: ["Enviando la misma propuesta a todos","Generando propuestas personalizadas con datos del cliente, ROI esperado y testimonios relevantes","Solo poniendo precios","Solo diseñando PDFs bonitos"],
                correct: 1,
                explanation: "La IA crea propuestas personalizadas: analiza necesidades del cliente, genera proyecciones de ROI, selecciona casos de éxito relevantes y estructura profesional."
            },
            {
                id: 5,
                question: "¿Qué es el manejo de objeciones con IA?",
                options: ["Ignorar objeciones","Preparar respuestas efectivas para las objeciones más comunes usando IA como coach de ventas","Discutir con el cliente","Bajar el precio siempre"],
                correct: 1,
                explanation: "La IA genera respuestas para objeciones comunes (\"es muy caro\", \"ya tenemos solución\"), con argumentos, datos y técnicas de reframing."
            },
            {
                id: 6,
                question: "¿Cómo integrar IA en un CRM?",
                options: ["No se puede","Conectando herramientas IA para enriquecer datos, automatizar follow-ups y predecir cierres","Solo importando contactos","Reemplazando el CRM por IA"],
                correct: 1,
                explanation: "La IA enrichece datos de contacto, sugiere acciones de follow-up, predice probabilidad de cierre y genera resúmenes de interacciones."
            },
            {
                id: 7,
                question: "¿Para qué sirve la IA en analytics de ventas?",
                options: ["Solo para hacer gráficos bonitos","Para analizar pipeline, predecir ingresos, identificar tendencias y optimizar el proceso de venta","Solo para reportes mensuales","No aplica a ventas"],
                correct: 1,
                explanation: "La IA analiza el pipeline completo: identifica cuellos de botella, predice qué deals se cerrarán, sugiere acciones y optimiza el proceso de venta."
            },
            {
                id: 8,
                question: "¿Cómo puede la IA cualificar leads automáticamente?",
                options: ["Llamando a todos por teléfono","Analizando comportamiento, perfil y señales de interés para puntuar cada lead","Solo por tamaño de empresa","Preguntando directamente si quieren comprar"],
                correct: 1,
                explanation: "La IA analiza visitas web, emails abiertos, cargo, industria y comportamiento para asignar una puntuación de cualificación a cada lead."
            },
            {
                id: 9,
                question: "¿Qué herramienta de IA es útil para investigar prospectos?",
                options: ["Solo Google","ChatGPT + LinkedIn Sales Navigator + herramientas de enriquecimiento de datos","Solo el CRM","Redes sociales personales"],
                correct: 1,
                explanation: "Combina ChatGPT para sintetizar información, LinkedIn para datos profesionales y herramientas de enriquecimiento para un perfil completo del prospecto."
            },
            {
                id: 10,
                question: "¿Cuál es la clave para vender más con IA?",
                options: ["Automatizar todo sin personalización","Personalización a escala: usar IA para dar trato personalizado a muchos prospectos","Enviar más emails que la competencia","Bajar precios constantemente"],
                correct: 1,
                explanation: "La IA permite hacer lo que antes era imposible: personalizar cada interacción a escala, dando a cada prospecto un trato único y relevante."
            }
        ]
    },
    "ia-abogados": {
        title: "Quiz: IA para Profesionales del Derecho",
        description: "Evalúa tus conocimientos del curso \"IA para Profesionales del Derecho\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Cómo puede la IA ayudar en búsqueda de jurisprudencia?",
                options: ["Reemplaza al abogado","Busca, analiza y resume sentencias relevantes por tema, jurisdicción y argumentos","Solo traduce leyes","No aplica al derecho"],
                correct: 1,
                explanation: "La IA puede analizar grandes volúmenes de jurisprudencia, identificar sentencias relevantes por argumentos similares y resumir los hallazgos clave."
            },
            {
                id: 2,
                question: "¿Para qué sirve la IA en análisis de legislación?",
                options: ["Para derogar leyes","Para analizar, comparar y resumir textos legales identificando cambios y contradicciones","Solo para imprimir leyes","No funciona con leyes"],
                correct: 1,
                explanation: "La IA compara versiones de leyes, identifica cambios relevantes, señala contradicciones y genera resúmenes ejecutivos de textos legales complejos."
            },
            {
                id: 3,
                question: "¿Cómo usar IA para comparar contratos?",
                options: ["Solo para copiar cláusulas","Para identificar diferencias, cláusulas faltantes, riesgos y desviaciones del estándar","Firmando sin leer","No es posible"],
                correct: 1,
                explanation: "La IA compara contratos contra plantillas estándar, identifica cláusulas inusuales, riesgos, omisiones y sugiere mejoras."
            },
            {
                id: 4,
                question: "¿Qué es due diligence con IA?",
                options: ["Vigilar a alguien","Análisis automatizado de documentos legales y financieros en procesos de M&A o inversión","Solo verificar identidad","Un tipo de contrato"],
                correct: 1,
                explanation: "La IA puede revisar miles de documentos en due diligence: identifica riesgos, contratos problemáticos, litigios pendientes y anomalías rápidamente."
            },
            {
                id: 5,
                question: "¿Cómo puede la IA asistir en redacción de contratos?",
                options: ["Los genera perfectos sin revisión","Generando borradores iniciales de contratos basados en tipo, jurisdicción y partes","Solo los traduce","Es ilegal"],
                correct: 1,
                explanation: "La IA genera borradores de contratos como punto de partida. SIEMPRE deben ser revisados y ajustados por un abogado antes de su uso."
            },
            {
                id: 6,
                question: "¿Para qué sirve la IA en preparación de demandas?",
                options: ["Para obtener la sentencia directamente","Para estructurar argumentos, buscar precedentes y generar borradores de escritos jurídicos","Solo para enviar notificaciones","No aplica a litigios"],
                correct: 1,
                explanation: "La IA ayuda a estructurar argumentos legales, encontrar precedentes relevantes y generar borradores de escritos que el abogado revisa y personaliza."
            },
            {
                id: 7,
                question: "¿Qué es compliance asistido por IA?",
                options: ["Solo presentar informes","Monitoreo automático de cumplimiento normativo, identificando riesgos y generando reportes","Un tipo de multa","Solo auditorías externas"],
                correct: 1,
                explanation: "La IA monitorea cambios regulatorios, verifica cumplimiento de políticas internas, identifica riesgos y genera reportes automáticos de compliance."
            },
            {
                id: 8,
                question: "¿Cuál es el principal riesgo ético de la IA en derecho?",
                options: ["Que sea muy cara","Que genere información legal incorrecta que se use sin verificación en casos reales","Que necesite internet","No hay riesgos"],
                correct: 1,
                explanation: "El mayor riesgo es usar información legal incorrecta generada por IA. Toda salida DEBE ser verificada por un profesional del derecho cualificado."
            },
            {
                id: 9,
                question: "¿Puede la IA reemplazar a un abogado?",
                options: ["Sí, completamente","No, pero amplifica enormemente su capacidad de análisis, investigación y productividad","Sí, en la mayoría de casos","No tiene ninguna utilidad legal"],
                correct: 1,
                explanation: "La IA es una herramienta potente que multiplica la productividad del abogado en investigación y redacción, pero no sustituye el juicio profesional."
            },
            {
                id: 10,
                question: "¿Qué debería hacer un abogado para adaptarse a la IA?",
                options: ["Ignorarla completamente","Aprender a usar herramientas IA para investigación, redacción y análisis, verificando siempre","Cambiar de profesión","Solo delegar todo a la IA"],
                correct: 1,
                explanation: "Los abogados que dominen herramientas IA serán más productivos y competitivos. La clave: aprender a usarlas manteniendo el rigor profesional."
            }
        ]
    },
    "ia-salud": {
        title: "Quiz: IA para Profesionales de Salud",
        description: "Evalúa tus conocimientos del curso \"IA para Profesionales de Salud\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Cómo puede la IA ayudar en documentación clínica?",
                options: ["Diagnosticando pacientes","Transcribiendo consultas, generando informes y organizando historiales médicos","Solo facturando","Recetando medicamentos"],
                correct: 1,
                explanation: "La IA transcribe consultas en tiempo real, genera notas clínicas estructuradas y ayuda a organizar la documentación del paciente."
            },
            {
                id: 2,
                question: "¿Para qué sirve la IA en investigación médica?",
                options: ["Para inventar datos","Para revisar literatura, identificar patrones y sintetizar hallazgos de estudios existentes","Solo para estadísticas","No aplica en medicina"],
                correct: 1,
                explanation: "La IA puede analizar miles de artículos, identificar tendencias en estudios, sintetizar hallazgos y sugerir líneas de investigación."
            },
            {
                id: 3,
                question: "¿Cómo puede la IA mejorar la comunicación con pacientes?",
                options: ["Reemplazando al médico","Generando materiales educativos comprensibles y adaptados al nivel del paciente","Solo enviando SMS","Diagnosticando por chat"],
                correct: 1,
                explanation: "La IA crea materiales de educación al paciente en lenguaje empático y comprensible, instrucciones post-consulta y respuestas a FAQs adaptadas."
            },
            {
                id: 4,
                question: "¿Qué es la transcripción de consultas con IA?",
                options: ["Grabar pacientes sin permiso","Convertir la conversación médico-paciente en notas clínicas estructuradas automáticamente","Solo grabar audio","Traducir a otro idioma"],
                correct: 1,
                explanation: "Con consentimiento del paciente, la IA transcribe la consulta y genera notas SOAP o clínicas estructuradas, ahorrando tiempo al profesional."
            },
            {
                id: 5,
                question: "¿Cómo puede la IA asistir en educación sanitaria?",
                options: ["Dando diagnósticos","Creando materiales de prevención, folletos informativos y contenido de health literacy","Solo con imágenes médicas","No aplica a educación en salud"],
                correct: 1,
                explanation: "La IA genera materiales de educación sanitaria adaptados: folletos de prevención, guías de autocuidado, FAQs y contenido para redes sociales."
            },
            {
                id: 6,
                question: "¿Qué precaución es FUNDAMENTAL al usar IA en salud?",
                options: ["Ninguna especial","Nunca usar IA para diagnóstico sin supervisión médica y proteger datos de pacientes","Solo usar software caro","Solo en hospitales grandes"],
                correct: 1,
                explanation: "NUNCA usar IA para diagnóstico directo. Siempre supervisión médica. Proteger datos sensibles según HIPAA/RGPD. La IA asiste, no decide."
            },
            {
                id: 7,
                question: "¿Qué es el análisis de imágenes médicas con IA?",
                options: ["Hacer fotos bonitas","IA que detecta anomalías en radiografías, TACs y resonancias como apoyo al radiólogo","Solo editar fotos","Crear imágenes de anatomía"],
                correct: 1,
                explanation: "La IA analiza imágenes médicas para detectar anomalías, marcando áreas de interés como apoyo al diagnóstico del radiólogo, nunca como sustituto."
            },
            {
                id: 8,
                question: "¿Cómo puede la IA ayudar a crear protocolos?",
                options: ["Inventando tratamientos","Revisando evidencia, comparando guías clínicas y generando borradores de protocolos estructurados","Solo copiando protocolos de otros","Eliminando protocolos existentes"],
                correct: 1,
                explanation: "La IA revisa guías clínicas, sintetiza evidencia y genera borradores de protocolos que el equipo médico valida y adapta a su contexto."
            },
            {
                id: 9,
                question: "¿Cuál es el debate ético principal de la IA en salud?",
                options: ["El coste","Privacidad de datos de pacientes, sesgo en diagnósticos y responsabilidad ante errores","La velocidad de internet","El diseño de interfaces"],
                correct: 1,
                explanation: "Los principales dilemas: protección de datos sensibles, sesgos que afecten diagnósticos, responsabilidad legal ante errores y equidad en acceso."
            },
            {
                id: 10,
                question: "¿Cuál es el consejo para profesionales de salud sobre IA?",
                options: ["Evitarla por completo","Aprender a usarla para documentación y educación, manteniendo siempre el juicio clínico","Usarla para todo sin supervisión","Dejar que decida tratamientos"],
                correct: 1,
                explanation: "Formarse en herramientas IA para tareas administrativas y educativas. Mantener siempre el juicio clínico. La IA asiste al profesional, no lo sustituye."
            }
        ]
    },
    "ia-freelancers": {
        title: "Quiz: IA para Freelancers",
        description: "Evalúa tus conocimientos del curso \"IA para Freelancers\"",
        passingScore: 70,
        questions: [
            {
                id: 1,
                question: "¿Cuáles son los servicios más demandados que un freelancer puede ofrecer con IA?",
                options: ["Solo traducciones","Copywriting, diseño, automatización, consultoría IA y gestión de contenido","Solo programación avanzada","Solo edición de video"],
                correct: 1,
                explanation: "Los servicios IA más demandados: copywriting escalable, diseño con IA, automatización de flujos, consultoría de adopción y gestión de contenido."
            },
            {
                id: 2,
                question: "¿Cómo crear propuestas más efectivas con IA?",
                options: ["Copiar propuestas de otros","Generando propuestas personalizadas que muestren comprensión del problema del cliente","Solo bajando el precio","Enviando la misma a todos"],
                correct: 1,
                explanation: "La IA investiga al potencial cliente, identifica sus desafíos y genera propuestas hiperpersonalizadas que demuestran comprensión profunda."
            },
            {
                id: 3,
                question: "¿Cómo un freelancer puede manejar múltiples clientes con IA?",
                options: ["Bajando la calidad","Automatizando tareas repetitivas y usando IA para mantener calidad en mayor volumen","Trabajando 20 horas al día","Solo con 1 cliente a la vez"],
                correct: 1,
                explanation: "La IA automatiza reporting, genera borradores, crea plantillas reusables — permitiendo mantener calidad con más clientes simultáneos."
            },
            {
                id: 4,
                question: "¿Qué es un portfolio IA para freelancers?",
                options: ["Una lista de herramientas","Una muestra de trabajos realizados demostrando el impacto de usar IA en los resultados","Solo un CV actualizado","Una colección de prompts"],
                correct: 1,
                explanation: "El portfolio muestra resultados reales: \"con IA, reduje el tiempo de entrega un 60% y aumenté la producción de contenido 4x manteniendo calidad\"."
            },
            {
                id: 5,
                question: "¿Cómo fijar precios como freelancer IA?",
                options: ["Cobrar por hora siempre","Basarse en el valor entregado: la velocidad IA no debe reducir tu tarifa sino aumentar tu capacidad","Cobrar menos por usar IA","Solo paquetes fijos"],
                correct: 1,
                explanation: "No bajes precio por usar IA. Cobra por valor: si entregas en 1 día lo que antes tardabas 5, ofrece más valor, no descuento."
            },
            {
                id: 6,
                question: "¿Cómo crear contenido de marca personal con IA?",
                options: ["Copiando de influencers","Generando posts de LinkedIn, blogs y recursos que muestren tu expertise con IA","Solo publicando selfies","No publicar nada"],
                correct: 1,
                explanation: "La IA ayuda a generar contenido de autoridad: posts, artículos, hilos, carruseles que demuestren tu expertise y atraigan clientes."
            },
            {
                id: 7,
                question: "¿Qué tareas de freelancer se pueden automatizar?",
                options: ["Ninguna","Propuestas iniciales, reportes, facturas, seguimientos, scheduling y organización","Solo las creativas","Todas, incluyendo el trabajo final"],
                correct: 1,
                explanation: "Automatiza lo operativo: templates de propuestas, reportes mensuales, facturas, follow-ups, scheduling. Dedica tu tiempo a lo estratégico y creativo."
            },
            {
                id: 8,
                question: "¿Cómo pasar de freelancer a agencia con IA?",
                options: ["Contratar 10 personas inmediatamente","Productizar servicios, crear sistemas replicables y usar IA para escalar sin crecer linealmente","Solo subir precios","Cambiar de nombre"],
                correct: 1,
                explanation: "La transición: productiza servicios en paquetes → crea SOPs con IA → automatiza entrega → contrata cuando el sistema esté probado."
            },
            {
                id: 9,
                question: "¿Cuál es el error más común del freelancer con IA?",
                options: ["Usar demasiadas herramientas","Entregar contenido IA sin personalización, perdiendo la calidad y singularidad que el cliente busca","Cobrar demasiado","No usar IA suficiente"],
                correct: 1,
                explanation: "El mayor error es entregar output crudo de IA. Los clientes pagan por tu expertise y criterio profesional, no por output genérico de IA."
            },
            {
                id: 10,
                question: "¿Qué distingue a un freelancer exitoso con IA?",
                options: ["Usar la IA más cara","Combinar expertise humana con productividad IA, entregando más valor de forma consistente","Solo velocidad","Solo cantidad de proyectos"],
                correct: 1,
                explanation: "El freelancer exitoso usa IA como multiplicador: más velocidad + misma calidad + mayor capacidad = más valor para clientes y más ingresos."
            }
        ]
    }
};

/** Obtener quiz de un curso */
export function getCourseQuiz(courseId) {
    return COURSE_QUIZZES[courseId] || null;
}
