# 🧪 Guía Rápida de Pruebas - SecureQuiz

## Cómo Abrir y Probar la Aplicación

### Opción 1: Abrir Directamente
1. Navega a la carpeta del proyecto
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado

### Opción 2: Desde VS Code (recomendado)
1. Instala la extensión "Live Server"
2. Clic derecho en `index.html`
3. Selecciona "Open with Live Server"
4. Se abrirá en `http://localhost:5500`

### Opción 3: Python Simple Server
```bash
cd "c:\Users\gbflo\Downloads\Practica Seguridad de Software"
python -m http.server 8000
```
Luego abre: `http://localhost:8000`

---

## ✅ Checklist de Pruebas Rápidas

### Prueba Básica (5 minutos)
- [ ] La página carga correctamente
- [ ] La navegación funciona (Inicio, Estudiar, Quiz)
- [ ] Los PDFs se pueden abrir
- [ ] El formulario del quiz valida campos
- [ ] Puedo responder al menos 10 preguntas
- [ ] Los resultados se muestran correctamente
- [ ] El botón de WhatsApp funciona

### Prueba Completa (15 minutos)
- [ ] Probé las 3 secciones principales
- [ ] Completé un quiz de 10 preguntas
- [ ] Completé un quiz de 20 preguntas
- [ ] Verifiqué que las preguntas son aleatorias
- [ ] Probé enviar resultados por WhatsApp
- [ ] Descargué el certificado PNG
- [ ] Probé "Realizar Otro Quiz"
- [ ] Verifiqué responsive en móvil (DevTools)
- [ ] El link al portafolio funciona

---

## 🐛 Problemas Comunes y Soluciones

### Problema: Las preguntas no se cargan
**Solución**: Asegúrate de que `questions-data.js` esté en la misma carpeta que `index.html`

### Problema: CSS no se aplica
**Solución**: Verifica que `styles.css` esté en la carpeta correcta y sin errores de sintaxis

### Problema: WhatsApp no abre
**Solución**: 
- Verifica que tengas WhatsApp instalado o acceso a WhatsApp Web
- El número debe estar en formato internacional

### Problema: Certificado no se descarga
**Solución**: 
- Asegúrate de permitir descargas en tu navegador
- Verifica la configuración de bloqueo de pop-ups

---

## 📱 Prueba en Móvil

### Método 1: DevTools (Chrome/Edge)
1. Presiona `F12`
2. Click en el icono de móvil (Ctrl+Shift+M)
3. Selecciona dispositivo: iPhone SE, iPad, etc.
4. Prueba la app

### Método 2: Dispositivo Real
1. Sube a GitHub Pages (ver README.md)
2. Abre la URL desde tu teléfono
3. Prueba toda la funcionalidad

---

## 🎯 Qué Verificar en Cada Sección

### Home
- ✅ Título con gradient se ve bien
- ✅ Orbes de fondo están animados
- ✅ Tarjetas de estadísticas muestran: 100, 2, ∞
- ✅ Botones funcionan

### Estudiar
- ✅ 2 tarjetas de material visible
- ✅ Descripción completa en cada tarjeta
- ✅ Tags de tópicos se ven bien
- ✅ Links "Abrir PDF" funcionan
- ✅ Aviso de copyright de UNIR visible

### Quiz - Setup
- ✅ Formulario con 3 campos
- ✅ Validación de campos funciona
- ✅ Select tiene opciones: 10, 20, 30, 40, 50, 100
- ✅ Botón "Comenzar Quiz" activo

### Quiz - Preguntas
- ✅ Barra de progreso se anima
- ✅ Contador muestra pregunta actual
- ✅ Badge de tema visible
- ✅ Pregunta legible
- ✅ 3 opciones con letras A, B, C
- ✅ Al seleccionar: se marca correcta/incorrecta
- ✅ Botón "Siguiente" se habilita

### Quiz - Resultados
- ✅ Icono 🎉 se anima
- ✅ Nombre del usuario visible
- ✅ Círculo de progreso se anima al porcentaje
- ✅ Porcentaje correcto
- ✅ Correctas e incorrectas correctas
- ✅ Botón WhatsApp funciona
- ✅ Botón "Realizar Otro Quiz" funciona

