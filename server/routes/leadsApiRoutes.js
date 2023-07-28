const express = require('express');
const leadsApiRouter = express.Router();
const leadsApiController = require ('../controllers/leadsApiController');
const authMiddleware = require("../middlewares/authMiddlewares")

//Route: "api/leads"
//GETs
leadsApiRouter.get("/lead/:lead_id?", leadsApiController.getLeadInfo); // Gets lead's info
leadsApiRouter.get("/email/:emailrecipient", leadsApiController.sendEmail); // Send lead an email
//POSTs
leadsApiRouter.post("/lead", leadsApiController.createLead);// Create lead
//DELETEs
leadsApiRouter.delete("/lead/:id?", leadsApiController.deleteLead); // Delete a lead from DDBB (admin)


module.exports = leadsApiRouter;