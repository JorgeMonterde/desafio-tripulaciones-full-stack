<<<<<<< HEAD
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    secure: false,
    auth: {
        user: process.env.MAILTRAP_EMAIL_DIRECTION,
        pass: process.env.MAILTRAP_EMAIL_PASS
    }
});



module.exports = transporter;

=======
"use strict";

const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type:"OAuth2",
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET
    }
});



module.exports = transporter;

>>>>>>> 9a2f24fb3eb5f378599c9e0439ed52163d24995c
