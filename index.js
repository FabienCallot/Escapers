// j'importe express et je le lance, + PORT du serveur
const express = require('express');
const app = express();
const PORT = 3010;

// import de mes modules
const rooms = require('./my modules/rooms');
const currentRoom = require('./my modules/currentRoom');

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
app.get('/:room' , (req , res) => {
    let currentRoom = null;
    for(const room of rooms) {
        if(room.title.toLowerCase() === req.params.room.toLowerCase()){
            currentRoom = room;
        };
    };
      res.render(`${currentRoom.title}` , {
          title : `${currentRoom.title}`,
          name : `${currentRoom.name}`
      }) 
});


app.listen(PORT , () => {
    console.log('server available on http://localhost:3010');
});

console.log(rooms);
