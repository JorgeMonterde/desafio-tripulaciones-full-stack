<<<<<<< HEAD
const express = require('express');
const authRouter = express.Router();
const authController = require ('../controllers/authController');
const authMiddleware = require("../middlewares/authMiddlewares");

//Route: /auth

//EMAIL AND PASSWORD AUTH
authRouter.post("/email/login", authMiddleware.checkEmailLogIn, authController.createAndStoreTokenViaEmail);
authRouter.post("/email/signup", authMiddleware.signUpUser, authController.createAndStoreTokenViaEmail);
authRouter.get("/email/recoverpassword/:email", authController.recoverPassword);
authRouter.put("/email/resetpassword", authController.resetPassword);

//LOGOUT
//If authCheck, destroy the session and the cookie
authRouter.get('/logout', authMiddleware.authCheck, authController.destroySessionAndClearCookies);


=======
const express = require('express');
const authRouter = express.Router();
const authController = require ('../controllers/authController');
const authMiddleware = require("../middlewares/authMiddlewares");

//Route: /auth

//EMAIL AND PASSWORD AUTH
authRouter.post("/email/login", authMiddleware.checkEmailLogIn, authController.createAndStoreTokenViaEmail);
authRouter.get("/email/recoverpassword/:email", authController.recoverPassword);
authRouter.put("/email/resetpassword", authController.resetPassword);

//LOGOUT
//If authCheck, destroy the session and the cookie
authRouter.get('/logout', authMiddleware.authCheck, authController.destroySessionAndClearCookies);


>>>>>>> 9a2f24fb3eb5f378599c9e0439ed52163d24995c
module.exports = authRouter