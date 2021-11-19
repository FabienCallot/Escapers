const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');
const roomsController = require('./controllers/roomsController');

router.get('/', mainController.indexPage);
router.get('/nos-salles', roomsController.roomsPage);
router.get('/:room', roomsController.roomPage);
router.get('*', (req, res) => {
    res.status(404).send('404 - page not found');
});

module.exports = router;
