const express = require('express');
const app = express();
const port = 3002;

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('Pagos');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
