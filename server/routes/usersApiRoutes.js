const express = require('express');
const usersApiRouter = express.Router();
const usersApiController = require ('../controllers/usersApiController');
const authMiddleware = require("../middlewares/authMiddlewares")

//Route: "api/users/user"
//GETs
usersApiRouter.get("/user", authMiddleware.isUserLoggedCheck, usersApiController.getUserInfo); // Gets user's info
//POSTs
usersApiRouter.post("/user", usersApiController.createUser);// Create user
//PUTs
usersApiRouter.put("/user", authMiddleware.authCheck, usersApiController.editUserProfile); // Edit user profile (user and admin)
//DELETEs
usersApiRouter.delete("/user/:id?", usersApiController.deleteUser); // Delete a user from DDBB (admin)


module.exports = usersApiRouter;