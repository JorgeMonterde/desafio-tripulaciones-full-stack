const passport = require('passport');
const jwt = require("jsonwebtoken");
require("dotenv").config();
let Users = require("../models/users");
const transporter = require('../utils/nodemailer');
const bcrypt = require('bcrypt');
let jwtSecret = process.env.JWT_SECRET;
let domain = process.env.DOMAIN;
const saltRounds = 10;




//EMAIL AND PASSWORD AUTH

//Destroy session and clear cookies
const destroySessionAndClearCookies = async (req, res) => {
    // Now we have to change the user state because he is logging out:
    let email = req.decoded.email;

    //change user's "logged" state to false:
    const result = await Users.update({logged: false}, {where: {"email": email}});

    req.logout(function(err) {
        if (err) { return next(err); }
        req.session.destroy();
        res.clearCookie("access-token").json({"success": true, "message":"Good bye! You are logged out"});
    });
}

//Create and store token for authentification via email and send json response back:
const createAndStoreTokenViaEmail = (req,res)=>{
    //save user's info in the payload for navigation purpose:
    const payload = {
        check: true,
        email: req.user.email
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
    try {
        const recoverToken = jwt.sign({email: req.params.email}, jwtSecret, {expiresIn: '60m'});
        const url = domain + `/email/resetpassword/` + recoverToken;
        await transporter.sendMail({
            to: req.params.email,
            subject: 'Recover Password',
            html: `<h3>Recover Password</h3>
                <a href = ${url}>Click to recover password</a>
                <p>Link will expire in 60 minutes</p>`
        });
        res.status(200).json({"success": true, "message":'A link for reset your password has been send to your email'})
    } catch (error) {
        console.log('Error:', error)
        res.status(400).json({"success": false, "message":'Something went wrong...'});
    }
};

const resetPassword = async(req, res) => {
    try {
        const recoverToken = req.headers.token;
        console.log("reseting password")
        const payload = jwt.verify(recoverToken, jwtSecret);
        const password = req.body.password;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        await Users.updateUserPassword(payload.email, hashPassword);
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