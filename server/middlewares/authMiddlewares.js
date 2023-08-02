const express = require('express');
const jwt = require("jsonwebtoken");
const Clients = require("../models/clients");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');
const saltRounds = 10;


const authCheck = (req, res, next) => {
    console.log("OOOOOO: ",req.cookies);
    const token = req.cookies["access-token"];
    if(token){
        jwt.verify(token, jwtSecret, async (err, decoded) => {
            let {email} = decoded;
            let data = await Clients.findOne({ where: { "email": email } });
            data = data.dataValues;
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

const isClientLoggedCheck = (req, res, next) => {
    const token = req.cookies["access-token"];
    console.log("cookies: ", req.cookies);
    if(token){
        jwt.verify(token, jwtSecret, async (err, decoded) => {
            console.log("decoded -----> ", decoded);
            let {email} = decoded;
            let data = await Clients.findOne({ where: { "email": email } });
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
        res.status(401).json({"data":{}, "message": "client not logged in"});
    }
}



const checkEmailLogIn = async(req, res, next) => {
    let {email, password} = req.body;
    console.log("check email login: ", email, password)
    try {
        //check if a client with the provided email is already in the database:
        let data = await Clients.findOne({ where: { "email": email } });
        console.log("match??", password, data.hashed_password);
        //check if the provided password is correct
        const match = await bcrypt.compare(password, data.hashed_password);
        if(match){
            //change client's "logged" state to true:
            const result = await Clients.update({logged: true}, {where: {"email": email}});
            req.user = {email, "client_id": data.client_id};
            next();
        } else {
            res.status(401).json({"success": false, "message":"Incorrect client or password"});
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(401).json({"success": false, "message":"This email do not have an account"});
    }
}






module.exports = {
    authCheck,
    isClientLoggedCheck,
    checkEmailLogIn
}