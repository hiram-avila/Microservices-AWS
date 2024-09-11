const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/payments', (req, res) => {
    res.send('Payments aqui escuchando');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
