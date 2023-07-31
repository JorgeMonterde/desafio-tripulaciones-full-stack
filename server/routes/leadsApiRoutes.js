const express = require('express');
const leadsApiRouter = express.Router();
const leadsApiController = require ('../controllers/leadsApiController');
const authMiddleware = require("../middlewares/authMiddlewares")

//Route: "api/leads"
//GETs
leadsApiRouter.get("/lead/:email", leadsApiController.getLeadInfo); // Gets lead's info
leadsApiRouter.get("/email/:email", leadsApiController.sendEmail); // Send email to lead
//POSTs
leadsApiRouter.post("/lead", leadsApiController.createLead);// Create lead
//DELETEs
leadsApiRouter.delete("/lead/:id?", leadsApiController.deleteLead); // Delete a lead from DDBB (admin)


module.exports = leadsApiRouter;