---

## 🔍 Detalles a Observar

### Animaciones
- Orbes flotan suavemente (20 segundos)
- Hover en botones: se elevan
- Progress bar: se llena smoothly
- Círculo de resultados: se llena en 1 segundo
- Icono de resultados: bounce infinito

### Colores
- Fondo: Muy oscuro (#0f0f23)
- Primary: Azul (#667eea)
- Gradientes en títulos
- Verde para correctas (#10b981)
- Rojo para incorrectas (#ef4444)

### Tipografía
- Fuente: Inter (Google Fonts)
- Títulos grandes y bold
- Texto secundario más suave
- Iconos SVG bien alineados

---

## 📊 Pruebas de Funcionalidad

### Test 1: Validación de Formulario
```
Datos de entrada:
- Nombre: [vacío]
- Teléfono: [vacío]
Resultado esperado: Alerta "Por favor ingresa tu nombre completo"
```

### Test 2: Validación de Teléfono
```
Datos de entrada:
- Nombre: "Juan Pérez"
- Teléfono: "123"
Resultado esperado: Alerta "Por favor ingresa un número de teléfono válido"
```

### Test 3: Quiz Completo
```
Datos de entrada:
- Nombre: "Tu Nombre"
- Teléfono: "8123456789"
- Preguntas: 10
Acciones: Responder todas las preguntas
Resultado esperado: Pantalla de resultados con score correcto
```

### Test 4: Aleatorización
```
Acción: Realizar 2 quizzes consecutivos de 10 preguntas
Resultado esperado: Preguntas diferentes en cada quiz
```

### Test 5: WhatsApp
```
Acción: Click en "Enviar Resultados por WhatsApp"
Resultado esperado:
1. Descarga de certificado PNG
2. Apertura de WhatsApp con mensaje formateado
3. Destinatario: +52 81 3676 0495
```

---

## 🎨 Verificación Visual

### Desktop (1920x1080)
- [ ] Todo centrado correctamente
- [ ] Espaciado generoso
- [ ] Secciones ocupan altura completa
- [ ] Texto legible sin zoom

### Tablet (768x1024)
- [ ] Layout se adapta
- [ ] Navegación visible
- [ ] Quiz cards no muy anchos
- [ ] Botones accesibles

### Mobile (375x667)
- [ ] Stack vertical
- [ ] Navegación compacta
- [ ] Botones full-width
- [ ] Texto legible
- [ ] Sin scroll horizontal

---

## ⚡ Pruebas de Rendimiento

### Tiempo de Carga
- Página debe cargar en < 2 segundos
- Fuentes de Google Fonts pueden tardar un poco más

### Animaciones
- Deben ser suaves (60 FPS)
- Sin lag en hover effects
- Transiciones smooth

### Responsividad
- Click en opciones: respuesta inmediata
- Navegación: cambio de sección instantáneo
- Progress bar: actualización suave

---

## 📸 Capturas Recomendadas para Portafolio

1. **Hero Section**: Muestra el título con gradients y orbes
2. **Study Materials**: Las 2 tarjetas de material
3. **Quiz Setup**: El formulario completo
4. **Quiz Question**: Una pregunta con opciones
5. **Quiz Results**: Pantalla de resultados con círculo animado
6. **Mobile View**: Versión móvil del quiz
7. **Certificate**: Un certificado generado

---

## 🚀 Lista Pre-Deploy

Antes de subir a GitHub Pages:
- [ ] Todos los archivos en la carpeta correcta
- [ ] PDFs en `elementos_estudio/`
- [ ] Sin errores en consola del navegador (F12)
- [ ] Links de portafolio correctos
- [ ] Número de WhatsApp correcto
- [ ] Créditos actualizados
- [ ] README.md completo

---

## 📞 Soporte

Si encuentras algún problema:
1. Abre DevTools (F12) > Console
2. Verifica si hay errores en rojo
3. Revisa que todos los archivos estén presentes
4. Asegúrate de usar un navegador moderno (Chrome, Firefox, Edge)

---

**Última actualización**: 12 de Febrero, 2026  
**Versión**: 1.0.0
