require('dotenv').config();  

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>API GB</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin-top: 100px;
        }
        h1 {
          margin-bottom: 40px;
        }
        button {
          font-size: 18px;
          padding: 10px 20px;
          margin: 10px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <h1>Bienvenidos a la API de mi Tienda Virtual GB</h1>
      <button onclick="location.href='/api/users'">Ver Usuarios</button>
      <button onclick="location.href='/api/products'">Ver Productos</button>
      <button onclick="location.href='/agregar-usuario'">Agregar Usuario</button>
      <button onclick="location.href='/quitar-usuario'">Quitar Usuario</button>
      <button onclick="location.href='/agregar-producto'">Agregar Producto</button>
      <button onclick="location.href='/quitar-producto'">Quitar Producto</button>
    </body>
    </html>
  `);
});


app.get('/agregar-usuario', (req, res) => {
  res.send(`
    <form action="/api/users" method="POST">
      <h2>Agregar Usuario</h2>
      <label>Nombre:</label>
      <input type="text" name="username" required>
      <label>Email:</label>
      <input type="email" name="email" required>
      <label>Contraseña:</label>
      <input type="password" name="password" required>
      <button type="submit">Agregar Usuario</button>
    </form>
  `);
});

app.get('/quitar-usuario', (req, res) => {
  res.send(`
    <form action="/api/users" method="DELETE">
      <h2>Eliminar Usuario</h2>
      <label>ID del usuario a eliminar:</label>
      <input type="text" name="userId" required>
      <button type="submit">Eliminar Usuario</button>
    </form>
  `);
});


app.get('/agregar-producto', (req, res) => {
  res.send(`
    <form action="/api/products" method="POST">
      <h2>Agregar Producto</h2>
      <label>Nombre del producto:</label>
      <input type="text" name="name" required>
      <label>Descripción:</label>
      <input type="text" name="description" required>
      <label>Precio:</label>
      <input type="number" name="price" required>
      <label>Stock:</label>
      <input type="number" name="stock" required>
      <label>Imagen:</label>
      <input type="text" name="image" required>
      <button type="submit">Agregar Producto</button>
    </form>
  `);
});

app.get('/quitar-producto', (req, res) => {
  res.send(`
    <form action="/api/products" method="DELETE">
      <h2>Eliminar Producto</h2>
      <label>ID del producto a eliminar:</label>
      <input type="text" name="productId" required>
      <button type="submit">Eliminar Producto</button>
    </form>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
