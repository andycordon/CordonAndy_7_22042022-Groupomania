//USER.ROUTES.JS

const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
//const multer = require("multer");

// auth
router.post("/register", authController.signUp); //s'enregistrer
router.post("/login", authController.signIn); //se connecter
router.get("/logout", authController.logout); //se deconnecter

//user
router.get("/", userController.getAllUsers); //Récupération de tout les Users
router.get("/:id", userController.userInfo); //Récupération des infos User
router.put("/:id", userController.updateUser); //Mise à jour de User
router.delete("/:id", userController.deleteUser); //Suppression d'un User

module.exports = router;
