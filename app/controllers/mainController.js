const pagesInfo = require('../../data/pagesInfo.json');

const mainController = {
    indexPage: (req, res) => {
        let headerInfo = pagesInfo[0].headerInfo;
        res.render('index', {
            //TODO: trouver une solution pour dynamiser le texte.
            title: 'Escapers Lille',
            name: 'Escapers, time to escape.',
            //petit texte de présentation de page
            intro: `${headerInfo}`,
        });
    },
};

module.exports = mainController;
