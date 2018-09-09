const express = require('express');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
require('dotenv').config();
const path = require('path');

/************* SERVER SETUP ****************/
const port = process.env.PORT || 5000;
const app = express();
// Express router
const router = express.Router();


// Middleware
// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });


/************* ROUTING ****************/
const mailRoutes = require('./routes/mail');
app.use('/mail', mailRoutes);



// Server Listen
app.listen(port, () => console.log(`Server listening on port: ${port}`));
