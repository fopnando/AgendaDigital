const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/app-agenda'))  


app.get('/*', (req, res) => {
res.sendFile(__dirname + '/dist/app-agenda/index.html');
})

app.listen(PORT, () => {
console.log('Servidor Iniciado na Porta' + PORT);
})
