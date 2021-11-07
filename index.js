// j'importe express et je le lance, + PORT du serveur
const express = require('express');
const app = express();
const PORT = 3010;

//je définis le template motor
app.set('view engine', 'ejs');
app.set('views' , './views');
// je définis le dossier public comme static et accessible pour le client
app.use(express.static('public'));

//route principale 
app.get('/' , (req , res) => {
    res.render('index')
})

app.listen(PORT , () => {
    console.log('server available on http://localhost:3010');
})
