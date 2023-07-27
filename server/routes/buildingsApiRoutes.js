const express = require('express');
const buildingsApiRouter = express.Router();
const buildingsApiController = require ('../controllers/buildingsApiController');
const authMiddleware = require("../middlewares/authMiddlewares")

//Route: "api/buildings/building"
//GETs
buildingsApiRouter.get("/building", authMiddleware.isClientLoggedCheck, buildingsApiController.getBuildingInfo); // Gets building's info
//POSTs
buildingsApiRouter.post("/building", buildingsApiController.createBuildingInfo);// Create building
//PUTs
buildingsApiRouter.put("/building", authMiddleware.authCheck, buildingsApiController.editBuildingInfo); // Edit building profile (building and admin)
//DELETEs
buildingsApiRouter.delete("/building/:id?", buildingsApiController.deleteBuildingInfo); // Delete a building from DDBB (admin)


module.exports = buildingsApiRouter;