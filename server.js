const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8082;

app.use(express.static(__dirname + '/dist/app-agenda'));
// para ter certeza do caminho faça o build do projeto com o 
//   comando npm run build --prod

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/app-agenda/index.html');
})

app.listen(PORT, () => {
    console.log('Servidor Iniciado na Porta' + PORT);
})