const express = require('express');
const router = express.Router();
const dbInfo = require('../databaseInformation');
const bodyParser = require('body-parser');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json());

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



module.exports = router;