//SERVER

const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/dataBase");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const cors = require("cors");
const app = express();
const path = require("path");

//gestion des cors
const corsOptions = {
  origin: process.env.FRONTEND_URL, //variable d'envronnement frontend
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", //pour acceptation de toutes les requettes
  preflightContinue: false,
};
app.use(cors(corsOptions));

//Parser
app.use(express.json()); //lecture du body
app.use(express.urlencoded({ extended: true })); //lecture URL
app.use(cookieParser()); //lecture des cookies

//Pour l'envoie des images
app.use("/img", express.static(path.join(__dirname, "img")));

//Sécurisation de la connection avec jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user?._id);
});

//routes principales
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

//connection au server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`); //variable d'environement backend
});
