const express = require('express');
const path = require('path');
const app = express();

// Directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'src'));

// Manejar todas las rutas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});