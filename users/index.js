const express = require('express');
const app = express();
const port = 3000;

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('users');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
