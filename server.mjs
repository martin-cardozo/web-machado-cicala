// server.mjs

import express from 'express';

const app = express();

// Configuración para deshabilitar el almacenamiento en caché
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, max-age=0');
  next();
});

// Rutas para servir tus archivos estáticos (por ejemplo, imágenes, CSS, JS)
app.use(express.static('public')); // Ajusta la ruta 'public' según tu estructura de archivos

// Resto de la configuración de tu servidor

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

