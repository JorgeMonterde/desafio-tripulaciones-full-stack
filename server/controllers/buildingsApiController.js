const bcrypt = require("bcrypt");
const Buildings = require("../models/buildings");
const saltRounds = 10;


//GETs
//get building's info:
const getBuildingInfo = async (req,res) => {
    let {client_id} = req.decoded;
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

    try {
        let editedInfo = await Buildings.update(req.body, { where: { "client_id": client_id } });

        res.status(200).json({
            "success": true,
            "message": `building info updated`,
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