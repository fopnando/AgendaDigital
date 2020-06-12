const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
 
app.use(express.static(`${__dirname}/dist/${app-agenda}`));
 
app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${app-agenda}/index.html`));
});
 
app.listen(process.env.PORT || 8080);
app.listen(PORT, () => {
    console.log('Servidor Iniciado na Porta' + PORT);
})


