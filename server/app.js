const express = require('express');
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const error404 = require('./middlewares/error404');
const helmet = require("helmet");

// Initialize server
const app = express();
const port = process.env.PORT || 3000;

//Passport and session
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes modules
const clientsApiRoutes = require('./routes/clientsApiRoutes');
const leadsApiRoutes = require('./routes/leadsApiRoutes');
const buildingsApiRoutes = require('./routes/buildingsApiRoutes');
const authRoutes = require('./routes/authRoutes');

// Middlewares
app.use(express.json()); // Enable data type to receive
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); //Better access to cookies
app.use(cors({credentials: true, origin: process.env.FRONTEND_DOMAIN})) //Enable all CORS requests
app.use(helmet());

//Routes 
app.use('/api/clients',clientsApiRoutes); // clients routes
app.use('/api/leads',leadsApiRoutes); // leads routes
app.use("/api/buildings", buildingsApiRoutes); // Buildings routes
app.use('/auth',authRoutes); // Auth routes

app.use(error404);

const server = app.listen(port, () => {
    console.log(`****Conected in port ${port}****`);
})

module.exports = server;
