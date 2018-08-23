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
        {id: 0, orderName: "Desert Bus", orderInformation: "Desert Bus is back and better than ever! The 1998 Penn and Teller cult hit mini-game is coming to virtual reality, so you can fully immerse yourself in the thrilling eight-hour trip from Arizona to Nevada. It’s almost like you’re driving the “wheel” thing! "},
        {id: 1, orderName: "3 Point Hoops", orderInformation: "If you're craving a decent fix for a basketball game, give 3 Point Hoops Basketball a shot. As you begin draining 3 point shots, you really start getting into a rhythm with the game, feeling the crowd cheer you on for each shot. The sensitivity of the controls and the ease of play combine to create what is ultimately a game of skill that strikes a perfect balance between being overly difficult and too simplistic."},
        {id: 2, orderName: "Arcade QB Pass Attack Football", orderInformation: "Think YOU have what it takes to make first-string, are you Pro-material, could you be a hall-of-fame quarterback? Then suit up and hit the gridiron with ARCADE QB PASS ATTACK FOOTBALL!  "},
        {id: 3, orderName: "World Cup Table Tennis", orderInformation: "Grab your headband, matching track-suit and paddle and represent your country’s colors in some classic table tennis action with WORLD CUP TABLE TENNIS™ HD from Skyworks, creators of the best quality and most fun sports games on the iPhone/iPod touch! It’s the fastest sport on a table, and now it’s right here on your mobile device. Feel like a pro, concentrating to catch the corners with each shot. Be precise, even the slightest mistake can lose the game and let down your entire country."},
        {id: 4, orderName: "Mental Blocks", orderInformation: "If you like Collapse! and reMovem, and you’re ready for some mind bending brain melting fun, then you’ll love MENTAL BLOCKS! From Skyworks comes a puzzle game so addictive you’ll never want to put it down!  "},
        {id: 5, orderName: "Field Goal Frienzy", orderInformation: "FIELD GOAL FRENZY FOOTBALL FREE tests your kicking skills from the 45 yardline in a timed challenge. Hit the Bonus target between the uprights and rack up even more points. With every kick the position of the ball changes between the hash marks and the wind changes too, so aim and fling carefully. Once the ball is kicked, tilt left and right to influence its flight through the uprights!  "},
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