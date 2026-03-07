/* ═══════════════════════════════════════════════════════════
   COURSE LESSON CONTENT - IAFACIL.HELP
   Contenido especializado por leccion - 25 cursos, 216 lecciones
   Cada leccion con contenido unico, ejemplos y prompts reales
   ═══════════════════════════════════════════════════════════ */

export const COURSE_LESSONS = {

    /* ═══════════════════════════════════════════
       CURSO 1: intro-ia
       ¿Que es la Inteligencia Artificial?
       Nivel: Principiante | 8 lecciones
       ═══════════════════════════════════════════ */
    "intro-ia": {
        "que-es-ia": {
            "id": "que-es-ia",
            "title": "¿Que es la Inteligencia Artificial?",
            "moduleTitle": "Fundamentos de IA",
            "durationMinutes": 12,
            "summary": "La Inteligencia Artificial es la capacidad de las maquinas para realizar tareas que normalmente requieren inteligencia humana: entender lenguaje, reconocer imagenes, tomar decisiones y aprender de la experiencia. En esta leccion descubriras que hay detras de la IA que ya usas a diario sin darte cuenta, desde el autocompletado de tu movil hasta las recomendaciones de Netflix.",
            "objectives": [
                "Definir que es la Inteligencia Artificial en terminos simples y distinguirla de la programacion tradicional.",
                "Identificar al menos 5 ejemplos de IA que ya utilizas en tu vida cotidiana.",
                "Comprender la diferencia entre IA estrecha (la que existe hoy) e IA general (la del futuro)."
            ],
            "sections": [
                {
                    "heading": "¿Que es realmente la IA?",
                    "content": "La Inteligencia Artificial es un campo de la informatica que busca crear sistemas capaces de realizar tareas que requieren inteligencia humana. A diferencia de un programa tradicional donde un programador escribe reglas exactas (si pasa X, haz Y), la IA aprende patrones a partir de datos. Imagina la diferencia: un programa clasico de spam tiene reglas fijas como 'si contiene la palabra gratis, es spam'. Un sistema de IA analiza miles de correos spam y aprende a detectar patrones por si mismo, incluso combinaciones que ningun humano habria programado."
                },
                {
                    "heading": "Los tres ingredientes de la IA moderna",
                    "content": "Toda IA moderna necesita tres cosas: datos (la materia prima de la que aprende), algoritmos (las recetas matematicas que procesan esos datos) y capacidad de computo (los ordenadores potentes que ejecutan los calculos). Cuando ChatGPT te responde, esta usando un modelo entrenado con billones de textos de internet (datos), arquitectura Transformer (algoritmo) y miles de GPUs trabajando en paralelo (computo). Esta combinacion es lo que ha permitido el salto espectacular de la IA en los ultimos anos."
                },
                {
                    "heading": "IA en tu dia a dia: ya la usas sin saberlo",
                    "content": "Cada vez que desbloqueas tu movil con la cara usas IA de reconocimiento facial. Cuando Google Maps te sugiere la ruta mas rapida, usa IA para predecir el trafico. El corrector ortografico de tu teclado, las recomendaciones de Spotify, los filtros de Instagram, el traductor de Google... todo funciona con IA. La diferencia ahora es que herramientas como ChatGPT, Claude o Gemini te permiten interactuar directamente con la IA mediante texto, dandote un poder que antes solo tenian los programadores."
                },
                {
                    "heading": "Lo que la IA puede y no puede hacer (hoy)",
                    "content": "La IA actual es increiblemente buena en tareas especificas: escribir textos, generar imagenes, traducir idiomas, analizar datos y reconocer patrones. Pero no piensa, no siente, no tiene conciencia ni comprension real del mundo. Cuando ChatGPT escribe un poema, no siente emociones; predice la siguiente palabra mas probable basandose en patrones estadisticos. Entender esta distincion es fundamental para usar la IA de forma efectiva y no atribuirle capacidades que no tiene."
                }
            ],
            "activity": "Abre tu movil y haz una lista de todas las apps que usas a diario. Para cada una, investiga si utiliza IA y para que. Objetivo: identificar al menos 10 usos de IA en tu vida cotidiana que no conocias.",
            "deliverable": "Lista documentada de 10+ aplicaciones con IA que usas, explicando que tipo de IA emplea cada una y para que sirve.",
            "checklist": [
                "Se definir IA en mis propias palabras sin usar jerga tecnica.",
                "Puedo explicar la diferencia entre programacion tradicional e IA.",
                "Identifique al menos 10 usos de IA en mi vida diaria.",
                "Entiendo que la IA actual no piensa ni tiene conciencia."
            ],
            "promptStarter": "Actua como un divulgador de tecnologia que explica conceptos complejos de forma simple. Explicame que es la Inteligencia Artificial como si tuviera 10 anos, usando analogias con cosas cotidianas. Incluye 5 ejemplos de IA que un nino usaria sin saberlo.",
            "promptExamples": [
                {
                    "title": "Entender IA con analogias",
                    "prompt": "Explicame la diferencia entre un programa informatico tradicional y la inteligencia artificial usando la analogia de aprender a cocinar. El programa seria como seguir una receta al pie de la letra, y la IA seria como..."
                },
                {
                    "title": "Detectar IA oculta",
                    "prompt": "Soy un usuario comun de smartphone. Analiza estas apps que uso a diario y dime exactamente donde hay IA funcionando sin que yo lo sepa: WhatsApp, Google Maps, Instagram, Spotify, Gmail, TikTok. Para cada una, explica que tipo de IA usa y que hace."
                },
                {
                    "title": "Desmitificar la IA",
                    "prompt": "Dame una lista de 5 mitos comunes sobre la Inteligencia Artificial y desmiente cada uno con hechos reales y explicaciones simples. Formato: Mito → Realidad → Por que importa saberlo."
                }
            ]
        },
        "historia-ia": {
            "id": "historia-ia",
            "title": "Historia de la IA: De Turing a ChatGPT",
            "moduleTitle": "Fundamentos de IA",
            "durationMinutes": 15,
            "summary": "La IA no nacio con ChatGPT. Su historia abarca mas de 70 anos, desde Alan Turing preguntandose si las maquinas pueden pensar hasta el lanzamiento de GPT-4. Conocer esta historia te ayudara a entender por que la IA funciona como funciona hoy y hacia donde va.",
            "objectives": [
                "Conocer los hitos fundamentales en la historia de la IA desde 1950 hasta hoy.",
                "Entender por que hubo 'inviernos de la IA' (periodos donde se freno su desarrollo).",
                "Comprender que cambio tecnologico provoco la explosion actual de la IA generativa."
            ],
            "sections": [
                {
                    "heading": "1950-1970: El nacimiento y los suenos",
                    "content": "En 1950, Alan Turing publico su famoso articulo '¿Pueden pensar las maquinas?' y propuso el Test de Turing: si no puedes distinguir si hablas con una maquina o un humano, la maquina es inteligente. En 1956, en la conferencia de Dartmouth, se acuno oficialmente el termino 'Inteligencia Artificial'. Los primeros investigadores eran increiblemente optimistas: predijeron que en 20 anos tendriamos maquinas tan inteligentes como humanos. Se crearon programas que jugaban ajedrez y resolvian problemas logicos, pero pronto descubrieron que el lenguaje humano y el sentido comun eran mucho mas dificiles de lo esperado."
                },
                {
                    "heading": "1970-2000: Los inviernos y la perseverancia",
                    "content": "Cuando las promesas no se cumplieron, llego el primer 'invierno de la IA' (anos 70): los gobiernos cortaron la financiacion porque la tecnologia no cumplia expectativas. En los 80 hubo un renacer con los 'sistemas expertos' (programas con reglas escritas por humanos), pero volvieron a decepcionar. El segundo invierno llego en los 90. Sin embargo, durante estos periodos de bajo perfil, investigadores persistentes desarrollaron las bases matematicas que hoy hacen posible ChatGPT: las redes neuronales artificiales, inspiradas en como funcionan las neuronas del cerebro humano."
                },
                {
                    "heading": "2010-2022: Deep Learning y la revolucion silenciosa",
                    "content": "En 2012, una red neuronal llamada AlexNet arraso en un concurso de reconocimiento de imagenes, demostrando que el Deep Learning funcionaba. Google, Facebook y Amazon empezaron a invertir miles de millones. En 2017, Google publico el paper 'Attention Is All You Need', presentando la arquitectura Transformer, la base de GPT, BERT y todos los modelos de lenguaje actuales. La clave fue combinar tres factores que no existian antes: internet genero cantidades masivas de datos, las GPUs (tarjetas graficas) aportaron la potencia de calculo necesaria, y los algoritmos Transformer supieron aprovechar ambos."
                },
                {
                    "heading": "2022-Hoy: La era de la IA generativa",
                    "content": "El 30 de noviembre de 2022, OpenAI lanzo ChatGPT y todo cambio. En 5 dias alcanzo un millon de usuarios, el crecimiento mas rapido de la historia. Despues vinieron GPT-4, Claude de Anthropic, Gemini de Google, Llama de Meta, DALL-E, Midjourney y Stable Diffusion. Por primera vez, cualquier persona sin conocimientos tecnicos puede crear textos, imagenes, musica y video con IA. Estamos viviendo el momento mas transformador de la tecnologia desde la aparicion de internet, y apenas estamos en el principio."
                }
            ],
            "activity": "Crea una linea temporal visual de la historia de la IA pidiendo a ChatGPT que te la genere en formato de tabla. Luego pidele que anada un evento personal para cada decada: algo que existia en tu vida gracias a la IA de esa epoca.",
            "deliverable": "Linea temporal de la IA con al menos 10 hitos clave, cada uno explicado en una frase y conectado con un impacto practico en la vida cotidiana.",
            "checklist": [
                "Puedo nombrar al menos 5 hitos clave en la historia de la IA.",
                "Entiendo que son los 'inviernos de la IA' y por que ocurrieron.",
                "Se explicar que es la arquitectura Transformer y por que importa.",
                "Comprendo por que 2022 fue el punto de inflexion con ChatGPT."
            ],
            "promptStarter": "Actua como un historiador de la tecnologia. Creame una linea temporal interactiva de la historia de la Inteligencia Artificial desde 1950 hasta 2025, con los 15 hitos mas importantes. Para cada hito incluye: ano, evento, por que fue importante, y como afecta a la IA que usamos hoy. Formato tabla.",
            "promptExamples": [
                {
                    "title": "Comparar eras de IA",
                    "prompt": "Compara la IA de los anos 90 (sistemas expertos) con la IA actual (modelos de lenguaje). Que podia hacer cada una, que no podia, y cual fue el cambio tecnologico clave que permitio el salto. Explicalo como una conversacion entre un investigador de 1995 y uno de 2025."
                },
                {
                    "title": "Entender Transformers sin tecnicismos",
                    "prompt": "Explicame la arquitectura Transformer (la base de ChatGPT) como si fuera una cadena de montaje en una fabrica. Que entra, que hace cada estacion de trabajo, y que sale al final. Sin formulas matematicas, solo analogias."
                },
                {
                    "title": "Velocidad del cambio",
                    "prompt": "Creame una tabla comparativa que muestre cuanto tardo cada tecnologia en alcanzar 100 millones de usuarios: telefono, internet, Facebook, Instagram, ChatGPT. Anade una columna explicando que dice esto sobre la velocidad de adopcion de la IA."
                }
            ]
        },
        "tipos-ia": {
            "id": "tipos-ia",
            "title": "Tipos de Inteligencia Artificial",
            "moduleTitle": "Fundamentos de IA",
            "durationMinutes": 12,
            "summary": "No toda la IA es igual. Existen diferentes tipos segun su capacidad, su funcion y como aprenden. Entender estas categorias te ayudara a elegir la herramienta correcta para cada tarea y a no esperar de la IA mas de lo que puede ofrecer hoy.",
            "objectives": [
                "Distinguir entre IA estrecha, IA general y superinteligencia.",
                "Conocer los principales enfoques de IA: supervisado, no supervisado y por refuerzo.",
                "Clasificar las herramientas de IA actuales segun su tipo y especialidad."
            ],
            "sections": [
                {
                    "heading": "IA estrecha vs. IA general: donde estamos realmente",
                    "content": "Toda la IA que existe hoy es IA estrecha (ANI): sistemas excelentes en una tarea especifica pero incapaces de transferir ese conocimiento a otra area. ChatGPT es brillante generando texto pero no puede conducir un coche. DALL-E crea imagenes impresionantes pero no entiende lo que dibuja. La IA General (AGI) seria una maquina que aprende y razona como un humano en cualquier area, y aun no existe. La superinteligencia (ASI), una IA que supere al humano en todo, es especulacion a largo plazo. Cuando usas herramientas de IA hoy, recuerda: son especialistas muy capaces, no generalistas."
                },
                {
                    "heading": "Como aprende la IA: tres caminos diferentes",
                    "content": "El aprendizaje supervisado es como ensenar con ejemplos etiquetados: le muestras miles de fotos de gatos diciendo 'esto es un gato' hasta que aprende a reconocerlos. Gmail detecta spam asi. El aprendizaje no supervisado busca patrones ocultos en datos sin etiquetar: Spotify agrupa canciones similares sin que nadie le diga que generos existen. El aprendizaje por refuerzo aprende por prueba y error con recompensas: asi se entreno AlphaGo para vencer al campeon mundial de Go. Los modelos de lenguaje como GPT usan principalmente aprendizaje auto-supervisado, prediciendo la siguiente palabra."
                },
                {
                    "heading": "Mapa de herramientas de IA por tipo",
                    "content": "Las IAs de texto (ChatGPT, Claude, Gemini) generan y comprenden lenguaje escrito. Las IAs de imagen (DALL-E, Midjourney, Stable Diffusion) crean graficos a partir de descripciones. Las IAs de audio (Whisper, ElevenLabs, Suno) transcriben, generan voz y crean musica. Las IAs de video (Runway, Pika, HeyGen) producen y editan video. Las IAs de codigo (GitHub Copilot, Cursor) ayudan a programar. Y las IAs multimodales (GPT-4o, Gemini) combinan varias capacidades. Cada tipo tiene fortalezas distintas y la clave esta en saber que herramienta usar para cada necesidad."
                },
                {
                    "heading": "Modelos propietarios vs. codigo abierto",
                    "content": "Los modelos propietarios (GPT-4 de OpenAI, Claude de Anthropic, Gemini de Google) son de pago, ofrecen alto rendimiento y se acceden via API o interfaz web. Los modelos de codigo abierto (Llama de Meta, Mistral, Stable Diffusion) son gratuitos, modificables y se pueden ejecutar en tu propio ordenador. La eleccion depende de tus necesidades: los propietarios son mas faciles de usar y suelen ser mas potentes, mientras que los de codigo abierto ofrecen privacidad y personalizacion. Para empezar, recomendamos los propietarios por su facilidad de uso."
                }
            ],
            "activity": "Crea una tabla comparativa de al menos 8 herramientas de IA que conozcas, clasificandolas por tipo (texto, imagen, audio, video, codigo), modelo de negocio (gratis/pago), y para que las usarias tu personalmente.",
            "deliverable": "Tabla comparativa de herramientas de IA clasificadas por tipo, con al menos una herramienta recomendada para cada categoria y un caso de uso personal.",
            "checklist": [
                "Distingo claramente entre IA estrecha, general y superinteligencia.",
                "Puedo explicar los tres tipos de aprendizaje automatico con ejemplos.",
                "Conozco al menos 2 herramientas de IA para cada categoria (texto, imagen, audio).",
                "Entiendo la diferencia entre modelos propietarios y de codigo abierto."
            ],
            "promptStarter": "Actua como un consultor de tecnologia. Necesito elegir herramientas de IA para mi trabajo. Creame una guia comparativa de las mejores herramientas de IA en 2025 organizadas por categoria: texto, imagen, audio, video y codigo. Para cada una incluye: nombre, que hace, precio, nivel de dificultad y mejor caso de uso. Formato tabla.",
            "promptExamples": [
                {
                    "title": "Elegir la IA correcta",
                    "prompt": "Tengo estas tareas pendientes en mi trabajo: 1) Escribir emails profesionales, 2) Crear graficos para redes sociales, 3) Transcribir reuniones, 4) Analizar datos de ventas. Para cada tarea, recomiendame la mejor herramienta de IA (gratuita y de pago), explicando por que."
                },
                {
                    "title": "Entender aprendizaje automatico",
                    "prompt": "Explicame los tres tipos de aprendizaje automatico (supervisado, no supervisado y por refuerzo) usando la analogia de un nino aprendiendo a andar en bicicleta. Hazlo visual y facil de recordar."
                },
                {
                    "title": "Codigo abierto vs propietario",
                    "prompt": "Soy un emprendedor con presupuesto limitado. Comparame las opciones de IA gratuitas/abiertas vs de pago para: generacion de texto, imagenes y transcripcion. Incluye pros, contras y recomendacion honesta."
                }
            ]
        },
        "ia-en-tu-vida": {
            "id": "ia-en-tu-vida",
            "title": "La IA en tu vida cotidiana",
            "moduleTitle": "Fundamentos de IA",
            "durationMinutes": 10,
            "summary": "La IA no es solo ChatGPT. Esta presente en cada momento de tu dia: desde que tu alarma inteligente decide cuando despertarte hasta que Netflix te sugiere que ver antes de dormir. En esta leccion haras un recorrido por un dia tipico para descubrir toda la IA invisible que ya te rodea.",
            "objectives": [
                "Mapear al menos 15 puntos de contacto con IA en un dia normal.",
                "Entender como la IA personaliza tu experiencia digital sin que lo notes.",
                "Reflexionar sobre las implicaciones de depender de algoritmos de IA."
            ],
            "sections": [
                {
                    "heading": "Tu manana con IA",
                    "content": "Tu despertador inteligente analiza tus ciclos de sueno para despertarte en el momento optimo. Al revisar el movil, el algoritmo de tu email ya filtro el spam y priorizo los mensajes importantes. El teclado predictivo te ahorra tiempo escribiendo mensajes. Google Maps calcula tu ruta usando IA que predice el trafico en tiempo real combinando datos historicos, accidentes reportados y velocidad de otros conductores. Incluso el cafe de tu cafetera inteligente se preparo a la hora que la IA aprendio que lo prefieres."
                },
                {
                    "heading": "Tu jornada laboral asistida por IA",
                    "content": "En el trabajo, la IA esta en todas partes aunque no la veas. El corrector gramatical de Word o Google Docs usa modelos de lenguaje. Las videollamadas de Zoom usan IA para cancelar el ruido de fondo y mejorar tu imagen. Los buscadores internos de tu empresa priorizan resultados con IA. Si trabajas con Excel, las sugerencias de formulas y graficos las genera IA. Y si usas algun CRM como Salesforce, los puntajes de leads y predicciones de ventas son pura inteligencia artificial."
                },
                {
                    "heading": "Tu tiempo libre: entretenimiento algoritmico",
                    "content": "Spotify crea tu playlist Discover Weekly analizando tus gustos y comparandolos con millones de usuarios similares. Netflix selecciona que miniatura mostrarte de una pelicula segun tu historial (si te gustan las comedias romanticas, te muestra la escena romantica; si prefieres accion, la escena de accion). TikTok e Instagram usan IA para decidir que contenido aparece en tu feed. Los videojuegos modernos usan IA para adaptar la dificultad a tu nivel. Incluso los filtros de fotos que usas son redes neuronales procesando tu imagen en tiempo real."
                },
                {
                    "heading": "Reflexion: ¿Comodidad o dependencia?",
                    "content": "Esta omnipresencia de la IA tiene beneficios enormes: ahorra tiempo, personaliza experiencias y aumenta tu productividad. Pero tambien plantea preguntas importantes. Los algoritmos crean 'burbujas de filtro' mostrandote solo lo que quieres ver. Tu atencion se ha convertido en una mercancia que la IA optimiza para las plataformas. Conocer donde esta la IA te da poder: puedes decidir conscientemente que automatizaciones te benefician y cuales te limitan. Eso es ser un usuario inteligente de la IA."
                }
            ],
            "activity": "Documenta un dia completo anotando cada vez que interactuas con IA (directa o indirectamente). Usa la tecnica de diario: desde que te levantas hasta que te acuestas, apunta app/dispositivo, tipo de IA y que beneficio te da.",
            "deliverable": "Diario de un dia con IA: documento con al menos 15 interacciones con IA identificadas, clasificadas por momento del dia, tipo de IA y nivel de utilidad.",
            "checklist": [
                "Identifique al menos 15 interacciones con IA en mi dia a dia.",
                "Puedo explicar como la IA personaliza mi experiencia en redes sociales.",
                "Reflexione sobre que automatizaciones me benefician y cuales no.",
                "Comprendo el concepto de 'burbuja de filtro' y como afecta mi informacion."
            ],
            "promptStarter": "Actua como un investigador de tecnologia cotidiana. Hazme un recorrido hora por hora de un dia tipico de una persona promedio en 2025, senalando CADA punto donde interactua con IA sin saberlo. Desde las 7:00 hasta las 23:00. Para cada momento incluye: hora, actividad, IA involucrada y que hace exactamente esa IA.",
            "promptExamples": [
                {
                    "title": "Auditar tu huella de IA",
                    "prompt": "Estas son las apps que tengo instaladas en mi movil: [lista tus apps]. Analiza cada una y dime: 1) Si usa IA, 2) Que tipo de IA, 3) Que datos mios necesita para funcionar, 4) Que alternativa sin IA existe. Formato tabla."
                },
                {
                    "title": "Burbuja de filtro personal",
                    "prompt": "Explicame como los algoritmos de recomendacion de YouTube, TikTok e Instagram crean una burbuja de filtro personalizada para mi. Dame 5 estrategias practicas para 'romper la burbuja' y exponerme a contenido diverso."
                },
                {
                    "title": "IA invisible en el hogar",
                    "prompt": "Tengo estos dispositivos en casa: movil, smart TV, asistente de voz, router WiFi, aspiradora robot. Creame un informe de toda la IA que funciona en mi hogar: que hace, que datos recopila y como me beneficia. Se honesto sobre los riesgos de privacidad tambien."
                }
            ]
        },
        "que-es-IA-generativa": {
            "id": "que-es-IA-generativa",
            "title": "¿Que es la IA Generativa?",
            "moduleTitle": "IA Generativa",
            "durationMinutes": 14,
            "summary": "La IA Generativa es la rama de la inteligencia artificial capaz de crear contenido nuevo: textos, imagenes, musica, video y codigo. Es lo que diferencia a ChatGPT de una busqueda en Google. Esta leccion te ensenara como funciona esta tecnologia revolucionaria y por que ha cambiado las reglas del juego.",
            "objectives": [
                "Definir IA generativa y diferenciarla de la IA discriminativa/analitica.",
                "Entender el concepto basico de como un modelo generativo crea contenido nuevo.",
                "Conocer las principales aplicaciones y limitaciones de la IA generativa."
            ],
            "sections": [
                {
                    "heading": "Generativa vs. discriminativa: crear vs. clasificar",
                    "content": "Imagina dos tipos de estudiantes de arte. El primero puede mirar un cuadro y decirte si es de Picasso o Monet (IA discriminativa/analitica). El segundo puede pintar un cuadro nuevo al estilo de Picasso (IA generativa). Antes de 2022, la mayoria de la IA comercial era discriminativa: clasificaba emails como spam, detectaba fraudes o reconocia caras. La IA generativa da un salto cualitativo: no solo analiza, sino que crea contenido original. ChatGPT genera textos, DALL-E genera imagenes, Suno genera musica. Todo desde cero, a partir de tus instrucciones."
                },
                {
                    "heading": "Como crea contenido la IA: la magia de la prediccion",
                    "content": "El secreto de la IA generativa es sorprendentemente simple: prediccion estadistica a gran escala. Cuando ChatGPT escribe, no 'piensa' en que decir; predice cual es la siguiente palabra mas probable dado todo lo anterior. Es como un autocompletado superinteligente entrenado con todo internet. DALL-E funciona diferente: parte de ruido aleatorio (como nieve de television) y va eliminando ruido paso a paso, guiado por tu descripcion, hasta formar una imagen coherente. Este proceso se llama difusion. Ambos enfoques producen resultados que parecen creativos pero son fundamentalmente predicciones matematicas sofisticadas."
                },
                {
                    "heading": "Que puede crear la IA generativa hoy",
                    "content": "Texto: articulos, emails, codigo, guiones, poesia, analisis, traducciones (ChatGPT, Claude, Gemini). Imagenes: fotografias, ilustraciones, logos, arte conceptual desde descripciones textuales (DALL-E, Midjourney, Stable Diffusion). Audio: musica completa, voces sinteticas, podcast (Suno, ElevenLabs, Murf). Video: clips cortos, avatares parlantes, animaciones (Runway, Pika, HeyGen). Codigo: aplicaciones completas, scripts, sitios web (GitHub Copilot, Cursor, Replit). La tendencia es hacia modelos multimodales que combinan todas estas capacidades en uno solo, como GPT-4o."
                },
                {
                    "heading": "Limitaciones que debes conocer",
                    "content": "La IA generativa 'alucina': inventa datos falsos con total confianza. No tiene acceso a informacion despues de su fecha de entrenamiento (salvo que navegue por internet). Genera contenido basado en patrones estadisticos, no en comprension real, asi que puede ser plausible pero incorrecto. El contenido generado puede contener sesgos presentes en los datos de entrenamiento. Y aunque genera contenido 'nuevo', en realidad recombina patrones existentes, lo que plantea debates sobre originalidad y derechos de autor. Conocer estas limitaciones es clave para usar la IA de forma responsable y efectiva."
                }
            ],
            "activity": "Genera el mismo contenido con tres herramientas distintas de IA generativa (por ejemplo, pide a ChatGPT, Gemini y Claude que escriban un email profesional con las mismas instrucciones). Compara los resultados y analiza las diferencias en estilo, calidad y precision.",
            "deliverable": "Documento comparativo con los tres resultados generados, un analisis de diferencias y una conclusion sobre que herramienta prefieres para ese tipo de tarea.",
            "checklist": [
                "Se explicar la diferencia entre IA generativa y discriminativa.",
                "Entiendo como ChatGPT genera texto (prediccion de siguiente palabra).",
                "Conozco al menos una herramienta de IA generativa para cada tipo de contenido.",
                "Puedo nombrar 3 limitaciones importantes de la IA generativa."
            ],
            "promptStarter": "Explicame como funciona la IA generativa como si fuera una fabrica. El texto que le doy es la orden de trabajo, y el resultado es el producto final. Describeme paso a paso que pasa dentro de la fabrica desde que recibe mi orden hasta que entrega el resultado. Usa la analogia completa con departamentos, trabajadores y control de calidad.",
            "promptExamples": [
                {
                    "title": "Comparar IAs generativas",
                    "prompt": "Necesito crear un post de LinkedIn anunciando un nuevo producto. Escribe 3 versiones diferentes: una formal y corporativa, una casual y cercana, y una creativa con storytelling. Cada version debe tener maximo 150 palabras y un call-to-action."
                },
                {
                    "title": "Entender las alucinaciones",
                    "prompt": "Dame 5 ejemplos reales de situaciones donde la IA generativa puede alucinar (inventar informacion falsa) y explicame para cada caso: por que ocurre, como detectarlo, y como prevenirlo con mejor prompting."
                },
                {
                    "title": "IA generativa para principiantes",
                    "prompt": "Soy completamente nuevo en IA generativa. Creame un plan de 7 dias (una actividad por dia) para probar diferentes tipos de IA generativa: texto, imagen, audio, video y codigo. Para cada dia incluye: herramienta gratuita, que probar, y un prompt de ejemplo."
                }
            ]
        },
        "modelos-lenguaje": {
            "id": "modelos-lenguaje",
            "title": "Modelos de Lenguaje: GPT, Claude, Gemini y mas",
            "moduleTitle": "IA Generativa",
            "durationMinutes": 15,
            "summary": "Los modelos de lenguaje grande (LLM) son el motor detras de ChatGPT, Claude y Gemini. Entender que son, como funcionan y en que se diferencian te permitira elegir el mejor para cada tarea y sacarles el maximo partido.",
            "objectives": [
                "Comprender que es un LLM y como genera lenguaje natural.",
                "Comparar los principales modelos de lenguaje del mercado y sus fortalezas.",
                "Saber elegir el modelo correcto segun el tipo de tarea."
            ],
            "sections": [
                {
                    "heading": "¿Que es un modelo de lenguaje grande (LLM)?",
                    "content": "Un LLM es una red neuronal gigantesca entrenada con enormes cantidades de texto para entender y generar lenguaje humano. GPT-4 tiene mas de un billon de parametros (valores numericos ajustados durante el entrenamiento). Estos parametros codifican patrones del lenguaje: gramatica, hechos, estilos de escritura y razonamiento logico. Cuando le escribes un prompt, el modelo procesa cada palabra, aplica atencion a las partes relevantes del contexto y genera la respuesta mas probable. Es como un lector que ha leido todo internet y puede escribir sobre cualquier tema imitando patrones aprendidos."
                },
                {
                    "heading": "Los grandes modelos de 2025",
                    "content": "GPT-4/4o de OpenAI: el mas versatil, excelente en razonamiento, codigo y creatividad; accesible via ChatGPT. Claude 3.5/4 de Anthropic: destaca en textos largos, analisis de documentos y seguir instrucciones complejas; conocido por ser mas preciso y menos dado a alucinar. Gemini de Google: potente en multimodalidad e integracion con servicios Google; buena opcion para busqueda y datos. Llama de Meta: el mejor modelo de codigo abierto, gratuito y modificable. Mistral: modelo europeo ligero con excelente rendimiento. Cada uno tiene personalidad y fortalezas propias."
                },
                {
                    "heading": "Diferencias practicas que importan",
                    "content": "Ventana de contexto: la cantidad de texto que el modelo puede recordar en una conversacion. Claude lidera con 200K tokens (un libro completo), GPT-4 ofrece 128K y Gemini hasta 1M tokens. Conocimiento de corte: cada modelo tiene una fecha limite de conocimiento. Velocidad: modelos mas pequenos como GPT-4o mini responden mas rapido pero con menos calidad. Precio: varia enormidad entre modelos; ChatGPT Free usa GPT-4o mini, mientras GPT-4o requiere suscripcion. Para la mayoria de tareas cotidianas, cualquier modelo top funciona bien; las diferencias importan en tareas especializadas."
                },
                {
                    "heading": "Elegir el modelo segun la tarea",
                    "content": "Para escritura creativa y brainstorming: ChatGPT o Claude. Para analisis de documentos largos: Claude (por su ventana de contexto). Para busqueda de informacion actualizada: Gemini con Google Search. Para programacion: GPT-4 o Claude. Para tareas que requieren privacidad: Llama (ejecutable localmente). Para presupuesto limitado: ChatGPT free, Gemini free o Perplexity. La mejor estrategia es conocer 2-3 modelos y saber cuando usar cada uno, en lugar de casarse con uno solo."
                }
            ],
            "activity": "Haz la misma pregunta compleja a ChatGPT, Claude y Gemini (ejemplo: 'Explicame la inflacion y como afecta mis ahorros'). Compara las respuestas evaluando: precision, facilidad de lectura, ejemplos proporcionados y utilidad practica.",
            "deliverable": "Tabla comparativa de los tres modelos con evaluacion en 5 criterios (precision, claridad, utilidad, creatividad, longitud) puntuados del 1 al 5, mas una conclusion personal.",
            "checklist": [
                "Puedo explicar que es un LLM en mis propias palabras.",
                "Conozco al menos 5 modelos de lenguaje y sus diferencias clave.",
                "Se elegir el modelo adecuado segun el tipo de tarea.",
                "He probado y comparado al menos 2 modelos diferentes."
            ],
            "promptStarter": "Actua como un analista de tecnologia. Hazme una comparativa honesta y actualizada de los 5 mejores modelos de lenguaje de IA en 2025: GPT-4o, Claude 3.5, Gemini, Llama 3, Mistral. Para cada uno incluye: creador, precio, ventana de contexto, fortalezas, debilidades y mejor caso de uso. Formato tabla comparativa.",
            "promptExamples": [
                {
                    "title": "Test de capacidades",
                    "prompt": "Voy a hacerte un test de capacidades. Resuelve estas 5 tareas y sere honesto sobre la calidad: 1) Resume este parrafo en una frase, 2) Traduce al ingles formal, 3) Encuentra el error logico en este argumento: [argumento], 4) Escribe un haiku sobre tecnologia, 5) Explica blockchain a un nino de 8 anos."
                },
                {
                    "title": "Guia de seleccion de modelo",
                    "prompt": "Soy profesional de marketing y necesito IA para: copywriting, analisis de datos de campanas, crear imagenes para redes, generar reportes. Con un presupuesto de 30€/mes, recomiendame las mejores suscripciones de IA combinadas."
                },
                {
                    "title": "Entender tokens y contexto",
                    "prompt": "Explicame que son los 'tokens' en un LLM como si fuera un sistema de creditos en un videojuego. Como se cuentan, por que importan, cuantos tokens tiene una pagina de texto y como afecta a mis conversaciones con ChatGPT."
                }
            ]
        },
        "modelos-imagen": {
            "id": "modelos-imagen",
            "title": "Modelos de generacion de imagenes",
            "moduleTitle": "IA Generativa",
            "durationMinutes": 14,
            "summary": "DALL-E, Midjourney y Stable Diffusion han democratizado la creacion visual. En esta leccion entenderas como estos modelos convierten texto en imagenes, que diferencia a cada uno y como elegir el adecuado para tu proyecto.",
            "objectives": [
                "Entender el mecanismo basico de difusion que usan los generadores de imagenes.",
                "Comparar DALL-E, Midjourney, Stable Diffusion y otras herramientas.",
                "Escribir un primer prompt efectivo para generar imagenes con IA."
            ],
            "sections": [
                {
                    "heading": "Como la IA convierte texto en imagenes",
                    "content": "Los modelos de imagen actuales usan un proceso llamado difusion. Imagina que tomas una foto y le vas anadiendo ruido aleatorio hasta que queda como nieve de television. El modelo aprende a hacer el proceso inverso: partir del ruido y eliminar gradualmente hasta formar una imagen coherente. Tu prompt de texto guia este proceso de eliminacion de ruido, indicandole al modelo que debe aparecer en la imagen final. Es como un escultor que parte de un bloque de marmol (ruido) y va quitando material guiado por tu descripcion hasta revelar la figura deseada."
                },
                {
                    "heading": "DALL-E: la opcion integrada de ChatGPT",
                    "content": "DALL-E (de OpenAI) esta integrado directamente en ChatGPT Plus, lo que lo hace el mas accesible. Genera imagenes fotorealistas y artisticas con buena comprension del lenguaje en espanol. Destaca en seguir instrucciones complejas y generar texto dentro de imagenes (algo que otros modelos hacen mal). Limitaciones: menor control sobre parametros artisticos que Midjourney, y la version gratuita tiene generaciones limitadas. Es ideal para quien ya usa ChatGPT y necesita imagenes rapidas sin salir de la herramienta."
                },
                {
                    "heading": "Midjourney: el rey de la estetica",
                    "content": "Midjourney produce las imagenes mas esteticas y artisticas del mercado. Sus resultados tienen un estilo visual impactante incluso con prompts simples. Funciona a traves de Discord (que puede resultar confuso al principio) y tiene varias versiones (la V6 es la mas reciente). Ofrece parametros avanzados para controlar el estilo, la composicion y la aleatoriedad. Es el favorito de disenadores, artistas y creadores de contenido visual. Su principal limitacion es que no tiene plan gratuito y requiere usar Discord."
                },
                {
                    "heading": "Stable Diffusion y alternativas gratuitas",
                    "content": "Stable Diffusion es el modelo de codigo abierto mas popular: gratuito, se puede ejecutar en tu propio ordenador y es completamente personalizable. Plataformas como Leonardo.ai, Playground y Adobe Firefly lo hacen accesible sin necesidad tecnica. Flux (de Black Forest Labs) es otra alternativa de codigo abierto con excelente calidad. Ideogram destaca en generar texto dentro de imagenes. Para empezar gratis, Leonardo.ai y Bing Image Creator (que usa DALL-E) son las mejores opciones. La clave esta en experimentar con varias para descubrir cual se adapta mejor a tu estilo."
                }
            ],
            "activity": "Genera la misma imagen usando tres herramientas diferentes (DALL-E en ChatGPT, Leonardo.ai y Bing Image Creator) con el mismo prompt: 'Una cafeteria acogedora en un dia lluvioso, estilo acuarela'. Compara calidad, estilo y fidelidad al prompt.",
            "deliverable": "Coleccion de 3 imagenes generadas con el mismo prompt en diferentes herramientas, con analisis comparativo de calidad, estilo y facilidad de uso.",
            "checklist": [
                "Entiendo el concepto basico de difusion en generacion de imagenes.",
                "Conozco las diferencias entre DALL-E, Midjourney y Stable Diffusion.",
                "He generado mi primera imagen con IA usando un prompt descriptivo.",
                "Se que herramienta gratuita usar para generar imagenes."
            ],
            "promptStarter": "Genera una imagen de un espacio de trabajo moderno y minimalista con un ordenador portatil, una taza de cafe humeante, una planta pequena y luz natural entrando por una ventana. Estilo fotografia editorial, colores calidos, alta resolucion.",
            "promptExamples": [
                {
                    "title": "Prompt basico de imagen",
                    "prompt": "Un gato naranja dormido sobre una pila de libros antiguos en una biblioteca victoriana. Luz de velas, atmosfera acogedora, estilo pintura al oleo clasica."
                },
                {
                    "title": "Imagen para negocio",
                    "prompt": "Crea una fotografia profesional de producto: un frasco de crema facial sobre una superficie de marmol blanco con ramitas de lavanda al lado. Fondo minimalista, iluminacion de estudio suave, estilo revista de belleza."
                },
                {
                    "title": "Estilo especifico",
                    "prompt": "Un paisaje urbano futurista de una ciudad con jardines verticales y coches voladores, al atardecer. Estilo de ilustracion de ciencia ficcion retro de los anos 80, colores neon pastel, perspectiva gran angular."
                }
            ]
        },
        "futuro-ia": {
            "id": "futuro-ia",
            "title": "El futuro de la IA: tendencias y predicciones",
            "moduleTitle": "IA Generativa",
            "durationMinutes": 12,
            "summary": "La IA avanza a velocidad vertiginosa. En esta leccion exploraremos las tendencias que definiran los proximos anos: agentes autonomos, IA multimodal, personalizacion extrema y el impacto en el empleo. Preparate para lo que viene.",
            "objectives": [
                "Identificar las 5 tendencias mas importantes en IA para los proximos anos.",
                "Comprender que son los agentes de IA y por que cambiaran todo.",
                "Desarrollar una mentalidad de aprendizaje continuo para adaptarse a los cambios."
            ],
            "sections": [
                {
                    "heading": "Agentes de IA: de asistentes a ejecutores",
                    "content": "La proxima gran revolucion de la IA son los agentes autonomos: sistemas que no solo responden preguntas sino que ejecutan tareas complejas de forma independiente. Imagina decirle a un agente 'Organizame un viaje a Barcelona para 4 personas el proximo fin de semana con presupuesto de 800 euros' y que el agente busque vuelos, reserve hotel, planifique actividades y te envie el itinerario completo. OpenAI, Google y Anthropic ya estan desarrollando estos agentes. La transicion sera de 'la IA como herramienta' a 'la IA como companero de trabajo autonomo'."
                },
                {
                    "heading": "IA multimodal: un modelo para todo",
                    "content": "Los modelos del futuro no seran especialistas en texto O imagen O audio. Seran multimodales nativos: entenderan y generaran cualquier tipo de contenido simultaneamente. GPT-4o ya puede ver, escuchar y hablar. Gemini procesa texto, imagen, audio y video en una sola consulta. La tendencia es hacia modelos que funcionen como un asistente humano que puede ver tu pantalla, escuchar tu voz, leer documentos y generar cualquier formato de salida. Esto eliminara la necesidad de usar herramientas separadas para cada tipo de contenido."
                },
                {
                    "heading": "Personalizacion: tu IA, tus reglas",
                    "content": "El futuro de la IA es personal. Los Custom GPTs de OpenAI y los proyectos de Claude ya permiten crear versiones personalizadas de la IA. Pero esto ira mucho mas alla: tendras un asistente de IA que conoce tu estilo de escritura, tus preferencias, tu historial de trabajo y tu contexto personal. Sera como un asistente ejecutivo que te conoce profundamente. Los modelos locales (que corren en tu dispositivo) permitiran esta personalizacion con privacidad total. Apple ya ha dado pasos con Apple Intelligence ejecutandose en tu iPhone."
                },
                {
                    "heading": "Que significa esto para tu carrera",
                    "content": "La IA no va a reemplazar a las personas, pero las personas que usen IA reemplazaran a las que no la usen. Las habilidades mas valiosas del futuro seran: saber comunicarte con IA (prompt engineering), evaluar criticamente las salidas de IA, combinar creatividad humana con eficiencia artificial, y adaptarte continuamente a nuevas herramientas. El mejor momento para empezar a dominar la IA fue hace dos anos. El segundo mejor momento es ahora. Este curso es tu primer paso en esa direccion."
                }
            ],
            "activity": "Escribe una carta a tu 'yo del futuro' dentro de 2 anos describiendo como crees que usaras la IA en tu trabajo y vida personal. Luego, pide a ChatGPT que analice tu prediccion y te sugiera areas que no has considerado.",
            "deliverable": "Carta personal con predicciones de uso de IA + analisis de ChatGPT con sugerencias adicionales + plan de accion de 3 pasos para prepararte.",
            "checklist": [
                "Puedo nombrar 5 tendencias clave en el futuro de la IA.",
                "Entiendo que son los agentes de IA y su potencial.",
                "He reflexionado sobre como la IA impactara mi carrera.",
                "Tengo un plan basico para mantenerme actualizado en IA."
            ],
            "promptStarter": "Actua como un futurista experto en tecnologia. Necesito que me hagas un analisis de las tendencias mas disruptivas en IA para los proximos 3 anos (2025-2028). Para cada tendencia incluye: que es, por que importa, como afectara a profesionales no tecnicos, y un ejemplo concreto de como se usara. Incluye al menos 7 tendencias.",
            "promptExamples": [
                {
                    "title": "Impacto en mi profesion",
                    "prompt": "Soy [tu profesion]. Analiza honestamente como la IA afectara mi trabajo en los proximos 3 anos. Que tareas se automatizaran, que habilidades nuevas necesitare, y que oportunidades nuevas se crearan. Se realista, no alarmista ni optimista en exceso."
                },
                {
                    "title": "Plan de aprendizaje continuo",
                    "prompt": "Creame un plan de aprendizaje de IA de 12 meses para un profesional que ya conoce los basicos de ChatGPT. Mes a mes, que deberia aprender, que herramientas dominar, y que proyectos hacer para mantenerme actualizado sin abrumarme."
                },
                {
                    "title": "Agentes de IA en la practica",
                    "prompt": "Dame 5 ejemplos concretos de como los agentes de IA autonomos cambiaran tareas cotidianas de trabajo: gestion de email, planificacion de proyectos, investigacion de mercado, atencion al cliente y gestion financiera. Para cada ejemplo, describeme el antes (como se hace hoy) y el despues (como lo hara un agente de IA)."
                }
            ]
        }
    },

    /* ═══════════════════════════════════════════
       CURSO 2: chatgpt-basico
       ChatGPT desde cero
       Nivel: Principiante | 10 lecciones
       ═══════════════════════════════════════════ */
    "chatgpt-basico": {
        "crear-cuenta": {
            "id": "crear-cuenta",
            "title": "Crear tu cuenta en ChatGPT",
            "moduleTitle": "Primeros pasos",
            "durationMinutes": 8,
            "summary": "Todo empieza aqui. En esta leccion aprenderas a crear tu cuenta en ChatGPT paso a paso, entenderas las diferencias entre la version gratuita y ChatGPT Plus, y configuraras tu perfil para obtener respuestas personalizadas desde el primer dia.",
            "objectives": [
                "Crear una cuenta en ChatGPT y configurar el perfil personalizado.",
                "Entender las diferencias entre ChatGPT Free, Plus, Pro y la API.",
                "Configurar las instrucciones personalizadas para mejorar las respuestas."
            ],
            "sections": [
                {
                    "heading": "Registro paso a paso",
                    "content": "Ve a chat.openai.com y haz clic en 'Sign up'. Puedes registrarte con tu email, tu cuenta de Google, Microsoft o Apple. Recomendacion: usa tu email personal primero para experimentar libremente. Tras verificar tu correo, tendras acceso inmediato a ChatGPT con el modelo GPT-4o mini (gratuito). No necesitas tarjeta de credito ni datos de pago para empezar. El plan gratuito incluye acceso a GPT-4o con limites de uso, generacion de imagenes limitada y acceso basico a los GPTs de la tienda."
                },
                {
                    "heading": "Free vs Plus vs Pro: ¿cual necesito?",
                    "content": "ChatGPT Free te da acceso a GPT-4o mini y acceso limitado a GPT-4o: perfecto para empezar y aprender. ChatGPT Plus (20$/mes) ofrece GPT-4o sin restricciones, DALL-E para imagenes, analisis de datos, navegacion web y acceso prioritario. ChatGPT Pro (200$/mes) incluye el modelo o1 completo con razonamiento avanzado para tareas complejas. Recomendacion: empieza con Free para aprender, sube a Plus cuando notes que necesitas mas generaciones o funciones avanzadas. La API es para desarrolladores y tiene precios por uso."
                },
                {
                    "heading": "Configura tus instrucciones personalizadas",
                    "content": "Este es el truco que el 90% de usuarios no conoce. Ve a Configuracion > Personalizacion > Instrucciones personalizadas. Aqui puedes decirle a ChatGPT quien eres y como quieres que responda. En '¿Que te gustaria que ChatGPT supiera de ti?' escribe tu profesion, ubicacion y contexto. En '¿Como te gustaria que ChatGPT respondiera?' define el tono, idioma y formato. Ejemplo: 'Soy community manager en Madrid. Responde siempre en espanol de Espana, con tono profesional pero cercano, y da ejemplos practicos.' Esto mejora drasticamente la calidad de las respuestas."
                },
                {
                    "heading": "Primeras configuraciones esenciales",
                    "content": "Activa el modo oscuro si trabajas muchas horas (Configuracion > General). En Privacidad, decide si quieres que tus conversaciones se usen para entrenar el modelo (puedes desactivarlo). Explora la opcion de Memoria: cuando esta activa, ChatGPT recuerda detalles de conversaciones anteriores. Crea tu primera carpeta de conversaciones para organizar por temas. Y lo mas importante: la app movil de ChatGPT es igual de potente que la web, con la ventaja de poder usar voz. Instalala para tener la IA siempre contigo."
                }
            ],
            "activity": "Crea tu cuenta en ChatGPT, configura tus instrucciones personalizadas con tu perfil real (profesion, estilo preferido de respuesta) y haz tu primera pregunta de prueba para verificar que la personalizacion funciona.",
            "deliverable": "Cuenta de ChatGPT creada y configurada con instrucciones personalizadas + captura o texto de tu primera conversacion personalizada.",
            "checklist": [
                "Tengo mi cuenta creada y verificada en ChatGPT.",
                "Configure mis instrucciones personalizadas con mi perfil.",
                "Entiendo las diferencias entre los planes Free y Plus.",
                "Instale la app movil de ChatGPT."
            ],
            "promptStarter": "Hola ChatGPT, acabo de crear mi cuenta. Soy [tu profesion] y quiero aprender a usarte de forma efectiva. Dame 5 cosas que deberia configurar o saber como usuario nuevo para sacarle el maximo provecho desde el primer dia.",
            "promptExamples": [
                {
                    "title": "Configurar instrucciones personalizadas",
                    "prompt": "Necesito ayuda para escribir mis instrucciones personalizadas de ChatGPT. Soy [profesion] en [ciudad]. Mis tareas principales son [tareas]. Prefiero respuestas en [estilo]. Redactame unas instrucciones personalizadas optimizadas para mi perfil."
                },
                {
                    "title": "Evaluar si necesito Plus",
                    "prompt": "Uso ChatGPT para: [lista tus usos]. Gasto aproximadamente [tiempo] al dia. Explicame honestamente si me conviene pagar ChatGPT Plus o si puedo funcionar bien con la version gratuita. Lista pros y contras para mi caso especifico."
                },
                {
                    "title": "Tour de funcionalidades",
                    "prompt": "Actua como un guia turistico de ChatGPT. Dame un tour completo de todas tus funcionalidades actuales, incluyendo las que la mayoria de usuarios no conoce. Para cada funcion, dame un ejemplo practico de como usarla."
                }
            ]
        },
        "interfaz": {
            "id": "interfaz",
            "title": "Dominando la interfaz de ChatGPT",
            "moduleTitle": "Primeros pasos",
            "durationMinutes": 10,
            "summary": "La interfaz de ChatGPT esconde muchas funciones que la mayoria ignora. Aprender a navegar eficientemente, organizar conversaciones y usar atajos te ahorrara horas de trabajo cada semana.",
            "objectives": [
                "Dominar todas las funciones de la interfaz de ChatGPT web y movil.",
                "Organizar conversaciones con carpetas y nombres descriptivos.",
                "Usar funciones avanzadas: editar mensajes, regenerar respuestas y compartir chats."
            ],
            "sections": [
                {
                    "heading": "Anatomia de la interfaz",
                    "content": "La barra lateral izquierda contiene tu historial de conversaciones, busqueda, y carpetas de organizacion. El area central es tu espacio de conversacion. En el campo de texto inferior puedes escribir, adjuntar archivos (imagenes, PDFs, documentos), buscar en la web o seleccionar un GPT especializado. Arriba del chat puedes cambiar el modelo (GPT-4o, GPT-4o mini, o1). El icono de usuario arriba a la derecha da acceso a configuracion, plan y personalizacion."
                },
                {
                    "heading": "Funciones ocultas que debes conocer",
                    "content": "Editar mensajes previos: haz clic en el icono de lapiz en cualquier mensaje tuyo para reescribirlo sin empezar de cero; ChatGPT regenerara la respuesta desde ese punto. Regenerar respuesta: el icono de recargar genera una respuesta alternativa a tu mismo prompt. Compartir conversacion: crea un enlace para compartir un chat completo con otras personas. Modo canvas: disponible para escritura y codigo, abre un editor lateral donde puedes colaborar con ChatGPT en documentos. Buscar en historial: usa el buscador para encontrar conversaciones antiguas por palabras clave."
                },
                {
                    "heading": "Organizacion como un profesional",
                    "content": "Crea carpetas por proyecto o tema: 'Trabajo', 'Personal', 'Aprendizaje', etc. Renombra cada conversacion con un titulo descriptivo (haz clic en el nombre para editarlo). Archiva conversaciones terminadas para mantener limpia tu barra lateral. Consejo profesional: inicia cada nueva tarea en una conversacion nueva. Mezclar temas en un mismo chat confunde al modelo y reduce la calidad de respuestas. ChatGPT funciona mejor con conversaciones enfocadas en un solo tema."
                },
                {
                    "heading": "ChatGPT en el movil: voz y camara",
                    "content": "La app movil anade dos superpoderes: entrada por voz y camara. El modo de voz avanzado permite conversaciones naturales habladas con la IA, ideal para brainstorming mientras caminas o conduces. La camara te permite tomar una foto de cualquier cosa (un problema matematico, una planta, un menu en otro idioma) y preguntar sobre ella. Puedes fotografiar documentos, capturas de pantalla o productos y pedir analisis instantaneo. La experiencia movil es especialmente potente para traducciones en tiempo real y consultas rapidas mientras estas fuera del escritorio."
                }
            ],
            "activity": "Organiza tu ChatGPT creando al menos 3 carpetas tematicas. Practica las funciones ocultas: edita un mensaje previo, regenera una respuesta para comparar, y comparte un chat con alguien. Si tienes la app, prueba el modo voz y la camara.",
            "deliverable": "ChatGPT organizado con carpetas tematicas + prueba documentada de al menos 3 funciones avanzadas (editar, regenerar, compartir).",
            "checklist": [
                "Conozco todas las areas principales de la interfaz.",
                "Cree carpetas para organizar mis conversaciones.",
                "Practique editar mensajes y regenerar respuestas.",
                "Probe la funcion de voz o camara en el movil."
            ],
            "promptStarter": "Voy a hacer un test de tus capacidades. Primero, explicame algo en un formato lista con emojis. Luego voy a editar mi mensaje para pedirtelo en formato tabla. Quiero ver como cambian tus respuestas. Empieza: Dame las 5 mejores practicas de productividad personal.",
            "promptExamples": [
                {
                    "title": "Probar regeneracion",
                    "prompt": "Escribe un eslogan creativo para una tienda online de ropa sostenible. (Despues de recibir la respuesta, usa el boton de regenerar 3 veces y compara los resultados)"
                },
                {
                    "title": "Probar adjuntos",
                    "prompt": "(Adjunta una foto de tu escritorio o un documento) Analiza esta imagen/documento y dame 5 observaciones utiles sobre lo que ves. Se detallado y practica."
                },
                {
                    "title": "Probar modo Canvas",
                    "prompt": "Abre canvas y ayudame a redactar un email profesional solicitando una reunion con un cliente potencial. Quiero que sea corto, personalizado y con un call-to-action claro."
                }
            ]
        },
        "primera-consulta": {
            "id": "primera-consulta",
            "title": "Tu primera consulta efectiva",
            "moduleTitle": "Primeros pasos",
            "durationMinutes": 12,
            "summary": "La diferencia entre una consulta mediocre y una excelente es como la diferencia entre preguntar '¿que cocino?' y '¿que cena rapida y sana puedo hacer con pollo, brocoli y arroz para 2 personas en 30 minutos?'. Esta leccion te ensenara a hacer consultas que obtengan resultados utiles desde el primer intento.",
            "objectives": [
                "Formular consultas claras y especificas que produzcan resultados utiles.",
                "Entender por que las preguntas vagas generan respuestas genericas.",
                "Aplicar la formula basica: contexto + tarea + formato para toda consulta."
            ],
            "sections": [
                {
                    "heading": "El problema de las consultas vagas",
                    "content": "La mayoria de personas escribe prompts como mensajes de texto a un amigo: '¿que es el marketing?' o 'ayudame con mi trabajo'. Estos prompts producen respuestas genericas que podrias encontrar en Wikipedia. ChatGPT no puede leer tu mente; necesita contexto. Es como pedir a un taxista que te lleve 'a algun lugar bonito' versus darle la direccion exacta. Cuanta mas informacion le des, mejor sera el resultado. La regla de oro: si tu prompt cabe en un tweet, probablemente es demasiado vago."
                },
                {
                    "heading": "La formula CTF: Contexto + Tarea + Formato",
                    "content": "Toda buena consulta tiene tres elementos. Contexto: quien eres, para que necesitas esto, cual es la situacion ('Soy profesor de historia en secundaria'). Tarea: que necesitas exactamente, con detalles especificos ('Necesito crear un examen de 10 preguntas sobre la Revolucion Francesa para alumnos de 15 anos'). Formato: como quieres la respuesta ('En formato de examen con 4 opciones por pregunta, senalando la respuesta correcta al final'). Si incluyes estos tres elementos, la calidad del resultado sube dramaticamente."
                },
                {
                    "heading": "Ejemplos: de malo a excelente",
                    "content": "Malo: 'Escribe un email'. Mejor: 'Escribe un email profesional'. Bueno: 'Escribe un email para solicitar una reunion con mi jefe'. Excelente: 'Eres mi asistente de comunicacion. Escribe un email corto (maximo 100 palabras) a mi jefa de departamento, Ana Garcia, solicitando una reunion de 30 minutos esta semana para presentar los resultados del proyecto de digitalizacion. Tono: profesional pero cercano. Incluye 2 opciones de horario.' Nota como cada version anade contexto, especificidad y formato. La version excelente deja poco espacio para la ambiguedad."
                },
                {
                    "heading": "Tu primera conversacion productiva",
                    "content": "Elige una tarea real que necesites resolver hoy: un email, un resumen, una idea, una explicacion. Aplica la formula CTF y escribe tu consulta. Lee la respuesta con ojo critico: ¿es util? ¿falta algo? Si no es perfecta, no abandones: responde con lo que falta ('Hazlo mas corto', 'Anade un ejemplo', 'Cambia el tono a informal'). Esta iteracion es fundamental. ChatGPT funciona mejor como una conversacion que como una maquina de respuestas unicas. Cada mensaje adicional refina el resultado."
                }
            ],
            "activity": "Elige 3 tareas reales de tu dia a dia. Para cada una, escribe primero un prompt vago y luego reescribelo aplicando la formula CTF. Ejecuta ambas versiones en ChatGPT y compara los resultados.",
            "deliverable": "Documento con 3 pares de prompts (vago vs CTF) y sus respectivas respuestas, con un breve analisis de la diferencia de calidad.",
            "checklist": [
                "Entiendo por que los prompts vagos dan respuestas genericas.",
                "Aplico la formula CTF (Contexto + Tarea + Formato) en mis consultas.",
                "He comparado resultados entre un prompt vago y uno estructurado.",
                "Practico la iteracion: pido ajustes cuando la primera respuesta no es perfecta."
            ],
            "promptStarter": "Soy [tu profesion] y necesito [tarea especifica]. El contexto es [tu situacion]. Necesito que el resultado sea [formato deseado], con un tono [tono] y una extension de [longitud]. Incluye [elementos especificos que necesitas].",
            "promptExamples": [
                {
                    "title": "Email profesional (formula CTF)",
                    "prompt": "Contexto: Soy gerente de un equipo de 5 personas en una agencia de marketing. Tarea: Redacta un email anunciando que nuestro horario cambiara a jornada intensiva en verano (7:00 a 15:00, de junio a septiembre). Formato: Maximo 150 palabras, tono entusiasta pero profesional, con vinetitas para los puntos clave y un cierre motivador."
                },
                {
                    "title": "Resumen de documento",
                    "prompt": "Necesito resumir el siguiente texto para una presentacion ejecutiva. El publico son directivos con poco tiempo. Hazme un resumen en 3 niveles: 1) La idea clave en una frase, 2) Los 3 puntos principales en un parrafo, 3) El resumen detallado en media pagina. Texto: [pega tu texto]"
                },
                {
                    "title": "Lluviad de ideas estructurada",
                    "prompt": "Soy dueno de una pasteleria local. Necesito ideas para aumentar ventas en temporada baja (enero-marzo). Dame 10 ideas organizadas en 3 categorias: marketing digital, experiencia en tienda, y nuevos productos. Para cada idea incluye: descripcion, coste estimado (bajo/medio/alto) y dificultad de implementacion."
                }
            ]
        },
        "tipos-respuesta": {
            "id": "tipos-respuesta",
            "title": "Tipos de respuesta que ChatGPT puede generar",
            "moduleTitle": "Primeros pasos",
            "durationMinutes": 11,
            "summary": "ChatGPT no solo responde preguntas. Puede redactar, analizar, traducir, programar, calcular, crear tablas, resumir y mucho mas. Conocer todo su repertorio de capacidades te abrira un mundo de posibilidades que probablemente no imaginabas.",
            "objectives": [
                "Conocer al menos 15 tipos diferentes de salida que ChatGPT puede generar.",
                "Saber pedir el formato correcto para cada tipo de tarea.",
                "Descubrir usos avanzados que van mas alla de preguntas y respuestas."
            ],
            "sections": [
                {
                    "heading": "Mas alla de preguntas y respuestas",
                    "content": "La mayoria de usuarios trata a ChatGPT como un buscador: 'Que es X' o 'Como funciona Y'. Pero su verdadero poder esta en la creacion y transformacion de contenido. Puede escribir articulos, emails, guiones de video, descripciones de producto, codigo, poesia, letras de canciones, planes de negocio, analisis FODA, presupuestos y hasta cuentos infantiles personalizados. Tambien es un excelente editor: puede reescribir un texto cambiando el tono, resumirlo, ampliarlo, corregirlo o traducirlo. Piensa en ChatGPT no como una enciclopedia sino como un equipo multidisciplinar a tu disposicion."
                },
                {
                    "heading": "Formatos de salida que debes conocer",
                    "content": "Listas: numeradas o con vinetitas para ideas y pasos. Tablas: ideales para comparativas y datos estructurados ('Creame una tabla comparativa de...'). Formato Markdown: encabezados, negritas, cursivas para documentos bien estructurados. Codigo: en cualquier lenguaje de programacion con explicaciones. CSV: datos tabulares para importar a Excel. JSON: datos estructurados para uso tecnico. Diagramas en texto: flujos y estructuras con caracteres ASCII. Formato de email: con asunto, cuerpo y despedida. Script de video: con marcas de tiempo y indicaciones visuales. No tengas miedo de especificar exactamente el formato que necesitas."
                },
                {
                    "heading": "ChatGPT como analizador",
                    "content": "Pega un texto y pide: 'Analiza el tono y sugiere mejoras', 'Encuentra errores logicos', 'Identifica los puntos debiles del argumento'. Sube un documento y pide resumen ejecutivo. Comparte datos de ventas y pide analisis de tendencias. ChatGPT puede revisar contratos identificando clausulas problematicas, analizar reviews de clientes encontrando patrones, o evaluar tu CV sugiriendo mejoras. Su capacidad de analisis es una de las funciones mas infrautilizadas y mas valiosas para profesionales."
                },
                {
                    "heading": "ChatGPT como tutor personal",
                    "content": "Una de las aplicaciones mas potentes es el aprendizaje personalizado. Pide: 'Explicame [tema] como si tuviera 12 anos', 'Quiero aprender [habilidad], creame un plan de estudio de 4 semanas', 'Hazme 10 preguntas de examen sobre [tema] y corrige mis respuestas'. Puedes aprender idiomas con conversaciones, practicar entrevistas de trabajo con role-playing, o preparar presentaciones recibiendo feedback. ChatGPT se adapta a tu ritmo y nivel, algo que ningun libro o curso puede hacer."
                }
            ],
            "activity": "Prueba 5 tipos de respuesta diferentes con una misma tematica (elige tu area de interes). Pide: 1) Una explicacion, 2) Una tabla comparativa, 3) Un plan de accion, 4) Un analisis critico, 5) Un script de video de 60 segundos.",
            "deliverable": "Coleccion de 5 respuestas del mismo tema en formatos distintos, demostrando la versatilidad de ChatGPT.",
            "checklist": [
                "Conozco al menos 10 tipos de formatos de respuesta de ChatGPT.",
                "He probado pedir tablas, listas, codigo y otros formatos estructurados.",
                "Use ChatGPT como analizador con un texto o documento real.",
                "Probe el modo tutor para aprender algo nuevo."
            ],
            "promptStarter": "Demuestrame tu versatilidad. Sobre el tema 'productividad personal', dame 5 respuestas en formatos completamente diferentes: 1) Lista con emojis, 2) Tabla comparativa de tecnicas, 3) Plan semanal dia por dia, 4) Dialogo entre un mentor y un alumno, 5) Script para un video de TikTok de 60 segundos.",
            "promptExamples": [
                {
                    "title": "Formato tabla avanzada",
                    "prompt": "Creame una tabla comparativa de las 5 metodologias de productividad mas populares: GTD, Pomodoro, Time Blocking, Eat the Frog, Eisenhower. Columnas: Nombre, En que consiste (1 frase), Ideal para quien, Herramientas recomendadas, Dificultad de implementar."
                },
                {
                    "title": "ChatGPT como editor",
                    "prompt": "Aqui tienes un email que escribi: [pega tu email]. Dame 3 versiones mejoradas: una mas formal, una mas concisa (50% menos de palabras), y una mas persuasiva. Explica que cambiaste y por que en cada version."
                },
                {
                    "title": "ChatGPT como tutor",
                    "prompt": "Quiero aprender los fundamentos de finanzas personales desde cero. Se mi tutor: explicame el concepto de ahorro e inversion como si tuviera 15 anos, luego hazme 5 preguntas para comprobar que lo entendi. Corrige mis respuestas y dame una nota."
                }
            ]
        },
        "limitaciones": {
            "id": "limitaciones",
            "title": "Limitaciones y alucinaciones de ChatGPT",
            "moduleTitle": "Primeros pasos",
            "durationMinutes": 12,
            "summary": "ChatGPT parece saberlo todo, pero no es asi. Puede inventar datos falsos con total confianza, tiene conocimiento limitado, y no siempre acierta con logica o matematicas. Conocer sus limitaciones te hara un usuario mas inteligente y evitara errores costosos.",
            "objectives": [
                "Identificar las principales limitaciones de ChatGPT y cuando no confiar ciegamente.",
                "Entender que son las alucinaciones y como detectarlas.",
                "Desarrollar un flujo de verificacion para informacion critica generada por IA."
            ],
            "sections": [
                {
                    "heading": "Alucinaciones: cuando la IA miente con confianza",
                    "content": "Una alucinacion es cuando ChatGPT genera informacion falsa pero la presenta como si fuera cierta, con total confianza. Puede inventar citas de libros que no existen, crear referencias academicas falsas, dar estadisticas inventadas o atribuir afirmaciones a personas que nunca las dijeron. Esto ocurre porque el modelo no 'sabe' nada: predice la siguiente palabra mas probable. Si la secuencia estadisticamente probable incluye un dato falso plausible, lo generara sin pestanear. Ejemplo real: abogados han presentado en tribunales casos legales inventados por ChatGPT. La regla: nunca publiques datos de ChatGPT sin verificar la fuente."
                },
                {
                    "heading": "Limites de conocimiento y razonamiento",
                    "content": "ChatGPT tiene una fecha de corte de entrenamiento y puede no conocer eventos recientes (aunque la navegacion web mitiga esto). No puede acceder a internet por si solo a menos que uses la funcion de busqueda. Tiene dificultades con matematicas complejas, logica formal y acertijos que requieren razonamiento espacial. No puede ejecutar codigo en tiempo real (salvo en modo Code Interpreter). Y aunque 'recuerda' dentro de una conversacion, conversaciones diferentes son completamente independientes (salvo que actives la funcion Memoria)."
                },
                {
                    "heading": "Sesgos en las respuestas",
                    "content": "ChatGPT fue entrenado con textos de internet, que contienen sesgos culturales, de genero, raciales y politicos. Tiende a dar respuestas que suenan 'equilibradas' aunque a veces el consenso cientifico sea claro. Puede sobrerrepresentar perspectivas anglosajonas y subrepresentar otras culturas. Si le pides que escriba un cuento, los personajes por defecto suelen seguir estereotipos. Es tu responsabilidad revisar criticamente las respuestas, especialmente en temas sensibles. Puedes mitigar sesgos dandole instrucciones explicitas sobre perspectiva e inclusividad."
                },
                {
                    "heading": "Como protegerte: el metodo de verificacion",
                    "content": "Paso 1: Pide fuentes. 'Dame las fuentes de esta informacion.' Si no puede darlas o inventa URLs, es senal de alerta. Paso 2: Verifica cruzado. Comprueba datos importantes en fuentes confiables (Wikipedia, medios, estudios). Paso 3: Pide que se autocuestione. 'Que podria estar mal en tu respuesta anterior?' ChatGPT a veces corrige sus propios errores. Paso 4: Usa busqueda web. Activa la funcion de navegacion para que busque informacion actualizada. Paso 5: No uses ChatGPT para diagnosticos medicos, asesoramiento legal vinculante o decisiones financieras sin consultar a un profesional."
                }
            ],
            "activity": "Haz un 'test de alucinaciones': pide a ChatGPT informacion sobre un tema que tu domines bien. Evalua la precision de cada afirmacion. Luego, pidele que cite fuentes y verifica si son reales.",
            "deliverable": "Informe con al menos 3 preguntas a ChatGPT sobre tu area de expertise, evaluacion de precision y documentacion de errores o alucinaciones encontradas.",
            "checklist": [
                "Entiendo que son las alucinaciones y por que ocurren.",
                "Probe a detectar errores en un tema que conozco bien.",
                "Aplico el metodo de verificacion con informacion critica.",
                "Se cuando NO debo confiar en ChatGPT sin verificar."
            ],
            "promptStarter": "Quiero entender tus limitaciones. Dame 5 tipos de preguntas en las que es probable que te equivoques o alucines, con un ejemplo de cada una. Se honesto y autocritico. Para cada tipo, dame una estrategia para que el usuario detecte el error.",
            "promptExamples": [
                {
                    "title": "Test de alucinaciones",
                    "prompt": "Dame el nombre completo del autor del libro 'Inteligencia Emocional para el Liderazgo en la Era Digital' publicado en 2019 por la editorial Planeta. Citame el ISBN y un resumen de 3 lineas. (Nota: verifica si este libro existe realmente)"
                },
                {
                    "title": "Autocritica forzada",
                    "prompt": "Acabas de darme informacion sobre [tema]. Ahora actua como un verificador de datos exigente y critica tu propia respuesta. Que partes podrian ser inexactas, estar desactualizadas o ser excesivamente simplificadas? Califica tu propia respuesta del 1 al 10 en precision."
                },
                {
                    "title": "Contrastar informacion",
                    "prompt": "Necesito informacion precisa sobre [tema especifico]. Dame la informacion, pero para cada dato importante, indica tu nivel de confianza (alto/medio/bajo) y sugiere una fuente donde yo pueda verificarlo. Si no estas seguro de algo, di 'no estoy seguro' en vez de inventar."
                }
            ]
        },
        "prompts-basicos": {
            "id": "prompts-basicos",
            "title": "Prompts basicos que funcionan",
            "moduleTitle": "Uso efectivo",
            "durationMinutes": 14,
            "summary": "Un buen prompt es la diferencia entre perder el tiempo y obtener resultados profesionales. Esta leccion te dara una coleccion de patrones de prompts basicos que funcionan para las tareas mas comunes: escribir, resumir, analizar, crear y organizar.",
            "objectives": [
                "Dominar 6 patrones de prompts basicos aplicables a cualquier tarea.",
                "Crear prompts para tareas reales de tu trabajo usando plantillas probadas.",
                "Entender por que el 'como pides' importa mas que 'que pides'."
            ],
            "sections": [
                {
                    "heading": "Patron 1: El Experto (asignar un rol)",
                    "content": "Inicia tu prompt con 'Actua como [rol experto]'. Esto configura el marco de referencia de ChatGPT y mejora significativamente la calidad de la respuesta. 'Actua como un nutricionista deportivo' genera respuestas mas tecnicas y precisas que simplemente preguntar sobre alimentacion. Otros ejemplos: 'Actua como editor de revista', 'Actua como abogado laboralista', 'Actua como profesor de primaria'. Puedes combinar: 'Actua como un experto en SEO que trabaja en una agencia de marketing digital con 10 anos de experiencia'."
                },
                {
                    "heading": "Patron 2: Paso a Paso (descomponer tareas)",
                    "content": "Para tareas complejas, pide que resuelva paso a paso: 'Explicame paso a paso como...' o 'Desglosa este proceso en pasos numerados'. Esto funciona especialmente bien para tutoriales, guias y resoluciones de problemas. Ejemplo: 'Explicame paso a paso como crear una campana de email marketing desde cero, desde la estrategia hasta la medicion de resultados. Numera cada paso y explica por que es importante.' El paso a paso tambien reduce alucinaciones porque fuerza al modelo a ser sistematico."
                },
                {
                    "heading": "Patron 3: Plantilla (dar estructura exacta)",
                    "content": "Dale a ChatGPT la estructura exacta que necesitas: 'Usa este formato: Titulo: [x], Publico: [x], Problema: [x], Solucion: [x]'. Puedes pegar una plantilla de email, informe o documento y pedir que la complete. Ejemplo avanzado: 'Escribe una propuesta de proyecto con esta estructura: 1. Resumen ejecutivo (3 lineas), 2. Problema (1 parrafo), 3. Solucion propuesta (3 puntos), 4. Timeline (tabla), 5. Presupuesto (tabla), 6. Proximos pasos (lista).' Cuanto mas clara la plantilla, mejor el resultado."
                },
                {
                    "heading": "Patrones 4-6: Ejemplos, Restricciones y Audiencia",
                    "content": "Patron Ejemplo: 'Aqui tienes un ejemplo del estilo que quiero: [pega ejemplo]. Ahora crea algo similar pero sobre [nuevo tema].'  Patron Restriccion: 'Maximo 200 palabras', 'No uses jerga tecnica', 'Incluye exactamente 5 puntos'. Las restricciones paradojicamente mejoran la creatividad. Patron Audiencia: 'Esto es para ejecutivos con poco tiempo', 'Mi audiencia son adolescentes de 15 anos', 'Escribe para alguien que no sabe nada del tema'. Definir la audiencia cambia completamente el nivel y tono de la respuesta."
                }
            ],
            "activity": "Toma una tarea real de tu trabajo y reescribela usando cada uno de los 6 patrones. Ejecuta todos en ChatGPT y compara cual te da el mejor resultado para tu caso.",
            "deliverable": "Coleccion de 6 prompts aplicando cada patron a una tarea real + comparativa de resultados.",
            "checklist": [
                "Domino los 6 patrones basicos de prompts.",
                "He probado cada patron con una tarea real.",
                "Puedo combinar multiples patrones en un solo prompt.",
                "Tengo mis patrones favoritos guardados como plantillas."
            ],
            "promptStarter": "Actua como un experto en productividad laboral con 15 anos de experiencia. Necesito un plan de productividad semanal para un gerente de marketing que trabaja desde casa. El plan debe cubrir lunes a viernes, con bloques de 2 horas. Formato tabla con: Hora, Actividad, Herramienta sugerida, Consejo del experto. Maximo 5 actividades por dia. Tono: practico y motivador.",
            "promptExamples": [
                {
                    "title": "Patron Experto + Restriccion",
                    "prompt": "Actua como un consultor de negocios de McKinsey. Analiza esta situacion: mi restaurante ha bajado ventas un 20% en los ultimos 3 meses. Dame exactamente 5 estrategias de recuperacion, priorizadas por impacto y facilidad de implementacion. Cada estrategia en maximo 3 lineas."
                },
                {
                    "title": "Patron Plantilla",
                    "prompt": "Escribe un post de LinkedIn usando esta estructura exacta:\nGancho (1 linea impactante)\n[linea en blanco]\nHistoria personal (3 lineas)\n[linea en blanco]\nLeccion aprendida (2 lineas)\n[linea en blanco]\n3 consejos accionables (con emojis)\n[linea en blanco]\nPregunta de engagement\n[Hashtags relevantes]\nTema: los errores que cometi al empezar a usar IA en mi trabajo."
                },
                {
                    "title": "Patron Audiencia + Ejemplo",
                    "prompt": "Necesito explicar que es blockchain a mi abuela de 75 anos que apenas usa WhatsApp. Usa analogias con cosas que ella conoce: la libreta del mercado, el libro de cuentas del banco, los sellos de correo. Maximo 200 palabras. Estilo: conversacion de sobremesa, carinoso."
                }
            ]
        },
        "contexto": {
            "id": "contexto",
            "title": "El poder del contexto en tus conversaciones",
            "moduleTitle": "Uso efectivo",
            "durationMinutes": 13,
            "summary": "El contexto es el ingrediente secreto de los buenos prompts. Mientras mas contexto relevante le des a ChatGPT, mejores seran las respuestas. Aprenderas a proporcionar el contexto justo: ni demasiado poco (respuestas genericas) ni demasiado (confusion).",
            "objectives": [
                "Entender por que el contexto transforma la calidad de las respuestas de ChatGPT.",
                "Dominar los 5 tipos de contexto que puedes proporcionar.",
                "Saber como mantener el contexto a lo largo de una conversacion larga."
            ],
            "sections": [
                {
                    "heading": "Por que el contexto lo cambia todo",
                    "content": "Sin contexto: 'Escribe un email.' Con contexto: 'Soy recruiter en una startup de tecnologia y necesito escribir un email rechazando amablemente a un candidato que llego a la fase final pero no fue seleccionado. Quiero mantener la puerta abierta para futuros roles.' La primera instruccion puede producir cualquier cosa. La segunda produce exactamente lo que necesitas. El contexto actua como GPS para ChatGPT: le dice donde estas, a donde quieres llegar y por que camino. Sin GPS, te lleva a 'cualquier destino'; con GPS, al destino exacto."
                },
                {
                    "heading": "Los 5 tipos de contexto",
                    "content": "1) Contexto personal: quien eres, tu rol, experiencia ('Soy disenador junior en agencia'). 2) Contexto situacional: que esta pasando, por que necesitas esto ('Mi jefe me pidio un informe urgente para manana'). 3) Contexto de audiencia: para quien es el resultado ('Esto lo leera el CEO que tiene 2 minutos'). 4) Contexto de calidad: tus estandares y restricciones ('Debe ser formal, sin emojis, maximo 200 palabras'). 5) Contexto previo: informacion que ChatGPT necesita ('Adjunto nuestro plan estrategico' o 'En mi empresa vendemos software B2B')."
                },
                {
                    "heading": "Tecnicas avanzadas de contexto",
                    "content": "Contexto por referencia: 'Escribe en el estilo de [persona/marca]' o pega un texto de ejemplo diciendo 'Analiza este estilo y usalo'. Contexto acumulativo: en conversaciones largas, ChatGPT recuerda lo anterior. Aprovechalo: 'Basandote en el perfil de cliente que definimos antes, escribe ahora un email de bienvenida'. Contexto por documento: sube archivos (PDF, Word, Excel) para que ChatGPT tenga acceso a informacion especifica. Contexto negativo: 'NO menciones precios', 'Evita tecnicismos': decir lo que no quieres es tan util como decir lo que si quieres."
                },
                {
                    "heading": "Errores comunes con el contexto",
                    "content": "Error 1: Demasiado contexto irrelevante que confunde al modelo. Si preguntas sobre marketing, no necesitas contar tu historia de vida. Error 2: Asumir que ChatGPT sabe cosas que no le has dicho. No conoce tu empresa, tu mercado ni tus clientes a menos que se lo expliques. Error 3: No actualizar el contexto cuando cambia el tema dentro de la conversacion. Error 4: Olvidar que cada nueva conversacion empieza desde cero (a menos que uses la funcion Memoria). Consejo: si una conversacion se vuelve larga y confusa, empieza una nueva resumiendo el contexto esencial en el primer mensaje."
                }
            ],
            "activity": "Elige un proyecto real. Escribe un 'brief de contexto' de 5 lineas que puedas pegar al inicio de cualquier conversacion sobre ese proyecto. Luego pruebalo haciendo 3 preguntas diferentes y observa como el contexto mejora todas las respuestas.",
            "deliverable": "Brief de contexto reutilizable de 5 lineas + 3 consultas diferentes usando ese mismo contexto, demostrando la mejora en relevancia.",
            "checklist": [
                "Identifico los 5 tipos de contexto y cuando usar cada uno.",
                "Cree un brief de contexto reutilizable para mi proyecto principal.",
                "Probe la diferencia entre consultar con y sin contexto.",
                "Se cuando iniciar una nueva conversacion vs continuar la actual."
            ],
            "promptStarter": "Voy a darte contexto sobre mi situacion para que todas tus respuestas sean relevantes. Soy [profesion] en [empresa/sector]. Mi principal desafio ahora es [desafio]. Mi audiencia es [audiencia]. Mi objetivo para esta semana es [objetivo]. A partir de ahora, usa este contexto en todas tus respuestas. Confirma que entendiste resumiendo mi perfil.",
            "promptExamples": [
                {
                    "title": "Brief de contexto profesional",
                    "prompt": "Antes de hacer cualquier tarea, quiero que tengas este contexto sobre mi: Soy community manager de una marca de cosmetica natural en Instagram (15K seguidores). Nuestro tono es cercano, educativo y empoderador. Nuestro publico son mujeres de 25-45 anos interesadas en bienestar. Nunca usamos lenguaje tecnico de marketing. Confirma que entiendes el perfil y dame 3 ideas de posts para esta semana."
                },
                {
                    "title": "Contexto negativo util",
                    "prompt": "Redacta un articulo sobre los beneficios del teletrabajo. Contexto: es para la intranet de nuestra empresa donde estamos implementando un modelo hibrido. NO menciones desventajas (los directivos son sensibles al tema), NO uses estadisticas de EEUU (somos empresa espanola), NO hagas que suene como publicidad. Si: incluye ejemplos reales europeos y adaptados a nuestra cultura."
                },
                {
                    "title": "Mantener contexto en conversacion",
                    "prompt": "Acabamos de definir que nuestro cliente ideal es Maria, 35 anos, madre de 2, trabaja medio tiempo, busca alimentacion sana y rapida. Basandote en este perfil que desarrollamos juntos, ahora escribe: 1) Un email de bienvenida para Maria, 2) 3 asuntos de email que Maria abriria."
                }
            ]
        },
        "formato-respuestas": {
            "id": "formato-respuestas",
            "title": "Controlar el formato de las respuestas",
            "moduleTitle": "Uso efectivo",
            "durationMinutes": 11,
            "summary": "Saber pedir el formato correcto es un superpoder. En lugar de recibir muros de texto y tener que reformatear, puedes obtener tablas, listas, JSON, CSV, emails, scripts y cualquier estructura directamente lista para usar.",
            "objectives": [
                "Dominar al menos 10 formatos de salida diferentes.",
                "Saber transformar una respuesta de un formato a otro.",
                "Crear prompts que produzcan contenido listo para copiar y pegar."
            ],
            "sections": [
                {
                    "heading": "Formatos de texto basicos",
                    "content": "Lista con vinetitas: 'Dame los puntos clave en formato lista'. Lista numerada: 'Dame los pasos numerados'. Parrafo: 'Respondeme en un solo parrafo de maximo 100 palabras'. Puntos clave + desarrollo: 'Resumeme en 5 puntos clave y luego desarrolla cada uno'. FAQ: 'Presentalo como preguntas frecuentes con respuestas cortas'. Comparacion pros/contras: 'Organiza la informacion en dos columnas: ventajas y desventajas'. Cada formato sirve para un proposito distinto y tu controlas cual quieres."
                },
                {
                    "heading": "Formatos estructurados: tablas y datos",
                    "content": "Las tablas son excepcionalmente utiles. 'Creame una tabla con columnas: Nombre, Precio, Caracteristica principal, Puntuacion'. Puedes pedir tablas comparativas, calendarios, matrices de decision, presupuestos y cronogramas. Para datos exportables: 'Dame los resultados en formato CSV separado por comas para importar a Excel'. Para uso tecnico: 'Devuelveme la informacion en formato JSON'. Para presentaciones: 'Organizalo en formato outline con 3 niveles de jerarquia'. Estos formatos te ahorran horas de reformateo manual."
                },
                {
                    "heading": "Formatos creativos y profesionales",
                    "content": "Email: 'Escribe un email con asunto, cuerpo y firma'. Script de video: 'Formato de guion con marcas de tiempo, naracion y texto en pantalla'. Post de red social: 'Formato de post de Instagram con caption, hashtags y CTA'. Hilo de Twitter/X: 'Escribe un hilo de 8 tweets sobre [tema], cada uno menor a 280 caracteres'. Informe ejecutivo: 'Formato de informe con resumen ejecutivo, hallazgos, recomendaciones y pasos a seguir'. Newsletter: 'Formato de boletin con titular, editorial, 3 noticias resumidas y cierre'."
                },
                {
                    "heading": "Transformar formatos sobre la marcha",
                    "content": "Una funcion poderosa es pedirle a ChatGPT que transforme contenido entre formatos. 'Convierte esta lista en una tabla'. 'Toma este parrafo y hazlo un email profesional'. 'Transforma este informe en 5 bullets para una presentacion'. 'Convierte esta conversacion en un documento de requisitos'. 'Toma estas notas desordenadas y crea un articulo estructurado'. Esto te permite trabajar de forma natural (tomando notas desordenadas, por ejemplo) y dejar que la IA se encargue de dar formato profesional al resultado final."
                }
            ],
            "activity": "Toma un tema de tu area y pide el mismo contenido en 5 formatos diferentes: tabla, email, post de LinkedIn, lista de bullets y formato FAQ. Evalua cual es mas util para cada audiencia.",
            "deliverable": "Un mismo contenido presentado en 5 formatos distintos + reflexion sobre cuando usar cada formato.",
            "checklist": [
                "Domino al menos 10 formatos de salida de ChatGPT.",
                "Puedo pedir tablas, CSV, JSON y otros formatos estructurados.",
                "Se transformar contenido entre formatos con un solo prompt.",
                "Mis prompts producen contenido listo para copiar y usar."
            ],
            "promptStarter": "Necesito contenido sobre los beneficios del trabajo remoto presentado en 5 formatos: 1) Tabla comparativa (presencial vs remoto), 2) Email al equipo anunciando la politica, 3) Post de LinkedIn del CEO, 4) FAQ para recursos humanos, 5) 3 slides clave para una presentacion. Mismo contenido, 5 formatos. Ve formato por formato.",
            "promptExamples": [
                {
                    "title": "Transformar notas a documento",
                    "prompt": "Tengo estas notas desordenadas de una reunion: [pega tus notas]. Transformalas en: 1) Acta de reunion formal con asistentes, temas y acuerdos, 2) Lista de tareas asignadas con responsable y fecha, 3) Email resumen para los que no asistieron."
                },
                {
                    "title": "Formato para presentacion",
                    "prompt": "Tengo este texto largo: [pega texto]. Necesito convertirlo en contenido para una presentacion de 10 slides. Para cada slide dame: titulo, 3 bullet points (maximo 8 palabras cada uno), y notas del presentador (lo que deberia decir)."
                },
                {
                    "title": "Generar datos tabulares",
                    "prompt": "Creame una tabla con las 10 herramientas de IA mas utiles para oficina. Columnas: Herramienta | Categoria | Precio/mes | Ideal para | Alternativa gratuita | Puntuacion (1-5). Ordenadas de mayor a menor puntuacion. Separame la version en CSV al final para importar a Excel."
                }
            ]
        },
        "plugins": {
            "id": "plugins",
            "title": "GPTs, plugins y herramientas integradas",
            "moduleTitle": "Uso efectivo",
            "durationMinutes": 13,
            "summary": "ChatGPT ha evolucionado mas alla del texto. Con los GPTs personalizados, la navegacion web, el interprete de codigo, DALL-E integrado y la tienda de GPTs, tienes un ecosistema completo. Aprende a usar estas herramientas integradas para multiplicar tu productividad.",
            "objectives": [
                "Conocer todas las herramientas integradas de ChatGPT (DALL-E, codigo, web, GPTs).",
                "Encontrar y usar GPTs especializados de la tienda para tareas especificas.",
                "Combinar multiples herramientas en una sola conversacion."
            ],
            "sections": [
                {
                    "heading": "El ecosistema de herramientas de ChatGPT",
                    "content": "ChatGPT Plus incluye varias herramientas integradas que se activan automaticamente segun tu solicitud. DALL-E genera imagenes cuando pides 'crea una imagen de...'. Code Interpreter (analisis avanzado) ejecuta codigo Python para analizar datos, crear graficos y procesar archivos. Navegacion web busca informacion actualizada en internet. Canvas abre un editor colaborativo para textos y codigo. No necesitas activar nada manualmente: ChatGPT decide que herramienta usar basandose en tu prompt. Puedes forzar una: 'Usa Code Interpreter para analizar este Excel'."
                },
                {
                    "heading": "La tienda de GPTs: asistentes especializados",
                    "content": "Los GPTs son versiones personalizadas de ChatGPT creadas para tareas especificas. La tienda GPT Store tiene miles. Ejemplos utiles: Canva GPT para disenar, Consensus para buscar papers academicos, Whimsical para crear diagramas, Kayak para planificar viajes, Scholar AI para investigacion. Para encontrar GPTs: haz clic en 'Explorar GPTs' en la barra lateral. Puedes buscar por categoria (productividad, escritura, educacion) o por nombre. Los mejores GPTs suelen ser los de las propias empresas (Canva, Zapier) y los destacados por OpenAI."
                },
                {
                    "heading": "Code Interpreter: tu analista de datos personal",
                    "content": "Code Interpreter es una de las funciones mas potentes y menos aprovechadas. Sube un archivo Excel, CSV o PDF con datos y pide: 'Analiza estos datos de ventas y crea graficos con los insights principales'. Puede crear visualizaciones profesionales, hacer calculos estadisticos, limpiar datos desordenados, convertir formatos de archivo y procesar imagenes. Ejemplo practico: sube tu extracto bancario en CSV y pide 'Analiza mis gastos por categoria y crea un grafico de barras'. Se nota que ejecuta codigo real (Python) a diferencia de las respuestas normales basadas solo en texto."
                },
                {
                    "heading": "Combinar herramientas en un solo flujo",
                    "content": "El verdadero poder esta en combinar herramientas. Ejemplo de flujo completo: 1) Busca en web las tendencias de tu industria, 2) Pide que analice los datos encontrados, 3) Genera un informe con graficos usando Code Interpreter, 4) Crea una imagen de portada con DALL-E, 5) Organiza todo en un documento con Canvas. Todo en una sola conversacion. Otro ejemplo: sube un PDF largo, pide un resumen ejecutivo, luego pide que genere una presentacion visual, y finalmente que cree las imagenes para acompanarla. ChatGPT se convierte en un equipo multidisciplinar."
                }
            ],
            "activity": "Haz un proyecto completo usando al menos 3 herramientas de ChatGPT. Ejemplo: busca informacion web sobre un tema, pidele que la analice creando una tabla, genera una imagen relacionada y exporta todo como documento.",
            "deliverable": "Proyecto mini que demuestre el uso de al menos 3 herramientas integradas (web + analisis + imagen) en una sola conversacion.",
            "checklist": [
                "Conozco las 4 herramientas integradas principales de ChatGPT.",
                "He explorado la tienda de GPTs y encontrado al menos 3 utiles.",
                "Probe Code Interpreter subiendo un archivo real de datos.",
                "Combine al menos 2 herramientas en una misma conversacion."
            ],
            "promptStarter": "Vamos a hacer un mini proyecto combinando tus herramientas. Primero, busca en internet las 5 tendencias principales en [tu industria] para 2025. Luego, crea una tabla comparativa con impacto, madurez y relevancia para una pyme. Despues, genera un grafico visual. Finalmente, crea una imagen profesional que represente estas tendencias para usar como portada de un informe.",
            "promptExamples": [
                {
                    "title": "Analisis de datos con Code Interpreter",
                    "prompt": "(Sube un archivo Excel) Analiza este archivo de datos de ventas mensuales. Necesito: 1) Resumen estadistico, 2) Tendencia de los ultimos 12 meses con grafico de lineas, 3) Top 5 productos por ingresos, 4) Prediccion para el proximo trimestre. Presenta todo con graficos profesionales."
                },
                {
                    "title": "Encontrar el GPT correcto",
                    "prompt": "Necesito un GPT especializado para [tu tarea]. Recomiendame los 5 mejores GPTs de la tienda para esta tarea, explicando que hace cada uno, sus puntos fuertes y un ejemplo de como usarlo."
                },
                {
                    "title": "Flujo completo multiherramienta",
                    "prompt": "Hagamos un proyecto completo: 1) Busca en internet las ultimas estadisticas sobre el mercado de e-commerce en Espana 2024-2025, 2) Organiza los datos en una tabla comparativa, 3) Crea 3 graficos profesionales con los datos mas relevantes, 4) Redacta un informe ejecutivo de 1 pagina, 5) Genera una imagen de portada para el informe."
                }
            ]
        },
        "ejercicios": {
            "id": "ejercicios",
            "title": "Ejercicios practicos integradores",
            "moduleTitle": "Uso efectivo",
            "durationMinutes": 20,
            "summary": "Es hora de poner en practica todo lo aprendido. Esta leccion contiene 10 ejercicios progresivos que cubren todos los conceptos del curso: desde prompts basicos hasta flujos complejos con multiples herramientas. Completalos todos para consolidar tu dominio de ChatGPT.",
            "objectives": [
                "Aplicar todas las tecnicas aprendidas en ejercicios practicos reales.",
                "Resolver desafios progresivos que combinan multiples habilidades.",
                "Crear un portfolio personal de prompts probados y resultados."
            ],
            "sections": [
                {
                    "heading": "Ejercicios 1-3: Fundamentos de prompting",
                    "content": "Ejercicio 1: Email profesional. Escribe un prompt usando la formula CTF para generar un email solicitando presupuesto a un proveedor. Debe incluir contexto de empresa, requisitos especificos y formato formal. Ejercicio 2: Resumen ejecutivo. Copia un articulo largo de internet, pegalo en ChatGPT y pide un resumen en 3 niveles: tweet (280 chars), parrafo (100 palabras) y pagina completa. Ejercicio 3: Traductor contextual. Pide que traduzca un texto tecnico de tu area al ingles, manteniendo el tono profesional y los terminos tecnicos correctos del sector."
                },
                {
                    "heading": "Ejercicios 4-6: Formatos y creatividad",
                    "content": "Ejercicio 4: Tabla comparativa. Crea una tabla de las 5 mejores opciones de [producto/servicio de tu interes] con al menos 6 columnas de criterios relevantes. Ejercicio 5: Script de contenido. Genera un guion para un video de 60 segundos sobre un tema que domines, con estructura gancho-desarrollo-cierre y marcas de tiempo. Ejercicio 6: Brainstorming estructurado. Pide 20 ideas para [tu desafio], organizadas por categoria (rapidas, a medio plazo, ambiciosas), con puntuacion de viabilidad."
                },
                {
                    "heading": "Ejercicios 7-8: Analisis y critica",
                    "content": "Ejercicio 7: Analista critico. Pega un texto que hayas escrito (email, informe, post) y pide feedback constructivo: fortalezas, debilidades, errores y 3 mejoras concretas con reescritura. Ejercicio 8: Detector de alucinaciones. Haz a ChatGPT 5 preguntas sobre datos especificos de tu area (fechas, estadisticas, nombres) y verifica cada respuesta. Documenta cuantas acierta y cuantas alucina."
                },
                {
                    "heading": "Ejercicios 9-10: Proyectos integradores",
                    "content": "Ejercicio 9: Asistente personalizado. Escribe un 'system prompt' completo (instrucciones iniciales) para convertir a ChatGPT en tu asistente personal de trabajo. Incluye: quien eres, como quieres que responda, que debe recordar y que nunca debe hacer. Pruebalo con 5 preguntas distintas. Ejercicio 10: Flujo completo. Elige un proyecto real (organizar un evento, planificar un viaje, crear un plan de marketing) y resuelvelo integramente con ChatGPT usando minimo 5 conversaciones enlazadas: investigacion, planificacion, creacion de contenido, analisis y entregable final."
                }
            ],
            "activity": "Completa los 10 ejercicios del 1 al 10. Guarda tus mejores prompts y resultados en un documento. Esto se convertira en tu 'caja de herramientas' personal para futuras tareas.",
            "deliverable": "Portfolio de 10 ejercicios completados con prompts, resultados y reflexiones sobre que funciono mejor y que mejorar.",
            "checklist": [
                "Complete los 10 ejercicios progresivos.",
                "Guarde mis mejores prompts como plantillas reutilizables.",
                "Combine multiples tecnicas en los ejercicios avanzados.",
                "Cree mi portfolio personal de prompts probados."
            ],
            "promptStarter": "Actua como mi coach de ChatGPT. He completado un curso basico y quiero poner a prueba mis habilidades. Dame un desafio practico de nivel intermedio: una tarea del mundo real que requiera combinar contexto, formato, rol y iteracion para resolverla bien. Evalua mi resultado cuando te lo envie.",
            "promptExamples": [
                {
                    "title": "Ejercicio integrador de email",
                    "prompt": "Actua como director de comunicacion de una startup de tecnologia educativa. Necesito escribir un email al equipo de 12 personas anunciando: 1) Cerramos una ronda de financiacion de 2 millones, 2) Contrataremos 5 personas nuevas, 3) Lanzaremos el producto en 3 meses. Tono: profesional pero emocionante. Incluye: asunto impactante, cuerpo con los 3 puntos, y cierre motivador. Maximo 250 palabras."
                },
                {
                    "title": "Reto de deteccion de errores",
                    "prompt": "Voy a darte un texto que escribi y quiero que seas extremadamente critico. Busca: errores gramaticales, frases confusas, argumentos debiles, afirmaciones sin respaldo, y oportunidades de mejora. Puntuame del 1 al 10 en: claridad, persuasion, profesionalismo y concision. Texto: [pega tu texto]"
                },
                {
                    "title": "Proyecto completo de contenido",
                    "prompt": "Vamos a crear un mini plan de contenido para mi marca personal en LinkedIn. Paso 1: Define mi posicionamiento (soy [profesion]). Paso 2: Sugiere 4 pilares de contenido. Paso 3: Genera un calendario de 2 semanas (3 posts/semana). Paso 4: Escribe el primer post completo. Paso 5: Dame ideas para el visual que acompane al post."
                }
            ]
        }
    },
