const bcrypt = require("bcrypt");
const Clients = require("../models/clients");
const saltRounds = 10;


//GETs
//get client's info:
const getClientInfo = async (req,res) => {
    try {
        let data = req.decoded.data;
        //let data = await Clients.getClientByEmail(email);
        res.status(200).json({
            "success": true,
            "message": `Client info supplied`,
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
//create client
const createClient = async (req,res) => {
    console.log("--->",req.body);
    let {first_name, surname, email, telephone_num, password, client_position} = req.body;
    const hashed_password = await bcrypt.hash(password, saltRounds);
    const clientInfo = { // "client_id" is automatically added by SQL DDBB
        first_name,
        surname,
        email,
        telephone_num,
        client_position,
        hashed_password,
        admin:false,
        logged:false
    };

    try {
        let createInfo = await Clients.create(clientInfo);
        if(createInfo){
            res.status(200).json({
                "success": true,
                "message": `client created: ${createInfo}`,
                "data":createInfo
            });
        } else {
            res.status(400).json({
                "success": false,
                "message": `Could not create client: ${createInfo}`,
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
// Edit client profile (client and admin)
const editClientProfile = async (req,res) => {
    try {
        let {client_id} = req.decoded.data;
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
        let editedInfo = await Clients.update({client_id, email, password, user_name, firstname, surname}, { where: { "email": email } });

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
// Delete a client from DDBB (admin)
const deleteClient = async (req,res) => {
    let client_id = req.params.id; // delete by client by id
    try {
        let deleteInfo = await Clients.destroy({where: {"client_id": client_id}});

        res.status(200).json({
            "success": true,
            "message": `Client deleted`,
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
    getClientInfo,
    createClient,
    editClientProfile,
    deleteClient
}