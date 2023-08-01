const bcrypt = require("bcrypt");
const Leads = require("../models/leads");
const transporter = require('../utils/nodemailer');
const saltRounds = 10;
let frontendDomain = process.env.FRONTEND_DOMAIN;


//GETs
//get lead's info:
const getLeadInfo = async (req,res) => {
    let {email} = req.params;
    try {
        let data = await Leads.findOne({ where: { "email": email } });
        if(data){
            res.status(200).json({
                "success": true,
                "message": `Lead info supplied`,
                "data": data
            });
        } else {
            res.status(200).json({
                "success": true,
                "message": `Lead not found`,
                "data": {}
            });
        }

    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(400).json({
            "success": false,
            "message": `Error: ${error}`,
            "data": ""
        });
    }
}

//sendEmail
const sendEmail = async (req,res) => {
    const { email } = req.params;
    try {
        transporter.sendMail({
            from: process.env.GMAIL_SENDER,
            to: email,
            subject: "Email from our webpage",
            text: `Visit the following url to continue: ${frontendDomain}/technical-form/${email}/`,
            auth: {
                user: process.env.GMAIL_SENDER,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: process.env.ACCESS_TOKEN,
                expires: 1484314697598,
            },
        });

        res.status(200).json({
            "success": true,
            "message": `Email sent to: ${email}`,
            "data": {}
        });
        
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": `Could not send email to: ${email}`,
            "data": {}
        });
    }
};


//POSTs
//create lead
const createLead = async (req,res) => {
    console.log("--->",req.body);
    let {first_name, surname, email, telephone_num, lead_position, address, postal_code, city, province, community_type} = req.body;
    const leadInfo = { // "lead_id" is automatically added by SQL DDBB
        first_name,
        surname,
        email,
        telephone_num,
        lead_position,
        address,
        postal_code,
        city,
        province,
        community_type
    };

    try {
        let createInfo = await Leads.create(leadInfo);
        if(createInfo){
            res.status(200).json({
                "success": true,
                "message": `lead created: ${createInfo}`,
                "data":createInfo
            });
        } else {
            res.status(400).json({
                "success": false,
                "message": `Could not create lead: ${createInfo}`,
                "data":createInfo
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(400).json({
            "success": false,
            "message": `Error: ${error}`,
            "data": ""
        });
    }
};

//DELETEs
// Delete a lead from DDBB (admin)
const deleteLead = async (req,res) => {
    let lead_id = req.params.id; // delete by lead by id
    try {
        let deleteInfo = await Leads.destroy({where: {"lead_id": lead_id}});

        res.status(200).json({
            "success": true,
            "message": `Lead deleted`,
            "data": deleteInfo
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(400).json({
            "success": false,
            "message": `Error: ${error}`,
            "data": ""
        });
    }
};

 
module.exports = {
    getLeadInfo,
    sendEmail,
    createLead,
    deleteLead
};