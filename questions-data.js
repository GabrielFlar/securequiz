// Banco de Preguntas - Seguridad de Software
// Total: 100 preguntas organizadas por temas

const questionsBank = [
  // TEMA 1: El problema de la seguridad en el software
  {
    id: 1,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Introducción y Conceptos Básicos",
    question: "¿Cómo se define la seguridad del software según el texto?",
    options: [
      "Instalar antivirus y firewalls en todos los equipos.",
      "Conjunto de técnicas y buenas prácticas para detectar, prevenir y corregir defectos de seguridad.",
      "La capacidad de un software de funcionar sin conexión a internet."
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Introducción y Conceptos Básicos",
    question: "¿En qué fases del ciclo de vida (SDLC) son amenazadas y atacadas las aplicaciones?",
    options: [
      "Solo en la fase de Operación.",
      "Solo en Desarrollo y Distribución.",
      "En todas las fases: Desarrollo, Distribución, Operación y Mantenimiento."
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Introducción y Conceptos Básicos",
    question: "¿Por qué las tecnologías de seguridad de red (firewalls, IDS) no resuelven el problema de seguridad del software real?",
    options: [
      "Porque son muy costosas.",
      "Porque una vez que el atacante vence esas defensas, puede atacar las aplicaciones vulnerables del interior.",
      "Porque ralentizan demasiado el sistema."
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Introducción y Conceptos Básicos",
    question: "¿Cuál es un beneficio económico de incluir la seguridad desde las primeras etapas del SDLC?",
    options: [
      "Aumenta el costo de las licencias.",
      "Reducción de los costes de corrección de errores y vulnerabilidades.",
      "Permite contratar menos programadores."
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Vulnerabilidades (CVE y CWE)",
    question: "¿Qué es una vulnerabilidad en el software?",
    options: [
      "Un virus que borra datos.",
      "Un fallo de programación, configuración o diseño que permite alterar el comportamiento normal del programa.",
      "Una característica no documentada del sistema operativo."
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Vulnerabilidades (CVE y CWE)",
    question: "¿Cuáles son las tres fuentes principales de vulnerabilidades mencionadas?",
    options: [
      "Fallos de red, fallos de hardware y fallos de usuario.",
      "Fallos de implementación, fallos de diseño y fallos de configuración.",
      "Virus, troyanos y gusanos."
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Vulnerabilidades (CVE y CWE)",
    question: "¿Qué significan las siglas CVE?",
    options: [
      "Common Vulnerabilities and Exposures.",
      "Central Virus Enumeration.",
      "Code Verification Environment."
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Vulnerabilidades (CVE y CWE)",
    question: "¿Qué organización administra el diccionario CVE?",
    options: [
      "Microsoft.",
      "MITRE.",
      "OWASP."
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Vulnerabilidades (CVE y CWE)",
    question: "En el identificador \"CVE-2012-4212\", ¿qué representa el \"2012\"?",
    options: [
      "El número de vulnerabilidades de ese tipo.",
      "El año en el que se asignó el código a la vulnerabilidad.",
      "El nivel de peligrosidad."
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Vulnerabilidades (CVE y CWE)",
    question: "¿Qué es CWE (Common Weakness Enumeration)?",
    options: [
      "Un antivirus online.",
      "Un estándar que ofrece un conjunto unificado de debilidades o defectos de software medibles.",
      "Una ley sobre delitos informáticos."
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Propiedades del Software Seguro",
    question: "¿Cuáles son las tres propiedades esenciales de la seguridad (Tríada CIA)?",
    options: [
      "Confidencialidad, Integridad y Disponibilidad.",
      "Rapidez, Eficiencia y Costo.",
      "Autenticación, Autorización y Auditoría."
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Propiedades del Software Seguro",
    question: "¿Qué propiedad complementaria permite saber quién realizó una acción (no repudio)?",
    options: [
      "Robustez.",
      "Trazabilidad.",
      "Resiliencia."
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Propiedades del Software Seguro",
    question: "¿Qué propiedad se refiere a la capacidad de soportar ataques y funcionar en un entorno hostil?",
    options: [
      "Confidencialidad.",
      "Robustez.",
      "Simplicidad."
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Propiedades del Software Seguro",
    question: "¿Qué propiedad asegura que los datos no han sido modificados por personal no autorizado?",
    options: [
      "Integridad.",
      "Disponibilidad.",
      "Confidencialidad."
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Principios de Diseño de Seguridad",
    question: "¿En qué consiste el principio de \"Defensa en profundidad\"?",
    options: [
      "Usar solo una barrera muy fuerte.",
      "Introducir múltiples capas de seguridad para reducir la probabilidad de compromiso.",
      "Ocultar el código fuente para que nadie lo vea."
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Principios de Diseño de Seguridad",
    question: "¿Qué establece el principio de \"Mínimo privilegio\"?",
    options: [
      "Todos los usuarios deben ser administradores.",
      "Lo que no está expresamente permitido está prohibido.",
      "Se debe dar acceso total para facilitar el trabajo."
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Principios de Diseño de Seguridad",
    question: "¿Qué principio busca reducir la complejidad para minimizar vulnerabilidades?",
    options: [
      "Separación de dominios.",
      "Simplicidad del diseño.",
      "Seguridad por oscuridad."
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Principios de Diseño de Seguridad",
    question: "¿Qué significa \"Fallar de forma segura\"?",
    options: [
      "Que el software se reinicie automáticamente.",
      "Que ante un fallo, el software no quede en un estado vulnerable ni salte los mecanismos de seguridad.",
      "Que el sistema muestre todos los datos de error al usuario."
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Principios de Diseño de Seguridad",
    question: "¿Por qué se considera un error la \"Seguridad por oscuridad\"?",
    options: [
      "Porque es muy costosa de implementar.",
      "Porque ocultar el diseño no garantiza seguridad y puede dar información al atacante si se descubre.",
      "Porque hace que el software sea más lento."
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Principios de Diseño de Seguridad",
    question: "¿Qué principio implica separar las funciones críticas en diferentes partes o usuarios?",
    options: [
      "Separación de privilegios.",
      "Seguridad por defecto.",
      "Diseño resistente."
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Amenazas y Taxonomía de Ataques",
    question: "Para desarrollar software seguro, ¿qué dos perspectivas debe adoptar el equipo?",
    options: [
      "Desarrollador y Cliente.",
      "Defensor y Atacante.",
      "Administrador y Usuario."
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Amenazas y Taxonomía de Ataques",
    question: "¿Qué tipo de atacante se motiva principalmente por curiosidad o notoriedad y usa herramientas prefabricadas?",
    options: [
      "Estados (Ciberguerra).",
      "Script Kiddies.",
      "Insiders (Empleados descontentos)."
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Amenazas y Taxonomía de Ataques",
    question: "Según la taxonomía de incidentes, ¿qué es el \"Footprinting\"?",
    options: [
      "Un ataque de denegación de servicio.",
      "Una acción de recolección de información sobre el objetivo.",
      "El robo de contraseñas."
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Amenazas y Taxonomía de Ataques",
    question: "¿Qué tipo de atacante suele tener mayor conocimiento interno del sistema?",
    options: [
      "Script Kiddies.",
      "Internos (Insiders).",
      "Hacktivistas."
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Ciclos de Vida (S-SDLC) y Pilares",
    question: "¿Qué significa S-SDLC?",
    options: [
      "Software System Development Life Cycle.",
      "Secure Software Development Life Cycle (Ciclo de vida de desarrollo de software seguro).",
      "Standard Software Design Life Cycle."
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Ciclos de Vida (S-SDLC) y Pilares",
    question: "¿Cuáles son los tres pilares de la seguridad del software según Gary McGraw?",
    options: [
      "Firewalls, Antivirus y Backups.",
      "Gestión de riesgos, Buenas prácticas y Gestión del conocimiento.",
      "Java, C++ y Python."
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Ciclos de Vida (S-SDLC) y Pilares",
    question: "En el modelo de McGraw \"Seven Touchpoints\", ¿qué actividad se realiza en la fase de requisitos?",
    options: [
      "Test de penetración.",
      "Casos de abuso y Requisitos de seguridad.",
      "Revisión de código."
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Ciclos de Vida (S-SDLC) y Pilares",
    question: "¿Qué es un \"Touchpoint\" en el contexto de S-SDLC?",
    options: [
      "Un punto vulnerable en el código.",
      "Una buena práctica de seguridad aplicada en una fase específica del desarrollo.",
      "Una reunión diaria del equipo."
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Ciclos de Vida (S-SDLC) y Pilares",
    question: "¿Qué modelo de madurez derivado del CMM se enfoca en la ingeniería de seguridad de sistemas?",
    options: [
      "SSE-CMM (ISO/IEC 21827).",
      "ISO 9001.",
      "ITIL."
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    topic: "TEMA 1: El problema de la seguridad en el software",
    subtopic: "Ciclos de Vida (S-SDLC) y Pilares",
    question: "¿Qué metodología de Microsoft se menciona como ejemplo de S-SDLC?",
    options: [
      "Microsoft Trustworthy Computing SDL.",
      "Microsoft Office Security.",
      "Microsoft Windows Defender."
    ],
    correctAnswer: 0
  },
  // TEMA 2: Seguridad en el ciclo de vida del software
  {
    id: 31,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Introducción al S-SDLC (Profundización)",
    question: "Según el Tema 2, ¿cuál es el eslabón más débil en la seguridad actual?",
    options: [
      "Los firewalls.",
      "Las aplicaciones (capa de aplicación).",
      "Los cables de red."
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Introducción al S-SDLC (Profundización)",
    question: "¿Qué actividad de seguridad NO pertenece a la fase de codificación en el modelo de McGraw?",
    options: [
      "Análisis estático de código.",
      "Revisión de código.",
      "Definición de requisitos de seguridad."
    ],
    correctAnswer: 2
  },
  {
    id: 33,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Introducción al S-SDLC (Profundización)",
    question: "¿Qué busca la \"Gestión del conocimiento\" en seguridad?",
    options: [
      "Contratar a más expertos.",
      "Condensar y difundir buenas prácticas, principios y reglas para obtener software seguro.",
      "Guardar todos los logs del sistema."
    ],
    correctAnswer: 1
  },
  {
    id: 34,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Modelado de Ataques",
    question: "¿Cuál es el objetivo principal del \"Modelado de ataques\"?",
    options: [
      "Enseñar a los desarrolladores a hackear.",
      "Comprender la naturaleza exacta de la amenaza para concentrar los esfuerzos defensivos.",
      "Crear virus para probar el antivirus."
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Modelado de Ataques",
    question: "¿Qué son los \"Patrones de ataque\"?",
    options: [
      "Un tipo de virus.",
      "Un mecanismo para capturar y representar la perspectiva del atacante y métodos frecuentes de explotación.",
      "Un diseño gráfico de la interfaz."
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Modelado de Ataques",
    question: "¿Qué es un \"Árbol de ataque\"?",
    options: [
      "Un diagrama de flujo del programa.",
      "Un método sistemático para caracterizar la seguridad basado en la combinación de vulnerabilidades para comprometer el sistema.",
      "Una estructura de datos en programación."
    ],
    correctAnswer: 1
  },
  {
    id: 37,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Modelado de Ataques",
    question: "En un árbol de ataque, ¿qué representa el nodo raíz (superior)?",
    options: [
      "La vulnerabilidad más pequeña.",
      "La meta del atacante (ej: Falsificar Reserva).",
      "El costo del ataque."
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Casos de Abuso",
    question: "¿Qué es un \"Caso de abuso\"?",
    options: [
      "Un caso legal por delitos informáticos.",
      "La inversa de un caso de uso: describe lo que el software NO debe hacer o una acción maliciosa.",
      "Un error accidental del usuario."
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Casos de Abuso",
    question: "¿Cuál es una diferencia clave entre un Caso de Uso de Seguridad y un Caso de Abuso?",
    options: [
      "El Caso de Abuso lo escribe el usuario final.",
      "El criterio de éxito del Caso de Abuso es el éxito del atacante, mientras que en el de Seguridad es el éxito de la aplicación.",
      "No hay diferencia, son lo mismo."
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Casos de Abuso",
    question: "¿Qué método se considera el más simple y práctico para crear casos de abuso?",
    options: [
      "Análisis matemático.",
      "Brainstorming (Tormenta de ideas).",
      "Compilación de código."
    ],
    correctAnswer: 1
  },
  {
    id: 41,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Casos de Abuso",
    question: "¿Qué permite identificar un caso de abuso?",
    options: [
      "Los colores de la interfaz.",
      "Puntos susceptibles de ser atacados y requisitos negativos.",
      "La velocidad del procesador."
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Ingeniería de Requisitos de Seguridad",
    question: "¿Cuál es la causa de gran parte de las vulnerabilidades según la ingeniería de requisitos?",
    options: [
      "El uso de lenguajes antiguos.",
      "Requisitos inadecuados, inexactos o incompletos.",
      "La falta de presupuesto."
    ],
    correctAnswer: 1
  },
  {
    id: 43,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Ingeniería de Requisitos de Seguridad",
    question: "¿Qué son los \"Requisitos de servicios de seguridad\"?",
    options: [
      "Funciones que implementan una política de seguridad (ej: control de acceso, cifrado).",
      "Requisitos sobre la velocidad de la red.",
      "Requisitos sobre el color de las ventanas."
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Ingeniería de Requisitos de Seguridad",
    question: "¿Qué son los \"Requisitos de software seguro\"?",
    options: [
      "Requisitos no funcionales que aseguran que el software sea confiable y libre de vulnerabilidades (ej: validación de entradas).",
      "Requisitos que piden que el software venga en una caja fuerte.",
      "Requisitos de marketing."
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Ingeniería de Requisitos de Seguridad",
    question: "¿Qué elemento NO forma parte del modelo simplificado para el análisis de requisitos?",
    options: [
      "Interfaz de entrada/salida.",
      "Algoritmos.",
      "Precio de venta."
    ],
    correctAnswer: 2
  },
  {
    id: 46,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Análisis de Riesgo Arquitectónico",
    question: "¿Cuándo se debe realizar el análisis de riesgos de seguridad arquitectónico?",
    options: [
      "Al final, cuando el software ya está instalado.",
      "En la fase de diseño del sistema.",
      "Nunca, es una pérdida de tiempo."
    ],
    correctAnswer: 1
  },
  {
    id: 47,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Análisis de Riesgo Arquitectónico",
    question: "¿Qué es el \"Setting the bug bar\" o establecimiento de la barra de bugs?",
    options: [
      "Corregir todos los errores sin importar el costo.",
      "Priorizar el riesgo y definir qué nivel de riesgo es aceptable dado el presupuesto.",
      "Una herramienta de Microsoft."
    ],
    correctAnswer: 1
  },
  {
    id: 48,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Análisis de Riesgo Arquitectónico",
    question: "¿Qué metodología de Microsoft se utiliza a menudo para clasificar riesgos en el análisis arquitectónico?",
    options: [
      "AGILE.",
      "STRIDE.",
      "SCRUM."
    ],
    correctAnswer: 1
  },
  {
    id: 49,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Análisis de Riesgo Arquitectónico",
    question: "¿Qué tres pasos básicos implica el modelo de análisis de riesgo de Cigital?",
    options: [
      "Programar, Compilar, Ejecutar.",
      "Análisis de resistencia al ataque, Análisis de ambigüedad y Análisis de debilidad.",
      "Comprar, Instalar, Usar."
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Análisis de Riesgo Arquitectónico",
    question: "¿Qué es el \"Análisis de ambigüedad\" en el contexto de riesgos?",
    options: [
      "Buscar errores ortográficos en el manual.",
      "Un subproceso para descubrir nuevos riesgos buscando inconsistencias en la arquitectura desde múltiples puntos de vista.",
      "Analizar el código fuente línea por línea."
    ],
    correctAnswer: 1
  },
  {
    id: 51,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Patrones de Diseño",
    question: "¿Qué es un \"Patrón de diseño\" en seguridad?",
    options: [
      "Un dibujo de la arquitectura de red.",
      "Una solución general repetible a un problema de ingeniería de software recurrente, destinada a obtener un software menos vulnerable.",
      "Un fondo de pantalla seguro."
    ],
    correctAnswer: 1
  },
  {
    id: 52,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Patrones de Diseño",
    question: "¿Cuál es el objetivo principal de usar patrones de diseño de seguridad?",
    options: [
      "Hacer que el software se vea mejor.",
      "Contribuir al diseño de software más resistente y tolerante a los ataques.",
      "Aumentar la velocidad de procesamiento."
    ],
    correctAnswer: 1
  },
  {
    id: 53,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Pruebas de Seguridad Basadas en Riesgo",
    question: "¿Por qué las pruebas de software tradicionales NO son suficientes para la seguridad?",
    options: [
      "Porque son muy lentas.",
      "Porque no determinan cómo se comportará el software en condiciones anómalas y hostiles.",
      "Porque solo las pueden hacer los desarrolladores."
    ],
    correctAnswer: 1
  },
  {
    id: 54,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Pruebas de Seguridad Basadas en Riesgo",
    question: "¿Qué dos aproximaciones deben implicar las pruebas de seguridad?",
    options: [
      "Pruebas de hardware y pruebas de red.",
      "Pruebas de seguridad funcionales y pruebas desde la perspectiva del atacante.",
      "Pruebas de día y pruebas de noche."
    ],
    correctAnswer: 1
  },
  {
    id: 55,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Pruebas de Seguridad Basadas en Riesgo",
    question: "¿Qué buscan verificar las \"Pruebas de seguridad funcionales\"?",
    options: [
      "Que el sistema arranca rápido.",
      "Que los mecanismos de seguridad (ej: autenticación) están correctamente implementados.",
      "Que el atacante no pueda entrar."
    ],
    correctAnswer: 1
  },
  {
    id: 56,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Pruebas de Seguridad Basadas en Riesgo",
    question: "¿Qué buscan las pruebas desde la \"Perspectiva del atacante\"?",
    options: [
      "Simular la actuación de un posible atacante basándose en riesgos.",
      "Comprobar si el usuario sabe usar la aplicación.",
      "Verificar el color de los botones."
    ],
    correctAnswer: 0
  },
  {
    id: 57,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Pruebas de Seguridad Basadas en Riesgo",
    question: "¿Qué tipo de prueba de seguridad se considera de \"Caja Blanca\"?",
    options: [
      "Escaneo de vulnerabilidades.",
      "Revisión de código y análisis estático.",
      "Test de penetración."
    ],
    correctAnswer: 1
  },
  {
    id: 58,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Pruebas de Seguridad Basadas en Riesgo",
    question: "¿Qué tipo de prueba de seguridad se considera de \"Caja Negra\"?",
    options: [
      "Revisión de código fuente.",
      "Test de penetración y escaneo de vulnerabilidades.",
      "Análisis de arquitectura."
    ],
    correctAnswer: 1
  },
  {
    id: 59,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Pruebas de Seguridad Basadas en Riesgo",
    question: "¿Qué técnica de prueba implica inyectar datos aleatorios o inválidos para ver si el sistema falla?",
    options: [
      "Fuzzing Testing.",
      "Code Review.",
      "Hardening."
    ],
    correctAnswer: 0
  },
  {
    id: 60,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Pruebas de Seguridad Basadas en Riesgo",
    question: "¿Cuál es un objetivo de las pruebas basadas en riesgo?",
    options: [
      "Verificar la capacidad de supervivencia del software ante anomalías y errores.",
      "Verificar que el software es barato.",
      "Verificar que el software usa poca memoria RAM."
    ],
    correctAnswer: 0
  },
  {
    id: 61,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Revisión de Código (Análisis Estático)",
    question: "¿Qué actividad se considera la \"más importante\" de las mejores prácticas de seguridad durante el desarrollo?",
    options: [
      "La instalación del firewall.",
      "El análisis estático de código fuente.",
      "La formación de usuarios."
    ],
    correctAnswer: 1
  },
  {
    id: 62,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Revisión de Código (Análisis Estático)",
    question: "¿Qué ventaja tiene el análisis estático sobre el dinámico?",
    options: [
      "Puede encontrar errores tempranamente, incluso antes de que el programa se ejecute.",
      "Es más rápido de ejecutar en tiempo real.",
      "No requiere el código fuente."
    ],
    correctAnswer: 0
  },
  {
    id: 63,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Revisión de Código (Análisis Estático)",
    question: "¿Qué es un \"Falso Positivo\" en una herramienta de análisis estático?",
    options: [
      "Cuando la herramienta no encuentra un error que sí existe.",
      "Cuando la herramienta reporta un error que en realidad no es un problema real.",
      "Cuando la herramienta se bloquea."
    ],
    correctAnswer: 1
  },
  {
    id: 64,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Revisión de Código (Análisis Estático)",
    question: "¿Qué es un \"Falso Negativo\"?",
    options: [
      "Cuando la herramienta falla al detectar una vulnerabilidad real presente en el código.",
      "Cuando la herramienta reporta un virus.",
      "Cuando el código no compila."
    ],
    correctAnswer: 0
  },
  {
    id: 65,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Revisión de Código (Análisis Estático)",
    question: "¿Cuáles son las cuatro fases del ciclo de revisión de código?",
    options: [
      "Planificar, Hacer, Verificar, Actuar.",
      "Establecer objetivos, Ejecutar herramientas, Revisión de código, Hacer correcciones.",
      "Comprar, Instalar, Escanear, Borrar."
    ],
    correctAnswer: 1
  },
  {
    id: 66,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Revisión de Código (Análisis Estático)",
    question: "Para obtener buenos resultados con herramientas de análisis estático, ¿qué se recomienda hacer antes?",
    options: [
      "Borrar el código antiguo.",
      "Compilar el código.",
      "Publicar la aplicación en internet."
    ],
    correctAnswer: 1
  },
  {
    id: 67,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Revisión de Código (Análisis Estático)",
    question: "¿Qué suele ser un síntoma de un proceso de revisión de código ineficaz?",
    options: [
      "Encontrar muchos errores.",
      "Caer frecuentemente en un debate sobre la \"explotabilidad\" del fallo.",
      "Usar herramientas automáticas."
    ],
    correctAnswer: 1
  },
  {
    id: 68,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Revisión de Código (Análisis Estático)",
    question: "¿Qué capacidad es fundamental en una herramienta de análisis estático?",
    options: [
      "Que tenga una interfaz bonita.",
      "La capacidad de comprender el programa que se analiza.",
      "Que sea gratuita."
    ],
    correctAnswer: 1
  },
  {
    id: 69,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Revisión de Código (Análisis Estático)",
    question: "¿Qué ayuda a descubrir el análisis estático cuando aparece una nueva variedad de ataque?",
    options: [
      "Ayuda a comprobar de nuevo una gran cantidad de código para ver dónde podría tener éxito el nuevo ataque.",
      "Ayuda a formatear el disco duro.",
      "Ayuda a cambiar las contraseñas."
    ],
    correctAnswer: 0
  },
  {
    id: 70,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Revisión de Código (Análisis Estático)",
    question: "¿Qué tipo de entrada requiere una herramienta de análisis estático?",
    options: [
      "El ejecutable compilado solamente.",
      "El código fuente, bibliotecas y a veces el código compilado.",
      "Solo la documentación del usuario."
    ],
    correctAnswer: 1
  },
  {
    id: 71,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Test de Penetración (Pentesting)",
    question: "¿Cuál es la misión principal de un Test de Penetración?",
    options: [
      "Romper el hardware del servidor.",
      "Verificar cómo el software se comporta y resiste ante diferentes tipos de ataque.",
      "Verificar la velocidad de descarga."
    ],
    correctAnswer: 1
  },
  {
    id: 72,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Test de Penetración (Pentesting)",
    question: "¿Qué tipo de prueba se considera el Test de Penetración?",
    options: [
      "Caja Blanca.",
      "Caja Negra.",
      "Caja Transparente."
    ],
    correctAnswer: 1
  },
  {
    id: 73,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Test de Penetración (Pentesting)",
    question: "¿Cuál es una desventaja de realizar los Test de Penetración solo al final del ciclo de vida?",
    options: [
      "Son muy baratos.",
      "Los problemas se descubren demasiado tarde y su corrección es costosa.",
      "No encuentran nada."
    ],
    correctAnswer: 1
  },
  {
    id: 74,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Test de Penetración (Pentesting)",
    question: "¿Qué ventaja única tienen los Test de Penetración en el entorno de producción?",
    options: [
      "Pueden descubrir problemas operacionales y de configuración que se pasaron por alto en el desarrollo.",
      "Son más rápidos que revisar el código.",
      "No requieren permiso del dueño del sistema."
    ],
    correctAnswer: 0
  },
  {
    id: 75,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Test de Penetración (Pentesting)",
    question: "¿Qué significa que los tests de penetración prueban \"aspectos negativos\"?",
    options: [
      "Que prueban lo que el sistema NO debe permitir hacer.",
      "Que siempre dan malas noticias.",
      "Que restan puntos al proyecto."
    ],
    correctAnswer: 0
  },
  {
    id: 76,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Test de Penetración (Pentesting)",
    question: "¿Qué recomendación se da sobre los Test de Penetración?",
    options: [
      "Realizarlos solo una vez.",
      "No usarlos nunca.",
      "Realizarlos más de una vez y realimentar los resultados al equipo."
    ],
    correctAnswer: 2
  },
  {
    id: 77,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Test de Penetración (Pentesting)",
    question: "¿Para qué tipo de aplicaciones son útiles los Test de Penetración según el texto?",
    options: [
      "Solo para aplicaciones web propias.",
      "Para evaluar aplicaciones COTS (software comercial) también.",
      "Solo para virus."
    ],
    correctAnswer: 1
  },
  {
    id: 78,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Operaciones de Seguridad",
    question: "¿Qué tres actividades centrales conforman las operaciones de seguridad finales?",
    options: [
      "Diseño, Codificación y Prueba.",
      "Distribución, Despliegue y Operaciones.",
      "Venta, Marketing y Soporte."
    ],
    correctAnswer: 1
  },
  {
    id: 79,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Operaciones de Seguridad",
    question: "¿Cuál es el objetivo de la \"Distribución segura\"?",
    options: [
      "Vender más copias.",
      "Reducir al mínimo las posibilidades de manipulación del software durante su transmisión al consumidor.",
      "Comprimir los archivos al máximo."
    ],
    correctAnswer: 1
  },
  {
    id: 80,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Operaciones de Seguridad",
    question: "¿En qué consiste el \"Bastionado\" (Hardening) durante el despliegue?",
    options: [
      "En poner el servidor en un búnker.",
      "Ajustar los parámetros de configuración del entorno para que el software no esté expuesto innecesariamente.",
      "Instalar el software más rápido."
    ],
    correctAnswer: 1
  },
  {
    id: 81,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Operaciones de Seguridad",
    question: "Aunque el software sea seguro por diseño, ¿qué puede comprometerlo en la fase de operación?",
    options: [
      "Una configuración insegura o por defecto.",
      "El color de la interfaz.",
      "El tamaño del monitor."
    ],
    correctAnswer: 0
  },
  {
    id: 82,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Operaciones de Seguridad",
    question: "¿Qué sistemas son eficaces para la respuesta ante incidentes en la fase de operaciones?",
    options: [
      "Sistemas de facturación.",
      "Sistemas de registro de eventos (logs), monitorización y backup.",
      "Sistemas de videoconferencia."
    ],
    correctAnswer: 1
  },
  {
    id: 83,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Operaciones de Seguridad",
    question: "¿Qué capas del sistema se deben proteger según el modelo de capas?",
    options: [
      "Solo la red.",
      "Red, Sistema Operativo, Gestor de BBDD, Aplicación e Interfaz de Usuario.",
      "Solo la base de datos."
    ],
    correctAnswer: 1
  },
  {
    id: 84,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Revisión Externa",
    question: "¿Por qué es eficaz una revisión externa de seguridad?",
    options: [
      "Porque es obligatoria por ley.",
      "Porque aporta otra visión y ayuda a descubrir riesgos residuales que el equipo interno no vio.",
      "Porque es más barata."
    ],
    correctAnswer: 1
  },
  {
    id: 85,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "¿Qué significa el acrónimo STRIDE en el modelado de amenazas de Microsoft?",
    options: [
      "Security, Trust, Reliability, Integrity, Denial, Elevation.",
      "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.",
      "Standard Technical Rules In Development Environment."
    ],
    correctAnswer: 1
  },
  {
    id: 86,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "En STRIDE, ¿a qué amenaza corresponde el \"Spoofing\"?",
    options: [
      "Modificación de datos.",
      "Suplantación de identidad.",
      "Negación de servicio."
    ],
    correctAnswer: 1
  },
  {
    id: 87,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "En STRIDE, ¿a qué amenaza corresponde el \"Tampering\"?",
    options: [
      "Manipulación o modificación de datos.",
      "Ver información confidencial.",
      "Elevar privilegios."
    ],
    correctAnswer: 0
  },
  {
    id: 88,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "En STRIDE, ¿a qué amenaza corresponde la \"Information Disclosure\"?",
    options: [
      "Divulgación de información confidencial.",
      "Borrado de base de datos.",
      "Apagar el servidor."
    ],
    correctAnswer: 0
  },
  {
    id: 89,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "En STRIDE, ¿a qué amenaza corresponde la \"Elevation of Privilege\"?",
    options: [
      "Un usuario normal consigue permisos de administrador.",
      "El sistema se vuelve lento.",
      "El usuario olvida su contraseña."
    ],
    correctAnswer: 0
  },
  {
    id: 90,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "¿Qué herramienta de Microsoft ayuda a realizar el modelado de amenazas automáticamente?",
    options: [
      "Microsoft Word.",
      "Threat Analysis and Modeling Tool.",
      "Excel Security Plugin."
    ],
    correctAnswer: 1
  },
  {
    id: 91,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "¿Qué diagrama se utiliza comúnmente en la herramienta de modelado de amenazas para representar la aplicación?",
    options: [
      "Diagrama de clases.",
      "DFD (Diagrama de Flujo de Datos).",
      "Diagrama de Gantt."
    ],
    correctAnswer: 1
  },
  {
    id: 92,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "¿Qué es \"CAPEC\"?",
    options: [
      "Una herramienta de antivirus.",
      "Common Attack Pattern Enumeration and Classification (diccionario de patrones de ataque).",
      "Un protocolo de red seguro."
    ],
    correctAnswer: 1
  },
  {
    id: 93,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "¿Qué herramienta se menciona para realizar pruebas de penetración (pentesting) automatizadas en web?",
    options: [
      "IBM Security AppScan.",
      "Notepad++.",
      "Calculator."
    ],
    correctAnswer: 0
  },
  {
    id: 94,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "¿Qué es Metasploit?",
    options: [
      "Un juego de ordenador.",
      "Un software que ayuda a identificar problemas de seguridad y verificar mitigaciones (herramienta de pentesting).",
      "Un editor de texto."
    ],
    correctAnswer: 1
  },
  {
    id: 95,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "¿Qué es Armitage?",
    options: [
      "Una interfaz gráfica para la herramienta Metasploit.",
      "Un firewall hardware.",
      "Una base de datos segura."
    ],
    correctAnswer: 0
  },
  {
    id: 96,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "¿Qué es \"BSIMM\" (Building Security In Maturity Model)?",
    options: [
      "Un modelo de madurez para medir la seguridad del software en las organizaciones.",
      "Un lenguaje de programación.",
      "Un tipo de cable de red."
    ],
    correctAnswer: 0
  },
  {
    id: 97,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "¿Cuál es la función de una \"entidad externa\" en un diagrama DFD para modelado de amenazas?",
    options: [
      "Representar al usuario o sistemas externos que interactúan con la aplicación.",
      "Representar la base de datos interna.",
      "Representar el disco duro."
    ],
    correctAnswer: 0
  },
  {
    id: 98,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "¿Qué salvaguarda ayuda a mitigar la amenaza de \"Tampering\" (manipulación de datos)?",
    options: [
      "Cifrado y hash de datos sensibles / Integridad.",
      "Apagar el ordenador.",
      "Usar monitores más grandes."
    ],
    correctAnswer: 0
  },
  {
    id: 99,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "¿Qué salvaguarda es clave para proteger contra \"Information Disclosure\" en el tráfico de red?",
    options: [
      "Usar protocolos seguros (HTTPS/SSL) y cifrado.",
      "Comprimir los archivos.",
      "Usar cables de fibra óptica."
    ],
    correctAnswer: 0
  },
  {
    id: 100,
    topic: "TEMA 2: Seguridad en el ciclo de vida del software",
    subtopic: "Material Complementario y Metodologías (STRIDE, Herramientas)",
    question: "¿Qué se debe hacer con los servicios por defecto al desplegar una aplicación segura?",
    options: [
      "Dejarlos todos activos por si acaso.",
      "Desactivar los servicios no utilizados y cambiar las configuraciones por defecto inseguras.",
      "Reinstalar el sistema operativo cada semana."
    ],
    correctAnswer: 1
  }
];

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questionsBank;
}
