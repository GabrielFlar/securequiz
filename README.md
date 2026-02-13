# 🔐 SecureQuiz - Plataforma de Trivia de Seguridad de Software

Aplicación web interactiva para estudiar y evaluar conocimientos sobre seguridad en el desarrollo de software.

## 🌟 Características

- **📚 Material de Estudio**: Acceso a documentos académicos de UNIR sobre seguridad de software
- **🎯 Quiz Interactivo**: Sistema de preguntas con selección personalizable (10, 20, 30, 40, 50 o 100 preguntas)
- **📊 Resultados Detallados**: Visualización de puntuación con gráficos circulares animados
- **📱 Integración WhatsApp**: Envío automático de resultados y generación de certificados
- **🎨 Diseño Moderno**: Interfaz profesional con tema oscuro, gradientes y animaciones
- **📱 Responsive**: Optimizado para dispositivos móviles y escritorio

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con variables CSS, gradientes y animaciones
- **JavaScript (ES6+)**: Lógica de la aplicación, gestión del quiz y Canvas API
- **GitHub Pages**: Alojamiento estático

## 📋 Contenido del Quiz

El banco de preguntas incluye **100 preguntas** organizadas en 2 temas principales:

### Tema 1: El problema de la seguridad en el software
- Introducción y Conceptos Básicos
- Vulnerabilidades (CVE y CWE)
- Propiedades del Software Seguro
- Principios de Diseño de Seguridad
- Amenazas y Taxonomía de Ataques
- Ciclos de Vida (S-SDLC) y Pilares

### Tema 2: Seguridad en el ciclo de vida del software
- Introducción al S-SDLC
- Modelado de Ataques
- Casos de Abuso
- Ingeniería de Requisitos de Seguridad
- Análisis de Riesgo Arquitectónico
- Patrones de Diseño
- Pruebas de Seguridad Basadas en Riesgo
- Revisión de Código (Análisis Estático)
- Test de Penetración (Pentesting)
- Operaciones de Seguridad

## 🎓 Uso de la Aplicación

1. **Inicio**: Navega por la página principal y conoce las características
2. **Estudiar**: Accede al material de estudio en formato PDF
3. **Quiz**:
   - Ingresa tu nombre completo
   - Ingresa tu número de teléfono (10 dígitos)
   - Selecciona el número de preguntas
   - Responde las preguntas seleccionando una opción
   - Visualiza tus resultados al finalizar
4. **Compartir**: Envía tus resultados por WhatsApp y descarga tu certificado

## 📁 Estructura del Proyecto

```
Practica Seguridad de Software/
├── index.html              # Página principal
├── styles.css              # Estilos de la aplicación
├── app.js                  # Navegación y lógica general
├── quiz.js                 # Lógica del quiz
├── whatsapp.js             # Integración WhatsApp y certificados
├── questions-data.js       # Banco de preguntas (100 preguntas)
├── banco_perguntas.txt     # Archivo original de preguntas
├── elementos_estudio/      # PDFs de estudio
│   ├── TEMA 1 (1).pdf
│   └── tema 2 uts.pdf
└── README.md               # Este archivo
```

## 🌐 Despliegue en GitHub Pages

### Opción 1: Desde la Web de GitHub

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. Scroll hasta la sección **Pages**
4. En **Source**, selecciona la rama `main` (o `master`)
5. Click en **Save**
6. Tu sitio estará disponible en: `https://[tu-usuario].github.io/[nombre-repo]/`

### Opción 2: Desde la Terminal

```bash
# 1. Inicializar repositorio Git (si no existe)
git init

# 2. Agregar archivos
git add .

# 3. Hacer commit
git commit -m "Initial commit: SecureQuiz application"

# 4. Agregar repositorio remoto
git remote add origin https://github.com/[tu-usuario]/[nombre-repo].git

# 5. Push a GitHub
git push -u origin main

# 6. Activar GitHub Pages desde Settings > Pages
```

## 👨‍💻 Créditos

**Desarrollado por**: Gabriel Flores  
**Universidad**: Universidad Internacional de La Rioja (UNIR)  
**Profesor**: Guillermo Mendoza  
**Portafolio**: [gabrielflar.github.io/GabrielFlar.com](https://gabrielflar.github.io/GabrielFlar.com/)

## 📄 Licencia y Atribuciones

- **Material de Estudio**: © Universidad Internacional de La Rioja (UNIR)
- Los materiales académicos se utilizan con fines educativos
- **Código de la Aplicación**: Desarrollado por Gabriel Flores

## 🤝 Contribuciones

Este proyecto fue creado con fines educativos. Para sugerencias o mejoras, contacta a través del portafolio.

## 📞 Contacto

Para envío de resultados: WhatsApp +52 81 3676 0495

---

**¡Buena suerte en tu estudio de Seguridad de Software! 🔒**
