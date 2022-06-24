//DATABASE

const mongoose = require("mongoose");

//Connexion à la base de donnée MongoDB
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_LINK}`, //variable environnement User/mot de passe/lien
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Bienvenue sur MongoDB !"))
  .catch(() => console.log("Echec de connexion à MongoDB..."));
