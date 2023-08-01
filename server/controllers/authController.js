const passport = require('passport');
const jwt = require("jsonwebtoken");
require("dotenv").config();
let Clients = require("../models/clients");
const transporter = require('../utils/nodemailer');
const bcrypt = require('bcrypt');
let jwtSecret = process.env.JWT_SECRET;
//let domain = process.env.DOMAIN;
let frontendDomain = process.env.FRONTEND_DOMAIN;
const saltRounds = 10;




//EMAIL AND PASSWORD AUTH

//Destroy session and clear cookies
const destroySessionAndClearCookies = async (req, res) => {
    // Now we have to change the user state because he is logging out:
    let email = req.decoded.email;

    //change user's "logged" state to false:
    const result = await Clients.update({logged: false}, {where: {"email": email}});

    req.logout(function(err) {
        if (err) { return next(err); }
        req.session.destroy();
        res.clearCookie("access-token").json({"success": true, "message":"Good bye! You are logged out"});
    });
}

//Create and store token for authentification via email and send json response back:
const createAndStoreTokenViaEmail = async (req,res)=>{
    //save user's info in the payload for navigation purpose:
    const payload = {
        check: true,
        email: req.user.email,
        client_id: req.user.client_id
    };
    //sign token 
    const token = jwt.sign(payload, jwtSecret, {
        expiresIn: "365d"
    });

    //store token in cookies
    res.status(201).cookie("access-token", token, {
        httpOnly: true,
        sameSite: "lax"
    }).json({"success": true, "message":"Welcome, you are logged in"});
}


//RECOVER - RESET PASSWORD
const recoverPassword = async(req, res) => {
    const {email} = req.params;
    try {
        const recoverToken = jwt.sign({"email": email}, jwtSecret, {expiresIn: '60m'});
        const url = frontendDomain + `/resetpassword/` + recoverToken + "/";
        
        await transporter.sendMail({
            from: process.env.GMAIL_SENDER,
            to: email,
            subject: "Elegir contraseña",
            html: `<h3>Elige contraseña</h3>
            <a href = ${url}>Haz click aquí para elegir tu contraseña</a>
            <p>El link expirará en 60 minutos</p>`,
            auth: {
                user: process.env.GMAIL_SENDER,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: process.env.ACCESS_TOKEN,
                expires: 1484314697598,
            }
        });

        res.status(200).json({"success": true, "message":'A link for reset your password has been send to your email'})
    } catch (error) {
        console.log('Error:', error)
        res.status(400).json({"success": false, "message":'Something went wrong...'});
    }
};

const resetPassword = async(req, res) => {
    try {
        const recoverToken = req.headers.recover_token;
        console.log("reseting password");
        const payload = jwt.verify(recoverToken, jwtSecret);
        const password = req.body.password;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        await Clients.update({"hashed_password": hashPassword}, {where: {"email": payload.email}});
        res.status(200).json({"success": true, "message":'Password actualized'});
    } catch (error) {
        console.log('Error:', error);
        res.status(400).json({"success": false, "message":'Something went wrong...'});
    }
}




module.exports = {
    destroySessionAndClearCookies,
    createAndStoreTokenViaEmail,
    recoverPassword,
    resetPassword
}