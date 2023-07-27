const bcrypt = require("bcrypt");
const Leads = require("../models/leads");
const saltRounds = 10;


//GETs
//get lead's info:
const getLeadInfo = async (req,res) => {
    try {
        let data = req.decoded.data;
        //let data = await Leads.getLeadByEmail(email);
        res.status(200).json({
            "success": true,
            "message": `Lead info supplied`,
            "data": data
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(400).json({
            "success": false,
            "message": `Error: ${error}`,
            "data": ""
        });
    }
}


//POSTs
//create lead
const createLead = async (req,res) => {
    console.log("--->",req.body);
    let {first_name, surname, email, telephone_num, password, lead_position, address_number, street, postal_code, city, province, autonomous_community, community_type} = req.body;
    const hashed_password = await bcrypt.hash(password, saltRounds);
    const leadInfo = { // "lead_id" is automatically added by SQL DDBB
        first_name,
        surname,
        email,
        telephone_num,
        lead_position,
        hashed_password,
        address_number,
        street,
        postal_code,
        city,
        province,
        autonomous_community,
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

//PUTs
// Edit lead profile (lead and admin)
const editLeadProfile = async (req,res) => {
    try {
        let {lead_id} = req.decoded.data;
        let {email, password, user_name, firstname, surname} = req.body;
        // If a field is not filled, do it with the current value
        if(email == ""){
            email = req.decoded.data.email;
        };
        if (password == "") {
            password = req.decoded.data.password;
        };
        if (user_name == "") {
            user_name = req.decoded.data.user_name;
        };
        if (firstname == "") {
            firstname = req.decoded.data.firstname;
        };
        if (surname == "") {
            surname = req.decoded.data.surname;
        };

        // "user_id" goes in "userInfo" to search the user row in the DDBB. 
        let editedInfo = await Leads.update({lead_id, email, password, user_name, firstname, surname}, { where: { "email": email } });

        res.status(200).json({
            "success": true,
            "message": `User profile updated`,
            "data": editedInfo
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
    createLead,
    editLeadProfile,
    deleteLead
};