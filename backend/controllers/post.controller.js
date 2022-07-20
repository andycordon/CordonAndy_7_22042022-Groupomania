//POST.CONTROLLER

const PostModel = require("../models/post.model");
const UserModel = require("../models/user.model");
const { uploadErrors } = require("../utils/errors.utils");
const ObjectID = require("mongoose").Types.ObjectId;
//const fs = require("fs");
//const { promisify } = require("util");
//const pipeline = promisify(require("stream").pipeline);

//Recuperation de tous les Posts
module.exports.readPost = (_req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Erreur d'obtention des données : " + err);
  }).sort({ createdAt: -1 }); //trier les posts du plus recent au plus ancien
};

//Création d'un Post depuis un User
module.exports.createPost = async (req, res) => {
  let fileName;

  if (req.file !== null) {
    try {
      // if (
      //   req.file.detectedMimeType != "image/jpg" &&
      //   req.file.detectedMimeType != "image/png" &&
      //   req.file.detectedMimeType != "image/jpeg"
      // )
      //   //Type de fichier accéptés
      //   throw Error("fichier invalide...");
      // if (req.file.size > 500000) throw Error("taille maximum..."); //Poids maximum des fichiers
    } catch (err) {
      console.log(err);
      const errors = uploadErrors(err);
      return res.status(201).json({ errors });
    }
    fileName = req.body.posterId + Date.now() + ".jpg"; //ajout de nommage date + extension pour le rendre unique
    console.log(fileName);
    // await pipeline(
    //   req.file.stream,
    //   fs.createWriteStream(
    //     `${__dirname}../../frontend/public/uploads/posts/${fileName}` //les fichiers prennent ce chemin
    //   )
    // );
  }
  console.log("hello avant new post");
  const newPost = new PostModel({
    posterId: req.body.posterId,
    message: req.body.message,
    // picture: req.file !== null ? "./uploads/posts/" + fileName : "",
    // video: req.body.video,
    likers: [],
    comments: [],
  });
  console.log("hello APRES new post");
  console.log(newPost);
  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};

//Modification d'un Post déjà poster
module.exports.updatePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  const updatedRecord = {
    message: req.body.message,
  };

  PostModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Erreur lors de la mise à jour du post : " + err);
    }
  );
};

//Suppression d'un Post en ligne
module.exports.deletePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  PostModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Erreur lors de la suppression : " + err);
  });
};

//liker un post
module.exports.likePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likers: req.body.id },
      },
      { new: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));

    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $addToSet: { likes: req.params.id },
      },
      { new: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).json;
  }
};

//unliker un post
module.exports.unlikePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likers: req.body.id },
      },
      { new: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));

    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $pull: { likes: req.params.id },
      },
      { new: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).json;
  }
};

//commenter un post
module.exports.commentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: {
            commenterId: req.body.commenterId,
            commenterPseudo: req.body.commenterPseudo,
            text: req.body.text,
            timestamp: new Date().getTime(),
          },
        },
      },
      { new: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};

//modifier un commentaire
module.exports.editCommentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  try {
    return PostModel.findById(req.params.id, (err, docs) => {
      const theComment = docs.comments.find((comment) =>
        comment._id.equals(req.body.commentId)
      );

      if (!theComment) return res.status(404).send("Commentaire non trouvé...");
      theComment.text = req.body.text;

      return docs.save((err) => {
        if (!err) return res.status(200).send(docs);
        return res.status(500).send(err);
      });
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

//supprimer le commentaire d'un post
module.exports.deleteCommentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID inconnue : " + req.params.id);

  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          comments: {
            _id: req.body.commentId,
          },
        },
      },
      { new: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).json;
  }
};
