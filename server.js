const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// Server Setup
const port = process.env.PORT || 3000;
const app = express();

// Imported Routes
const games = require('./api/games');
const orders = require('./api/orders');
app.use('/api/games', games);
app.use('/api/orders', orders);




// Server Listen
app.listen(port, () => console.log(`Server listening on port: ${port}`));