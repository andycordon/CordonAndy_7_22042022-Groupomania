//USER.CONTROLLER

const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

//Récupération de tous les Users
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password -email"); //récupération de tous les Users sauf les passwords et emails
  res.status(200).json(users);
};

//Récupération des infos User
module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID inconnu : " + err);
  }).select("-password -email"); // récupération de User sauf password et emails
};

//Mise à jour de User
module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

//Suppression d'un User
module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Suppression réussie !" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
