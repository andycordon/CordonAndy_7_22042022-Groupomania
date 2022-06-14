const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    prenom: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
    },
    nom: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png",
    },
    bio: {
      type: String,
      max: 1024,
    },
    likes: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

// play function before save into display: 'block',
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
