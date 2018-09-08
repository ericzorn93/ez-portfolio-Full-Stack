const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// Server Setup
const port = process.env.PORT || 3000;
const app = express();

// Mail Setup
// const API_KEY = "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";
sgMail.setApiKey(process.env.MAIL_API_KEY);

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));


/************* DATABASE SETUP ****************/

/************* ROUTING ****************/
app.post('/mail/new', (req, res) => {
    console.log("Route Entered");
    const { phone } = req.body;
    let newPhoneNumber = `(${phone.slice(0,3)})-${phone.slice(3,6)}-${phone.slice(6)}`;

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