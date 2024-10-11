# MIR - Agenda Telefónica

Este proyecto es una aplicación de backend para una Agenda Telefónica, construida con Node.js y Express. Permite gestionar entradas de contactos, incluyendo operaciones de creación, lectura, actualización y eliminación (CRUD).

## Índice

1. [Instalación](#instalación)
2. [Uso](#uso)
3. [API](#api)
   - [Obtener todas las entradas](#obtener-todas-las-entradas)
   - [Obtener una entrada por ID](#obtener-una-entrada-por-id)
   - [Agregar una nueva entrada](#agregar-una-nueva-entrada)
   - [Eliminar una entrada](#eliminar-una-entrada)
4. [Manejo de errores](#manejo-de-errores)
5. [Middleware](#middleware)
6. [Tecnologías](#tecnologías)
7. [Configuración del Proyecto](#configuración-del-proyecto)
8. [Autor](#autor)

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```

## Uso

Para iniciar la aplicación, puedes usar los siguientes comandos:

- Para iniciar la aplicación en modo producción:

  ```bash
  npm start
  ```

- Para iniciar la aplicación en modo desarrollo (con reinicio automático al hacer cambios):

  ```bash
  npm run dev
  ```

La aplicación se ejecutará en `http://localhost:3001`.

## API

### Obtener todas las entradas

- **Endpoint:** `GET /api/persons`
- **Descripción:** Devuelve una lista de entradas de la agenda telefónica.

- **Ejemplo de respuesta:**
  ```json
  [
    { "id": 1, "name": "Arto Hellas", "number": "040-123456" },
    { "id": 2, "name": "Ada Lovelace", "number": "39-44-5323523" },
    { "id": 3, "name": "Dan Abramov", "number": "12-43-234345" },
    { "id": 4, "name": "Mary Poppendieck", "number": "39-23-6423122" }
  ]
  ```

### Obtener una entrada por ID

- **Endpoint:** `GET /api/persons/:id`
- **Descripción:** Devuelve la información de una única entrada de la agenda basada en el ID proporcionado.

### Agregar una nueva entrada

- **Endpoint:** `POST /api/persons`
- **Descripción:** Agrega una nueva entrada a la agenda telefónica.
- **Requiere un cuerpo JSON con la siguiente estructura:**
  ```json
  {
    "name": "Nombre del contacto",
    "number": "Número del contacto"
  }
  ```

### Eliminar una entrada

- **Endpoint:** `DELETE /api/persons/:id`
- **Descripción:** Elimina una entrada de la agenda utilizando el ID.

## Manejo de errores

El sistema maneja errores de manera adecuada. Si falta el nombre o el número, o si el nombre ya existe, el servidor responde con el código de estado apropiado y un mensaje de error. Ejemplo de respuesta de error:

```json
{ "error": "name must be unique" }
```

## Middleware

### Morgan

Este proyecto utiliza morgan para el registro de mensajes en la consola, con una configuración personalizada.

## Tecnologías

- NodeJS
- TypeScript
- Express

## Configuración del Proyecto

Este proyecto utiliza varias herramientas para mantener la calidad del código y la eficiencia del desarrollo:

- **Husky:** Para gestionar hooks de Git y automatizar tareas antes de realizar commits.
- **ESLint con Airbnb:** Para asegurar un estilo de código consistente y evitar errores comunes.
- **Prettier:** Para formatear el código automáticamente.
- **Lint-Staged:** Para ejecutar linters en los archivos que están siendo confirmados.
- **EditorConfig:** Para mantener estilos de codificación consistentes entre diferentes editores y entornos.
- **Commitlint:** Para asegurar que los mensajes de commit sigan un estándar específico y sean uniformes.

## Autor

Valeria Lozano _a.k.a._ **Bubbl33s**

- [GitHub](https://www.your-site.com)
- [Codepen](https://codepen.io/Bubbl33s)
