//AUTH.CONTROLLER

const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { signUpErrors, signInErrors } = require("../utils/errors.utils");

//création d'un token
const tokenLimit = "12h"; //temps d'expiration d'un token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: tokenLimit,
  });
};

//inscription
module.exports.signUp = async (req, res) => {
  const { pseudo, email, password } = req.body;

  try {
    const user = await UserModel.create({
      pseudo,
      email,
      password,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors });
  }
};

//connexion
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, tokenLimit });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

//déconnexion
module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { tokenLimit: 1 }); //pour supprimer le token à la déconnexion
  res.redirect("/"); //retourner à la racine à la déconnexion
};
