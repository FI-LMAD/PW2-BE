# Todo API (Ejemplo) — Documentación rápida

Requisitos
- Node.js v14+ (recomendado v16+)
- npm
- MongoDB (local) o cuenta en MongoDB Atlas

Archivos importantes
- src/index.js — punto de entrada (Express).
- src/config/db.js — conexión a MongoDB (Mongoose).
- src/models/todo.js — esquema Mongoose (title, description, completed).
- src/controllers/todoController.js — lógica CRUD.
- src/routes/todos.js — rutas REST en /api/todos

Variables de entorno
Copia `.env.example` a `.env` y edita:
- MONGO_URI: URI de conexión a MongoDB
- PORT: puerto para la API (por defecto 3000)

Instalación y ejecución
1. Instalar dependencias:
   npm install
2. Crear .env:
   cp .env.example .env
   (Editar MONGO_URI si hace falta)
3. Ejecutar en desarrollo:
   npm run dev
   o en "producción":
   npm start

Endpoints principales
- GET / → health check
- GET /api/todos → listar todos
- GET /api/todos/:id → obtener por id
- POST /api/todos → crear (JSON: { "title": "Tarea", "description": "Opcional" })
- PUT /api/todos/:id → actualizar (envía campos a cambiar)
- DELETE /api/todos/:id → eliminar

Ejemplos curl
- Crear:
  curl -X POST http://localhost:3000/api/todos -H "Content-Type: application/json" -d '{"title":"Estudiar","description":"Repasar apuntes"}'
- Listar:
  curl http://localhost:3000/api/todos
- Actualizar:
  curl -X PUT http://localhost:3000/api/todos/{id} -H "Content-Type: application/json" -d '{"completed":true}'
- Borrar:
  curl -X DELETE http://localhost:3000/api/todos/{id}

Configurar MongoDB local (mínimos pasos)
1. Descargar e instalar MongoDB Community Server desde https://www.mongodb.com/try/download/community
2. Iniciar el servidor (Windows):
   - Si instalaste como servicio, se inicia automáticamente.
   - Para iniciar manualmente en PowerShell:
     mongod --dbpath "C:\ruta\a\tu\carpeta\db"
3. URI local de ejemplo:
   mongodb://localhost:27017/todosdb
4. Poner esa URI en `MONGO_URI` del `.env`.

Configurar MongoDB Atlas (rápido)
1. Crear cuenta en https://cloud.mongodb.com y crear un Cluster gratuito.
2. Crear un Database User (usuario/contraseña).
3. Añadir tu IP (o 0.0.0.0/0 para pruebas, no recomendado en producción).
4. Obtener connection string desde Atlas — será similar a:
   mongodb+srv://<user>:<password>@cluster0.abcd.mongodb.net/<dbname>?retryWrites=true&w=majority
5. Reemplazar `<user>`, `<password>`, `<dbname>` y pegar en `MONGO_URI` del `.env`.

Problemas comunes
- Error de conexión: revisar `MONGO_URI`, usuario/contraseña y whitelist de IP (Atlas).
- Versiones Node: usar Node 14+ si ves errores ESM.
- Si la app se cierra al iniciar, revisar logs en consola — normalmente Mongoose informa el motivo.