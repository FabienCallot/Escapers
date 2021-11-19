const pagesInfo = require('../../data/pagesInfo.json');

const mainController = {
    indexPage: (req, res) => {
        let headerInfo = pagesInfo[0].headerInfo;

        res.render('index', {
            title: 'Escapers Lille',
            name: 'Escapers, time to escape.',
            intro: `${headerInfo}`,
        });
    },
};

module.exports = mainController;
