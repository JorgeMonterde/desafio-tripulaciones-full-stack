const bcrypt = require("bcrypt");
const Users = require("../models/users");
const saltRounds = 10;


//GETs
//get user's info:
const getUserInfo = async (req,res) => {
    try {
        let {email} = req.decoded.data;
        let data = await Users.getUserByEmail(email);
        res.status(200).json({
            "success": true,
            "message": `User info supplied: ${data}`,
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
//create user
const createUser = async (req,res) => {
    console.log("--->",req.body);
    let {first_name, surname, email, password, user_position} = req.body;
    const hashed_password = await bcrypt.hash(password, saltRounds);
    const userInfo = { // "user_id" is automatically added by SQL DDBB
        first_name,
        surname,
        email,
        user_position,
        hashed_password,
        admin:false,
        logged:false
    };

    try {
        let createInfo = await Users.create(userInfo);
        if(createInfo){
            res.status(200).json({
                "success": true,
                "message": `User created: ${createInfo}`,
                "data":createInfo
            });
        } else {
            res.status(400).json({
                "success": false,
                "message": `Could not create user: ${createInfo}`,
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
// Edit user profile (user and admin)
const editUserProfile = async (req,res) => {
    try {
        let {id_user} = req.decoded.data;
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
        let editedInfo = await Users.updateUser(id_user, email, password, user_name, firstname, surname);

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
// Delete a user from DDBB (admin)
const deleteUser = async (req,res) => {
    let user_id = req.params.id; // delete by user by id
    try {
        let deleteInfo = await Users.deleteUser(user_id);

        res.status(200).json({
            "success": true,
            "message": `User deleted`,
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
    getUserInfo,
    createUser,
    editUserProfile,
    deleteUser
}