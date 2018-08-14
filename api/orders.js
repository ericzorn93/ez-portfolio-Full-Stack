const express = require('express');
const router = express.Router();
const dbInfo = require('../databaseInformation');
const app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next()
});


/*********** GET ROUTES *************/
// define the home page route
router.get('/', function (req, res) {
    res.json([
        {id: 1, orderName: "Desert Bus"},
        {id: 2, orderName: "Madden NFL"},
        {id: 3, orderName: "Grand Theft Auto V"}
    ]);
});


/******** POST ROUTES *********/
router.post('/', (req, res) => {
    // Data Based on Schema
    const order = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        description: req.body.description,
        item: req.body.item,
        numberOfItems: req.body.numberOfItems
    };


    const data = new dbInfo.models.orderModel(order);

    data.save().then(data => {
        console.log(data);
        res.end();
    }).catch(error => {
        console.error(error);
        res.json(error);
    });
});


/******** PUT ROUTES *********/
// To fill


module.exports = router;