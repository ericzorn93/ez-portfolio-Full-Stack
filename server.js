const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();
const mongoose = require('mongoose');

// Server Setup
const port = process.env.PORT || 3000;
const app = express();

// Mail Setup
sgMail.setApiKey(process.env.MAIL_API_KEY);

// Database Setup
const mongoDB = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds245772.mlab.com:45772/ericzornportfolio`;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    message: String
});
const CustomerModel = mongoose.model('Customer', CustomerSchema);

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));


/************* DATABASE SETUP ****************/

/************* ROUTING ****************/
app.post('/mail/new', (req, res) => {
    console.log("Route Entered");
    const { phone } = req.body;
    let newPhoneNumber = `(${phone.slice(0,3)})-${phone.slice(3,6)}-${phone.slice(6)}`;

    const customer_instance = new CustomerModel({ 
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    });

    customer_instance.save(err => {
        if (err) return handleError(err);
    });

    sgMail.send({
        to: 'ericzorndesigns@gmail.com',
        from: req.body.email,
        subject: 'EZ Dev Business Inquiry',
        text: `Phone Number: ${req.body}.\nMessage: ${req.message}`,
        html: `
        <strong>Name: </strong> ${req.body.name}<hr/>
        <strong>Email Address: </strong> ${req.body.email}<hr/>
        <strong>Phone Number: </strong> ${newPhoneNumber}<hr/>
        <strong>Message: </strong> ${req.body.message}
        `,
      }, function(err, json) {
        if (err) { return res.json(err) }
        res.redirect('/');
    });
    // res.redirect('/');
})



// Server Listen
app.listen(port, () => console.log(`Server listening on port: ${port}`));