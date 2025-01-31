const express = require('express');
const jwt = require("jsonwebtoken");
const users = require("../models/users");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');
const saltRounds = 10;


const authCheck = (req, res, next) => {
    console.log("Token", req.cookies["access-token"])
    const token = req.cookies["access-token"];

    if(token){
        jwt.verify(token, jwtSecret, async (err, decoded) => {
            //console.log("decoded -----> ", decoded);
            let {email} = decoded;
            let data = await users.getUserByEmail(email);
            console.log("data: ",data)
            if(data.logged == true) {
                req.decoded = decoded;
                req.decoded.data = data;
                next();
            } else {
                console.log("Invalid token");
                req.logout(function(err) {
                    if (err) { return next(err); }
                    req.session.destroy();
                    res.clearCookie("access-token").json({
                        "success": false,
                        "message": "Invalid token",
                        "auth":false,
                        "data":""
                    });
                });
            }
        })
    } else {
        console.log("Token not provided");
        res.status(401).json({
            "success": false,
            "message": "Token not provided",
            "auth":false,
            "data":""
        });
    }
}

const isUserLoggedCheck = (req, res, next) => {
    const token = req.cookies["access-token"];
    if(token){
        jwt.verify(token, jwtSecret, async (err, decoded) => {
            //console.log("decoded -----> ", decoded);
            let {email} = decoded;
            let data = await users.getUserByEmail(email);
            //console.log("data: ",data)
            if(data.logged == true) {
                req.decoded = decoded;
                req.decoded.data = data;
                next();
            } else {
                console.log("Invalid token");
                req.logout(function(err) {
                    if (err) { return next(err); }
                    req.session.destroy();
                    res.clearCookie("access-token").redirect('/login');
                });
            }
        })
    } else {
        console.log("Token not provided");
        res.status(200).json({"data":{}, "msj": "user not logged in"});
    }
}

const adminAuthCheck = (req, res, next) => {
    console.log(req.decoded.data);
    let admin = req.decoded.data.admin;
    if(admin){
        console.log("access granted");
        next();
    } else {
        console.log("restricted access");
        res.redirect("/");
    }
}

const checkEmailLogIn = async(req, res, next) => {
    let {email, password} = req.body;
    console.log("check email login: ", email, password)
    try {
        let data = await users.getUserByEmail(email);
        if(!data){
            console.log("This email do not have an account");
            res.status(401).json({"success": false, "msj":"This email do not have an account"});
        } else {
            console.log("match??", password, data.hashed_password);
            const match = await bcrypt.compare(password, data.hashed_password);
            if(match){
                const result = await users.logInUserTrue(email);
                req.user = {email};
                console.log("++++++>>>", result);
                next();
            } else {
                res.status(400).json({ msg: 'Incorrect user or password'});
            }
        }
        
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

const signUpUser = async(req, res, next) => {
    let data;
    try {
        const {email, password, userName, admin, firstName, surname, logged} = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        data = await users.createUser(email, hashedPassword, userName, admin, firstName, surname, logged);
        await users.logInUserTrue(email);

        req.user = {email};
        next();
        
        /* if(regex.validateEmail(email) && regex.validatePassword(password)){
            
            res.status(201).json(data);
        }else{
            res.status(400).json({msg: 'Invalid email or password'});
        } */
    } catch (error) {
        console.log('Error:', error);
    }
};



//module.exports = protectedRoutes;
module.exports = {
    authCheck,
    adminAuthCheck,
    isUserLoggedCheck,
    checkEmailLogIn,
    signUpUser
}