const express = require('express');
const router = express.Router();
const dbInfo = require('../databaseInformation');
const bodyParser = require('body-parser');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next()
});



/*********** GET ROUTES *************/
// define the home page route
router.get('/', (req, res) => {
    dbInfo.models.gameModel.find().then(data => res.json(data));
});

// define the about route
router.get('/about', (req, res) => {
    res.json({
        gamesAbout: 'Games about page'
    });
});


/******** POST ROUTES *********/
router.post('/', (req, res) => {
    const game = {
        title: req.params.title,
        description: req.params.description,
        year: req.params.year,
    };

    const data = new dbInfo.models.gameModel(game);

    console.log(game);


    res.end();
});

module.exports = router;