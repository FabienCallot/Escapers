const express = require('express');
const app = express();
const PORT = 3010;

const router = require('./app/router');
//je définis le template motor
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
// je définis le dossier public comme static et accessible pour le client
app.use(express.static(__dirname + '/public'));
// j'utlise le router pour mes routes
app.use(router);

//TODO: mettre en place le middleware 404 avec un errorController

//le serveur écoute sur le port ...:
app.listen(PORT, () => {
    console.log('server available on http://localhost:3010');
});

// TODO: mettre des commentaires partout !
//TODO: création de BDD ?
