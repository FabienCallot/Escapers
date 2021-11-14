const express = require('express');
const router = express.Router();
const rooms = require('./my modules/rooms.json');
//route principale 
router.get('/' , (req , res) => {
    res.render('index' , {
        title : 'Escapers Lille',
        name : 'Escapers, time to escape.',
        intro : `test`
    })
});
// route dynamique pour mes rooms
router.get('/:room' , (req , res) => {
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
router.get('*' , (req , res) => {
    res.status(404).send('404 - page not found');
});

module.exports = router;