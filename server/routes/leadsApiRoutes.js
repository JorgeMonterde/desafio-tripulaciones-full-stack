const express = require('express');
const leadsApiRouter = express.Router();
const leadsApiController = require ('../controllers/leadsApiController');
const authMiddleware = require("../middlewares/authMiddlewares")

//Route: "api/leads/lead"
//GETs
leadsApiRouter.get("/lead", /* authMiddleware.isLeadLoggedCheck,  */leadsApiController.getLeadInfo); // Gets lead's info
//POSTs
leadsApiRouter.post("/lead", leadsApiController.createLead);// Create lead
//PUTs
leadsApiRouter.put("/lead", authMiddleware.authCheck, leadsApiController.editLeadProfile); // Edit lead profile (lead and admin)
//DELETEs
leadsApiRouter.delete("/lead/:id?", leadsApiController.deleteLead); // Delete a lead from DDBB (admin)


module.exports = leadsApiRouter;