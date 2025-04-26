# 🖥️ BACKEND TIENDA ONLINE GBSTORE CON INTERFAZ PARA ADMINISTRADOR
Este es el backend de una API RESTful construida con Node.js, Express y MongoDB, diseñada para gestionar usuarios, autenticación y productos de la tienda online GBStores.

# 🚀 Tecnologías usadas
Node.js

Express

MongoDB + Mongoose

JSON Web Tokens (JWT)

Bcrypt

dotenv

CORS

# 📁 Estructura de carpetas

config/db.js

controllers/
│   ├── authController.js
│   ├── productController.js
│   └── userController.js

middlewares/
│   └── authMiddleware.js

models/
│   ├── Product.js
│   └── User.js

routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── userRoutes.js

.env


# 🧪 Rutas principales
🔐 Autenticación
POST /api/auth/register → Crear un nuevo usuario

POST /api/auth/login → Iniciar sesión y obtener token

👤 Usuarios
GET /api/users/profile → Obtener perfil del usuario autenticado

🛒 Productos
GET /api/products → Listar todos los productos

POST /api/products → Crear un producto (requiere token, puede validarse rol admin)

GET /api/products/:id → Ver detalle de un producto

PUT /api/products/:id → Editar un producto

DELETE /api/products/:id → Eliminar un producto

# ⚙️ Cómo correr el backend

npm install
npm run dev
El servidor corre por defecto en:
http://localhost:4000

🔐 Seguridad y configuración
Usa JWT para proteger rutas privadas.

Contraseñas almacenadas de forma segura con bcrypt.

CORS habilitado para permitir peticiones desde el frontend.

