//AUTH.ROUTES

const router = require("express").Router();

const authController = require("../controllers/auth.controller");

//routes pour auth
router.post("/register", authController.signUp); //s'enregistrer
router.post("/login", authController.signIn); //se connecter
router.get("/logout", authController.logout); //se deconnecter

module.exports = router;
