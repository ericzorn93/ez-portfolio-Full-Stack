const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();
const morgan = require('morgan');
const dbInfo = require('./databaseInformation');


// Server Setup
const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(morgan('dev'));


/************* DATABASE SETUP ****************/
mongoose.connect(`mongodb://${"ericzorndesigns"}:${"Baseball30!"}@ds219672.mlab.com:19672/daniel-kitchen-gaming`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Models
const GameModel = dbInfo.models.gameModel;
const OrderModel = dbInfo.models.orderModel;

db.once('open', () => {
    console.log("we're connected!");
});

/************* ROUTING ****************/
// Imported Routes
const games = require('./api/games');
const orders = require('./api/orders');
app.use('/api/games', games);
app.use('/api/orders', orders);




// Server Listen
app.listen(port, () => console.log(`Server listening on port: ${port}`));