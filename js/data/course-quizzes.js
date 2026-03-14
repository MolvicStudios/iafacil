/* ═══════════════════════════════════════════════════════════
   COURSE QUIZZES - IAFACIL.HELP
   Quizzes de evaluación para todos los cursos
   10 preguntas por curso con explicaciones
   ═══════════════════════════════════════════════════════════ */

export const COURSE_QUIZZES = {
    "intro-ia": {
        title: "Examen Final: ¿Qué es la Inteligencia Artificial?",
        description: "Evalúa tus conocimientos del curso \"¿Qué es la Inteligencia Artificial?\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué diferencia a la IA estrecha de la Inteligencia Artificial General (AGI)?",
                options: ["La velocidad","La AGI puede realizar cualquier tarea intelectual humana; la IA estrecha solo tareas específicas","El precio","El idioma"],
                correct: 1,
                explanation: "La IA estrecha (como ChatGPT) es experta en una tarea. La AGI hipotética tendría capacidad cognitiva general equivalente o superior a la humana."
            },
            {
                id: 12,
                question: "¿Cuál es una aplicación real del Machine Learning?",
                options: ["Encender la luz manualmente","Filtros de spam en el email que aprenden de tus acciones","Escribir código a mano","Buscar en Google tecleando"],
                correct: 1,
                explanation: "Los filtros de spam usan ML para aprender qué es correo no deseado basándose en millones de ejemplos y tus acciones previas."
            },
            {
                id: 13,
                question: "¿Qué significa que una red neuronal tiene 'capas'?",
                options: ["Que tiene varios colores","Que procesa información en múltiples etapas de transformación, como el cerebro","Que tiene varios idiomas","Que es muy lenta"],
                correct: 1,
                explanation: "Las capas de una red neuronal transforman los datos en cada paso: cada capa extrae características más abstractas hasta llegar a la respuesta final."
            },
            {
                id: 14,
                question: "¿Qué empresa desarrolló ChatGPT?",
                options: ["Google","Apple","OpenAI","Meta"],
                correct: 2,
                explanation: "OpenAI, fundada en 2015, desarrolló la familia de modelos GPT, incluyendo ChatGPT que se lanzó públicamente en noviembre de 2022."
            },
            {
                id: 15,
                question: "¿Por qué es importante entender la IA aunque no seas programador?",
                options: ["No es importante para no programadores","Porque la IA afecta todos los trabajos y quien la domine tendrá ventaja competitiva","Solo importa si trabajas en tecnología","Para impresionar en reuniones"],
                correct: 1,
                explanation: "La IA ya transforma todas las industrias. Entender cómo funciona y usarla estratégicamente es una ventaja competitiva en cualquier profesión."
            }
        ]
    },
    "chatgpt-basico": {
        title: "Examen Final: ChatGPT desde cero",
        description: "Evalúa tus conocimientos del curso \"ChatGPT desde cero\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué tipo de información NUNCA debes compartir con ChatGPT?",
                options: ["Tu nombre","Contraseñas, datos bancarios o información médica sensible","El tema de tu trabajo","Tus aficiones"],
                correct: 1,
                explanation: "Nunca compartas contraseñas, datos bancarios, información médica privada o secretos comerciales. Las conversaciones pueden usarse para entrenar modelos."
            },
            {
                id: 12,
                question: "¿Qué es un 'GPT personalizado' (My GPTs)?",
                options: ["Una versión más cara de ChatGPT","Un ChatGPT configurado con instrucciones, personalidad y conocimiento específico para una tarea","Un backup de ChatGPT","Una traducción de GPT"],
                correct: 1,
                explanation: "Los GPTs personalizados son versiones de ChatGPT con instrucciones, conocimiento e incluso herramientas específicas, como un asistente diseñado a medida."
            },
            {
                id: 13,
                question: "¿Qué es el modo 'voz' de ChatGPT en móvil?",
                options: ["Para escuchar música","Permite hablar con ChatGPT como si fuera una conversación telefónica, con voz natural","Para grabar llamadas","Para transcribir reuniones"],
                correct: 1,
                explanation: "El modo voz de ChatGPT permite conversaciones habladas en tiempo real, con entonación natural y posibilidad de interrumpir — como hablar con una persona."
            },
            {
                id: 14,
                question: "¿Cuándo conviene usar ChatGPT en lugar de Google?",
                options: ["Para buscar páginas web específicas","Para generar contenido, razonar, obtener explicaciones personalizadas o procesar documentos","Para ver las noticias del día","Para ver resultados locales"],
                correct: 1,
                explanation: "ChatGPT es mejor para tareas creativas, explicaciones detalladas y procesamiento. Google es mejor para información actualizada y búsqueda de páginas web."
            },
            {
                id: 15,
                question: "¿Cómo puedes mejorar una respuesta que no es exactamente lo que buscabas?",
                options: ["Cerrar la pestaña","Continuar en la misma conversación indicando qué mejorar: 'hazlo más corto', 'añade ejemplos'","Empezar un chat nuevo","Buscar en Google en su lugar"],
                correct: 1,
                explanation: "La fortaleza de ChatGPT es el dialogo iterativo: puedes refinar cualquier respuesta indicando exactamente qué cambiar sin perder el contexto anterior."
            }
        ]
    },
    "prompts-101": {
        title: "Examen Final: Prompts 101: El Arte de Preguntar a la IA",
        description: "Evalúa tus conocimientos del curso \"Prompts 101: El Arte de Preguntar a la IA\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué son los 'few-shot prompts'?",
                options: ["Prompts muy cortos","Prompts que incluyen ejemplos de entrada/salida para guiar el formato de la respuesta","Prompts en inglés","Prompts con emojis"],
                correct: 1,
                explanation: "Few-shot = pocos ejemplos. Das 2-3 ejemplos de cómo quieres la respuesta y la IA aprende el patrón y lo aplica a tu caso."
            },
            {
                id: 12,
                question: "¿Cuándo usar cadenas de prompts ('prompt chains')?",
                options: ["Cuando tienes una pregunta simple","Para tareas complejas que se benefician de dividir el trabajo en pasos secuenciales","Para redactar emails","Solo con código"],
                correct: 1,
                explanation: "El prompt chaining divide tareas grandes: primero genera la estructura, luego desarrolla cada sección, finalmente revisa y mejora — resultados mucho mejores."
            },
            {
                id: 13,
                question: "¿Qué es el 'zero-shot prompting'?",
                options: ["Un prompt que no funciona","Pedir algo sin dar ejemplos, confiando en el conocimiento previo del modelo","Un prompt con cero palabras","Usar la IA sin prompt"],
                correct: 1,
                explanation: "Zero-shot = sin ejemplos. Le pides algo directamente asumiendo que el modelo ya sabe cómo hacerlo. Funciona para tareas comunes y bien definidas."
            },
            {
                id: 14,
                question: "¿Cómo mejorar las respuestas con 'restricciones de longitud'?",
                options: ["No ayudan","Especificar 'en 3 oraciones', '200 palabras máximo' o 'un párrafo' da respuestas más útiles y precisas","Solo sirven para hacer respuestas más largas","Ralentizan la IA"],
                correct: 1,
                explanation: "Las restricciones de longitud obligan a la IA a priorizar lo importante. 'En 50 palabras explica X' genera resúmenes accionables frente a respuestas genéricas."
            },
            {
                id: 15,
                question: "¿Por qué es valioso dominar el prompting?",
                options: ["Solo para impresionar a colegas","Es la habilidad que multiplica el valor de cualquier herramienta IA: mejores prompts = mejores resultados","Solo para programadores","Es innecesario si la IA es buena"],
                correct: 1,
                explanation: "El prompting es el lenguaje de comunicación con la IA. Dominarlo es como aprender a formular bien las preguntas: obtienes 10x mejores resultados con las mismas herramientas."
            }
        ]
    },
    "ia-imagenes-basico": {
        title: "Examen Final: Imágenes con IA: Primeros pasos",
        description: "Evalúa tus conocimientos del curso \"Imágenes con IA: Primeros pasos\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Cuál es una limitación conocida de las IAs generadoras de imágenes?",
                options: ["No pueden hacer fondos","Dificultad para generar texto legible y manos con el número correcto de dedos","No pueden usar colores oscuros","Solo generan paisajes"],
                correct: 1,
                explanation: "Los modelos actuales a menudo fallan con texto dentro de imágenes y manos (dedos extras). Están mejorando pero es un área conocida de debilidad."
            },
            {
                id: 12,
                question: "¿Para qué sirve el 'inpainting' en IA de imágenes?",
                options: ["Para añadir filtros","Para modificar zonas específicas de una imagen manteniendo el resto intacto","Para hacer zoom","Para cambiar el tamaño"],
                correct: 1,
                explanation: "Inpainting = pintar hacia dentro. Seleccionas un área de la imagen y la IA la rellena o reemplaza según tu prompt, sin afectar el resto."
            },
            {
                id: 13,
                question: "¿Qué significa el parámetro de 'aspecto ratio' (--ar)?",
                options: ["La calidad de la imagen","La proporción entre ancho y alto (16:9 panorámica, 9:16 vertical, 1:1 cuadrada)","La velocidad de generación","El número de variaciones"],
                correct: 1,
                explanation: "El aspect ratio define la forma: 16:9 para pantallas y YouTube, 9:16 para móvil e Instagram Stories, 1:1 para posts cuadrados."
            },
            {
                id: 14,
                question: "¿Qué herramienta IA es gratuita y accesible para generar imágenes desde el navegador?",
                options: ["Solo Midjourney de pago","Adobe Firefly, Microsoft Designer (con Copilot) o Stable Diffusion en HuggingFace","Solo con Adobe CC","Solo con GPU dedicada"],
                correct: 1,
                explanation: "Adobe Firefly tiene capa gratuita, Microsoft Designer está integrado en Bing/Copilot, y Stable Diffusion se puede usar via HuggingFace Spaces sin instalación."
            },
            {
                id: 15,
                question: "¿Cómo mejorar la calidad de tus imágenes generadas con IA?",
                options: ["Usar prompts más cortos","Ser más específico en estilo, iluminación, cámara y agregar palabras de calidad como 'high resolution, detailed'","Solo cambiar la herramienta","Repetir el mismo prompt"],
                correct: 1,
                explanation: "La calidad mejora especificando: estilo artístico, tipo de iluminación, tipo de cámara/lente, y términos de calidad. Un mal prompt produce resultados mediocres incluso con IA excelente."
            }
        ]
    },
    "productividad-ia": {
        title: "Examen Final: Productividad con IA en el trabajo",
        description: "Evalúa tus conocimientos del curso \"Productividad con IA en el trabajo\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Cómo puede la IA ayudar en la gestión del email?",
                options: ["No puede ayudar con emails","Clasificando emails, sugiriendo respuestas, redactando borradores y resumiendo hilos largos","Solo enviando emails","Solo eliminando spam"],
                correct: 1,
                explanation: "Herramientas como Gemini en Gmail o Copilot en Outlook pueden clasificar, resumir, responder y redactar emails con instrucciones en lenguaje natural."
            },
            {
                id: 12,
                question: "¿Qué es la automatización de flujos de trabajo con IA?",
                options: ["Automatizar solo tareas de programación","Conectar aplicaciones para que realicen acciones automáticamente sin intervención humana","Solo hacer macros en Excel","Contratar más personal"],
                correct: 1,
                explanation: "La automatización con herramientas como Zapier, Make o n8n conecta apps: 'cuando llega un email con adjunto, guárdalo en Drive y notifícame en Slack'."
            },
            {
                id: 13,
                question: "¿Cómo usar la IA para tomar mejores notas en reuniones?",
                options: ["No se puede","Herramientas como Otter.ai o Fireflies transcriben, resumen y extraen acciones de cualquier reunión","Solo manualmente","Grabando en cassette"],
                correct: 1,
                explanation: "Apps como Otter.ai, Fireflies o Notion AI transcriben reuniones en tiempo real, identifican participantes, resumen puntos clave y generan listas de próximas acciones."
            },
            {
                id: 14,
                question: "¿Qué es el 'batch processing' con IA para la productividad?",
                options: ["Procesar una cosa a la vez","Agrupar tareas similares y procesarlas todas juntas con IA para mayor eficiencia","Solo para grandes empresas","Un tipo de base de datos"],
                correct: 1,
                explanation: "Batch = lote. En vez de hacer 50 descripciones de producto una a una, creas un prompt con los datos de todos y generas los 50 de una vez."
            },
            {
                id: 15,
                question: "¿Cuál es la clave para integrar la IA en tu rutina laboral?",
                options: ["Usarla para todo desde el primer día","Identificar las 3 tareas más repetitivas y que más tiempo consumen, y empezar por automatizarlas con IA","Comprar las herramientas más caras","Esperar a que sea perfecta"],
                correct: 1,
                explanation: "La adopción efectiva de IA empieza por los quick wins: identifica las tareas más tediosas y repetitivas, implementa IA ahí primero y mide el tiempo ahorrado."
            }
        ]
    },
    "prompts-avanzados": {
        title: "Examen Final: Prompts Avanzados",
        description: "Evalúa tus conocimientos del curso \"Prompts Avanzados\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué es el 'metacprompting'?",
                options: ["Un error de prompt","Usar la IA para generar y mejorar tus propios prompts","Prompts en lenguaje máquina","Solo para expertos en código"],
                correct: 1,
                explanation: "Metaprompting = IA mejora tus prompts. Le pides a la IA: 'Mejora este prompt para obtener mejores resultados' y ella reescribe tu instrucción de forma más efectiva."
            },
            {
                id: 12,
                question: "¿Qué es el 'contextual injection' en prompts avanzados?",
                options: ["Un fallo de seguridad","Insertar datos dinámicos (nombre, fecha, datos del cliente) en plantillas de prompts para personalizarlos","Solo para APIs","Un tipo de plugin"],
                correct: 1,
                explanation: "Contextual injection: tienes una plantilla de prompt con variables {nombre}, {empresa}, {problema} y las rellenas dinámicamente para cada caso de uso."
            },
            {
                id: 13,
                question: "¿Cómo funciona el 'tree of thought' prompting?",
                options: ["Solo para matemáticas","Hacer que la IA explore múltiples caminos de razonamiento antes de dar la respuesta final","Para hacer listas","Solo en inglés"],
                correct: 1,
                explanation: "Tree of Thought pide a la IA que explore varios enfoques para resolver un problema, evalúe cada uno y elija el mejor, mejorando dramáticamente el razonamiento."
            },
            {
                id: 14,
                question: "¿Cuándo usar 'constitutional AI' en tus prompts?",
                options: ["Nunca","Para establecer principios éticos que la IA debe seguir al responder","Solo para textos legales","Para hacer la IA más lenta"],
                correct: 1,
                explanation: "Constitutional prompting define reglas que la IA debe respetar: 'sé siempre constructivo', 'no hagas afirmaciones sin base', 'cita incertidumbres'. Mejora fiabilidad."
            },
            {
                id: 15,
                question: "¿Qué ventaja da dominar el prompting avanzado en entornos profesionales?",
                options: ["Solo vanidad","Permite automatizar análisis complejos, crear sistemas de IA a medida y multiplicar la productividad de todo un equipo","Solo para uso personal","No tiene ventajas reales"],
                correct: 1,
                explanation: "El prompting avanzado en empresas puede automatizar análisis de datos, generación de informes, atención al cliente y formación — siendo una ventaja competitiva real."
            }
        ]
    },
    "midjourney-mastery": {
        title: "Examen Final: Midjourney: De intermedio a experto",
        description: "Evalúa tus conocimientos del curso \"Midjourney: De intermedio a experto\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué hace el parámetro '--v' en Midjourney?",
                options: ["Cambia la resolución","Selecciona la versión del modelo (--v 6 es la más reciente y capaz)","Ajusta el volumen","Añade filtros"],
                correct: 1,
                explanation: "--v selecciona la versión del modelo: --v 6 (septiembre 2023) tiene mayor coherencia, mejor texto y más detalle que versiones anteriores."
            },
            {
                id: 12,
                question: "¿Para qué sirve el comando '/blend' en Midjourney?",
                options: ["Para mezclar colores básicos","Para combinar 2-5 imágenes de referencia creando una fusión estética","Para hacer copias","Para deshacer acciones"],
                correct: 1,
                explanation: "/blend combina 2-5 imágenes tomando las características visuales de todas: útil para crear estilos híbridos o combinar un personaje con un fondo de referencia."
            },
            {
                id: 13,
                question: "¿Qué es el 'image prompting' en Midjourney?",
                options: ["Solo texto","Usar imágenes de referencia (URL) para guiar el estilo o composición de la imagen generada","Escribir prompts en inglés","Un tipo de error"],
                correct: 1,
                explanation: "Image prompting: añades URLs de imágenes al inicio del prompt para decirle a Midjourney 'quiero algo con este estilo/composición y además {tu descripción}'."
            },
            {
                id: 14,
                question: "¿Cómo crear variaciones de un personaje consistente en Midjourney?",
                options: ["Es imposible","Con 'Character Reference' (--cref) que mantiene los rasgos del personaje entre generaciones","Solo editando en Photoshop","Copiando la imagen"],
                correct: 1,
                explanation: "--cref (Character Reference) en MJ v6 permite mantener el look de un personaje entre diferentes escenas y poses, crucial para storytelling visual."
            },
            {
                id: 15,
                question: "¿Qué tipo de proyectos comerciales se pueden crear con Midjourney?",
                options: ["Solo arte","Branding, ilustraciones para libros, marketing digital, diseño de productos, concept art","Solo fondos de pantalla","Solo memes"],
                correct: 1,
                explanation: "Midjourney tiene licencia comercial en planes de pago. Se usa profesionalmente en: portadas de libros, publicidad, branding, ilustración editorial y concept art."
            }
        ]
    },
    "audio-ia": {
        title: "Examen Final: Audio e IA: Música, voz y sonido",
        description: "Evalúa tus conocimientos del curso \"Audio e IA: Música, voz y sonido\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué es el 'voice cloning' con IA?",
                options: ["Un tipo de llamada telefónica","Tecnología que replica fielmente una voz a partir de pocos minutos de audio de muestra","Solo para cantantes","Copiar un CD"],
                correct: 1,
                explanation: "El clonado de voz con IA (ElevenLabs, Resemble.ai) puede replicar una voz con alta fidelidad a partir de 1-3 minutos de audio, capturando tono, cadencia y acento."
            },
            {
                id: 12,
                question: "¿Qué es la IA de separación de fuentes de audio?",
                options: ["Solo ecualización","Tecnología que separa automáticamente voz, instrumentos y efectos de cualquier mezcla de audio","Solo para DJs","Amplificación de sonido"],
                correct: 1,
                explanation: "Herramientas como Spleeter o Lalal.ai separan stems de audio: extraen la voz de una canción, aíslan guitarras o eliminan ruido de fondo de grabaciones."
            },
            {
                id: 13,
                question: "¿Cómo puede la IA mejorar grabaciones de voz amateur?",
                options: ["No puede mejorar grabaciones malas","Eliminando ruido de fondo, mejorando claridad, comprimiendo y masterizando automáticamente","Solo con micrófonos caros","Solo en estudio"],
                correct: 1,
                explanation: "Adobe Podcast, Dolby.io o Auphonic usan IA para mejorar grabaciones: eliminan ruido, ecualización automática, limpieza de reverb y masterización con un clic."
            },
            {
                id: 14,
                question: "¿Qué herramienta IA genera música original a partir de texto?",
                options: ["Spotify","Suno AI o Udio, que crean canciones completas con letra y música a partir de una descripción","Apple Music","YouTube"],
                correct: 1,
                explanation: "Suno AI y Udio pueden generar canciones completas (letra + música + voz) en segundos a partir de prompts como 'pop melancólico sobre nostalgia de verano'."
            },
            {
                id: 15,
                question: "¿Cuál es una consideración ética importante al usar clonado de voz IA?",
                options: ["El coste de la herramienta","Nunca clonar la voz de una persona sin su consentimiento explícito","El tipo de micrófono","La velocidad de internet"],
                correct: 1,
                explanation: "El clonado de voz sin consentimiento es una violación de privacidad y puede ser ilegal. Siempre obtén permiso explícito antes de clonar la voz de cualquier persona."
            }
        ]
    },
    "video-ia": {
        title: "Examen Final: Video con IA: Creación y edición",
        description: "Evalúa tus conocimientos del curso \"Video con IA: Creación y edición\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué es Sora de OpenAI?",
                options: ["Una app de música","Un modelo de IA que genera videos hiper-realistas de hasta 1 minuto a partir de texto","Un editor de fotos","Un asistente de texto"],
                correct: 1,
                explanation: "Sora es el modelo de generación de video de OpenAI (2024), capaz de generar videos de alta calidad y hasta 1 minuto de duración a partir de prompts de texto."
            },
            {
                id: 12,
                question: "¿Para qué sirve HeyGen en video IA?",
                options: ["Editar subtítulos","Crear videos con avatares digitales realistas que hablan cualquier texto en varios idiomas","Solo generar imágenes","Streaming en vivo"],
                correct: 1,
                explanation: "HeyGen genera videos con avatares humanos realistas que leen cualquier texto, en múltiples idiomas y con sincronización labial precisa. Ideal para cursos y marketing."
            },
            {
                id: 13,
                question: "¿Qué es la 'interpolación de frames' con IA en video?",
                options: ["Añadir subtítulos","Generar fotogramas intermedios para convertir video a mayor FPS o ralentizar sin perder calidad","Comprimir video","Cambiar la resolución"],
                correct: 1,
                explanation: "La interpolación IA genera frames sintéticos entre los reales, permitiendo convertir video a 60fps, crear slow-motion o suavizar animaciones."
            },
            {
                id: 14,
                question: "¿Cómo funciona la 'traducción de video con lip sync' IA?",
                options: ["Solo añade subtítulos","Traduce el audio, genera nueva voz en el idioma objetivo y ajusta los movimientos labiales del video","Solo cambia el audio","Requiere regrabar"],
                correct: 1,
                explanation: "Herramientas como HeyGen o Captions pueden traducir un video, sintetizar la voz del presentador en el nuevo idioma Y ajustar el movimiento de labios para que coincidan."
            },
            {
                id: 15,
                question: "¿Cuál es la herramienta IA más accesible para crear videos cortos de marketing?",
                options: ["Solo Adobe Premiere","Canva con IA, CapCut o invideo.ai, que generan videos desde texto o imágenes con plantillas","Solo Final Cut Pro","Solo con cámara profesional"],
                correct: 1,
                explanation: "Canva, CapCut e invideo.ai permiten crear videos de marketing en minutos: texto → script → imágenes/video → voz off → subtítulos, todo asistido por IA."
            }
        ]
    },
    "automatizacion-ia": {
        title: "Examen Final: Automatización con IA: Make y Zapier",
        description: "Evalúa tus conocimientos del curso \"Automatización con IA: Make y Zapier\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué diferencia Make (Integromat) de Zapier?",
                options: ["Son idénticos","Make ofrece flujos visuales más complejos y es más barato; Zapier es más simple y con más integraciones estándar","Solo el precio","La velocidad"],
                correct: 1,
                explanation: "Make permite flujos multi-rama, bucles y lógica compleja con interfaz visual. Zapier es más simple, con más conectores listos pero menos capacidad para automatizaciones avanzadas."
            },
            {
                id: 12,
                question: "¿Qué es un webhook en automatización?",
                options: ["Un tipo de error","Una URL que recibe datos en tiempo real cuando ocurre un evento en otra aplicación","Un tipo de email","Un protocolo de seguridad"],
                correct: 1,
                explanation: "Un webhook es como un 'timbre digital': cuando algo pasa en una app (nuevo pago, nuevo lead), esa app envía datos automáticamente a tu URL de webhook para procesarlos."
            },
            {
                id: 13,
                question: "¿Para qué sirve OpenAI API en flujos de automatización?",
                options: ["Solo para chat en vivo","Para añadir inteligencia a cualquier automatización: clasificar datos, resumir textos, generar contenido, tomar decisiones","Solo para programadores avanzados","Para hosting"],
                correct: 1,
                explanation: "La API de OpenAI en Make/n8n permite añadir IA a cualquier flujo: clasificar emails, resumir documentos, generar respuestas personalizadas o analizar datos automáticamente."
            },
            {
                id: 14,
                question: "¿Qué es un 'router' o 'switch' en flujos de automatización?",
                options: ["Un dispositivo de red","Un nodo que dirije el flujo por diferentes caminos según condiciones (si cliente VIP → acción A, si no → acción B)","Un tipo de conector","Una herramienta de debug"],
                correct: 1,
                explanation: "El router permite lógica condicional: según los datos, el flujo toma caminos diferentes. Esencial para automatizaciones que deben responder distinto a cada situación."
            },
            {
                id: 15,
                question: "¿Cuál es el primer paso al diseñar una automatización IA?",
                options: ["Elegir la herramienta","Mapear el proceso manual actual paso a paso antes de automatizarlo","Comprar la suscripción","Contratar a un experto"],
                correct: 1,
                explanation: "Antes de automatizar, documenta el proceso completo: qué datos entran, qué decisiones hay, qué acciones se ejecutan y qué sale. Sin este mapa, la automatización fracasa."
            }
        ]
    },
    "agentes-ia": {
        title: "Examen Final: Agentes de IA y GPTs personalizados",
        description: "Evalúa tus conocimientos del curso \"Agentes de IA y GPTs personalizados\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué diferencia a un agente IA de un chatbot?",
                options: ["Son lo mismo","Un agente puede tomar acciones autónomas (buscar web, ejecutar código, enviar emails); un chatbot solo conversa","Solo el precio","El idioma"],
                correct: 1,
                explanation: "Un chatbot responde preguntas; un agente IA actúa: busca información, ejecuta tareas, usa herramientas y toma decisiones para completar objetivos complejos."
            },
            {
                id: 12,
                question: "¿Qué herramienta permite crear agentes IA sin código?",
                options: ["Solo con Python","Flowise o Botpress permiten crear agentes visuales con flujos drag-and-drop","Solo con JavaScript","Solo con APIs directas"],
                correct: 1,
                explanation: "Flowise (open-source) y Botpress permiten crear agentes IA y chatbots con interfaz visual, sin código, conectando LLMs con herramientas y bases de conocimiento."
            },
            {
                id: 13,
                question: "¿Qué es una 'knowledge base' en un agente IA?",
                options: ["La memoria RAM","Una colección de documentos que el agente puede consultar para dar respuestas basadas en tu información específica","El modelo de lenguaje","La interfaz de usuario"],
                correct: 1,
                explanation: "La knowledge base es el 'cerebro documental' del agente: PDFs, manuales, FAQs que el agente indexa y consulta para responder preguntas con información de tu empresa."
            },
            {
                id: 14,
                question: "¿Qué es el patrón 'ReAct' en agentes IA?",
                options: ["Una biblioteca JavaScript","Reason + Act: el agente razona sobre qué hacer, actúa, observa el resultado y decide el siguiente paso","Un framework CSS","Un tipo de API"],
                correct: 1,
                explanation: "ReAct (Reason + Act) es el patrón fundamental de los agentes: piensan ('necesito buscar esto'), actúan (llaman a una herramienta), observan el resultado y repiten."
            },
            {
                id: 15,
                question: "¿Cuál es el principal riesgo de los agentes IA autónomos?",
                options: ["Que sean lentos","Que ejecuten acciones no deseadas o irreversibles si no tienen límites y validaciones adecuadas","Que consuman mucha batería","Que no hablen español"],
                correct: 1,
                explanation: "Un agente autónomo mal configurado puede eliminar datos, enviar emails masivos o hacer compras. Siempre implementa 'human in the loop' para acciones críticas e irreversibles."
            }
        ]
    },
    "ia-codigo": {
        title: "Examen Final: IA para programadores (sin programar)",
        description: "Evalúa tus conocimientos del curso \"IA para programadores (sin programar)\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué es GitHub Copilot?",
                options: ["Una red social de programadores","IA integrada en editores de código (VS Code) que sugiere código, completa funciones y genera tests en tiempo real","Un hosting de código","Un lenguaje de programación"],
                correct: 1,
                explanation: "GitHub Copilot es un asistente de código IA que examina tu contexto y sugiere la siguiente línea o bloque entero, generando código basado en comentarios o nombres de funciones."
            },
            {
                id: 12,
                question: "¿Para qué sirve 'cursor.sh'?",
                options: ["Para diseño gráfico","Editor de código con IA integrada que permite editar archivos enteros, debuggear y explicar código con lenguaje natural","Un navegador web","Un sistema operativo"],
                correct: 1,
                explanation: "Cursor es un fork de VS Code con IA profundamente integrada: puedes seleccionar código y pedirle que lo refactorice, explique, debuggee o genere tests."
            },
            {
                id: 13,
                question: "¿Cómo ayuda la IA a depurar (debug) código?",
                options: ["No puede depurar","Analiza el error, identifica la causa raíz y sugiere soluciones concretas con explicación del problema","Solo muestra el error en rojo","Solo para Python"],
                correct: 1,
                explanation: "Pegar un error y el código relevante en ChatGPT/Copilot produce análisis detallado: qué falló, por qué y una corrección concreta. Reduce depuración de horas a minutos."
            },
            {
                id: 14,
                question: "¿Qué es 'v0.dev' de Vercel?",
                options: ["Una versión de Node.js","IA que genera componentes UI completos (React/HTML) a partir de una descripción en texto","Un servicio de hosting","Una base de datos"],
                correct: 1,
                explanation: "v0.dev convierte descripciones de texto en componentes React/Tailwind completos y funcionales. Describes 'un dashboard con tabla y gráfico' y genera el código listo."
            },
            {
                id: 15,
                question: "¿Cuál es la mejor práctica al usar IA para generar código?",
                options: ["Copiar sin leer","Revisar y entender el código generado, probarlo en aislamiento y adaptarlo a tu proyecto","Nunca usar IA para código","Solo para proyectos pequeños"],
                correct: 1,
                explanation: "El código IA es un punto de partida, no la solución final. Siempre entiende qué hace, prueba en sandbox, adapta a tu arquitectura y mantén tú el control del resultado."
            }
        ]
    },
    "multimodal-ia": {
        title: "Examen Final: IA Multimodal: Texto + Imagen + Audio + Video",
        description: "Evalúa tus conocimientos del curso \"IA Multimodal: Texto + Imagen + Audio + Video\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué es 'Gemini Advanced' de Google?",
                options: ["Una versión de Android","El modelo más capaz de Google con contexto extendido, análisis multimodal y acceso a más herramientas","Un buscador mejorado","Una app de mapas"],
                correct: 1,
                explanation: "Gemini Advanced usa Gemini Ultra, el modelo más potente de Google, con contexto de 1M tokens, análisis de video largo y capacidades mejoradas de razonamiento."
            },
            {
                id: 12,
                question: "¿Cómo se usa la IA para análisis de documentos complejos?",
                options: ["Solo para texto simple","Subiendo PDFs, informes o presentaciones a Claude/GPT-4 para extraer datos, comparar versiones o responder preguntas","Solo con OCR básico","Solo para archivos Word"],
                correct: 1,
                explanation: "Claude puede analizar contratos de 200 páginas, informes financieros o manuales técnicos, extraer datos clave, comparar versiones y responder preguntas sobre el contenido."
            },
            {
                id: 13,
                question: "¿Qué ventaja da el contexto extendido en modelos multimodales?",
                options: ["Solo velocidad","Permite analizar libros completos, proyectos enteros o conversaciones largas manteniendo coherencia en las respuestas","Solo para imágenes grandes","Consume menos energía"],
                correct: 1,
                explanation: "Con ventanas de 1M+ tokens, puedes analizar proyectos completos: pegar todo el código de una app, todos los documentos de un proyecto o una investigación entera."
            },
            {
                id: 14,
                question: "¿Cómo transcribir y analizar una reunión grabada con IA?",
                options: ["Es imposible","Usando Whisper (OpenAI) para transcribir el audio y luego ChatGPT para extraer acciones, decisiones y resumen","Solo con transcriptores manuales","Solo con herramientas de pago"],
                correct: 1,
                explanation: "Whisper transcribe con alta precisión en múltiples idiomas. El texto se pasa a ChatGPT con instrucciones para extraer: participantes, decisiones, acciones y próximos pasos."
            },
            {
                id: 15,
                question: "¿Cuál es el flujo multimodal más productivo para creadores de contenido?",
                options: ["Usar solo una herramienta","Texto (idea) → ChatGPT (guión) → DALL-E/Midjourney (visuales) → ElevenLabs (voz) → capCut/Runway (video final)","Solo grabación directa","Solo texto plano"],
                correct: 1,
                explanation: "El flujo multimodal permite a un solo creador producir contenido profesional completo: idea → guión → imágenes → narración → video en cada semana con IA."
            }
        ]
    },
    "negocio-ia": {
        title: "Examen Final: Monetizar con IA: Crea tu negocio",
        description: "Evalúa tus conocimientos del curso \"Monetizar con IA: Crea tu negocio\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué es un 'MicroSaaS' con IA?",
                options: ["Una gran empresa tecnológica","Un producto de software pequeño y especializado que resuelve un problema muy específico usando IA","Un tipo de microservicio","Solo para programadores"],
                correct: 1,
                explanation: "Un MicroSaaS IA resuelve UN problema específico: generador de bio para Instagram, analizador de contratos, resumidor de reuniones. Sin inversión masiva y con herramientas existentes."
            },
            {
                id: 12,
                question: "¿Cómo validar una idea de negocio IA antes de invertir tiempo?",
                options: ["Desarrollarla completamente","Crear un MVP (página de espera + demo manual) y pre-vender antes de construir el producto real","Pedirle a la IA que valide","Esperar a tener inversores"],
                correct: 1,
                explanation: "Validación lean: landing page simple, explica la solución, colecta emails/pre-ventas. Si 10-20 personas pagan por adelantado, existe mercado. Si no, pivota antes de gastar."
            },
            {
                id: 13,
                question: "¿Cuáles son los servicios de mayor demanda en el mercado IA actual?",
                options: ["Servicios genéricos de diseño","Automatización de procesos empresariales, creación de chatbots y generación de contenido a escala","Solo programación","Solo diseño gráfico"],
                correct: 1,
                explanation: "La mayor demanda actual: automatización (ahorro de tiempo), generación de contenido escalable, chatbots de atención y análisis de datos. Las empresas buscan ROI tangible."
            },
            {
                id: 14,
                question: "¿Cómo protege a tu negocio IA la dependencia de un solo proveedor?",
                options: ["No es un problema","Diversificando herramientas, documentando procesos y manteniendo conocimiento que no depende de una sola IA","Solo con contratos legales","Solo usando open source"],
                correct: 1,
                explanation: "Si OpenAI cambia precios o cae, tu negocio debe sobrevivir. Usa APIs intercambiables, documenta tu know-how y asegúrate de que el valor es tu expertise, no solo la herramienta."
            },
            {
                id: 15,
                question: "¿Cuál es el primer paso para lanzar servicios IA como freelancer?",
                options: ["Crear una empresa primero","Elegir un nicho específico, dominar 2-3 herramientas clave y conseguir un caso de éxito documentado","Esperar a tener experiencia de 5 años","Certificarse en todas las plataformas"],
                correct: 1,
                explanation: "El free-to-paid path: elige nicho (ej: automatización para e-commerce), consigue cliente de prueba gratis, documenta resultados y úsalo como caso de estudio para cobrar."
            }
        ]
    },
    "etica-ia": {
        title: "Examen Final: Ética y futuro de la IA",
        description: "Evalúa tus conocimientos del curso \"Ética y futuro de la IA\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué es el 'deepfake' y por qué es un problema ético?",
                options: ["Un filtro de foto divertido","Contenido audiovisual falsificado con IA que pone palabras o acciones en boca de personas reales sin su consentimiento","Una técnica de diseño","Un tipo de vídeo educativo"],
                correct: 1,
                explanation: "Los deepfakes pueden destruir reputaciones, crear desinformación política y vulnerar la privacidad. Su detección es cada vez más difícil, representando un riesgo democrático serio."
            },
            {
                id: 12,
                question: "¿Qué organizaciones están regulando la IA actualmente?",
                options: ["Ninguna","La UE con el AI Act (2024), ejecutivos de EE.UU. y organismos como UNESCO establecen marcos regulatorios","Solo empresas privadas","Solo la ONU"],
                correct: 1,
                explanation: "El AI Act de la UE (2024) es la regulación más completa: clasifica sistemas IA por riesgo y establece requisitos específicos. EE.UU. tiene órdenes ejecutivas y la UNESCO directrices globales."
            },
            {
                id: 13,
                question: "¿Qué es la 'explicabilidad' (XAI) en sistemas de IA?",
                options: ["Que la IA hable claro","La capacidad de entender y explicar por qué la IA tomó una decisión específica","Que la IA use términos simples","Solo para sistemas legales"],
                correct: 1,
                explanation: "XAI (eXplainable AI) busca que los sistemas puedan explicar sus decisiones: si la IA deniega un crédito, debe poder explicar qué factores influyeron en esa decisión."
            },
            {
                id: 14,
                question: "¿Por qué es importante la diversidad en los equipos que desarrollan IA?",
                options: ["Solo por política empresarial","Porque equipos homogéneos crean sistemas con sesgos que afectan a grupos subrepresentados en los datos","Solo para imagen corporativa","No afecta al desarrollo"],
                correct: 1,
                explanation: "La diversidad en equipos IA reduce sesgos: si todos los desarrolladores son del mismo perfil, tienden a no ver cómo el sistema puede discriminar a grupos diferentes al suyo."
            },
            {
                id: 15,
                question: "¿Cuál es la responsabilidad individual al usar IA generativa?",
                options: ["Ninguna, la IA es responsable","Verificar información antes de publicar, respetar derechos de autor y ser transparente cuando el contenido es generado por IA","Solo responsabilidad de empresas","Solo responsabilidad de programadores"],
                correct: 1,
                explanation: "Cada usuario es responsable de cómo usa la IA: verificar datos antes de publicarlos, no atribuir textos IA como propios sin declararlo y no usar IA para dañar a otros."
            }
        ]
    },
    "ia-marketing": {
        title: "Examen Final: IA para Marketing Digital",
        description: "Evalúa tus conocimientos del curso \"IA para Marketing Digital\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Cómo puede la IA personalizar campañas de email marketing?",
                options: ["Enviando el mismo email a todos","Segmentando automáticamente audiencias, generando variantes personalizadas y enviando en el momento óptimo por usuario","Solo añadiendo el nombre","Solo con grandes presupuestos"],
                correct: 1,
                explanation: "IA en email: Klaviyo o ActiveCampaign segmentan automáticamente, PersonAI genera variantes personalizadas y los modelos predicen el mejor horario de envío por suscriptor."
            },
            {
                id: 12,
                question: "¿Qué es el 'marketing conversacional' con IA?",
                options: ["llamar a clientes por teléfono","Usar chatbots IA para guiar a prospectos en tiempo real a través de una conversación personalizada hasta la conversión","Solo WhatsApp manual","Solo email"],
                correct: 1,
                explanation: "Marketing conversacional: chatbots IA en web/WhatsApp que cualifican leads, responden dudas de compra y acompañan al usuario desde el primer interés hasta el checkout."
            },
            {
                id: 13,
                question: "¿Cómo analiza la IA el sentiment de los clientes?",
                options: ["Contando palabras positivas","Analizando reseñas, comentarios y menciones para clasificar automáticamente la emoción y tema de cada mensaje","Solo en encuestas","Solo para grandes marcas"],
                correct: 1,
                explanation: "El análisis de sentimientos IA (Brandwatch, Sprinklr) clasifica millones de menciones en positivo/negativo/neutro, identifica temas emergentes y alerta sobre crisis de reputación."
            },
            {
                id: 14,
                question: "¿Qué es el 'predictive marketing' con IA?",
                options: ["Adivinar las ventas","Usar modelos de ML para predecir qué clientes comprarán, qué producto y cuándo, permitiendo campañas proactivas","Marketing del futuro","Solo para Amazon"],
                correct: 1,
                explanation: "Predictive marketing: el modelo analiza historial y comportamiento para identificar quién tiene mayor probabilidad de comprar y cuándo, activando campañas en el momento perfecto."
            },
            {
                id: 15,
                question: "¿Cuál es la métrica más importante al automatizar marketing con IA?",
                options: ["Número de herramientas usadas","El ROI (retorno sobre inversión) de la automatización: revenue generado vs coste de la herramienta y tiempo","Solo los seguidores","Solo los opens de email"],
                correct: 1,
                explanation: "El ROI valida la inversión en IA marketing. Si una herramienta de 200€/mes genera 2000€ extras en ventas, el ROI es 10x. Sin esta métrica, no puedes justificar ni escalar."
            }
        ]
    },
    "ia-diseno": {
        title: "Examen Final: IA para Diseñadores",
        description: "Evalúa tus conocimientos del curso \"IA para Diseñadores\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Para qué sirve Adobe Firefly en design workflows?",
                options: ["Solo para filtros básicos","Para generar y editar imágenes con IA directamente en Photoshop/Illustrator, integrado en el flujo creativo de Adobe","Solo para videos","Para crear PDFs"],
                correct: 1,
                explanation: "Adobe Firefly está integrado en la suite Adobe: Generative Fill en Photoshop, Text to Vector en Illustrator, Generate en Express — IA directamente en tus herramientas habituales."
            },
            {
                id: 12,
                question: "¿Qué es 'Uizard' o 'Galileo AI' para diseñadores?",
                options: ["Herramientas de animación","IAs que convierten bocetos o descripciones de texto en wireframes y prototipos de UI/UX funcionales","Editores de imagen","Gestores de proyectos"],
                correct: 1,
                explanation: "Uizard y Galileo AI transforman bocetos rough o prompts de texto en wireframes y diseños de UI/UX completos, acelerando dramáticamente las fases de ideación."
            },
            {
                id: 13,
                question: "¿Cómo puede la IA ayudar en la creación de sistemas de diseño?",
                options: ["No puede ayudar con sistemas","Generando paletas de color coherentes, sugiriendo tipografías armónicas y creando variantes de componentes automáticamente","Solo para logos","Solo para iconos"],
                correct: 1,
                explanation: "La IA puede generar sistemas completos: Khroma o Coolors para paletas, Fontpair para tipografías, Midjourney para moodboards y GPT-4 para documentar las guías de estilo."
            },
            {
                id: 14,
                question: "¿Qué ventaja da la IA en la creación de contenido para redes sociales?",
                options: ["Ninguna real","Generar decenas de variantes de un post (diferentes formatos, colores, textos) en minutos para A/B testing continuo","Solo para grandes marcas","Solo para diseñadores senior"],
                correct: 1,
                explanation: "Con IA en Canva o Adobe Express, puedes generar 20 variaciones de un post en minutos: diferentes paletas, composiciones, textos — y probar qué funciona mejor con tu audiencia."
            },
            {
                id: 15,
                question: "¿Cuál es el impacto de la IA en la profesional del diseño?",
                options: ["Sustituirá completamente a los diseñadores","Los diseñadores que usan IA producen más en menos tiempo; los que no la usan corren el riesgo de ser menos competitivos","No tiene ningún impacto","Solo afecta al diseño gráfico"],
                correct: 1,
                explanation: "La IA no reemplaza el criterio estético ni la dirección creativa humana, pero sí automatiza tareas repetitivas. El diseñador IA augmented produce más con misma calidad."
            }
        ]
    },
    "ia-educacion": {
        title: "Examen Final: IA para Educadores",
        description: "Evalúa tus conocimientos del curso \"IA para Educadores\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué es el 'adaptive learning' con IA?",
                options: ["Aprender a programar IA","Sistemas educativos que ajustan el contenido, ritmo y dificultad según el desempeño y estilo de aprendizaje de cada estudiante","Clases grabadas","Solo plataformas de pago"],
                correct: 1,
                explanation: "El aprendizaje adaptativo (Khan Academy, apps educativas) usa IA para personalizar la experiencia: si fallas en álgebra, el sistema te da más práctica específica en ese punto débil."
            },
            {
                id: 12,
                question: "¿Cómo puede un docente usar IA para crear material didáctico?",
                options: ["No puede","ChatGPT puede generar ejercicios, rúbricas, explicaciones diferenciadas, casos prácticos y evaluaciones en el tiempo que tardaba uno solo","Solo para corrección","Solo para niños"],
                correct: 1,
                explanation: "Un docente con IA multiplica su producción: genera 20 ejercicios de distintas dificultades, crea explicaciones en 3 niveles de complejidad, diseña proyectos y rubrica criterios."
            },
            {
                id: 13,
                question: "¿Qué es un 'tutor IA personalizado'?",
                options: ["Un robot físico","Un sistema de IA que responde dudas, explica conceptos, adapta el nivel y hace seguimiento del progreso del estudiante 24/7","Una app de flashcards","Solo para matemáticas"],
                correct: 1,
                explanation: "Un tutor IA (Khanmigo, Socratic by Google) orienta sin dar la respuesta directamente: hace preguntas socráticamente, identifica el punto de confusión y personaliza la explicación."
            },
            {
                id: 14,
                question: "¿Cuál es el riesgo del uso de IA en educación para los estudiantes?",
                options: ["Que la IA cometa errores","Dependencia excesiva que impide desarrollar habilidades de pensamiento crítico y resolución autónoma de problemas","Que sea muy cara","Que no hable español"],
                correct: 1,
                explanation: "El mayor riesgo es la dependencia: si los estudiantes usan IA para pensar en lugar de pensar ellos mismos, no desarrollan capacidad crítica, memoria ni resolución autónoma."
            },
            {
                id: 15,
                question: "¿Cómo detectar el uso deshonesto de IA en trabajos académicos?",
                options: ["Es imposible detectarlo","Con herramientas como Turnitin AI, GPTZero o simplemente diseñando evaluaciones que requieran conocimiento personal verificable","Solo leyendo con atención","Solo preguntando al alumno"],
                correct: 1,
                explanation: "GPTZero y Turnitin AI detectan patrones del texto IA. Pero la solución más efectiva es rediseñar las evaluaciones: proyectos personales, reflexiones aplicadas o presentaciones orales."
            }
        ]
    },
    "ia-escritores": {
        title: "Examen Final: IA para Escritores y Creadores de Contenido",
        description: "Evalúa tus conocimientos del curso \"IA para Escritores y Creadores de Contenido\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Cómo superar el 'bloqueo del escritor' con IA?",
                options: ["Esperar a la inspiración","Usando prompts generadores de ideas: 'Dame 10 ángulos diferentes de este tema' o 'Propón un gancho inicial impactante'","Solo escribiendo más","Tomando café"],
                correct: 1,
                explanation: "La IA es perfecta para el bloqueo: genera 10 posibles aperturas, desarrolla un esquema detallado o te sugiere ángulos que nunca habrías considerado — rompiendo la parálisis."
            },
            {
                id: 12,
                question: "¿Qué es el 'ghostwriting' asistido por IA?",
                options: ["Escribir sobre fantasmas","Crear contenido escrito a nombre de un cliente usando IA como asistente, manteniendo su voz y estilo únicos","Solo para blogs","Escribir anónimamente"],
                correct: 1,
                explanation: "El ghostwriting IA: primero captura la voz del cliente (ejemplos reales), luego usa IA para generar borradores en ese estilo, que el cliente revisa y publica como suyo."
            },
            {
                id: 13,
                question: "¿Cómo puede la IA ayudar a escribir una novela?",
                options: ["No puede ayudar con ficción","Desarrollando tramas, perfiles de personajes, diálogos, descripciones y superando bloqueos creativos en cada capítulo","Escribiendo toda la novela sola","Solo para escaletas de cine"],
                correct: 1,
                explanation: "La IA en ficción: desarrolla personajes con profundidad psicológica, genera diálogos en el tono del personaje, sugiere giros de trama y ayuda a mantener coherencia en series largas."
            },
            {
                id: 14,
                question: "¿Qué herramienta IA es mejor para ensayos y artículos de fondo?",
                options: ["Solo correctores ortográficos","Claude de Anthropic es especialmente bueno para textos largos, argumentativos y con alta coherencia y precisión factual","Solo ChatGPT","Solo Google Docs"],
                correct: 1,
                explanation: "Claude destaca en textos de profundidad: mantiene coherencia en artículos largos, es más cuidadoso con las afirmaciones factuales y tiene un estilo más matizado para ensayos."
            },
            {
                id: 15,
                question: "¿Cómo usar la IA para adaptar un mismo contenido a diferentes formatos?",
                options: ["Rehacerlo todo manualmente","Partiendo del texto original: 'Convierte este artículo en hilo de Twitter', 'En script de podcast', 'En post de LinkedIn'","Solo para blogs","Requiere herramientas especiales"],
                correct: 1,
                explanation: "Un solo artículo se puede convertir en: hilo de Twitter (bullets impactantes), post LinkedIn (reflexión profesional), script de podcast (tono conversacional) y newsletter en minutos."
            }
        ]
    },
    "ia-emprendedores": {
        title: "Examen Final: IA para Emprendedores",
        description: "Evalúa tus conocimientos del curso \"IA para Emprendedores\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Cómo puede la IA ayudar a validar una idea de startup?",
                options: ["No puede ayudar en validación","Analizando tendencias de mercado, identificando competidores, generando hipótesis de cliente y simulando entrevistas","Solo construyendo el producto","Solo con datos de mercado pagos"],
                correct: 1,
                explanation: "ChatGPT puede simular entrevistas con clientes objetivo, analizar competidores, identificar riesgos y generar el business model canvas — todo antes de escribir una línea de código."
            },
            {
                id: 12,
                question: "¿Cómo crear un plan de negocio con IA?",
                options: ["No se puede hacer con IA","Usando ChatGPT para generar secciones (mercado, competencia, modelo de ingresos, proyecciones) y refinando con datos reales","Delegando todo a la IA","Solo con consultoras caras"],
                correct: 1,
                explanation: "La IA genera el esqueleto: análisis de mercado, propuesta de valor, modelo de negocio, estrategia de go-to-market. Tú añades los datos reales y el conocimiento profundo del sector."
            },
            {
                id: 13,
                question: "¿Qué es un 'AI-first product'?",
                options: ["Un producto que solo funciona online","Producto donde la IA es el componente central del valor (no un añadido), como ChatGPT, Midjourney o Cursor","Una tienda online","Un producto de hardware"],
                correct: 1,
                explanation: "AI-first: la IA no es un feature adicional sino el núcleo del valor. El producto no existiría o sería radicalmente peor sin la IA. Opuesto a 'añadir IA a algo ya existente'."
            },
            {
                id: 14,
                question: "¿Cómo escalar operaciones de una startup con IA?",
                options: ["Contratando más personal siempre","Automatizando soporte al cliente, onboarding, generación de contenido y análisis de datos para que el equipo pequeño opere como uno grande","Solo con inversión","Solo en fase de crecimiento"],
                correct: 1,
                explanation: "Startups early-stage usan IA para operar 'above their weight': un equipo de 5 con IA puede producir lo que requería un equipo de 20, manteniendo costes bajos en fases críticas."
            },
            {
                id: 15,
                question: "¿Cuál es el mayor error del emprendedor al adoptar IA?",
                options: ["Usarla demasiado","Adoptar demasiadas herramientas sin integrarlas en procesos claros, creando caos tecnológico sin beneficio real","Esperar demasiado para usarla","Solo usarla para marketing"],
                correct: 1,
                explanation: "'Tool fever': acumular 20 herramientas IA sin implementarlas correctamente. El error es coleccionar en lugar de implementar. Menos herramientas, mejor integradas, con métricas de impacto."
            }
        ]
    },
    "ia-rrhh": {
        title: "Examen Final: IA para Recursos Humanos",
        description: "Evalúa tus conocimientos del curso \"IA para Recursos Humanos\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué es el 'screening automático' de CVs con IA?",
                options: ["Eliminar candidatos al azar","Usar IA para analizar y puntuar CVs según criterios definidos, reduciendo el tiempo de selección inicial","Solo para grandes empresas","Descartar sin leer"],
                correct: 1,
                explanation: "El screening IA (HireVue, Workday) analiza CVs según competencias requeridas, puntuando candidatos objetivamente. Puede procesar miles en minutos, pero requiere criterios bien definidos para evitar sesgos."
            },
            {
                id: 12,
                question: "¿Cómo puede la IA mejorar la experiencia del empleado?",
                options: ["Solo con encuestas anuales","Chatbots IA de RRHH que responden dudas 24/7 sobre nóminas, beneficios, políticas y peticiones sin esperar al departamento","Solo con más reuniones","Reduciendo el equipo"],
                correct: 1,
                explanation: "Chatbots de RRHH (como ServiceNow AI o Moveworks) responden el 80% de preguntas frecuentes en segundos, liberando al equipo de RRHH para trabajo estratégico."
            },
            {
                id: 13,
                question: "¿Qué es el análisis predictivo de rotación de empleados?",
                options: ["Tablas de rotación manual","Usar ML para identificar empleados con riesgo de abandonar la empresa, permitiendo intervención proactiva","Solo para grandes empresas","Solo para ventas"],
                correct: 1,
                explanation: "Modelos ML analizan factores como satisfacción, engagement, compensación y patrones de comportamiento para predecir quién puede irse, activando acciones de retención a tiempo."
            },
            {
                id: 14,
                question: "¿Cómo usar IA en la formación y desarrollo de talento?",
                options: ["Solo con videoconferencias","Personalizando rutas de aprendizaje, generando contenido formativo adaptado y midiendo el progreso de competencias","Solo con formaciones presenciales","No aplica en RRHH"],
                correct: 1,
                explanation: "Plataformas como Cornerstone o 360Learning usan IA para recomendar formaciones personalizadas, generar contenido adaptado al nivel y medir el desarrollo de competencias clave."
            },
            {
                id: 15,
                question: "¿Cuál es la consideración ética más importante al usar IA en RRHH?",
                options: ["El coste de la herramienta","Garantizar que los sistemas no discriminen por género, edad, raza u otras características protegidas al evaluar candidatos","La velocidad del proceso","La interfaz de usuario"],
                correct: 1,
                explanation: "La IA en RRHH puede escalar sesgos: si los datos históricos reflejan discriminación, el modelo perpetuará esos patrones. Requiere auditorías continuas de sesgo y supervisión humana en decisiones clave."
            }
        ]
    },
    "ia-ventas": {
        title: "Examen Final: IA para Ventas",
        description: "Evalúa tus conocimientos del curso \"IA para Ventas\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué es el 'lead scoring' con IA?",
                options: ["Calificar prospectos manualmente","Modelos ML que asignan automáticamente puntuación a cada lead según probabilidad de conversión, priorizando esfuerzos del equipo","Una hoja de Excel","Solo para grandes CRMs"],
                correct: 1,
                explanation: "El lead scoring IA (Salesforce Einstein, HubSpot AI) analiza comportamiento web, interacciones y perfil para puntuar automáticamente qué prospectos tienen mayor probabilidad de cerrar."
            },
            {
                id: 12,
                question: "¿Cómo puede la IA personalizar propuestas comerciales?",
                options: ["Enviando la misma propuesta a todos","Analizando el perfil, industria y puntos de dolor del cliente para generar propuestas con lenguaje, casos y números relevantes para cada uno","Solo con templates","Solo para grandes cuentas"],
                correct: 1,
                explanation: "Con IA, cada propuesta se personaliza en segundos: ajusta el lenguaje al sector, incluye casos de éxito de su industria, calcula ROI específico para su tamaño de empresa."
            },
            {
                id: 13,
                question: "¿Qué es el 'sales forecasting' con IA?",
                options: ["Una predicción del tiempo","Usar ML para predecir con mayor precisión los ingresos futuros analizando el pipeline, historial y factores externos","Solo reportes de Excel","Solo para directores de ventas"],
                correct: 1,
                explanation: "El forecasting IA analiza el pipeline actual, velocidad de cierre histórica, estacionalidad y factores externos para predecir ingresos con mayor precisión que los métodos tradicionales."
            },
            {
                id: 14,
                question: "¿Cómo usa la IA para mejorar las llamadas de ventas?",
                options: ["Grabando sin permiso","Gong.io o Chorus analizan llamadas reales, identifican qué funciona y qué no, y dan coaching específico a cada vendedor","Solo transcribiendo","Solo para entrenamiento inicial"],
                correct: 1,
                explanation: "Herramientas como Gong transcriben, analizan sentimiento, detectan objeciones y comparan las llamadas del vendedor con las de top performers, dando feedback accionable."
            },
            {
                id: 15,
                question: "¿Cuál es la IA más útil para la prospección en ventas B2B?",
                options: ["Solo LinkedIn manual","Clay.com o Apollo.io con IA que enriquece datos de prospectos, personaliza mensajes de outreach y automatiza secuencias de contacto","Solo cold calling","Solo ferias y eventos"],
                correct: 1,
                explanation: "Clay.com usa IA para enriquecer datos de prospectos (tecnología que usan, noticias recientes, cargo) y genera mensajes hiperpersonalizados para cada contacto — multiplicando el outreach."
            }
        ]
    },
    "ia-abogados": {
        title: "Examen Final: IA para Profesionales del Derecho",
        description: "Evalúa tus conocimientos del curso \"IA para Profesionales del Derecho\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué es el 'contract review' automatizado con IA?",
                options: ["Firmar contratos automáticamente","Analizar contratos para identificar cláusulas de riesgo, inconsistencias y términos inusuales en segundos","Solo para contratos simples","Reemplazar abogados completamente"],
                correct: 1,
                explanation: "Herramientas como Kira, Luminance o LexCheck analizan contratos, señalan cláusulas problemáticas, comparan con los estándares de la firma y resumen los puntos clave de cada acuerdo."
            },
            {
                id: 12,
                question: "¿Cómo puede la IA ayudar en la investigación jurídica?",
                options: ["Reemplazando LEXis completamente","Acelerando la búsqueda de jurisprudencia relevante, resumiendo sentencias y encontrando precedentes aplicables en minutos","Solo para búsquedas simples","Solo para derecho anglosajón"],
                correct: 1,
                explanation: "Herramientas como Harvey AI o Casetext (GPT-4 integrado) encuentran jurisprudencia relevante 10x más rápido, resumen sentencias extensas y extraen los principios aplicables al caso."
            },
            {
                id: 13,
                question: "¿Qué es la 'due diligence' asistida por IA?",
                options: ["Una revisión manual","El proceso de analizar grandes volúmenes de documentos en operaciones M&A o litigation usando IA para encontrar datos críticos","Solo para fusiones grandes","Solo para auditores"],
                correct: 1,
                explanation: "En M&A, la due diligence requiere revisar miles de documentos. La IA analiza todos en paralelo, identifica riesgos (cláusulas de cambio de control, contingencias ocultas) y los organiza por importancia."
            },
            {
                id: 14,
                question: "¿Cuál es el riesgo principal al usar IA generativa en práctica legal?",
                options: ["Que sea muy lenta","Las 'alucinaciones': la IA puede citar casos inexistentes o atribuir holding incorrecto a sentencias reales","Que sea muy cara","Que el cliente no la acepte"],
                correct: 1,
                explanation: "El caso Mata v. Avianca (2023): abogados presentaron citas de ChatGPT de casos inexistentes. La IA puede inventar jurisprudencia convincente. Siempre verifica CADA cita en bases de datos reales."
            },
            {
                id: 15,
                question: "¿Cuál es el uso más ético y seguro de la IA en la abogacía?",
                options: ["Usarla para todo sin revisar","Como asistente para tareas de investigación, redacción de borradores y análisis, con revisión humana experta de TODOS los outputs","Para reemplazar consultores","Solo para tareas administrativas"],
                correct: 1,
                explanation: "La IA jurídica funciona mejor como asistente bajo supervisión: acelera investigación y drafting, pero el abogado siempre verifica, valida y asume responsabilidad profesional total del resultado."
            }
        ]
    },
    "ia-salud": {
        title: "Examen Final: IA para Profesionales de Salud",
        description: "Evalúa tus conocimientos del curso \"IA para Profesionales de Salud\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Qué es el diagnóstico asistido por IA en radiología?",
                options: ["Una opinión de segunda","Sistemas que analizan imágenes médicas (rayos X, TAC, MRI) para detectar anomalías con alta precisión como asistencia al radiólogo","Sustituir al médico completamente","Solo para hospitales grandes"],
                correct: 1,
                explanation: "Herramientas como Aidoc o Enlitic analizan imágenes médicas, señalan áreas de interés y priorizan los casos urgentes. Actúan como control de calidad, no como sustituto del especialista."
            },
            {
                id: 12,
                question: "¿Cómo puede la IA ayudar en la gestión de pacientes crónicos?",
                options: ["Solo recordatorios de medicación básicos","Monitorizando datos continuos (wearables), prediciendo descompensaciones, personalizando planes de tratamiento y alertando al médico","Solo para hospitales","Reemplazando al médico de cabecera"],
                correct: 1,
                explanation: "Sistemas como Livongo o WellDoc monitorizan continuamente, detectan patrones de riesgo antes de que empeoren y generan recomendaciones personalizadas para pacientes diabetes, cardíacos, etc."
            },
            {
                id: 13,
                question: "¿Qué es el 'drug discovery' acelerado con IA?",
                options: ["Venta de medicamentos online","Usar ML para identificar moléculas candidatas a nuevos fármacos y simular su comportamiento, reduciendo el tiempo de desarrollo","Un tipo de base de datos","Solo para laboratorios farmacéuticos grandes"],
                correct: 1,
                explanation: "AlphaFold (DeepMind) resolvió el problema del plegamiento de proteínas. Empresas como Insilico Medicine usan IA para identificar targets y diseñar moléculas candidatas en semanas, no años."
            },
            {
                id: 14,
                question: "¿Cuál es la regulación clave para IA en dispositivos médicos en España/UE?",
                options: ["No hay regulación específica","El Reglamento de Dispositivos Médicos (MDR) y el AI Act aplican a sistemas IA de diagnóstico como dispositivos de alto riesgo","Solo cumplir GDPR","Solo si es cirugía"],
                correct: 1,
                explanation: "La IA de diagnóstico médico cae bajo MDR (como dispositivo médico) y el AI Act (como sistema IA de alto riesgo). Requiere validación clínica, marcado CE y auditorías regulares."
            },
            {
                id: 15,
                question: "¿Cuál es la prioridad ética en IA de salud?",
                options: ["La velocidad del sistema","La privacidad de los datos del paciente y garantizar que el sistema IA no agrava desigualdades en el acceso a salud de calidad","La interfaz visual","El coste de la herramienta"],
                correct: 1,
                explanation: "Los datos de salud son los más sensibles. Además, los sistemas IA de salud no deben funcionar peor para grupos subrepresentados en los datos de entrenamiento, perpetuando desigualdades sanitarias."
            }
        ]
    },
    "ia-freelancers": {
        title: "Examen Final: IA para Freelancers",
        description: "Evalúa tus conocimientos del curso \"IA para Freelancers\"",
        passingScore: 80,
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
            },
            {
                id: 11,
                question: "¿Cómo puede la IA ayudar a gestionar múltiples clientes como freelancer?",
                options: ["No puede ayudar en gestión","Automatizando seguimiento de proyectos, generando reportes de progreso, respondiendo emails de estado y organizando el trabajo","Solo con hojas de cálculo","Solo agencias grandes"],
                correct: 1,
                explanation: "La IA automatiza la gestión: usa Notion AI para seguimiento, Claude para redactar actualizaciones de estado, Zapier para recordatorios automáticos y GPT para escribir propuestas en segundos."
            },
            {
                id: 12,
                question: "¿Cómo fijar tarifas competitivas usando datos de mercado con IA?",
                options: ["Solo mirando Upwork","ChatGPT puede analizar el mercado de tu especialidad, sugerir tarifas según experiencia y servicio, y justificar tu propuesta de valor","Solo copiando a competidores","Solo con coaches de negocio"],
                correct: 1,
                explanation: "Pide a ChatGPT: 'Soy diseñador UX, 3 años de experiencia, especializado en SaaS, basándome en el mercado actual, ¿qué tarifa por hora es competitiva y cómo la justifico?'"
            },
            {
                id: 13,
                question: "¿Qué servicios IA tienen mayor demanda para freelancers en 2024?",
                options: ["Solo diseño gráfico básico","Automatización de procesos, creación de chatbots, prompt engineering, optimización SEO con IA y consultoría de adopción","Solo traducción","Solo diseño web"],
                correct: 1,
                explanation: "Los servicios de mayor crecimiento: automatización (ROI claro para empresas), chatbots de negocio, contenido a escala con IA y formación en adopción de IA dentro de empresas."
            },
            {
                id: 14,
                question: "¿Cómo construir un portafolio IA como freelancer sin clientes previos?",
                options: ["Esperar a tener clientes","Crear entre 3-5 proyectos personales que demuestren skills: automatización de un proceso real, chatbot para un nicho, análisis de datos con IA","Solo con certificaciones","Solo con estudios formales"],
                correct: 1,
                explanation: "Proyectos personales que demuestren skills concretos: automatiza tu propia gestión de facturas, crea un chatbot FAQ para una asociación local, analiza datos públicos con IA + visualización."
            },
            {
                id: 15,
                question: "¿Cómo puede la IA ayudar a conseguir más reseñas y referencias de clientes?",
                options: ["No puede ayudar en esto","Automatizando el seguimiento post-proyecto con mensajes personalizados, simplificando el proceso de dejar reseñas y midiendo la satisfacción","Solo emails manuales","Solo para plataformas grandes"],
                correct: 1,
                explanation: "Configura: Zapier + GPT genera mensaje de cierre de proyecto personalizado, envía link directo a la reseña y hace seguimiento automático si no responde. Las referencias se multiplican cuando el proceso es fácil."
            }
        ]
    }
};

/** Obtener quiz de un curso */
export function getCourseQuiz(courseId) {
    return COURSE_QUIZZES[courseId] || null;
}
