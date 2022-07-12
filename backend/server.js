//SERVER

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/dataBase");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const cors = require("cors");

const app = express();

//gestion des cors
const corsOptions = {
  origin: process.env.FRONTEND_URL, //variable d'envronnement frontend
  withCredentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", //pour acceptation de toutes les requettes
  preflightContinue: false,
};
app.use(cors(corsOptions));

//Parser
app.use(bodyParser.json()); //lecture du body
app.use(bodyParser.urlencoded({ extended: true })); //lecture URL
app.use(cookieParser()); //lecture des cookies

//Sécurisation de la connection avec jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

//routes principales
app.use("/api/user", userRoutes); //route pour les Users
app.use("/api/post", postRoutes); //route pour les Posts

//connection au server
app.listen(process.env.PORT, () => {
  console.log(`Vous êtes bien sur le port ${process.env.PORT} !`); //variable d'environement backend
});
