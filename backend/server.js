//SERVER.JS

const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config/.env" });
require("./config/dataBase");
const userRoutes = require("./routes/user.routes");
const app = express();

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/api/user", userRoutes);
