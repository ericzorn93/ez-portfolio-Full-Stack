/********** MAIL ROUTER *************/
const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const sgMail = require('@sendgrid/mail');
const dbInfo = require('../db/dbInfo');


// Mail Setup
sgMail.setApiKey(process.env.MAIL_API_KEY);

// Middleware
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


/************* DATABASE SETUP ****************/
const mongoDB = dbInfo.dbURL;
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
    message: String,
    date: Date
});
const Customer = mongoose.model('Customer', CustomerSchema);



/********** GET ROUTES ***************/
router.get('/api/all-users', (req, res) => {
    Customer.find(function (err, customers) {
        if (err) return console.error(err);
        console.log(customers);
        res.end();
    })
});



/********** POST ROUTES ***************/
router.post('/send', (req, res) => {
    console.log("Email Mail Sent and Data Stored in DB");
    const { phone } = req.body;
    let newPhoneNumber = `(${phone.slice(0,3)})-${phone.slice(3,6)}-${phone.slice(6)}`;

    const customer_instance = new Customer({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
        date: new Date()
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
        <strong>Message: </strong> ${req.body.message}<hr/>
        <strong>Date: </strong> ${new Date()}
        `,
    }, function(err, json) {
        if (err) { return res.json(err) }
        res.redirect('/');
    });
});

module.exports = router;
