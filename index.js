// j'importe express et je le lance, + PORT du serveur
const express = require('express');
const app = express();
const PORT = 3010;
const rooms = require('./my modules/rooms');
//je définis le template motor
app.set('view engine', 'ejs');
app.set('views' , './views');
// je définis le dossier public comme static et accessible pour le client
app.use(express.static('public'));

//route principale 
app.get('/' , (req , res) => {
    res.render('index' , {
        title : 'Escapers Lille',
        name : 'Escapers, time to escape.'
    })
});
// route dynamique pour mes rooms
app.get('/:room' , (req , res) => {
    let currentRoom = null;
    for(const room of rooms) {
        if(room.title.toLowerCase() === req.params.room.toLowerCase()){
            currentRoom = room;
        };
    };
    if(currentRoom) {
        res.render(`${currentRoom.title}` , {
        title : `${currentRoom.title}`,
        name : `${currentRoom.name}`
    });
    } else {
        res.status(404).send("404 - page not found");
    }; 
});
//404 pour toute les autres page non trouvées
app.get('*' , (req , res) => {
    res.status(404).send('404 - page not found');
});
app.listen(PORT , () => {
    console.log('server available on http://localhost:3010');
});
