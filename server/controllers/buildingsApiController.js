const bcrypt = require("bcrypt");
const Buildings = require("../models/buildings");
const saltRounds = 10;


//GETs
//get building's info:
const getBuildingInfo = async (req,res) => {
    let {email,client_id} = req.decoded;
    let clientData = req.decoded.data;
    let data = await Buildings.findOne({ where: { "client_id": client_id } });
    try {
        res.status(200).json({
            "success": true,
            "message": `Building info supplied`,
            "data": data
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(400).json({
            "success": false,
            "message": `Error: ${error}`,
            "data": {}
        });
    }
}


//POSTs
//create building
const createBuildingInfo = async (req,res) => {
    console.log("--->>",req.body);
    // buildings fields: address_number, street, postal_code, city, province, autonomous_community, cif, total_area, communal_areas_area, housing_area, number_of_apartments, year_of_construction, cadastre_number, energy_efficiency_certificate, project_state
    const buildingInfo = {...req.body, "project_state":"not started"};

    try {
        let createInfo = await Buildings.create(buildingInfo);
        if(createInfo){
            res.status(200).json({
                "success": true,
                "message": `building created: ${createInfo}`,
                "data":createInfo
            });
        } else {
            res.status(400).json({
                "success": false,
                "message": `Could not create building: ${createInfo}`,
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
// Edit building profile (building and admin)
const editBuildingInfo = async (req,res) => {
    let {client_id} = req.decoded.data;
    let {email, password, user_name, firstname, surname} = req.body;
    //find client's building info:
    const buildingInfo = Buildings.findOne({ where: { "client_id": client_id } });

    try {
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
        let editedInfo = await Buildings.update({client_id, email, password, user_name, firstname, surname}, { where: { "email": email } });

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
const deleteBuildingInfo = async (req,res) => {
    let client_id = req.params.id; // delete by client by id
    try {
        let deleteInfo = await Buildings.destroy({where: {"client_id": client_id}});

        res.status(200).json({
            "success": true,
            "message": `Building deleted`,
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
    getBuildingInfo,
    createBuildingInfo,
    editBuildingInfo,
    deleteBuildingInfo
}