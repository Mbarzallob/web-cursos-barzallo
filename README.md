# Gestión de Cursos

Este proyecto es una página web para gestionar cursos, desarrollada con HTML, CSS y JavaScript. La página permite agregar, visualizar y almacenar cursos de forma dinámica en el navegador utilizando `localStorage`.

## Estructura del Proyecto

### HTML

El archivo principal `index.html` contiene la estructura básica de la página:

- **Encabezado y Navegación**: Incluye enlaces a las secciones Inicio, Cursos, Agregar Curso y Contacto.
- **Sección de Inicio**: Muestra un mensaje de bienvenida.
- **Sección de Gestión de Cursos**: Despliega una lista de cursos agregados por el usuario.
- **Sección de Agregar Curso**: Contiene un formulario donde los usuarios pueden agregar nuevos cursos con los siguientes campos:
  - Nombre del curso
  - Instructor
  - Fecha de inicio
  - Duración
  - Descripción
- **Sección de Contacto**: Información de contacto.

### CSS

El archivo `styles.css` define el estilo de la página. Algunos puntos destacados:

- Estilo minimalista con la fuente `Baskervville SC`.
- Diseño responsivo con secciones centradas y un esquema de colores basado en **darkorange** y blanco.
- Transiciones y efectos al pasar el mouse sobre los elementos de la lista de navegación y botones.

### JavaScript

El archivo `script.js` maneja la lógica para agregar y mostrar los cursos:

1. **Agregar Curso**: Captura los datos del formulario, crea un objeto curso y lo agrega a la lista visible.
2. **Mostrar Detalles**: Los cursos agregados incluyen un botón para mostrar más detalles (descripción) de cada curso.
3. **Almacenamiento Local**: Utiliza `localStorage` para guardar los cursos y cargarlos automáticamente cuando el usuario vuelve a abrir la página.

### Funcionalidad

- Los cursos ingresados se guardan en `localStorage` para mantenerlos persistentes en el navegador.
- El botón "Ver más detalles" permite al usuario visualizar la descripción completa del curso sin recargar la página.

## Archivos

1. **index.html**: Contiene la estructura de la página web.
2. **styles.css**: Archivo de estilo para la página.
3. **script.js**: Script para manejar la interacción con el DOM y el almacenamiento en `localStorage`.
