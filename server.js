const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const morgan = require('morgan');

// Server Setup
const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(morgan('dev'));

// Imported Routes
const games = require('./api/games');
const orders = require('./api/orders');
app.use('/api/games', games);
app.use('/api/orders', orders);




// Server Listen
app.listen(port, () => console.log(`Server listening on port: ${port}`));