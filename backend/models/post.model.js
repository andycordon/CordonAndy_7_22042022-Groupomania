//POST.MODEL

const mongoose = require("mongoose");

//Schema pour Post
const PostSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      trim: true, //evite les espaces de texte vide
      maxlength: 5000,
    },
    picture: {
      type: String,
    },
    likers: {
      type: [String],
      required: true,
    },
    comments: {
      type: [
        {
          commenterId: String,
          commenterPseudo: String,
          text: String,
          timestamp: Number, //indication de la temporalité des posts
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true, //indication de la temporalité des posts
  }
);

module.exports = mongoose.model("post", PostSchema);
