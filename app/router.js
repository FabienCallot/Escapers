const express = require('express');
const router = express.Router();
//controlleurs require pour les routes
const mainController = require('./controllers/mainController');
const roomsController = require('./controllers/roomsController');


//routes du site : racines, desciptif des salles, route dynamique pour chaque salle, TOUTES autre route retourne 404
router.get('/', mainController.indexPage);
router.get('/nos-salles', roomsController.roomsPage);
router.get('/:room', roomsController.roomPage);
//TODO: mettre cette methode dans un errorController avec 500 & 404 pour commencer (liens avec TODO index.js)
router.get('*', (req, res) => {
    res.status(404).send('404 - page not found');
});

module.exports = router;
