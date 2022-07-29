//UPLOAD.CONTROLLER

const UserModel = require("../models/user.model");
const fs = require("fs");
// const { promisify } = require("util");
// const pipeline = promisify(require("stream").pipeline);
const { uploadErrors } = require("../utils/errors.utils");

//Ajouter une image
module.exports.uploadProfil = async (req, res) => {
  try {
    // if (
    //   //seul ces format d'image sont autorisés
    //   req.file.detectedMimeType != "image/jpg" &&
    //   req.file.detectedMimeType != "image/png" &&
    //   req.file.detectedMimeType != "image/jpeg"
    // )
    //   throw Error("fichier invalide...");
    // if (req.file.size > 500000) throw Error("taille maximum...");
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });
  }
  //converti la convention de nomage en .jpg et ecrase les éventuelles anciennes images
  const fileName = req.body.name + ".jpg";

  // await pipeline(
  //   req.file.stream,
  //   fs.createWriteStream(`${__dirname}./uploads/profil/${fileName}`)
  // );

  //modifier une image par une autre
  try {
    await UserModel.findByIdAndUpdate(
      req.body.userId,
      { $set: { picture: "/img" + fileName } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
