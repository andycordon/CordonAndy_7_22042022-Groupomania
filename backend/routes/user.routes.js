//USER.ROUTES

const router = require("express").Router();

const userController = require("../controllers/user.controller");
const uploadController = require("../controllers/upload.controller");
const multer = require("../middleware/multer-config");

//routes pour user
router.get("/", userController.getAllUsers); //récupération de tous les Users
router.get("/:id", userController.userInfo); //récupération des infos User
router.put("/:id", userController.updateUser); //mise à jour de User
router.delete("/:id", userController.deleteUser); //suppression d'un User

//route pour upload
router.post("/upload", multer, uploadController.uploadProfil); //ajouter une image

module.exports = router;
