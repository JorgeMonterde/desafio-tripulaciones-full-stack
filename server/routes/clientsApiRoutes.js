const express = require('express');
const clientsApiRouter = express.Router();
const clientsApiController = require ('../controllers/clientsApiController');
const authMiddleware = require("../middlewares/authMiddlewares")

//Route: "api/clients/client"
//GETs
clientsApiRouter.get("/client", authMiddleware.isClientLoggedCheck, clientsApiController.getClientInfo); // Gets client's info
//POSTs
clientsApiRouter.post("/client", clientsApiController.createClient);// Create client
//PUTs
clientsApiRouter.put("/client", authMiddleware.authCheck, clientsApiController.editClientProfile); // Edit client profile (client and admin)
//DELETEs
clientsApiRouter.delete("/client/:id?", clientsApiController.deleteClient); // Delete a client from DDBB (admin)


module.exports = clientsApiRouter;