# Chatbot demo · Iberdrola × Carrefour

Demo estática de un chatbot conversacional para la alianza **Iberdrola × Carrefour**, pensada para ser mostrada en tótems digitales en puntos de venta.

> ⚠️ Esta versión **no usa IA real**: las respuestas están basadas en coincidencia de palabras clave. Es una maqueta funcional para validar el concepto antes de integrar un motor real.

## ✨ Características

- 💬 Interfaz de chat limpia con identidad visual de Iberdrola.
- ⚡ Respuestas automáticas a más de 10 categorías de preguntas habituales.
- 🔘 3 accesos rápidos para las preguntas más frecuentes.
- 🛡️ Mensaje de respaldo cuando la pregunta no se reconoce.
- 📱 Diseño responsive (tablet, móvil y tótem vertical).
- 🚀 Sin dependencias, sin frameworks, sin build: HTML + CSS + JS planos.

## 🗂️ Estructura

```
iberdrola-carrefour-chatbot/
├── index.html         → estructura del chat
├── styles.css         → estilos (colores Iberdrola)
├── script.js          → base de conocimiento y lógica
└── assets/
    ├── iberdrola-logo.svg
    └── carrefour-logo.svg
```

## 🚀 Cómo probarlo en local

Solo abre `index.html` en tu navegador. No hace falta servidor.

## ✏️ Cómo editar las respuestas

Abre `script.js`. Cada bloque del array `knowledgeBase` representa un tema:

```js
{
  id: "socio",
  keywords: ["socio", "hacerme socio", "club carrefour", ...],
  answer: `<strong>...</strong>`
}
```

- **`keywords`**: lista de fragmentos (en minúscula, sin acentos) que detonan la respuesta.
- **`answer`**: HTML que se inyecta en el mensaje del bot. Admite `<strong>`, `<ul>`, `<a>`, etc.

Para añadir un tema nuevo, copia un bloque y modifícalo. Para cambiar el mensaje de respaldo, edita `fallbackMessage` al final del archivo.

## 🌐 Cómo subirlo a GitHub y publicarlo gratis con GitHub Pages

### 1. Crear el repositorio en GitHub
1. Entra en [github.com](https://github.com) e inicia sesión.
2. Pulsa el botón verde **New** (o **+ → New repository**) arriba a la derecha.
3. Ponle un nombre, por ejemplo `iberdrola-carrefour-chatbot`.
4. Elige **Public** (necesario para GitHub Pages gratis).
5. **No marques** "Add a README" — ya lo tienes.
6. Pulsa **Create repository**.

### 2. Subir los archivos (opción fácil, sin terminal)
1. En la pantalla del repositorio recién creado, pulsa **uploading an existing file**.
2. Arrastra **todo el contenido** de la carpeta (`index.html`, `styles.css`, `script.js` y la carpeta `assets/`).
3. Abajo, pulsa **Commit changes**.

### 2 bis. Subir los archivos (con terminal, opción profesional)
```bash
cd iberdrola-carrefour-chatbot
git init
git add .
git commit -m "Primera versión de la demo"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/iberdrola-carrefour-chatbot.git
git push -u origin main
```

### 3. Activar GitHub Pages
1. En el repositorio, ve a **Settings** (arriba a la derecha).
2. En el menú izquierdo, pulsa **Pages**.
3. En **Source**, selecciona la rama **main** y la carpeta **/ (root)**.
4. Pulsa **Save**.
5. Espera 1–2 minutos. Aparecerá una URL del tipo:
   `https://TU_USUARIO.github.io/iberdrola-carrefour-chatbot/`
6. Esa URL ya se puede abrir desde cualquier dispositivo (perfecto para mostrar en una reunión o en un tótem).

## 🎨 Personalización rápida

- **Color principal**: cambia `--iberdrola-green` en `styles.css`.
- **Logos**: reemplaza los SVG dentro de `assets/` por los oficiales si los tienes.
- **Accesos rápidos**: edita los `<button class="shortcut">` en `index.html`.
- **Avatar del bot**: el `<div class="avatar">` en `index.html`.

## 📋 Limitaciones

- Sin memoria de conversación: cada mensaje se evalúa de forma aislada.
- Sin IA: respuestas determinísticas por palabra clave. Suficiente para la demo y para flujos cerrados; insuficiente para preguntas abiertas.
- Si se quiere un chatbot real con IA, se puede sustituir `findAnswer()` por una llamada a la API de Iberdrola o a un motor conversacional propio.
