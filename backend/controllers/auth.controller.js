//AUTH.CONTROLLER.JS

const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { signUpErrors, signInErrors } = require("../utils/errors.utils");

const tokenLimit = "12h";
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: tokenLimit,
  });
};

module.exports.signUp = async (req, res) => {
  console.log(req.body);
  const { prenom, nom, email, password } = req.body;
  console.log({ prenom, nom, email, password });
  try {
    const user = await UserModel.create({ prenom, nom, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    console.log(err);
    const errors = signUpErrors(err);
    res.status(200).send({ errors });
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, tokenLimit });
    res.status(200).json({ user: user._id });
  } catch (error) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { tokenLimit: 1 });
  res.redirect("/");
};
