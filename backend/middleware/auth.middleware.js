//AUTH.MIDDLEWARE

const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

//Verification que l'User est connecter avec token
module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

//Controle du token avec la base de donnée
module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.send(200).json("Il n'y a pas de token de connexion...");
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log("Il n'y a plus de token de connexion...");
  }
};
