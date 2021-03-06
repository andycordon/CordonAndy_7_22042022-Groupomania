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
      trim: true,
      maxlength: 240,
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
          commenterPrenom: String,
          commenterNom: String,
          text: String,
          timestamp: Number,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true, //indication de la temporalit√© des posts
  }
);

module.exports = mongoose.model("post", PostSchema);
