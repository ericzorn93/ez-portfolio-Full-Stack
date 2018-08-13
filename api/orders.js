const express = require('express');
const router = express.Router();
const dbInfo = require('../databaseInformation');


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next()
});

// define the home page route
router.get('/', function (req, res) {
    res.json({
        ordersHome: 'Orders home page'
    });
});


/******** POST ROUTES *********/
router.post('/', (req, res) => {
    const testOrder = {
        first_name: "Eric",
        last_name: "Zorn",
        description: "I want that cartridge",
        item: "Desert Bus"
    };


    const data = new dbInfo.models.orderModel(testOrder);

    data.save().then(data => console.log(data)).catch(error => console.error(error));

    res.end();
    console.log(req.params);
});



module.exports = router;