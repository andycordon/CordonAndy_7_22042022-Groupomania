//SERVER.JS

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/dataBase");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const app = express();

//Parser
app.use(bodyParser.json()); //lecture du body
app.use(bodyParser.urlencoded({ extended: true })); //lecture URL
app.use(cookieParser()); //lecture des cookies

//Sécurisation de la connection avec jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

//routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
