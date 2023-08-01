const bcrypt = require("bcrypt");
const Clients = require("../models/clients");
const saltRounds = 10;


//GETs
//get client's info:
const getClientInfo = async (req,res) => {
    try {
        let data = req.decoded.data;
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

        let editedInfo = await Clients.update(req.body, { where: { "client_id": client_id } });

        res.status(200).json({
            "success": true,
            "message": `client profile updated`,
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