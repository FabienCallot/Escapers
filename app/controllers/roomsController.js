const pagesInfo = require('../../data/pagesInfo.json');

const roomController = {
    roomsPage: (req, res) => {
        res.render('nos-salles', {
            title: 'Nos Salles',
            name: 'Nos salles',
            intro: `Retrouvez l'intégralité des scénarios proposés !`,
        });
    },

    roomPage: (req, res) => {
        let currentRoom = null;
        let headerInfo = null;

        for (const room of pagesInfo) {
            if (room.title.toLowerCase() === req.params.room.toLowerCase()) {
                currentRoom = room;
                headerInfo = room.headerInfo;
            }
        }
        if (currentRoom) {
            res.render(`${currentRoom.title}`, {
                title: `${currentRoom.title}`,
                name: `${currentRoom.name}`,
                intro: `${headerInfo}`,
            });
        } else {
            res.status(404).send('404 - page not found');
        }
    },
};

module.exports = roomController;
